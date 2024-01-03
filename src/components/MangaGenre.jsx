import React, { useState, useEffect } from "react";
import axios from "axios";

const MangaGenre = (props) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get("https://api.jikan.moe/v4/genres/anime");
                setGenres(response.data.data || []); //
            } catch (error) {
                console.error("Error fetching genres", error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <>
            <h2>Genres</h2>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.mal_id}>{genre.name}</li>
                ))}
            </ul>
        </>
    );
};

export default MangaGenre;
