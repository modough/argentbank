import { Fragment } from "react"
import { useSelector } from "react-redux"
import PropTypes from 'prop-types'
import SignInPage from "../pages/SignInPage"

export const LayoutAdmin = ({ children }) => {
    const { token } = useSelector((state) => state.userReducer)
    if (!token) {
        <SignInPage />
    }
    if (token) {
        return (
            <Fragment>{children}</Fragment>
        )
    }
}

LayoutAdmin.propTypes = {
    children: PropTypes.object,
}