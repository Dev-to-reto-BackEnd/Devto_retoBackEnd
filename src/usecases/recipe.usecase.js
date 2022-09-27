const RecipeMaterials = require("../models/recipe-materials.model");
const Recipe = require("../models/recipe.model");
const {
  createRecipeMaterials,
} = require("../usecases/recipe-materials.usecase");

const getByQuoterId = async (quoterId) => {
  // Obtenemos todas las recetas que le pertenecen al cotizador
  // El metodo `lean` sirve para traer solo la información del documento, evitando los metodos e información extra agregada por mongoose
  // gracias al metodo lean, despues podremos usar el spread para extraer las propiedades
  const quoterRecipes = await Recipe.find({ quoterId }).lean();

  // Obtenemos la lista de materiales de cada una de las recetas
  // El promise all se utiliza para resolver el arreglo de promesas que regresa el map
  const materialsPerRecipe = await Promise.all(
    quoterRecipes.map((recipe) => {
      return RecipeMaterials.find({ recipeId: recipe._id }).populate(
        "materialId"
      );
    })
  );

  // sacamos el total de cada receta
  const totalsPerRecipe = materialsPerRecipe.map((recipeMaterials) => {
    return recipeMaterials.reduce((acumulado, recipeMaterial) => {
      return (
        recipeMaterial.quantity * recipeMaterial.materialId.price + acumulado
      );
    }, 0);
  });

  // agregamos la lista de materiales a su receta correspondiente y se retorna el arreglo
  const recipeWithMaterials = quoterRecipes.map((recipe, index) => {
    return {
      ...recipe,
      materials: materialsPerRecipe[index],
      total: totalsPerRecipe[index],
    };
  });

  return recipeWithMaterials;
};

const createRecipe = async (quoterId, data) => {
  data.quoterId = quoterId;
  const { materials } = data;
  const recipeCreated = await Recipe.create(data);

  for (const material of materials) {
    await createRecipeMaterials({
      recipeId: recipeCreated._id,
      materialId: material.id,
      quantity: material.quantity,
    });
  }
  return recipeCreated;
};

const updateRecipe = (id, data) => {
  return Recipe.findByIdAndUpdate(id, data, { returnDocument: "after" });
};

const deleteRecipe = (id) => {
  return Recipe.findByIdAndDelete(id);
};

module.exports = { createRecipe, updateRecipe, deleteRecipe, getByQuoterId };
