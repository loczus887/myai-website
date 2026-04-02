export type Language = 'en' | 'pl';

export const translations = {
  en: {
    nav: {
      about: 'About Us',
      team: 'Team',
      activities: 'Activities',
      portfolio: 'Our Work',
      news: 'News',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Student Machine Learning Research Club',
      description:
        'Empowering the next generation of AI innovators through collaborative learning, cutting-edge research, and hands-on projects',
      aboutTitle: 'About Us',
      aboutText:
        'MyAI is a student research club at Cracow University of Technology bringing together people passionate about artificial intelligence. Our activity is divided into two sections:\n\nThe Engineering & Research Section is the main section of the club. We develop real-world AI projects, conduct research, prepare scientific publications and actively pursue inter-university collaborations - working together with students and researchers from other academic institutions to tackle ambitious challenges.\n\nThe Scientific & Educational Section delves into the theoretical foundations of artificial intelligence, analyses the latest research papers, and carries out projects aimed at verifying in practice what its members have learned. It is the perfect place for those who want to deeply understand how AI works from the ground up.',
    },
    team: {
      title: 'Meet Our Team',
      subtitle: 'Talented individuals driving innovation and fostering a collaborative AI research community',
      facultyAdvisors: 'Faculty Advisors',
      leadershipTeam: 'Leadership Team',
      coreTeamMembers: 'Core Team Members',
      coreTeamSubtitle: 'Engineering & Research Section',
      clubFriends: 'Friends of the Club',
      members: [
        {
          name: 'Dr Ilona Urbaniak',
          role: 'Main Faculty Advisor',
          photo: '/team/ilona-urbaniak.jpg',
          description: 'PhD in applied mathematics (University of Waterloo, Canada). Assistant professor at the Department of Computer Science and Mathematics at Cracow University of Technology, specializing in artificial intelligence methods and image processing. Combines academic experience with engineering practice. Former Head of AI Department at NASK, leading advanced machine learning projects, and Senior AI Engineer at IllumiSonics (Waterloo, Canada), developing medical image analysis algorithms. Her research covers intelligent image data processing, deep learning, and methods supporting medical diagnostics.',
        },
        {
          name: 'Dr inż. Dominika Cywicka',
          role: 'Faculty Advisor',
          photo: '/team/dominika-cywicka.jpg',
          description: 'PhD in natural sciences, specialist in data analysis and artificial intelligence in natural resource management. Assistant professor at Cracow University of Technology. In her free time, a passionate climber.',
        },
        {
          name: 'Piotr Biskup',
          role: 'Faculty Advisor',
          photo: '/team/piotr-biskup.jpg',
          description: 'Research and teaching assistant at Cracow University of Technology, graduate of two fields of study: mathematics and computer science. In his work, he combines solid theoretical foundations with practical applications of computational methods. Specializes in artificial intelligence and statistics, focusing on data modeling, machine learning and advanced analytical techniques.',
        },
        {
          name: 'Adam Wyrzykowski',
          role: 'Faculty Advisor',
          photo: '/team/adam-wyrzykowski.jpg',
          description: '',
        },
        {
          name: 'Alicja Kowalska',
          role: 'Club President',
          photo: '/team/alicja-kowalska.jpg',
          description: 'Third-year Computer Science student who combines studies with practice - working as a Software Developer specializing in ML&AI. In the club, she realizes various projects and as an administrator coordinates joint activities. Beyond coding? Personal projects (ideas are never in short supply, just time!), rollerblading, dancing, experimenting in the kitchen and baking.',
        },
        {
          name: 'Wiktoria Kosek',
          role: 'Vice President',
          photo: '/team/wiktoria-kosek.jpg',
          description: 'Third-year Computer Science student, passionate about AI, especially computer vision. Currently developing several personal projects, and in her spare time works as a model and travels, discovering new places.',
        },
        {
          name: 'Amelia Kwiecińska',
          photo: '/team/amelia-kwiecinska.jpg',
          description: '',
        },
        {
          name: 'Antoni Jaros',
          photo: '/team/antoni-jaros.jpg',
          description: 'Hi! I\'m a 3rd year Computer Science student combining studies with work as a Software Developer. I\'m very interested in artificial intelligence and the research club lets me develop that interest. Besides studies and work, I\'m interested in Japanese culture and language, and in my free time I enjoy playing games.',
        },
        {
          name: 'Mariusz Sułkowski',
          photo: '/team/mariusz-sulkowski.jpg',
          description: '',
        },
        {
          name: 'Martin Paszow',
          photo: '/team/martin-paszow.jpg',
          description: '',
        },
        {
          name: 'Szymon Skibiński',
          photo: '/team/szymon-skibinski.jpg',
          description: '',
        },
        {
          name: 'Paweł Turek',
          photo: '/team/pawel-turek.jpg',
          description: '',
        },
        {
          name: 'Paulina Sadowska',
          photo: '/team/paulina-sadowska.jpg',
          description: 'Graduate of master\'s studies in econometrics and computer science at SGGW in Warsaw. Currently working at a company dealing with production management systems, actively looking for innovative ways to use artificial intelligence in daily work. Passionate about statistics, data modeling and drawing valuable conclusions. Ambitious to develop a career in Data Science, combining an analytical approach with practical AI applications.',
        },
        {
          name: 'Kacper Słomka',
          photo: '/team/kacper-slomka.jpg',
          description: 'Hey! I\'m a master\'s student specializing in enterprise cybersecurity. I work as a Software Engineer on a daily basis. I enjoy expanding my knowledge of ML, DevOps and Cybersecurity. Outside of work I ride motorcycles, am interested in airsoft and whatever else catches my attention. I also like to play games.',
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
    portfolio: {
      title: 'Our Work',
      subtitle: 'Projects, publications and events that define our journey',
      tabs: {
        projects: 'Projects',
        publications: 'Publications',
        events: 'Events',
      },
      projects: [],
      publications: [],
      events: [],
      empty: 'Nothing here yet - check back soon!',
    },
    news: {
      title: 'News',
      subtitle: 'Stay up to date with what\'s happening at MyAI',
      readMore: 'Read more',
      items: [
        {
          title: '🚀 Recruitment for the MyAI Student Machine Learning Research Club has started!',
          date: '2026-04-02',
          image: '/news/rekrutacja-2026.jpg',
          summary: 'At the Faculty of Computer Science and Mathematics of Cracow University of Technology.\n\nWant to start your adventure with artificial intelligence and machine learning? Or develop skills you already have? 🧠🔍\n\nJoin the Scientific & Educational Section, where you will learn the fundamentals of AI step by step. After a short theoretical introduction, you will work on practical projects that will consolidate your knowledge and prepare you to join our engineering & research teams.\n\n📅 Meetings: Wednesdays, 7:00 PM (online – Microsoft Teams)\n👨‍🏫 Instructor: mgr inż. Piotr Biskup, guest: dr Ilona Urbaniak\n📧 After recruitment closes, we will send organizational details.',
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSdGZhhaCTAgQwA_uMJmSInN3VnIV6zYik8AQobLcw7MRW16yw/viewform',
        },
      ],
      empty: 'No news yet - check back soon!',
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
      portfolio: 'Nasze Prace',
      news: 'Aktualności',
      contact: 'Kontakt',
    },
    hero: {
      subtitle: 'Studenckie Koło Naukowe Uczenia Maszynowego',
      description:
        'Kształtujemy nowe pokolenie innowatorów AI poprzez wspólne uczenie się, nowoczesne badania i projekty praktyczne',
      aboutTitle: 'O nas',
      aboutText:
        'MyAI to studenckie koło naukowe na Politechnice Krakowskiej, skupiające pasjonatów sztucznej inteligencji. Nasza działalność podzielona jest na dwie sekcje:\n\nSekcja inżynieryjno-badawcza jest główną sekcją koła. Realizujemy projekty, przeprowadzamy badania oraz przygotowujemy publikacje naukowe. Aktywnie podejmujemy współprace między uczelniane - działając wspólnie ze studentami i naukowcami z innych uczelni, by mierzyć się z ambitnymi wyzwaniami.\n\nSekcja naukowo-poznawcza zgłębia teoretyczne podstawy sztucznej inteligencji, analizuje najnowsze publikacje naukowe oraz realizuje projekty mające na celu sprawdzenie w praktyce tego, czego się nauczyła. To idealne miejsce dla tych, którzy chcą dogłębnie zrozumieć, jak działa AI od podstaw.',
    },
    team: {
      title: 'Nasz Zespół',
      subtitle: 'Utalentowani ludzie napędzający innowacje i budujący społeczność badań nad AI',
      facultyAdvisors: 'Opiekunowie Naukowi',
      leadershipTeam: 'Zarząd',
      coreTeamMembers: 'Członkowie Koła',
      coreTeamSubtitle: 'Sekcja inżynieryjno-badawcza',
      clubFriends: 'Przyjaciele Koła',
      members: [
        {
          name: 'Dr Ilona Urbaniak',
          role: 'Główny Opiekun Naukowy Koła',
          photo: '/team/ilona-urbaniak.jpg',
          description: 'Doktor nauk w dziedzinie matematyki stosowanej (University of Waterloo, Kanada). Adiunkt w Katedrze Informatyki i Matematyki Politechniki Krakowskiej, specjalizuje się w metodach sztucznej inteligencji i przetwarzaniu obrazów. Łączy doświadczenie akademickie z praktyką inżynierską. Była Head of AI Department w NASK, gdzie prowadziła projekty z zakresu zaawansowanego uczenia maszynowego, a następnie Senior AI Engineer w IllumiSonics (Waterloo, Kanada), tworząc algorytmy analizy obrazów medycznych. Jej badania obejmują inteligentne przetwarzanie danych obrazowych, deep learning oraz metody wspierające diagnostykę medyczną, łącząc matematyczną precyzję z rozwiązaniami dla medycyny przyszłości.',
        },
        {
          name: 'Dr inż. Dominika Cywicka',
          role: 'Opiekun Koła',
          photo: '/team/dominika-cywicka.jpg',
          description: 'Dr nauk przyrodniczych, specjalistka w analizie danych i sztucznej inteligencji w zarządzaniu zasobami naturalnymi. Adiunkt na Politechnice Krakowskiej. Po godzinach pasjonatka wspinaczki.',
        },
        {
          name: 'Piotr Biskup',
          role: 'Opiekun Koła',
          photo: '/team/piotr-biskup.jpg',
          description: 'Jestem asystentem badawczo-dydaktycznym na Politechnice Krakowskiej, absolwentem dwóch kierunków studiów: matematyki oraz informatyki. W swojej pracy łączę solidne podstawy teoretyczne z praktycznymi zastosowaniami metod obliczeniowych. Specjalizuję się w szeroko pojętej sztucznej inteligencji oraz statystyce, koncentrując się na modelowaniu danych, uczeniu maszynowym i zaawansowanych technikach analitycznych. Chętnie podejmuję się zarówno projektów badawczych, jak i dydaktycznych, które pozwalają mi rozwijać pasję do nowoczesnych technologii i nauk ścisłych.',
        },
        {
          name: 'Adam Wyrzykowski',
          role: 'Opiekun Koła',
          photo: '/team/adam-wyrzykowski.jpg',
          description: '',
        },
        {
          name: 'Alicja Kowalska',
          role: 'Prezes Koła',
          photo: '/team/alicja-kowalska.jpg',
          description: 'Jestem studentką III roku Informatyki i na co dzień łączę naukę z praktyką - pracuję jako Software Developer ze specjalizacją w ML&AI. W kole naukowym realizuje różnorodne projekty, a jako administrator koordynuję nasze wspólne działania. Poza kodowaniem? Realizuję własne projekty (bo pomysłów nigdy za mało, jedynie czasu trochę brakuje!), jeżdżę na rolkach, tańczę, eksperymentuję w kuchni i piekę - mówią, że moje ciasta znikają z talerzy w mgnieniu oka.',
        },
        {
          name: 'Wiktoria Kosek',
          role: 'Wiceprezes',
          photo: '/team/wiktoria-kosek.jpg',
          description: 'Studentka informatyki na 3. roku, pasjonująca się AI, zwłaszcza computer vision. Aktualnie rozwijam kilka własnych projektów, a w wolnych chwilach pracuję jako modelka i podróżuję, odkrywając nowe miejsca.',
        },
        {
          name: 'Amelia Kwiecińska',
          photo: '/team/amelia-kwiecinska.jpg',
          description: '',
        },
        {
          name: 'Antoni Jaros',
          photo: '/team/antoni-jaros.jpg',
          description: 'Cześć! Jestem studentem 3 roku Informatyki a studia łączę z pracą jako Software Developer. Bardzo interesuję się sztuczną inteligencją a koło naukowe pozwala mi rozwijać to zainteresowanie. Poza studiami oraz pracą interesuję się kulturą i językiem Japonii, a w wolnym czasie lubię sobie pograć w gierki',
        },
        {
          name: 'Mariusz Sułkowski',
          photo: '/team/mariusz-sulkowski.jpg',
          description: '',
        },
        {
          name: 'Martin Paszow',
          photo: '/team/martin-paszow.jpg',
          description: '',
        },
        {
          name: 'Szymon Skibiński',
          photo: '/team/szymon-skibinski.jpg',
          description: '',
        },
        {
          name: 'Paweł Turek',
          photo: '/team/pawel-turek.jpg',
          description: '',
        },
        {
          name: 'Paulina Sadowska',
          photo: '/team/paulina-sadowska.jpg',
          description: 'Jestem absolwentką studiów magisterskich z zakresu ekonometrii i informatyki na uczelni SGGW w Warszawie. Obecnie pracuję w firmie zajmującej się systemami do zarządzania produkcją, gdzie aktywnie poszukuję innowacyjnych sposobów wykorzystania sztucznej inteligencji w codziennej pracy. Pasjonuję się statystyką, modelowaniem danych oraz wyciąganiem wartościowych wniosków na ich podstawie. Moją ambicją jest rozwój kariery w obszarze Data Science, w którym mogłabym łączyć analityczne podejście z praktycznym zastosowaniem AI, tworząc inteligentne rozwiązania wspierające podejmowanie decyzji biznesowych.',
        },
        {
          name: 'Kacper Słomka',
          description: 'Hej! Jestem studentem studiów magisterskich na specjalizacji cyberbezpieczeństwo przedsiębiorstw. Na co dzień pracuje jako Software Enginner. Chętnie poszerzam swoją wiedzę na temat ML, Devops oraz Cybersecurity. Poza pracą jeżdżę na motorze, interesuje się ASG oraz wszystkim, co mi wpadnie do głowy. Dodatkowo lubię sobie w gierki pograć ',
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
    portfolio: {
      title: 'Nasze Prace',
      subtitle: 'Projekty, publikacje i wydarzenia, które definiują naszą działalność',
      tabs: {
        projects: 'Projekty',
        publications: 'Publikacje',
        events: 'Wydarzenia',
      },
      projects: [],
      publications: [],
      events: [],
      empty: 'Tu jeszcze nic nie ma - wróć wkrótce!',
    },
    news: {
      title: 'Aktualności',
      subtitle: 'Bądź na bieżąco z tym, co dzieje się w MyAI',
      readMore: 'Czytaj więcej',
      items: [
        {
          title: '🚀 Startuje rekrutacja do Studenckiego Koła Naukowego Uczenia Maszynowego MyAI!',
          date: '2026-04-02',
          image: '/news/rekrutacja-2026.jpg',
          summary: 'Na Politechnice Krakowskiej im. Tadeusza Kościuszki – Wydział Informatyki i Matematyki Politechniki Krakowskiej.\n\nChcesz rozpocząć swoją przygodę ze sztuczną inteligencją i uczeniem maszynowym? A może rozwijać już zdobyte umiejętności? 🧠🔍\n\nDołącz do Sekcji Naukowo-Poznawczej, gdzie krok po kroku poznasz fundamenty AI. Po krótkim wprowadzeniu teoretycznym będziesz pracować nad praktycznymi projektami, które pozwolą utrwalić wiedzę i przygotują Cię do dołączenia do naszych zespołów badawczo-inżynieryjnych.\n\n📅 Spotkania: środy, 19:00 (online – Microsoft Teams)\n👨‍🏫 Prowadzący: mgr inż. Piotr Biskup, gościnnie: dr Ilona Urbaniak\n📧 Po zamknięciu rekrutacji prześlemy szczegóły organizacyjne.',
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSdGZhhaCTAgQwA_uMJmSInN3VnIV6zYik8AQobLcw7MRW16yw/viewform',
        },
      ],
      empty: 'Brak aktualności - wróć wkrótce!',
    },
    footer: {
      description:
        'Studenckie Koło Naukowe Uczenia Maszynowego na Politechnice Krakowskiej. Budujemy przyszłość AI poprzez współpracę i innowacje.',
      contact: 'Kontakt',
      followUs: 'Obserwuj nas',
      rights: '© 2026 MyAI. Wszelkie prawa zastrzeżone.',
      university: 'Politechnika Krakowska',
    },
  },
} as const;

export type Translations = typeof translations.en;
