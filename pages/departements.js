import React from 'react';
import Head from 'next/head'
import Layout from '../components/layout';
import axios from 'axios';


const Departement = ({data}) => {
    const styles = {
        padding: 10,
        margin: 10,
        borderBottom: "1px solid #DDD"
    }
    return (
        <>
        <Head>
        <title>Liste des départements</title>
        </Head>
        <Layout>
        <h1>Cette page utilise getInitialProps</h1>
            {
                data.map(departement => (
                    <div style={styles} key={departement.code}>
                        <h1>{departement.nom}</h1>
                        <div>Code de departement : {departement.code}</div>
                        <div>Code de la région : {departement.codeRegion}</div>
                    </div>
                ))
            }
        </Layout>
        </>
    )
}

Departement.getInitialProps = async(context) => {
    const url = 'https://geo.api.gouv.fr/departements'
    const {data} = await axios.get(url);

    return {
        data
    }
}

export default Departement