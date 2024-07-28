import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

export default function useFavoriteContext() {
    const {favorites, setFavorites} = useContext(FavoritesContext)

    const addFavorite = (newFavorite) => {
        const thereIsFavorite = favorites.some(favorite => favorite.id === newFavorite.id)

        let newList = [...favorites]

        if(!thereIsFavorite) {
            newList.push(newFavorite)
            return setFavorites(newList)
        }

        newList = newList.filter(favorite => favorite.id !== newFavorite.id)

        return setFavorites(newList)
    }


    return {
        favorites,
        addFavorite
    }
}