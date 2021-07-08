import React from 'react';
import PropTypes from 'prop-types';

import { SpanName, } from './Statistics.style';

function Statistics({ good, neutral, bad,total,positivePercentage }) {
   
  return (
    <div>
      <SpanName>Good: { good}</SpanName>
      <SpanName>Neutral: {neutral}</SpanName>
      <SpanName>Bad: {bad}</SpanName>
      <SpanName>Total:{total}</SpanName>
      <SpanName>Positive feedback:{positivePercentage} %</SpanName>
      
    </div>   
  )  
}

  
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics
