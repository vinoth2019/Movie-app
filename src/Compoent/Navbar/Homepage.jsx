import FeedData from '../../FeedData';
import Footer from '../Footer';
import './Homepage.css';
 const Homepage = () => {
   const card = false;
  const hollywood = {
    gsheet: "https://docs.google.com/spreadsheets/d/",
    gid:"1TcsJtf6klZMwE7ZyW6lkvnD9jkTkDBO5eN76CS46UCQ"
  }
  const tamilMovies = {
     gsheet: "https://docs.google.com/spreadsheets/d/",
     gid:"1Bp0Tg6erru3rimArqrm9eqxjlUXDhro4oJLggEQ40_w"
  }
  const webseries = {
     gsheet: "https://docs.google.com/spreadsheets/d/",
     gid:"1YvJ8gTG_SfGwZrlcAHo1WXQbhaz0WHvdsuNUKqczCLs"
  }
  return (
    <>
      <div className='Homepage-container'>      
      <div className='overlay-bg'>
        <div className='banner-container'>
            <div className='banner-clip'></div>
        </div>
        <div className='banner-Head-copy'>
          <h1>Unlimited movies, TV shows and more</h1></div>
          
        <div className='banner-para'><h2>Watch Everything Free!</h2>
        </div>   
      </div>  
      <div>
          <div className='trending-section'>
            <div className='trending-head'><h1>HD Hollywood Trending Movies</h1></div>
            <div className='trending-list'>
              <FeedData googleSheet={hollywood.gsheet} googleId={hollywood.gid} card={card} />
            </div>        
        </div>
        <div className='trending-bottom'></div>
      </div>
      {/* -------------------TAMIL MOVIE LIST------------------- */}
        <div style={{paddingTop: "0"}}>
          <div className='trending-tamil-section'>
            <div className='trending-tamil-head'><h1>Trending Tamil Movies</h1></div>
            <div className='trending-tamil-list'>
              <FeedData googleSheet={tamilMovies.gsheet} googleId={tamilMovies.gid} card={card} />
            </div>        
        </div>
        <div className='trending-tamil-bottom'></div>
      </div>
      {/* -------------------TAMIL Web Seires------------------- */}
        <div style={{paddingTop: "0"}}>
          <div className='trending-tamil-section webseries-section'>
            <div className='trending-tamil-head'><h1>Trending Tamil WebSeries</h1></div>
            <div className='trending-tamil-list'>
              <FeedData googleSheet={webseries.gsheet} googleId={webseries.gid} card={card} />
            </div>        
        </div>
        <div className='trending-tamil-bottom webseries-bottom'></div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Homepage