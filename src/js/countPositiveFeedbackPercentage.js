const countPositiveFeedbackPercentage = (good, total) =>
  `${parseFloat((good / total) * 100).toFixed(2)}%`;

export { countPositiveFeedbackPercentage };
