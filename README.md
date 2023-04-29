# Projeto Trybers-and-Dragons

# Sobre
Projeto desenvolvido durante o Módulo 3 - Back-End do curso de Desenvolvimento Web da Trybe.

Neste projeto os princípios da arquitetura SOLID e da Programação Orientada a Objetos foram aplicados em uma estrutura de jogos de interpretação de papéis (RPG) que se passa em universo de criaturas fantásticas. Foram implementadas interfaces e classes em Typescrypt representando Raças, seus Arquétipos e demais atributos.

Os arquivos desenvolvidos por mim estão na pasta src. Os demais foram desenvolvidos pelo time da Trybe.

## Tecnologias usadas

>Back-End:
Docker, docker-compose, Node.js, Typescrypt.

## Instalando Dependências

### Usando o Docker

1. Clone este repositório em su máquina, e em seguida suba o container:
```bash
docker-compose up -d
``` 
- Será inicializado o container trybers_and_dragons

2. Dentro do diretório do projeto, execute o conteiner:
```bash
docker exec -it trybers_and_dragons bash
``` 
- As credencias de acesso ao banco de dados estão definidas no arquivo docker-compose.yml.

3. Agora instale as dependências dentro do container:
```bash
npm install
``` 
### Rodando localmente

 - É necessário ter o ```node``` (versão 16 ou superior) instalado em sua máquina.
 
 1. Clone este repositório em su máquina, e em seguida instale as dependências:
 ```bash
npm install
```
### Para inicializar o servidor
- Faça isso dentro do conatiner, se estiver o utilizando.
```bash
npm run dev
``` 
