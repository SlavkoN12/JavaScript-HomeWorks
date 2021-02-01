let message = $('#text');
let color = $('#color');
let genBtn = $('#btn');
let header3 = $('h3');

function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }

genBtn.on('click', function(){
    
    if(isColor(`${color.val()}`) && message.val() !== "" && color.val() !== ""){
        genBtn.after(`<h1>${message.val()}</h1>`)
        $('h1').css('color', `${color.val()}`)
    } else{
        header3.html(`<h3>ERROR!! Please type in something / valid color</h3>`)
    }
})


