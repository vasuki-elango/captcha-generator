// Get element 
let refresh_btn = document.getElementById("refresh-btn");
let sumbit_btn = document.getElementById("sumbit-btn");
let captcha_box = document.getElementById("captcha-input-box");
let input_box = document.getElementById("input-box");

refresh_btn.addEventListener("click",() => {
    generate();
})

//generate the captcha
function generate(){
    let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let result = '';
    for(let i = 1 ; i <= 6 ;i++){
        result += character.charAt(Math.floor(Math.random()*character.length));
    }

    //set the captcha value
    captcha_box.value = result;
    captcha_box.style.fontFamily= '"Comforter Brush", cursive'
    input_box.value = ''
}

sumbit_btn.addEventListener("click",(e) => {
    //check captcha value and user input value
    if(captcha_box.value === input_box.value){
        alert("Valid captcha");
    }
    else{
        alert("Please enter valid captcha")
    }
    generate();
})