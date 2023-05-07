import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { countTotalFeedback, countPositiveFeedbackPercentage } from '../js';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    e.preventDefault();
    const feedbackName = e.currentTarget.name;
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback(good, neutral, bad);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(good, total)}
            />
          )}
        </Section>
      </div>
    );
  }
}
