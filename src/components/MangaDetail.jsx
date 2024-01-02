import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from "react";

const MangaDetail = () => {
    const { id } = useParams();
    const [animes, setAnime] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://api.jikan.moe/v4/anime/${id}`
                );
                setAnime(res.data.data);
                console.log(res.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <>
            <h3>{animes.title}</h3>
            <img src={`${animes?.images?.jpg?.image_url}`} alt=""/>

            {animes ? (
                animes.genres?.map((genre, index) => (
                <p key={index}>{genre.name}</p>
            ))):''}

            <p>{animes.synopsis}</p>
            <video src={`${animes?.trailer?.embed_url}`}></video>

        </>
    );
}

export default MangaDetail;
