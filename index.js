 function addingEventListener(){ 
    var someInput = document.querySelector('input');

someInput.myParam = 'This is my parameter';
someInput.addEventListener('click', myFunc, false);

function myFunc(event) {
  window.alert( event.target.myParam );
}
} 
