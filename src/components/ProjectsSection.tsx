import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Financial Cli",
      description: "Este projeto é uma releitura do Financial-Manager, originalmente feito em Python, agora reescrito em Go, com arquitetura baseada em DDD",
      technologies: ["Golang", "Gorm", "Sqlite3"],
      status: "v1",
      url: "https://github.com/Ch3did/Financial-cli"
    },
    {
      title: "Monetary Maid",
      description: "Interface de linha de comando (CLI) para controle financeiro simplificado, com integração ao Nubank e seleção de categorias. A aplicação recebe um arquivo OFX como input, realiza ajustes nos dados e os categoriza automaticamente.",
      technologies: ["Python", "Sqlmodel", "Click", "Sqlite3"],
      status: "v1",
      url: "https://github.com/Ch3did/Financial-Manager"
    },
    {
      title: "New York Times Article Crawler",
      description: "Raspando o site do New York Times e extraindo dados dos artigos. A aplicação utiliza Selenium e um WebDriver para interagir com o site e recuperar informações como título, descrição, data, imagem e URL da imagem. A aplicação também oferece filtros para os dados com base em mês, palavras específicas e seções do NYT.",
      technologies: ["Python3", "Selenium", "Pydantic", "Requests"],
      status: "Complete",
      url: "https://github.com/Ch3did/New-York-Times-Article-Crawler"
    },
    {
      title: "Developer Allocation-API",
      description: "A Developer Allocation API é uma aplicação escrita em Django, projetada para gerenciar e realizar a alocação de desenvolvedores de software em projetos. O principal objetivo da API é assegurar que os gerentes de projeto possam alocar desenvolvedores de forma eficiente, levando em conta suas especializações e as necessidades dos projetos.",
      technologies: ["Python3", "Django", "DRF", "Postgres", "Pytest", "Docker"],
      status: "Complete",
      url: "https://github.com/Ch3did/Developer-Allocation-API/"
    },
    {
      title: "Me (Eu)",
      description: "Este Portifólio que está vendo...",
      technologies: ["Node", "React", "Vite", "Docker"],
      status: "Complete",
      url: "https://github.com/Ch3did/me"
    },
    {
      title: "Install",
      description: "Shell scritp para instalar ferramentas e setando configurações para novas máquinas Ubuntu.",
      technologies: ["Sh"],
      status: "Complete",
      url: "https://github.com/Ch3did/Install"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, mostrando a aplicação prática das minhas habilidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">{/* Você pode personalizar categorias se quiser */}
                    {project.technologies[0] /* Exemplo simples: primeira tech como categoria */}
                  </Badge>
                  <Badge variant="outline" className="text-primary border-primary">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
