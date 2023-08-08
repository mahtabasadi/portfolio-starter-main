import React from "react";

// CountUp

import CountUp from "react-countup/build/CountUp";

// intersection observer hook

import { useInView } from "react-intersection-observer";

// motion

import { motion } from "framer-motion";

// varients
import { fadeIn } from "../variants";

const About = () => {
  const [ref, InView] = useInView({ threshold: 0.5 });
  return (
    <section>
      <div>
        <div>
          {/* image  */}
          <div className="flex"></div>

          {/* text  */}
        </div>
      </div>
    </section>
  );
};

export default About;
