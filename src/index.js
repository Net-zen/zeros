module.exports = function zeros(expression) {
  const factorials = expression.split('*');
  let denomin = [2, 5];
  let two = 0,
    five = 0;
  factorials.forEach(element => {
    let single = (element.includes('!!')) ? 2 : 1;
    element = parseInt(element);
    denomin.forEach(el => {
      let i = element;
      while (i >= el) {
        if (!(i % el)) {
          let x = i;
          do {
            x /= el;
            (el === 2) ? two += 1: five += 1;
          } while (!(x % el));
        }
        i -= single;
      }
    });
  });
  return (two < five) ? two : five;
}
