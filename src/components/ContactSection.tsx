import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "phchedidk@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 (11) 97364-6726",
      href: "https://wa.me/5511973646726"
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
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Contato
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Estou sempre aberto para discutir novas oportunidades e desafios interessantes.
          </p>
        </div>

      <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto items-start justify-center">
  
          {/* Coluna de Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estou disponível para projetos freelance, oportunidades de trabalho em tempo integral, 
                consultorias técnicas ou apenas para trocar ideias sobre tecnologia.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-lg p-6 transition-shadow">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;