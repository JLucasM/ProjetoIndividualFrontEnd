import React from "react";
import '../App.css';
import { useAppContext } from "./context/appContext";

const Favorites = () => {
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    console.log('favorites are', favorites);

    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    };

    return (
        <div className="favorites">
            {favorites.map((book) => (
                <div key={book.id} className="book">
                    <div>
                        <h4>{book.title}</h4>
                    </div>
                    <div>
                        <img src={book.image_url} alt="book poster" />
                    </div>
                    <div className="mt-2 rounded">
                        {favoritesChecker(book.id) ? (
                            <button onClick={() => removeFromFavorites(book.id)}>
                                Remova dos Favoritos
                            </button>
                        ) : (
                            <button onClick={() => addToFavorites(book)}>
                                Adicione aos Favoritos
                            </button>
                        )}

                    </div>
                </div >
            ))
            }
        </div>
    );
};

export default Favorites;
