import { RouterPathLabel } from "../NavBar"
import { motion } from "framer-motion"
import MenuItem from "./MenuItem"

interface Props {
    navigation: RouterPathLabel[]
}

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const NavigationMenu = ({ navigation }: Props) => (
    <motion.ul variants={variants}>
        {navigation.map(({ label, path }, index) => (
            <MenuItem key={index} label={label} path={path} />
        ))}
    </motion.ul>
)

export default NavigationMenu
