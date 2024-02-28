import React from "react";
import CourseCard from "./CourseCard";
import styles from "./CourseCard.module.css";

const CourseCardDetails = () => {
  const courses = [
    {
      image:"https://janhavipanwar.com/wp-content/uploads/2022/04/course-1.jpg",  
      title: "IELTS Course",
      category: "IELTS",
      price: "Free",
      videoCount: 1,
      rating: 0,
      imageUrl:
        "https://secure.gravatar.com/avatar/52c69962962a0cd8596b2e00a63addc4?s=50&d=mm&r=g",
      otherLink:
        "https://janhavipanwar.com/course-category/ielts/?tutor-course-filter-category=62",
    },
    {
      image:"https://janhavipanwar.com/wp-content/uploads/2022/04/course-1.jpg",
      title: "French Accent Spoken Course",
      category: "French",
      price: "₹4,999.00 ₹2,999.00",
      videoCount: 33,
      rating: 0,
      imageUrl:
        "https://secure.gravatar.com/avatar/52c69962962a0cd8596b2e00a63addc4?s=50&d=mm&r=g",
      otherLink:
        "https://janhavipanwar.com/course-category/ielts/?tutor-course-filter-category=62",
    },
    { 
      image:"https://janhavipanwar.com/wp-content/uploads/2022/04/course-1.jpg",
      title: "British Accent Spoken Course",
      category: "British",
      price: "₹4,999.00 ₹2,999.00",
      videoCount: 48,
      rating: 0,
      imageUrl:
        "https://secure.gravatar.com/avatar/52c69962962a0cd8596b2e00a63addc4?s=50&d=mm&r=g",
      otherLink:
        "https://janhavipanwar.com/course-category/ielts/?tutor-course-filter-category=62",
    },
    {
        image:"https://janhavipanwar.com/wp-content/uploads/2022/04/course-1.jpg",
        title: "American Accent Spoken Course",
        category: "British",
        price: "₹4,999.00 ₹2,999.00",
        videoCount: 48,
        rating: 0,
        imageUrl:
          "https://secure.gravatar.com/avatar/52c69962962a0cd8596b2e00a63addc4?s=50&d=mm&r=g",
        otherLink:
          "https://janhavipanwar.com/course-category/ielts/?tutor-course-filter-category=62",
      },
  ];

  return (
    <>

      <div className={styles.flex}>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      

    </>
  );
};

export default CourseCardDetails;
