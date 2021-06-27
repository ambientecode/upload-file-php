const inputFile = $('#file');
const loading = $('#loading');

inputFile.change((event) => {
    $('form').submit();
});

$('form').submit((event) => {
    event.preventDefault();
    let data = new FormData(event.target);
    $.ajax({
        url: 'upload.php',
        type: 'post',
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        beforeSend: () => {
            loading.show();
        },
        complete: () => {
            loading.hide();
        }
    });
});