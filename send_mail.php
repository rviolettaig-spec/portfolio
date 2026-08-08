<head>
    <meta charset="utf-8">
</head>

<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $managerEmail = "vita.ryzhenko@mail.ru";    
    
    $message =
        "Заявка из формы обратной связи\n" .
        "\n" .
        "Имя: " . htmlspecialchars( trim( $_POST['form1'] ) ) . "\n" .
        "E-mail: " . htmlspecialchars( trim( $_POST['form2'] ) ) . "\n" .
        "Сообщение: " . htmlspecialchars( trim( $_POST['form3'] ) ) . "\n";

        echo mail($managerEmail,'Заявка с сайта Сайт-визитка',$message);
    }
?>

<script>alert("Письмо отправлено")</script>
<script>history.back()</script>
