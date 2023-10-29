import PropTypes from "prop-types"

const Button = ({text, color, onClick}) => {
    return (
        <button 
            onClick={onClick} 
            style={{ backgroundColor: color ? color : 'steelblue' }} 
            className="btn"
        >
            {text}
        </button>
    )
}

Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button