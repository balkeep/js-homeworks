$("table").on("click", "td", function () {
    console.log($(this).parent().attr('class'), '\n', $(this).attr('class'));
});