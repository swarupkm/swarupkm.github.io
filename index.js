const baseProfileData = {
  name: 'Swarup Mahapatra',
  role: 'Lead Software Engineer',
  contact: {
    location: 'Bengaluru, Karnataka, India',
    email: 'swarupmahapatra1@gmail.com',
    phone: '+91-9742777306',
    links: [
      {
        icon: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/swarupmahapatra1/'
      },
      {
        icon: 'github',
        label: 'GitHub',
        url: 'https://github.com/swarupkm'
      }
    ]
  },
  education: {
    degree: 'Bachelor of Technology (BTech) in Electronics and Communication Engineering',
    institute: 'National Institute of Technology, Rourkela',
    duration: 'July 2009 - May 2013',
    cgpa: '8.20'
  },
  skills: [
    {
      category: 'Languages',
      items: ['Java', 'JavaScript', 'Ruby', 'Python']
    },
    {
      category: 'Databases',
      items: ['Postgres', 'DynamoDB']
    },
    {
      category: 'Cloud Technologies',
      items: ['Amazon Web Services']
    },
    {
      category: 'CI/CD',
      items: ['Jenkins', 'GitHub Actions', 'GitLab', 'Git']
    },
    {
      category: 'Infrastructure',
      items: ['Terraform', 'AWS CDK', 'Ansible', 'Docker']
    },
    {
      category: 'Practices',
      items: ['DDD', 'TDD', 'OOP', 'Functional Programming', 'System Design', 'Distributed Systems', 'Agile', 'Scrum']
    },
    {
      category: 'AI Tools',
      items: ['Prompt Engineering', 'RAG', 'Vector Databases', 'Spec Driven Development']
    }
  ],
  summary: 'Engineering leader with nearly 13 years of experience defining technical strategy, shaping architecture, and delivering resilient distributed systems across fintech, healthcare, edtech, and enterprise software. Leads ambiguous initiatives from discovery through production, aligns product and engineering decisions across teams, and builds cloud-native platforms that improve operational resilience, delivery velocity, and software quality.',
  experiences: [
    {
      title: 'Lead Software Engineer',
      company: 'Everest Engineering',
      logo: 'https://www.google.com/s2/favicons?domain=everest.engineering&sz=128',
      location: 'Bengaluru, India',
      duration: 'June 2022 - Present',
      summary: [
        'Set technical direction across multiple client engagements, guiding teams of 3-6 engineers from problem framing and architectural discovery through production delivery.',
        'Influenced product and business stakeholders on technical strategy, architecture trade-offs, sequencing, and investment decisions in complex, high-ambiguity environments.',
        'Established shared engineering practices for observability, distributed tracing, cloud-native reliability, Domain-Driven Design, clean architecture, and delivery quality.',
        'Mentored engineers and raised team capability through system design reviews, architectural guidance, and hands-on coaching across client programs.'
      ],
      projects: [
        {
          name: 'Clinical Research Data Platform',
          client: 'Confidential healthcare client',
          duration: 'October 2025 - Present',
          techStack: ['Python', 'AWS S3', 'AWS Lambda', 'AWS DynamoDB', 'AWS Step Functions', 'AWS Glue', 'Claude Sonnet 4.6'],
          summary: [
            'Led a team of seven engineers and owned the technical strategy, architecture, and delivery roadmap for a clinical research data platform.',
            'Defined ingestion and preprocessing architecture to transform raw clinical study data from multiple sources into a standardized schema in an AWS data lake.',
            'Generated data-mapping specifications with Claude Sonnet 4.6 and built Python and AWS workflows using S3, Lambda, DynamoDB, Step Functions, and Glue to support allergy-study analysis across ~10 studies per year and ~10,000 participants per study.',
            'Achieved ~80% parsing accuracy and reduced manual review effort by ~90% through automated classification of consent and sensitive information.'
          ]
        },
        {
          name: 'Learning Management Platform',
          client: 'Confidential Australia-based edtech client',
          duration: 'March 2025 - July 2025',
          techStack: ['TypeScript', 'NestJS', 'Next.js', 'Postgres', 'AWS', 'Terraform', 'Sanity CMS'],
          summary: [
            'Led discovery, architectural definition, and end-to-end product delivery from inception for a custom learning management platform supporting personalized learning pathways.',
            'Set technical direction and coordinated a team of three engineers across frontend, backend, and infrastructure delivery.',
            'Built the backend with NestJS and Postgres, the frontend with Next.js, and provisioned AWS services with Terraform while using Sanity CMS for course content management.'
          ]
        },
        {
          name: 'Ethical Investment Platform',
          client: 'Confidential Australia-based fintech client',
          duration: 'December 2023 - October 2024',
          techStack: ['Node.js', 'DynamoDB', 'MongoDB', 'AWS Lambda', 'S3', 'API Gateway', 'SNS', 'SQS', 'Serverless'],
          summary: [
            'Owned product and technical delivery from inception through beta launch for an ethical investing and shareholder advocacy platform.',
            'Defined the architecture for a serverless trading platform using AWS Lambda, S3, API Gateway, SNS, SQS, DynamoDB, and MongoDB to support campaign pledges and progress tracking.',
            'Directed vendor communication and integrations across KYC, trading, and fund management platforms, applying Domain-Driven Design to establish scalable bounded contexts and service boundaries.'
          ]
        },
        {
          name: 'Education Platform Modernization',
          client: 'Confidential Australia-based edtech client',
          duration: 'July 2022 - November 2023',
          techStack: ['Node.js', 'Postgres', 'REST APIs', 'CI/CD', 'Trunk-Based Development', 'DDD'],
          summary: [
            'Maintained and upgraded public-facing APIs by introducing RESTful patterns and practices across legacy services.',
            'Drove adoption of Clean Architecture in selected legacy projects and redesigned the CI and deployment process, reducing deployment time from hours to minutes through Trunk-Based Development.',
            'Managed a team of five engineers and established a stronger engineering practice through Domain-Driven Design, architectural principles, and structured technical coaching.'
          ]
        }
      ],
      techStack: ['Python', 'TypeScript', 'NodeJS', 'Postgres', 'DynamoDB', 'Serverless', 'Docker', 'React', 'AWS', 'DDD']
    },
    {
      title: 'Senior Software Engineer',
      company: 'SOCASH PTE LTD (acquired by Nium)',
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQFGuyC-6U8bhg/company-logo_200_200/company-logo_200_200/0/1630621081343/socash_pte_ltd_logo?e=2147483647&v=beta&t=cAmLoQn2NQGc8mvmMhXwTFgmYJAFGJQ5ZzvjwXfhsuQ',
      companyUrl: 'https://sg.linkedin.com/company/socash',
      location: 'Bengaluru, India',
      duration: 'November 2018 - May 2022',
      summary: [
        'Shaped the architecture and technical roadmap for a fintech payment platform, balancing reliability, throughput, extensibility, and operational resilience in a high-stakes transaction environment.',
        'Led integrations with banks and retail partners, expanding the merchant POS ecosystem through secure, partner-facing APIs across a multi-country payment footprint.',
        'Built and operated a payment gateway integrating 15 banks and vendors, supporting ~10,000 transactions per day for ~500 merchants across 4 countries.',
        'Re-architected a Node.js monolith into modular Java payment services, establishing clearer service boundaries, ownership models, and a platform-oriented design for long-term scalability.',
        'Automated provider failover and configuration management to detect downstream outages and switch payment routes, reducing manual intervention during partner disruptions and improving resilience.',
        'Built and scaled quality engineering practices with performance testing, monitoring, and observability for critical payment APIs, increasing system stability and operational visibility.'
      ],
      techStack: ['Java', 'NodeJS', 'Ruby (Test Automation)', 'AWS', 'Terraform', 'Postgres', 'Redis', 'RethinkDB (NoSQL DB)', 'DDD', 'TDD', 'CI using Jenkins']
    },
    {
      title: 'Software Engineer',
      company: 'Oracle',
      logo: 'https://www.google.com/s2/favicons?domain=oracle.com&sz=128',
      location: 'Bengaluru, India',
      duration: 'March 2017 - October 2018',
      summary: [
        'Continued working on the Aconex product within Oracle for several months following the acquisition, supporting a smooth product and engineering transition.',
        'Designed and delivered backend capabilities for document review workflows of Aconex product, with direct ownership of customer-facing service behavior.',
        'Operated and deployed distributed microservices across regions, prioritizing availability, resilience, and predictable releases.',
        'Built REST APIs for real-time PDF review collaboration and document annotation workflows.',
        'Established automated UI testing infrastructure that improved regression coverage for core review features.'
      ],
      techStack: ['Java', 'Ruby (Test Automation)', 'AWS', 'Terraform', 'Postgres', 'MSSQL', 'DDD', 'TDD', 'CI using Jenkins']
    },
    {
      title: 'Software Consultant',
      company: 'Thoughtworks',
      logo: 'https://www.google.com/s2/favicons?domain=thoughtworks.com&sz=128',
      location: 'Bengaluru, India',
      duration: 'November 2015 - February 2017',
      summary: [
        'Delivered software for Bahmni, an open-source healthcare workflow platform, working across product, engineering, and implementation teams.',
        'Built API automation and performance testing capabilities that strengthened release quality and system feedback loops.',
        'Supported implementations for Médecins Sans Frontières (MSF), contributing to reliable workflows in mission-critical healthcare settings.'
      ],
      techStack: ['Selenium', 'Ruby (Test Automation)', 'Capybara', 'Gatling']
    },
    {
      title: 'Data Specialist',
      company: 'IBM',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_200_200/company-logo_200_200/0/1688684715866/ibm_logo?e=2147483647&v=beta&t=yWxQj1oew7nR92bDw8r80j2EiCwx29aNxLZktJYrsWw',
      location: 'Bengaluru, India',
      duration: 'November 2013 - October 2015',
      summary: [
        'Contributed to a big data credit risk platform, improving confidence in data quality and pipeline reliability.',
        'Analyzed source data and validated ETL mappings against business and technical requirements.',
        'Developed Python tooling to generate reliable ETL test data and streamline data preparation workflows.'
      ],
      techStack: ['Python', 'Hadoop', 'Hive', 'HBase', 'Pig']
    }
  ]
};

let currentResumeData = JSON.parse(JSON.stringify(baseProfileData));

function renderContact(contact) {
  const container = document.querySelector('.contact-items');
  container.innerHTML = '';

  const infoRows = [
    { icon: 'map-marker', label: 'Location', value: contact.location },
    { icon: 'envelope', label: 'Email', value: contact.email },
    { icon: 'phone', label: 'Phone', value: contact.phone }
  ];

  infoRows.forEach((row) => {
    const rowNode = document.createElement('div');
    rowNode.className = 'contact-row';

    const srLabelNode = document.createElement('span');
    srLabelNode.className = 'sr-only';
    srLabelNode.textContent = row.label + ': ';

    const iconNode = document.createElement('i');
    iconNode.className = `fa fa-${row.icon}`;
    iconNode.setAttribute('aria-hidden', 'true');

    const textNode = document.createElement('div');
    textNode.className = 'contact-text';
    textNode.textContent = row.value;

    rowNode.appendChild(srLabelNode);
    rowNode.appendChild(iconNode);
    rowNode.appendChild(textNode);
    container.appendChild(rowNode);
  });

  const linksNode = document.createElement('div');
  linksNode.className = 'social-links';
  contact.links.forEach((link) => {
    const anchorNode = document.createElement('a');
    anchorNode.href = link.url;
    anchorNode.target = '_blank';
    anchorNode.rel = 'noopener noreferrer';

    const iconNode = document.createElement('i');
    iconNode.className = `fa fa-${link.icon}`;
    iconNode.setAttribute('aria-hidden', 'true');

    const labelNode = document.createElement('span');
    labelNode.className = 'social-label';
    labelNode.textContent = link.label;

    anchorNode.appendChild(iconNode);
    anchorNode.appendChild(labelNode);
    linksNode.appendChild(anchorNode);
  });

  container.appendChild(linksNode);
}

function renderEducation(education) {
  document.querySelector('.education-degree').textContent = education.degree;
  document.querySelector('.education-inst-duration').textContent = `${education.institute} | ${education.duration}`;
  document.querySelector('.education-cgpa').textContent = `CGPA: ${education.cgpa}`;
}

function renderSkills(skills) {
  const listNode = document.querySelector('.key-skills-list');
  listNode.innerHTML = '';

  skills.forEach((skillGroup) => {
    const liNode = document.createElement('li');

    const categoryNode = document.createElement('span');
    categoryNode.className = 'heading-color';
    categoryNode.textContent = `${skillGroup.category}: `;

    liNode.appendChild(categoryNode);
    liNode.appendChild(document.createTextNode(skillGroup.items.join(', ')));
    listNode.appendChild(liNode);
  });
}

function renderExperiences(experiences) {
  const experiencesNode = document.querySelector('.all-experiences');
  experiencesNode.innerHTML = '';

  experiences.forEach((exp) => {
    const node = document.createElement('div');
    node.setAttribute('class', 'experience');

    const headingNode = document.createElement('div');
    headingNode.className = 'experience-heading';

    if (exp.logo) {
      const logoNode = document.createElement('img');
      logoNode.className = 'company-logo';
      logoNode.src = exp.logo;
      logoNode.alt = `${exp.company} logo`;
      logoNode.addEventListener('error', () => logoNode.remove());

      if (exp.companyUrl) {
        const logoLinkNode = document.createElement('a');
        logoLinkNode.href = exp.companyUrl;
        logoLinkNode.target = '_blank';
        logoLinkNode.rel = 'noopener noreferrer';
        logoLinkNode.setAttribute('aria-label', `View ${exp.company} company page`);
        logoLinkNode.appendChild(logoNode);
        headingNode.appendChild(logoLinkNode);
      } else {
        headingNode.appendChild(logoNode);
      }
    }

    const headingTextNode = document.createElement('div');

    const titleNode = document.createElement('h3');
    titleNode.setAttribute('class', 'title heading-color');
    titleNode.textContent = exp.title;
    headingTextNode.appendChild(titleNode);

    const companyNode = document.createElement('i');
    companyNode.textContent = `${exp.company}, ${exp.location} | ${exp.duration}`;
    headingTextNode.appendChild(companyNode);
    headingNode.appendChild(headingTextNode);
    node.appendChild(headingNode);

    const summaryNode = document.createElement('ul');
    exp.summary.forEach((item) => {
      const liNode = document.createElement('li');
      liNode.textContent = item;
      summaryNode.appendChild(liNode);
    });
    node.appendChild(summaryNode);

    if (exp.projects) {
      const projectsHeadingNode = document.createElement('h4');
      projectsHeadingNode.className = 'projects-heading';
      projectsHeadingNode.textContent = 'Projects';
      node.appendChild(projectsHeadingNode);

      const projectsNode = document.createElement('div');
      projectsNode.className = 'projects';
      exp.projects.forEach((project) => {
        const projectNode = document.createElement('section');
        projectNode.className = 'project';

        const projectTitleNode = document.createElement('h4');
        projectTitleNode.className = 'project-title';
        projectTitleNode.textContent = `${project.name} | ${project.client}`;
        projectNode.appendChild(projectTitleNode);

        const projectDurationNode = document.createElement('i');
        projectDurationNode.textContent = project.duration;
        projectNode.appendChild(projectDurationNode);

        const projectSummaryNode = document.createElement('ul');
        project.summary.forEach((item) => {
          const liNode = document.createElement('li');
          liNode.textContent = item;
          projectSummaryNode.appendChild(liNode);
        });
        projectNode.appendChild(projectSummaryNode);

        const projectTechNode = document.createElement('div');
        projectTechNode.className = 'tech-stack project-tech-stack';
        project.techStack.forEach((tech) => {
          const pill = document.createElement('span');
          pill.className = 'tech-pill';
          pill.textContent = tech;
          projectTechNode.appendChild(pill);
        });
        projectNode.appendChild(projectTechNode);
        projectsNode.appendChild(projectNode);
      });
      node.appendChild(projectsNode);
    }

    const techStackNode = document.createElement('div');
    techStackNode.className = 'tech-stack';
    exp.techStack.forEach((tech) => {
      const pill = document.createElement('span');
      pill.className = 'tech-pill';
      pill.textContent = tech;
      techStackNode.appendChild(pill);
    });
    node.appendChild(techStackNode);

    experiencesNode.appendChild(node);
  });
}

function renderATSPreHeader(data) {
  const el = document.querySelector('.ats-pre-header');
  if (!el) return;
  const { contact } = data;

  const nameEl = document.createElement('div');
  nameEl.className = 'ats-name';
  nameEl.textContent = data.name;

  const roleEl = document.createElement('div');
  roleEl.className = 'ats-role';
  roleEl.textContent = data.role;

  const contactRow = document.createElement('div');
  contactRow.className = 'ats-contact-row';

  const items = [
    { label: 'Location', value: contact.location },
    { label: 'Email',    value: contact.email },
    { label: 'Phone',    value: contact.phone },
    ...contact.links.map(l => ({ label: l.label, value: l.url, href: l.url }))
  ];

  items.forEach((item) => {
    const span = document.createElement('span');
    span.className = 'ats-contact-item';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'ats-contact-label';
    labelSpan.textContent = item.label + ':';

    span.appendChild(labelSpan);
    span.appendChild(document.createTextNode(' '));

    if (item.href) {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.value;
      span.appendChild(a);
    } else {
      span.appendChild(document.createTextNode(item.value));
    }

    contactRow.appendChild(span);
  });

  el.innerHTML = '';
  el.appendChild(nameEl);
  el.appendChild(roleEl);
  el.appendChild(contactRow);
}

function renderResumeData(data) {
  document.querySelector('.profile-name').textContent = data.name;
  document.querySelector('.profile-role').textContent = data.role;
  document.querySelector('.profile-summary').textContent = data.summary;

  renderATSPreHeader(data);
  renderContact(data.contact);
  renderEducation(data.education);
  renderSkills(data.skills);
  renderExperiences(data.experiences);
}

function loadProfileData() {
  currentResumeData = JSON.parse(JSON.stringify(baseProfileData));
  renderResumeData(currentResumeData);
}

window.addEventListener('DOMContentLoaded', loadProfileData);
