import PropTypes from 'prop-types';
import css from "./Notification.module.css";

const Notification = ({ message }) => (
  <div>
    <h2 className={css.title}>{message}</h2>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;