import React from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'

export const Home = () => {
    return (
        <div>
            <Header active="home" />
            We are home
            <Footer />
        </div>
    )
}
