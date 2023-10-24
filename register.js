
let inputPass1 = document.querySelector('.inp5');
  let eye2 = document.querySelector('.eyeline1');
  eye2.addEventListener('click',()=>{
      if (inputPass1.getAttribute('type')==="password" ){
          inputPass1.setAttribute('type',"text");
      }else{
          inputPass1.setAttribute('type',"password");
      }
      
  })


  
let inputPass2 = document.querySelector('.inp6');
let eye3 = document.querySelector('.eyeline2');
eye3.addEventListener('click',()=>{
    if (inputPass2.getAttribute('type')==="password" ){
        inputPass2.setAttribute('type',"text");
    }else{
        inputPass2.setAttribute('type',"password");
    }
    
})

$( function() {
    $( "#datepicker" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
  } );


  