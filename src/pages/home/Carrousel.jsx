import { useRef, useState } from "react"


export default function Carrousel() {

  const imagesContainer = useRef(null)

  let time = 1000

  
  function changeImg(){
    const images = document.querySelectorAll('.carrousel-img')
    images.forEach(function callback(item, index){
      if (item.classList[1] == 'selected'){
        item.classList.remove('selected')
        
      }
    })
  }

  setInterval(changeImg, 3500)


  return (
    <section className="carrousel">
      <span className="logo">lenses</span>
      <div className="images" ref={imagesContainer}>
        <img src="/images/banner-img-1.jpg" alt="" className="carrousel-img selected"/>
        <img src="/images/banner-img-2.jpg" alt="" className="carrousel-img"/>
        <img src="/images/banner-img-3.jpg" alt="" className="carrousel-img"/>
      </div>
      <div className="infos">
        <h1>Lenses</h1>
        <span>Building Future</span>
        <div className="line"></div>
        <p>
        Experience optical excellence, embrace style, unlock potential. See the difference with Lenses, let your eyes shine.</p>
        <button className="explore-button">explore</button>
      </div>
      <div className="fade"></div>
    </section>
  )
}
