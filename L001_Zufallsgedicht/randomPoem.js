"use strict";
var Poem;
(function (Poem) {
    let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"]; //array for subject
    let predicate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"]; //array for predicate
    let object = ["Zaubertränke", "den Grimm", " Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]; //array for object
    //console.log(subject, praedikat, object);
    for (let i = 6; i > 1; i--) { //until 1 is bigger then 0 then it stops
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
        console.log(verse); //output for verse just a replacement
    }
})(Poem || (Poem = {}));
//# sourceMappingURL=randomPoem.js.map