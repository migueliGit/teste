<?php

if ($_SERVER ['REQUEST_METHOD'] === "POST"){

 $nome = $_POST['nome'];
 $email =  $_POST['email'];

 $arquivo = fopen("usuario.txt", "a");
 fwrite ($arquivo, $nome . "," . $email . "\n");
 fclose($arquivo);

 $arquivoTXT = fopen("usuario.txt", "r");
 $conteudo = fread($arquivoTXT, filesize("usuario.txt"));
 // echo nl2br($conteudo);

 $linhas = explode("\n", $conteudo);

 array_pop ($linhas);

 // var_dump($linhas);

 foreach($linhas as $linha){
 $usuario = explode(",", $linha);
 // echo "<p> $linha </p>";
 
 echo "<p><b>Nome: </b> $usuario[0]</p>";
 echo "<p><b>E-mail: </b> $usuario[1]</p><hr>";
 }

 fclose($arquivoTXT);

}
?>