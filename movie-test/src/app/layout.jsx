import React from 'react'
import './globals.css'
import Header from '@/component/Header'
import Head from './head.jsx'
const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <Head />
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}

export default Layout