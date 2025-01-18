import './footer.css';

const Footer = () => {

    return (
        <>
            <footer className='footer'>
                <div className="footer-container">
                    <h1 className='footer-logo'>Wallet</h1>
                    <div className="footer-links">
                        <a href="">© Wallet {new Date().getFullYear()}</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Cookies policy</a>
                        <a href="#">Terms of use</a>
                    </div>
                    <div className="newsletter">
                        <p>Updates right to your Inbox</p>
                        <form action="" className='form'>
                            <input type="text" placeholder='Email Address'/>
                            <div className="btn">Send</div>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;