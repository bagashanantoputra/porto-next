"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+62) 812 1136 7526"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "bagashanantos@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Tangerang Selatan, Indonesia",
    },
];

const Contact = () => {
    const [service, setService] = useState("");
    const [messageStatus, setMessageStatus] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result);
                setMessageStatus("Message sent successfully ✅");
                form.current.reset();
                setService("");
                setTimeout(() => setMessageStatus(""), 3000); 
            }, (error) => {
                console.log(error);
                setMessageStatus("Failed to send message ❌");
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam cumque dolores ducimus beatae, excepturi consectetur quaerat.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="user_name" placeholder="Firstname" required />
                                <Input type="text" name="user_name" placeholder="Lastname" required />
                                <Input type="email" name="user_email" placeholder="Email address" required />
                                <Input type="text" name="phone" placeholder="Phone number" required />
                            </div>

                            <Select onValueChange={(value) => setService(value)} name="service">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea
                                className="h-[200px]"
                                name="user_message"
                                placeholder="Type your message here."
                                required
                            />

                            <Button type="submit" size="md" className="max-w-50">
                                Send message
                            </Button>

                            {/* Menampilkan status pesan */}
                            {messageStatus && (
                                <p className="mt-4 text-lg text-white/80">{messageStatus}</p>
                            )}
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;
