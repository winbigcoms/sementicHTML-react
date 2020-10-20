import React from 'react'
import "./menu.css"
import menuInfo from "../../data/beverages.json"
import { useCallback } from 'react'
import { useState } from 'react'
import GoTopBtn from '../goTopBtn/goTopBtn'
export default function Menu () {

  const [toggled,setDetail] = useState({
    open:[]
  });
  const toggleClass = useCallback((e,idx)=>{
    const newState = [...toggled.open]; 
    if(toggled.open.includes(idx)){
      newState.splice(toggled.open.indexOf(idx),1);
      setDetail({...toggled,open: newState})
    }else{
      newState.push(idx)
      setDetail({...toggled,open:newState})
    }
  },[toggled]);

  const checkOpen = idx => {
    return toggled.open.includes(idx)?"menu_description_box active":"menu_description_box"
  }
  return(
    <main className="menuPage">
      <section className="menuContainer">
        <h2 className="a11y_hidden">메뉴페이지</h2>
        <ul className="menu">
          {menuInfo.data.map((menu,idx)=>(
            <li key={idx} id={idx} className="menuCard" onClick={(e)=>{toggleClass(e,idx)}}>
               <figure>
                  <img src={menu.figure.src} width={menu.figure.width} height={menu.figure.height} className={menu.detail.en} alt=""/>
                  <figcaption>{menu.figure.name}</figcaption>
               </figure>
               <div className={checkOpen(idx)} > 
                  <h3 className="a11y_hidden">{menu.figure.name}설명</h3>
                  <dl className="menu_description">
                    <dt className="menu_description_title">
                      {menu.detail.ko}
                      <span>{menu.detail.en}</span>
                    </dt>
                    <dd>{menu.detail.desc}</dd>
                  </dl>
                  <dl className="menu_desc_cirt">
                   <dt className="a11y_hidden">성분분석표</dt>
                   <dd>
                     <table className="menu_cirt_table">
                       <tbody>
                        <tr>
                          <td>
                            {menu.detail.display_criteria[0][0]}
                          </td>
                          <td>
                            ({menu.detail.display_criteria[0][1]})
                          </td>
                          <td>
                            {menu.detail.display_criteria[1][0]}
                          </td>
                          <td>
                            ({menu.detail.display_criteria[1][1]})
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {menu.detail.display_criteria[2][0]}
                          </td>
                          <td>
                            ({menu.detail.display_criteria[2][1]})
                          </td>
                          <td>
                            {menu.detail.display_criteria[3][0]}
                          </td>
                          <td>
                            ({menu.detail.display_criteria[3][1]})
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {menu.detail.display_criteria[4][0]}
                          </td>
                          <td>
                            ({menu.detail.display_criteria[4][1]})
                          </td>
                          <td>
                            {menu.detail.display_criteria[5][0]}
                          </td>
                          <td>
                            ({menu.detail.display_criteria[5][1]})
                          </td>
                        </tr>
                       </tbody>
                     </table>
                   </dd>
                  </dl>
                  <button className="menu_description_close_btn">
                    <span className="menu_description_close_cross_left"></span>
                    <span className="menu_description_close_cross_right"></span>
                  </button>
               </div>
            </li>
          ))}
        </ul>
        <GoTopBtn/>
      </section>
    </main>
  )
}