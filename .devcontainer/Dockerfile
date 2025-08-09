FROM node:20

# Config ambiente
RUN apt-get update && apt-get install -y zsh curl git && rm -rf /var/lib/apt/lists/*
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
SHELL ["/bin/zsh", "-c"]

# Ajusta o diretório de trabalho
WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["zsh"]