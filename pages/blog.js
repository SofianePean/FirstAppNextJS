import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = ({titre}) => ( 
<li>
    <Link href="/blog/[titre]" as={`/blog/${titre}`}>
        <a>{titre}</a>
    </Link>
</li>
)

const Blog = () => {
    const styles = {
        links : {
            padding: 15,
        }
    }
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                <PostLink titre="react" />
                <PostLink titre="Angular" />
                <PostLink titre="Vue" />
                <PostLink titre="Svelte" />
            </ul>
        </Layout>
    )
}

export default Blog;