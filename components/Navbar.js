import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper blue">
                <Link href="/" className="brand-logo">Bloogy</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/signup">SignUp</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
