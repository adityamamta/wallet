import './navbar.css';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="nav-container">
                    <h1 className="logo">Wallet</h1>
                    <div className="nav-buttons">
                        <button className="btn sign-up">Sign up</button>
                        <button className="btn fill-btn">Log in</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;