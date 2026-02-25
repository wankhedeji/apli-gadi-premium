import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
  light,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className={`text-3xl md:text-4xl font-heading font-extrabold mb-3 tracking-tight ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-base ${light ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>
      )}
      <div className="gold-bar mt-4 mx-auto w-16" />
    </motion.div>
  );
}
