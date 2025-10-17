import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contatti" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Contattaci</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hai bisogno di un ausilio? Compila il form e sarai ricontattato entro un'ora
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Richiedi un Preventivo</CardTitle>
              <CardDescription>
                Inserisci i tuoi dati, sarai ricontattato entro un'ora
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome *</Label>
                  <Input id="nome" placeholder="Il tuo nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cognome">Cognome *</Label>
                  <Input id="cognome" placeholder="Il tuo cognome" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="la-tua-email@esempio.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono">Telefono *</Label>
                <Input id="telefono" placeholder="333 123 4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="servizio">Servizio di interesse</Label>
                <Input id="servizio" placeholder="Es. Materasso antidecubito" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="messaggio">Messaggio</Label>
                <Textarea 
                  id="messaggio" 
                  placeholder="Descrivi le tue esigenze..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="text-sm leading-relaxed">
                  Acconsento al trattamento dei dati personali per essere ricontattato per avere maggiori informazioni sul noleggio in questione. (*)
                </Label>
              </div>

              <Button size="lg" className="w-full group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Invia Richiesta
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  La Nostra Sede
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Biofarma s.r.l.</p>
                  <p>Viale Don Minzoni, 12</p>
                  <p>95014 - Giarre (CT)</p>
                  <p>P.IVA 03972030872</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  Contatti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">095 93 17 96</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">info@biofarmaortopedica.it</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Orari di Apertura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lunedì - Venerdì</span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato</span>
                    <span className="font-medium">8:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span className="font-medium">Chiuso</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Servizio di Emergenza</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Per emergenze sanitarie, il nostro servizio è disponibile 24 ore su 24.
              </p>
              <Button variant="outline" size="sm">
                Chiama Ora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
