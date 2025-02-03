<?php
$carros = [
    ["id" => 1, "nome" => "Mazda RX7 Veilside 1995", "preco" => 500000, "imagem" => "img/IMG-6990.webp"],
    ["id" => 2, "nome" => "Nissan 180SX 1993", "preco" => 230000, "imagem" => "img/nissan.webp"],
    ["id" => 3, "nome" => "Nissan Skyline R34 GTR VSPEC 2001", "preco" => 1000000, "imagem" => "img/r32.webp"],
    ["id" => 4, "nome" => "Nissan Silvia S14 1JZ 1998", "preco" => 150000, "imagem" => "img/s15.webp"],
];
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loja de Carros JDM | DRIFT4U</title>
    <style>
        /* Reset básico */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
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

        /* Conteúdo principal */
        .container {
            /* padding-top: 80px; */
            text-align: center;
        }

        h1 {
            font-size: 36px;
            margin-bottom: 20px;
            color: #ff0000;
            text-transform: uppercase;
        }

        .carros {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            padding: 20px;
        }

        .carro {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            width: 300px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .carro:hover {
            transform: translateY(-10px);
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
        }

        .carro img {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 15px;
        }

        .carro h2 {
            font-size: 20px;
            margin-bottom: 10px;
            color: #333;
        }

        .carro p {
            font-size: 16px;
            margin-bottom: 15px;
            color: #666;
        }

        .carro button {
            background: #ff0000;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
            border-radius: 5px;
            transition: background 0.3s ease;
            width: 100%;
        }

        .carro button:hover {
            background: #cc0000;
        }

        .carro .btn-comprar {
            background: green;
            margin-top: 10px;
        }

        .carro .btn-comprar:hover {
            background: darkgreen;
        }

        /* Modal de detalhes */
        .detalhes {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
            max-width: 500px;
            width: 90%;
            max-height: 80vh; /* Limita a altura do modal a 80% da altura da tela */
            overflow-y: auto; /* Adiciona barra de rolagem vertical se necessário */
            display: none;
            z-index: 1000;
        }


        .detalhes h2 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
        }

        .detalhes p {
            font-size: 16px;
            color: #666;
            line-height: 1.8;
        }

        .detalhes button {
            background: #ff0000;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
            border-radius: 5px;
            margin-top: 20px;
            transition: background 0.3s ease;
        }

        .detalhes button:hover {
            background: #cc0000;
        }

        /* Overlay para o modal */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            display: none;
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
             /* Estilos do Carrossel - Mantenha isto no seu CSS */
        .hero-carousel {
            position: relative;
            width: 100%;
            height: 60vh;
            max-height: 800px;
            min-height: 400px;
            overflow: hidden;
            background: #000;
        }

        .carousel-container {
            max-width: 1400px;
            margin: 0 auto;
            height: 100%;
            position: relative;
        }

        .carousel-inner {
            display: flex;
            height: 100%;
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .carousel-item {
            flex: 0 0 100%;
            height: 100%;
            position: relative;
            opacity: 0.95;
        }

        .carousel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 30%;
            pointer-events: none;
        }

        /* Controles Aprimorados */
        .carousel-controls {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            z-index: 2;
        }

        .carousel-control {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 15px;
            cursor: pointer;
            border-radius: 50%;
            transition: all 0.3s ease;
            backdrop-filter: blur(4px);
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .carousel-control:hover {
            background: #ff0000;
            border-color: #ff0000;
            transform: scale(1.1);
        }

        /* Dots Modernizados */
        .carousel-dots {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 15px;
            z-index: 2;
        }

        .carousel-dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.5);
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .carousel-dot.active {
            background: #ff0000;
            border-color: #ff0000;
            transform: scale(1.2);
        }

        /* Responsividade */
        @media (max-width: 768px) {
            .hero-carousel {
                height: 50vh;
                min-height: 300px;
                margin: 60px 0;
            }

            .carousel-control {
                width: 40px;
                height: 40px;
                padding: 10px;
            }

            .carousel-dots {
                bottom: 20px;
            }
        }

        @media (max-width: 480px) {
            .hero-carousel {
                height: 40vh;
                min-height: 250px;
            }

            .carousel-control {
                width: 35px;
                height: 35px;
            }
        }
    </style>
</head>
<body>
    <nav>
        <div class="logo"><img src="img/Logo_Branca_d4u_oem_PNJ.avif" alt="Descrição da imagem"></div>
        <ul class="menu">
            <li><a href="#">Início</a></li>
            <li><a href="#">Carros</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>
    <div class="hero-carousel">
    <div class="carousel-container">
        <div class="carousel-inner">
            <div class="carousel-item">
                <img src="img/pexels-wearelivingart-8060364.jpg" alt="Mazda RX7">
            </div>
            <div class="carousel-item">
                <img src="img/001-jdm-cars-dream-garage-scaled.jpg" alt="Nissan 180SX">
            </div>
            <div class="carousel-item">
                <img src="img/acura-nsx-jdm-cars-3840x2160-14629.jpg" alt="Skyline R34">
            </div>
            <div class="carousel-item">
                <img src="img/mazda-rx-7-jdm-cars-2560x1440-14648.jpg" alt="Silvia S14">
            </div>
        </div>

            <div class="carousel-controls">
                <button class="carousel-control prev" onclick="moveSlide(-1)">❮</button>
                <button class="carousel-control next" onclick="moveSlide(1)">❯</button>
            </div>

            <div class="carousel-dots">
                <button class="carousel-dot active" onclick="goToSlide(0)"></button>
                <button class="carousel-dot" onclick="goToSlide(1)"></button>
                <button class="carousel-dot" onclick="goToSlide(2)"></button>
                <button class="carousel-dot" onclick="goToSlide(3)"></button>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="carros">
            <?php foreach ($carros as $carro): ?>
                <div class="carro">
                    <img src="<?= $carro['imagem']; ?>" alt="<?= $carro['nome']; ?>">
                    <h2><?= $carro['nome']; ?></h2>
                    <p><strong>Preço:</strong> R$ <?= number_format($carro['preco'], 2, ',', '.'); ?></p>
                    <button onclick="verDetalhes(<?= $carro['id']; ?>)">Ver Detalhes</button>
                    <a href="comprar.php?id=<?= $carro['id']; ?>">
                        <button class="btn-comprar">Comprar Agora</button>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Modal de detalhes -->
    <div id="detalhes" class="detalhes">
        <h2>Detalhes do Carro</h2>
        <p id="info">Selecione um carro para ver os detalhes</p>
        <button onclick="fecharDetalhes()">Fechar</button>
    </div>

    <!-- Overlay para o modal -->
    <div id="overlay" class="overlay" onclick="fecharDetalhes()"></div>

    <script>
        function verDetalhes(id) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "detalhes.php?id=" + id, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    document.getElementById("info").innerHTML = xhr.responseText;
                    document.getElementById("detalhes").style.display = "block";
                    document.getElementById("overlay").style.display = "block";
                }
            };
            xhr.send();
        }

        function fecharDetalhes() {
            document.getElementById("detalhes").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }
         // Configuração do Carrossel
         let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.carousel-dot');

        function updateCarousel() {
            document.querySelector('.carousel-inner').style.transform = 
                `translateX(-${currentSlide * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function moveSlide(direction) {
            currentSlide = (currentSlide + direction + slides.length) % slides.length;
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        // Autoplay
        let autoPlay = setInterval(() => moveSlide(1), 5000);

        // Pausar autoplay ao interagir
        document.querySelector('.hero-carousel').addEventListener('mouseenter', () => {
            clearInterval(autoPlay);
        });

        document.querySelector('.hero-carousel').addEventListener('mouseleave', () => {
            autoPlay = setInterval(() => moveSlide(1), 5000);
        });
    </script>
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