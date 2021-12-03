import React from 'react'
// import PropTypes from "prop-types"

function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand text-secondary" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-secondary" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-secondary" href="/">{props.aboutus}</a>
                    </li>

                    </ul>
                    {/* <form className="d-flex">
                    <input className="form-control me-2" type="search"  placeholder="Search" aria-label="Search" />
                    <button className="btn btn-secondary text-light" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input mx-3" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label text-secondary" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
                </div>
            </nav>
 </div>
 
    );
}

export default Navbar


// Navbar.propTypes = {
//     title : PropTypes.string,
//     aboutus : PropTypes.string
// }
// Navbar.defaultProps = {
//     title : "Navbar",
//     aboutus : "AboutUs"
// }