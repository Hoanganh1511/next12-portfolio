import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]
      "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>

        <ul className="pl-[20px]">
          {work?.map((item, idx) => (
            <li key={idx} className="list-disc">
              <p className="font-regular w-full md:text-sm mt-[14px] leading-5">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full
      
      "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px] 
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer Intern"
            company="Bytesoft Viet Nam "
            companyLink="www.google.com"
            time="12/2021-03/2022"
            address="Le Duc Tho, My Dinh, Ha Noi"
            work={[
              "Approached and learn the actual working environment at the enterprise.",
              "Developed using CSS, HTML, Gulp, React.js, Next.js  to enhance functionality and user experience on web pages.",
              "Worked with Back-End Developer to build a Content Management System (CMS) used React.js for Front-End.",
            ]}
          />
          <Details
            position="Frontend Developer"
            company="Bytesoft Viet Nam "
            companyLink="www.google.com"
            time="04/2022-Present"
            address="Le Duc Tho, My Dinh, Ha Noi"
            work={[
              "Learned new technologies skills and applied to daily tasks to improve efficiency and productivity.",
              "Worked with Back-End Developer to discuss Mockup & APIs and Integrated to Frontend side.",
              "Maintained and upgrade features in existing products.",
              "Propose plans to improve technology & performance for products.",
              "Implement and ensure completion of assigned tasks within the sprint week.",
              "Used React.js, Next.js framework (library) to contributed projects.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
