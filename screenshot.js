// screenshot.js
const puppeteer = require('puppeteer');

async function captureHighQualityScreenshot() {
    // 1. Defina a resolução de saída desejada
    // Use uma resolução alta (ex: 4K ou mais) para a melhor qualidade.
    const targetWidth = 480; // Exemplo de largura 4K
    const targetHeight = 272; // Exemplo de altura 4K

    // 2. Inicie o Navegador (Headless)
    const browser = await puppeteer.launch({
        // 'new' significa que ele roda em segundo plano sem abrir janela.
        headless: 'new',
    });
    const page = await browser.newPage();

    // 3. Configure o Viewport para a resolução desejada
    await page.setViewport({
        width: targetWidth,
        height: targetHeight,
        // O deviceScaleFactor é crucial para telas de alta densidade
        // 2.0 ou 3.0 simula uma tela Retina, tornando o texto mais nítido.
        deviceScaleFactor: 2.0,
    });

    // 4. Navegue até o seu projeto Vite
    // Certifique-se de que o projeto esteja rodando (ex: npm run dev)
    const projectUrl = 'http://localhost:3000/'; // Ajuste a porta se necessário
    await page.goto(projectUrl, {
        // Espera até que a rede fique inativa por um tempo (garante que tudo carregou)
        waitUntil: 'networkidle0',
    });

    // 5. Tire a Captura de Tela em JPG com Qualidade 100
    await page.screenshot({
        path: 'tela-victor-vision.jpg', // Nome do arquivo de saída
        type: 'jpeg',
        quality: 100, // Qualidade máxima (0-100).
        fullPage: true, // Captura a página inteira, mesmo se houver rolagem.
    });

    await browser.close();
    console.log(`Screenshot de alta qualidade salvo como: tela-victor-vision.jpg`);
}

captureHighQualityScreenshot().catch(console.error);