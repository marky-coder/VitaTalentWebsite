// client/src/components/WhyGlobalSection.tsx
import { motion, useReducedMotion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

const continents = [
  { name: "Africa", x: 50, y: 55 },
  { name: "Latin America", x: 25, y: 60 },
  { name: "Asia", x: 70, y: 40 },
  { name: "Europe", x: 52, y: 30 },
];

export default function WhyGlobalSection() {
  const [activeDot, setActiveDot] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % continents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Helpers to split text
  const splitToChars = (text: string) =>
    text.split("").map((ch, i) => ({ ch, id: `${i}-${ch === " " ? "sp" : ch}` }));

  const splitToWords = (text: string) =>
    text.split(" ").map((w, i) => ({ w, id: `${i}-${w}` }));

  // Motion variants
  const containerVariant = {
    hidden: { x: 80, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };

  const charContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.02,
      },
    },
  };

  const charVariant = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.14, ease: "easeOut" },
    },
  };

  const wordContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.03,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-24 bg-gradient-to-br from-primary/15 via-primary/8 to-background"
      data-testid="section-why-global"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* LEFT: Animated text that slides in from the right, then reveals letters/words */}
          <motion.div
            className="md:col-span-3 space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariant}
          >
            {/* Heading — letter-by-letter */}
            <motion.h2
              className="text-4xl font-bold text-foreground inline-block overflow-hidden"
              variants={charContainer}
              aria-label="Why Global?"
            >
              {/* For accessibility, we include a sr-only copy; the animated spans are aria-hidden */}
              <span className="sr-only">Why Global?</span>

              <span aria-hidden="true" className="select-none">
                {splitToChars("Why Global?").map((item) => (
                  <motion.span
                    key={item.id}
                    variants={charVariant}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                    className="inline-block"
                  >
                    {item.ch === " " ? "\u00A0" : item.ch}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            {/* Short lead paragraph — word-by-word */}
            <motion.p
              className="text-lg font-medium text-foreground leading-relaxed"
              variants={wordContainer}
              aria-hidden={shouldReduceMotion ? false : true}
            >
              <span className="sr-only">
                Why limit yourself to one continent when the world is full of extraordinary talent?
              </span>

              <span aria-hidden="true">
                {splitToWords(
                  "Why limit yourself to one continent when the world is full of extraordinary talent?"
                ).map((item) => (
                  <motion.span
                    key={item.id}
                    variants={wordVariant}
                    className="inline-block mr-2"
                    style={{ display: "inline-block" }}
                  >
                    {item.w}
                    {/* preserve space visually */}
                    &nbsp;
                  </motion.span>
                ))}
              </span>
            </motion.p>

            {/* Longer paragraph — word-by-word */}
            <motion.p
              className="text-lg font-medium text-muted-foreground leading-relaxed"
              variants={wordContainer}
              aria-hidden={shouldReduceMotion ? false : true}
            >
              <span className="sr-only">
                Vita Talent brings together skilled professionals from Africa, Latin America, Asia, and beyond — giving businesses the freedom to hire the best, no matter where they are.
              </span>

              <span aria-hidden="true">
                {splitToWords(
                  "Vita Talent brings together skilled professionals from Africa, Latin America, Asia, and beyond — giving businesses the freedom to hire the best, no matter where they are."
                ).map((item) => (
                  <motion.span
                    key={item.id}
                    variants={wordVariant}
                    className="inline-block mr-2"
                    style={{ display: "inline-block" }}
                  >
                    {item.w}
                    &nbsp;
                  </motion.span>
                ))}
              </span>
            </motion.p>
          </motion.div>

          {/* RIGHT: Globe + animated dots (globe fades/ slides in slightly later) */}
          <motion.div
            className="md:col-span-2 relative h-80"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.12 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-64 h-64 text-primary/20" strokeWidth={0.5} />
            </div>

            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
              {continents.map((continent, index) => (
                <g key={continent.name}>
                  <motion.circle
                    cx={continent.x}
                    cy={continent.y}
                    r="3"
                    className="fill-primary"
                    initial={{ scale: 0.8, opacity: 0.4 }}
                    animate={{
                      scale: activeDot === index ? 1.5 : 0.8,
                      opacity: activeDot === index ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.circle
                    cx={continent.x}
                    cy={continent.y}
                    r="5"
                    className="fill-primary/20"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: activeDot === index ? 2 : 0,
                      opacity: activeDot === index ? 0 : 0,
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </g>
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
