import { BookOpen, CalendarCheck, Gamepad2, Globe2, GraduationCap, HeartPulse, Leaf, MessagesSquare, Rocket, ShoppingCart, Smartphone, Store } from "lucide-react";

// ---------------------------------------------------------------- Projects Data ----------------------------------------------------------------
export const projectsData = [
    {
        icon: <Rocket className="w-10 h-10 text-purple-400" />,
        title: "Offline Smart Task Manager",
        shortDesc: "Cross-platform productivity app with offline support, AI-based task categorization, and WearOS integration.",
        details: `Offline Smart Task Manager is a cross-platform productivity app that functions completely offline. 
It is designed for both mobile and wearable devices, enabling users to manage tasks efficiently using AI-powered categorization, 
smart prioritization, and seamless offline syncing.

Technologies Used:
- LLMs for intelligent task categorization
- WearOS API for wearable device integration
- Room Database (SQLite) for offline storage
- WorkManager for background task scheduling
- ViewModel + LiveData for reactive UI
- Jetpack Navigation for smooth app flow
- Python for backend and data processing
- scikit-learn & TfidfVectorizer for AI and ML models

Key Features:
- Offline-first task management
- Intelligent AI-based categorization of tasks
- Smart prioritization and scheduling
- Seamless syncing across devices when online

My Contribution:
- Developed mobile and wearable interfaces with intuitive navigation
- Integrated AI models for task classification and prioritization
- Implemented offline data storage and background sync using Room and WorkManager
- Ensured responsive UI with Jetpack Navigation and LiveData

Outcome:
- Enabled users to manage tasks efficiently without internet
- Improved productivity through intelligent task recommendations
- Delivered a seamless cross-device offline experience`
    },

    {
        icon: <HeartPulse className="w-10 h-10 text-purple-400" />,
        title: "Healthcare Management System (PHIS)",
        shortDesc: "Comprehensive healthcare platform for managing clients, caregivers, compliance, and operations.",
        details: `PHIS (Personalized Healthcare Information System) is a robust healthcare platform designed to streamline client-caregiver management and ensure compliance. 
It facilitates scheduling, secure communication, credential tracking, and real-time status monitoring for clients and caregivers in a role-based environment.

Technologies Used:
- LLMs for intelligent care recommendations
- React.js for frontend development
- Django Rest Framework for API backend
- Tailwind CSS for responsive UI
- SQL for relational data management
- Figma for UI/UX design prototyping

Key Features:
- Centralized tracking of client credentials, conditions, and services
- Caregiver availability and assignment management
- Scheduling and follow-up tracking with actionable notifications
- Compliance alerts and documentation oversight
- Role-based access control for security
- Integrated inquiry and communication modules

My Contribution:
- Built frontend UI using React.js and Tailwind CSS
- Developed backend APIs with Django Rest Framework
- Implemented role-based access and security features
- Integrated real-time status tracking and communication modules
- Collaborated on Figma designs and translated them into functional components

Outcome:
- Enhanced operational efficiency for healthcare staff
- Improved caregiver-client assignment accuracy
- Streamlined compliance tracking and documentation
- Delivered a secure and user-friendly platform for healthcare management`,
        github: "https://github.com/yourusername/healthcare-management",
        demo: "https://your-demo-link.com"
    }
    ,
    {
        icon: <MessagesSquare className="w-10 h-10 text-purple-400" />,
        title: "UChat Global",
        shortDesc: "A multi-channel communication platform for bulk messaging across SMS, Email, WhatsApp, MMS, and Fax.",
        details: `UChat Global is a unified messaging platform designed to simplify large-scale communication across multiple channels. 
It allows users to send messages via SMS, Email, WhatsApp, MMS, and Fax in formats including text, PDF, Word, and images, all from a single dashboard.

Technologies Used:
- React.js for frontend interface
- Python for backend services
- Django Rest Framework for API management
- PostgreSQL for database storage
- Tailwind CSS for responsive UI
- Chart.js for analytics and reporting
- Figma for UI/UX design

Key Features:
- Bulk messaging across multiple communication channels
- Multi-format content support: text, PDF, Word, images
- Centralized dashboard for monitoring and control
- Cost tracking and real-time delivery reporting
- Role-based access and permission management
- Exportable performance analytics and reports

My Contribution:
- Developed responsive frontend with React.js and Tailwind CSS
- Built backend APIs using Django Rest Framework
- Implemented PostgreSQL database schema for message tracking
- Integrated Chart.js for real-time analytics
- Ensured secure role-based access control and user management

Outcome:
- Streamlined multi-channel communication for organizations
- Enhanced delivery reliability and real-time status tracking
- Provided actionable insights through built-in analytics`,
        github: "https://github.com/yourusername/uchat-global",
        demo: "https://your-demo-link.com"
    }
    ,
    {
        icon: <Globe2 className="w-10 h-10 text-purple-400" />,
        title: "PCSIONWEB",
        shortDesc: "Full-stack IT consulting and outsourcing platform with global delivery support.",
        details: `PCSIONWEB is a full-stack IT consulting and staffing platform where I contributed to building scalable solutions for workforce management, outsourcing, and medical billing. The platform delivers tailored IT and workforce solutions for clients across industries.

Technologies Used:
- React.js, Tailwind CSS, Framer Motion, GSAP (Frontend UI/UX)
- Node.js, Express.js, Knex.js (Backend APIs & DB queries)
- PostgreSQL (Database)
- Figma (Design Prototyping)

Key Features:
- End-to-end consulting & staffing management
- Workflow automation and help-desk support
- Custom software and mobile app solutions
- IT training and upskilling modules
- Medical billing & compliance support
- Scalable engagement models with US & India delivery

My Contribution:
- Developed responsive and animated UI with React.js, Tailwind, GSAP, and Framer Motion
- Designed and implemented RESTful APIs using Express.js and Knex.js
- Built relational database models in PostgreSQL for consulting and staffing workflows
- Integrated global delivery support and compliance tracking
- Translated Figma designs into functional, high-performance components

Outcome:
- Delivered a cost-effective, scalable IT outsourcing solution
- Improved project management efficiency and workforce tracking
- Enhanced user experience with smooth animations and responsive design`
    }
    ,
    {
        icon: <Globe2 className="w-10 h-10 text-purple-400" />,
        title: "Param.us",
        shortDesc: "Enterprise IT consulting and digital solutions platform with global delivery model.",
        details: `Param.us is a global IT consulting and services platform where I contributed to building secure, scalable, and high-performance web applications for enterprise clients across finance, telecom, pharma, and healthcare sectors. The project involved both frontend innovation and scalable backend integrations.

Technologies Used:
- React.js, Tailwind CSS, GSAP, Framer Motion (Frontend development & UI animations)
- Figma (Collaborative design to component workflow)
- Modern backend stack (Laravel, Node.js, Vue.js integration for scalability)

Key Features:
- Enterprise-grade web & mobile application development
- IT consulting and digital transformation services
- Staffing and managed services modules
- Agile-based project management with scalable architectures
- Domain expertise integration: finance, insurance, telecom, pharma

My Contribution:
- Built responsive, animated UI components using React.js, Tailwind CSS, GSAP, and Framer Motion
- Translated Figma designs into reusable, modular frontend components
- Collaborated on global delivery workflows and agile processes
- Integrated enterprise-grade features with a scalable architecture
- Worked on frontend optimization for performance and cross-browser reliability

Outcome:
- Delivered high-quality, secure enterprise applications
- Improved digital transformation capabilities for enterprise clients
- Enhanced user engagement with interactive and smooth UI animations
- Strengthened Param’s global delivery model across US, Canada, and India`
    },
    {
        icon: <Gamepad2 className="w-10 h-10 text-purple-400" />,
        title: "Gaming Web Application",
        shortDesc: "A full-stack platform for managing gaming cafés with slot booking, loyalty points, and multi-outlet control.",
        details: `The Gaming Web Application is a centralized platform I worked on to modernize gaming café operations. It provides users with real-time PC/console slot booking, loyalty rewards, and account management, while enabling admins and merchants to control pricing, bookings, and outlet performance through a powerful backend system.

Technologies Used:
- Next.js, Tailwind CSS, GSAP (Frontend development & animations)
- Node.js, Express.js, Knex.js, qtpy (Backend services & database queries)
- Figma (UI/UX collaboration and prototyping)

Key Features:
- Real-time PC & console slot booking system
- Customer loyalty program with points & rewards
- Role-based access for merchants, staff, and admins
- Multi-outlet & franchise management
- Admin panel for pricing, service settings, and reporting
- Secure payment handling & notification system

My Contribution:
- Built interactive and responsive booking flows using Next.js & Tailwind CSS
- Implemented smooth UI animations with GSAP for enhanced user engagement
- Collaborated on backend APIs with Node.js, Express.js, and Knex.js
- Designed modular, reusable components aligned with Figma prototypes
- Optimized database queries and ensured scalability for multi-outlet operations
- Integrated real-time availability and secure payment features

Outcome:
- Streamlined slot booking and outlet management for gaming cafés
- Improved customer experience with loyalty rewards & real-time availability
- Enabled centralized control for merchants and admins across multiple outlets
- Delivered a secure, scalable solution supporting franchise growth`
    },
    {
        icon: <Smartphone className="w-10 h-10 text-purple-400" />,
        title: "Gaming Mobile Application",
        shortDesc: "A React Native mobile app for booking gaming slots, tracking loyalty points, and managing multi-outlet cafés.",
        details: `The Gaming Mobile Application is a cross-platform solution I developed to extend gaming café operations to mobile devices. Customers can seamlessly book PC/console slots, manage profiles, and earn loyalty points, while merchants and admins gain centralized tools for outlet, staff, and customer management.

Technologies Used:
- React Native (Cross-platform mobile development for iOS & Android)
- Tailored UI/UX from Figma designs
- Integration with backend APIs (Node.js, Express.js, Knex.js)

Key Features:
- Slot booking for PC & console gaming
- Customer loyalty and rewards system
- Merchant and staff management dashboard
- Multi-outlet and franchise performance tracking
- Real-time availability calendar with booking history
- Secure payments and in-app notifications
- Admin access to pricing, users, and scheduling

My Contribution:
- Built the mobile booking flow with React Native components
- Implemented loyalty points and customer profile management
- Integrated backend APIs for bookings, payments, and outlet control
- Converted Figma prototypes into pixel-perfect, responsive UI
- Designed reusable components for scalable cross-platform development
- Ensured smooth state management and secure payment workflows

Outcome:
- Enabled customers to access bookings and loyalty rewards directly from mobile
- Streamlined management for merchants and admins with real-time insights
- Delivered a unified, scalable mobile experience for gaming cafés
- Increased customer engagement and retention through rewards & notifications`
    },
    {
        icon: <GraduationCap className="w-10 h-10 text-purple-500" />,
        title: "Param Academy: Your Gateway to Success",
        shortDesc: "An educational management platform to streamline instructor, classroom, and student operations while preparing learners for real-world careers.",
        details: `Param Academy is a comprehensive education management system I developed to modernize institutional operations and enhance learning delivery. It provides tools for instructors, administrators, and students to manage courses, classrooms, and academic processes efficiently.

Technologies Used:
- React.js (frontend with dynamic, responsive UI)
- Node.js + Express.js (backend APIs)
- MongoDB + Mongoose (database & ORM)
- Tailwind CSS + GSAP (styling and animations)
- Figma (UI/UX design collaboration)

Key Features:
- Instructor management with role-based access control
- Classroom, module, and stream organization
- Course material uploads and assignment management
- Student attendance tracking across sessions
- Fee management with payment history & records
- Mock interviews for job readiness
- Resume and LinkedIn profile-building support

My Contribution:
- Designed and implemented the full-stack architecture (React + Node + MongoDB)
- Built dashboards for instructors, students, and admins with role-based access
- Developed APIs for classroom, fee, and attendance management
- Integrated GSAP animations for an engaging UI
- Translated Figma designs into pixel-perfect responsive layouts
- Implemented secure data handling and authentication mechanisms

Outcome:
- Simplified daily operations for educational institutions
- Improved transparency in student attendance and fee tracking
- Enhanced student career preparation with mock interviews and profile support
- Delivered a scalable platform supporting instructors, students, and admins seamlessly`
    },
    {
        icon: <BookOpen className="w-10 h-10 text-purple-500" />,
        title: "Education Mobile Application",
        shortDesc: "A secure and scalable mobile-first platform unifying online learning and career development with real-time tracking and job discovery.",
        details: `Digital Education is a cross-platform mobile app I developed to merge education with career growth. Students can enroll in courses, track progress, and discover jobs, while administrators manage course content and job listings through a dedicated dashboard.

Technologies Used:
- React Native (mobile-first cross-platform development)
- Node.js + Express.js (backend APIs)
- PostgreSQL + Sequelize ORM (relational database management)
- Redux Toolkit (state management)
- React Navigation (stack & tab navigators)
- Axios with Interceptors (API integration & error handling)
- Firebase + JWT Authentication (secure login & access control)
- Chart.js (data visualization)

Key Features:
- Secure sign-up/login with JWT & Firebase authentication
- Student dashboard with enrolled courses and job recommendations
- Course enrollment and progress tracking
- Job search with advanced filtering & preferences
- Resume upload and career profile management
- Admin panel for course and job listing management
- Real-time notifications for jobs and course updates
- Role-based access control (RBAC) for users and admins
- Graphical dashboards & progress charts

My Contribution:
- Designed and implemented the full mobile app architecture (frontend + backend)
- Built authentication flow with Firebase and JWT
- Developed Redux-based state management with Axios interceptors
- Integrated structured navigation (stack & tab navigators) for smooth UX
- Created dashboards with Chart.js for student progress & admin insights
- Implemented secure APIs for course/job management and tracking
- Optimized app for performance and scalability across platforms

Outcome:
- Provided students with a unified platform for learning and job discovery
- Enabled real-time tracking of courses and career opportunities
- Delivered an intuitive, secure, and scalable mobile application
- Improved institutional efficiency by centralizing course and job management`
    },
    {
        icon: <GraduationCap className="w-10 h-10 text-purple-500" />,
        title: "Graduation Mobile Application",
        shortDesc: "GraduatePlus – a cross-platform mobile app integrating academics, events, and career development with résumé scoring and real-time tracking.",
        details: `GraduatePlus is a mobile-first platform I built to unify academic learning, event participation, and career development into one seamless experience. Students can enroll in courses, register for events, track progress, and get résumé feedback, while administrators manage users, events, and content from a centralized dashboard.

Technologies Used:
- React Native (cross-platform mobile app for Android & iOS)
- Node.js + Express.js (backend APIs)
- PostgreSQL + Sequelize ORM (database management)
- Redux Toolkit (state management)
- JWT Authentication with RBAC (secure user access control)

Key Features:
- Cross-platform support for Android & iOS
- Student course enrollment, quizzes, and progress tracking
- Event registration with gamified badge rewards
- CV scorer with résumé evaluation feedback
- Job listings with advanced search and filtering
- Admin dashboard for course, event, and content management
- Role-based authentication using JWT
- Real-time notifications for course updates and events

My Contribution:
- Architected and developed the complete mobile application (frontend + backend)
- Implemented JWT authentication with RBAC for secure access
- Built Redux Toolkit integration for scalable state management
- Developed APIs for course enrollment, events, and résumé scoring
- Designed notification system for real-time engagement
- Integrated PostgreSQL with Sequelize ORM for scalable backend

Outcome:
- Provided students with a single platform for learning, events, and career tools
- Enhanced engagement through gamified badges and event participation
- Improved employability with résumé evaluation and job recommendations
- Delivered a scalable and secure mobile-first solution accessible across platforms`
    },
    {
        icon: <Store className="w-10 h-10 text-purple-500" />,
        title: "Builder Lobby",
        shortDesc: "A marketplace for startups and businesses where entrepreneurs can list, bid, negotiate, and close deals with secure messaging and moderation.",
        details: `Builder Lobby is a marketplace platform designed for entrepreneurs, investors, and startups to list, bid, and acquire businesses securely. It streamlines startup exits and investments by combining transparent bidding, real-time messaging, and verified profiles.  

Technologies Used:
- React.js + Tailwind CSS (responsive frontend)
- Node.js + Express.js (backend APIs)
- PostgreSQL + Knex.js (database and queries)
- Figma (UI/UX design prototyping)

Key Features:
- List startups/business ventures with detailed information and documents
- Real-time bidding system with offers and negotiations
- Buyer-seller private messaging for secure discussions
- Role-based dashboards (buyers, sellers, and admin)
- Admin moderation & approval for business listings
- Bidding history, notifications, and transaction tracking
- Secure profile verification and document handling

My Contribution:
- Developed the end-to-end platform (frontend + backend)
- Implemented real-time bidding with offer history and notifications
- Built buyer-seller chat system for secure communication
- Integrated Knex.js for efficient PostgreSQL queries
- Designed and styled responsive UI with Tailwind CSS
- Implemented role-based dashboards and admin moderation flow
- Ensured data security for document handling and profile verification

Outcome:
- Provided a transparent and competitive environment for startup transactions
- Enabled entrepreneurs to exit businesses while giving investors scalable opportunities
- Increased trust with verified profiles, admin moderation, and secure document handling
- Built a scalable marketplace platform connecting startups and investors`
    },
    {
        icon: <HeartPulse className="w-10 h-10 text-purple-500" />,
        title: "Param Care",
        shortDesc: "A holistic wellness and eCommerce platform offering Ayurvedic products, wellness plans, educational blogs, and wholesale enrollment.",
        details: `Param Care Services is a wellness and eCommerce platform built under the Param Group of Companies, NJ, USA. It integrates Ayurvedic product retail, wellness resources, and wholesale enrollment to promote holistic living by addressing physical, mental, and spiritual health.

Technologies Used:
- React.js + Vite + Tailwind CSS (modern, responsive frontend)
- Node.js + Express.js (REST API backend)
- PostgreSQL + Knex.js (secure and scalable database)
- Figma (UI/UX design prototyping)

Key Features:
- E-commerce for herbal and Ayurvedic products with secure checkout
- Product browsing with images, descriptions, and categories
- Role-based admin panel for admins and wholesalers
- Wellness blog section for educational health content
- Wholesale partner enrollment and onboarding
- Contact form for direct inquiries
- Mobile-responsive UI for accessibility across devices

My Contribution:
- Built the full-stack application (frontend + backend)
- Developed cart, checkout, and product catalog modules
- Implemented role-based admin panel (admin, wholesaler)
- Integrated Knex.js with PostgreSQL for efficient DB queries
- Designed and developed responsive UI with Tailwind CSS
- Built wellness blog and contact form modules
- Optimized performance with React + Vite setup

Outcome:
- Successfully launched a holistic wellness platform for Ayurvedic products
- Enabled both retail and wholesale eCommerce channels
- Increased user engagement with blogs, wellness resources, and direct inquiries
- Strengthened brand presence for Param Group through modern, accessible digital experience`
    },
    {
        icon: <Leaf className="w-10 h-10 text-purple-500" />,
        title: "Param Wellness",
        shortDesc: "A holistic healthcare and wellness platform offering Ayurvedic therapies, massage, yoga, integrative treatments, eCommerce, and educational resources.",
        details: `Param Wellness is a wellness and healthcare platform based in Edison, NJ, providing authentic Ayurvedic therapies, massage, yoga, integrative health, and nature cure services. The platform delivers personalized wellness plans and digital access to services, empowering clients to refresh, restore, and rejuvenate.

Technologies Used:
- React.js + Vite + Tailwind CSS (responsive and modern frontend)
- Node.js + Express.js (backend APIs)
- PostgreSQL (secure and scalable database)
- Figma (UI/UX prototyping)

Key Features:
- Ayurvedic therapies: Panchakarma, Shirodhara, Basti, Nasya, Swedana, Udwarthanam
- Massage therapies: Abhyanga, Kati Basti, reflexology
- Yoga classes for mindfulness, stress relief, and hormonal balance
- Integrative therapies: Reiki, acupuncture, detox programs, energy scanning
- Nature cure options and corporate wellness programs
- Online shop with Ayurveda products and special deals
- Webinars and blog content for health education
- Academy & research collaborations with practitioners
- Digital appointment requests and calendar scheduling
- Client testimonials showcasing experiences

My Contribution:
- Developed the full-stack platform (frontend + backend)
- Implemented digital booking system and calendar integration
- Designed responsive UI with Tailwind CSS and Vite
- Built secure backend APIs with Node.js + Express.js
- Integrated PostgreSQL for structured data management
- Added eCommerce module for Ayurveda products
- Created blog and webinar modules to educate and engage clients

Outcome:
- Enabled clients to access holistic care and wellness services online
- Expanded reach via corporate wellness and educational programs
- Improved client engagement with digital booking, blog content, and testimonials
- Delivered a scalable and secure wellness platform combining traditional and integrative practices`
    },

    {
        icon: <Smartphone className="w-10 h-10 text-purple-500" />,
        title: "Param Wellness Mobile App",
        shortDesc: "A holistic health mobile app using Ayurvedic principles to provide personalized wellness recommendations, quizzes, treatments, and product suggestions.",
        details: `Param Wellness Mobile App is a React Native application that empowers users to understand their body constitution (Prakriti) and imbalances (Vikriti) via quizzes. Based on these insights, it offers personalized diets, lifestyle routines, Ayurvedic products, and treatment suggestions. The app also includes appointment booking, product purchasing, activity tracking, and comprehensive quiz history.

Technologies Used:
- React Native (cross-platform mobile app)
- Node.js + Express.js (backend APIs)
- PostgreSQL (database management)
- CSS + Figma (UI/UX design prototyping)

Key Features:
- Detailed Prakriti (Vata, Pitta, Kapha) and Vikriti quizzes
- Personalized diet, lifestyle, and product recommendations
- Book Ayurvedic treatments directly via the app
- Purchase curated Ayurvedic products
- Track quiz responses and maintain quiz history
- Log daily wellness activities (yoga, meditation, sleep)
- Notifications and reminders to maintain wellness routine
- View treatment history and upcoming appointments
- Clean, intuitive interface promoting holistic wellness

My Contribution:
- Developed the full-stack mobile application (React Native frontend + Node.js backend)
- Implemented quiz logic and personalized recommendation engine
- Built appointment booking and eCommerce modules
- Integrated PostgreSQL for structured user data and activity tracking
- Designed a responsive and intuitive mobile UI using Figma and CSS
- Added notifications and reminders for user engagement
- Ensured secure data handling and smooth performance across Android & iOS

Outcome:
- Provided users with a personalized, all-in-one Ayurvedic wellness experience
- Enabled consistent health tracking and preventive care
- Simplified access to treatments, products, and lifestyle guidance
- Combined traditional Ayurvedic knowledge with modern mobile UX for holistic wellness`
    },
    {
        icon: <HeartPulse className="w-10 h-10 text-purple-500" />,
        title: "Param Wellness",
        shortDesc: "A holistic healthcare and wellness platform offering Ayurvedic therapies, yoga, integrative health, and personalized wellness plans.",
        details: `Param Wellness is a wellness platform based in Edison, NJ, providing Ayurvedic therapies, massage, yoga, integrative health, and nature cure services. The platform allows clients to access personalized wellness plans, book therapies, and explore educational resources.

Technologies Used:
- React.js + Vite + Tailwind CSS (Frontend)
- Node.js + Express.js + PostgreSQL (Backend)
- Figma (Design)

Key Features:
- Diverse Ayurvedic treatments: Panchakarma, Shirodhara, Basti, Nasya, Swedana, Udwarthanam
- Massage therapies including Abhyanga, Kati Basti, reflexology
- Yoga classes for stress relief, hormonal balance, mindfulness
- Integrative therapies: Reiki, acupuncture, detox programs, energy scanning
- Nature cure options and corporate wellness services
- Online shop with Ayurveda-related products and applied deals
- Webinars and informative blog content
- Academy & research collaborations
- Digital appointment requests and calendar scheduling
- Client testimonials showcasing service experience

My Contribution:
- Developed responsive web interface with React.js and Tailwind CSS
- Integrated appointment booking and product shop modules
- Implemented backend APIs for services, treatments, and user management
- Coordinated with design team to translate Figma designs into functional UI
- Built admin features for corporate wellness, blog, and testimonial management

Outcome:
- Delivered a comprehensive, accessible wellness platform
- Enhanced user engagement through booking, e-commerce, and educational content
- Provided scalable architecture supporting multiple services and wellness programs`
    },
    {
        icon: <Smartphone className="w-10 h-10 text-purple-500" />,
        title: "Param Wellness Mobile App",
        shortDesc: "Mobile application for Ayurvedic wellness tracking, personalized diet & lifestyle suggestions, treatment booking, and product purchase.",
        details: `Param Wellness Mobile App is a holistic health app rooted in Ayurvedic principles. Users can identify their body constitution (Prakriti) and imbalances (Vikriti) via quizzes, receive personalized recommendations, book treatments, purchase products, and track wellness activities.

Technologies Used:
- React Native + CSS (Frontend Mobile UI)
- Node.js + Express.js + PostgreSQL (Backend)
- Figma (Design)

Key Features:
- Prakriti and Vikriti quizzes for personalized assessment
- Customized food, lifestyle, and Ayurvedic product suggestions
- Booking Ayurvedic treatments via mobile
- Product purchase and cart management
- Activity tracking: yoga, meditation, sleep
- Notifications and reminders for wellness routines
- View treatment history and upcoming appointments
- Clean, intuitive UI for holistic content

My Contribution:
- Developed cross-platform mobile app using React Native
- Integrated backend APIs for quizzes, treatments, products, and activity logs
- Implemented secure user login and data management
- Designed interactive, intuitive mobile screens with Figma and React Native components
- Enabled notifications and reminders for user engagement

Outcome:
- Delivered an all-in-one wellness mobile solution
- Empowered users to manage health proactively with Ayurveda
- Improved engagement and habit tracking through personalized content and reminders`
    },
    {
        icon: <CalendarCheck className="w-10 h-10 text-purple-400" />,
        title: "Restaurant Event Booking Website",
        shortDesc: "Modern platform for managing venue bookings, dining reservations, online orders, and event inquiries.",
        details: `Restaurant Event Booking Website is a user-focused platform that streamlines venue bookings, dining reservations, and event management. It allows admins to manage bookings, menus, and customer feedback, while customers can make reservations, place online orders, and book event services.

Technologies Used:
- WordPress (CMS & Website)
- Cloudinary (Media Uploads & Gallery)
- JWT Authentication (Secure Login)

Key Features:
- Venue and dining reservation system
- Online food and beverage ordering
- Role-based access for Admin
- Event booking and inquiry management
- Dynamic digital menu system
- Custom event service selection (DJ, decor, catering)
- Customer feedback and review management
- Mobile-responsive interface
- Live table availability display and status updates

My Contribution:
- Developed dynamic menu and booking modules
- Integrated event booking and inquiry workflow
- Ensured secure login and session management using JWT
- Implemented responsive and modern UI for mobile and desktop
- Managed media uploads and gallery using Cloudinary

Outcome:
- Delivered a seamless platform for dining and event bookings
- Simplified admin operations with role-based access
- Enhanced guest experience with real-time updates and online services`
    }


];