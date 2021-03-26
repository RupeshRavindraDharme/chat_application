import React from 'react'

const Navbar = () => {
    return (
        <div>
            <>
            <nav className='green'>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign-up</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
            </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Login</a></li>
                <li><a href="badges.html">Sign-up</a></li>
                <li><a href="collapsible.html">Log</a></li>
            </ul>
            </>
        </div>
    )
}

export default Navbar
