import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div className={css.boxStat}>
        <p className={css.itemStat}>Good: {good}</p>
        <p className={css.itemStat}>Neutral: {neutral}</p>
        <p className={css.itemStat}>Bad: {bad}</p>
        <p className={css.itemStat}>Total: {total}</p>
        <p className={css.itemStat}>Positive feedback: {positivePercentage}%</p>
    </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;