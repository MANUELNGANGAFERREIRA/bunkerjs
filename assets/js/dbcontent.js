


var livro = [
    {
        title: "Introdução ao JavaScript - Conceitos Iniciais",
        content: `
            <h1>Introdução ao JavaScript</h1>
            <p>JavaScript é uma linguagem fundamental para o desenvolvimento web, pois permite que as páginas web sejam interativas. Vamos começar aprendendo o básico!</p>
    
            <h2>Estrutura Básica do Código</h2>
            <p>O código JavaScript pode ser adicionado diretamente nas páginas HTML usando a tag <code>&lt;script&gt;</code>. Além disso, você pode escrever código em um arquivo separado com extensão <code>.js</code>.</p>
    
            <h3>Exemplo de Como Iniciar</h3>
            <p>Para começar, vamos escrever um simples código que imprime uma mensagem na página:</p>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Exemplo de Código</title>
                </head>
                <body>
                    <script>
                        document.write("Olá, Mundo!<br>");
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h3>O que acontece quando você clica no botão?</h3>
            <p>Quando você clica em "Ver Resultado", o código dentro do <code>textarea</code> é executado e o resultado é mostrado na página.</p>
    
            <h2>Próximos Passos</h2>
            <p>Agora que você sabe como começar com JavaScript, podemos avançar para conceitos mais complexos, como variáveis, tipos de dados, e estruturas de controle.</p>
        `
    },
    {
        title: "Variáveis e Tipos de Dados",
        content: `
            <h1>Variáveis e Tipos de Dados em JavaScript</h1>
            <p>Agora que sabemos como escrever nosso primeiro código, vamos aprender sobre as variáveis e os tipos de dados que podemos usar no JavaScript. As variáveis são essenciais para armazenar informações e manipulá-las durante a execução do programa.</p>
    
            <h2>Declaração de Variáveis</h2>
            <p>Em JavaScript, podemos declarar variáveis utilizando as palavras-chave <code>let</code>, <code>const</code> e <code>var</code>.</p>
    
            <h3>Exemplo de Declaração de Variáveis</h3>
            <p>Abaixo, temos um exemplo de como declarar e usar variáveis:</p>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Variáveis em JavaScript</title>
                </head>
                <body>
                    <script>
                        let nome = "Maria";
                        const idade = 25;
                        nome = "João"; // Variável let pode ser alterada
                        document.write(nome + " tem " + idade + " anos.<br>");
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h3>Tipos de Dados</h3>
            <p>Agora, vamos entender os tipos de dados básicos que você pode usar em JavaScript:</p>
            <ul>
                <li><strong>String</strong>: Representa texto, como "Olá, Mundo!".</li>
                <li><strong>Number</strong>: Representa números, tanto inteiros quanto decimais.</li>
                <li><strong>Boolean</strong>: Representa valores de verdadeiro ou falso (true ou false).</li>
                <li><strong>null</strong>: Representa a ausência de valor.</li>
                <li><strong>undefined</strong>: Representa uma variável declarada, mas sem valor atribuído.</li>
                <li><strong>Object</strong>: Representa coleções de dados mais complexos (exemplo: objetos e arrays).</li>
            </ul>
    
            <h3>Exemplo de Tipos de Dados</h3>
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Tipos de Dados</title>
                </head>
                <body>
                    <script>
                        let nome = "João"; // String
                        let idade = 30; // Number
                        let isAdulto = true; // Boolean
                        let vazio = null; // null
                        let indefinido; // undefined
                        let pessoa = { nome: "Maria", idade: 25 }; // Object
                        document.write(nome + " tem " + idade + " anos.<br>");
                        document.write("É adulto? " + isAdulto + "<br>");
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>Próximos Passos</h2>
            <p>Agora que você conhece variáveis e tipos de dados, podemos seguir para os operadores, que nos ajudam a manipular as variáveis e realizar operações lógicas.</p>
        `
    },
    {
        title: "Operadores em JavaScript",
        content: `
            <h1>Operadores em JavaScript</h1>
            <p>Os operadores são símbolos ou palavras-chave que permitem realizar cálculos, comparações e outras operações em JavaScript. Vamos explorar os principais tipos de operadores e como usá-los.</p>
    
            <h2>1. Operadores Aritméticos</h2>
            <p>Os operadores aritméticos são usados para realizar operações matemáticas, como adição, subtração, multiplicação e divisão.</p>
            <ul>
                <li><code>+</code>: Adição</li>
                <li><code>-</code>: Subtração</li>
                <li><code>*</code>: Multiplicação</li>
                <li><code>/</code>: Divisão</li>
                <li><code>%</code>: Módulo (resto da divisão)</li>
                <li><code>**</code>: Exponenciação</li>
            </ul>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Operadores Aritméticos</title>
                </head>
                <body>
                    <script>
                        let a = 10;
                        let b = 3;
    
                        document.write("Adição: " + (a + b) + "<br>");
                        document.write("Subtração: " + (a - b) + "<br>");
                        document.write("Multiplicação: " + (a * b) + "<br>");
                        document.write("Divisão: " + (a / b) + "<br>");
                        document.write("Módulo: " + (a % b) + "<br>");
                        document.write("Exponenciação: " + (a ** b) + "<br>");
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>Exercício 1</h2>
            <p>Escreva um código que calcule a soma, diferença, produto e quociente de dois números escolhidos por você.</p>
    
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício - Operadores Aritméticos</title>
                </head>
                <body>
                    <script>
                        // Substitua os valores abaixo pelos números escolhidos
                        let x = 20;
                        let y = 5;
    
                        // Adicione suas operações aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>2. Operadores de Comparação</h2>
            <p>Os operadores de comparação verificam a relação entre dois valores e retornam um valor booleano (<code>true</code> ou <code>false</code>).</p>
            <ul>
                <li><code>==</code>: Igualdade (compara os valores, mas não os tipos)</li>
                <li><code>===</code>: Igualdade estrita (compara os valores e os tipos)</li>
                <li><code>!=</code>: Diferença</li>
                <li><code>!==</code>: Diferença estrita</li>
                <li><code>&gt;</code>: Maior que</li>
                <li><code>&lt;</code>: Menor que</li>
                <li><code>&gt;=</code>: Maior ou igual a</li>
                <li><code>&lt;=</code>: Menor ou igual a</li>
            </ul>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Operadores de Comparação</title>
                </head>
                <body>
                    <script>
                        let x = 5;
                        let y = "5";
    
                        document.write("Igualdade: " + (x == y) + "<br>");
                        document.write("Igualdade Estrita: " + (x === y) + "<br>");
                        document.write("Diferença: " + (x != y) + "<br>");
                        document.write("Diferença Estrita: " + (x !== y) + "<br>");
                        document.write("Maior que: " + (x > y) + "<br>");
                        document.write("Menor ou Igual a: " + (x <= y) + "<br>");
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>3. Operadores Lógicos</h2>
            <p>Os operadores lógicos combinam ou invertem valores booleanos:</p>
            <ul>
                <li><code>&&</code>: E lógico (retorna <code>true</code> se ambos os operandos forem verdadeiros)</li>
                <li><code>||</code>: OU lógico (retorna <code>true</code> se pelo menos um dos operandos for verdadeiro)</li>
                <li><code>!</code>: NÃO lógico (inverte o valor booleano)</li>
            </ul>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Operadores Lógicos</title>
                </head>
                <body>
                    <script>
                        let a = true;
                        let b = false;
    
                        document.write("E lógico: " + (a && b) + "<br>");
                        document.write("OU lógico: " + (a || b) + "<br>");
                        document.write("NÃO lógico: " + (!a) + "<br>");
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>Exercício 2</h2>
            <p>Crie um código que combine operadores de comparação e lógicos para verificar condições complexas.</p>
    
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício - Operadores Lógicos</title>
                </head>
                <body>
                    <script>
                        // Substitua os valores e condições abaixo pelos seus próprios exemplos
                        let idade = 25;
                        let possuiCarteira = true;
    
                        // Adicione suas condições aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>Próximos Passos</h2>
            <p>Praticar é essencial para dominar os operadores em JavaScript. Use-os em diferentes combinações para entender como funcionam em situações reais!</p>
        `
    }
    ,{
        title: "Estruturas Condicionais em JavaScript",
        content: `
            <h1>Estruturas Condicionais em JavaScript</h1>
            <p>As estruturas condicionais são usadas para executar diferentes blocos de código com base em condições específicas. Em JavaScript, as mais comuns são:</p>
    
            <h2>1. if</h2>
            <p>O <code>if</code> executa um bloco de código se uma condição for verdadeira.</p>
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Exemplo de if</title>
                </head>
                <body>
                    <script>
                        let idade = 18;
    
                        if (idade >= 18) {
                            document.write("Você é maior de idade.<br>");
                        }
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>2. if-else</h2>
            <p>O <code>if-else</code> permite executar um bloco de código se a condição for verdadeira e outro bloco se for falsa.</p>
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Exemplo de if-else</title>
                </head>
                <body>
                    <script>
                        let hora = 15;
    
                        if (hora < 12) {
                            document.write("Bom dia!<br>");
                        } else {
                            document.write("Boa tarde!<br>");
                        }
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>3. if-else if-else</h2>
            <p>O <code>if-else if-else</code> é usado para verificar várias condições em sequência.</p>
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Exemplo de if-else if-else</title>
                </head>
                <body>
                    <script>
                        let nota = 75;
    
                        if (nota >= 90) {
                            document.write("Excelente!<br>");
                        } else if (nota >= 70) {
                            document.write("Bom trabalho!<br>");
                        } else if (nota >= 50) {
                            document.write("Você passou!<br>");
                        } else {
                            document.write("Reprovado.<br>");
                        }
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>4. Operador Ternário</h2>
            <p>O operador ternário é uma forma compacta de escrever uma estrutura condicional simples.</p>
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Exemplo de Operador Ternário</title>
                </head>
                <body>
                    <script>
                        let idade = 20;
    
                        document.write(idade >= 18 ? "Maior de idade.<br>" : "Menor de idade.<br>");
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>Exercícios</h2>
            <ol>
                <li>Crie um código que receba um número e verifique se ele é par ou ímpar.</li>
                <textarea placeholder="Escreva aqui seu código...">
                    <html>
                    <head>
                        <title>Exercício 1 - Par ou Ímpar</title>
                    </head>
                    <body>
                        <script>
                            // Adicione seu código aqui!
                        </script>
                    </body>
                    </html>
                </textarea>
                <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
                <li>Crie um código que receba a idade de uma pessoa e determine se ela é criança (0-12 anos), adolescente (13-17 anos), adulto (18-64 anos) ou idoso (65 anos ou mais).</li>
                <textarea placeholder="Escreva aqui seu código...">
                    <html>
                    <head>
                        <title>Exercício 2 - Faixa Etária</title>
                    </head>
                    <body>
                        <script>
                            // Adicione seu código aqui!
                        </script>
                    </body>
                    </html>
                </textarea>
                <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
            </ol>
    
            <h2>Próximos Passos</h2>
            <p>Com as estruturas condicionais dominadas, podemos começar a combiná-las com loops e outras funcionalidades para criar programas mais complexos.</p>
        `
    }
    ,{
        title: "Loops em JavaScript - Explorando Diferentes Tipos",
        content: `
            <h1>Loops em JavaScript</h1>
            <p>Loops permitem repetir um bloco de código várias vezes, o que é muito útil para tarefas repetitivas, como processar listas de dados. Vamos explorar 7 tipos de loops disponíveis no JavaScript.</p>
    
            <h2>1. Loop For</h2>
            <p>O <code>for</code> é ideal para quando sabemos quantas vezes o código precisa ser executado. Ele tem três partes principais: inicialização, condição e incremento.</p>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Loop For</title>
                </head>
                <body>
                    <script>
                        for (let i = 1; i <= 5; i++) {
                            document.write("Número: " + i + "<br>");
                        }
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>2. Loop While</h2>
            <p>O <code>while</code> repete um bloco de código enquanto uma condição for verdadeira. É útil quando não sabemos o número exato de repetições antecipadamente.</p>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Loop While</title>
                </head>
                <body>
                    <script>
                        let i = 1;
                        while (i <= 5) {
                            document.write("Número: " + i + "<br>");
                            i++;
                        }
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>3. Loop Do...While</h2>
            <p>O <code>do...while</code> executa o bloco de código ao menos uma vez, mesmo que a condição seja falsa, porque a verificação acontece apenas no final.</p>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Loop Do...While</title>
                </head>
                <body>
                    <script>
                        let i = 1;
                        do {
                            document.write("Número: " + i + "<br>");
                            i++;
                        } while (i <= 5);
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>4. Loop For...In</h2>
            <p>O <code>for...in</code> é usado para iterar sobre as propriedades de um objeto ou os índices de um array.</p>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Loop For...In</title>
                </head>
                <body>
                    <script>
                        let pessoa = { nome: "Ana", idade: 30, cidade: "São Paulo" };
                        for (let chave in pessoa) {
                            document.write(chave + ": " + pessoa[chave] + "<br>");
                        }
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>5. Loop For...Of</h2>
            <p>O <code>for...of</code> é usado para iterar diretamente sobre os valores de arrays, strings ou objetos iteráveis.</p>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Loop For...Of</title>
                </head>
                <body>
                    <script>
                        let frutas = ["Maçã", "Banana", "Laranja"];
                        for (let fruta of frutas) {
                            document.write("Fruta: " + fruta + "<br>");
                        }
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>6. Loop com Array.prototype.forEach</h2>
            <p>O <code>forEach</code> é um método que executa uma função para cada elemento de um array.</p>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Loop ForEach</title>
                </head>
                <body>
                    <script>
                        let numeros = [1, 2, 3, 4, 5];
                        numeros.forEach(function(numero) {
                            document.write("Número: " + numero + "<br>");
                        });
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>7. Loop com Array.prototype.map</h2>
            <p>O <code>map</code> cria um novo array aplicando uma função a cada elemento do array original. Apesar de não ser um loop explícito, é muito usado para transformar dados.</p>
    
            <textarea placeholder="Escreva aqui algum código...">
                <html>
                <head>
                    <title>Loop Map</title>
                </head>
                <body>
                    <script>
                        let numeros = [1, 2, 3, 4, 5];
                        let dobrados = numeros.map(function(numero) {
                            return numero * 2;
                        });
                        document.write("Números dobrados: " + dobrados.join(", ") + "<br>");
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    
            <h2>Próximos Passos</h2>
            <p>Esses são os loops mais usados em JavaScript! Cada um tem seu propósito e vantagens. Pratique cada exemplo acima para entender melhor como eles funcionam.</p>
        `
    }
,{
    title: "Switch Case em JavaScript",
    content: `
        <h1>Switch Case em JavaScript</h1>
        <p>O <code>switch</code> é uma estrutura de controle usada quando temos várias condições para verificar. Ele é uma alternativa ao uso de múltiplos <code>if</code> e <code>else if</code>, tornando o código mais limpo e fácil de entender.</p>

        <h2>Estrutura Básica</h2>
        <p>A sintaxe do <code>switch</code> é simples. Ele verifica o valor de uma expressão e compara com os casos (<code>case</code>) definidos. Se encontrar uma correspondência, executa o bloco de código correspondente.</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Switch Case Básico</title>
            </head>
            <body>
                <script>
                    let dia = 3;

                    switch (dia) {
                        case 1:
                            document.write("Hoje é Segunda-feira.<br>");
                            break;
                        case 2:
                            document.write("Hoje é Terça-feira.<br>");
                            break;
                        case 3:
                            document.write("Hoje é Quarta-feira.<br>");
                            break;
                        case 4:
                            document.write("Hoje é Quinta-feira.<br>");
                            break;
                        case 5:
                            document.write("Hoje é Sexta-feira.<br>");
                            break;
                        case 6:
                            document.write("Hoje é Sábado.<br>");
                            break;
                        case 7:
                            document.write("Hoje é Domingo.<br>");
                            break;
                        default:
                            document.write("Dia inválido.<br>");
                    }
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Entendendo o Funcionamento</h2>
        <p>
            No exemplo acima:
            <ul>
                <li>A variável <code>dia</code> armazena um número representando o dia da semana.</li>
                <li>Cada <code>case</code> representa uma possível correspondência.</li>
                <li>O comando <code>break</code> impede que os outros <code>case</code> sejam executados após encontrar a correspondência.</li>
                <li>O <code>default</code> é executado se nenhuma correspondência for encontrada.</li>
            </ul>
        </p>

        <h2>Exemplo: Calculadora com Switch</h2>
        <p>Vamos criar uma calculadora simples que realiza operações básicas com base no operador fornecido.</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Calculadora com Switch</title>
            </head>
            <body>
                <script>
                    let num1 = 10;
                    let num2 = 5;
                    let operador = "+";

                    switch (operador) {
                        case "+":
                            document.write("Resultado: " + (num1 + num2) + "<br>");
                            break;
                        case "-":
                            document.write("Resultado: " + (num1 - num2) + "<br>");
                            break;
                        case "*":
                            document.write("Resultado: " + (num1 * num2) + "<br>");
                            break;
                        case "/":
                            document.write("Resultado: " + (num1 / num2) + "<br>");
                            break;
                        default:
                            document.write("Operador inválido.<br>");
                    }
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Cuidados com o Switch</h2>
        <p>Ao usar <code>switch</code>, tenha em mente:
            <ul>
                <li>O <code>break</code> é essencial para evitar que outros casos sejam executados.</li>
                <li>O <code>default</code> é opcional, mas é uma boa prática usá-lo para lidar com valores inesperados.</li>
                <li>O <code>switch</code> funciona bem com comparações de igualdade (<code>===</code>), mas não suporta intervalos ou condições complexas diretamente.</li>
            </ul>
        </p>

        <h2>Próximos Passos</h2>
        <p>Agora que entendemos como usar o <code>switch</code>, podemos explorar como combinar essas estruturas com loops e arrays para criar aplicações mais complexas.</p>
    `
}
,{
    title: "Objetos em JavaScript",
    content: `
        <h1>Objetos em JavaScript</h1>
        <p>Objetos são estruturas que permitem agrupar diferentes tipos de dados em uma única variável. Cada objeto possui propriedades e métodos. Vamos aprender como manipulá-los!</p>

        <h2>1. Criando Objetos</h2>
        <p>Os objetos podem ser criados de várias formas. A maneira mais simples de criar um objeto é usando chaves <code>{}</>.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Exemplo de Objeto</title>
            </head>
            <body>
                <script>
                    let pessoa = {
                        nome: "João",
                        idade: 25,
                        saudacao: function() {
                            document.write("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.<br>");
                        }
                    };

                    // Chamando o método do objeto
                    pessoa.saudacao();
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>2. Acessando Propriedades e Métodos</h2>
        <p>Para acessar as propriedades de um objeto, você usa o nome do objeto seguido de um ponto <code>.</code> e o nome da propriedade ou método.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Acessando Propriedades e Métodos</title>
            </head>
            <body>
                <script>
                    let carro = {
                        modelo: "Fusca",
                        ano: 1960,
                        descricao: function() {
                            document.write("O carro é um " + this.modelo + " do ano " + this.ano + ".<br>");
                        }
                    };

                    carro.descricao();
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>3. Adicionando ou Modificando Propriedades</h2>
        <p>Você pode adicionar novas propriedades a um objeto ou modificar as existentes a qualquer momento.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Modificando Propriedades</title>
            </head>
            <body>
                <script>
                    let produto = {
                        nome: "Notebook",
                        preco: 2500
                    };

                    produto.preco = 2200;  // Modificando o preço
                    produto.categoria = "Eletrônicos";  // Adicionando uma nova propriedade

                    document.write("Produto: " + produto.nome + "<br>");
                    document.write("Preço: " + produto.preco + "<br>");
                    document.write("Categoria: " + produto.categoria + "<br>");
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>4. Excluindo Propriedades</h2>
        <p>Você pode excluir uma propriedade de um objeto usando a palavra-chave <code>delete</code>.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Excluindo Propriedades</title>
            </head>
            <body>
                <script>
                    let pessoa = {
                        nome: "Maria",
                        idade: 30
                    };

                    delete pessoa.idade;  // Excluindo a propriedade 'idade'

                    document.write("Nome: " + pessoa.nome + "<br>");
                    document.write("Idade: " + pessoa.idade + "<br>");  // 'idade' será undefined
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Exercícios</h2>
        <ol>
            <li>Crie um objeto <code>livro</code> com as propriedades <code>titulo</code>, <code>autor</code> e <code>ano</code>. Crie também um método <code>exibirInfo</code> que exibe essas informações.</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 1 - Livro</title>
                </head>
                <body>
                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

            <li>Crie um objeto <code>animal</code> com as propriedades <code>nome</code>, <code>tipo</code> e <code>som</code>. Depois, adicione um método <code>fazerSom</code> que exibe o som que o animal faz.</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 2 - Animal</title>
                </head>
                <body>
                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
        </ol>

        <h2>Próximos Passos</h2>
        <p>Agora que você aprendeu sobre objetos, você pode usá-los para estruturar dados de maneira mais organizada e prática em seus programas.</p>
    `
},{
    title: "Arrays em JavaScript",
    content: `
        <h1>Arrays em JavaScript</h1>
        <p>Arrays são coleções de dados que podem armazenar múltiplos valores em uma única variável. Eles são úteis para organizar e manipular dados de forma eficiente.</p>

        <h2>1. O que é um Array?</h2>
        <p>Um array é uma lista de valores, onde cada valor é acessado por um índice. Os índices dos arrays começam em <code>0</code>, ou seja, o primeiro elemento tem o índice 0, o segundo tem o índice 1 e assim por diante.</p>

        <h3>Exemplo de Array</h3>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Exemplo de Array</title>
            </head>
            <body>
                <script>
                    let frutas = ["Maçã", "Banana", "Laranja", "Uva"];
                    document.write(frutas[0]); // Exibe "Maçã"
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>2. Modificando um Array</h2>
        <p>Você pode modificar os valores de um array acessando os elementos pelo índice e atribuindo novos valores.</p>

        <h3>Exemplo de Modificação de Array</h3>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Modificando um Array</title>
            </head>
            <body>
                <script>
                    let frutas = ["Maçã", "Banana", "Laranja", "Uva"];
                    frutas[2] = "Melancia"; // Substitui "Laranja" por "Melancia"
                    document.write(frutas[2]); // Exibe "Melancia"
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>3. Métodos de Arrays</h2>
        <p>Arrays possuem muitos métodos úteis, como:</p>
        <ul>
            <li><code>push()</code>: Adiciona um novo item no final do array.</li>
            <li><code>pop()</code>: Remove o último item do array.</li>
            <li><code>shift()</code>: Remove o primeiro item do array.</li>
            <li><code>unshift()</code>: Adiciona um novo item no começo do array.</li>
            <li><code>length</code>: Retorna o número de elementos no array.</li>
        </ul>

        <h3>Exemplo de Métodos de Arrays</h3>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Métodos de Arrays</title>
            </head>
            <body>
                <script>
                    let frutas = ["Maçã", "Banana", "Laranja"];

                    // Adicionando um item no final
                    frutas.push("Uva");

                    // Removendo o último item
                    frutas.pop();

                    // Adicionando um item no início
                    frutas.unshift("Abacaxi");

                    // Removendo o primeiro item
                    frutas.shift();

                    document.write(frutas); // Exibe o array após as modificações
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>4. Exercícios</h2>
        <ol>
            <li>Crie um array com os dias da semana e exiba o dia da semana que corresponde ao índice 3 (o quarto dia).</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 1 - Dias da Semana</title>
                </head>
                <body>
                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

            <li>Crie um array com cinco números e calcule a soma deles usando um loop.</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 2 - Soma de Números</title>
                </head>
                <body>
                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
        </ol>

        <h2>Próximos Passos</h2>
        <p>Agora que você aprendeu sobre arrays, comece a usar esses métodos para manipular coleções de dados no seu código. Experimente adicionar, remover e acessar elementos de arrays em diferentes partes do seu programa!</p>
    `
}

 ,{
    title: "Funções em JavaScript",
    content: `
        <h1>Funções em JavaScript</h1>
        <p>Funções são blocos de código reutilizáveis que podem ser chamados para executar tarefas específicas. Elas ajudam a organizar o código, tornando-o mais legível e reutilizável.</p>

        <h2>1. Criando e Chamando Funções</h2>
        <p>Uma função é criada usando a palavra-chave <code>function</code>, seguida por um nome, parênteses e um bloco de código.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Exemplo de Função</title>
            </head>
            <body>
                <script>
                    function saudacao() {
                        document.write("Olá! Bem-vindo ao mundo do JavaScript.<br>");
                    }

                    // Chamando a função
                    saudacao();
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>2. Funções com Parâmetros</h2>
        <p>Parâmetros são valores que você pode passar para uma função para personalizar sua execução.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Função com Parâmetros</title>
            </head>
            <body>
                <script>
                    function saudacaoComNome(nome) {
                        document.write("Olá, " + nome + "!<br>");
                    }

                    // Chamando a função com um parâmetro
                    saudacaoComNome("João");
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>3. Funções com Retorno</h2>
        <p>Uma função pode retornar um valor usando a palavra-chave <code>return</code>.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Função com Retorno</title>
            </head>
            <body>
                <script>
                    function soma(a, b) {
                        return a + b;
                    }

                    let resultado = soma(5, 3);
                    document.write("O resultado da soma é: " + resultado + "<br>");
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>4. Funções Anônimas</h2>
        <p>Funções anônimas não têm nome e são frequentemente usadas como valores atribuídos a variáveis ou parâmetros de outras funções.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Funções Anônimas</title>
            </head>
            <body>
                <script>
                    let saudacao = function() {
                        document.write("Esta é uma função anônima.<br>");
                    };

                    saudacao();
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Exercícios</h2>
        <ol>
            <li>Crie uma função que receba dois números como parâmetros e retorne o maior deles.</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 1 - Maior Número</title>
                </head>
                <body>
                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

            <li>Crie uma função que receba uma string como parâmetro e retorne o número de caracteres dessa string.</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 2 - Contar Caracteres</title>
                </head>
                <body>
                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
        </ol>

        <h2>Próximos Passos</h2>
        <p>Funções são essenciais em JavaScript. Pratique criando diferentes funções e explore como elas podem simplificar seu código.</p>
    `
}
,       
{
    title: "Manipulação de DOM em JavaScript",
    content: `
        <h1>Manipulação de DOM em JavaScript</h1>
        <p>O DOM (Document Object Model) é a interface de programação para documentos HTML e XML. Ele representa a estrutura do documento como uma árvore de nós e permite que você modifique o conteúdo, a estrutura e o estilo de uma página web.</p>

        <h2>1. Acessando Elementos do DOM</h2>
        <p>Você pode acessar elementos do DOM utilizando métodos como <code>getElementById()</code>, <code>getElementsByClassName()</code>, entre outros.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Acessando Elementos</title>
            </head>
            <body>
                <h1 id="titulo">Olá, mundo!</h1>

                <script>
                    let titulo = document.getElementById("titulo");
                    titulo.innerHTML = "Texto alterado pelo JavaScript!";
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>2. Alterando o Conteúdo e o Estilo</h2>
        <p>É possível alterar o conteúdo de um elemento usando a propriedade <code>innerHTML</code> e modificar o estilo com <code>style</code>.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Alterando Conteúdo e Estilo</title>
            </head>
            <body>
                <h1 id="titulo">Texto inicial</h1>

                <script>
                    let titulo = document.getElementById("titulo");
                    titulo.innerHTML = "Texto alterado com innerHTML!";
                    titulo.style.color = "red";  // Mudando a cor do texto
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>3. Criando e Adicionando Novos Elementos</h2>
        <p>Você pode criar novos elementos HTML dinamicamente e adicioná-los à página usando o método <code>createElement()</code> e <code>appendChild()</code>.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Criando Elementos</title>
            </head>
            <body>
                <div id="container"></div>

                <script>
                    let novoElemento = document.createElement("p");
                    novoElemento.innerHTML = "Este é um parágrafo criado dinamicamente!";
                    document.getElementById("container").appendChild(novoElemento);
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Exercícios</h2>
        <ol>
            <li>Crie um botão que, ao ser clicado, altera o texto de um parágrafo para "Texto alterado pelo botão".</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 1 - Botão</title>
                </head>
                <body>
                    <p id="texto">Texto inicial</p>
                    <button onclick="mudarTexto()">Alterar Texto</button>

                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

            <li>Crie um formulário que, ao ser enviado, exibe o valor de um campo de texto em uma div abaixo do formulário.</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 2 - Formulário</title>
                </head>
                <body>
                    <form>
                        <input type="text" id="inputTexto">
                        <button type="submit">Enviar</button>
                    </form>
                    <div id="resultado"></div>

                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
        </ol>

        <h2>Próximos Passos</h2>
        <p>Agora que você aprendeu a manipular o DOM, você pode criar interações mais dinâmicas e personalizadas em suas páginas. Continue praticando e experimente criar seu próprio site interativo!</p>
    `
},{
    title: "Eventos em JavaScript",
    content: `
        <h1>Eventos em JavaScript</h1>
        <p>Eventos são ações que acontecem em resposta à interação do usuário com a página web, como cliques, movimentos do mouse, pressionamento de teclas e muito mais. JavaScript pode ser usado para "escutar" e responder a esses eventos.</p>

        <h2>1. O que são Eventos?</h2>
        <p>Eventos são disparados por interações do usuário com a página web, como cliques em botões, alterações em campos de formulário, entre outros. Cada evento pode ter um manipulador, que é uma função que é chamada quando o evento ocorre.</p>

        <h2>2. Manipulando Eventos</h2>
        <p>Você pode associar eventos a elementos HTML usando a função <code>addEventListener()</code>, ou utilizando os atributos de eventos diretamente no HTML, como <code>onclick</code>.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Manipulando Eventos</title>
            </head>
            <body>
                <button id="btnClick">Clique em mim!</button>

                <script>
                    document.getElementById("btnClick").addEventListener("click", function() {
                        document.write("Você clicou no botão!<br>");
                    });
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>3. Eventos Com Formulários</h2>
        <p>Eventos também são muito usados com formulários. Por exemplo, você pode capturar o evento <code>submit</code> para validar um formulário antes de enviá-lo.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Evento no Formulário</title>
            </head>
            <body>
                <form id="meuForm">
                    <input type="text" id="campoTexto">
                    <button type="submit">Enviar</button>
                </form>

                <script>
                    document.getElementById("meuForm").addEventListener("submit", function(event) {
                        event.preventDefault(); // Previne o envio do formulário
                        document.write("Você tentou enviar o formulário!<br>");
                    });
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>4. Eventos de Teclado</h2>
        <p>Eventos de teclado podem ser capturados ao pressionar uma tecla. O evento <code>keydown</code> é disparado quando uma tecla é pressionada.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Evento de Teclado</title>
            </head>
            <body>
                <input type="text" id="campoTexto" placeholder="Pressione uma tecla">

                <script>
                    document.getElementById("campoTexto").addEventListener("keydown", function(event) {
                        document.write("Você pressionou a tecla: " + event.key + "<br>");
                    });
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Exercícios</h2>
        <ol>
            <li>Crie um botão que, quando clicado, altere a cor de fundo da página.</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 1 - Alterar Cor</title>
                </head>
                <body>
                    <button id="btnCor">Alterar Cor</button>

                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

            <li>Crie um campo de entrada de texto e um botão. Quando o botão for clicado, exiba o texto digitado no campo de entrada abaixo do botão.</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 2 - Exibir Texto</title>
                </head>
                <body>
                    <input type="text" id="inputTexto">
                    <button id="btnExibir">Exibir Texto</button>
                    <div id="resultado"></div>

                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
        </ol>

        <h2>Próximos Passos</h2>
        <p>Agora que você aprendeu a trabalhar com eventos, pode adicionar interatividade às suas páginas web. Tente explorar eventos como <code>mouseover</code>, <code>mouseout</code>, entre outros, para criar interfaces mais dinâmicas.</p>
    `
}
,{
    title: "Manipulação de Erros em JavaScript",
    content: `
        <h1>Manipulação de Erros em JavaScript</h1>
        <p>Em JavaScript, podemos tratar erros para evitar que eles interrompam a execução do código. Isso é feito com o uso de <code>try...catch</code>, permitindo que você capture erros e execute um código alternativo.</p>

        <h2>1. O que são Erros?</h2>
        <p>Erros são problemas que ocorrem durante a execução do código. Eles podem ser causados por uma série de razões, como sintaxe incorreta, variáveis não definidas, etc.</p>

        <h2>2. Usando <code>try...catch</code> para Capturar Erros</h2>
        <p>O bloco <code>try</code> contém o código que pode gerar um erro. Se ocorrer um erro, o bloco <code>catch</code> é executado, permitindo que você trate a exceção.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Tratando Erros</title>
            </head>
            <body>
                <script>
                    try {
                        let resultado = 10 / 0; // Um erro de divisão por zero
                        document.write("Resultado: " + resultado + "<br>");
                    } catch (erro) {
                        document.write("Ocorreu um erro: " + erro.message + "<br>");
                    }
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>3. Lançando Erros com <code>throw</code></h2>
        <p>Você pode lançar seus próprios erros usando o comando <code>throw</code>, o que permite interromper a execução e indicar um erro personalizado.</p>
        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Lançando Erros</title>
            </head>
            <body>
                <script>
                    function verificarNumero(num) {
                        if (num < 0) {
                            throw new Error("Número não pode ser negativo!");
                        } else {
                            document.write("Número válido: " + num + "<br>");
                        }
                    }

                    try {
                        verificarNumero(-5);
                    } catch (erro) {
                        document.write("Erro: " + erro.message + "<br>");
                    }
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Exercícios</h2>
        <ol>
            <li>Crie uma função que divida dois números, mas utilize <code>try...catch</code> para capturar erros, como divisão por zero.</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 1 - Divisão</title>
                </head>
                <body>
                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

            <li>Crie uma função que lance um erro caso o valor fornecido seja um número negativo e trate esse erro.</li>
            <textarea placeholder="Escreva aqui seu código...">
                <html>
                <head>
                    <title>Exercício 2 - Erro Personalizado</title>
                </head>
                <body>
                    <script>
                        // Adicione seu código aqui!
                    </script>
                </body>
                </html>
            </textarea>
            <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
        </ol>

        <h2>Próximos Passos</h2>
        <p>Agora que você sabe como capturar e lançar erros, está mais preparado para lidar com falhas no seu código de maneira controlada. Continue praticando!</p>
    `
}
,{
    title: "Manipulação Avançada de DOM em JavaScript",
    content: `
        <h1>Manipulação Avançada de DOM</h1>
        <p>Aprender a manipular o DOM de forma avançada é essencial para criar páginas interativas e dinâmicas. Vamos explorar alguns métodos avançados para manipular elementos no DOM.</p>

        <h2>Selecionando Elementos com "querySelector()" e "querySelectorAll()"</h2>
        <p>Esses métodos permitem selecionar elementos no DOM de forma flexível e poderosa.</p>
        
        <h3>Exemplo de Como Usar</h3>
        <p>Vamos selecionar todos os itens de uma lista e exibir os resultados no console:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Exemplo de Seleção de Elementos</title>
            </head>
            <body>
                <ul class="minha-lista">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>

                <script>
                    let itens = document.querySelectorAll('.minha-lista li');
                    itens.forEach(function(item) {
                        document.write(item.textContent);
                    });
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Alterando Atributos com "setAttribute()"</h2>
        <p>Você pode modificar atributos de elementos usando o método <code>setAttribute()</code>.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo altera o atributo <code>src</code> de uma imagem ao clicar em um botão:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Alterando Atributos</title>
            </head>
            <body>
                <img id="imagem" src="imagem-original.jpg" alt="Imagem Original">
                <button id="alterar">Alterar Imagem</button>

                <script>
                    let botao = document.getElementById('alterar');
                    let imagem = document.getElementById('imagem');
                    
                    botao.addEventListener('click', function() {
                        imagem.setAttribute('src', 'nova-imagem.jpg');
                        imagem.setAttribute('alt', 'Imagem Alterada');
                    });
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Removendo Elementos com "removeChild()"</h2>
        <p>O método <code>removeChild()</code> remove um elemento filho de seu pai no DOM.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo remove o primeiro item de uma lista quando um botão é clicado:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Removendo Elementos</title>
            </head>
            <body>
                <ul id="lista">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                <button id="remover">Remover Item</button>

                <script>
                    let botao = document.getElementById('remover');
                    let lista = document.getElementById('lista');
                    let primeiroItem = lista.querySelector('li');

                    botao.addEventListener('click', function() {
                        lista.removeChild(primeiroItem); // Remove o primeiro item da lista
                    });
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Próximos Passos</h2>
        <p>Agora que você sabe como manipular o DOM de forma avançada, você pode começar a aplicar esses métodos em projetos mais dinâmicos, como adicionar e remover elementos em tempo real.</p>
    `
},{
    title: "Funções de Ordem Superior em JavaScript",
    content: `
        <h1>Funções de Ordem Superior</h1>
        <p>Funções de ordem superior são funções que podem receber outras funções como argumentos ou retornar funções como resultado. Em JavaScript, métodos como <code>map()</code>, <code>filter()</code> e <code>reduce()</code> são ótimos exemplos disso.</p>

        <h2>Usando o método <code>map()</code></h2>
        <p>O <code>map()</code> cria um novo array com os resultados da execução de uma função em cada elemento do array original.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo usa o <code>map()</code> para multiplicar todos os números de um array por 2:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Usando o map()</title>
            </head>
            <body>
                <script>
                    let numeros = [1, 2, 3, 4];
                    let numerosMultiplicados = numeros.map(function(numero) {
                        return numero * 2;
                    });
                    document.write(numerosMultiplicados); // [2, 4, 6, 8]
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Usando o método <code>filter()</code></h2>
        <p>O <code>filter()</code> cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo usa o <code>filter()</code> para filtrar os números pares de um array:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Usando o filter()</title>
            </head>
            <body>
                <script>
                    let numeros = [1, 2, 3, 4, 5, 6];
                    let numerosPares = numeros.filter(function(numero) {
                        return numero % 2 === 0;
                    });
                    document.write(numerosPares); // [2, 4, 6]
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Usando o método <code>reduce()</code></h2>
        <p>O <code>reduce()</code> aplica uma função a um acumulador e a cada valor de um array (da esquerda para a direita), para reduzi-lo a um único valor.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo usa o <code>reduce()</code> para somar todos os números de um array:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Usando o reduce()</title>
            </head>
            <body>
                <script>
                    let numeros = [1, 2, 3, 4];
                    let soma = numeros.reduce(function(acumulador, numero) {
                        return acumulador + numero;
                    }, 0);
                    document.write(soma); // 10
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Próximos Passos</h2>
        <p>Agora que você conhece as funções de ordem superior, experimente combiná-las para resolver problemas mais complexos. Elas são extremamente úteis para manipulação de dados e criação de lógica funcional.</p>
    `
}
,{
    title: "Manipulação de Strings em JavaScript",
    content: `
        <h1>Manipulação de Strings</h1>
        <p>Trabalhar com strings é uma habilidade essencial em JavaScript. Vamos aprender alguns métodos importantes para manipular strings.</p>

        <h2>Usando o método <code>charAt()</code></h2>
        <p>O método <code>charAt()</code> retorna o caractere em uma posição específica dentro da string.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo usa <code>charAt()</code> para acessar o primeiro caractere de uma string:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Usando charAt()</title>
            </head>
            <body>
                <script>
                    let nome = "JavaScript";
                    let primeiroCaractere = nome.charAt(0);
                    document.write(primeiroCaractere); // J
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Usando o método <code>substring()</code></h2>
        <p>O método <code>substring()</code> retorna uma parte da string entre dois índices fornecidos.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo usa <code>substring()</code> para extrair uma parte da string:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Usando substring()</title>
            </head>
            <body>
                <script>
                    let nome = "JavaScript";
                    let parteNome = nome.substring(0, 4);
                    document.write(parteNome); // Java
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Usando o método <code>toLowerCase()</code> e <code>toUpperCase()</code></h2>
        <p>Os métodos <code>toLowerCase()</code> e <code>toUpperCase()</code> convertem a string para minúsculas ou maiúsculas, respectivamente.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo usa ambos os métodos para alterar a capitalização da string:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Usando toLowerCase() e toUpperCase()</title>
            </head>
            <body>
                <script>
                    let nome = "JavaScript";
                    document.write(nome.toLowerCase()); // javascript
                    document.write("<br>");
                    document.write(nome.toUpperCase()); // JAVASCRIPT
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Próximos Passos</h2>
        <p>Agora que você sabe como manipular strings de várias formas, pode começar a aplicar esses métodos em manipulações de dados em seus projetos.</p>

        <h2>Exercícios</h2>
        <p>Vamos praticar! Tente resolver os seguintes exercícios:</p>
        
        <h3>1. Exercício: Extrair um Substring</h3>
        <p>Crie uma string com o nome completo de uma pessoa e extraia apenas o primeiro nome usando o método <code>substring()</code>.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 1</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h3>2. Exercício: Converter para Maiúsculas</h3>
        <p>Crie uma string e converta todas as letras para maiúsculas usando <code>toUpperCase()</code>.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 2</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h3>3. Exercício: Contagem de Caracteres</h3>
        <p>Crie uma string e exiba a quantidade de caracteres usando o método <code>length</code>.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 3</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    `
}
,{
    title: "Métodos de Ordenação e Pesquisa em Arrays",
    content: `
        <h1>Métodos de Ordenação e Pesquisa em Arrays</h1>
        <p>Em JavaScript, podemos usar diversos métodos para ordenar e pesquisar elementos dentro de um array. Vamos aprender alguns dos métodos mais importantes.</p>

        <h2>Usando o método <code>sort()</code></h2>
        <p>O método <code>sort()</code> ordena os elementos de um array. Por padrão, ele ordena os elementos como strings, o que pode levar a resultados inesperados se você trabalhar com números.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo usa <code>sort()</code> para ordenar um array de números:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Usando sort()</title>
            </head>
            <body>
                <script>
                    let numeros = [3, 1, 4, 1, 5, 9];
                    numeros.sort(function(a, b) {
                        return a - b; // Ordenação crescente
                    });
                    document.write(numeros); // [1, 1, 3, 4, 5, 9]
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Usando o método <code>reverse()</code></h2>
        <p>O método <code>reverse()</code> inverte a ordem dos elementos de um array.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo usa <code>reverse()</code> para inverter a ordem dos elementos de um array:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Usando reverse()</title>
            </head>
            <body>
                <script>
                    let numeros = [1, 2, 3, 4, 5];
                    numeros.reverse();
                    document.write(numeros); // [5, 4, 3, 2, 1]
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Usando o método <code>indexOf()</code></h2>
        <p>O método <code>indexOf()</code> retorna o índice do primeiro elemento que encontra com o valor especificado. Se o elemento não for encontrado, retorna -1.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo usa <code>indexOf()</code> para encontrar o índice de um elemento dentro do array:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Usando indexOf()</title>
            </head>
            <body>
                <script>
                    let frutas = ["maçã", "banana", "laranja"];
                    let indice = frutas.indexOf("banana");
                    document.write(indice); // 1
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Usando o método <code>includes()</code></h2>
        <p>O método <code>includes()</code> verifica se um elemento está presente no array. Retorna <code>true</code> se o elemento for encontrado e <code>false</code> caso contrário.</p>

        <h3>Exemplo de Como Usar</h3>
        <p>Este exemplo usa <code>includes()</code> para verificar se um elemento está no array:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Usando includes()</title>
            </head>
            <body>
                <script>
                    let frutas = ["maçã", "banana", "laranja"];
                    let temBanana = frutas.includes("banana");
                    document.write(temBanana); // true
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Próximos Passos</h2>
        <p>Agora que você conhece alguns métodos poderosos para ordenar e pesquisar em arrays, pode usar esses recursos em seus projetos para organizar dados de maneira eficiente.</p>

        <h2>Exercícios</h2>
        <p>Vamos praticar! Tente resolver os seguintes exercícios:</p>
        
        <h3>1. Exercício: Ordenar um Array de Números</h3>
        <p>Crie um array com 5 números desordenados e use o método <code>sort()</code> para ordená-los em ordem crescente.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 1</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h3>2. Exercício: Inverter um Array</h3>
        <p>Crie um array com 3 elementos e use o método <code>reverse()</code> para inverter a ordem dos elementos.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 2</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h3>3. Exercício: Verificar se um Elemento Existe</h3>
        <p>Crie um array com 4 frutas e verifique se a fruta "laranja" está presente usando o método <code>includes()</code>.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 3</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    `
},
{
    title: "Trabalhando com LocalStorage e SessionStorage",
    content: `
        <h1>Trabalhando com LocalStorage e SessionStorage</h1>
        <p>O <code>LocalStorage</code> e o <code>SessionStorage</code> permitem armazenar dados no navegador de forma simples e eficiente. Vamos aprender a usá-los.</p>

        <h2>LocalStorage</h2>
        <p>O <code>LocalStorage</code> armazena dados de forma persistente. Ou seja, os dados permanecem mesmo depois que o navegador é fechado.</p>

        <h3>Exemplo de Como Usar LocalStorage</h3>
        <p>Este exemplo armazena e recupera dados usando o <code>LocalStorage</code>:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>LocalStorage Exemplo</title>
            </head>
            <body>
                <script>
                    // Armazena dados
                    localStorage.setItem('nome', 'João');

                    // Recupera dados
                    let nome = localStorage.getItem('nome');
                    document.write('Nome armazenado: ' + nome);
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>SessionStorage</h2>
        <p>O <code>SessionStorage</code> armazena dados apenas durante a sessão atual do navegador. Quando a aba do navegador é fechada, os dados são removidos.</p>

        <h3>Exemplo de Como Usar SessionStorage</h3>
        <p>Este exemplo armazena e recupera dados usando o <code>SessionStorage</code>:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>SessionStorage Exemplo</title>
            </head>
            <body>
                <script>
                    // Armazena dados
                    sessionStorage.setItem('tema', 'dark');

                    // Recupera dados
                    let tema = sessionStorage.getItem('tema');
                    document.write('Tema atual: ' + tema);
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Próximos Passos</h2>
        <p>Agora que você aprendeu a trabalhar com <code>LocalStorage</code> e <code>SessionStorage</code>, pode armazenar dados localmente em seus aplicativos web.</p>

        <h2>Exercícios</h2>
        <p>Vamos praticar! Tente resolver os seguintes exercícios:</p>

        <h3>1. Exercício: Armazenar Dados no LocalStorage</h3>
        <p>Armazene seu nome no <code>LocalStorage</code> e exiba-o na tela após a página ser recarregada.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 1</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h3>2. Exercício: Usar SessionStorage</h3>
        <p>Armazene a cor de fundo escolhida pelo usuário no <code>SessionStorage</code> e aplique a cor de fundo quando a página for recarregada.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 2</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    `
}
,{
    title: "Trabalhando com JSON e Objetos em JavaScript",
    content: `
        <h1>Trabalhando com JSON e Objetos em JavaScript</h1>
        <p>Em JavaScript, podemos converter objetos para o formato JSON e vice-versa. Isso é útil ao interagir com APIs e quando precisamos armazenar ou transmitir dados.</p>

        <h2>Convertendo Objetos para JSON</h2>
        <p>Para converter um objeto JavaScript em uma string JSON, usamos o método <code>JSON.stringify()</code>.</p>

        <h3>Exemplo de Conversão de Objeto para JSON</h3>
        <p>Este exemplo converte um objeto em JSON e exibe o resultado:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Objeto para JSON</title>
            </head>
            <body>
                <script>
                    let usuario = {
                        nome: "Maria",
                        idade: 25,
                        email: "maria@exemplo.com"
                    };

                    let usuarioJSON = JSON.stringify(usuario);  // Converte o objeto para JSON
                    document.write(usuarioJSON);  // Exibe o JSON
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Convertendo JSON para Objetos</h2>
        <p>Para converter uma string JSON de volta para um objeto, usamos o método <code>JSON.parse()</code>.</p>

        <h3>Exemplo de Conversão de JSON para Objeto</h3>
        <p>Este exemplo converte uma string JSON de volta para um objeto:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>JSON para Objeto</title>
            </head>
            <body>
                <script>
                    let usuarioJSON = '{"nome": "Maria", "idade": 25, "email": "maria@exemplo.com"}';
                    let usuario = JSON.parse(usuarioJSON);  // Converte o JSON para objeto
                    document.write(usuario.nome);  // Exibe o nome do usuário
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Próximos Passos</h2>
        <p>Agora que você aprendeu a trabalhar com JSON, pode manipular dados de APIs e realizar a troca de dados entre sistemas facilmente.</p>

        <h2>Exercícios</h2>
        <p>Vamos praticar! Tente resolver os seguintes exercícios:</p>

        <h3>1. Exercício: Converter Objeto para JSON</h3>
        <p>Crie um objeto com seu nome, idade e cidade, e converta-o para JSON. Exiba o JSON na tela.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 1</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h3>2. Exercício: Converter JSON para Objeto</h3>
        <p>Crie uma string JSON com informações de um livro (título, autor, ano) e converta-a de volta para um objeto. Exiba o título do livro na tela.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 2</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    `
}


,{
    title: "Promises e Async/Await em JavaScript",
    content: `
        <h1>Promises e Async/Await em JavaScript</h1>
        <p>Em JavaScript, muitas operações são assíncronas, como requisições HTTP, temporizadores, e interações com bancos de dados. Para lidar com esses casos, usamos Promises e a sintaxe Async/Await. Vamos entender como eles funcionam.</p>

        <h2>Promises</h2>
        <p>Uma <code>Promise</code> é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. A Promise pode estar em um dos seguintes estados: <code>pending</code>, <code>resolved</code> ou <code>rejected</code>.</p>

        <h3>Exemplo de Como Usar Promises</h3>
        <p>Este exemplo mostra como criar uma Promise que simula uma operação assíncrona:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Promise Exemplo</title>
            </head>
            <body>
                <script>
                    let minhaPromise = new Promise(function(resolve, reject) {
                        let sucesso = true;
                        if (sucesso) {
                            resolve("Operação concluída com sucesso!");
                        } else {
                            reject("Erro na operação.");
                        }
                    });

                    minhaPromise.then(function(resultado) {
                        document.write(resultado); // Operação concluída com sucesso!
                    }).catch(function(erro) {
                        document.write(erro); // Erro na operação.
                    });
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Async/Await</h2>
        <p>O Async/Await é uma maneira mais simples de trabalhar com Promises. Ao invés de usar os métodos <code>then()</code> e <code>catch()</code>, você pode usar a palavra-chave <code>await</code> dentro de uma função <code>async</code>.</p>

        <h3>Exemplo de Como Usar Async/Await</h3>
        <p>Este exemplo mostra como usar <code>async</code> e <code>await</code> para lidar com uma Promise:</p>

        <textarea placeholder="Escreva aqui algum código...">
            <html>
            <head>
                <title>Async/Await Exemplo</title>
            </head>
            <body>
                <script>
                    async function operacaoAssincrona() {
                        let minhaPromise = new Promise(function(resolve, reject) {
                            let sucesso = true;
                            if (sucesso) {
                                resolve("Operação concluída com sucesso!");
                            } else {
                                reject("Erro na operação.");
                            }
                        });

                        try {
                            let resultado = await minhaPromise;
                            document.write(resultado); // Operação concluída com sucesso!
                        } catch (erro) {
                            document.write(erro); // Erro na operação.
                        }
                    }

                    operacaoAssincrona();
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h2>Próximos Passos</h2>
        <p>Agora que você aprendeu a trabalhar com Promises e Async/Await, pode lidar com operações assíncronas de forma mais eficiente e intuitiva.</p>

        <h2>Exercícios</h2>
        <p>Vamos praticar! Tente resolver os seguintes exercícios:</p>
        
        <h3>1. Exercício: Criar uma Promise</h3>
        <p>Crie uma Promise que resolve se um número for par e rejeita se o número for ímpar. Teste a Promise com o número 4.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 1</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>

        <h3>2. Exercício: Usando Async/Await</h3>
        <p>Crie uma função assíncrona que simula uma requisição HTTP. A função deve resolver se a requisição for bem-sucedida e rejeitar se ocorrer um erro. Teste a função com sucesso e erro.</p>

        <textarea placeholder="Escreva aqui seu código...">
            <html>
            <head>
                <title>Exercício 2</title>
            </head>
            <body>
                <script>
                    // Escreva seu código aqui
                </script>
            </body>
            </html>
        </textarea>
        <button type="button" class="btnexecutecode" popovertarget="output">Ver Resultado</button>
    `
}
,


     
]

var ulTitles = document.getElementById('ulTitles')

livro.forEach((e, index) => {

    var title = document.createElement('p')

    title.classList.add('ulTitle')

    title.innerHTML = `<span id="id${index}"> ${e.title} <span>`
    ulTitles.appendChild(title)

})

let ulTitle = document.querySelectorAll('.ulTitle')

ulTitle.forEach((e, index) => {

    e.addEventListener('click', () => {

        document.getElementById('article').innerHTML = livro[index].content
        let btnexecutecode = document.querySelectorAll('.btnexecutecode')
        btnexecutecode.forEach((e, index) => {
            e.addEventListener('click', () => {
                const code = e.previousElementSibling.value;
                const iframe = document.getElementById("output");
        
                iframe.contentDocument.open();
                iframe.contentDocument.write(code);
        
                // Adiciona um pequeno atraso antes de fechar o documento
                setTimeout(() => {
                    iframe.contentDocument.close();
                }, 100);
            });
        });
        
        
    
    })




})




