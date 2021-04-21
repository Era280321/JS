//Task 1
function upperCase(word){
    if ( /[A-Z]/.test(word [0])){
        console.log("String's starts with uppercase character")
    
    }else{
        console.log("String's not starts with uppercase character")
    }
}
upperCase("Rex")
//String's starts with uppercase character

//Task 2
function checkEmail(email) {
    let re1 =/.+@{1}.+\.com/
    // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re1.test(String(email));
}
checkEmail("Qmail2@gmail.com");
//true

//Task 3

    let re2=/d{1}(b+)(d{1})/gi;
    let str = "cdbBdbsbz";
    let result = re2.exec(str)
    console.log(result); 
    let Found_b =console.log(result[1]);
    let Next_d = console.log(result[2]);
    //["dbBd", "bB", "d"
    //bB
    //d

//Task 4

let str = "Java Script"
let re3 = /^(.+)\s(.+)$/
let beginning = re3.exec(str)[1]
let ending = re3.exec(str)[2]

console.log(beginning)
console.log(ending)

str=str.replace(ending,beginning)

console.log(str)
str=str.replace(beginning,ending+",")


console.log(str)
//Script, Java


//Task 5

function checkBankAcc(acc){
    re4=/(\d{4}-){3}\d{4}/
    result=re4.test(acc)
    console.log (result)
}

checkBankAcc("9999-9999-9999-9999")

//true


//Task 6
function checkEmail2(email)
{
    re5=/^(?!-|_)\w*-?\w*@gmail\.com/
    result=re5.test(email)
    console.log (result)
}

checkEmail2('my_mail@gmail.com')
checkEmail2('#my_mail@gmail.com')
//true
//false

//Task 7

function checkLogin (login)
{let re6=/^(?=.{1,10}$)^(?!\d)([A-Za-z0-9])*(\d+(\.\d+)?)([A-Za-z0-9]*)$/
result=re6.test(login)
    console.log (result)
}
checkLogin('ee1.1ret3');

checkLogin('ee1*1ret3');
//true
//false