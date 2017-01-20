<?php

define('__ROOT__', dirname(__FILE__));
require_once __ROOT__ . '/PHPMailer/class.phpmailer.php';

if ($_POST) { 

    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $form_name = $_POST["form_name"];
    $area = $_POST["area"];
    $amount = $_POST["amount"];
    $comment = $_POST["comment"];
    $designSelect = $_POST["design"];
    $colorSelect = $_POST["color"];


    $images = array();
    $json = array(); // подготовим массив ответа

    if (isset($_POST['id_form'])) {
        $id_form = $_POST['id_form'];
        $json['form'] = $id_form;
    }

    if (isset($_POST['form_name']) and $_POST['form_name'] != "") {
        $form_name = $_POST['form_name'];
        $message .= '
            <h1>Вам сообщение!</h1>
        <div style="font-size: 18px; margin-bottom: 10px">Из формы: ' . '<span style="font-size: 18px"> ' . $form_name . '</span>' . '</div>';
    }

    if (isset($_POST['phone']) and $_POST['phone'] != "") {
        $phone = $_POST['phone'];
        $message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Телефон: ' . $phone . '</div>';
    }
    if (isset($_POST['email']) and $_POST['email'] != "") {
        $email = $_POST['email'];
        $message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Email: ' . $email . '</div>';
    }
    if (isset($_POST['name']) and $_POST['name'] != "") {
        $name = $_POST['name'];
        $message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Имя: ' . $name . '</div>';
    }
    if (isset($_POST['area']) and $_POST['area'] != "") {
        $area = $_POST['area'];
        $message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Площадь помещения: ' . $area . '</div>';
    }
    if (isset($_POST['amount']) and $_POST['amount'] != "") {
        $amount = $_POST['amount'];
        $message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Количество светильников: ' . $amount . '</div>';
    }
    if (isset($_POST['comment']) and $_POST['comment'] != "") {
        $comment = $_POST['comment'];
        $message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Комментарии: ' . $comment . '</div>';
    }
    if(isset($_POST["design"])) 
     $designSelect = $_POST["design"];
    else 
        $designSelect = "Отсутствует";

    if( isset($_POST["color"]) ) 
        $colorSelect = $_POST["color"];
    else 
        $colorSelect = "Отсутствует";

    if (isset($_POST['design']) and $_POST['design'] != "") {
        $designSelect = $_POST['design'];
        $message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Дизайн: ' . $designSelect . '</div>';
    }
    if (isset($_POST['color']) and $_POST['color'] != "") {
        $colorSelect = $_POST['color'];
        $message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Цвет: ' . $colorSelect . '</div>';
    }

    $mailer = new PHPMailer();

    if(isset($_POST["services"])) 
        $services = $_POST["services"];
    else 
        $services = "Отсутствует";

    $subject = "Заявка с сайта Потолки";
    $to = 'mini_van@ukr.net';
 //   $mailer->IsSMTP();
    $mailer->Host = 'smtp.yandex.ru';
    $mailer->Port = 465;
    $mailer->SMTPSecure = "ssl";
    $mailer->SMTPAuth = true;
    $mailer->Username = 'mail@ecos-com.com';
    $mailer->Password = '/shkaf2016/';
    $mailer->From = 'mail@ecos-com.com';
    $mailer->FromName = 'Aleksey';
    $mailer->CharSet = "UTF-8";
    $mailer->Subject = $subject;
    $mailer->MsgHTML($message);
    $mailer->AddAddress($to);
  

    //Upload Files
    // foreach ($_FILES as $image) {
    //     $ext = '.' . pathinfo($image['name'], PATHINFO_EXTENSION);

    //     while (true) {
    //         $filename = uniqid(rand(), true) . $ext;
    //         if (!file_exists(__ROOT__ . '\uploads\\' . $filename)) {
    //             break;
    //         }
    //     }

    //     move_uploaded_file($image['tmp_name'], __ROOT__ . '\uploads\\' . $filename);
    //     $file_to_attach = __ROOT__ . '\uploads\\' . $filename;
    //     $mailer->AddAttachment($file_to_attach, $filename);
    //     // $images[] = __ROOT__ . '\uploads\\' . $filename;
    // }

    if ($mailer->Send()) {
        $json['error'] = 0;
    } else {
        $json['error'] = 1;
    }

    echo json_encode($json);
}