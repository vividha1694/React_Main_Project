import React from 'react'
import styles from './Home.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";

function Home() {
  return (
    <>
    <div className={styles.flex}>

    {/* first div */}
      <div>
        <h3 className={styles.head_three}>Top Categories</h3>
        <h2 className={styles.head_two}>
          All features <br/>
          Topics by Categories
        </h2>
      </div>

      {/* second div */}
      <div>
        <p className={styles.para}>“Explore Wonder Girl Janhavi’s Signature English Courses”</p>
      </div>

      {/* third div */}
      <div className={styles.div}>
        <a href="https://wp.hixstudio.net/eduker/courses/">All Categories</a>
      </div>

    </div>
      
      <div className={styles.category}>

    <div className={styles.category_card}>
      <h2 className={styles.category_title}>English</h2>
      <ul className={styles.category_list}>
        <li><a href="">Basic English Course <span><IoIosArrowRoundForward /></span></a></li>
        <li><a href="">Intermediate English Course <span><IoIosArrowRoundForward /></span></a></li>
        <li><a href="">Advanced English Course <span><IoIosArrowRoundForward /></span></a></li>
      </ul>
     
        <button className={styles.btn}>
          Explore
        </button>
      
      </div>

      <div className={styles.category_card}>
      <h2 className={styles.category_title}>Recorded Classes</h2>
      <ul className={styles.category_list}>
        <li><a href="">British Accent Course <span><IoIosArrowRoundForward /></span></a></li>
        <li><a href="">American Accent Course <span><IoIosArrowRoundForward /></span></a></li>
        <li><a href="">Full IELTS Course <span><IoIosArrowRoundForward /></span></a></li>
      </ul>
     
        <button className={styles.btn}>
          Explore
        </button>
     
      </div>

      <div className={styles.category_card}>
      <h2 className={styles.category_title}>One-to-One Classes</h2>
      <ul className={styles.category_list}>
        <li><a href="">Basic French Language Course <span><IoIosArrowRoundForward /></span></a></li>
        <li><a href="">Basic Japanese Language Course <span><IoIosArrowRoundForward /></span></a></li>
        <li><a href="">Basic Spanish Language Course <span><IoIosArrowRoundForward /></span></a></li>
      </ul>
      
        <button className={styles.btn}>
          Explore
        </button>
      
      </div>

      </div>
    </>
  )
}

export default Home

