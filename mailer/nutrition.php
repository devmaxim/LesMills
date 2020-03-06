<?php 
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

$name = $_POST['user_name'];
$gender = $_POST['form_gender'];
$target = $_POST['form_target'];
$myWeight = $_POST['form_weight'];
$myAge = $_POST['form_age'];
$myMail = $_POST['form_mail'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'Lesmillsmail@mail.ru';                 // Наш логин от ящика
$mail->Password = 'M8N6dFbNg758WeS3';                           // Наш пароль от ящика от которого будут приходить письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('Lesmillsmail@mail.ru', 'Les Mills');   // От кого будут приходить письма
$mail->addAddress('avex.52@mail.ru');     // Куда будут приходить письма
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на получение плана питания';
$mail->Body    = '
	Я хочу получить план питания <br>
	Моё имя: ' . $name . ' <br>
	Мой пол: ' . $gender . ' <br>
	Моя цель: ' . $target  . ' <br>
	Я вешу: ' . $myWeight . 'кг <br>
	Мой возраст: ' . $myAge . '<br>
	Моя почта: ' . $myMail . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>