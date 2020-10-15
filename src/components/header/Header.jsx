import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
export default function HeaderComponent(){
  const [moblieMenuState,setMoblieMenuState] = useState(false);
  const showMoblieMenu = useCallback(()=>{
    setMoblieMenuState((state)=>!state);
  },[])
  return(
    <div className="header_container">
      <header className="header">
        <h2 className="header_heading">
          <Link to="/">
            <img className="header_logo" src="/images/brand.svg" alt="이디야 로고"/>
          </Link>
        </h2>
        <button className="header_nav_burgerBtn" onClick={showMoblieMenu}>
          <span className="burger_top"></span>
          <span className="burger_middle"></span>
          <span className="burger_bottom"></span>
        </button>
        <ul className={moblieMenuState? "header_nav" : "header_nav_close"}>
          <li>
            <a href="./login">로그인</a>
          </li>
          <li>
            <a href="./signUp">회원가입</a>
          </li> 
          <li>
            <a href="./beverage">이디야 음료</a>
          </li>
        </ul>
      </header>
    </div>
  )
}