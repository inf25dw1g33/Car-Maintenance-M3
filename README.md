# 🚗 Car Maintenance API - Sistema de Gestão de Manutenção Automóvel

Repositório criado no âmbito da disciplina **Desenvolvimento Web I** da Licenciatura em Informática da **Universidade da Maia (UMAIA)**.

**Grupo 33** - Momento de Avaliação 3 (2025/26)

**Desenvolvido por:**

- [@César Ramos](https://github.com/devCesarRamos)
- [@Gonçalo Cidras](https://github.com/devCidras)
- [@Jorge Espogeira](https://github.com/JorgeEspogeira)

---

## 📋 Descrição do Projeto

O **Car Maintenance API** é uma aplicação web completa para gestão de manutenção de automóveis, desenvolvida com uma arquitetura moderna baseada em serviços REST utilizando **abordagem Code-first**. 

O sistema permite gerir proprietários de veículos, veículos, tipos de serviços, registos de manutenção e mecânicos através de uma API REST robusta e uma interface de backoffice intuitiva.

### Características Principais

- **API REST** desenvolvida com **LoopBack 4** (abordagem Code-first)
- **Interface de Backoffice** moderna construída com **React-Admin**
- **Base de dados MySQL** com relações 1:N e M:N (na BD)
- **Arquitetura containerizada** com Docker (3 containers)
- **Documentação OpenAPI 3.0** gerada automaticamente
- **Collection Postman** completa com 46+ requests
- **155+ registos** de teste pré-carregados

---

## 🗂️ Organização do Repositório

```
Car-Maintenance-M3-main/
│
├── src/                          # Código fonte da aplicação
│   ├── api/                      # API LoopBack 4
│   │   ├── src/
│   │   │   ├── models/           # Modelos de dados
│   │   │   ├── controllers/      # Controladores REST
│   │   │   ├── repositories/     # Repositórios de acesso a dados
│   │   │   └── datasources/      # Configuração de datasources
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── backoffice/               # Cliente React-Admin
│   │   ├── src/
│   │   │   ├── components/       # Componentes React
│   │   │   ├── resources/        # Definição de recursos
│   │   │   └── providers/        # Data providers
│   │   ├── public/
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── db/                       # Base de dados MySQL
│   │   ├── init.sql              # Schema e dados iniciais
│   │   └── Dockerfile
│   │
│   ├── postman/                  # Collections Postman
│   │   └── Car_Maintenance_API.postman_collection.json
│   │
│   ├── docker-compose.yml        # Orquestração de containers
│   └── package.json
│
├── doc/                          # Documentação do projeto
│   ├── c1.md                     # Capítulo 1: Apresentação
│   ├── c2.md                     # Capítulo 2: Recursos
│   ├── c3.md                     # Capítulo 3: Produto
│   ├── c4.md                     # Capítulo 4: Apresentação
│   └── images/                   # Imagens da documentação
│
├── .gitignore
├── LICENSE
└── README.md                     # Este ficheiro
```

---

## 🎯 Recursos da API

A API disponibiliza os seguintes 5 recursos principais:

| Recurso              | Endpoint              | Descrição                                      |
| -------------------- | --------------------- | ---------------------------------------------- |
| **Owners**           | `/api/owners`         | Proprietários de veículos                      |
| **Vehicles**         | `/api/vehicles`       | Veículos registados no sistema                 |
| **Service Types**    | `/api/service-types`  | Tipos de serviço de manutenção                 |
| **Service Records**  | `/api/service-records`| Registos de manutenções realizadas             |
| **Mechanics**        | `/api/mechanics`      | Mecânicos (relação M:N na BD)                  |

### Relações entre Recursos

- **Owner → Vehicles** (1:N) - Um proprietário pode ter múltiplos veículos
- **Vehicle → Service Records** (1:N) - Um veículo tem múltiplos registos de manutenção
- **Service Type → Service Records** (1:N) - Um tipo de serviço está em múltiplos registos
- **Service Records ↔ Mechanics** (M:N na BD) - Implementado através da tabela `service_record_mechanics` (não exposta via API)

---

## 🌐 Endpoints Disponíveis

Cada recurso disponibiliza os seguintes endpoints padrão:

### Owners (Exemplo)
- `GET /api/owners` - Listar todos
- `GET /api/owners/{id}` - Obter por ID
- `GET /api/owners/count` - Contar registos
- `POST /api/owners` - Criar novo
- `PATCH /api/owners/{id}` - Atualizar parcial
- `PUT /api/owners/{id}` - Substituir completo
- `DELETE /api/owners/{id}` - Eliminar

Este padrão repete-se para **todos os 5 recursos**.

### Filtros HTTP

A API suporta filtros avançados via query parameters:

```bash
# Filtrar por campo
GET /api/vehicles?filter={"where":{"brand":"Volkswagen"}}

# Filtrar por relação (veículos de um owner)
GET /api/vehicles?filter={"where":{"ownerId":1}}

# Paginação
GET /api/owners?filter={"limit":10,"offset":0}

# Ordenação
GET /api/owners?filter={"order":["name ASC"]}

# Combinado
GET /api/service-records?filter={"where":{"cost":{"gte":200}},"order":["cost DESC"],"limit":10}
```

**Documentação interativa:** http://localhost:3000/explorer

---

## 🚀 Tecnologias Utilizadas

### Backend
- **[LoopBack 4](https://loopback.io/)** - Framework Node.js para APIs REST (Code-first)
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript
- **[MySQL 8.0](https://www.mysql.com/)** - Sistema de Gestão de Base de Dados
- **[Node.js](https://nodejs.org/)** v18+ - Runtime JavaScript

### Frontend
- **[React-Admin](https://marmelab.com/react-admin/)** - Framework para backoffice
- **[React](https://react.dev/)** v18 - Biblioteca JavaScript para UI
- **[Material-UI](https://mui.com/)** - Design system

### DevOps
- **[Docker](https://www.docker.com/)** - Containerização
- **[Docker Compose](https://docs.docker.com/compose/)** - Orquestração multi-container
- **[Docker Hub](https://hub.docker.com/u/inf25dw1g33)** - Registry de imagens

### Ferramentas
- **[Postman](https://www.postman.com/)** - Testes de API
- **[OpenAPI 3.0](https://swagger.io/specification/)** - Especificação (gerada automática)

---

## 📦 Instalação e Execução

### Pré-requisitos

- Docker Engine 20.10+
- Docker Compose 2.0+
- Git

### Clonar o Repositório

```bash
git clone https://github.com/inf25dw1g33/Car-Maintenance-M3.git
cd Car-Maintenance-M3/src
```

### Executar com Docker Compose

```bash
# Iniciar todos os serviços
docker-compose up -d

# Verificar o estado dos containers
docker-compose ps

# Ver logs
docker-compose logs -f
```

### Aceder às Aplicações

| Serviço         | URL                            | Descrição                         |
| --------------- | ------------------------------ | --------------------------------- |
| **API REST**    | http://localhost:3000          | Endpoints da API                  |
| **API Explorer**| http://localhost:3000/explorer | Documentação OpenAPI interativa   |
| **Backoffice**  | http://localhost:3001          | Interface administrativa          |
| **MySQL**       | localhost:3310                 | Base de dados (acesso interno)    |

### Credenciais

**MySQL:**
- Host: `localhost:3310`
- User: `car`
- Password: `car`
- Database: `car_maintenance`

---

## 🐳 Docker Hub

As imagens Docker estão publicadas em:

- **MySQL:** `inf25dw1g33/mysql:m3`
- **API:** `inf25dw1g33/api:m3`
- **Backoffice:** `inf25dw1g33/backoffice:m3`

```bash
# Pull das imagens
docker pull inf25dw1g33/mysql:m3
docker pull inf25dw1g33/api:m3
docker pull inf25dw1g33/backoffice:m3
```

---

## 📚 Documentação

A documentação completa do projeto está organizada em capítulos:

### [Capítulo 1: Apresentação do Projeto](./doc/c1.md)
- Contexto e objetivos
- Equipa de desenvolvimento
- Metodologia utilizada (Code-first)

### [Capítulo 2: Recursos](./doc/c2.md)
- Arquitetura da solução
- Modelo de dados e relações
- Endpoints da API
- Especificação OpenAPI

### [Capítulo 3: Produto](./doc/c3.md)
- Implementação técnica (LoopBack 4 + React-Admin)
- Interface de backoffice
- Funcionalidades principais
- Docker e deployment

### [Capítulo 4: Apresentação](./doc/c4.md)
- Demonstração do sistema
- Resultados obtidos
- Conclusões

---

## 📝 Collection Postman

Uma collection completa com **46+ requests** está disponível em [`src/postman/Car_Maintenance_API.postman_collection.json`](src/postman/Car_Maintenance_API.postman_collection.json).

**Para importar:**
1. Abrir Postman
2. File → Import
3. Selecionar o ficheiro da collection
4. Variável `{{baseUrl}}` está configurada como `http://localhost:3000/api`

---

## ✅ Requisitos Implementados

### Obrigatórios (10/10)

- ✅ Arquitetura de serviços REST
- ✅ 5 verbos HTTP: GET, POST, PATCH, PUT, DELETE
- ✅ 5 recursos diferentes (Owners, Vehicles, ServiceTypes, ServiceRecords, Mechanics)
- ✅ Relação 1:N (Owner→Vehicles, Vehicle→ServiceRecords, ServiceType→ServiceRecords)
- ✅ Representações em JSON
- ✅ Documentação OpenAPI 3.0 (gerada automática em `/explorer`)
- ✅ Collection Postman (46 requests)
- ✅ MySQL como SGBD
- ✅ Cliente de backoffice (React-Admin)
- ✅ Docker multi-container (3 services: MySQL, API, Backoffice)

### Valorizações (1/2)

- ✅ Filtros através de parâmetros HTTP (built-in LoopBack)
- ⚠️ Relação M:N implementada na BD (`service_record_mechanics`), mas **não exposta via API LoopBack**

### Extras Implementados

- ✅ Endpoint `/count` em todos os recursos
- ✅ 30+ registos por tabela (155+ total)
- ✅ Healthchecks nos containers Docker
- ✅ README.md completo com instruções
- ✅ Imagens Docker Hub públicas

---

## 🤖 Utilização de Inteligência Artificial

Este projeto utilizou ferramentas de IA como assistente no desenvolvimento:

### Claude AI (Anthropic)

- **Utilização:** Estruturação do código LoopBack 4, configuração de relações 1:N
- **Prompts principais:**
  - "Como implementar relação 1:N no LoopBack 4?"
  - "Configurar datasource MySQL com healthcheck no LoopBack 4"
  - "Criar dataProvider personalizado para React-Admin com LoopBack 4"

### GitHub Copilot

- **Utilização:** Autocompletar código TypeScript e componentes React
- **Contribuição:** Acelerou a escrita de controllers e recursos React-Admin

A utilização destas ferramentas foi complementar ao desenvolvimento manual, servindo para:
- Acelerar tarefas repetitivas
- Sugerir boas práticas de LoopBack 4 e React-Admin
- Debugging de erros comuns
- Documentação de código

**Transparência:** Todo o código gerado por IA foi revisto, testado e adaptado pela equipa.

---

## 👥 Equipa

### Grupo 33 - inf25dw1g33

| Nome              | Nº Aluno | GitHub                                               |
| ----------------- | -------- | ---------------------------------------------------- |
| César Ramos       | A035224  | [@devCesarRamos](https://github.com/devCesarRamos)   |
| Gonçalo Cidras    | A046393  | [@devCidras](https://github.com/devCidras)           |
| Jorge Espogeira   | A046409  | [@JorgeEspogeira](https://github.com/JorgeEspogeira) |

**Organização GitHub:** [inf25dw1g33](https://github.com/inf25dw1g33)

**Docker Hub:** [inf25dw1g33](https://hub.docker.com/u/inf25dw1g33)

---

**Desenvolvimento Web I** | **UMAIA** | **2025/26**
