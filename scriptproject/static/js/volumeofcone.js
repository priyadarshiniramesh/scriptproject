a = document.querySelector('#button_calculate');

a.addEventListener('click',function(e){
    radius  = document.querySelector('#value_radius');
    height = document.querySelector('#value_height');
    answer = document.querySelector('#value_ans');

    let cone;
    cone = 1/3  * 3.14 * parseFloat(radius.value) * parseFloat(radius.value) * parseFloat(height.value);
    answer.value = cone;
     
})