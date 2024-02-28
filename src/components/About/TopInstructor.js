import React from 'react'
import styles from './TopInstructor.module.css'
import team1 from '../../assets/team-1.png'
import team2 from '../../assets/team-2.png'
import team3 from '../../assets/team-3.png'
import team4 from '../../assets/team-4.png'

const TopInstructor = () => {
  return (
    <div>
      <div className={styles.flex}>
        <div>
        <span className={styles.span}>Top Instructors</span>
        <h2 className={styles.heading}>Become A Instruction Instructor.</h2>
        </div>
        <div>
            <p className={styles.para}>Placerat veritatis ullamco rutrum quia illo, aenean eaque necessitatibus aptent vehicula porta? Sollicitudin id, laboris commodi!</p>
        </div>
      </div>

      <div className={`${styles.flex} ${styles.center}`}>
        <div className={styles.link}><img className={styles.img_bg1} src={team1} alt="" /><br/><a href="">Melissa Jones</a><br/><span>Professor</span></div>
        <div className={styles.link}><img className={styles.img_bg2} src={team2} alt="" /><br/><a href="">Morgan Key</a><br/><span >Teacher MBA</span></div>
        <div className={styles.link}><img className={styles.img_bg3} src={team3} alt="" /><br/><a href="">Andra Flatcher</a><br/><span >Lead Teacher</span></div>
        <div className={styles.link}><img className={styles.img_bg4} src={team4} alt="" /><br/><a href="">Oliver Portar</a><br/><span >Photographer</span></div>
      </div>
    </div>
  )
}

export default TopInstructor
