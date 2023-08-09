import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// varians
import { fadeIn } from "../variants";

// services data

const services = [
  {
    name: "UI/UX Design",
    description:
      "Laboris adipisicing consectetur labore ut. In sit non deserunt nostrud anim qui tempor.",
    link: "learn more",
  },
  {
    name: "developmend",
    description:
      "Laboris adipisicing consectetur labore ut. In sit non deserunt nostrud anim qui tempor.",
    link: "learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Laboris adipisicing consectetur labore ut. In sit non deserunt nostrud anim qui tempor.",
    link: "learn more",
  },
  {
    name: "Product branding",
    description:
      "Laboris adipisicing consectetur labore ut. In sit non deserunt nostrud anim qui tempor.",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            {" "}
            <h2 className="text-accent mb-6 h2">What I Do</h2>
            <h3 className="max-w-[450px] h3 mb-16">
              I'm freelance front-end developer with over 5 yeers of experience
            </h3>
            <button className="btn btn-sm">see my work</button>
          </motion.div>
          {/* services  */}
          <div>
            {/* service list */}
            <motion.div  variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}>
              {services.map((services, index) => {
                const { name, description, link } = services;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight mb-4 mr-4 ">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 item-end">
                      <a
                        href="/#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        {" "}
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-sm" href="/#">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
