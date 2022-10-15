import TinderLogoColor from '../images/TinderLogoColor.png';

const Nav = ( {authToken, showModal} ) => {
    const handleClick = () => {
        console.log("Log in");
    }

    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={TinderLogoColor}/>
            </div>
            {!authToken && 
                <button
                    className="nav-button"
                    onClick={handleClick}
                    disabled={showModal}
                >
                    Log in
                </button>
            }
        </nav>
    )
}

export default Nav;