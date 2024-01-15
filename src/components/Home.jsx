import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import TopAnime from "./TopAnime.jsx";



const Home = (props) => {
    let navigate = useNavigate();


    const [animes, setAnime] = useState([]);
    const [search, setSearch] = useState("");
    let message;
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
        if (animes.length === 0) {
            message = 'Aucun anime';
            console.log('nop')
        }
    };

    let randomImage = Math.floor( 1 + (Math.random() * (20-1)));
    console.log(randomImage);

    return (
        <>


            <header className={'container mx-auto'}>
                {/*<div style={{ backgroundImage: `url("${animes[randomImage]?.images?.jpg?.image_url}")` }}>*/}
                {/*</div>*/}
                <div className={''}>   Lové manga</div>
            </header>


            <h1 className="text-3xl text-center font-bold ">
                Liste des mangas
            </h1>

            <div>
                <input type="text" ref={inputRef} placeholder="Animes"/>
                <button onClick={searchAnime}>Search</button>
            </div>

            <section className={'listManga container mx-auto'}>
                <h2 className={'text-center'}>Populaire</h2>
                <div className={'grid lg:grid-cols-3 gap-2 md:grid-cols-1 container mx-auto'}>
                <TopAnime/>
                </div>
            </section>

            <section className={'mangaPopulaire'}>

    <h2>liste anime</h2>
                <div className={'grid lg:grid-cols-3 gap-2 md:grid-cols-1 container mx-auto'}>
                {animes ?
                    animes.map((anime, index) => (
                        <div className={'card'} key={index} onClick={()=>navigate(`/${anime.mal_id}`)}>
                            <img src={anime.images.jpg.image_url} alt=""/>
                            <h2>{anime.title}</h2>

                        </div>
                    )) : <h2>{message}</h2>}

                </div>
            </section>
        </>
    );
};

export default Home;
