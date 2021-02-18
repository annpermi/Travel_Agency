<?php
if($_POST){
  
  $massage='<h1>Заявка на сайте</h1><br>';
  foreach($_POST as $key => $value){
    $message.=$key.'='.$value.'<br>';
  }
  $message.='</table>';

  
  $to = "ivangelista@yandex.ru";
  $subject = "Новый отклик на сайте Ivangelista.Ru!";
  
  $headers = 'From: bot@ivangelista.ru' . "\r\n" .
    'Reply-To: bot@ivangelista.ru' . "\r\n" .
    'Content-type: text/html; charset=utf-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  


  if(mail($to, $subject, $message, $headers)){ echo "1";} else {echo"0";}
} 
?>