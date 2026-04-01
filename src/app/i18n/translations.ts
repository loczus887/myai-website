export type Language = 'en' | 'pl';

export const translations = {
  en: {
    nav: {
      about: 'About Us',
      team: 'Team',
      activities: 'Activities',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Student Machine Learning Research Club',
      description:
        'Empowering the next generation of AI innovators through collaborative learning, cutting-edge research, and hands-on projects',
      aboutTitle: 'About Us',
      aboutText:
        'MyAI is a dynamic student-led community at Cracow University of Technology dedicated to exploring the frontiers of artificial intelligence and machine learning. We bring together passionate students, researchers, and industry professionals to collaborate on innovative projects, share knowledge, and push the boundaries of what\'s possible with AI. From deep learning to natural language processing, computer vision to reinforcement learning, we\'re building the future of intelligent systems together.',
    },
    team: {
      title: 'Meet Our Team',
      subtitle: 'Talented individuals driving innovation and fostering a collaborative AI research community',
      facultyAdvisors: 'Faculty Advisors',
      leadershipTeam: 'Leadership Team',
      coreTeamMembers: 'Core Team Members',
      members: [
        {
          name: 'Prof. Anna Kowalska',
          role: 'Faculty Advisor',
          description: 'PhD in Machine Learning, specializing in neural networks and deep learning architectures',
        },
        {
          name: 'Dr. Jan Nowak',
          role: 'Research Supervisor',
          description: 'Expert in computer vision and AI ethics, guiding our research initiatives',
        },
        {
          name: 'Zofia Wiśniewska',
          role: 'Club President',
          description: 'Leading organizational efforts and coordinating research projects',
        },
        {
          name: 'Michał Lewandowski',
          role: 'Vice President',
          description: 'Managing collaborations and external partnerships',
        },
        {
          name: 'Katarzyna Zając',
          role: 'Research Lead',
          description: 'Coordinating research activities and publications',
        },
        {
          name: 'Piotr Kamiński',
          role: 'Project Manager',
          description: 'Overseeing hands-on AI projects and hackathons',
        },
        {
          name: 'Maria Kowalczyk',
          role: 'Education Coordinator',
          description: 'Organizing workshops and training sessions',
        },
        {
          name: 'Tomasz Wójcik',
          role: 'Technical Lead',
          description: 'Managing infrastructure and development tools',
        },
      ],
    },
    activities: {
      title: 'Our Activities',
      subtitle: 'Diverse initiatives that advance AI knowledge and foster innovation',
      items: [
        {
          title: 'Research & Development',
          description:
            'Conducting cutting-edge research in machine learning, deep learning, and AI applications. Publishing papers and contributing to open-source projects.',
        },
        {
          title: 'Projects & Collaboration',
          description:
            'Building real-world AI solutions through team projects, hackathons, and industry partnerships. Applying theory to practical challenges.',
        },
        {
          title: 'Education & Outreach',
          description:
            'Organizing workshops, seminars, and study groups to share knowledge. Mentoring new members and spreading AI literacy across campus.',
        },
        {
          title: 'Scientific Publications',
          description:
            'Contributing to academic discourse through research papers, conference presentations, and technical blog posts. Building our scholarly impact.',
        },
      ],
    },
    footer: {
      description:
        'Student Machine Learning Research Club at Cracow University of Technology. Building the future of AI through collaboration and innovation.',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: '© 2026 MyAI. All rights reserved.',
      university: 'Cracow University of Technology',
    },
  },

  pl: {
    nav: {
      about: 'O nas',
      team: 'Zespół',
      activities: 'Działalność',
      contact: 'Kontakt',
    },
    hero: {
      subtitle: 'Studenckie Koło Naukowe Machine Learning',
      description:
        'Kształtujemy nowe pokolenie innowatorów AI poprzez wspólne uczenie się, nowoczesne badania i projekty praktyczne',
      aboutTitle: 'O nas',
      aboutText:
        'MyAI to dynamiczna społeczność studencka na Politechnice Krakowskiej, poświęcona eksploracji granic sztucznej inteligencji i uczenia maszynowego. Łączymy pasjonatów, naukowców i specjalistów z branży, aby wspólnie tworzyć innowacyjne projekty, dzielić się wiedzą i przesuwać granice możliwości AI. Od głębokiego uczenia po przetwarzanie języka naturalnego, od widzenia komputerowego po uczenie ze wzmocnieniem – razem budujemy przyszłość inteligentnych systemów.',
    },
    team: {
      title: 'Nasz Zespół',
      subtitle: 'Utalentowani ludzie napędzający innowacje i budujący społeczność badań nad AI',
      facultyAdvisors: 'Opiekunowie Naukowi',
      leadershipTeam: 'Zarząd',
      coreTeamMembers: 'Członkowie Koła',
      members: [
        {
          name: 'Prof. Anna Kowalska',
          role: 'Opiekun Naukowy',
          description: 'Doktor habilitowany w dziedzinie uczenia maszynowego, specjalizacja: sieci neuronowe i architektury głębokiego uczenia',
        },
        {
          name: 'Dr. Jan Nowak',
          role: 'Opiekun Badań',
          description: 'Ekspert w dziedzinie widzenia komputerowego i etyki AI, kieruje inicjatywami badawczymi koła',
        },
        {
          name: 'Zofia Wiśniewska',
          role: 'Prezes Koła',
          description: 'Kieruje działalnością organizacyjną i koordynuje projekty badawcze',
        },
        {
          name: 'Michał Lewandowski',
          role: 'Wiceprezes',
          description: 'Zarządza współpracą i partnerstwami zewnętrznymi',
        },
        {
          name: 'Katarzyna Zając',
          role: 'Lider ds. Badań',
          description: 'Koordynuje działalność badawczą i publikacje naukowe',
        },
        {
          name: 'Piotr Kamiński',
          role: 'Kierownik Projektów',
          description: 'Nadzoruje praktyczne projekty AI i hackathony',
        },
        {
          name: 'Maria Kowalczyk',
          role: 'Koordynator ds. Edukacji',
          description: 'Organizuje warsztaty i sesje szkoleniowe',
        },
        {
          name: 'Tomasz Wójcik',
          role: 'Lider Techniczny',
          description: 'Zarządza infrastrukturą i narzędziami deweloperskimi',
        },
      ],
    },
    activities: {
      title: 'Nasza Działalność',
      subtitle: 'Różnorodne inicjatywy rozwijające wiedzę o AI i wspierające innowacje',
      items: [
        {
          title: 'Badania i Rozwój',
          description:
            'Prowadzimy zaawansowane badania w zakresie uczenia maszynowego, głębokiego uczenia i zastosowań AI. Publikujemy artykuły i współtworzymy projekty open-source.',
        },
        {
          title: 'Projekty i Współpraca',
          description:
            'Tworzymy realne rozwiązania AI poprzez projekty zespołowe, hackathony i partnerstwa z branżą. Przekształcamy teorię w praktyczne wyzwania.',
        },
        {
          title: 'Edukacja i Popularyzacja',
          description:
            'Organizujemy warsztaty, seminaria i grupy studyjne. Mentorujemy nowych członków i popularyzujemy wiedzę o AI na uczelni.',
        },
        {
          title: 'Publikacje Naukowe',
          description:
            'Uczestniczymy w dyskursie akademickim poprzez artykuły badawcze, prezentacje konferencyjne i posty techniczne. Budujemy nasz dorobek naukowy.',
        },
      ],
    },
    footer: {
      description:
        'Studenckie Koło Naukowe Machine Learning na Politechnice Krakowskiej. Budujemy przyszłość AI poprzez współpracę i innowacje.',
      contact: 'Kontakt',
      followUs: 'Obserwuj nas',
      rights: '© 2026 MyAI. Wszelkie prawa zastrzeżone.',
      university: 'Politechnika Krakowska',
    },
  },
} as const;

export type Translations = typeof translations.en;
