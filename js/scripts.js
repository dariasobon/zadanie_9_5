var buttonClass = document.getElementsByClassName('button');

console.log(buttonClass);

for (var i = 0; i < buttonClass.length; i++){
	var butCls = buttonClass[i].innerText; window.alert(butCls);
}

