import Header from '../header/Header'
import Footer from '../footer/Footer'

import Head from 'next/head'

const Layout = ({ children, data_header }) => {
    return (
        <div>
            <Head>
                <title>Rukhmani Devi Public School</title>
                <link rel="icon" type="image/jpg" href="/images/fullogo.png" />
            </Head>
            <Header />
            {children}
            <Footer data_header={data_header} />
        </div>
    )
}

export default Layout
