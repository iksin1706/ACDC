<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Dziekujemy za wiadomość</title>
</head>

<body>
    <main class="bg-slate-900 flex flex-col justify-center items-center min-h-screen">
        <?php
        error_reporting(E_ALL);
        ini_set('display_errors', 1);

        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\Exception;

        require '../vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
        $dotenv->load();

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $email = $_POST["email"];
            $name = $_POST["name"];
            $subject = $_POST["subject"];
            $message = $_POST["message"];

            $mail = new PHPMailer(true);

            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );

            try {
                // $mail->isSMTP();
                // $mail->Host = $_ENV['SMTP_HOST'];
                // $mail->SMTPAuth = true;
                // $mail->Username = $_ENV['SMTP_USERNAME'];
                // $mail->Password = $_ENV['SMTP_PASSWORD'];
                // $mail->SMTPSecure = $_ENV['SMTP_SECURE'];
                // $mail->Port = $_ENV['SMTP_PORT'];
                // $mail->SMTPAutoTLS = false;

                // $mail->setFrom($_ENV['SENDER_EMAIL'], 'acdc.net.pl');
                // $mail->addAddress($_ENV['RECIPIENT_EMAIL']);

                // $mail->isHTML(true);
                // $mail->Subject = 'New Contact Form Submission';
                // $mail->Body = "Imie: $name<br>Email: $email<br>Wiadomosc: $message";

                // $mail->send();
                echo '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <g clip-path="url(#clip0_276_23)">
                <path d="M44.4292 64.463L30.8875 50.9214C30.074 50.1078 30.074 48.7887 30.8875 47.9751L33.8337 45.0288C34.6473 44.2151 35.9665 44.2151 36.78 45.0288L45.9023 54.151L65.4413 34.6121C66.2549 33.7986 67.574 33.7986 68.3876 34.6121L71.3338 37.5584C72.1474 38.372 72.1474 39.6911 71.3338 40.5047L47.3755 64.4631C46.5618 65.2767 45.2427 65.2767 44.4292 64.463Z" fill="#FF8A00"/>
                </g>
                <circle cx="50" cy="50" r="48" stroke="#FF8A00" stroke-width="4"/>
                <defs>
                <clipPath id="clip0_276_23">
                <rect width="41.6667" height="41.6667" fill="white" transform="translate(30.2773 28.7043)"/>
                </clipPath>
                </defs>
                </svg>';
                echo '<p class="text-3xl text-center text-white">Dziękujemy za wiadomość! Postaramy sie odpowiedzieć jak najszybciej</p>';
            } catch (Exception $e) {
                echo '<svg xmlns="http://www.w3.org/2000/svg" width="76" height="67" viewBox="0 0 76 67" fill="none">
                <circle cx="13" cy="10" r="10" fill="#FF8A00"/>
                <circle cx="58" cy="10" r="10" fill="#FF8A00"/>
                <path d="M3 55.1035C17.5085 29.0786 62.6042 34.4599 72.5186 56.7624" stroke="#FF8A00" stroke-width="6"/>
                </svg>';
                echo '<p class="text-3xl text-center text-white">Niestety coś poszło nie tak. Spróbuj sie z nami skontakować telefonicznie</p>';
            }
        }
        ?>
        <a href="../" class="text-2xl link mt-4">Wróć do strony głównej</a>
    </main>
</body>

</html>