import s from './Options.module.css';
import PropTypes from 'prop-types';

const Options = ({ pointsKey, onLeavePoint, onResetPoints, total }) => {
  return (
    <ul className={s.options}>
      {pointsKey.map(el => (
        <li className={s.ptions_item} key={el}>
          <button
            className={s.options_btn}
            onClick={() => onLeavePoint(el)}
            type="button"
          >
            {el}
          </button>
        </li>
      ))}
      {total > 0 && (
        <li className={s.ptions_item}>
          <button
            className={s.options_reset_btn}
            onClick={onResetPoints}
            type="button"
          >
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
