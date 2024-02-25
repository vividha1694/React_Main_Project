import React from "react";
import CourseCard from "./CourseCard";
import styles from "./CourseCard.module.css";

const CourseCardDetails = () => {
  const courses = [
    {
      title: "IELTS Course",
      category: "IELTS",
      price: "Free",
      videoCount: 1,
      rating: 0,
      imageUrl:
        "https://secure.gravatar.com/avatar/52c69962962a0cd8596b2e00a63addc4?s=50&d=mm&r=g",
      joinLink: "https://janhavipanwar.com/courses/ielts-course/",
      otherLink:
        "https://janhavipanwar.com/course-category/ielts/?tutor-course-filter-category=62",
    },
    {
      title: "French Accent Spoken Course",
      category: "French",
      price: "₹4,999.00 ₹2,999.00",
      videoCount: 33,
      rating: 0,
      imageUrl:
        "https://secure.gravatar.com/avatar/52c69962962a0cd8596b2e00a63addc4?s=50&d=mm&r=g",
      joinLink: "https://janhavipanwar.com/courses/ielts-course/",
      otherLink:
        "https://janhavipanwar.com/course-category/ielts/?tutor-course-filter-category=62",
    },
    {
      title: "British Accent Spoken Course",
      category: "British",
      price: "₹4,999.00 ₹2,999.00",
      videoCount: 48,
      rating: 0,
      imageUrl:
        "https://secure.gravatar.com/avatar/52c69962962a0cd8596b2e00a63addc4?s=50&d=mm&r=g",
      joinLink: "https://janhavipanwar.com/courses/ielts-course/",
      otherLink:
        "https://janhavipanwar.com/course-category/ielts/?tutor-course-filter-category=62",
    },
  ];

  return (
    <>
    <div className={styles.main}>
        
      <div className={styles.heading}>
        <span className={styles.heading_title}>Top Courses</span>
        <h2 className={styles.heading_title_again}>Our Featured Courses</h2>
      </div>

      <div className={styles.flex}>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      
      </div>
    </>
  );
};

export default CourseCardDetails;
