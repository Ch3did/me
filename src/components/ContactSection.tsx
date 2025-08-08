import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "phchedidk@gmail.com",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Badge variant="outline" className="mb-4">
            Contato
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tem um projeto em mente? Estou sempre aberto para discutir novas oportunidades e desafios interessantes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg p-4 w-64 transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-md flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{info.label}</h4>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
