import MovieCard from "../Navbar/MovieCard"; 
import Footer from '../Footer.jsx';
const MainPage = ({data}) => {     
    return (
        <div className="mainpage">
            <ul>
                {data.map((row, index) => {
                    const cells = row.c;
                    return (
                        <li key={index}>
                            <MovieCard
                                id={cells[0]?.v}
                                print={cells[1]?.v}
                                name={cells[2]?.v}
                                img={cells[5]?.v}
                                url={cells[6]?.v}
                            />
                        </li>
                    );
                })}
            </ul>
            <Footer />
        </div>
    );
};

export default MainPage;
