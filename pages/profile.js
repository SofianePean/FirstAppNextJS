import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link'
import { useRouter } from 'next/router'

const NameLink = ({ nom }) => ( 
    <li>
        <Link href={`/profile?nom=${nom}`}>
            <a>{nom}</a>
        </Link>
    </li>
    )

const Profile = () => {
    const router = useRouter()
    return (
        <Layout>
            <h1>Profile</h1>
            <ul>
                <NameLink nom="Sofiane" />
                <NameLink nom="Chloé" />
                <NameLink nom="Charles" />
            </ul>
            <h1>{ router.query.nom }</h1>
        </Layout>
    )
}

export default Profile;