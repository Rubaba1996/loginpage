let inputPass = document.querySelector('.inp2');
let eye1 = document.querySelector('.eye1');
eye1.addEventListener('click',()=>{
    if (inputPass.getAttribute('type')==="password" ){
        inputPass.setAttribute('type',"text");
    }else{
        inputPass.setAttribute('type',"password");
    }
    
})