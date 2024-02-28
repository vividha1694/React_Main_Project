import React from "react";
import styles from './TestimonialsCard.module.css'
import testimonial2 from '../../assets/testimonial-2.jpg'
import testimonial3 from '../../assets/testimonial-3.jpg'
import testimonial4 from '../../assets/testimonial-4.jpg'
import TestimonialsCard from "./TestimonialsCard";

const TestimonialsCardDetails = () => {
  const Info = [
    { image: testimonial2,
      heading: "Great Quality!",
      para: "Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus feugiat lacus vitae neque ornare.",
      name: "Dianne Amester",
      role: "UX Designer",
    
     
    },
    {   image: testimonial3,
        heading: "Great Quality!",
        para: "Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus feugiat lacus vitae neque ornare.",
        name: "Douglas Lyphe",
        role: "Development",
       
       
      },
      {  image: testimonial4,
        heading: "Customer Support",
        para: "Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus feugiat lacus vitae neque ornare.",
        name: "Russell Sprout",
        role: "IT Specialist",
       
       
      },
   
  ];

  return (
    <>
        <div className={styles.center}>
        <span className={styles.title}>Tesimonials</span>
        <h2 className={styles.heading}>What our Customers Say</h2>
    </div>
    
      <div className={styles.flex}>
        {Info.map((detail, index) => (
          <TestimonialsCard key={index} {...detail} />
        ))}
      </div>
      
    </>
  );
};

export default TestimonialsCardDetails;
