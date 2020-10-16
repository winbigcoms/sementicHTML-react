import React from "react";
import "./main.css"
export default function Main(){
  return (
    <div className="mainContainer">
      <main className="main">
        <section className="main_banner">
          <h2 className="mainHeading">ALWAYS BESIDE YOU <span>EDIYA COFFEE</span></h2>
          <span className="mainDiviedLine"></span>
          <p className="main_slogan">늘 당신 곁에, 이디야 커피의 다양한 메뉴를 맛보세요</p>
          <a className="main_show_menu_btn" href="./beverage" role="button">메뉴 보기</a>
          <img className="main_new_beverage_img_left" src="/images/cheese-cookie.png" alt="치즈가 쿠키했대 쉐이크 이미지"/>
          <img className="main_new_beverage_img_right" src="/images/choco-rice.png" alt="초코 묻고 더블 쉐이크, 밥 대신 라이스 쉐이크 이미지"/>
        </section>
        <section className="main_promotion">
          <h2 className="a11y_hidden">메인페이지 프로모션</h2>
          <div className="main_promption_container">
            <section className="main_ediya_youtube">
              <figure>
               <iframe 
                src="https://www.youtube.com/embed/UGPo0RqhbKU" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                <figcaption></figcaption>
              </figure>
            </section>
            <div className="main_newsNotice_continer">
              <section className="main_notice">
                <div></div>
                <div></div>
              </section>
              <section className="main_news"> 

              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}