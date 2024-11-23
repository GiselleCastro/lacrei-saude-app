"use client"
import dynamic from 'next/dynamic';

const HomeContainer = dynamic(() => import('./styles')
    .then(result => result.HomeContainer), { ssr: false });


export default function Home() {
    return (
        <HomeContainer>
            <img
                src="https://lacreisaude.com.br/_next/static/media/greetings-banner-image.3ec83257.png"
                alt="Imagem de um estetoscópio em cima das cores da bandeira L G B T Q I A P N mais" />
        </HomeContainer>
    )
}