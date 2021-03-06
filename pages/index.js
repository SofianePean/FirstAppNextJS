import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import axios from 'axios';
import Link from 'next/link';

const Home = ({ data }) => {
  const styles = {
    div : {
      padding: 10,
      margin: 10,
      // borderBottom: "1px solid #DDD"
      backgroundColor: 'white',
      cursor: "pointer",
    },
    page: {
      paddingTop: 20,
      backgroundColor: '#F3F3F3',
    }
  }
  return (
    <>
    <Head>
      <title>Liste des régions</title>
    </Head>
    <Layout>
    <div style={styles.page}>
      {
        data.map(region => (
          <Link href="/region/[code]" as={`/region/${region.code}`} passHref key={region.code}>
            <div style={styles.div} key={region.code}>
              <h1 style={styles.h1}>{region.nom}</h1>
              <p>{region.code}</p>
            </div>
          </Link>
        ))
      }
    </div>
    </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const url = 'https://geo.api.gouv.fr'
  const {data} = await axios.get(url + '/regions')
  return {
    props: {
      data
    }
  }
}

export default Home;
