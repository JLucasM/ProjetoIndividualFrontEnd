import React, { useState, useEffect } from "react";
import '../App.css';
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const BookList = () => {
    const [books, setBooks] = useState([]);

    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const navigate = useNavigate();

    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    }

    useEffect(() => {
        axios.get(API_URL).then(res => {
            console.log(res.data)
            setBooks(res.data)
        })
            .catch(err => console.log(err));
    }, []);

    return <div className="book-list">
        {books.map((book) => (
            <div key={book.id} className="book">
                <div>
                    <h4>{book.title}</h4>
                </div>
                <div>
                    <img src={book.image_url} alt="book poster" onClick={() => navigate(`/books/${book.id}`)} />
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
        ))}
    </div >

}


export default BookList;
