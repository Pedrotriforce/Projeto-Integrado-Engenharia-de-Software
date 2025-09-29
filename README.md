# Projeto-Integrado-Engenharia-de-Software

Este projeto integrado tem como objetivo otimizar a gestão de agendamentos do salão de beleza "Neula Araújo Studio de Beleza", atualmente realizados de forma manual. A solução proposta é uma aplicação web interativa e baseada em dados.
O protótipo atualiza a estrutura lógica do sistema em Java e implementa o banco de dados em MySQL, representando as camadas **Model** e **Controller** da arquitetura MVC.
Para a gestão do projeto, foi utilizada a metodologia ágil **Kanban**, focando na visualização do fluxo de trabalho e na limitação do trabalho em progresso (WIP).

## Arquitetura e Estrutura do Projeto

O projeto adota o padrão **Cliente-Servidor** e o padrão de projeto **MVC (Model-View-Controller)** para separar a lógica da aplicação em três camadas.

### Descrição dos Componentes (Camada Model)

**Cliente.java**: Contém a classe modelo que representa o cliente do salão.
**Servico.java**: Contém a classe modelo que define os serviços oferecidos.
**Agendamento.java**: Representa o modelo de agendamento, com atributos como data, horário, profissional e cliente associado.
**App.java**: Responsável pela instância e criação dos objetos e a execução dos métodos.
**Protótipo Web (View)**: Interface desenvolvida com HTML, CSS, JavaScript e Bootstrap, permitindo a seleção de serviços, profissionais e horários.

## Funcionalidades Implementadas (Protótipo Parcial)

Os resultados parciais obtidos demonstram o fluxo principal do sistema:

* **Modelagem de Entidades**: Definição clara das entidades (Clientes, Serviços, Profissionais e Agendamentos)[cite: 48].
* [cite_start]**Estrutura de Banco de Dados**: Criação e implementação da estrutura do banco de dados relacional em **MySQL**[cite: 18, 49].
* [cite_start]**Interface de Agendamento**: Protótipo web que permite a seleção de serviços[cite: 57, 58].
* [cite_start]**Lógica de Negócio**: Desenvolvimento da lógica do sistema utilizando conceitos de Orientação a Objetos em **Java**[cite: 64].

[cite_start]*Observação: A integração entre o Front-end (View) e o Back-end (Model/MySQL) está atualmente em fase de configuração[cite: 52].*

## Tecnologias Utilizadas

| Componente | Versão | Finalidade |
|---|---|---|
| **Java JDK** | 11+ | [cite_start]Lógica do sistema e camada Controller/Model [cite: 33] |
| **MySQL** | 8.0+ | [cite_start]Banco de dados relacional e persistência de dados [cite: 18, 33] |
| **HTML/CSS/JS** | - | [cite_start]Desenvolvimento do Front-end (View) e interatividade [cite: 32] |
| **Bootstrap** | - | [cite_start]Framework para design da interface (Front-end) [cite: 32] |
| **VS Code** | Latest | [cite_start]Editor de código [cite: 33] |
| **GitHub** | - | [cite_start]Controle de versão do código [cite: 34] |

## Estrutura do Projeto
