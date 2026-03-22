import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/siteConfig";

const PHONE_URL = `tel:+55${PHONE_NUMBER}`;

const reviewImages = [
  { src: "/images/jn-guincho/JNGUINCHOAVALIACAO01.jpg", alt: "Depoimento real de cliente - avaliacao 1" },
  { src: "/images/jn-guincho/JNGUINCHOAVALIACAO02.jpg", alt: "Depoimento real de cliente - avaliacao 2" },
  { src: "/images/jn-guincho/JNGUINCHOAVALIACAO03.jpg", alt: "Depoimento real de cliente - avaliacao 3" },
  { src: "/images/jn-guincho/JNGUINCHOAVALIACAO04.jpg", alt: "Depoimento real de cliente - avaliacao 4" },
  { src: "/images/jn-guincho/JNGUINCHOAVALIACAO05.jpg", alt: "Depoimento real de cliente - avaliacao 5" },
  { src: "/images/jn-guincho/JNGUINCHOAVALIACAO06.jpg", alt: "Depoimento real de cliente - avaliacao 6" },
];

const TestimonialsSection = () => (
  <section id="avaliacoes" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Depoimentos de <span className="text-gradient">Clientes Reais</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Clientes satisfeitos com o atendimento 24h, profissionalismo e preco justo da JN Guincho.
        </p>
        <div className="mt-5 flex flex-wrap justify-center items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-2 font-semibold text-foreground">
            <span className="text-yellow-500">★★★★★</span>
            Atendimento 5 estrelas
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-muted-foreground">
            Avaliações reais de clientes satisfeitos
          </span>
        </div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-3">
        {reviewImages.map((img, index) => (
          <motion.figure
            key={img.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover" />
          </motion.figure>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 text-center"
      >
        <a
          href={PHONE_URL}
          className="inline-flex items-center gap-3 px-7 py-3 rounded-lg bg-[#BFEFFF] hover:bg-[#A9D7E6] text-black font-black transition-all shadow-lg hover:shadow-xl"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "click_call", {
                event_category: "lead",
                event_label: "botao_ligacao_depoimentos",
              });
            }
          }}
        >
          <Phone className="w-5 h-5" />
          Solicitar Guincho Agora
        </a>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;