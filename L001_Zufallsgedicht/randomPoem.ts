namespace Poem {

let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore" ]; //array for subject

let predicate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört" ]; //array for predicate

let object: string[] = ["Zaubertränke", "den Grimm", " Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren" ]; //array for object

//console.log(subject, praedikat, object);


for (let i: number = 6; i > 1; i--) { //until 1 is bigger then 0 then it stops
    //console.log(i);
    getVerse(subject, predicate, object);
}

function getVerse (_subject: string [], _predicate: string[], _object: string[]): void {
    //console.log("Alohomora");
    let verse: string = "";
    
    let randomSubject: number = Math.floor(Math.random() * _subject.length);
    console.log(randomSubject);

    let randomPredicate: number = Math.floor(Math.random() * _predicate.length);

    let randomObject: number = Math.floor(Math.random() * _object.length);
   
    verse = _subject.splice(randomSubject, 1)[0] + " " + _predicate.splice(randomPredicate, 1)[0] + " " + _object.splice(randomObject, 1) [0] + " " ; //[0] is the position 0 of the Array 

    console.log(verse); //output for verse just a replacement

}

}