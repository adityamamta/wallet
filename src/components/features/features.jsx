import './features.css';
import { CoinIcon, CardIcon, PurseIcon } from '../../assets/assets-export';
import { motion } from 'framer-motion';

const getResponsiveDelay = (delay) => {
    return window.matchMedia("(max-width: 450px)").matches ? 0 : delay;
};

const FeatureCard = ({ imageSrc, altText, title, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: "5rem",
            }}
            whileInView={{
                opacity: 1,
                y: "0",
            }}
            transition={{
                duration: 0.8,
                delay: getResponsiveDelay(delay),
            }}
            viewport={{
                amount: 0.2,
                once: true,
            }}
            className="card"
        >
            <img src={imageSrc} alt={altText} />
            <h4>{title}</h4>
            <p>{description}</p>
        </motion.div>
    );
};

const Features = () => {
    const featuresData = [
        {
            imageSrc: CardIcon,
            altText: "card icon",
            title: "Customizable card",
            description: "Custom your own card for your exact incomes and expenses needs.",
            delay: 0,
        },
        {
            imageSrc: CoinIcon,
            altText: "coin icon",
            title: "No payment fee",
            description: "Transfer your payment all over the world with no payment fee.",
            delay: 0.4,
        },
        {
            imageSrc: PurseIcon,
            altText: "purse icon",
            title: "All in one place",
            description: "The right place to keep your credit and debit cards, boarding passes & more.",
            delay: 0.8,
        },
    ];

    return (
        <section className="features">
            <div className="container features-container">
                {featuresData.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        imageSrc={feature.imageSrc}
                        altText={feature.altText}
                        title={feature.title}
                        description={feature.description}
                        delay={feature.delay}
                    />
                ))}
            </div>
        </section>
    );
};

export default Features;
