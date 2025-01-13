import { useEffect, useRef, useState } from "react";
import cards_data from "../assets/cards/Cards_data";
import { Link } from "react-router-dom";


const TitleCard = ({title,category}) => {

    const [apiData, setApiData] = useState([]);

    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDZhZTQ4ZDNiMDUyOTkwYjUyNzY5OWFlYzQ2YzU1YSIsIm5iZiI6MTczNTMwNDA5Ny4yODEsInN1YiI6IjY3NmVhM2ExY2ZlNjI2NDRkZjEyYjdmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.16pDm9_K3eyzhyO_Xn-78ILb9cKifRbo2iEo1h_7fDQ'
        }
      };
      
      
    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }
    
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results))
        .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel);
    },[])

    return (
        <div className="mt-[50px] mb-[30px] pl-[6%]">
            <h2 className="mb-2 font-semibold">{title?title:"Popular on Netflix"}</h2>
            {/* card list */}
            <div className="flex gap-[10px] overflow-x-scroll no-scroll  " ref={cardsRef} >
                {apiData.map((items, index) => {
                  return <Link to={`/player/${items.id}`} className="" key={index}>
                    <img className="relative  max-w-[240px] max-h-[240px] cursor-pointer rounded-sm" src={`https://image.tmdb.org/t/p/w500/`+items.poster_path} alt="" />
                    <p className="inherit b-[10px] right-[10px] inherit decoration-none ">{items.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    );
}

export default TitleCard;