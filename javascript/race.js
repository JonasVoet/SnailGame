// Varibales

let snail1 = {
    id: "a",
    name: "John",
    img: "./images/snegl1.png",
    x: -160,
    y: 10
};

let snail2 = {
    id: "b",
    name: "Leif",
    img: "./images/snegl2.png",
    x: -160,
    y: 140
};

let snail3 = {
    id: "c",
    name: "Bo",
    img: "./images/snegl3.png",
    x: -160,
    y: 270
};

let snail4 = {
    id: "d",
    name: "John John",
    img: "./images/snegl4.png",
    x: -160,
    y: 400
};

let sec = 0; //Tæller til at tælle, hvor lang tid ræset har varet.
let minSpring = 3; //Min. antal px sneglene skal flytte sig pr. gang.
let maxSpring = 15; //Max. antal px (+minSpring), som snegele må flytte sig.
let timeInterval = 100; //Variabel hvor sneglene skal flytte sig (100 = 100 milisekunder pause)
let finishLine = 730; // Sneglenes 'bagende' der måles på

window.onload = function () {
    //Finder div raceway, hvor sneglene skal ligge
    let raceTrack = document.getElementById('raceway');

    //Opretter en ny div inde i raceway, med snegl1 properties.
    let s1 = document.createElement('div');
    s1.id = snail1.id;
    s1.title = snail1.name;
    s1.className = "snail-container";
    s1.style.backgroundImage = "url('" + snail1.img + "')";
    s1.style.top = snail1.y + "px";
    s1.style.left = snail1.x + "px";
    raceTrack.appendChild(s1);


    // snail 2

    let s2 = document.createElement('div');
    s2.id = snail2.id;
    s2.title = snail2.name;
    s2.className = "snail-container";
    s2.style.backgroundImage = "url('" + snail2.img + "')";
    s2.style.top = snail2.y + "px";
    s2.style.left = snail2.x + "px";
    raceTrack.appendChild(s2);




    // snail 3

    let s3 = document.createElement('div');
    s3.id = snail3.id;
    s3.title = snail3.name;
    s3.className = "snail-container";
    s3.style.backgroundImage = "url('" + snail3.img + "')";
    s3.style.top = snail3.y + "px";
    s3.style.left = snail3.x + "px";
    raceTrack.appendChild(s3);

    // snail 4

    let s4 = document.createElement('div');
    s4.id = snail4.id;
    s4.title = snail4.name;
    s4.className = "snail-container";
    s4.style.backgroundImage = "url('" + snail4.img + "')";
    s4.style.top = snail4.y + "px";
    s4.style.left = snail4.x + "px";
    raceTrack.appendChild(s4);
}

//Function der starter løbet ved tryk at startbutton

function start() {
    document.getElementById('startbutton').style.display = 'none';
    afsted();                                                //Skjuler knappen
                                                        // Kalder functionen der starter race
};

// function der får sneglene til at 'løbe'
function afsted() {
    //Ny position bestemmes
    // Sneglenes nuværende x-position øges med til random tal, som laves i functionen spring
    snail1.x += spring();
    snail2.x += spring();
    snail3.x += spring();
    snail4.x += spring();

    //Snegelene flyttes en nye positon i x-aksen
    document.getElementById(snail1.id).style.left = snail1.x + "px";
    document.getElementById(snail2.id).style.left = snail2.x + "px";
    document.getElementById(snail3.id).style.left = snail3.x + "px";
    document.getElementById(snail4.id).style.left = snail4.x + "px";

    //Spillet slutter når en eller begge snegle når i mål. Målet er angivet i varablen "finishLine"
if (snail1.x >= finishLine || snail2.x >= finishLine || snail3.x >= finishLine || snail4.x >= finishLine) {

    // finder ud af hvem vinderen er, ved at samligne der positions
    if (snail1.x > snail2.x && snail1.x > snail3.x && snail1.x > snail4.x) {
        setTimeout("winner('" + snail1.name + "');", 1000);
    }

    else if (snail2.x > snail1.x && snail2.x > snail3.x && snail2.x > snail4.x) {
        setTimeout("winner('" + snail2.name + "');", 1000);

    }

    else if (snail3.x > snail1.x && snail3.x > snail2.x && snail3.x > snail4.x) {
        setTimeout("winner('" + snail3.name + "');", 1000);

    }

    else if (snail4.x > snail1.x && snail4.x > snail2.x && snail4.x > snail3.x) {
        setTimeout("winner('" + snail4.name + "');", 1000);

    }

    else {
        setTimeout("winner('');", 1000);
    }

}

else {
    setTimeout("afsted();", timeInterval);
    sec = sec + 1; //Sukundertælleren tæller op.
}

};

//Function der kårer vinderen
function winner(vinderen) {
    let time = (sec * timeInterval) / 1000; //Beregner hvor lang tid løbet tog
     if(vinderen == "") {
         alert("Ræset er slut - det blev uafgjort! Det tog" + time + " sekunder.");
     }

     else {
         alert("Ræset blev vundet af " + vinderen + "! Det tog " + time + " sekunder.");
     }

     window.location.reload(); //Genindlæser siden og dermed spillet
};

//En function der retunerer et tilfældigt tal. Min- og max er angivet i starten af .js filen
function spring() {
    let randomStep = Math.round(Math.random() * maxSpring) + minSpring;
    return randomStep;
}










