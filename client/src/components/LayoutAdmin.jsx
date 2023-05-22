import { Fragment } from "react"
import { useSelector } from "react-redux"
import PropTypes from 'prop-types'

export const LayoutAdmin = ({ children }) => {
    const { token } = useSelector((state) => state.userReducer)
    if (token) {
        return (
            <Fragment>{children}</Fragment>
        )
    }
}

LayoutAdmin.propTypes = {
    children: PropTypes.object,
}