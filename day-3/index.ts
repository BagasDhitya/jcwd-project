let age : number = 20;

if (age >= 17){
    console.log("Now you can create identity card")

}

let isVIPMember: boolean = true;

if(isVIPMember){
    console.log("Welcome back, VIP Guest")
}

//nested IF

const userAge: number = 17;
const hasStudentCard: boolean = true;

if (userAge >=17){
    console.log("Access granted: You are allowed to watch this movie");

    if(hasStudentCard){
        console.log("Student discount applied: You get a 20% discount")
    }
}

console.log( "---IF ELSE STATEMENT ---");

// if else statement

//SKENARIO AWAL : kecukupan saldo untuk beli kopi

const accountBalance: number = 25000
const coffePrice: number = 30000

if(accountBalance >= coffePrice){
    console.log("Transaction successful! Enjoy your coffe")
} else {
    console.log("Transaction failed: Insufficient balance")
}

// Nested If Else
const username: string = "john.doe";
const accountType: string = "ADMIN";

const registeredUsername: string = username;
const registeredAccountType: string = accountType;

if(username === registeredUsername){
    if(accountType === registeredAccountType){
        console.log("Access Granted: Welcome back John Doe")
    }
}else {
    console.log("Invalid username");
}

// --ELSE IF

const visitorAge: number = 60
if(visitorAge < 5){
    console.log("Ticket Price: Free")
} else if (visitorAge <=17){
    console.log("Ticket price: child rate ($5)");
} else if (visitorAge <=60){
    console.log("Ticket Price: Adult Rate ($10)")
} else{
    console.log("Ticket Price: Senior Citizen Rate ($6)")
}

// SWITCH CASE STATEMENT

const trafficLightColor: string = "yellow"

switch(trafficLightColor){
    case "red":
        console.log("Stop! The light is red");
    break;
    case "yellow":
        console.log("Caution! Prepare to stop or clear intersection");
    break;
    case "green":
        console.log("Go! The light is green");
    default:  
        console.log("Invalid traffic light colour! Proceed with extreme caution");
    break; 
}

const usernamePerson: string = "john.doe";

if(usernamePerson){
    console.log("Welcome, " + usernamePerson)
} else {
    console.log("Please enter your username");
}

// AND (&&)-> STATEMENT TRUE
// OR (||) Jika salah satu bernilai true
// NOT(!) -> NEGASI LAWAN DARI NILAI YANG SUDAH DITETAPKAN

const userHeightCm: number = 160
const hasHeartCondition: boolean = false;

if(userHeightCm >=145 && !hasHeartCondition){
    console.log("Permission granted: You can ride the roller coaster!");
} else {
    console.log("Permission denied: safety requirements not met");
}

const statementA: boolean = true
const statementB: boolean = false
const statementX: boolean = !statementA
const statementY: boolean = !statementB 

if(statementY || statementA){
    console.log("Correct");
} else {
    console.log("Invalid")
}

//skenario: validasi batasan user ingin login

const inputPassword = "johndoe123"
const inputAttempt = 8
const maxAttempt = 5

if(inputPassword === "johndoe123" && inputAttempt <= maxAttempt){
    console.log("Access Granted");
} else {
    console.log("Access Denied or Max Attempt reached!")
}


// console.log("--TERNARY OPERATOR --")
// const examScore: number = 80;
// let examResult: string;

// if(examScore >= 75){
//     examResult = "PASSED";
// } else {
//     examResult = "FAILED";
// }

const examScore: number = 80
const examResult: string = examScore >=75 ? "PASSED" : "FAILED";
console.log(examResult);

