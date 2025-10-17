import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, User, Shield } from "lucide-react";

const products = [
  {
    icon: Bed,
    title: "Materasso Antidecubito",
    description: "Previene la formazione di piaghe da decubito che si creano a causa della pressione del corpo esercitata, per lunghi periodi, sul letto.",
    category: "Noleggio"
  },
  {
    icon: Bed,
    title: "Letto Elettrico",
    description: "Adatto ad alloggiare qualsiasi tipo di materasso. Alzatesta e alzagambe regolabili indipendentemente con movimento tramite due attuatori elettrici.",
    category: "Noleggio"
  },
  {
    icon: Bed,
    title: "Letto Degenza Una Manovella",
    description: "Con pannelli molto robusti facilmente smontabili per pulizia e sanificazione e Alzatesta regolabile con azionamento a manovella.",
    category: "Noleggio"
  },
  {
    icon: Bed,
    title: "Letto Degenza Due Manovelle",
    description: "Adatto ad alloggiare qualsiasi tipo di materasso. Alzatesta e alzagambe regolabili indipendentemente con manovelle ripiegabili a scomparsa.",
    category: "Noleggio"
  },
  {
    icon: User,
    title: "Sollevatore Elettrico",
    description: "Destinato al sollevamento ed al trasferimento di persone con difficoltà motorie. Design e qualità garantiscono comfort, sicurezza ed affidabilità.",
    category: "Noleggio"
  },
  {
    icon: User,
    title: "Sollevatore Idraulico",
    description: "Con base regolabile in larghezza (da 62 cm a 110 cm) che garantisce stabilità e facile accesso in ambienti con spazi ristretti.",
    category: "Noleggio"
  },
  {
    icon: User,
    title: "Sedia a Rotelle",
    description: "Carrozzina da autospinta con telaio pieghevole stabilizzante. Predisposizione per la sostituzione delle ruote posteriori, trasformazione autospinta/transito.",
    category: "Noleggio"
  },
  {
    icon: Shield,
    title: "Sponde Universali",
    description: "Sponde in acciaio cromato. Regolabili in larghezza e lunghezza, adattabili a tutti i letti a rete fissa senza regolazione (senza alzatesta e alzagambe).",
    category: "Noleggio"
  }
];

export function Products() {
  return (
    <section id="prodotti" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">I Nostri Prodotti</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Presidi sanitari ed ortopedici di alta qualità per ogni esigenza
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {product.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Scopri di più
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Vedi tutti i prodotti
          </Button>
        </div>
      </div>
    </section>
  );
}
