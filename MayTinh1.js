const view = document.getElementById('view');
function inputValue(value) {
    view.value += value;
}
function result() {
    let result = eval(view.value);
    view.value = result;
    alert(result);
}
function AC() {
    view.value="";
}
