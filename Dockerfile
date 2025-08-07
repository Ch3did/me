FROM node:18

# 1. Set working directory
WORKDIR /app

# 2. Copy ALL files first — para garantir que não falta nada
COPY . .

# 3. Instala dependências
RUN npm install

# 4. Expõe porta do Vite
EXPOSE 8080

CMD ["npm", "run", "dev"]
