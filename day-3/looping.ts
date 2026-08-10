// LOOPING STATEMENT
// for: perulangan untuk bilangan yang sudah diketahui

for (let step: number = 1; step <= 10 ; step ++){
    console.log("naik tangga ke - : ", step);
}

for (let x: number = 0; x < 6; x++){
    console.log("first section : ", x)
    for (let y: number = 0; y < 4; y++){
        console.log(" --- second section : ", y)
    }
}

console.log("--- WHILE LOOP STATEMENT ---");

let batteryLevel: number = 50

while(batteryLevel < 100){
    batteryLevel++
    console.log("Charging .. Battery level : ", batteryLevel)
}

console.log("Battery fully charged");

// nested while

let dirtyPlatesLeft: number = 2

while (dirtyPlatesLeft > 0){
    console.log("Taking plate number " + dirtyPlatesLeft + "from sink .");

    let scrubCount: number = 0;
    let isClean: boolean = false;

    while(!isClean){
        scrubCount++
        console.log("Scrubbing plate ...(" + scrubCount + "time) ");

        if(scrubCount >= 3){
            isClean = true;
            console.log("Plate is clean");
        }
    }

    --dirtyPlatesLeft;
}

console.log("All plates washed successfully")