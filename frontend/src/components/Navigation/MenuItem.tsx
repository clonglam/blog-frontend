import * as React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

interface Props {
    label: string
    link: string
}
export const MenuItem = ({ label, link }: Props) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={link}>{label}</Link>
        </motion.li>
    )
}
