import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={staggerContainer}
                viewport={{ once: false, amount: 0.25 }}
                className={`innerWidth ${css.container}`}>
                {/* 顶部内容 */}
                <div className={css.upperElements}>
                    <motion.span
                        variants={fadeIn('right', 'tween', 0.2, 1)}
                        className="primaryText"
                    >你好, <br /> I'm Yun Wang </motion.span>
                    <motion.span
                        variants={fadeIn('left', 'tween', 0.2, 1)}
                        className="secondaryText" >我是一名, <br /> 前端工作者 </motion.span>
                </div>
                {/* 中部人像 */}
                <div className={css.person}>
                    <motion.img
                        variants={fadeIn('up', 'tween', 0.5, 1.3)}
                        src="./person.png" alt="" />
                </div>
                {/* 邮箱 */}
                <a className={css.email} href="mailto:18669633238@163.com">18669633238@163.com</a>
                {/* 底部内容 */}
                <div className={css.lowerElements}>
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.4, 1)}
                        className={css.experience}>
                        <div className="primaryText">2</div>
                        <div className="secondaryText">
                            <div>
                                Years
                            </div>
                            <div>
                                Experience
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.4, 1)}
                        className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <div>XXXXXXXXX</div>
                        <div>zzzzzzzzzz</div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero