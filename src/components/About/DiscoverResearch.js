import React from 'react'
import styles from './DiscoverResearch.module.css'
import research1 from '../../assets/research-1.jpg'
import research2 from '../../assets/research-2.jpg'
import research3 from '../../assets/research-3.jpg'

const DiscoverResearch = () => {
  return (
    <div className={styles.main}>
    <div className={styles.center}>
    <span className={styles.span}>Discover Research</span>
      <h2  className={styles.heading}>Life Changing Research</h2>
    </div>
      
     <div className={styles.flex}>
      <div>
        <img src={research1} alt="" />
        <h3 className={styles.title}>Frontier Research</h3>
        <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa lorem aliqua.</p>
      </div>
      <div>
        <img src={research2} alt="" />
        <h3 className={styles.title}>Global Research</h3>
        <p className={styles.para}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
      </div>
      <div>
        <img src={research3} alt="" />
        <h3 className={styles.title}>Public Engagement</h3>
        <p className={styles.para}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
      </div>
      </div>
    </div>
  )
}

export default DiscoverResearch
