const getValue = (card) => {
  let value = card.substring(0, card.length - 1);
  if (value === "0" || value === "K" || value === "Q" || value === "J") {
    value = 10;
  } else if (value === "A") {
    value = 11;
  } else if (value === "ten") {
    value = 10;
  } else if (value === "nine") {
    value = 9;
  } else if (value === "eight") {
    value = 8;
  } else if (value === "seven") {
    value = 7;
  } else if (value === "six") {
    value = 6;
  } else if (value === "five") {
    value = 5;
  } else if (value === "four") {
    value = 4;
  } else if (value === "three") {
    value = 3;
  } else if (value === "two") {
    value = 2;
  }
  return value;
};
export default getValue;
