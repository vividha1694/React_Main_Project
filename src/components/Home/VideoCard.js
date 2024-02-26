import React from 'react'
import styles from './VideoCard.module.css'
import { BsPlayFill } from "react-icons/bs";

const VideoCard = () => {
  return (
    <>
    <div className={styles.container}>

    <div className={styles.flex}>

    <div>
    <div>
        <span className={styles.span}>Online Certification</span>
        <h2 className={styles.heading}>You can be your own Guiding Star with our help!</h2>
        <p className={styles.para}>They blend their knowledge and enthusiasm to communicate</p>
    </div>
    <div className={`${styles.link_flex} ${styles.link}`}>
        <div className={styles.btn}><span><BsPlayFill/></span><a href="https://www.youtube.com/watch?v=4XGLPTtn4xQ">Play video</a></div>
        <div><a href="https://wp.hixstudio.net/eduker/about/">Ridiculus</a></div>
        <div><a href="https://wp.hixstudio.net/eduker/about/">Retrun</a></div>
    </div>
    </div>

    <div  className={styles.image} >
    <img src="https://janhavipanwar.com/wp-content/uploads/2022/04/certificate.png" alt=""/>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default VideoCard
