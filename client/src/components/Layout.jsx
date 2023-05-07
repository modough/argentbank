import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}
Layout.propTypes = {
    children: PropTypes.array
}
export default Layout