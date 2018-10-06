var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++){     <!-- the variable i is not initialised fixed-->
   inputs[i].onchange = changeHandler;
}
document.getElementsByTagName('select')[0].onchange = function() {
changeHandler();
}
function changeHandler(event) {
    // You can use “this” to refer to the selected element.
     document.forms["req"].submit();
}
