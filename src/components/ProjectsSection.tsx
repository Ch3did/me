import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema de E-commerce Distribuído",
      description: "Plataforma completa de e-commerce construída com microserviços em Golang e frontend em React. Inclui processamento de pagamentos, gestão de inventário e análise de dados em tempo real.",
      technologies: ["Golang", "React", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      category: "Full-Stack",
      status: "Concluído",
      color: "go-cyan"
    },
    {
      title: "Pipeline de Machine Learning",
      description: "Sistema automatizado de ML para análise preditiva de vendas usando Python. Inclui coleta de dados, feature engineering, treinamento de modelos e deploy automatizado.",
      technologies: ["Python", "Pandas", "Scikit-learn", "FastAPI", "MLflow", "AWS"],
      category: "Data Science",
      status: "Em Produção",
      color: "python-blue"
    },
    {
      title: "API Gateway de Alta Performance",
      description: "Gateway de API construído em Golang capaz de lidar com 100k+ requisições por segundo. Inclui rate limiting, autenticação JWT e monitoramento em tempo real.",
      technologies: ["Golang", "Redis", "Prometheus", "Grafana", "Docker"],
      category: "Backend",
      status: "Open Source",
      color: "tech-purple"
    },
    {
      title: "Dashboard de Analytics",
      description: "Dashboard interativo para visualização de métricas de negócio em tempo real. Construído com Python backend e React frontend, processando milhões de eventos.",
      technologies: ["Python", "React", "InfluxDB", "WebSocket", "Chart.js"],
      category: "Full-Stack",
      status: "Concluído",
      color: "accent"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
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
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`border-${project.color} text-${project.color}`}
                  >
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
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            Ver Mais no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;