(function () {

    var names = ["Jake","John", "Jen", "Jason", "Paula", "Laura"];


    for (var i = 0; i < names.length; i++) {
        var speak = names[i];
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
        console.log("GoodBye"+ " " + speak);
        } else {
        console.log("Hello " +" "+ speak);
      }
    }
}
)
();
