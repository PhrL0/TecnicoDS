<?php
$carros = [
    1 => ["nome" => "Mazda RX7 Veilside 1995", "preco" => 500000],
    2 => ["nome" => "Nissan 180SX 1993", "preco" => 230000],
    3 => ["nome" => "Nissan Skyline R34 GTR VSPEC 2001", "preco" => 1000000],
    4 => ["nome" => "Nissan Silvia S14 1JZ 1998", "preco" => 150000],
];

$id = $_GET['id'] ?? null;
$carro = $carros[$id] ?? null;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $endereco = htmlspecialchars($_POST['endereco']);

    // Conteúdo da confirmação de compra estilizado
    echo '<!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Compra Efetuada - DRIFT4U</title>
        <style>
            * { 
                margin: 0; 
                padding: 0; 
                box-sizing: border-box; 
            }
            
            body { 
                font-family: "Arial", sans-serif; 
                background: #f4f4f4;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }
    
            /* Navbar */
            nav {
                background: #111;
                color: white;
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1000;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            }
    
            .logo {
                font-size: 24px;
                font-weight: bold;
                color: #ff0000;
                text-transform: uppercase;
            }
    
            .menu {
                list-style: none;
                display: flex;
                gap: 20px;
            }
    
            .menu a {
                text-decoration: none;
                color: white;
                font-size: 16px;
                transition: color 0.3s;
            }
    
            .menu a:hover {
                color: #ff0000;
            }
    
            /* Conteúdo Principal */
            .success-container {
                max-width: 800px;
                margin: 100px auto 40px;
                padding: 40px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                flex-grow: 1;
            }
    
            .success-header {
                color: #ff0000;
                font-size: 32px;
                margin-bottom: 30px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
    
            .details-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin-bottom: 30px;
            }
    
            .detail-item {
                padding: 15px;
                background: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #ff0000;
            }
    
            .detail-item strong {
                color: #333;
                display: block;
                margin-bottom: 5px;
                font-size: 16px;
            }
    
            .detail-item p {
                color: #666;
                font-size: 16px;
                line-height: 1.6;
            }
    
            /* Footer */
            .site-footer {
                background: #111;
                color: white;
                padding: 40px 20px;
                margin-top: auto;
                border-top: 2px solid #ff0000;
            }
    
            .footer-content {
                max-width: 1200px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 30px;
                padding-bottom: 30px;
            }
    
            .footer-section h4 {
                color: #ff0000;
                margin-bottom: 15px;
                font-size: 1.2em;
            }
    
            .footer-section a {
                color: #ccc;
                text-decoration: none;
                transition: color 0.3s;
            }
    
            .footer-section a:hover {
                color: #ff0000;
            }
    
            .footer-bottom {
                max-width: 1200px;
                margin: 20px auto 0;
                padding-top: 20px;
                border-top: 1px solid #333;
                text-align: center;
            }
    
            /* Botão */
            .btn {
                display: inline-block;
                padding: 12px 30px;
                background: #ff0000;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
                transition: all 0.3s ease;
                text-decoration: none;
            }
    
            .btn:hover {
                background: #cc0000;
                transform: translateY(-2px);
            }
    
            @media (max-width: 768px) {
                .details-grid {
                    grid-template-columns: 1fr;
                }
                
                .success-header {
                    font-size: 24px;
                    flex-direction: column;
                }
            }
        </style>
    </head>
    <body>
        <nav>
            <div class="logo">DRIFT4U</div>
            <ul class="menu">
                <li><a href="index.php">Início</a></li>
                <li><a href="index.php">Carros</a></li>
            </ul>
        </nav>
    
        <div class="success-container">
            <h2 class="success-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#ff0000">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                </svg>
                Compra Efetuada com Sucesso!
            </h2>
            
            <div class="details-grid">
                <div class="detail-item">
                    <strong>Carro:</strong>
                    <p>'.$carro['nome'].'</p>
                </div>
                <div class="detail-item">
                    <strong>Preço:</strong>
                    <p>R$ '.number_format($carro['preco'], 2, ',', '.').'</p>
                </div>
                <div class="detail-item">
                    <strong>Comprador:</strong>
                    <p>'.$nome.'</p>
                </div>
                <div class="detail-item">
                    <strong>E-mail:</strong>
                    <p>'.$email.'</p>
                </div>
                <div class="detail-item">
                    <strong>Telefone:</strong>
                    <p>'.$telefone.'</p>
                </div>
                <div class="detail-item">
                    <strong>Endereço:</strong>
                    <p>'.$endereco.'</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <a href="index.php" class="btn">Voltar à Loja</a>
            </div>
        </div>
    
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>DRIFT4U</h4>
                    <p>Especialistas em veículos JDM<br>Paixão sobre rodas desde 2010</p>
                </div>
                
                <div class="footer-section">
                    <h4>Contato</h4>
                    <p>📞 (11) 9999-8888<br>
                    ✉️ contato@drift4u.com<br>
                    🏁 Rua do Drift, 240 - Tóquio</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>© 2024 DRIFT4U - Todos os direitos reservados</p>
            </div>
        </footer>
    </body>
    </html>';
    exit();
}

if (!$carro) {
    echo "<h2>Carro não encontrado!</h2>";
    echo "<a href='index.php'><button>Voltar à Loja</button></a>";
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finalizar Compra - DRIFT4U</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
        }

         /* Navbar */
         nav {
            background: #111;
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff0000;
            text-transform: uppercase;
        }

        .menu {
            list-style: none;
            display: flex;
            gap: 20px;
        }

        .menu li {
            display: inline;
        }

        .menu a {
            text-decoration: none;
            color: white;
            font-size: 16px;
            transition: color 0.3s ease;
        }

        .menu a:hover {
            color: #ff0000;
        }

        .container {
            max-width: 800px;
            margin: 100px auto 40px;
            padding: 40px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .car-info {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
        }

        .car-info h2 {
            color: #333;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .car-info p {
            color: #666;
            font-size: 18px;
        }

        .form-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 600;
        }

        input, textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }

        input:focus, textarea:focus {
            border-color: #ff0000;
            outline: none;
        }

        .btn-group {
            display: flex;
            gap: 15px;
            margin-top: 25px;
        }

        .btn {
            padding: 12px 30px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            text-align: center;
        }

        .btn-primary {
            background: #ff0000;
            color: white;
        }

        .btn-primary:hover {
            background: #cc0000;
        }

        .btn-secondary {
            background: #6c757d;
            color: white;
        }

        .btn-secondary:hover {
            background: #5a6268;
        }
        .site-footer {
            background: #111;
            color: white;
            padding: 40px 20px;
            margin-top: auto;
            border-top: 2px solid #ff0000;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            padding-bottom: 30px;
        }

        .footer-section h4 {
            color: #ff0000;
            margin-bottom: 15px;
            font-size: 1.2em;
        }

        .footer-section ul {
            list-style: none;
            padding: 0;
        }

        .footer-section a {
            color: #ccc;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-section a:hover {
            color: #ff0000;
        }

        .footer-bottom {
            max-width: 1200px;
            margin: 20px auto 0;
            padding-top: 20px;
            border-top: 1px solid #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }

        .social-links {
            display: flex;
            gap: 20px;
        }

        .social-links a {
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        @media (max-width: 768px) {
            .footer-content {
                grid-template-columns: 1fr;
            }

            .footer-bottom {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <nav>
    <div class="logo"><img src="img/Logo_Branca_d4u_oem_PNJ.avif" alt="Descrição da imagem"></div>
        <ul class="menu">
            <li><a href="index.php">Início</a></li>
            <li><a href="index.php">Carros</a></li>
        </ul>
    </nav>

    <div class="container">
        <div class="car-info">
            <h2><?= $carro['nome'] ?></h2>
            <p>Preço: R$ <?= number_format($carro['preco'], 2, ',', '.') ?></p>
        </div>

        <form method="POST">
            <div class="form-container">
                <div class="form-group">
                    <label for="nome">Nome Completo</label>
                    <input type="text" id="nome" name="nome" required>
                </div>

                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" required>
                </div>

                <div class="form-group">
                    <label for="endereco">Endereço de Entrega</label>
                    <textarea id="endereco" name="endereco" rows="4" required></textarea>
                </div>
            </div>

            <div class="btn-group">
                <button type="submit" class="btn btn-primary">Confirmar Compra</button>
                <a href="index.php" class="btn btn-secondary">Cancelar</a>
            </div>
        </form>
    </div>
    <footer class="site-footer">
    <div class="footer-content">
        <div class="footer-section">
            <h4>DRIFT4U</h4>
            <p>Especialistas em veículos JDM<br>Paixão sobre rodas desde 2010</p>
        </div>
        
        <div class="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
                <li><a href="#">Nossa História</a></li>
                <li><a href="#">Garantia</a></li>
                <li><a href="#">Financiamento</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h4>Contato</h4>
            <p>📞 (11) 9999-8888<br>
            ✉️ contato@drift4u.com<br>
            🏁 Rua do Drift, 240 - Tóquio</p>
        </div>
    </div>
    
    <div class="footer-bottom">
        <p>© 2024 DRIFT4U - Todos os direitos reservados</p>
        <div class="social-links">
            <a href="#">📷 Instagram</a>
            <a href="#">📘 Facebook</a>
            <a href="#">🎵 TikTok</a>
        </div>
    </div>
</footer>
</body>
</html>