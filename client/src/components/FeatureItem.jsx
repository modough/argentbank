import PropTypes from 'prop-types'
function FeatureItem({ logo, title, description }) {
    return (
        <div className="feature-item">
            <img
                src={logo}
                alt='logo-icon'
                className="feature-icon"
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}
FeatureItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.string,
}
export default FeatureItem