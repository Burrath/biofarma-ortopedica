import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import delle immagini dei presidi
import alzaspalle from "@/assets/products/alzaspalle.jpg";
import apparecchioMagnetoterapia from "@/assets/products/apparecchio-magnetoterapia.jpg";
import astaPortaflebo from "@/assets/products/asta-portaflebo.jpg";
import astaSollevamalati from "@/assets/products/asta-sollevamalati.jpg";
import cuscinoAntidecubito from "@/assets/products/cuscino-antidecubito.jpg";
import deambulatoreAscellare from "@/assets/products/deambulatore-ascellare.jpg";
import deambulatorePieghevole from "@/assets/products/dembulatore-pieghevole.jpg";
import kinetecPrimaAdvance from "@/assets/products/kinetec.jpg";
import lettoDegenzaDueManovelle from "@/assets/products/letto-due-manovelle.jpg";
import lettoDegenzaUnaManovella from "@/assets/products/letto-1-manovella.jpg";
import lettoElettrico from "@/assets/products/letto-elettrico.jpg";
import lettoElettricoElevabile from "@/assets/products/letto-elettrico-elevabile.jpg";
import materassoAntidecubito from "@/assets/products/materasso-antidecubito.jpg";
import sediaRotellePieghevole from "@/assets/products/sedia-autospinta.jpg";
import sediaComodaAutospinta from "@/assets/products/comoda-autospinta.jpg";
import sediaComodaSenzaAutospinta from "@/assets/products/comoda-senza-autospinta.jpg";
import sollevatoreElettricoEasygo from "@/assets/products/sollevatore-universale-easygo-manuale_sollevatoredisabilimanuale.jpg";
import sollevatoreElettrico from "@/assets/products/sollevatore-elettrico.jpg";
import sollevatoreIdraulico from "@/assets/products/sollevatore-idraulico.jpg";
import spondeUniversali from "@/assets/products/sponde.jpg";
import stampelle from "@/assets/products/stampelle.jpg";
import tavoloConRuote from "@/assets/products/tavolo-con-ruote.jpg";

const products = [
  {
    image: alzaspalle,
    title: "Alzaspalle",
    description:
      "Dispositivo per facilitare il sollevamento e il posizionamento del paziente a letto, garantendo comfort e sicurezza durante le operazioni di assistenza.",
    category: "Noleggio",
  },
  {
    image: apparecchioMagnetoterapia,
    title: "Apparecchio Magnetoterapia Globus Magnum XL",
    description:
      "Apparecchio per magnetoterapia ad alta potenza, ideale per il trattamento di patologie muscolari e articolari con campi magnetici pulsati.",
    category: "Noleggio",
  },
  {
    image: astaPortaflebo,
    title: "Asta Portaflebo",
    description:
      "Supporto regolabile per flebo e sacche di infusione, dotato di ruote per facilità di spostamento e sistema di bloccaggio per sicurezza.",
    category: "Noleggio",
  },
  {
    image: astaSollevamalati,
    title: "Asta Sollevamalati",
    description:
      "Dispositivo di sollevamento per pazienti con difficoltà motorie, dotato di sistema di trazione sicuro e regolabile per diverse esigenze.",
    category: "Noleggio",
  },
  {
    image: cuscinoAntidecubito,
    title: "Cuscino Antidecubito",
    description:
      "Cuscino specializzato per prevenire la formazione di piaghe da decubito, con materiali traspiranti e distribuzione uniforme della pressione.",
    category: "Noleggio",
  },
  {
    image: deambulatoreAscellare,
    title: "Deambulatore Ascellare",
    description:
      "Supporto per la deambulazione con appoggio ascellare, regolabile in altezza e dotato di maniglie ergonomiche per massimo comfort.",
    category: "Noleggio",
  },
  {
    image: deambulatorePieghevole,
    title: "Deambulatore Pieghevole",
    description:
      "Deambulatore leggero e pieghevole, ideale per il trasporto e lo stoccaggio, con sistema di chiusura rapida e maniglie regolabili.",
    category: "Noleggio",
  },
  {
    image: kinetecPrimaAdvance,
    title: "Kinetec Prima Advance",
    description:
      "Dispositivo per la mobilizzazione passiva delle articolazioni, particolarmente indicato per la riabilitazione post-chirurgica e il recupero funzionale.",
    category: "Noleggio",
  },
  {
    image: lettoDegenzaDueManovelle,
    title: "Letto Degenza Due Manovelle",
    description:
      "Letto ospedaliero con doppia manovella per regolazione indipendente di alzatesta e alzagambe, ideale per pazienti con esigenze specifiche.",
    category: "Noleggio",
  },
  {
    image: lettoDegenzaUnaManovella,
    title: "Letto Degenza Una Manovella",
    description:
      "Con pannelli molto robusti facilmente smontabili per pulizia e sanificazione e Alzatesta regolabile con azionamento a manovella.",
    category: "Noleggio",
  },
  {
    image: lettoElettrico,
    title: "Letto Elettrico",
    description:
      "Adatto ad alloggiare qualsiasi tipo di materasso. Alzatesta e alzagambe regolabili indipendentemente con movimento tramite due attuatori elettrici.",
    category: "Noleggio",
  },
  {
    image: lettoElettricoElevabile,
    title: "Letto Elettrico Elevabile",
    description:
      "Letto elettrico con sistema di elevazione completo, permette di sollevare l'intero letto per facilitare le operazioni di assistenza.",
    category: "Noleggio",
  },
  {
    image: materassoAntidecubito,
    title: "Materasso Antidecubito",
    description:
      "Previene la formazione di piaghe da decubito che si creano a causa della pressione del corpo esercitata, per lunghi periodi, sul letto.",
    category: "Noleggio",
  },
  {
    image: sediaRotellePieghevole,
    title: "Sedia a Rotelle Pieghevole Autospinta",
    description:
      "Carrozzina da autospinta con telaio pieghevole stabilizzante. Predisposizione per la sostituzione delle ruote posteriori, trasformazione autospinta/transito.",
    category: "Noleggio",
  },
  {
    image: sediaComodaAutospinta,
    title: "Sedia Comoda con Autospinta",
    description:
      "Sedia a rotelle comoda e spaziosa con sistema di autospinta, ideale per pazienti che necessitano di maggiore comfort e autonomia.",
    category: "Noleggio",
  },
  {
    image: sediaComodaSenzaAutospinta,
    title: "Sedia Comoda senza Autospinta",
    description:
      "Sedia a rotelle comoda per trasporto assistito, con sedile ampio e confortevole, ideale per pazienti che necessitano di assistenza continua.",
    category: "Noleggio",
  },
  {
    image: sollevatoreElettricoEasygo,
    title: "Sollevatore Elettrico EasyGO",
    description:
      "Sollevatore elettrico di ultima generazione, facile da utilizzare e manovrare, ideale per il trasferimento sicuro di pazienti con mobilità ridotta.",
    category: "Noleggio",
  },
  {
    image: sollevatoreElettrico,
    title: "Sollevatore Elettrico",
    description:
      "Destinato al sollevamento ed al trasferimento di persone con difficoltà motorie. Design e qualità garantiscono comfort, sicurezza ed affidabilità.",
    category: "Noleggio",
  },
  {
    image: sollevatoreIdraulico,
    title: "Sollevatore Idraulico",
    description:
      "Con base regolabile in larghezza (da 62 cm a 110 cm) che garantisce stabilità e facile accesso in ambienti con spazi ristretti.",
    category: "Noleggio",
  },
  {
    image: spondeUniversali,
    title: "Sponde Universali",
    description:
      "Sponde in acciaio cromato. Regolabili in larghezza e lunghezza, adattabili a tutti i letti a rete fissa senza regolazione (senza alzatesta e alzagambe).",
    category: "Noleggio",
  },
  {
    image: stampelle,
    title: "Stampelle",
    description:
      "Supporti per la deambulazione regolabili in altezza, con impugnature ergonomiche e punte antiscivolo per massima sicurezza e comfort.",
    category: "Noleggio",
  },
  {
    image: tavoloConRuote,
    title: "Tavolo con Ruote",
    description:
      "Tavolo mobile regolabile in altezza, ideale per pasti, attività ricreative e terapie, dotato di ruote bloccabili per sicurezza.",
    category: "Noleggio",
  },
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
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contattandoci, troviamo la giusta formula di noleggio per le tue
              esigenze specifiche. Il nostro team di esperti ti consiglierà
              quali prodotti sono più adatti alla tua situazione, garantendoti
              la massima convenienza e la migliore qualità del servizio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
