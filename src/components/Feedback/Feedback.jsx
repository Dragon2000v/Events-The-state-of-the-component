import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ statistics, total, positive }) => {
  const modifiedStatistics = [
    ...statistics,
    ['total', total],
    ['positive', positive],
  ];

  if (modifiedStatistics.length > 0) {
    modifiedStatistics[modifiedStatistics.length - 1][1] += '%';
  }

  return (
    <ul className={s.feedback}>
      {modifiedStatistics.map(([key, value]) => (
        <li className={s.feedback_item} key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
};

Feedback.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Feedback;
