import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

const continents = [
  { name: 'Africa', x: 50, y: 55 },
  { name: 'Latin America', x: 25, y: 60 },
  { name: 'Asia', x: 70, y: 40 },
  { name: 'Europe', x: 52, y: 30 },
];

export default function WhyGlobalSection() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % continents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5" data-testid="section-why-global">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Why Global?
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              Why limit yourself to one continent when the world is full of extraordinary talent?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vita Talent brings together skilled professionals from Africa, Latin America, Asia, and beyond — giving businesses the freedom to hire the best, no matter where they are.
            </p>
          </div>
          
          <div className="md:col-span-2 relative h-80">
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-64 h-64 text-primary/20" strokeWidth={0.5} />
            </div>
            
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {continents.map((continent, index) => (
                <motion.g key={continent.name}>
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
                </motion.g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
