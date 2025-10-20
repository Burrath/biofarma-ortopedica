import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, RotateCcw, Wrench, Truck } from "lucide-react";

export function Services() {
  return (
    <section id="servizi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">I Nostri Servizi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offriamo servizi completi per il noleggio e la vendita di presidi sanitari ed ortopedici
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Vendita</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Acquista i presidi sanitari di cui hai bisogno con prezzi competitivi e qualità garantita.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <RotateCcw className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Noleggio</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Noleggia a tariffe convenienti con consegna gratuita e sanificazione inclusa.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Manutenzione</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Manutenzione e sanificazione gratuita per tutti i nostri presidi in noleggio.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Consegna</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Consegna e ritiro gratuiti a domicilio in tutta la Sicilia entro 24 ore.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="group" asChild>
            <a href="#contatti">
              Contattaci
              <RotateCcw className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
