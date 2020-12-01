import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import {useRouter} from 'next/router'

const PostLink = ({titre}) => ( 
<li>
    <Link href={`/blog?titre=${titre}`}>
        <a>{titre}</a>
    </Link>
</li>
)

const Blog = () => {
    const router = useRouter();
    const styles = {
        links : {
            padding: 15,
        }
    }
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                <PostLink titre="React" />
                <PostLink titre="Angular" />
                <PostLink titre="Vue" />
                <PostLink titre="Svelte" />
            </ul>
            <h1>{router.query.titre}</h1>
        </Layout>
    )
}

export default Blog;