import { createContext, useEffect, useState } from "react";
import { recipes as initialRecipes} from "../data";


export const FavouritesContext = createContext('')

export const FavouritesProvider = ({children}) => {
    
  const savedRecipes = localStorage.getItem('recipes')

  const [recipes, setRecipes] = useState( savedRecipes ? JSON.parse(savedRecipes) : initialRecipes )

  const addInFavouritesList = (id) => {
    
    setRecipes( previous => 

        previous.map( (item) => 
            item.id === id ? {...item, isFavourite: !item.isFavourite} : item
        )

    )

  }

  const favouriteDishesArray = recipes.filter( (item) => item.isFavourite === true)

  useEffect(()=>{
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])
  

  const value = {
    addInFavouritesList,
    recipes,
    favouriteDishesArray
  }

  return (
    <FavouritesContext.Provider value={value}>
        {children}
    </FavouritesContext.Provider>
  )
}