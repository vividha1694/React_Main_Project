import React from "react";
import styles from "./CourseCard.module.css";
import { IoBookOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { BsPlayFill } from "react-icons/bs";
import { MdExposureZero } from "react-icons/md";

const CourseCard = ({
  title,
  category,
  price,
  videoCount,
  rating,
  imageUrl,
  joinLink,
  otherLink,
}) => {
  return (
    <>
          <div className={styles.course_card}>
            <section className={styles.section}>
              <div className={styles.bg_color}>
                <span>
                  <IoBookOutline className={styles.icon} />
                </span>
              </div>
              <div>
                <h3>
                  <a
                    className={`${styles.link} ${styles.title}`}
                    href={joinLink}
                  >
                    {title}
                  </a>
                </h3>
              </div>

              <div className={styles.flex}>
                <div>
                  <a
                    className={`${styles.link} ${styles.title_again}`}
                    href={otherLink}
                  >
                    {category}
                  </a>
                </div>
                <div>
                  <span className={styles.free}>{price}</span>
                </div>
              </div>
              <hr />

              <div className={`${styles.list} ${styles.flex}`}>
                <div>
                  <a className={`${styles.link} ${styles.gray}`} href="">
                    <BsPlayFill
                      className={`${styles.link} ${styles.bg_color_playbtn}`}
                    />
                    <span> {videoCount} Video</span>
                  </a>
                </div>
                <div>
                  <a className={`${styles.link} ${styles.gray}`} href="">
                    <span>
                      <TiStarFullOutline
                        className={`${styles.star} ${styles.bg_color_star}`}
                      />
                    </span>
                    <span>
                      <a
                        href=""
                        className={`${styles.gray} ${styles.zero} ${styles.link}`}
                      >
                        0
                      </a>
                      {/* <MdExposureZero
                            className={`${styles.gray} ${styles.zero}`}
                          /> */}
                    </span>
                    <span>({rating})</span>
                    Reviews
                  </a>
                </div>
              </div>

              <div>
                <a className={styles.link} href="">
                  <img className={styles.image} src={imageUrl} alt="" />
                </a>
              </div>

              <div>
                <a
                  className={`${styles.link} ${styles.join}`}
                  href={joinLink}
                  alt=""
                >
                  Join Now
                </a>
              </div>
            </section>
          </div>
    </>
  );
};

export default CourseCard;
