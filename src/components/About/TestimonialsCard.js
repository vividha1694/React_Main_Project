import React from 'react'
import styles from './TestimonialsCard.module.css'
import { FaStar } from "react-icons/fa6";

const TestimonialsCard = ({
  image,heading,para,name,role,star
}) => {
  return (
    <>
    <div className={styles.flex}>
    <div className={styles.card}>
    <img src={image} alt="" />
    <h4 className={styles.title_inside}>{heading}</h4>
    <p className={styles.para}>{para}</p>
    <h2>{name}</h2>
    <span className={styles.role}>{role}</span><br/>
    <FaStar className={styles.star}/><FaStar className={styles.star}/><FaStar className={styles.star}/><FaStar className={styles.star}/><FaStar className={styles.star}/>
    </div>
    </div>
    </>
  )
}

export default TestimonialsCard
