import { motion, useCycle } from "framer-motion"

import { MenuItem } from "./MenuItem"
import { MenuToggle } from "./MenuToggle"

type NavigationType = {
    link: string
    label: string
}

const Navigation_mobile = ({
    navigation,
}: {
    navigation: NavigationType[]
}) => {
    const [isOpen, toggleOpen] = useCycle(false, true)

    return (
        <>
            <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />

            <motion.div
                className="mobile-navigation-drawer"
                animate={
                    isOpen
                        ? {
                              x: 0,
                              transition: {
                                  type: "easein",
                                  stiffness: 50,
                                  restDelta: 2,
                              },
                          }
                        : {
                              x: "100%",
                              transition: {
                                  type: "easein",
                                  stiffness: 50,
                                  restDelta: 2,
                              },
                          }
                }
            >
                <motion.nav
                    className="mobile-navigation-container"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
                    <Navigation navigation={navigation} />
                </motion.nav>
            </motion.div>
        </>
    )
}

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

interface INavigation {
    navigation: NavigationType[]
}

export const Navigation = ({ navigation }: INavigation) => (
    <motion.ul variants={variants}>
        {navigation.map(({ label, link }, index) => (
            <MenuItem key={index} label={label} link={link} />
        ))}
    </motion.ul>
)

export default Navigation_mobile
