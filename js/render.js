function render() {
  const name = document.getElementById('name').value;
  const period = document.getElementById('period').value;
  const income = document.getElementById('income').value;
  const tax = tax3group(income);
  const text = `
        Привет,
        ${name}, твой налог за ${period} будет составлять ${tax}
      `;
  // y (3,4)
  document.getElementById('result').innerHTML = text;
}
