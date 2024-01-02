import React,{useState, useEffect} from "react";
import axios from "axios";




const Home = (props) => {


    const [url, setUrl] = useState('https://api.jikan.moe/v4/anime');
    const [animes, setAnime] = useState([]);

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

    return (
        <>


        <h1 className="text-3xl text-center font-bold ">
          Liste des mangas
        </h1>


            <section className={'flex items-center'}>
                <div className={'grid grid-cols-4 lg:grid-cols-4 gap-2 md:grid-cols-1 container mx-auto'}>

                    { animes ? (

                   animes.map((anime, index) => (
                        <div className={'card col'} key={index}>
                            <h2>{anime.title}</h2>
                            <img src={`${anime.images.jpg.image_url}`} alt=""/>
                        </div>
                    ))
                    ):''
                    }
                </div>
            </section>


        </>
    )
}

export default Home;