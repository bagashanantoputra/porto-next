import Link from "next/link"

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/bagashanantoputra"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/bagas-hananto-putra/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/raelredd/"},
    {icon: <FaWhatsapp />, path: "https://wa.me/081211367526"},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    )
}

export default Social