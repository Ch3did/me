FROM node:20

# Cria diretório de trabalho
WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia o resto da aplicação
COPY . .

# Exponha a porta do Vite
EXPOSE 5173

# Comando padrão
CMD ["npm", "run", "dev", "--", "--host"]
