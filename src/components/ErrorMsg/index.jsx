import PropTypes from 'prop-types';

export default function ErrorMsg({msg}) {
    return <small>{msg}</small>
}

ErrorMsg.propTypes = {
    msg: PropTypes.string.isRequired
}