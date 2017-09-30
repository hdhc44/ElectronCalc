var button = document.getElementsByTagName('input')
var form = document.forms['cal'];


for(var i=0;i<button.length;i++){
    button[i].onclick = function(){
        calc(this.value);
    }
}

function calc(value){
    if(form['output'].value == 0){
        form['output'].value = '';
    }
    form['output'].value += value;
}