import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Truck } from "lucide-react";
import heroImage from "@/assets/hero.png";

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Noleggio e vendita di{" "}
                <span className="text-primary">presìdi sanitari</span>{" "}
                ed ortopedici
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Quando conviene noleggiare e quando acquistare? 
                Scopri tutti i vantaggi dei nostri servizi professionali.
              </p>
              <p className="text-sm text-primary font-medium">
                📍 Siamo di Giarre e lavoriamo in tutta la provincia di Catania
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <a href="tel:+393484191693">
                  Chiama Ora
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/393484191693">
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Noleggio e Vendita</h3>
                <p className="text-xs text-muted-foreground">A norma di legge</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Consegna</h3>
                <p className="text-xs text-muted-foreground">In 24 ore</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Trasporto</h3>
                <p className="text-xs text-muted-foreground">Gratuito</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Biofarma Ortopedica Presidi Sanitari" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
