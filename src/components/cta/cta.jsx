import './cta.css';
import { QuestionImg } from '../../assets/assets-export';
import { motion } from 'framer-motion';

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

const CTA = () => {
    return (
        <section className="cta">
            <div className="container cta-container">
                <div className="text-area">
                    <motion.h1 {...fadeUpConfig()}>
                        Questions? <br /> Let’s talk
                    </motion.h1>
                    <motion.p {...fadeUpConfig(0.2)}>
                        Contact us through our 24/7 live chat. We’re always happy to help!
                    </motion.p>
                    <motion.button {...fadeUpConfig(0.3)} className="btn">
                        Get started
                    </motion.button>
                </div>
                <motion.img
                    {...fadeInConfig}
                    src={QuestionImg}
                    className="cta-img"
                    alt="mini question gif"
                />
            </div>
        </section>
    );
};

export default CTA;
