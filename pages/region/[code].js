import React from 'react';
import {useRouter} from 'next/router';
import Layout from '../../components/layout';
import axios from 'axios';
import Head from 'next/head'


const CodeRegion = ({ data }) => {
    const router = useRouter()
    return (
        <>
        <Head>
            <title>{data.nom}</title>
        </Head>
        <div>
            <Layout />
            <h1>Région : {data.nom}</h1>
            <p>Code : {data.code}</p>
        </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const url = 'https://geo.api.gouv.fr'
    const {data} = await axios.get(url + `/regions/${context.params.code}`)
    return{  
        props: {
            data
        }
    }
}

export default CodeRegion;