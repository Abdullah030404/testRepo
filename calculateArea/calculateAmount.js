let groc1, groc2, groc3;

function calculateAmount() {
    groc1 = parseFloat(document.getElementById('groc1').value);
    groc2 = parseFloat(document.getElementById('groc2').value);
    groc3 = parseFloat(document.getElementById('groc3').value);

    let amount = groc1 + groc2 + groc3;

    document.getElementById('result').innerText = `The total amount is: ${amount}`;

}