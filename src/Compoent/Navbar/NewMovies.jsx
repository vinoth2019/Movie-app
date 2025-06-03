import FeedData from "../../FeedData";
const NewMovies = () => {
  const tamilMovies = {
     gsheet: "https://docs.google.com/spreadsheets/d/",
     gid:"1Bp0Tg6erru3rimArqrm9eqxjlUXDhro4oJLggEQ40_w"
  }
  const card = true;
  return (
    <>
       {/* <MainPage />  */}
       <div>
          <FeedData googleSheet={tamilMovies.gsheet} googleId={tamilMovies.gid} card={card}/>
       </div>
    </>
   
  )
}

export default NewMovies