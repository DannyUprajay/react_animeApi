import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    let navigate = useNavigate();

    // const [url, setUrl] = useState("https://api.jikan.moe/v4/anime?q=naruto");
    // const [url, setUrl] = useState("https://api.jikan.moe/v4/anime");
    const [animes, setAnime] = useState([]);
    const [search, setSearch] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}`);
                setAnime(res.data.data);
                console.log(res.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [search]);

    const searchAnime = () => {
        setSearch(inputRef.current.value);
        console.log(inputRef.current.value);
    };

    return (
        <>
            <h1 className="text-3xl text-center font-bold ">
                Liste des mangas
            </h1>

            <div>
                <input type="text" ref={inputRef} placeholder="Search Marvel..." />
                <button onClick={searchAnime}>Search</button>
            </div>

            <section>


                {animes.map((anime,index) =>(
                    <div key={index}>
                    <h2>{anime.title}</h2>
                        <img src={anime.images.jpg.image_url} alt=""/>
                    </div>
                ))}


            </section>
        </>
    );
};

export default Home;
