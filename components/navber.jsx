import React from 'react';
import navStyle from '../components/navber.module.css';
import Link from "next/link";
function Navber(props) {
    return (
        <nav className={navStyle.navbar}>
            <div className={navStyle.logo}>MUO</div>
            <ul className={navStyle.navLinks}>
                <div className={navStyle.menu}>
                    <li><Link href="/home">Home</Link></li>
                    {/*<li><Link href="/blog">About</Link></li>*/}
                    {/*<li><Link href="/post">Post</Link></li>*/}
                </div>
            </ul>
        </nav>
    );
}

export default Navber;