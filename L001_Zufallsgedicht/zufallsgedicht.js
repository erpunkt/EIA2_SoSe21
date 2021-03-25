"use strict";
var Poem;
(function (Poem) {
    let subject = ["Alisson", "Nicole", "Chiara", "Marco", "Richard ", "Max"]; //array for subject
    let predicate = ["liebt", "hasst", "zerstört", "rührt", "läuft ", "rennt"]; //array for predicate
    let object = ["ein Buch", "ein Rezept", " Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]; //array for object
    //console.log(subject, praedikat, object);
    for (let i = 6; i > 0; i--) { //until 1 is bigger then 0 then it stops
        //console.log(i);
        getVerse(subject, predicate, object);
    }
    function getVerse(_subject, _predicate, _object) {
        //console.log("Alohomora");
        let verse = "";
        let randomSubject = Math.floor(Math.random() * _subject.length);
        console.log(randomSubject);
        let randomPredicate = Math.floor(Math.random() * _predicate.length);
        let randomObject = Math.floor(Math.random() * _object.length);
        verse = _subject.splice(randomSubject, 1)[0] + " " + _predicate.splice(randomPredicate, 1)[0] + " " + _object.splice(randomObject, 1)[0] + " "; //[0] is the position 0 of the Array 
        console.log(verse); //Aoutput for verse just a replacement
        return;
    }
})(Poem || (Poem = {}));
//# sourceMappingURL=zufallsgedicht.js.map