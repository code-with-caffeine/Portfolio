function ds(x){
    return document.querySelector(x)
}
function dsa(x){
    return document.querySelectorAll(x)
}
function ce(x){
    return document.createElement(x)
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}