import { MapPin } from "lucide-react";
import { COMPANY } from "@/lib/siteConfig";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/luizfalcirolli/CLIENTE_LUIZ_ELETRICISTA_LOGO.png"
              alt="Logo Luiz Falcirolli Eletricista"
              className="w-14 h-14 rounded-full object-contain bg-white p-1"
            />
            <h3 className="text-xl font-bold">{COMPANY.name}</h3>
          </div>
          <p className="text-primary-foreground/70 mb-4">
            Eletricista especializado em instalações e manutenções elétricas residenciais e comerciais com foco em segurança, qualidade técnica e satisfação do cliente.
          </p>
          <p className="text-primary-foreground/80">Responsável: {COMPANY.owner}</p>
          <p className="text-primary-foreground/80">WhatsApp: {COMPANY.phone}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Localização e Atendimento
          </h3>
          <ul className="text-primary-foreground/70 space-y-2">
            <li>• {COMPANY.location}</li>
            <li>• Guarulhos - SP</li>
            <li>• Grande São Paulo</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
        <p>&copy; {new Date().getFullYear()} {COMPANY.shortName}. Todos os direitos reservados.</p>
        <p className="mt-2">Site desenvolvido por LSB Business Intelligence</p>
      </div>
    </div>
  </footer>
);

export default Footer;