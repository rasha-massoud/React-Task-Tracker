import PropTypes from "prop-types"

const Button = ({text, color, isClicked}) => {
    return (
        <button onClick={isClicked} className="btn">{text}</button>
    )
}

Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    isClicked: PropTypes.func,
}

export default Button