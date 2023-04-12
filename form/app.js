window.onload = function(){
    //データ取得
    const savedEmail = localStorage.getItem("email");
    const savedPass = localStorage.getItem("password");
    //DOM(取得先定義)
    const email = document.getElementsByName("email")
    const password = document.getElementsByName("password")

    if(savedEmail == null){
        email.value = savedEmail;
        console.log(savedEmail)
    }
    if(savedPass == null){
        email.value = savedPass;
        console.log(savedPass)
    }
};

    //クリックイベント
    const btn = document.getElementsByTagName("button");
    btn.addEventListener("click",function(){

            const inputEmail = document.getElementsByName("email").value;
            const inputPass = document.getElementsByName("password").value;

            localStorage.setItem("email", inputEmail);
            localStorage.setItem("password", inputPass);
        },false);
