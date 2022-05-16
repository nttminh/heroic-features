import React from 'react'
import { Container } from 'reactstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'

function DefaultLayout({ children }) {
    return (<>
        <Header />
        <Container>{children}</Container>
        <Footer />
    </>
    )
}

export default DefaultLayout