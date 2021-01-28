a = document.querySelector('#button_calculate');

a.addEventListener('click',function(e){
    radius  = document.querySelector('#value_radius');
    answer = document.querySelector('#value_ans');

    let sphere;
    sphere = 4/3 * parseFloat(radius.value) * parseFloat(radius.value) * parseFloat(radius.value);
    answer.value = sphere;
     
})