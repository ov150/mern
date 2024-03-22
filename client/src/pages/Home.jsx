// import React from 'react'

const Home = () => {
  return (
    <>
    <main>
      <section className="secton-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>this is paragraph</p>
            <h1>welcome to the our world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Accusamus dicta numquam eaque consequatur ipsam voluptate 
              nihil in totam labore, tempora officia vel nesciunt facere 
              consectetur facilis, deleniti dolor soluta tempore.</p>
          <div className="btn group-btn">
            <a href="/contact">
              <button className="btn">contact now</button>
            </a>
            <a href="/service">
              <button className="btn"> learn more</button>
            </a>
          </div>
          </div>
          <div className="hero-image">
            {/* <img src="" alt="" /> */}
          </div>


        </div>
      </section>
    </main>
    </>
  )
}

export default Home