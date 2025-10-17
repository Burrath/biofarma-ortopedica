import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, CreditCard, Truck, Clock, Wrench, DollarSign } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Sanificazione a norma di legge",
    description: "Gli ausili sono sottoposti a procedure di sanificazione a norma di legge e con detergenti certificati, fondamentali per la sicurezza dell'utente e dei nostri operatori."
  },
  {
    icon: FileText,
    title: "Disbrigo pratiche a nostra cura",
    description: "Le nostre prestazioni liberano sia dai fastidiosi percorsi burocratici per l'ottenimento dei presidi a carico dell'ASP CT, sia dalle pratiche relative a invalidità e accompagnamento."
  },
  {
    icon: CreditCard,
    title: "Nessuna Cauzione",
    description: "Chi sceglie la nostra formula \"noleggio\" riceverà l'ausilio o l'apparecchiatura di cui ha bisogno senza dover versare alcuna cauzione."
  },
  {
    icon: Truck,
    title: "Consegna e ritiro gratuito a domicilio",
    description: "Ci occupiamo di consegnare e ritirare a domicilio gli ausili e ogni apparecchiatura, senza costi a carico del paziente, provvedendo anche al montaggio e a spiegare i modi di utilizzo."
  },
  {
    icon: Clock,
    title: "Consegna in 24 ore a domicilio",
    description: "I nostri servizi di trasporto e di consegna sono così efficienti e rapidi, che garantiamo la consegna a domicilio entro e non oltre le 24 ore."
  },
  {
    icon: Wrench,
    title: "Manutenzione e sanificazione gratis",
    description: "Ogni tipo di manutenzione degli ausili e delle apparecchiature, così come l'eventuale igienizzazione, sono fornite in via del tutto gratuita."
  },
  {
    icon: DollarSign,
    title: "Prezzi convenienti",
    description: "Sia al servizio di noleggio, sia ai prodotti in vendita, applichiamo tariffe e prezzi concorrenziali, che si tramutano in un reale vantaggio per l'utente."
  }
];

export function Advantages() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Perché Scegliere Biofarma Ortopedica?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I nostri vantaggi che ci rendono la scelta migliore per i tuoi bisogni sanitari
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {advantage.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg p-6">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-medium">7 vantaggi esclusivi</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-medium">Servizio 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-medium">Garanzia di qualità</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
