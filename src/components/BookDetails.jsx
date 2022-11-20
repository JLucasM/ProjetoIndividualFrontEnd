import React, { useState, useEffect } from "react";
import '../App.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { BOOK_DETAILS_URL } from "../API";

const BookDetails = () => {

    const [book, setBook] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BOOK_DETAILS_URL}/${id}`)
            .then(res => {
                setBook(res.data);
            }).catch(err => console.log(err));
    }, [id]);

    return <div className="book-details">
        <div className="book-poster">
            <h2>{book?.title}</h2>
            <img src={book?.image_url} alt="#" />
        </div>
        <div className="book-description">
            <h4>Description</h4>
            <p>{book?.description}</p>
            <h4>Authors</h4>
            <p>{book?.authors}</p>
            <h4>Genres</h4>
            <p>{book?.genres}</p>
        </div>
    </div>
}

export default BookDetails;
