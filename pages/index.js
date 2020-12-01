import React from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import Link from 'next/link';

const Home = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #DDD"
  }
  return (
    <Layout>
      {
        data.map(region => (
          <div style={styles} key={region.code}>
          <Link href="/region/[code]" as={`/region/${region.code}`} passHref>
            <h1>{region.nom}</h1>
          </Link>
            <p>{region.code}</p>
          </div>
        ))
      }
    </Layout>
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
