import Stickyfooter from '../stickyfooter/Stickyfooter'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { ToastProvider } from 'react-toast-notifications/dist/ToastProvider'
// import Headercontant from '../header/Headercontant'

const Layout = ({children,data_header}) => {
    return (
        <div>
           <Header/>
           {/* <Headercontant/> */}
           {children}
           <ToastProvider>
            <Footer data_header={data_header}/>
            </ToastProvider>
           {/* <Stickyfooter/> */}

        </div>
    )
}

export default Layout
