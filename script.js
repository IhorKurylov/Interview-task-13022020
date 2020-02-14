let getId = (x) => document.getElementById(x);
const getClass = (x) => document.getElementsByClassName(x);
const modalButton = document.getElementById('modalOpenBtn');

// changes background color
for (let i = 0; i <= 2; i++) {
    getId(`input${i}`).addEventListener("click", () => {
        if (getId(`input${i}`).checked) getId(`row${i}`).style.backgroundColor = '#189905';
        else getId(`row${i}`).style.backgroundColor = '#ffffff';
    })
};











getId("modalOpenBtn").addEventListener("click", () => {
    getId('modalOpenBtn').innerText = 'Close calc'
});
getId('modalWindow').addEventListener('click', () => {
    getId('modalOpenBtn').innerText = 'Open calc'
});