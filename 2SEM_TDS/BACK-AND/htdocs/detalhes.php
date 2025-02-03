<?php
$detalhesCarros = [
    3 => [
        "nome" => "Nissan Skyline R34 GTR Vspec",
        "detalhes" => "
        - 2000/2001 / 69.000KM<br>
        - RB26DETT / 6 marchas<br>
        - Midnight Purple 3 LV0<br>
        - Rays Nismo LM 18x10.5J"
    ],
    2 => [
        "nome" => "Nissan 180SX 1993",
        "detalhes" => "
        <strong>Motor:</strong><br>
        - SR22DET ( Forjado )<br>
        - Turbo Tomei 8270<br>
        - Comandos 264 HKS<br>
        - Stopper TOMEI<br>
        - Intercooler MH<br>
        - Radiador de alumínio KOYOYARD<br>
        - Radiador de Óleo CUSCO<br>
        - Bicos 221 LBS<br>
        - Coletor plenum<br>
        - Cover HKS<br>
        - Bomba externa 12Bar X2<br>
        - Catch Tank<br>
        - Tanque Inox 40L<br>
        - Full Escape 4”<br>
        - ECU Apexi<br>
        - Gas Podium<br><br>

        <strong>Transmissão:</strong><br>
        - Caixa 5 Marchas ( GTR )<br>
        - Embreagem Triplo Disco EXEDY<br><br>

        <strong>Suspensão/ Direção:</strong><br>
        - Coilover Cusco ( 32 clicks )<br>
        - Camber plate Cusco<br>
        - Full arms Cusco<br>
        - Barra estabilizadora Cusco<br>
        - Angle kit GRT V2<br>
        - Freios Brembo GTR 32<br>
        - LSD 2Way TOMEI<br><br>

        <strong>Interior / Exterior:</strong><br>
        - Body Kit Rocket Bunny ( SHIYA )<br>
        - Bash Bar ( L2H )<br>
        - Roll cage CUSCO + Adicional portas<br>
        - Volante Momo<br>
        - Cubo NRG<br>
        - Banco DRIFTMASTER<br>
        - Rodas Emotion 18x9.5J"
    ],
    4 => [
        "nome" => "Nissan Silvia S14 Kouki 1998",
        "detalhes" => "
        <strong>Motor:</strong><br>
        - 1JZ GTE VVTI<br>
        - Intercooler HKS<br>
        - PRECISON Wastgate<br>
        - Radiador de Alumínio 3”<br>
        - Radiador de Óleo<br>
        - Bomba de combustível AEM<br>
        - Dosador de combustível AEM<br>
        - Full escape Inox 3\"<br>
        - ECU Recetec R1000<br>
        - Filtro Apexi<br><br>

        <strong>Transmissão:</strong><br>
        - R151 ( 5 marchas )<br>
        - Embreagem Exedy Cerâmica<br>
        - LSD<br><br>

        <strong>Suspensão/ Direção:</strong><br>
        - Coilover Tein Mono Sport<br>
        - Angle Kit Street<br>
        - Freios Traseiro GTR R32<br>
        - Barra estabilizadora dianteira<br>
        - Roll Cage<br><br>

        <strong>Exterior / Interior:</strong><br>
        - Body Kit Monkey Magic KOUKI - FACE<br>
        - Rodas Work 18x9.5J / 18x10.5J<br>
        - Gauges DEFI OEM ( Turbo / Óleo / Água )<br>
        - Wideband AEM<br>
        - Volante Sparco<br>
        - Banco Recaro<br>
        - Interna Completa OEM"
    ],
    1 => [
        "nome" => "Mazda RX-7 FD3S 1995",
        "detalhes" => "
        <strong>Motor:</strong> 500HP<br>
        - 20B 3Rotor Single Turbo<br>
        - Street Port<br>
        - Turbo CT43<br>
        - ECU Haltech 2000<br>
        - Bobinas Halltech<br>
        - Bomba WALBRO<br>
        - Dosador AEROMOTIVE<br>
        - Wastegate PRECISION<br>
        - Full Escape Inox<br><br>

        <strong>Transmissão:</strong><br>
        - Câmbio 5 marchas<br>
        - Embreagem Cerâmica<br><br>

        <strong>Suspensão:</strong><br>
        - Coilover Megan Racing<br>
        - Barra estabilizadora<br><br>

        <strong>Interior / Exterior:</strong><br>
        - Body Kit Veilside Fortune (Tokyo Drift)<br>
        - Bancos Recaro Pole Position<br>
        - Haltech IC-7<br>
        - Painel em Carbono<br>
        - Acessórios em carbono<br>
        - Rodas Work Equip 19X12J"
    ]
];

// Captura o ID enviado via GET
$id = $_GET['id'] ?? null;

// Verifica se o carro existe
if (isset($detalhesCarros[$id])) {
    echo "<strong>" . $detalhesCarros[$id]["nome"] . "</strong><br>";
    echo nl2br($detalhesCarros[$id]["detalhes"]);
} else {
    echo "Carro não encontrado!";
}
?>
