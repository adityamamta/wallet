import './logos.css';
import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "../../assets/assets-export";
const Logos = () => {
    return (
        <>
            <section className="logos">
                <div className="container logos-container">
                    <img src={Logo1} alt="accenture logo" className='brand-logo'/>
                    <img src={Logo2} alt="apple logo" className='brand-logo' />
                    <img src={Logo3} alt="microsoft logo" className='brand-logo' />
                    <img src={Logo4} alt="google icon" className='brand-logo' />
                    <img src={Logo5} alt="bearing point logo" className='brand-logo' />
                </div>
            </section>
        </>
    )
}

export default Logos;