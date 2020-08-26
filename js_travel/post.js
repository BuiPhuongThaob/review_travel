var input = document.getElementById( 'upload' );
var infoArea = document.getElementById( 'upload-label' );
var input_title = document.getElementById( 'img_title' );
//SHOW UPLOADED IMAGE
function readURL(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.addEventListener('load', function () {
            document.getElementById('imageResult').src = reader.result;
        });
        reader.readAsDataURL(input.files[0]);
    }
}
input.addEventListener('change', readURL);


function readURL_title(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.addEventListener('load', function () {
            document.getElementById( 'title_img' ).style.backgroundImage = "url(" + reader.result + ")";
        });
        reader.readAsDataURL(input_title.files[0]);
    }
}

input_title.addEventListener('change', readURL_title);

//SHOW UPLOADED IMAGE NAME

function showFileName( event ) {
    var input = event.srcElement;
    var fileName = input.files[0].name;
    infoArea.textContent = 'File name: ' + fileName;
  }
input.addEventListener( 'change', showFileName );

