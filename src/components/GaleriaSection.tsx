import { motion } from "framer-motion";

const photos = [
  { src: "/images/jn-guincho/JNGUINCHOFOTOSITE01.jpeg", alt: "Serviço de reboque e socorro veicular JN Guincho" },
  { src: "/images/jn-guincho/JNGUINCHOFOTOSITE02.jpeg", alt: "Reboque profissional da JN Guincho em ação" },
  { src: "/images/jn-guincho/JNGUINCHOFOTOSITE03.jpeg", alt: "Socorro veicular 24h JN Guincho" },
  { src: "/images/jn-guincho/JNGUINCHOFOTOSITE04.jpeg", alt: "Atendimento de emergência da JN Guincho" },
  { src: "/images/jn-guincho/JNGUINCHOFOTOSITE05.jpeg", alt: "Equipe profissional JN Guincho" },
  { src: "/images/jn-guincho/JNGUINCHOFOTOSITE06.jpeg", alt: "Transporte seguro com JN Guincho" },
  { src: "/images/jn-guincho/JNGUINCHOFOTOSITE07.jpeg", alt: "Reboque com qualidade JN Guincho" },
  { src: "/images/jn-guincho/JNGUINCHOFOTOSITE08.jpeg", alt: "Socorro rápido JN Guincho" },
  { src: "/images/jn-guincho/JNGUINCHOFOTOSITE09.jpeg", alt: "Profissionalismo JN Guincho" },
  { src: "/images/jn-guincho/JNGUINCHOFOTOSITE010.jpeg", alt: "Segurança no atendimento JN Guincho" },
];

const GaleriaSection = () => (
  <section id="obras" className="py-20 md:py-28 bg-secondary/40 scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trabalhos e Atendimentos <span className="text-gradient">da JN Guincho</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Fotos reais de serviços de reboque e socorro veicular executados com profissionalismo e segurança.
        </p>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
            className="mb-4 overflow-hidden rounded-2xl bg-card border border-border shadow-sm break-inside-avoid"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default GaleriaSection;