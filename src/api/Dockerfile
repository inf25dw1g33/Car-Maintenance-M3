FROM node:18-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Debug: Ver o que foi copiado
RUN echo "=== Arquivos copiados ===" && ls -la
RUN echo "=== Pasta src ===" && ls -la src/ || echo "src/ não existe"
RUN echo "=== tsconfig.json ===" && cat tsconfig.json || echo "tsconfig.json não existe"

# Build
RUN npm run build

# Debug: Ver o resultado do build
RUN echo "=== Após build ===" && ls -la
RUN echo "=== Conteúdo de dist ===" && ls -la dist/ || echo "dist/ não foi criado!"
RUN echo "=== Arquivos em dist ===" && find dist -type f || echo "dist vazio"

# Verificar index.js
RUN test -f dist/index.js && echo "✓ dist/index.js OK!" || (echo "✗ ERRO: dist/index.js não existe" && exit 1)

# Remover devDependencies
RUN npm prune --production

EXPOSE 3000

CMD ["node", "dist/index.js"]