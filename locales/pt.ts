const pt = {
  language: "Português",
  mail: "phchedidk@gmail.com",
  hero:{
    begin: "Desenvolvedor com ênfase em",
    end: " Criando soluções confiáveis e de alta performance.",
    button: {
      contact: "Entre em Contato",
      download: "Baixar CV"
    },
  },
  contact: {
    tab_name: "Contato",
    local: "Localização",
    title_begin: "Vamos",
    title_end: "Conversa?",
    intro: "Tem um projeto em mente? Estou sempre aberto para discutir novas oportunidades e desafios interessantes.",
  },
  about: {
    tab_name: "Sobre Mim",
    intro_begin: "Transformando",
    intro_highlight:  "ideas",
    intro_end: "em Código",
    head: "Olá, meu nome é Pedro Henrique, também conhecido como Chedid.",
    body: `Sou um desenvolvedor backend autodidata, com grande interesse por
          tecnologia e constante busca por aprendizado. Tenho experiência 
          sólida com Python e Golang, atuando no desenvolvimento de APIs, 
          aplicações web, automações, integração com serviços externos, além
          de processos de tratamento e organização de dados (ETL). 
          Possuo também conhecimentos complementares em infraestrutura, o que me 
          permite compreender e contribuir com o ciclo completo das aplicações.
          Já utilizei ferramentas como o Docker, para facilitar a criação de
          ambientes portáveis e reprodutíveis, e o Selenium, para automações
          web complexas.`,
    footer: ` Acredito que código limpo, testes abrangentes e documentação clara 
          são fundamentais para o sucesso de qualquer projeto. Meu perfil é 
          focado em resolver problemas de forma eficiente e estruturada, com
          atenção à qualidade do código, à escalabilidade e à clareza das 
          soluções desenvolvidas.`
  },
  projects: {
    tab_name: "Projetos",
    title_begin: "Projetos em ",
    title_end: "Destaque",
    intro: "Alguns dos projetos que desenvolvi, mostrando a aplicação prática das minhas habilidades"
  },
  reffs:{
      "project1": {
        "title": "Financial Cli",
        "description": "Este projeto é uma releitura do Monetary Maid, originalmente feito em Python, agora reescrito em Go, com arquitetura baseada em DDD",
        "technologies": ["Golang", "Gorm", "Sqlite3"],
        "status": "v1",
        "url": "https://github.com/Ch3did/Financial-cli"
      },
      "project2": {
        "title": "Monetary Maid",
        "description": "Interface de linha de comando (CLI) para controle financeiro simplificado, com integração ao Nubank e seleção de categorias. A aplicação recebe um arquivo OFX como input, realiza ajustes nos dados e os categoriza automaticamente.",
        "technologies": ["Python", "Sqlmodel", "Click", "Sqlite3"],
        "status": "v1",
        "url": "https://github.com/Ch3did/Financial-Manager"
      },
      "project3": {
        "title": "New York Times Article Crawler",
        "description": "Raspando o site do New York Times e extraindo dados dos artigos. A aplicação utiliza Selenium e um WebDriver para interagir com o site e recuperar informações como título, descrição, data, imagem e URL da imagem. A aplicação também oferece filtros para os dados com base em mês, palavras específicas e seções do NYT.",
        "technologies": ["Python3", "Selenium", "Pydantic", "Requests"],
        "status": "Complete",
        "url": "https://github.com/Ch3did/New-York-Times-Article-Crawler"
      },
      "project4": {
        "title": "Developer Allocation-API",
        "description": "A Developer Allocation API é uma aplicação escrita em Django, projetada para gerenciar e realizar a alocação de desenvolvedores de software em projetos. O principal objetivo da API é assegurar que os gerentes de projeto possam alocar desenvolvedores de forma eficiente, levando em conta suas especializações e as necessidades dos projetos.",
        "technologies": ["Python3", "Django", "DRF", "Postgres", "Pytest", "Docker"],
        "status": "Complete",
        "url": "https://github.com/Ch3did/Developer-Allocation-API/"
      },
      "project5": {
        "title": "Me (Eu)",
        "description": "Este Portifólio que está vendo...",
        "technologies": ["Node", "React", "Vite", "Docker"],
        "status": "Complete",
        "url": "https://github.com/Ch3did/me"
      },
      "project6": {
        "title": "Install",
        "description": "Shell scritp para instalar ferramentas e setando configurações para novas máquinas Ubuntu.",
        "technologies": ["Sh"],
        "status": "Complete",
        "url": "https://github.com/Ch3did/Install"
      }
    }
  
};

export default pt;