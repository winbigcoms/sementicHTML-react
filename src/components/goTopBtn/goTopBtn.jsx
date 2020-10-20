import React, { useState } from "react";
import { useEffect } from "react";
import "./goTopBtn.css"
export default function GoTopBtn (){
  const [visible,setVisible] = useState(false);
  const toggleVisible = ()=>{
    if(window.pageYOffset > 350){
      setVisible(true);
    }else{
      setVisible(false);
    }
  }
  const goTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  useEffect(()=>{
    document.addEventListener("scroll",toggleVisible)
    return ()=>{
      document.removeEventListener("scroll",toggleVisible)
    }
  })
  return (
    <button className={visible?"goTopBtn active":"goTopBtn"} onClick={goTop}></button>
  )
}