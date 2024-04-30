import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ text }) => {
  return <h3 className={s.title}>{text}</h3>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
