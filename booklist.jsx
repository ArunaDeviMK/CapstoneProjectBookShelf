import React ,{useState,useEffect} from "react";
import '../App';
import {API_URL} from '../API';
import axios from 'axios';
import { useAppContext } from "./context/appcontext";
import { useNavigate } from "react-router";

const BookList=()=>{

    const [books,setBooks]=useState([]);

    const {favorites,addToFavorites,removeFromFavorites}=useAppContext();

    const navigate=useNavigate();

    const favoritesChecker=(id)=>{
        const boolean=favorites.some((book)=>book.id===id)
        return boolean;
    }

    console.log('favorites are',favorites);

    useEffect(()=>{
        axios.get(API_URL)
        .then(res=>{console.log(res.data)
        setBooks(res.data)
        })
        .catch(err=>console.log(err))
    },[])
   
    return(
        <div className="booklist">
           {books.map((book)=>(
            <div key={book.id} className="book">
                <div><h4>{book.title}</h4></div>

                <div><img src={book.image_url} alt="#" onClick={()=>navigate(`/books/${book.id}`)}/></div>

                <div>
                    {favoritesChecker(book.id)?(
                        <button onClick={()=>removeFromFavorites(book.id)}>
                        Remove from Favorites
                    </button>
                    ):(
                        <button onClick={()=>addToFavorites(book)}>
                        Add to Favorites
                    </button>
                    )
                    }
                    </div>
            </div>
           ))}
        </div>
    )
}

export default BookList;