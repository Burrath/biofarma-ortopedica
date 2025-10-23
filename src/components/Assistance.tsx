import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Ambulance, FileText, Scale, Clock, Users } from "lucide-react";

export function Assistance() {
  return (
    <section id="assistenza" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Socio Assistenza</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Servizi di assistenza professionale per garantire il miglior supporto ai nostri pazienti
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <User className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-xl">Infermiere</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Forniamo supporto di infermieri qualificati al domicilio del paziente 24 ore su 24.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Ambulance className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-xl">Ambulanze</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Ci occupiamo di trasporti in ambulanza su tutta la Sicilia con particolare riferimento alla provincia di Catania, Messina, Siracusa, Enna.
                Siamo di Giarre e serviamo tutta la provincia di Catania.
                <br /><strong>Ambulanza offerta libera.</strong>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <User className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-xl">Ricerca Badanti</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Offriamo un servizio di ricerca badanti qualificate per l'assistenza domiciliare.
                <br /><strong>Ricerca badanti gratuita.</strong>
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 rounded-lg px-6 py-4">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-primary">
              Servizi disponibili 24/7 per la tua tranquillità
            </span>
          </div>
        </div>

        {/* Sezione Patronato */}
        <div id="caf-patronato" className="mt-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">CAF/Patronato</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gestione documentale e disbrigo pratiche per i diritti del malato e dell'anziano
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Consulenza Tempestiva sui Diritti</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Forniamo a domicilio una consulenza tempestiva sui diritti del malato e ci occupiamo 
                  sia del disbrigo pratiche per l'ottenimento dei presidi a carico dell'ASP della provincia di Catania, 
                  sia per quelle relative a invalidità e accompagnamento.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Disbrigo pratiche ASP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Scale className="h-5 w-5 text-primary" />
                  <span>Invalidità e accompagnamento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Consulenza tempestiva</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    Servizi CAF
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Gestione completa delle pratiche burocratiche e documentali per garantire 
                    l'ottenimento di tutti i diritti e benefici previsti dalla legge.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Disbrigo Pratiche</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Gestione completa delle pratiche per l'ottenimento di presidi sanitari, 
                  invalidità e accompagnamento presso l'ASP.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <Scale className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl">Consulenza Legale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Supporto legale per la comprensione dei diritti del malato e dell'anziano 
                  in ambito sanitario e sociale.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Supporto Continuo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Assistenza continua per il monitoraggio delle pratiche e l'aggiornamento 
                  sui diritti e benefici disponibili.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
