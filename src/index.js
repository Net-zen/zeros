module.exports = function zeros(expression) {
  const factorials = expression.split('*');
  let denomin = [2, 5], two = 0, five = 0;
  factorials.forEach(element => {
    let single = (element.includes('!!')) ? 2 : 1;
    element = parseInt(element);
    denomin.forEach(el => {
      for (let i = element; i >= el; i -= single) {
        if (!(i % el)) {
          let x = i;
          while (!(x % el)) {
            x /= el;
            (el === 2) ? two += 1: five += 1;
          }
        }
      }
    });
  });
  return (two < five) ? two : five;
}
