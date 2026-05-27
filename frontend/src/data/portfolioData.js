import relatoriosImg from "../assets/relatorios.jpg";
import batalhaNavalImg from "../assets/batalha-naval.jpg";
import redenetwatchImg from "../assets/redenetwatch.jpg";

export const profile = {
  name: "Cássio Leonard Nunes",
  role: "Desenvolvedor Full Stack",
  description:
    "Formado em Sistemas de Informação, com experiência prática em desenvolvimento web, automação de processos e criação de aplicações modernas com React, Node.js, PHP e bancos de dados SQL.",
  github: "https://github.com/CassioNuness",
  linkedin: "https://www.linkedin.com/in/cassio-leonard/",
};

export const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "PHP",
  "PostgreSQL",
  "MySQL",
  "Oracle",
  "Python",
  "Selenium",
  "Git/GitHub",
];

export const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Criação de aplicações modernas, responsivas e otimizadas para performance.",
  },
  {
    title: "Automação",
    description:
      "Automação de processos e desenvolvimento de soluções para produtividade.",
  },
  {
    title: "Banco de Dados",
    description: "Modelagem, integração e gerenciamento de bancos SQL.",
  },
];

export const projects = [
  {
    title: "RedeNetWatch",
    description:
      "Sistema Full Stack de monitoramento e gerenciamento de incidentes de rede com dashboard, filtros, busca dinâmica, CRUD completo e integração com PostgreSQL.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JavaScript", "CSS"],
    image: redenetwatchImg,
    github: "",
    demo: "",
    private: false,
  },
  {
    title: "Sistema de Relatórios Técnicos",
    description:
      "Sistema completo para cadastro, controle e emissão de relatórios técnicos, desenvolvido com frontend, backend e banco de dados.",
    stack: ["React", "Node.js", "PostgreSQL"],
    image: relatoriosImg,
    github: "",
    demo: "",
    private: false,
  },
  {
    title: "Jogo de Batalha Naval",
    description:
      "Projeto com Python e React simulando o clássico jogo de batalha naval, com lógica de jogo e persistência de dados.",
    stack: ["Python", "React", "SQL"],
    image: batalhaNavalImg,
    github: "",
    demo: "",
    private: false,
  },
  {
    title: "Classificação de Informações",
    description:
      "Sistema privado desenvolvido em ambiente corporativo para controle e classificação de dados sensíveis.",
    stack: ["PHP", "JavaScript", "SQL"],
    image: null,
    github: "",
    demo: "",
    private: true,
  },
];

export const experiences = [
  {
    role: "Desenvolvedor Freelancer",
    company: "Sistema de Relatórios Técnicos",
    period: "2026",
    description:
      "Desenvolvimento de sistema web com React, Node.js e PostgreSQL para controle e emissão de relatórios técnicos.",
  },
  {
    role: "Analista de Suporte",
    company: "InfraMinas",
    period: "Atual",
    description:
      "Atuação com suporte técnico, atendimento a usuários, resolução de problemas e apoio em ambientes corporativos.",
  },
  {
    role: "Estagiário em Desenvolvimento / Analista de Sistemas",
    company: "MGS",
    period: "Experiência anterior",
    description:
      "Atuação em projetos internos de sistemas, apoiando desenvolvimento web, modelagem de banco de dados e automação de processos.",
  },
];
