import React from 'react';
import {useRouter} from 'next/router';

const Titre = () => {
    const router = useRouter();
    return (
        <div>{router.query.titre}</div>
    )
}

export default Titre;