import { motion } from "framer-motion"
import { Link } from "react-router-dom"

interface Props {
    label: string
    path: string
}

const MenuItem = ({ label, path }: Props) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={path}>{label}</Link>
        </motion.li>
    )
}

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

export default MenuItem
