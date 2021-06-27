<?php
$file = $_FILES['file'];

if (!is_dir('uploads/')) {
    mkdir('uploads/');
}

move_uploaded_file($file['tmp_name'], 'uploads/'.$file['name']);