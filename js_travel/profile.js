var input = document.getElementById( 'input_avt' );

function readURL(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.addEventListener('load', function () {
            document.getElementById('avt_img_edit').src = reader.result;
        });
        reader.readAsDataURL(input.files[0]);
    }
}
input.addEventListener('change', readURL);

function click_post() {
    document.getElementById( 'post' ).classList.add("active");
    document.getElementById( 'edit' ).classList.remove("active");
    console.log(document.getElementById( 'post' ));
}

function click_edit() {
    document.getElementById( 'edit' ).classList.add("active");
    document.getElementById( 'post' ).classList.remove("active");
    console.log(document.getElementById( 'edit' ));
}

document.getElementById( 'edit' ).addEventListener("click", click_edit);
document.getElementById( 'post' ).addEventListener("click", click_post);
