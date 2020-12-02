import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';


const Blog = ({ posts }) => {
    const styles = {
        title : {
            textAlign: 'center',
            backgroundColor: '#F3F3F3',
            paddingBottom : 30,
            margin: 0
        },
        main : {
            backgroundColor: '#F3F3F3',
            display: 'flex',
            minHeight: '100vh',
            flexWrap: 'wrap',
        },
        articles: {
            margin: 'auto',
            marginBottom : 30,
            padding: 15,
            height: 550,
            width: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            backgroundColor: 'white'
        },
        img : {
            height: 200,
            width: 300,
        },
        bodypost : {
            paddingTop: 15,
        }
    }
    return (
        <>
            <Head>
            <title>Liste des articles</title>
            </Head>
            <Layout>
            <h1 style={styles.title}>Cette page utilise getStaticProps</h1>
            <div style={styles.main}>
            {
                posts.map(post => (
                    <div style={styles.articles} key={post._id}>
                        <h1>{post.title}</h1>
                        <Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
                            <div>
                                <img src={post.pictures[0]} alt="imag" style={styles.img}/>
                            </div>
                        </Link>
                        <div style={styles.bodypost}>{post.body}</div>
                    </div>
                ))
            }
            </div>
            </Layout>
        </>
    )
}
export const getStaticProps = async(context) => {
    const url = 'https://aqueous-meadow-07678.herokuapp.com';
    const {data} = await axios.get(`${url}/api/posts`)
    const posts = data.data

    return {
        props: {
            posts
        }
    }
}

export default Blog;