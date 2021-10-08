import Stickyfooter from '../stickyfooter/Stickyfooter'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { ToastProvider } from 'react-toast-notifications/dist/ToastProvider'

import Head from 'next/head'
// import Headercontant from '../header/Headercontant'

const Layout = ({ children, data_header }) => {
    return (
        <div>

            <Head>
                <title> Rukhmani Devi   Public School</title>
                <link rel="icon" type="image/jpg" href="/images/pglogo.png" />
            </Head>

            <Header />
            {/* <Headercontant/> */}
            {children}
            <ToastProvider>
                <Footer data_header={data_header} />
            </ToastProvider>
            {/* <Stickyfooter/> */}

        </div>
    )
}

export default Layout
