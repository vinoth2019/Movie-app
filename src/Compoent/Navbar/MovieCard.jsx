import { BiSolidHeartCircle } from "react-icons/bi";
import './MovieCard.css';  
import { Link } from "react-router-dom"; 
const MovieCard = ({name, img, print, id, url}) => { 
    
    const clickHanlder = () => {
        // console.log(id, url)  
    }
  return (
   <>
        <Link to={url} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                
        <div className="movieCard-container" onClick={clickHanlder}>
            <div className="thumb">
                <img src={img} alt={name} />
            </div>
            <div className="text-container">
                <h3>{print}</h3>
                <h2>{name}</h2>
                <div className="likes">
                    <BiSolidHeartCircle />
                    <p>11</p>
                </div>
                
            </div>
        </div>
        </Link>
   </>
  )
}

export default MovieCard