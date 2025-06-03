import { Outlet } from "react-router-dom"
import MainNavBar from "./MainNavBar";   
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const RootLayout = () => {
   const [check, setCheck] = useState(true);
  const checkNav = () => {
    setCheck(!check)
  }
  console.log(check)
  return (
    <>
         <div className="nav-svg">
            <div onClick={checkNav}> {check ? <IoReorderThreeOutline /> : <IoCloseSharp />} </div>
          </div>  
        <MainNavBar show={check}/>       
        <Outlet />       
    </>
  )
}

export default RootLayout