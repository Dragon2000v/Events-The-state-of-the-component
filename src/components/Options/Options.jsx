import PropTypes from 'prop-types';

const Options = ({ pointsKey, onLeavePoint, onResetPoints, total }) => {
  return (
    <ul>
      {pointsKey.map(el => (
        <li key={el}>
          <button onClick={() => onLeavePoint(el)} type="button">
            {el}
          </button>
        </li>
      ))}
      {total > 0 && (
        <li>
          <button onClick={onResetPoints} type="button">
            RESET
          </button>
        </li>
      )}
    </ul>
  );
};

Options.propTypes = {
  pointsKey: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeavePoint: PropTypes.func.isRequired,
  onResetPoints: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Options;
