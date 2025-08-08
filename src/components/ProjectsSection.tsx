import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import pt  from "../../locales/pt"
import en  from "../../locales/en"

type Props = {
  language: "pt" | "en";
};

const ProjectsSection = ({ language }: Props) => {
  const texts = language === "pt" ? pt : en;
  const projects = Object.values(texts.reffs);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">{texts.projects.tab_name}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {texts.projects.title_begin} <span className="gradient-text">{texts.projects.title_end}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {texts.projects.intro}
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
