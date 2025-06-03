import FeedData from "../../FeedData";
const WebSeries = () => {
    const webseries = {
     gsheet: "https://docs.google.com/spreadsheets/d/",
     gid:"1YvJ8gTG_SfGwZrlcAHo1WXQbhaz0WHvdsuNUKqczCLs"
  }
  const card = true;
    return <>
    <div>
          <FeedData googleSheet={webseries.gsheet} googleId={webseries.gid} card={card}/>
    </div>
    </>
}
export default WebSeries;