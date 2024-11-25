"use client"
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const HomeContainer = dynamic(() => import('./styles')
    .then(result => result.HomeContainer), { ssr: false });

export default function Home() {
    useEffect(() => {
        document.title = 'Início | Lacrei Saúde'
    })

    return (<>
        <HomeContainer data-testid='home-section'>
            <img
                src="https://lacreisaude.com.br/_next/static/media/greetings-banner-image.3ec83257.png"
                alt="Imagem de um estetoscópio em cima das cores da bandeira L G B T Q I A P N mais" />
        </HomeContainer>
    </>
    )
}