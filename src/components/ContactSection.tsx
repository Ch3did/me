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
      value: "contato@engineer.dev",
      href: "mailto:contato@engineer.dev"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 (11) 99999-9999",
      href: "https://wa.me/5511999999999"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: "#"
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
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
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
              <h4 className="font-semibold mb-2">⚡ Resposta Rápida</h4>
              <p className="text-sm text-muted-foreground">
                Costumo responder em até 24 horas. Para projetos urgentes, 
                me chame no WhatsApp para uma resposta mais rápida.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entrarei em contato em breve
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Assunto</label>
                <Input placeholder="Assunto da mensagem" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <Textarea 
                  placeholder="Conte-me sobre seu projeto ou como posso ajudá-lo..."
                  rows={5}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;