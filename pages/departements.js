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
        {
            data && (
                <>
                <Head>
                    <title>Liste des départements</title>
                </Head>
                <Layout>
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
        <Head>
        <title>Liste des départements</title>
        </Head>
        <Layout>
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
export const getStaticProps = async() => {
    const url = 'https://geo.api.gouv.fr/departements'
    const {data} = await axios.get(url);

    return {
        props : {
            data
        }
    }
}

export default Departement