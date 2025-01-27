import React from 'react'
import Navbar from '../../Components/Client/Navbar'
import Footer from '../../Components/Client/Footer'

export default function Layout({ renderBody }) {
    return (
        <>
            <Navbar />
            {renderBody}
            <Footer />
        </>
    )
}
