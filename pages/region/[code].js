import React from 'react';
import {useRouter} from 'next/router';
import axios from 'axios'

const CodeRegion = ({ data }) => {
    const router = useRouter()
    return (
        <div>
            <h1>Région : {data.nom}</h1>
            <p>Code : {data.code}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
    const url = 'https://geo.api.gouv.fr'
    const {data} = await axios.get(url + `/regions/${context.params.code}`)
    return{  
        props: {
            data
        }
    }
}

export default CodeRegion;