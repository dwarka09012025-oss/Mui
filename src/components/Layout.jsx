import React from 'react'
import Head from './Head.jsx'
import Foot from './Foot.jsx'

const Layout = ({ children }) => {
    return (
        <>
            <Head></Head>
            {children}
            <Foot></Foot>
        </>
    )
}

export default Layout