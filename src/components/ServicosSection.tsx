import { motion } from "framer-motion";
import { Truck, AlertCircle, Wrench, Zap, Lock } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Reboque 24h",
    desc: "Serviço de reboque completo para qualquer tipo de veículo, disponível 24 horas por dia e noite em todo o Distrito Federal.",
  },
  {
    icon: AlertCircle,
    title: "Socorro para Panes Elétricas",
    desc: "Atendimento rápido para problemas elétricos no veículo com profissionais especializados e equipamento adequado.",
  },
  {
    icon: Wrench,
    title: "Troca de Pneus",
    desc: "Troca de pneus com rapidez e segurança na sua localização atual, sem necessidade de deslocamento.",
  },
  {
    icon: Truck,
    title: "Transporte de Veículos Leves",
    desc: "Transporte seguro de veículos leves para mecânicas, estacionamentos ou destinos específicos conforme necessário.",
  },
  {
    icon: Zap,
    title: "Recarga de Bateria",
    desc: "Serviço de recarga de bateria com equipamento profissional para colocar seu veículo em funcionamento novamente.",
  },
  {
    icon: Lock,
    title: "Abertura de Veículos",
    desc: "Abertura segura de veículos sem danificar a estrutura ou o sistema de segurança da porta ou vidro.",
  },
];

const ServicosSection = () => (
  <section id="servicos" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Serviços de reboque e socorro veicular 24h com profissionais treinados e preço justo.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover work-accent relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative">
              <service.icon className="w-6 h-6 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
