<?php
require "../classes/Personagem.php";

//Exibe mensagem de erros caso os campos do formulário não forem preenchidos.
$data = $_POST;
$erros = [];
foreach (['nome', 'idade', 'interprete', 'alinhamento', 'biografia'] as $field) {
    if (empty($data[$field]) && $data[$field] != 0) {
        $erros[] = sprintf('O campo %s é necessário mas não foi preenchido.', 
        $field);
    }
}
if (!empty($erros)) {
    echo implode('<br />', $erros);
    exit;
}

//Cria um objeto da classe 'Personagem' e executa o metodo 'inserir'.
$personagem = new Personagem();
$personagem->nome = $data['nome'];
$personagem->idade = $data['idade'];
$personagem->interprete = $data['interprete'];
$personagem->alinhamento = $data['alinhamento'];
$personagem->biografia = $data['biografia'];
Personagem::inserir($personagem);
echo "<script>location.href='../../pages/formulario.html';</script>";
exit;