var submit1 = document.getElementById("btn").addEventListener('click', storeInfo)

var inputName = document.getElementById('name', validateName)
var mobileNo = document.getElementById('mobile')
document.getElementById('mobile').addEventListener('change', phoneValidation)

var mailId = document.getElementById('mail')
document.getElementById('mail').addEventListener('change', validateEmail)

var subject = document.getElementById('subject')

var password = document.getElementById('password')
document.getElementById('password').addEventListener('change', validatePassword)

var msg = document.getElementById('message')

let star = document.querySelectorAll('label')

for (i = 0; i < star.length; i++) {
    star[i].innerHTML += '<i class="fa-duotone fa-asterisk"></i>'
}

function storeInfo(e) {
    e.preventDefault()

    let allDetail = {
        nameValue: inputName.value,
        ph: mobileNo.value,
        mail: mailId.value,
        sub: subject.value,
        pw: password.value,
        message: message.value
    }
    console.log(allDetail)

    let arr = []
    if (inputName.value === "") {
        arr.push("enter name")
        inputName.style.border = '2px solid red';
    }
    if (mobileNo.value === "") {
        arr.push("enter phone number")
        mobileNo.style.border = '2px solid red';
    }
    if (mailId.value === "") {
        arr.push("enter mail id")
        mailId.style.border = '2px solid red';
    }
    if (subject.value === "") {
        arr.push("enter subject")
        subject.style.border = '2px solid red';
    }
    if (password.value === "") {
        arr.push("enter password")
        password.style.border = '2px solid red';
    }
    if (message.value == "") {
        arr.push("enter message")
        message.style.border = '2px solid red';
    }

    console.log(arr)
    // var uname = localStorage.setItem("name", inputname)
    // var uno = localStorage.setItem("number", mobileNo)
    // var uid = localStorage.setItem("mailId", mailId)
    // var usub = localStorage.setItem("subject", subject)
    // var upw = localStorage.setItem("password", password)
    // var umsg = localStorage.setItem("msg", msg)


    // // var sub = e.target.value
    // // console.log(e.target.input);
    // console.log(inputName.placeholder+':'+ inputName.value)
    // console.log("Mobile number"+':'+ mobileNo.value)
    // console.log("Email Id" +':'+ mailId.value)
    // console.log(subject.placeholder+':'+ subject.value)
    // console.log(password.placeholder+':'+ password.value)
    // console.log(msg.placeholder+':'+ msg.value)

}
function phoneValidation() {
    var ten = document.getElementById('mobile').value
    if (ten.length !== 10) {
        alert('enter 10 digit phone number')
    }
}
function validateEmail() {
    const mail = document.getElementById('mail').value
    if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert('invalid mail id')
    }
}
function validatePassword() {
    const passwordvalue = document.getElementById('password').value
    if (!passwordvalue.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
        alert('example: Ul@2kfsd')
    }
}
function validateName() {
    const uname = document.getElementById('name').value
    if(!uname.match("^[a-zA-Z]+( [a-zA-Z]+)*$")){
        alert('name must be in alphabet')
    }

    // const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    // return nameRegex.test(uname);
}