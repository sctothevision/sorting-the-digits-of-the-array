const arr = [12, 2, 1, 4, 5, 9];

function compareNum(a, b) {
    return a - b;
}

let out = document.querySelector('.out-1');

function sort() {
    arr.sort(compareNum);
    out.classList.remove('before');
    out.classList.add('numbers');
    out.innerHTML = arr.join(' ');
}



document.querySelector('.b-1').addEventListener('click', sort);



document.querySelector('.b-1').ondblclick = () => {
    out.classList.remove('numbers');
    out.classList.add('before');
    out.innerHTML = `12, 2, 1, 4, 5, 9`;
};