import { motion, useCycle } from "framer-motion"

import { RouterPathLabel } from "../NavBar"
import { MenuToggle } from "./MenuToggle"
import NavigationMenu from "./NavigationMenu"

interface Props {
    navigation: RouterPathLabel[]
}

const Navigation_mobile = ({ navigation }: Props) => {
    const [isOpen, toggleOpen] = useCycle(false, true)

    return (
        <div className="navigation-mobile">
            <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />

            <motion.div
                className="mobile-navigation-drawer"
                variants={variants}
                animate={isOpen ? "open" : "closed"}
            >
                <motion.nav
                    className="mobile-navigation-container"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />

                    <NavigationMenu navigation={navigation} />
                </motion.nav>
            </motion.div>
        </div>
    )
}

const variants = {
    open: {
        x: 0,
        transition: {
            type: "easein",
            stiffness: 50,
            restDelta: 2,
        },
    },
    closed: {
        x: "100%",
        transition: {
            type: "easein",
            stiffness: 50,
            restDelta: 2,
        },
    },
}

export default Navigation_mobile
