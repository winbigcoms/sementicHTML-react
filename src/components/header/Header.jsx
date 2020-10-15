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
        <button className="header_nav_burgerBtn" aria-label="openNavigation" onClick={showMoblieMenu}>
          <span className="burger_top"></span>
          <span className="burger_middle"></span>
          <span className="burger_bottom"></span>
        </button>
        <nav className={moblieMenuState? "header_nav" : "header_nav_close"}>
          <h3 className="a11y_hidden">메인 메뉴 네비게이션</h3>
          <ul className="header_nav_list">
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
          <button className="header_nav_closeBtn" aria-label="closeNavigation">
            <span className="cross_btn cross_top"></span>
            <span className="cross_btn cross_bottom"></span>
          </button>
        </nav>
      </header>
    </div>
  )
}