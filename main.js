function calculate (num) {
  if (num <= 0) {
    return "Please enter a positive, non-zero value.";
  }
  else if (num <= 10) {
    return Number((num * 0.1).toFixed(2));
  }
  else if (10 < num && num <= 20) {
    return Number((1 + (num - 10) * 0.07).toFixed(2));
  }
  else if (20 < num && num <= 30) {
    return Number((1.7 + (num - 20) * 0.05).toFixed(2));
  }
  else {
    return Number((2.2 + (num - 30) * 0.03).toFixed(2));
  }
}

module.exports = {
  calculate
}
