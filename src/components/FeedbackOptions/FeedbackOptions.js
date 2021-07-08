import React from 'react'
import PropTypes from 'prop-types'
import {Button,} from './FeedbackOptions.style'



function FeedbackOptions({ options, onLeaveFeedback }) {
    const btns = Object.keys(options)

    return (
        <div>
            {btns.map((btn, i) => (
                <Button key={i} type="button" onClick={() => onLeaveFeedback(btn)}>
                    {btn}
                </Button>
            ))}
        </div>
    )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};