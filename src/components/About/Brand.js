import React from 'react'
import styles from './Brand.module.css'
import brand1 from '../../assets/brand-1.webp'
import brand2 from '../../assets/brand-2.webp'
import brand3 from '../../assets/brand-3.webp'
import brand4 from '../../assets/brand-4.webp'
import brand5 from '../../assets/brand-5.webp'
import brand6 from '../../assets/brand-6.webp'
import brand7 from '../../assets/brand-7.webp'

const Brand = () => {
  return (
    <div className={styles.flex}>
      <div>
        <span className={styles.title}>Our Brand</span>
        <h2 className={styles.heading}>Who will you learn with?</h2>
        <p className={styles.para}>You can list your partners or instructor's brand here to show off your site's reputation</p>
        <a className={styles.link} href="">View All Partners</a>
      </div>

      <div className={styles.image}>
        <img src={brand7} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
        <img src={brand6} alt="" />
        <img  className={styles.brand} src={brand1} alt="" />
      </div>
    </div>
  )
}

export default Brand
