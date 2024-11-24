'use client';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Section = dynamic(() => import('@/components/Section')
    .then(result => result.Section), { ssr: false });

export default function Help() {
    useEffect(() => {
        document.title = 'Ajuda | Lacrei Saúde'
    })

    return <Section
        title='Ajuda'
        content='Conectamos pessoas LGBTQIAPN+ com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.'
        img='https://lacreisaude.com.br/_next/static/media/person-with-flag-around.5a804bf9.png'
        description='Pessoa enrolada na bandeira que representa a comunidade L G B T Q I A P N mais'
    />
}
