$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "noun", "exclamation", "verb", "bodypart", "food", "liquid", "place", "adjective", "object", "furniture", "vehicle", "clothing", "material", "celestialbody","exacttime","timeofday", "adverb", "weathercondition"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

    });

    $("#story").show();

     event.preventDefault();
  });
});
