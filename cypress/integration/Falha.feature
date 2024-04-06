Feature: Falha


Scenario: Tentar fazer cadastro sem as informacoes obrigatorias

Given que eu acesso a tela de registro
When eu preencher os campos de senhas e clicar em registrar
Then devera aparecer as mensagens de erro nos campos obrigatorios

