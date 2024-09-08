"use client"

import { BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"

const services = [
    {
        num: "01",
        title: "Web Developmet",
        description: `<b>Custom Website Development:</b> Building a website from scratch based on your specific requirements.
        <b>Responsive Design:</b> Ensuring your website looks great on all devices, whether desktop or mobile.
        <b>Performance Optimization:</b> Enhancing the speed and efficiency of your website for a better user experience.`,
        href: ""
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: `<b>User Research:</b> Understanding your target audience and their needs to create designs that resonate and engage.
        <b>Wireframing & Prototyping:</b> Creating wireframes and prototypes to plan user flow and design.
        <b>Visual Design:</b> Crafting visually appealing and brand-consistent interfaces that reflect your brand’s identity.`,
        href: ""
    },
    {
        num: "03",
        title: "Logo Design",
        description: `<b>Brand Analysis:</b> Capturing your brand’s essence to design a representative logo.
        <b>Concept Development:</b> Exploring various logo concepts to find the ideal design.
        <b>Design Refinement:</b> Fine-tuning the chosen concept to meet your standards and expectations.`,
        href: ""
    },
    {
        num: "04",
        title: "SEO",
        description: `<b>Keyword Research:</b> Finding relevant keywords to boost rankings.
        <b>On-Page Optimization:</b> Improving content, meta tags, and site structure for better performance.
        <b>Technical SEO:</b> Enhancing site speed, mobile-friendliness, and indexing for optimal results.`,
        href: ""
    },
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-12">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity:0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay:2.4, duration:0.4, ease:"easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                                <div 
                                    key={index}
                                    className="flex-1 flex flex-col justify-center gap-6 group"
                                >
                                    <div className="w-full flex justify-between items-center">
                                        <div className="text-5xl font-extrabold text-outline text-transparent
                                        group-hover:text-outline-hover transition-all duration-500"
                                        >
                                            {service.num}
                                        </div>
                                        <Link href={service.href} className="w-[70px] h-[70px] rounded-full 
                                        bg-white group-hover:bg-accent transition-all duration-500 flex
                                        justify-center items-center hover:-rotate-45"
                                        >
                                            <BsArrowDownRight className="text-primary text-3xl"/>
                                        </Link>
                                    </div>
                                    <h2 className="text-[42px] font-bold leading-none 
                                    text-white group-hover:text-accent transition-all duration-500"
                                    >
                                        {service.title}
                                    </h2>
                                    <p className="text-white/60">
                                        <ul className="list-disc pl-5">
                                            {service.description.split('\n').map((item, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                        </ul>
                                    </p>
                                    <div className="border-b border-white/20 w-full"></div>
                                </div>
                            );
                        })}

                </motion.div>
            </div>
        </section>
    )
}

export default Services