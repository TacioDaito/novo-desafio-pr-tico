## Estes são os comentários de cada um dos passos contidos no comando do desafio e as suas respectivas soluções.

### Passo 1: No menu principal do site, deve ser alterado o conteúdo do botão “Home” para “Início” e criado um novo botão que irá redirecionar para uma nova página (“formulario.html”).

### Solução do passo 1:
* O conteúdo do botão em questão é definido nos arquivos de página 'index.html', 'formulario.html' e 'lista.html', mais precisamente dentro da tag de navegação 'nav'. Para alterar o valor desse conteúdo, basta deletar o texto contido nas tags de botão de redirecionamento 'a' e digitar o texto desejado. Nesse passo, o texto foi alterado de 'Home' para 'Início'. Além disso, um botão de redirecionamento foi adicionado simplesmente copiando o código do botão existente 'Início' e mudando seu conteúdo para 'Formulário' e seu destino para 'formulario.html', que nada mais é do que a nova página criada.

### Passo 2: Na nova página, criar um formulário para inserir uma ideia para o novo personagem da terceira temporada de The Boys. O formulário deve conter os seguintes campos: nome do personagem, idade, possíveis atores/atrizes, alinhamento* e biografia. *Alinhamento deve conter as opções “The boys” ou “Supes”.

### Solução do passo 2:
* A criação do formulário foi feita dentro do arquivo da página 'formulario.html' usando a tag 'form', a tag de entrada 'input', a tag de botão 'button' e a tag de área de texto 'textarea'. Juntas, contidas dentro de outras tags semânticas e de estrutura como 'fieldset' e 'div', elas formaram a estrutura básica do formulário, que consiste em:

  *  2 campos de texto curto 'type=text' para o nome e os possíveis intérpretes do personagem, com limitações de 30 e 60 caracteres respectivamente;
  *  1 campo de números 'type='number' para a idade, com limitação de números de 0 até 1000, sendo 0 equivalente a idade desconhecida;
  *  2 botões de rádio concorrentes 'type=radio' para o alinhamento;
  *  1 campo de texto extenso 'textarea' para a biografia, com limitações de 1000 caracteres;
  *  1 botão de submissão para enviar o conteúdo inserido nos campos.
  
  A idéia de inserir elementos de semântica no código é facilitar a sua leitura, o que impactou positivamente os outros passos. Já o uso de limitações nos campos dos formulários ajuda parcialmente na validação da informação que será armazenada e exibida.

### Passo 3: Adicionar lógica ao formulário e fazer com que as informações sejam recebidas pelo back-end (em PHP). Além disso, persistir (salvar as informações) no banco de dados MySQL.

### Solução do passo 3:
* Aa.

### Passo 4: Exibir todas as informações dos personagens na tela em “lista.html”.

### Solução do passo 4:
* Aa.

### Passo 5: Na exibição de informações, exibir o nome dos personagens “The Boys” em azul e o nome dos personagens “Supes” em vermelho.

### Solução do passo 5:
* Aa.
