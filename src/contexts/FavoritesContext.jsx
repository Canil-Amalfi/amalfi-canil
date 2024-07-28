import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FavoritesContext = createContext()
FavoritesContext.displayName = 'favorites'

export default function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState([])

    return (
        <FavoritesContext.Provider value={{favorites, setFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}

FavoritesProvider.propTypes = {
    children: PropTypes.node.isRequired
}

