"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiGoland, SiBootstrap, SiPhp, SiPostgresql } from "react-icons/si"

const about = {
    title: "About me",
    description:
        "My name is Bagas Hananto, a 23-year-old Software Engineer with a strong command of JavaScript, Go, and PHP. Over the course of my career, I've successfully completed two major projects and have worked on several freelance projects. My passion lies in creating efficient and scalable solutions that drive impactful results. I am always eager to learn and explore new technologies to enhance my skills and contribute to the tech community.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Bagas Hananto"
        },
        {
            fieldName: "Phone",
            fieldValue: "{+62} 812 1136 7526"
        },
        {
            fieldName: "Exprerience",
            fieldValue: "3+ Years"
        },
        {
            fieldName: "Hobby",
            fieldValue: "Hiking"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indonesia"
        },
        {
            fieldName: "Email",
            fieldValue: "bagashanantos@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Language",
            fieldValue: "English, Indonesia"
        },
    ]
}

const experience = {
    icon:'/assets/resume/badge.svg',
    title: 'My experience',
    description:
        "As a software engineer, I have hands-on experience in developing and delivering high-quality software solutions. I have successfully completed two major projects, where I was responsible for designing and implementing both frontend and backend systems.",
    items: [
        {
            company: "Ordent Intelektual Digital",
            position: "Software Engineer",
            duration: "2023 - Present",
        },
        {
            company: "MyOwnCompany",
            position: "Freelance Web Developer",
            duration: "2023 - Present",
        },
        {
            company: "Gunungmas Sukses Makmur",
            position: "Full Stack Developer",
            duration: "2022 - 2023",
        },
        {
            company: "Biometrika Indonesia",
            position: "Graphic Designer",
            duration: "2021 - 2022",
        },
        {
            company: "Champ Resto Indonesia",
            position: "Waitress",
            duration: "2020",
        },
        {
            company: "Sparepart Moto Indonesia",
            position: "Quality Controll",
            duration: "2018 - 2019",
        },
    ]
};

const education = {
    icon:'/assets/resume/cap.svg',
    title: 'My education',
    description:
        "I have a solid educational foundation in software engineering, which has equipped me with the technical knowledge and problem-solving skills necessary for my career.",
    items: [
        {
            institution: "University Esa Unggul",
            degree: "Informatics Engineering",
            duration: "2023",
        },
        {
            institution: "Bootcamp Dumbways",
            degree: "Full Stack Developer",
            duration: "2022",
        },
        {
            institution: "Udemy",
            degree: "Back-End Course",
            duration: "2021 -2022",
        },
        {
            institution: "Udemy",
            degree: "Front-End Course",
            duration: "2021",
        },
        {
            institution: "SMKN 1 Kabupaten Tangerang",
            degree: "Multimedia",
            duration: "2016 - 2019",
        },
        {
            institution: "MTs Al-Layyinah",
            degree: "Middle School",
            duration: "2016 - 2019",
        },
    ]
};

const skills = {
    title: "My skills",
    description:
        "I specialize in full-stack development, with a strong foundation in JavaScript, Go, and PHP. My expertise includes building dynamic, responsive web applications and scalable backend systems.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <SiBootstrap />,
            name: "bootstrap.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiGoland />,
            name: "golang",
        },
        {
            icon: <SiPhp />,
            name: "php",
        },
        {
            icon: <SiPostgresql />,
            name: "postresql",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay:2.4, duration:0.4, ease:"easeIn"},
            }}

            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{
                                    experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index)=>{
                                            return(
                                                <li 
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                    flex flex-col justify-center items-center lg:items-start
                                                    gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{
                                    education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index)=>{
                                            return(
                                                <li 
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                    flex flex-col justify-center items-center lg:items-start
                                                    gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index)=>{
                                        return(
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index)=>{
                                        return(
                                            <li 
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume