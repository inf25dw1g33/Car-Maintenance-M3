# Sistema de Gestão de Manutenção de Automóveis

Repositório criado no âmbito da disciplina **Desenvolvimento Web I** da Licenciatura em Informática da **Universidade da Maia (UMAIA)**.

**Grupo 33** - Momento de Avaliação 3 (2025/26)

**Desenvolvido por:**

- [@Goncalo Cidras](https://github.com/devCidras)
- [@Jorge Espogeira](https://github.com/JorgeEspogeira)
- [@Cesar Ramos](https://github.com/devCesarRamos)

---

## 📋 Descrição do Projeto

O **Car Maintenance System** é uma aplicação web completa para gestão de manutenção de automóveis, desenvolvida com uma arquitetura moderna baseada em serviços REST. O sistema permite gerir veículos, clientes, oficinas, serviços de manutenção e agendamentos através de uma interface de backoffice intuitiva.

### Características Principais

- **API REST** robusta desenvolvida com **LoopBack 4**
- **Interface de Backoffice** moderna construída com **React-Admin**
- **Base de dados MySQL** para persistência de dados
- **Arquitetura containerizada** com Docker
- **Documentação OpenAPI 3.0** completa
- Relações complexas entre recursos (1:n e m:n)
- Sistema de autenticação e autorização

---

## 🗂️ Organização do Repositório

```
Car-Maintenance-M3/
│
├── src/                          # Código fonte da aplicação
│   ├── api/                      # API LoopBack 4
│   │   ├── models/               # Modelos de dados
│   │   ├── controllers/          # Controladores REST
│   │   ├── repositories/         # Repositórios de acesso a dados
│   │   └── datasources/          # Configuração de datasources
│   │
│   └── backoffice/               # Cliente React-Admin
│       ├── src/
│       │   ├── components/       # Componentes React
│       │   ├── resources/        # Definição de recursos
│       │   └── providers/        # Data providers
│       └── public/
│
├── doc/                          # Documentação do projeto
│   ├── c1.md                     # Capítulo 1: Apresentação
│   ├── c2.md                     # Capítulo 2: Recursos
│   ├── c3.md                     # Capítulo 3: Produto
│   └── c4.md                     # Capítulo 4: Apresentação
│
├── docker/                       # Configuração Docker
│   ├── docker-compose.yml        # Orquestração de containers
│   ├── api.Dockerfile            # Dockerfile da API
│   └── backoffice.Dockerfile     # Dockerfile do backoffice
│
├── postman/                      # Collections Postman
│   └── CarMaintenance.postman_collection.json
│
├── openapi/                      # Documentação OpenAPI
│   └── openapi.yaml              # Especificação OpenAPI 3.0
│
├── .gitignore
├── LICENSE
└── README.md                     # Este ficheiro
```

---

## 🎯 Recursos da API

A API disponibiliza os seguintes recursos principais:

| Recurso          | Endpoint        | Descrição                           |
| ---------------- | --------------- | ----------------------------------- |
| **Veículos**     | `/vehicles`     | Gestão de automóveis                |
| **Clientes**     | `/customers`    | Gestão de clientes                  |
| **Oficinas**     | `/workshops`    | Gestão de oficinas                  |
| **Serviços**     | `/services`     | Catálogo de serviços de manutenção  |
| **Agendamentos** | `/appointments` | Agendamentos de manutenção          |
| **Manutenções**  | `/maintenances` | Histórico de manutenções realizadas |

### Relações entre Recursos

- **Cliente → Veículos** (1:n) - Um cliente pode ter múltiplos veículos
- **Veículo → Manutenções** (1:n) - Um veículo tem histórico de manutenções
- **Oficina → Agendamentos** (1:n) - Uma oficina tem múltiplos agendamentos
- **Agendamento ↔ Serviços** (m:n) - Agendamentos podem incluir múltiplos serviços

---

## 🖼️ Galeria

### Interface de Backoffice

| Dashboard                              | Lista de Veículos                         |
| -------------------------------------- | ----------------------------------------- |
| ![Dashboard](doc/images/dashboard.png) | ![Veículos](doc/images/vehicles-list.png) |

| Detalhes do Cliente                         | Agendamentos                               |
| ------------------------------------------- | ------------------------------------------ |
| ![Clientes](doc/images/customer-detail.png) | ![Manutenções](doc/images/maintenance.png) |

| Serviços                                 | Mecânicos                              |
| ---------------------------------------- | -------------------------------------- |
| ![Serviços](doc/images/service-type.png) | ![Mecânicos](doc/images/mechanics.png) |

---

## 🚀 Tecnologias Utilizadas

### Backend

- **[LoopBack 4](https://loopback.io/)** - Framework Node.js para construção de APIs REST
- **[MySQL 8.0](https://www.mysql.com/)** - Sistema de Gestão de Base de Dados
- **[Node.js](https://nodejs.org/)** v18+ - Runtime JavaScript
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript

### Frontend

- **[React-Admin](https://marmelab.com/react-admin/)** - Framework para interfaces de administração
- **[React](https://react.dev/)** v18 - Biblioteca JavaScript para UI
- **[Material-UI](https://mui.com/)** - Componentes React

### DevOps

- **[Docker](https://www.docker.com/)** - Containerização
- **[Docker Compose](https://docs.docker.com/compose/)** - Orquestração multi-container
- **[Git](https://git-scm.com/)** - Controlo de versões

### Ferramentas

- **[Postman](https://www.postman.com/)** - Testes de API
- **[OpenAPI 3.0](https://swagger.io/specification/)** - Especificação da API
- **[VS Code](https://code.visualstudio.com/)** - Editor de código

---

## 📦 Instalação e Execução

### Pré-requisitos

- Docker Engine 20.10+
- Docker Compose 2.0+
- Git

### Clonar o Repositório

```bash
git clone https://github.com/inf25dw1g33/Car-Maintenance-M3.git
cd Car-Maintenance-M3
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

- **API REST:** http://localhost:3000
- **API Explorer:** http://localhost:3000/explorer
- **Backoffice:** http://localhost:3001
- **MySQL:** localhost:3306 (acesso interno)

### Credenciais Padrão

**Backoffice Admin:**

- Username: `admin`
- Password: `admin123`

**MySQL:**

- User: `root`
- Password: `rootpassword`
- Database: `carmaintenance`

---

## 📚 Documentação

A documentação completa do projeto está organizada em capítulos:

### [Capítulo 1: Apresentação do Projeto](doc/c1.md)

- Contexto e objetivos
- Equipa de desenvolvimento
- Metodologia utilizada
- Planeamento e calendarização

### [Capítulo 2: Recursos](doc/c2.md)

- Arquitetura da solução
- Modelo de dados e relações
- Endpoints da API
- Especificação OpenAPI

### [Capítulo 3: Produto](doc/c3.md)

- Implementação técnica
- Interface de backoffice
- Funcionalidades principais
- Docker e deployment

### [Capítulo 4: Apresentação](doc/c4.md)

- Demonstração do sistema
- Resultados obtidos
- Conclusões
- Trabalho futuro

---

## 📝 Collection Postman

Uma collection completa do Postman está disponível em [`postman/CarMaintenance.postman_collection.json`](postman/CarMaintenance.postman_collection.json).

**Para importar:**

1. Abrir Postman
2. File → Import
3. Selecionar o ficheiro da collection
4. Configurar environment variables se necessário

---

## 🐳 Docker Hub

As imagens Docker estão publicadas em:

- **API:** `inf25dw1g33/car-maintenance-api:latest`
- **Backoffice:** `inf25dw1g33/car-maintenance-backoffice:latest`

```bash
# Pull das imagens
docker pull inf25dw1g33/car-maintenance-api:latest
docker pull inf25dw1g33/car-maintenance-backoffice:latest
```

---

## 🤖 Utilização de Inteligência Artificial

Este projeto utilizou ferramentas de IA como assistente no desenvolvimento:

### Claude AI (Anthropic)

- **Utilização:** Auxílio na estruturação do código LoopBack 4, criação de modelos e relações
- **Prompts principais:**
  - "Como criar relações 1:n e m:n no LoopBack 4?"
  - "Gerar modelo de dados para sistema de manutenção de veículos"
  - "Configuração de datasource MySQL no LoopBack"

### GitHub Copilot

- **Utilização:** Autocompletar código TypeScript e React
- **Contribuição:** Acelerou a escrita de componentes React-Admin e controllers

A utilização destas ferramentas foi complementar ao desenvolvimento manual, servindo principalmente para:

- Acelerar tarefas repetitivas
- Sugerir boas práticas
- Debugging de erros comuns
- Documentação de código

---

## 👥 Equipa

### Grupo 33 - inf25dw1g33

| Nome              | GitHub                                               |
| ----------------- | ---------------------------------------------------- |
| [César Ramos]     | [@devCesarRamos](https://github.com/devCesarRamos)   |
| [Goncalo Cidras]  | [@devCidras](https://github.com/devCidras)           |
| [Jorge Espogeira] | [@JorgeEspogeira](https://github.com/JorgeEspogeira) |

---

**Desenvolvimento Web I** | **UMAIA** | **2025/26**
