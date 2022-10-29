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
  *  1 botão de submissão com o conteúdo de texto 'Criar!' para enviar o conteúdo inserido nos campos.
  
  A idéia de inserir elementos de semântica no código é facilitar a sua leitura, o que impactou positivamente os outros passos. Já o uso de limitações nos campos dos formulários ajuda parcialmente na validação da informação que será armazenada e exibida.

  Ainda mais, a aparência da página foi alterada com ajuda de código CSS. A paleta básica utilizada foi amarelo, azul, vermelho, preto e branco, cores que aparecem nas imagens publicitárias da série. Com a ajuda de classes como 'container' e 'form-control' do Bootstrap, o espaçamento e responsividade da página foram devidamente ajustados. Essas e outras estilizações tornaram a página mais agradável de se navegar e mais combinante com o conteúdo apresentado nela.

### Passo 3: Adicionar lógica ao formulário e fazer com que as informações sejam recebidas pelo back-end (em PHP). Além disso, persistir (salvar as informações) no banco de dados MySQL.

### Solução do passo 3:
* A lógica em questão é definida por 3 arquivos:
  * 'SQLDriver.php', que possui a classe 'SQLDriver', que por sua vez tem o método 'insertPersonagem', o qual realiza a conexão com o database MySql e insere neste as informações fornecidas nos seus parâmetros na forma de linha; em outras palavras, esse script é responsável pela conexão e o armazenamento de informação;
  * 'Personagem.php', que define a classe 'Personagem' usada para estruturar as informações e ao mesmo tempo acessar os métodos da classe 'SQLDriver';
  * 'registrar.php', que recebe a informação inserida no formulário e a armazena no database com a ajuda da classe 'Personagem' e seus métodos;

  A todos esses 3 arquivos já existiam, somente sendo necessário adicionar algumas linhas de código para completar a função desejada. Ao inserir 'formulario.php' no argumento 'action=""' do formulário, o clique do botão 'Criar!' redireciona o navegador para a página 'formulario.php'. Utilizando os métodos 'inserir' da classe 'SQLDriver' e 'inserirPersonagem' da classe 'Personagem' já existentes, a informação do formulário é recebida através da variável '$_POST' e inserida no database, sendo toda essa lógica disparada pelo 'formulario.php'.

### Passo 4: Exibir todas as informações dos personagens na tela em “lista.html”.

### Solução do passo 4:
* A lógica necessária para exibir o conteúdo do database consiste em, como no passo anterior, utilizar os métodos já existentes para acessar o database, armazenar seu conteúdo em um objeto ou variável e então exibir-lo na página HTML. Porém nesse passo a lógica de exibição é feita através de um script javascript 'tabela.js' já existente que altera a estrutura e os elementos da página 'lista.html'.
  
  O primeiro passo foi chamar o método 'selectAllEntities' da classe 'SQLDriver' para criar uma conexão com o database e buscar nele as informações, método esse chamado pelo método 'obterTodos' da classe 'Personagem'. Ao fazer essa chamada no 'personagens.php', é possível gerar a metadata '.json' contendo a informação de todos personagens salvos no database e requisitá-la no script 'tabela.js'. Dentro desse script, existe a lógica que gera o elemento de tabela na página 'lista.html' contendo as informações dos personagens.

### Passo 5: Na exibição de informações, exibir o nome dos personagens “The Boys” em azul e o nome dos personagens “Supes” em vermelho.

### Solução do passo 5:
* Aa.
