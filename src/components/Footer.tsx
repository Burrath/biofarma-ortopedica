import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary"></div>
              <div>
                <h3 className="text-xl font-bold">BioFarma</h3>
                <p className="text-sm text-gray-400">Ortopedica</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Leader nel noleggio e vendita di presidi sanitari ed ortopedici in Sicilia. 
              Qualità, professionalità e servizio 24/7.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">095 93 17 96</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@biofarmaortopedica.it</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm">
                  <p>Viale Don Minzoni, 12</p>
                  <p>95014 - Giarre (CT)</p>
                  <p>P.IVA 03972030872</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Servizi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servizi" className="text-gray-300 hover:text-primary transition-colors">Noleggio Presidi</a></li>
              <li><a href="#servizi" className="text-gray-300 hover:text-primary transition-colors">Vendita Attrezzature</a></li>
              <li><a href="#assistenza" className="text-gray-300 hover:text-primary transition-colors">Assistenza Infermieristica</a></li>
              <li><a href="#assistenza" className="text-gray-300 hover:text-primary transition-colors">Trasporti Ambulanza</a></li>
              <li><a href="#assistenza" className="text-gray-300 hover:text-primary transition-colors">Fisioterapia</a></li>
              <li><a href="#prodotti" className="text-gray-300 hover:text-primary transition-colors">Manutenzione</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Orari</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Lun - Ven</span>
                <span>8:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sabato</span>
                <span>8:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Domenica</span>
                <span>Chiuso</span>
              </div>
            </div>
            <div className="pt-2">
              <div className="flex items-center space-x-2 text-primary">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Emergenze 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 Biofarma s.r.l. Tutti i diritti riservati.</p>
              <p className="mt-1">Sito web realizzato dall'ufficio marketing e comunicazione interno</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Termini di Servizio</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
