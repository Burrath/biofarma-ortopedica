import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Truck, Shield, Wrench } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Tariffe Chiare e Convenienti</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Noleggiamo a bassissime tariffe presidi sanitari ed ortopedici
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Materasso Antidecubito */}
          <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-4 py-1">
                <Star className="h-3 w-3 mr-1" />
                Più Richiesto
              </Badge>
            </div>
            <CardHeader className="text-center pt-6">
              <CardTitle className="text-xl">Materasso Antidecubito</CardTitle>
              <CardDescription>Prevenzione piaghe da decubito</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold text-primary">€ 1,50</span>
                <span className="text-muted-foreground"> + IVA al giorno</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Consegna gratuita
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Sanificazione inclusa
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Disbrigo pratiche
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Manutenzione gratuita
                </li>
              </ul>
              <Button className="w-full">
                Noleggia Ora
              </Button>
            </CardContent>
          </Card>

          {/* Lettino Ortopedico */}
          <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Lettino Ortopedico</CardTitle>
              <CardDescription>Massima comodità e funzionalità</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold text-primary">€ 2,00</span>
                <span className="text-muted-foreground"> + IVA al giorno</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Consegna gratuita
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Sanificazione inclusa
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Disbrigo pratiche
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Montaggio incluso
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pacchetto Completo */}
          <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge variant="secondary" className="px-4 py-1">
                Convenienza
              </Badge>
            </div>
            <CardHeader className="text-center pt-6">
              <CardTitle className="text-xl">Pacchetto Completo</CardTitle>
              <CardDescription>Materasso + Lettino + Accessori</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold text-primary">€ 3,00</span>
                <span className="text-muted-foreground"> + IVA al giorno</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Tutti i servizi inclusi
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Risparmio garantito
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Assistenza 24/7
                </li>
                <li className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Nessuna cauzione
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Questi sono alcuni esempi di quanto può essere conveniente il noleggio. 
              Ogni situazione è unica e merita una soluzione personalizzata. 
              Contattaci per una valutazione gratuita e scopri come possiamo ottimizzare 
              i costi per le tue specifiche esigenze, garantendoti sempre la massima convenienza.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="font-medium">Consegna in 24 ore</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">Sanificazione certificata</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-5 w-5 text-primary" />
                <span className="font-medium">Manutenzione gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
