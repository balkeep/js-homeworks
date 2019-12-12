let chessboardHtml = () => {
    let html = '';
    for (let index = 0; index < 8; index++) {
        for (let in2 = 0; in2 < 8; in2++) {
            html += (index + in2) % 2 === 0 ? "<div class = 'cell'></div>" : "<div class = 'black cell'></div>";
        }
    }
    return html;
}

$("#chessboard").html(chessboardHtml());
$(".wrapper").click(e => {
    $(e.target).toggleClass('black');
});