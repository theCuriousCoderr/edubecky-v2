import contactEmail from "./contactEmail";

const faqOptions = {
  generalInformation: [
    {
      id: "1",
      question: "What subjects do you teach?",
      answer:
        "I teach Math's, English, and Science for primary and secondary school students.",
    },
    {
      id: "2",
      question: "What curricula do you cover?",
      answer:
        "Nigerian, British and American curricula but I am open to teach using curriculum from other countries.",
    },
    {
      id: "3",
      question: "Are your classes online or in-person?",
      answer:
        "All classes are strictly virtual. Sessions are held via Zoom or Google Meet, so students can learn from anywhere with a stable internet connection.",
    },
    {
      id: "4",
      question: "What curricula do you cover?",
      answer:
        "Nigerian, British and American curricula but I am open to teach using curriculum from other countries.",
    },
    {
      id: "5",
      question: "How quickly will I see results?",
      answer:
        "Most students see improved confidence in 2-3 weeks. Grades typically improve within 6-8 weeks with 2 to 3 times weekly sessions.",
    },
    {
      id: "6",
      question: "What if my child hates maths?",
      answer: "I use game-based, 1-on-1 lessons to rebuild confidence first.",
    },
    {
      id: "7",
      question: "Do you cover the UK/US/Canadian Curriculum?",
      answer:
        "Yes. Common Core, KS2/KS3, Ontario Curriculum. I'll match your child's school syllabus.",
    },
  ],
  schedulingAndFormat: [
    {
      id: "8",
      question: "How long is each lesson?",
      answer:
        "Standard lessons are 1 hour. We can adjust to 45 minutes or 1.5 hours based on the student's age, attention span, and learning goals.",
    },
    {
      id: "9",
      question: "What ages or grade levels do you accept?",
      answer:
        "I work with students from Primary 1 to SS3 / Year 1 to Year 12 / Grades 1-12. If you're unsure, send your child's current class and syllabus and I'll advise.",
    },
    {
      id: "10",
      question: "Do you offer one-on-one or group classes?",
      answer:
        "Most classes are one-on-one for personalized attention. Small group sessions can be arranged for siblings or students at the same level, upon request.",
    },
    {
      id: "11",
      question: "What do we need for virtual classes?",
      answer:
        "A laptop/tablet, stable internet, webcam, and a quiet space. I share digital worksheets and use an online whiteboard. No special software purchase needed.",
    },
  ],
  feesAndPayment: [
    {
      id: "12",
      question: "What are your rates?",
      answer:
        "Rates depend on the subject, grade level, and number of sessions per week. Please email me with your child's details for a personalized quote.",
    },
    {
      id: "13",
      question: "Do you offer family discounts?",
      answer: `Yes. If 3 children from the same family enroll, you'll receive a discounted rate. Email me via ${contactEmail} to discuss the package that works best for your family.`,
    },
    {
      id: "14",
      question: "How and when do we pay?",
      answer:
        "Payment is made monthly in advance via bank transfer. Details will be included in your invoice after we agree on a schedule.",
    },
  ],
  progressAndCommunication: [
    {
      id: "15",
      question: "How do you track my child's progress?",
      answer:
        "I give regular feedback after lessons, monthly progress reports, and practice tests. We'll set clear goals at the start and review them each term.",
    },
    {
      id: "16",
      question: "Can parents sit in or get updates?",
      answer:
        "Parents are welcome to sit in for the first trial session which is for 15 minutes. After that, I send brief updates via WhatsApp or email so you stay informed without disrupting class.",
    },
    {
      id: "17",
      question: "Do you give homework and mark it?",
      answer:
        "Yes. Homework is tailored to reinforce the lesson. Students submit it before the next class, and we review corrections together during the session.",
    },
  ],
  gettingStarted: [
    {
      id: "18",
      question: "How do we book a trial class?",
      answer:
        "Send an email with your child's name, age, curriculum, subjects needed, and preferred time slots. I'll reply within 24 hours to schedule a free 15-minute free trial session.",
    },
    {
      id: "19",
      question: "What if we miss a class?",
      answer:
        "Missed classes without a 24 hours or at most 8 hours notice would not be redone by the tutor but would be charged. If a notice within the indicated time frames were given then the tutor and client would conclude on a mutually convenient time.",
    },
    {
      id: "20",
      question: "Can you help with exam prep specifically?",
      answer:
        "Yes. I offer targeted revision for 11+ exams, SAT, WAEC, NECO, JAMB, Checkpoint, IGCSE, and other standardized exams, including past paper practice and exam technique.",
    },
  ],
} as const;

const faqTabs = [
  {
    id: "generalInformation",
    label: "General Information",
  },
  {
    id: "schedulingAndFormat",
    label: "Scheduling & Format",
  },
  {
    id: "feesAndPayment",
    label: "Fees & Payment",
  },
  {
    id: "progressAndCommunication",
    label: "Progress & Communication",
  },
  {
    id: "gettingStarted",
    label: "Getting Started",
  },
] as const;

export type IFaqOptions = keyof typeof faqOptions;

export { faqOptions, faqTabs };
