import { motion } from "framer-motion";
import { Zap, Settings, Lightbulb, ShieldAlert, AlertTriangle, Plug } from "lucide-react";

const services = [
  {
    icon: Plug,
    title: "Instalações e Trocas",
    desc: "Chuveiros, torneiras elétricas, ventiladores de teto, tomadas e interruptores instalados com segurança e precisão.",
  },
  {
    icon: Settings,
    title: "Quadro de Força e Disjuntores",
    desc: "Manutenção, troca de disjuntores que caem e organização de painéis elétricos para máxima eficiência.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação",
    desc: "Instalação de lustres, luminárias, fitas LED e sensores de presença para valorizar seu ambiente.",
  },
  {
    icon: ShieldAlert,
    title: "Manutenção Preventiva",
    desc: "Revisão completa da fiação para evitar curtos-circuitos e reduzir o consumo de energia elétrica.",
  },
  {
    icon: AlertTriangle,
    title: "Atendimento de Urgência",
    desc: "Identificação e conserto de quedas de energia e cheiro de queimado com rapidez e segurança.",
  },
  {
    icon: Zap,
    title: "Serviços Gerais Elétricos",
    desc: "Infraestrutura elétrica para residências e comércios, passagem de cabos e adequação de instalações.",
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
          Soluções elétricas completas para sua residência ou comércio com segurança e qualidade técnica.
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