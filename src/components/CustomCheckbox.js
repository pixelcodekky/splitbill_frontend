import PropTypes from 'prop-types';

const CustomCheckbox = ({name, checked = false, onChange}) => {
    return (
        <input type='checkbox' name={name} checked={checked} onChange={onChange} />
    )
}

CustomCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}

export default CustomCheckbox;