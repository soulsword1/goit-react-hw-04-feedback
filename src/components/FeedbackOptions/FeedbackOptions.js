import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div>
      {options.map(o => {
        return (
          <FeedbackButton key={o} name={o} onClick={onLeaveFeedback}>
            {o}
          </FeedbackButton>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};


