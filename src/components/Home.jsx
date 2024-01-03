import React,{useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import MangaGenre from "./MangaGenre.jsx";


const Home = (props) => {
let navigate = useNavigate()

    const [url, setUrl] = useState('https://api.jikan.moe/v4/anime');
    const [animes, setAnime] = useState([]);
    // const [selectedGenre, setselectedGenre] = useState();
    const [search, setSearch] = useState("");

    const handleClick = (valeur) => {
        console.log("Valeur cliquée :", valeur);

    };

    useEffect(() => {
        const fetchData = async ()=>{
            try {
                const res = await axios.get(url);
                setAnime(res.data.data);
                console.log(res.data.data)
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        }
        fetchData();
    }, []);


    const searchAnime=()=>{
        setUrl(`https://api.jikan.moe/v4/anime${search}`)
    }
    return (
        <>


        <h1 className="text-3xl text-center font-bold ">
          Liste des mangas
        </h1>

            <input type="text" placeholder="Search Marvel..." onChange={e=>setSearch(e.target.value)}
                   onKeyPress={searchAnime}/>

            <section className={'flex items-center'}>
                <div className={'grid grid-cols-4 lg:grid-cols-4 gap-2 md:grid-cols-1 container mx-auto'}>

                    {animes.map((anime, index) => (
                        <div className={'card col'} key={anime.mal_id} onClick={() => navigate(`/${anime.mal_id}`)}>
                            <img className={'cursor-pointer'} src={`${anime.images.jpg.image_url}`} alt="" />
                            {anime.genres.map((genre, index) => (
                                <div key={index}>
                                    <h2>{genre.name}</h2>
                                    <p>{genre.type}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

        {/*<MangaGenre/>*/}
        </>
    )
}

export default Home;