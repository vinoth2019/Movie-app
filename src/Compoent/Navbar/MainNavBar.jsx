import { Link } from "react-router-dom";

const MainNavBar = ({show}) => {
 
  return (
    <>
       {!show && <div className="navbarcontainer">   
       
          <nav>
           <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/hdmovies" >Hollywood Movies</Link></li>
                    <li><Link to="/newmovies" >Tamil Movies</Link></li>
                    <li><Link to="/webseries" >Web Series</Link></li>
                    <li><Link to="/contactus" >Contact Us</Link></li>
              </ul>
            </nav>
            
          
        </div>}

        <div className="navbarcontainer-desktop">   
       
          <nav>
           <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/hdmovies" >Hollywood Movies</Link></li>
                    <li><Link to="/newmovies" >Tamil Movies</Link></li>
                    <li><Link to="/webseries" >Web Series</Link></li>
                    <li><Link to="/contactus" >Contact Us</Link></li>
              </ul>
            </nav>
            
          
        </div>
         
    </>
   
  )
}

export default MainNavBar