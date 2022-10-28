<?php
require "../classes/Personagem.php";

//Exibe mensagem de erros caso os campos do formulário não forem preenchidos.
$data = $_POST;
$erros = [];
foreach (['nome', 'idade', 'interprete', 'alinhamento', 'biografia'] as $field) {
    if (empty($data[$field])) {
        $erros[] = sprintf('O campo %s é necessário mas não foi preenchido.', 
        $field);
    }
}
if (!empty($erros)) {
    echo implode('<br />', $erros);
    exit;
}
$personagem = new Personagem($data['nome'], $data['idade'], $data['interprete'], 
$data['alinhamento'], $data['biografia']);
$personagem->inserir($personagem);
echo "<script>location.href='../../pages/formulario.html';</script>";
exit;