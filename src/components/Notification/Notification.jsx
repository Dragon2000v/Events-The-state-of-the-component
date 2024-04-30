import PropTypes from 'prop-types';

const Notification = ({ text }) => {
  return <h3>{text}</h3>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
