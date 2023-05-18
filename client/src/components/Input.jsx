import PropTypes from 'prop-types'
function Input({ id, title, value, event, className }) {
    return (
        <div className={className}>
            <label htmlFor={id}>{title}</label>
            <input
                type={id}
                id={id}
                value={value || ''}
                onChange={event}
            />
        </div>
    )
}
Input.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    event: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
}
export default Input
