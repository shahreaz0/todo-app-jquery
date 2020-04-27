// check and unchecked list item
var check = true;

$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

// deleting list item
$("ul").on("click", "span", function (event) {
	$(this)
		.parent()
		.fadeOut(500, function () {
			$(this).remove();
		});
	event.stopPropagation();
});
//adding list item functionality
$("input").on("keypress", function (event) {
	if (event.which === 13) {
		var inputText = $(this).val();
		//add list item
		$("ul").append(
			"<li><span><i class='fas fa-minus-circle'></i></span> " +
				inputText +
				"</li>",
		);
		//clear input
		$(this).val("");
	}
});
//toggle input bar
$(".fa-pen").on("click", function () {
	$("input").fadeToggle(300);
});
