import { useEffect, useState } from "react";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: "",
    });
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDZhZTQ4ZDNiMDUyOTkwYjUyNzY5OWFlYzQ2YzU1YSIsIm5iZiI6MTczNTMwNDA5Ny4yODEsInN1YiI6IjY3NmVhM2ExY2ZlNjI2NDRkZjEyYjdmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.16pDm9_K3eyzhyO_Xn-78ILb9cKifRbo2iEo1h_7fDQ'
        }
      };
      
      useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
      },[])


    return (
        <div className="h-[100vh] flex flex-col justify-center items-center">
            <img className="absolute  top-[20px] left-[20px] w-[50px] cursor-pointer" src={back_arrow} alt="" onClick={()=>{navigate(-1)}} />
            <iframe className="rounded-2" width='90%' height='90%'  src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameborder='0' allowFullScreen></iframe>
            <div className="flex items-center justify-between w-[90%]">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    );
}

export default Player;