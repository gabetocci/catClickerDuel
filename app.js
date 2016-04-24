// Declarations

var count = {
    right:0,
    left: 0
};

function updateLabel(side, newcount){

    var div      = $('#'+side);
    var filename = div.find('img').attr('src');
    var catname  = filename.substr(0, filename.lastIndexOf('.')) || filename;

    div.find('h1').html(catname + " Click Count: " + newcount);
};

// Events

$('img.cat-pic').click(function(){

    var side = $(this).parent()[0].id;

    count[side]++;
    updateLabel(side,count[side]);
});

$('button#reset').click(function(){
	count.left  = 0;
	count.right = 0;
	updateLabel('left', count.left);
	updateLabel('right',count.right);
});

// Main

updateLabel('left', count.left);
updateLabel('right',count.right);
