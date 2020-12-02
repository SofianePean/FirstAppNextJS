import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Header = () => {
    const router = useRouter()
    const styles = {
        header : {
            // marginBottom: 20,
            padding: 20,
            border: "1px solid #DDD"
        },
        link: {
            margin: 15,
            cursor: "pointer",
        },
        active: {
            margin: 15,
            color: "blue",
        }
    }
    return (
        <div style={styles.header}>
            <Link href="/" passHref>
                <span style={router.pathname === "/" ? styles.active : styles.link}>Home</span>
            </Link>

            <Link href="/blog" passHref>
                <span style={router.pathname === "/blog" ? styles.active : styles.link}>Blog</span>
            </Link>

            <Link href="/profile" passHref>
                <span style={router.pathname === "/profile" ? styles.active : styles.link}>Profile</span>
            </Link>

            <Link href="/departements" passHref>
                <span style={router.pathname === "/blog/departements" ? styles.active : styles.link}>Départements</span>
            </Link>
        </div>
    )
}

export default Header;