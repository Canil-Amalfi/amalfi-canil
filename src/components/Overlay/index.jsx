import PropTypes from "prop-types";

export default function Overlay({ children }) {
  return <section className="overlay">{children}</section>;
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired
}