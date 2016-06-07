//DIDN'T SEE THE BOTTOM PART.  Sorry I redid the functions.
//I realize the point was to make functions so that they could be
//called by the callback functions, as that's better practice.

$(document).ready(function() 
{

// change the color of the text in the div with class "color-div" to red
$(".the-button").click (function () {
	$(".color-div").css("color", "red");
});

// add the word "blue" to the div with class "add-div"
$(".add-div").html($(".add-div").text() + " blue");

// add a title to the page
$(".text-changer").click(function () {
	$(".title-div").html("New Title").css("font-size", "2em").css("font-weight","bold");
});
// alert the text in the selected item of the dropdown
$(".get-selected").click(function() {
	alert($("#selector option:selected").text());
});

$(".trio").click(function() {
	console.log($(this).attr("id"));
	$(".clicked-id").html("you clicked on id:" + $(this).attr("id"));
}); 

});