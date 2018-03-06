  ##Parser que trata o arquivo games.log do Quake III Arena e gera um arquivo .json;
 
  ##Após gerar o arquivo Json, é executado uma api que gera relatórios.




-------------------------------------------------------- Ececução: --------------------------------------------------------------

  Para execução local, basta clonar o projeto em uma máquina com NODEJS e na pasta executar o NPM INSTALL;
  
  Após isso, executar o comando "node app";
  
  Sera iniciado na porta 3000;
  
  http://localhost:3000



------------------------------------------------------ Funcionamento: ------------------------------------------------------------

  Ao solicitar o sistema pelo navegador no endereço informado acima, é executado o tratamento do arquivo "games.log" e ao finalizar já é criado o arquivo "games.json" que pode ser feito o download pela API.
  
  Após a finalização do arquivo .json, a aplicação faz o redirecionameno para o api de relatorios '/index'.
  
  Ao iniciar a Api, o usuário tem a opção de gerar o relatório com todos os games, personalizar por jogador(somente com o jogador informado) e também baixar o arquivo "games.json".
  
  
  
  ------------------------------------------------------ Pontuação: ------------------------------------------------------------
  
  * Cada kill acrescenta um ponto para quem matou;
  
  * Caso seja morto pelo <world>, perde um ponto; 
  
  * Caso o jogador se mata, não é alterado a pontuação;
  
  * <world> não é um jogador, portanto não é apresentado nos relatorios nem no arquivo json;
  
  
  
  
    ------------------------------------------------------ API: ------------------------------------------------------------
    
  Por se tratar de uma API simples, foi desenvolvido tudo em uma única pagina que contem as 'div' que são ativas e inativas de acordo com a necessidade;
  
  O tratamento do arquivo .json é feita por angularJS;
  
  Ao gerar o relatório, é possivel fazer impressão dele com um simples clique em um btn que é disponibilizado.
