/*
let copyyear = new Date().getFullYear();

const copyRightYear = () => {
    let copyYear = Symbol();
    copyYear = new Date().getFullYear();
    return copyYear;
}

copyRightYear();
*/




const copyRightYear = () => {
    let copyYear = Symbol();
    copyYear = new Date().getFullYear();
    const spanYear = document.getElementById('spanYear')
    return spanYear.innerHTML = `copyright &copy; ${copyYear} xgqfrms`;
}
window.onload = copyRightYear();





