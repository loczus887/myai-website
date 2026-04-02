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
        awards: 'Awards',
        conferences: 'Conferences',
      },
      projects: [
        {
          title: "AIRIS – Advanced Intelligent Recognition & Interception System",
          image: "/projects/airis.jpg",
          description: "AIRIS is a real-time security monitoring system integrating computer vision and artificial intelligence in a wearable environment. It uses a three-layer architecture and multi-stage image analysis: face detection (Haar + dlib), temporal tracking and threat detection (modified YOLO).",
          tags: ["Computer Vision", "YOLO", "dlib", "ESP32-CAM", "Wearable AI"],
        },
      ],
      publications: [],
      events: [
        {
          title: "🌍 STARS EU BIP – France 2026",
          date: "January 12–16, 2026",
          location: "IUT Nord Franche-Comté, France",
          images: [
            "/events/stars-eu-1.jpg",
            "/events/stars-eu-2.jpg",
          ],
          description: "Our club members Alicja Kowalska, Klaudia Karczmarczyk and Wiktoria Kosek took part in the international STARS EU – Blended Intensive Programme (BIP)!\n\nThroughout the semester the girls attended online classes as part of the programme, and the intensive week at IUT Nord Franche-Comté (12–16 January 2026) was the grand finale – a hands-on summary combining workshops, teamwork and intercultural exchange with students from across Europe.\n\nCongratulations and fingers crossed for more international trips! 💙",
        },
        {
          title: "AI Agents Workshop",
          date: "January 13, 2026",
          location: "Cracow University of Technology",
          images: [
            "/events/ai-agents-1.jpg",
          ],
          description: "On January 13th, our club member Antoni Jaros took part in the AI Agents workshop, organized by u2i in cooperation with the Faculty of Computer Science and Mathematics at Cracow University of Technology.\n\nIt was very hands-on 💻\n\nDesigning AI agents, working with local language models, prompt engineering and integrating models with tools – all in a hands-on format.\n\nThe workshop was led by Iwo Szczepaniak, who talked about real commercial applications of multi-agent AI systems.\n\nWe're glad that MyAI members are developing, gaining experience and representing our club at industry events 🚀\n\nThanks for the invitation and the great workshop!\n\n📸 Photo: Faculty of Computer Science and Mathematics, Cracow University of Technology",
        },
        {
          title: "Women in Tech Camp",
          date: "December 2025",
          location: "Women in Tech Camp",
          images: [
            "/events/witc-1.jpg",
            "/events/witc-2.jpg",
            "/events/witc-3.jpg",
            "/events/witc-4.jpg",
          ],
          description: "In December, Wiktoria and Alicja represented our club at Women in Tech Camp 💜\n\nA few days full of workshops, inspiring meetings and conversations with girls and women who – just like us – are developing themselves in IT.\n\nDuring the camp we took part in workshops on AI, LLMs, Data Science, Machine Learning and cloud, as well as mentoring sessions and meetings with role models from the tech industry.\n\nThere was a lot of learning, motivation, sharing experiences and building relationships that – we hope – will stay with us for a long time 💫\n\nWomen in Tech Camp is not just an event, but a community and a huge dose of inspiration 🚀 We're glad we could be there and can't wait to share the knowledge we gained with our club!",
        },
        {
          title: "University Festival – Małopolska of the Future at EXPO Kraków",
          date: "November 26, 2025",
          location: "EXPO Kraków",
          images: [
            "/events/festiwal-1.jpg",
            "/events/festiwal-2.jpg",
            "/events/festiwal-3.jpg",
            "/events/festiwal-4.jpg",
            "/events/festiwal-5.jpg",
            "/events/festiwal-6.jpg",
            "/events/festiwal-7.jpg",
          ],
          description: "On November 26th, our MyAI Research Club appeared at the University Festival – Małopolska of the Future at EXPO Kraków, and a lot happened!\n\nEveryone who visited our stand could try out our interactive AI projects themselves:\n🤖 AIRIS – personal safety system\n🧠 Drawing digits and how neural networks work\n✏️ Quick Draw AI – AI guessing what you're drawing\n😃 Emotion AI – real-time emotion detection\n📝 Human or AI? – a quiz to guess the author of a text\n⭕️❌ Tic-tac-toe with an AI algorithm explanation\n🌟 Text generator\n🎁 AI/ML quizzes with prizes\n\nThank you to everyone who came by, asked questions, tested the models and had fun with us. It was a great experience – see you at the next events! 🚀",
        },
        {
          title: "Engineering Job Fair at Cracow University of Technology",
          date: "October 23, 2025",
          location: "Cracow University of Technology",
          images: [
            "/events/targi-pracy-1.jpg",
            "/events/targi-pracy-2.jpg",
          ],
          description: "On Thursday, October 23rd, our MyAI Student Machine Learning Research Club took part in the Engineering Job Fair at Cracow University of Technology! 🚀\n\nDuring the event we had the opportunity to present the projects we are currently working on in our club 🤖💡. We happily talked with students and everyone interested in artificial intelligence and machine learning, sharing our experiences and answering many interesting questions.\n\nThank you to everyone who visited us – your interest and positive energy motivate us to keep going! 💪",
        },
      ],
      awards: [
        {
          title: "Audience Award (ex aequo) – AIRIS project",
          competition: "Annual Faculty Student Research Club Session",
          date: "May 8, 2025",
          images: [
            "/awards/airis-1.jpg",
            "/awards/airis-2.jpg",
            "/awards/airis-3.jpg",
          ],
          description: "After only two months of activity, our club presented one of its first projects – AIRIS – at the annual Faculty Session. The club was represented by Alicja Kowalska and Wiktoria Kosek (2nd year Computer Science students), supervised by Dr Ilona Urbaniak.\n\nAIRIS (Advanced Intelligent Recognition and Intervention System) is a real-time threat detection system based on ESP32-CAM, featuring two-stage face detection and a modified YOLO model for recognizing dangerous objects. It analyzes user behavior, instantly reacts to incidents and can be scaled to various environments – from critical infrastructure to public spaces.\n\n🏆 The girls won the Audience Award (ex aequo) – huge congratulations! Work on improving the system continues.",
        },
      ],
      conferences: [],
      empty: 'Nothing here yet - check back soon!',
    },
    news: {
      title: 'News',
      subtitle: 'Stay up to date with what\'s happening at MyAI',
      readMore: 'Read more',
      items: [
        {
          title: '🚀 The Scientific & Educational Section at MyAI is up and running!',
          date: '2025-12-01',
          image: '/news/sekcja-naukowo-poznawcza.jpg',
          summary: 'Since December, the Scientific & Educational Section has been actively operating in our MyAI Research Club.\n\nIt\'s the perfect place for everyone who wants to start their adventure with AI and machine learning, build solid foundations and in the future join our engineering & research teams 🧠💻\n\nDuring meetings, participants learn about:\n👉 basic ML algorithms (perceptron, logistic regression, SVM, k-NN, Bayes, decision trees)\n👉 regression models and ensemble learning methods\n👉 model quality evaluation, data analysis and dimensionality reduction\n👉 neural networks and their learning mechanisms\n👉 elements of NLP and topics developed according to the group\'s interests 🙂\n\nWe are happy to jointly develop the AI community at Cracow University of Technology and gain new knowledge 🚀\n\nSee you at the meetings! ✨🧠',
        },
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
        awards: 'Osiągnięcia',
        conferences: 'Konferencje',
      },
      projects: [
        {
          title: "AIRIS – Advanced Intelligent Recognition & Interception System",
          image: "/projects/airis.jpg",
          description: "AIRIS to system monitorowania bezpieczeństwa w czasie rzeczywistym, integrujący widzenie komputerowe i sztuczną inteligencję w środowisku wearable. Wykorzystuje trójwarstwową architekturę oraz wieloetapową analizę obrazu: detekcję twarzy (Haar + dlib), śledzenie temporalne i detekcję zagrożeń (zmodyfikowany YOLO).",
          tags: ["Computer Vision", "YOLO", "dlib", "ESP32-CAM", "Wearable AI"],
        },
      ],
      publications: [],
      events: [
        {
          title: "🌍 STARS EU BIP – Francja 2026",
          date: "12–16 stycznia 2026",
          location: "IUT Nord Franche-Comté, Francja",
          images: [
            "/events/stars-eu-1.jpg",
            "/events/stars-eu-2.jpg",
          ],
          description: "Członkinie naszego koła naukowego Alicja Kowalska, Klaudia Karczmarczyk i Wiktoria Kosek wzięły udział w międzynarodowym programie STARS EU \u2013 Blended Intensive Programme (BIP)!\n\nPrzez cały semestr dziewczyny uczestniczyły w zajęciach online w ramach programu, a intensywny tydzień na IUT Nord Franche-Comt\u00e9 (12\u201316 stycznia 2026) był jego zwieńczeniem \u2013 praktycznym podsumowaniem łączącym warsztaty, pracę zespołową i wymianę międzykulturową ze studentami z całej Europy.\n\nGratulujemy i trzymamy kciuki za kolejne międzynarodowe wyjazdy! \ud83d\udc99",
        },
        {
          title: "Warsztaty AI Agents",
          date: "13 stycznia 2026",
          location: "Politechnika Krakowska",
          images: [
            "/events/ai-agents-1.jpg",
          ],
          description: "13 stycznia członek naszego koła, Antoni Jaros, wziął udział w warsztatach AI Agents, zorganizowanych przez u2i we współpracy z Wydziałem Informatyki i Matematyki Politechniki Krakowskiej.\n\nByło bardzo praktycznie 💻\n\nProjektowanie agentów AI, praca z lokalnymi modelami językowymi, prompt engineering i integracja modeli z narzędziami – wszystko w formie hands-on.\n\nWarsztaty poprowadził Iwo Szczepaniak, który opowiadał o realnych, komercyjnych zastosowaniach wieloagentowych systemów AI.\n\nCieszymy się, że członkowie MyAI rozwijają się, łapią doświadczenie i reprezentują nasze koło na wydarzeniach branżowych 🚀\n\nDzięki za zaproszenie i świetne warsztaty!\n\n📸 Zdjęcie: Wydział Informatyki i Matematyki Politechniki Krakowskiej",
        },
        {
          title: "Women in Tech Camp",
          date: "Grudzień 2025",
          location: "Women in Tech Camp",
          images: [
            "/events/witc-1.jpg",
            "/events/witc-2.jpg",
            "/events/witc-3.jpg",
            "/events/witc-4.jpg",
          ],
          description: "W grudniu Wiktoria i Alicja reprezentowały nasze koło podczas Women in Tech Camp 💜\n\nKilka dni pełnych warsztatów, inspirujących spotkań i rozmów z dziewczynami oraz kobietami, które – tak jak my – rozwijają się w IT.\n\nPodczas campu brałyśmy udział w warsztatach m.in. z AI, LLM, Data Science, Machine Learning oraz cloud, a także w sesjach mentoringowych i spotkaniach z role models z branży technologicznej.\n\nByło dużo nauki, motywacji, wymiany doświadczeń i budowania relacji, które – mamy nadzieję – zostaną z nami na długo 💫\n\nWomen in Tech Camp to nie tylko wydarzenie, ale społeczność i ogromna dawka inspiracji 🚀 Cieszymy się, że mogłyśmy tam być i już nie możemy się doczekać, by podzielić się zdobytą wiedzą w naszym kole!",
        },
        {
          title: "Festiwal Uczelni – Małopolska Przyszłości w EXPO Kraków",
          date: "26 listopada 2025",
          location: "EXPO Kraków",
          images: [
            "/events/festiwal-1.jpg",
            "/events/festiwal-2.jpg",
            "/events/festiwal-3.jpg",
            "/events/festiwal-4.jpg",
            "/events/festiwal-5.jpg",
            "/events/festiwal-6.jpg",
            "/events/festiwal-7.jpg",
          ],
          description: "26 listopada nasze Koło Naukowe MyAI pojawiło się na Festiwalu Uczelni – Małopolska Przyszłości w EXPO Kraków i działo się naprawdę sporo!\n\nKażdy, kto odwiedził nasze stoisko, mógł samodzielnie wypróbować nasze interaktywne projekty AI:\n🤖 AIRIS – system bezpieczeństwa osobistego\n🧠 Rysowanie cyfr i działanie sieci neuronowych\n✏️ Quick Draw AI – AI zgadujące, co rysujesz\n😃 Emotion AI – wykrywanie emocji w czasie rzeczywistym\n📝 Human or AI? – quiz, w którym trzeba odgadnąć autora tekstu\n⭕️❌ Kółko i krzyżyk z wyjaśnieniem algorytmu AI\n🌟 Generator tekstów\n🎁 Quizy o AI/ML z nagrodami\n\nDziękujemy wszystkim, którzy do nas podeszli, zadawali pytania, testowali modele i bawili się razem z nami. To było świetne doświadczenie – widzimy się na kolejnych eventach! 🚀",
        },
        {
          title: "Inżynierskie Targi Pracy na Politechnice Krakowskiej",
          date: "23 października 2025",
          location: "Politechnika Krakowska",
          images: [
            "/events/targi-pracy-1.jpg",
            "/events/targi-pracy-2.jpg",
          ],
          description: "W czwartek 23 października nasze Studenckie Koło Naukowe Uczenia Maszynowego MyAI wzięło udział w Inżynierskich Targach Pracy na Politechnice Krakowskiej! 🚀\n\nPodczas wydarzenia mieliśmy okazję zaprezentować projekty, nad którymi aktualnie pracujemy w naszym kole 🤖💡. Z radością rozmawialiśmy ze studentami, a także wszystkimi osobami zainteresowanymi sztuczną inteligencją i uczeniem maszynowym. Chętnie dzieliliśmy się naszymi doświadczeniami i odpowiadaliśmy na wiele ciekawych pytań.\n\nDziękujemy wszystkim, którzy nas odwiedzili – Wasze zainteresowanie i pozytywna energia dodają nam motywacji do dalszego działania! 💪",
        },
      ],
      awards: [
        {
          title: "Nagroda Publiczności (ex aequo) – projekt AIRIS",
          competition: "Wydziałowa Sesja Kół Naukowych",
          date: "8 maja 2025",
          images: [
            "/awards/airis-1.jpg",
            "/awards/airis-2.jpg",
            "/awards/airis-3.jpg",
          ],
          description: "Już po dwóch miesiącach działalności zaprezentowaliśmy jeden z naszych pierwszych projektów – AIRIS – na corocznej Wydziałowej Sesji Kół Naukowych. Koło reprezentowały Alicja Kowalska i Wiktoria Kosek, studentki II roku Informatyki, pod opieką dr Ilony Urbaniak.\n\nAIRIS to inteligentny system wykrywający zagrożenia w czasie rzeczywistym – oparty na ESP32-CAM, z dwustopniową detekcją twarzy i zmodyfikowanym modelem YOLO do rozpoznawania niebezpiecznych obiektów. Analizuje zachowanie użytkownika, błyskawicznie reaguje na incydenty i może być skalowany do różnych środowisk – od infrastruktury krytycznej po przestrzeń publiczną.\n\n🏆 Dziewczyny zdobyły Nagrodę Publiczności (ex aequo) – ogromne gratulacje! Prace nad ulepszeniem systemu trwają.",
        },
      ],
      conferences: [],
      empty: 'Tu jeszcze nic nie ma - wróć wkrótce!',
    },
    news: {
      title: 'Aktualności',
      subtitle: 'Bądź na bieżąco z tym, co dzieje się w MyAI',
      readMore: 'Czytaj więcej',
      items: [
        {
          title: '🚀 Sekcja Naukowo-Poznawcza w SKN Uczenia Maszynowego MyAI już działa!',
          date: '2025-12-01',
          image: '/news/sekcja-naukowo-poznawcza.jpg',
          summary: 'Od grudnia w naszym Kole Naukowym MyAI aktywnie działa Sekcja Naukowo-Poznawcza.\n\nTo idealne miejsce dla wszystkich, którzy chcą zacząć przygodę z AI i uczeniem maszynowym, zdobyć solidne podstawy i w przyszłości dołączyć do naszych zespołów badawczo-inżynieryjnych 🧠💻\n\nPodczas spotkań uczestnicy poznają m.in.:\n👉 podstawowe algorytmy ML (perceptron, regresja logistyczna, SVM, k-NN, Bayes, drzewa decyzyjne)\n👉 modele regresji i metody ensemble learning\n👉 ocenę jakości modeli, analizę danych i redukcję wymiarowości\n👉 sieci neuronowe i mechanizmy ich uczenia\n👉 elementy NLP i tematy rozwijane zgodnie z zainteresowaniami grupy 🙂\n\nCieszymy się, że możemy wspólnie rozwijać społeczność AI na Politechnice Krakowskiej i zdobywać nową wiedzę 🚀\n\nDo zobaczenia na spotkaniach! ✨🧠',
        },
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
