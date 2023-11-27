import React, { useState } from 'react'
import css from './Header.module.scss'
import { MdOutlineMail, MdOutlineMenuOpen } from "react-icons/md";
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow'
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const headerShadow = useHeaderShadow()
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={headerVariants}
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}
            style={{boxShadow:headerShadow}}
            >
            <div className={`flexCenter innerWidth ${css.container}`}>
                {/* 标题 */}
                <div className={css.name}>
                    Yun Wang
                </div>
                {/* 菜单 */}
                <ul
                style={getMenuStyles(menuOpened)}
                className={`flexCenter ${css.menu}`}>
                    <li><a href="">Services</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li className={`flexCenter ${css.email}`}>
                        <p>18669633238@163.com</p>
                        <MdOutlineMail size={"40px"} />

                    </li>
                </ul>
                {/* 只对中小屏幕生效 */}
                <div className={css.menuIcon}
                    onClick={() => setMenuOpened((prev) => !prev)}>
                    <MdOutlineMenuOpen size={'30px'} />
                </div>
            </div>

        </motion.div>
    )
}

export default Header