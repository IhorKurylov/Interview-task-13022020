let getId = (x) => document.getElementById(x);
let resultRow0;
let resultRow1;
let resultRow2;
// changes background color
for (let i = 0; i <= 2; i++) {
    getId(`input${i}`).addEventListener("click", () => {
        if (getId(`input${i}`).checked) getId(`row${i}`).style.backgroundColor = '#189905';
        else getId(`row${i}`).style.backgroundColor = '#ffffff';
    })
};
const resultApply = (a, b, c) => {
    getId(`result0`).innerText = a;
    getId(`result1`).innerText = b;
    getId(`result2`).innerText = c;
};
//Summary for 3 inputs
//no conditions for NaN or null and in inputs values no error <span>
const sum = () => {
    resultRow0 = parseInt(getId('row10').value) + parseInt(getId('row11').value) + parseInt(getId('row12').value);
    resultRow1 = parseInt(getId('row20').value) + parseInt(getId('row21').value) + parseInt(getId('row22').value);
    resultRow2 = parseInt(getId('row30').value) + parseInt(getId('row31').value) + parseInt(getId('row32').value);
    resultApply(resultRow0, resultRow1, resultRow2);
};
//multiply for 3 inputs
//no conditions for NaN or null and in inputs values no error <span>
const multiply = () => {
    resultRow0 = parseInt(getId('row10').value) * parseInt(getId('row11').value) * parseInt(getId('row12').value);
    resultRow1 = parseInt(getId('row20').value) * parseInt(getId('row21').value) * parseInt(getId('row22').value);
    resultRow2 = parseInt(getId('row30').value) * parseInt(getId('row31').value) * parseInt(getId('row32').value);
    resultApply(resultRow0, resultRow1, resultRow2);
};
//sum event
getId('sum').addEventListener('click', () => sum());
//multiply event
getId('multiply').addEventListener('click', () => multiply())
//modal open Button text edit
getId("modalOpenBtn").addEventListener("click", () => getId('modalOpenBtn').innerText = 'Close calc');
getId('modalWindow').addEventListener('click', () => getId('modalOpenBtn').innerText = 'Open calc');