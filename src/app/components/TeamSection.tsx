import { useState } from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

type MemberType = 'supervisor' | 'leader' | 'member' | 'friend';

interface TeamMember {
  name: string;
  role?: string;
  description: string;
  photo?: string;
  type: MemberType;
}

function TeamCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);

  const getIcon = () => {
    if (member.type === 'supervisor') return <GraduationCap className="w-6 h-6" />;
    if (member.type === 'leader') return <Users className="w-6 h-6" />;
    return <User className="w-6 h-6" />;
  };

  const getBorderColor = () => {
    if (member.type === 'supervisor') return 'border-pink-500/30';
    if (member.type === 'leader') return 'border-purple-500/30';
    return 'border-white/10';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white/5 backdrop-blur-lg border ${getBorderColor()} rounded-xl p-6 hover:bg-white/10 transition-all group`}
    >
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform overflow-hidden">
          {member.photo && member.photo.length > 0 && !imgError
            ? <img src={member.photo} alt={member.name} className="w-full h-full object-cover" onError={() => setImgError(true)} />
            : getIcon()
          }
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
          <p className="text-sm text-purple-400 mb-2">{member.role}</p>
          <p className="text-sm text-white/60">{member.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  const { t } = useLanguage();

  const memberTypes: MemberType[] = ['supervisor', 'supervisor', 'supervisor', 'supervisor', 'leader', 'leader', 'member', 'member', 'member', 'member', 'member', 'member', 'friend', 'friend'];
  const teamMembers: TeamMember[] = t.team.members.map((m, i) => ({
    ...m,
    type: memberTypes[i],
  }));

  const supervisors = teamMembers.filter(m => m.type === 'supervisor');
  const leaders = teamMembers.filter(m => m.type === 'leader');
  const members = teamMembers.filter(m => m.type === 'member');
  const friends = teamMembers.filter(m => m.type === 'friend');

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-black to-black relative overflow-hidden">
      {/* Enhanced background with neural network effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Neural network SVG overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="teamLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <line x1="20%" y1="30%" x2="50%" y2="60%" stroke="url(#teamLineGradient)" strokeWidth="1" />
        <line x1="70%" y1="20%" x2="85%" y2="50%" stroke="url(#teamLineGradient)" strokeWidth="1" />
        <line x1="30%" y1="80%" x2="60%" y2="70%" stroke="url(#teamLineGradient)" strokeWidth="1" />
        <circle cx="20%" cy="30%" r="4" fill="#ec4899" opacity="0.5" />
        <circle cx="50%" cy="60%" r="4" fill="#a855f7" opacity="0.5" />
        <circle cx="70%" cy="20%" r="4" fill="#3b82f6" opacity="0.5" />
        <circle cx="85%" cy="50%" r="4" fill="#ec4899" opacity="0.5" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.team.title}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </motion.div>

        {/* Supervisors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-pink-500" />
            {t.team.facultyAdvisors}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {supervisors.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Leaders */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-500" />
            {t.team.leadershipTeam}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {leaders.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Members */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <User className="w-6 h-6 text-blue-500" />
              {t.team.coreTeamMembers}
            </h3>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 border border-blue-500/40 text-blue-300">
              {t.team.coreTeamSubtitle}
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Friends */}
        {friends.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <User className="w-6 h-6 text-cyan-500" />
              {t.team.clubFriends}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {friends.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
