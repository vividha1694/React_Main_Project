//import styles from './Home.module.css'
import styles from './CategoryCard.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ title, links, buttonText }) {
    return (
        <div className={styles.category}>
      <div className={styles.category_card}>
        <h2 className={styles.category_title} >{title}</h2>
        <ul className={styles.category_list}>
          {links.map((link, index) => (
            <li key={index}><a href={link.url}>{link.text} <IoIosArrowRoundForward/></a></li>
          ))}
        </ul>
        <button className={styles.btn}>{buttonText}</button>
      </div>
      </div>
    );
  }
  export default Card