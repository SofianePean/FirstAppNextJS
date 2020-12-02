import React from 'react';
import Head from 'next/head'
import {useRouter} from 'next/router';
import Layout from '../../components/layout';
import axios from 'axios'


const Titre = ({ data }) => {
    const styles = {
        main: {
            width: 400,
            margin: 'auto'
        },
        img : {
            height: 300,
            width: 400,
        },
    }
    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <Layout>
            <div style={styles.main}>   
                <h1>{data.title}</h1>
                <div>
                    <img style={styles.img} src={data.pictures[0]} alt=""/>
                </div>
                <p>{data.description}</p>
            </div>
            </Layout>
        </>
    )
}
export const getStaticPaths = async() => {
    const url = 'https://aqueous-meadow-07678.herokuapp.com';
    const {data} = await axios.get(`${url}/api/posts`)
    const posts = data.data
    const paths = posts.map(post => ({
        params: {id: post._id}
    }))

    return {paths, fallback: true}
}
export const getStaticProps = async ({params}) => {
    const url = 'https://aqueous-meadow-07678.herokuapp.com';
    const id = params.id;
    const {data} = await axios.get(`${url}/api/post/${id}`)

    return {
        props: {
            data
        }
    }
}

export default Titre;