import { motion } from 'motion/react';
import { Beaker, Users, GraduationCap, BookOpen } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const gradients = [
  'from-pink-500 to-pink-600',
  'from-purple-500 to-purple-600',
  'from-blue-500 to-blue-600',
  'from-indigo-500 to-indigo-600',
];

const icons = [
  <Beaker className="w-8 h-8" />,
  <Users className="w-8 h-8" />,
  <GraduationCap className="w-8 h-8" />,
  <BookOpen className="w-8 h-8" />,
];

function ActivityCard({
  title,
  description,
  gradient,
  icon,
  index,
}: {
  title: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10 from-pink-500/20 via-purple-500/20 to-blue-500/20" />

      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function ActivitiesSection() {
  const { t } = useLanguage();

  return (
    <section id="activities" className="py-24 bg-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[100px]" />
      </div>

      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        <defs>
          <linearGradient id="activityLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <line x1="15%" y1="25%" x2="35%" y2="55%" stroke="url(#activityLineGradient)" strokeWidth="1.5" />
        <line x1="65%" y1="35%" x2="80%" y2="65%" stroke="url(#activityLineGradient)" strokeWidth="1.5" />
        <line x1="25%" y1="75%" x2="55%" y2="50%" stroke="url(#activityLineGradient)" strokeWidth="1.5" />
        <line x1="45%" y1="15%" x2="75%" y2="25%" stroke="url(#activityLineGradient)" strokeWidth="1" />
        <circle cx="15%" cy="25%" r="5" fill="#3b82f6" opacity="0.6" />
        <circle cx="35%" cy="55%" r="5" fill="#8b5cf6" opacity="0.6" />
        <circle cx="65%" cy="35%" r="5" fill="#ec4899" opacity="0.6" />
        <circle cx="80%" cy="65%" r="5" fill="#3b82f6" opacity="0.6" />
        <circle cx="45%" cy="15%" r="4" fill="#8b5cf6" opacity="0.6" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.activities.title}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t.activities.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {t.activities.items.map((item, index) => (
            <ActivityCard
              key={index}
              title={item.title}
              description={item.description}
              gradient={gradients[index]}
              icon={icons[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
