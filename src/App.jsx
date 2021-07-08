import './App.css';

import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.js';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnIncrement = (e) => {
    this.setState(prevState => ({
      [e]: prevState[e] += 1
    }));
  };

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, neutral, bad) =>
    Math.round((good * 100) / this.countTotalFeedback(good, neutral, bad));

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(good, bad, neutral);
    const positiveFeedbackPercentage= this.countPositiveFeedbackPercentage(good, bad, neutral)

    return (
      <div className='container'>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.btnIncrement}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0
            ? (<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedbackPercentage} />)
            : (<Notification message="No feedback given"></Notification>)
          }     
        </Section>
      </div>
    )
  }
}
Statistics.defaultProps = {
    positivePercentage: 100
};

