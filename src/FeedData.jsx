import { useEffect, useState } from "react";
import ImageCarousel from './Compoent/Main/ImageCarousel.jsx'; 
import MainPage from "./Compoent/Main/MainPage.jsx";
const FeedData = ({googleSheet, googleId, card}) => {
  const [data, setData] = useState([]);      
      const query1 = "/gviz/tq?";
      const fullUrl = `${googleSheet}${googleId}${query1}`;
      
      useEffect(() => {
          async function getApi() {
              try {
                  const res = await fetch(fullUrl);
                  const text = await res.text();
                  const json = JSON.parse(text.substr(47).slice(0, -2)); 
                  setData(json.table.rows);
              } catch (error) {
                  console.error("Failed to fetch or parse data:", error);
              }
          }
  
          getApi();
      }, [fullUrl]);
console.log(data)
     
  return <>
    {!card && <ImageCarousel data={data} />}
    {card && <MainPage data={data} />} 
  </>
}
export default FeedData;