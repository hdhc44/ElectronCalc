var button = document.getElementsByTagName('input')
var form = document.forms['cal'];
var resultBtn = document.getElementById('result');

for(var i=0;i<button.length;i++){
    if(button[i].value != '=' && button[i].value != 'clear' && button[i].type == "button"){
        button[i].onclick = function(){
            calc(this.value);
        }
    }

}

function calc(value){
    if(form['output'].value == 0){
        form['output'].value = '';
    }
    form['output'].value += value;
}
function showResult(){
    var result = form['output'].value;
    var calc = eval(result);
    form['output'].value = calc;
}
resultBtn.onclick = function(){
    showResult();
}