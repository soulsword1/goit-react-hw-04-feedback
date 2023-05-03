function countTotalFeedback(...attrs) {
  let total = 0;
  attrs.forEach(a => (total += a));
  return total;
}

export { countTotalFeedback };
