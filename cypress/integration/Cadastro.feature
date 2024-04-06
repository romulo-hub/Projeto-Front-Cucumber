Feature: Cadastro de usuario

Scenario: Fazer cadastro para pode acessar o sistema

Given que eu acesso a tela de registro
When eu preencher os campos nome e sobre nome
When validar que a data selecionada corresponde com o input desejado
When informar o nome da empresa 
When preencher a senha depois clicar em Registro
Then devera aparecer uma mensagem com a informacao = seu cadastro foi conluido




