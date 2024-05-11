import "../../styles/RecipePage.scss";
export const RecipePage = () => {
  return (
    <div className="recipe-component">
      <div className="recipe-component__introduction">
        <img className="image image--rounded" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-122861-376464.jpg&fm=jpg" />
        <h1 className="text-title">Simple Omlette Recipe</h1>
        <p className="text-desc">An easy quick dish, perfect for any meal. This classic omlette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats</p>
        <div className="prepare-list">
          <h3 className="title title--red title--bold">Preparation time</h3>
          <ul className="list-prepare" >
            <li className="list-prepare__item">
              <p><strong>Total:</strong> Appoximately 10 minutes</p>
            </li>
            <li className="list-prepare__item">
              <p> <strong>Preparation: </strong>5 minutes</p>
            </li>
            <li className="list-prepare__item">
              <p><strong>Cooking:</strong> 10 minutes</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="recipe-component__ingredient">
        <h1 className="text text--yellow">Ingredients</h1>
        <ul className="list-ingredients">
          <li className="list-ingredients__item"><p>2 - 3 large egges</p></li>
          <li className="list-ingredients__item"><p>2 Salt, to taste</p></li>
          <li className="list-ingredients__item"><p>Pepper, to taste</p></li>
          <li className="list-ingredients__item"><p>1 tablespoon of butter or oil</p></li>
          <li className="list-ingredients__item"><p>Optional fillings cheese, diced vegetables, cooked meats, herbs</p></li>
        </ul>
        <hr className="divider" />
      </div>
      <div className="recipe-component__instruction">
        <h1 className="text text--yellow">Instructions</h1>
        <ol className="list-instructions">
          <li className="list-instructions__item"> <p><strong>Beat the egges:</strong> In a bowl, beat the egges with a pinch of salt and pepper until they are well mixed. You can add a table spoon of water or milk for a fluffier texture</p></li>
          <li className="list-instructions__item"> <p><strong>Heat the pan:</strong> In a bowl, beat the egges with a pinch of salt and pepper until they are well mixed. You can add a table spoon of water or milk for a fluffier texture</p></li>
          <li className="list-instructions__item"> <p><strong>Cook the omlette:</strong> In a bowl, beat the egges with a pinch of salt and pepper until they are well mixed. You can add a table spoon of water or milk for a fluffier texture</p></li>
          <li className="list-instructions__item"> <p><strong>Add fillings (Optional):</strong> In a bowl, beat the egges with a pinch of salt and pepper until they are well mixed. You can add a table spoon of water or milk for a fluffier texture</p></li>
          <li className="list-instructions__item"> <p><strong>Cook the omlette:</strong> In a bowl, beat the egges with a pinch of salt and pepper until they are well mixed. You can add a table spoon of water or milk for a fluffier texture</p></li>
          <li className="list-instructions__item"> <p><strong>Add fillings (Optional):</strong> In a bowl, beat the egges with a pinch of salt and pepper until they are well mixed. You can add a table spoon of water or milk for a fluffier texture</p></li>
        </ol>
      </div>
      <div className="recipe-component__nutrition">
        <h1 className="text text--yellow">Nutrition</h1>
        <p className="text-desc">The table below shows nutritional values per serving without the additional fillings</p>
        <table className="nutrition-table">
          <tr className="nutrition-table__item">
            <td>Calories</td>
            <th>277kcal</th>
          </tr>
          <tr className="nutrition-table__item">
            <td>Carbs</td>
            <th>0g</th>
          </tr>
          <tr className="nutrition-table__item">
            <td>Protein</td>
            <th>20g</th>
          </tr>
          <tr className="nutrition-table__item">
            <td>Fat</td>
            <th>22g</th>
          </tr>
        </table>
      </div>
    </div>
  )
}