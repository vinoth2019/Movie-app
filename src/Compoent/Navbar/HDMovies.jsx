import FeedData from '../../FeedData.jsx';  
const HDMovies = () => {
   const hollywood = {
    gsheet: "https://docs.google.com/spreadsheets/d/",
    gid:"1TcsJtf6klZMwE7ZyW6lkvnD9jkTkDBO5eN76CS46UCQ"
  }
  const card = true;
  return (
    <>
       {/* <MainPage />  */}
       <div>
          <FeedData googleSheet={hollywood.gsheet} googleId={hollywood.gid} card={card}/>
       </div> 
    </>
   
  )
}

export default HDMovies