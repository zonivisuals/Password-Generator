const passwordCase = document.getElementById("password")
const generateBtn = document.getElementById("btn")
const copy = document.getElementById("copy")

generateBtn.addEventListener("click",generatePassword)
copy.addEventListener("click",copyPassword)


function generatePassword() {
    let password = "";
    let arr = [];
    for (let i = 0; i < 12; i++) {
        let char = "";
        let randOne = Math.floor(Math.random()*(38-33+1)+33)
        let randTwo = Math.floor(Math.random()*(57-48+1)+48)
        let randThree = Math.floor(Math.random()*(90-64+1)+64)
        let randFour = Math.floor(Math.random()*(122-97+1)+97)
        
        arr.push(String.fromCharCode(randOne));
        arr.push(String.fromCharCode(randTwo));
        arr.push(String.fromCharCode(randThree));
        arr.push(String.fromCharCode(randFour));
        
        let k = Math.floor(Math.random() * arr.length);
        password += arr[k];
    }
    
    passwordCase.value = password;
}

function copyPassword(){
    passwordCase.select();
    document.execCommand("copy")
}