import React from "react";
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div className={css.boxButton}>
        {options.map(option => (
            <button
                className={css.button}
                type="button"
                key={option}
                onClick={() => onLeaveFeedback(option)}
            >
                {option}
            </button>
        ))}
    </div>
)



export default FeedbackOptions;