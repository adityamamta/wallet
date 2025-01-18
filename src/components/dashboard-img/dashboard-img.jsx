import './dashboard-img.css';
import { Dashboard } from "../../assets/assets-export";
import {motion} from "framer-motion";

const DashboardImg = () => {
    return (
        <>
            <section className="dashboard-img-section" >
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
                        duration: .8,
                    }}
                    viewport={{
                        amount: .3,
                        once: true,
                    }}
                 className="container dashboard-container">
                    <img src={Dashboard} alt="dashboard image" className='dashboard-img'/>
                </motion.div>
            </section>
        </>
    )
}

export default DashboardImg;