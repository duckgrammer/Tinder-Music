import TinderLogoColor from '../images/TinderLogoColor.png';

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
      setShowModal(true);
      setIsSignUp(false);
    };

    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={TinderLogoColor} alt="logo"/>
            </div>
            {!authToken && !minimal &&
                <button
                    className="nav-button"
                    onClick={handleClick}
                >
                    Log in
                </button>
            }
        </nav>
    )
}

export default Nav;