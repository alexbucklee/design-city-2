<?php

/* https://api.telegram.org/bot1785491961:AAEoQGJUHIi7HBxbu9dcnioV3AvFNcow_Hc/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$messenger = $_POST['messenger'];
if (!empty($messenger)) { $messenger = "да"; } else { $messenger = "нет"; };
$token = "1785491961:AAEoQGJUHIi7HBxbu9dcnioV3AvFNcow_Hc";
$chat_id = "-437141989";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Мессенджер:' => $messenger
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  return true;
} else {
  return false;
}
?>