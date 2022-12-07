//escreva o nome da função. Essa função é chamada quando o botão 'login' é clicado
function addUser() {
    //escreva o nome da variável que guardará o nome dos jogadores
   UserName1 = document.getElementById("player1_name_input").value;
   UserName2 = document.getElementById("player2_name_input").value;
   //escreva essa variável para que ela seja mostrada no localStorage do navegador
      localStorage.setItem("player1Name", UserName1);
      localStorage.setItem("player2Name", UserName2);
  //escreva o nome da tela que você deseja mostrar quando o botão for clicado
      window.location = "tela2.html";
  }
  