import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import css from './FesdbackCounter.module.css';

class FesdbackCounter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    addFeedbackGood = options  => {
        this.setState(prevState => ({ [options]: prevState[options] + 1 }));
    };



    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        if (this.state.good + this.state.neutral + this.state.bad) {
            return Math.round(100 / (this.state.good + this.state.neutral + this.state.bad) * this.state.good);
        }
        return 0;
    }

        

    render() {
        return (
            <div className={css.doxFeedback}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.addFeedbackGood}
                    />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                           <Notification message="There is no feedback"></Notification> 
                    )}
                </Section>
            </div>
        );
    }
};

export default FesdbackCounter;