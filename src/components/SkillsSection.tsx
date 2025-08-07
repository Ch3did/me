import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skills = [
    {
      category: "Python",
      icon: "🐍",
      level: 95,
      technologies: ["Django", "FastAPI", "Flask", "Pandas", "NumPy", "SQLAlchemy", "Celery", "Pytest"]
    },
    {
      category: "Golang",
      icon: "🔷",
      level: 90,
      technologies: ["Gin", "Echo", "GORM", "Gorilla", "Testify", "Cobra", "Viper", "gRPC"]
    },
    {
      category: "Databases",
      icon: "🗄️",
      level: 85,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "InfluxDB", "Elasticsearch"]
    },
    {
      category: "DevOps & Cloud",
      icon: "☁️",
      level: 80,
      technologies: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "Jenkins", "GitLab CI"]
    },
    {
      category: "Frontend",
      icon: "🎨",
      level: 75,
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Ferramentas",
      icon: "🛠️",
      level: 90,
      technologies: ["Git", "Linux", "VS Code", "Postman", "Jira", "Slack", "Notion"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Habilidades Técnicas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meu <span className="gradient-text">Arsenal</span> Tecnológico
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para entregar soluções de alta qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <CardTitle className="text-xl">{skill.category}</CardTitle>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Nível de Proficiência</span>
                    <span className="font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;