import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import "./main.css"
export default function Main(){
  const [animationState,setAnimationState] = useState(true);
  const animationControll = useCallback(()=>{
    setAnimationState(animationState => !animationState);
  },[])
  return (
    <div className="mainContainer">
      <main className="main">
        <section className={animationState?["main_banner","on"].join(" "):["main_banner","off"].join(" ")}>
          <h2 className="mainHeading">ALWAYS BESIDE YOU <span>EDIYA COFFEE</span></h2>
          <span className="mainDiviedLine"></span>
          <p className="main_slogan">늘 당신 곁에, 이디야 커피의 다양한 메뉴를 맛보세요</p>
          <a className="main_show_menu_btn" href="./beverage" role="button">메뉴 보기</a>
          <img className="main_new_beverage_img_left" src="/images/cheese-cookie.png" alt="치즈가 쿠키했대 쉐이크 이미지"/>
          <img className="main_new_beverage_img_right" src="/images/choco-rice.png" alt="초코 묻고 더블 쉐이크, 밥 대신 라이스 쉐이크 이미지"/>
          <button className="animationController" onClick={animationControll}>
            <span aria-label="animationControllerBoll" className={animationState?["animationControllerBoll","on"].join(" "):["animationControllerBoll","off"].join(" ")}></span>
          </button>
        </section>
        <section className="main_promotion">
          <h2 className="a11y_hidden">메인페이지 프로모션</h2>
          <div className="main_promption_container">
            <section className="main_ediya_youtube">
              <figure>
               <iframe 
                src="https://www.youtube.com/embed/UGPo0RqhbKU" 
                frameBorder="0" 
                allow="autoplay;" 
                allowFullScreen
                ></iframe>
                <figcaption className="a11y_hidden">이디야 고객감사 영상</figcaption>
              </figure>
            </section>
            <div className="main_newsNotice_continer" aria-label="메인페이지 알림창">
              <section className="main_notice">
                <h3>NOTICE</h3>
                <div className="main_notice_controller">
                  <div className="main_notice_controller_btnBox">
                    <button className="main_notice_controller_btn_prv">
                      <span></span>
                    </button>
                    <button className="main_notice_controller_btn_next">
                      <span></span>
                    </button>
                  </div>
                </div>
                <article className="main_notice_view">
                  <h4>이디야 멤버스가 새로워집니다.</h4>
                  <time>2020.04.25</time>
                  <p>이디야 멤버스에 새로운 기능이 추가됩니다. 추가되는 고객등급제, 이디야 카드, 스마트 카드</p>
                </article>
              </section>
              <section className="main_news"> 
                <h3>NEWS</h3>
                <article>
                    <h4>이디야 커피, 조걱 케이크 2종 출시... 디저트 강화</h4>
                    <time dateTime="2020-09-08">2020.09.08</time>
                </article>
                <article>
                    <h4>이디야 커피, '비니스트 커피믹스...</h4>
                    <time dateTime="2020-08-27">2020.08.27</time>
                </article>
                <button className="main_news_btn_box">
                  <span className="main_more_news_btn_row"></span>
                  <span className="main_more_news_btn_col"></span>
                </button>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}