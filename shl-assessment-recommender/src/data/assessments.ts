export interface Assessment {
  id: string;
  name: string;
  url: string;
  remoteTestingSupport: boolean;
  adaptiveIRTSupport: boolean;
  duration: string;
  testType: string;
  description: string;
  skills: string[];
  category: string;
}

export const assessments: Assessment[] = [
  {
    id: "1",
    name: ".NET Framework 4.5",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: true,
    duration: "40 minutes",
    testType: "Technical Skills",
    description: "Assessment for proficiency in .NET Framework 4.5, covering fundamental concepts and practical application.",
    skills: [".NET", "C#", "ASP.NET", "Visual Studio", "Framework 4.5"],
    category: "Technical Skills"
  },
  {
    id: "2",
    name: ".NET MVC (New)",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "45 minutes",
    testType: "Technical Skills",
    description: "Assessment for .NET MVC framework knowledge, including architecture patterns, controllers, views, and models.",
    skills: [".NET", "MVC", "C#", "Web Development", "ASP.NET"],
    category: "Technical Skills"
  },
  {
    id: "3",
    name: ".NET MVVM (New)",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "45 minutes",
    testType: "Technical Skills",
    description: "Assessment for .NET MVVM pattern knowledge, including data binding, commands, and UI separation.",
    skills: [".NET", "MVVM", "C#", "WPF", "XAML", "Data Binding"],
    category: "Technical Skills"
  },
  {
    id: "4",
    name: ".NET WCF (New)",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "45 minutes",
    testType: "Technical Skills",
    description: "Assessment for Windows Communication Foundation (WCF) knowledge, including service contracts and hosting.",
    skills: [".NET", "WCF", "C#", "Service-Oriented Architecture", "SOAP"],
    category: "Technical Skills"
  },
  {
    id: "5",
    name: ".NET WPF (New)",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "45 minutes",
    testType: "Technical Skills",
    description: "Assessment for Windows Presentation Foundation (WPF) knowledge, including XAML and UI controls.",
    skills: [".NET", "WPF", "C#", "XAML", "UI Development"],
    category: "Technical Skills"
  },
  {
    id: "6",
    name: ".NET XAML (New)",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "40 minutes",
    testType: "Technical Skills",
    description: "Assessment for XAML knowledge within .NET frameworks, including layouts, controls, and data binding.",
    skills: [".NET", "XAML", "C#", "UI Development", "WPF", "UWP"],
    category: "Technical Skills"
  },
  {
    id: "7",
    name: "ADO.NET (New)",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "40 minutes",
    testType: "Technical Skills",
    description: "Assessment for ADO.NET knowledge, including data access, connections, and manipulating datasets.",
    skills: [".NET", "ADO.NET", "C#", "Database Connectivity", "SQL"],
    category: "Technical Skills"
  },
  {
    id: "8",
    name: "Global Skills Development Report",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "60 minutes",
    testType: "Personality & Cognitive",
    description: "Comprehensive assessment that evaluates both personality traits and cognitive abilities for personal development.",
    skills: ["Critical Thinking", "Problem Solving", "Communication", "Adaptability", "Leadership Potential"],
    category: "Professional Development"
  },
  {
    id: "9",
    name: "Java Programming",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: true,
    duration: "45 minutes",
    testType: "Technical Skills",
    description: "Assessment for Java programming skills, covering core concepts, object-oriented principles, and practical application.",
    skills: ["Java", "Object-Oriented Programming", "Data Structures", "Algorithms", "Spring Framework"],
    category: "Technical Skills"
  },
  {
    id: "10",
    name: "Java Spring Boot",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: true,
    duration: "50 minutes",
    testType: "Technical Skills",
    description: "Assessment for Spring Boot framework knowledge, including dependency injection, REST APIs, and microservices.",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "Dependency Injection"],
    category: "Technical Skills"
  },
  {
    id: "11",
    name: "JavaScript Programming",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: true,
    duration: "45 minutes",
    testType: "Technical Skills",
    description: "Assessment for JavaScript programming skills, covering ES6+, DOM manipulation, and asynchronous patterns.",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Asynchronous Programming", "Web Development"],
    category: "Technical Skills"
  },
  {
    id: "12",
    name: "Python Programming",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: true,
    duration: "40 minutes",
    testType: "Technical Skills",
    description: "Assessment for Python programming skills, covering syntax, data structures, file operations, and common libraries.",
    skills: ["Python", "Data Structures", "File Operations", "Libraries", "Algorithms"],
    category: "Technical Skills"
  },
  {
    id: "13",
    name: "SQL Database",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: true,
    duration: "35 minutes",
    testType: "Technical Skills",
    description: "Assessment for SQL database skills, including queries, joins, indexes, and database design principles.",
    skills: ["SQL", "Database Design", "Queries", "Joins", "Indexing", "Normalization"],
    category: "Technical Skills"
  },
  {
    id: "14",
    name: "React.js Framework",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "45 minutes",
    testType: "Technical Skills",
    description: "Assessment for React.js framework knowledge, including components, hooks, state management, and rendering.",
    skills: ["JavaScript", "React.js", "Hooks", "Components", "State Management", "Frontend Development"],
    category: "Technical Skills"
  },
  {
    id: "15",
    name: "Business Analyst Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: true,
    duration: "50 minutes",
    testType: "Professional Skills",
    description: "Assessment for business analysis skills, including requirements gathering, stakeholder management, and process modeling.",
    skills: ["Requirements Analysis", "Stakeholder Management", "Process Modeling", "UML", "Data Analysis"],
    category: "Professional Skills"
  },
  {
    id: "16",
    name: "Coding Simulation",
    url: "https://www.shl.com/solutions/products/assessments/skills-and-simulations/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: true,
    duration: "60 minutes",
    testType: "Technical Simulation",
    description: "AI-powered coding simulation that measures accuracy and logical problem-solving in realistic coding environments.",
    skills: ["Coding", "Problem Solving", "Algorithms", "Debugging", "Code Optimization"],
    category: "Technical Simulation"
  },
  {
    id: "17",
    name: "Contact Center Simulation",
    url: "https://www.shl.com/solutions/products/assessments/skills-and-simulations/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "30 minutes",
    testType: "Professional Simulation",
    description: "Job simulation that emulates a real call center environment to assess customer service skills and call handling.",
    skills: ["Customer Service", "Communication", "Problem Resolution", "Multi-tasking", "Emotional Intelligence"],
    category: "Professional Simulation"
  },
  {
    id: "18",
    name: "Language Skills Assessment",
    url: "https://www.shl.com/solutions/products/assessments/skills-and-simulations/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: true,
    duration: "35 minutes",
    testType: "Language Proficiency",
    description: "AI-powered language proficiency assessment for evaluating multilingual workforce capabilities.",
    skills: ["Language Proficiency", "Communication", "Grammar", "Comprehension", "Vocabulary"],
    category: "Language & Communication"
  },
  {
    id: "19",
    name: "Technical Skills Assessment",
    url: "https://www.shl.com/solutions/products/assessments/skills-and-simulations/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "50 minutes",
    testType: "Technical Skills",
    description: "Comprehensive evaluation of technical concepts, knowledge, and application across 200+ IT skills.",
    skills: ["IT Knowledge", "Technical Concepts", "Problem Solving", "Systems Understanding", "Technical Applications"],
    category: "Technical Skills"
  },
  {
    id: "20",
    name: "Business Skills Assessment",
    url: "https://www.shl.com/solutions/products/assessments/skills-and-simulations/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "40 minutes",
    testType: "Professional Skills",
    description: "Assessment for essential business skills and computer literacy needed by enterprise teams today.",
    skills: ["Business Acumen", "Computer Literacy", "Data Analysis", "Business Communication", "Problem Solving"],
    category: "Professional Skills"
  },
  {
    id: "21",
    name: "Cognitive Assessment",
    url: "https://www.shl.com/solutions/products/assessments/cognitive-assessments/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: true,
    duration: "30 minutes",
    testType: "Cognitive Ability",
    description: "Measures critical reasoning abilities and problem-solving skills across verbal, numerical, and abstract domains.",
    skills: ["Critical Thinking", "Problem Solving", "Verbal Reasoning", "Numerical Reasoning", "Abstract Reasoning"],
    category: "Cognitive Ability"
  },
  {
    id: "22",
    name: "Personality Assessment",
    url: "https://www.shl.com/solutions/products/assessments/personality-assessment/",
    remoteTestingSupport: true,
    adaptiveIRTSupport: false,
    duration: "25 minutes",
    testType: "Personality",
    description: "Evaluates key personality traits and behavioral tendencies that influence workplace performance and cultural fit.",
    skills: ["Self-awareness", "Interpersonal Skills", "Adaptability", "Work Style", "Motivational Drivers"],
    category: "Personality & Behavioral"
  }
];

export default assessments;
