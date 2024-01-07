import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const TopAnime = () => {
    const [url, setUrl] = useState('https://api.jikan.moe/v4/top/anime');
    const [topAnimes, setTopAnime] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        const fetchData =  async () => {
            try {
                const res  = await axios.get(url);
                setTopAnime(res.data.data);
                console.log(res.data.data);
            } catch (error){
                console.log("error")
            }
        }
        fetchData();
    }, [url]);

    return (
        <>
            {topAnimes ?
                topAnimes.map((topAnime) =>(
                    <div key={topAnime.mal_id} onClick={()=>navigate(`/${topAnime.mal_id}`)}>

                 <h2>{topAnime.title}</h2>
                        <img src={topAnime.images?.jpg?.image_url} alt=""/>
                    </div>

             )) : ''
            }
        </>
    )
}

export default TopAnime;