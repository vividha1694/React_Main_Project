import React from 'react'
import styles from './About.module.css'
import image1 from '../../assets/WhatsApp-Image-2024-01-23-at-22.43.39-1.jpeg'
import image2 from '../../assets/WhatsApp-Image-2024-01-23-at-22.44.05.jpeg'
import image3 from '../../assets/WhatsApp-Image-2024-01-23-at-22.44.16-1.jpeg'
import { IoIosCheckmark } from "react-icons/io";


const About = () => {
  return (
  <>
    <div className={styles.flex}>
    {/* first section */}
      <div className={`${styles.image_flex} ${styles.basis}`}>
        <div><img className={styles.size} src={image1} alt="" /></div>
        <div><img className={styles.size} src={image2} alt="" /></div>
        <div><img className={styles.size} src={image3} alt="" /></div>
      </div>

      {/* second section */}
      <div className={styles.basis}>
        <span className={styles.span}>About Educal</span>
        <h2 className={styles.heading}>Degrees in various academic Dicipline</h2>
        <p className={styles.para}>Not only can university offer an environment rich in our socila and cultural experiences</p>
      
      <ul className={styles.list}>
        <li><span ><IoIosCheckmark className={styles.tick_icon}/></span>Access to all our Courses</li>
        <li><span><IoIosCheckmark className={styles.tick_icon}/></span>Learn the latest skills</li>
        <li><span><IoIosCheckmark className={styles.tick_icon}/></span>Upskill your Organization</li>
      </ul>
     
     <span className={styles.btn_div}><a className={styles.btn} href="https://wp.hixstudio.net/eduker/about/" >Read More</a></span>
    </div>
    </div>
    </>
  )
}

export default About
