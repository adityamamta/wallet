import './hero.css';
import { HeroImg } from '../../assets/assets-export';
import {motion } from 'framer-motion';

const fadeUpConfig = (delay = 0) => ({
    initial: {
        opacity: 0,
        y: "5rem",
    },
    whileInView: {
        opacity: 1,
        y: "0",
    },
    transition: {
        duration: 0.8,
        delay,
    },
    viewport: {
        amount: 0.3,
        once: true,
    },
});

const fadeInConfig = {
    initial: {
        opacity: 0,
    },
    whileInView: {
        opacity: 1,
    },
    transition: {
        duration: 1,
    },
    viewport: {
        amount: 0.3,
        once: true,
    },
};

const Hero = () => {
    return (
        <>
        <section className="hero">
            <div className="container hero-container">
                <div className="text-area">
                    <motion.h1 {...fadeUpConfig()}>SaaS Landing <br></br>Page Template</motion.h1>
                    <motion.p {...fadeUpConfig(.3)}>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</motion.p>
                    <motion.button {...fadeUpConfig(.6)} className="btn">Get started</motion.button>
                </div>
                <motion.img {...fadeInConfig} src={HeroImg} className='hero-img' alt="mini dashboard gif" />
            </div>
        </section>
        </>
    )
}

export default Hero;