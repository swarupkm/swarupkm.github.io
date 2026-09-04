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
  summary: 'Engineering leader with nearly 13 years of experience shaping technical strategy, designing resilient distributed systems, and delivering cloud-native platforms across fintech, healthcare, and enterprise software. Proven ability to turn ambiguous business and product problems into production-ready systems, drive architecture across teams, and build compliance-aware workflows that improve operational resilience and software quality.',
  experiences: [
    {
      title: 'Lead Software Engineer',
      company: 'Everest Engineering',
      logo: 'https://www.google.com/s2/favicons?domain=everest.engineering&sz=128',
      location: 'Bengaluru, India',
      duration: 'June 2022 - Present',
      summary: [
        'Led technical direction across multiple client engagements, guiding teams of 3-6 engineers from problem framing through production delivery in complex, high-ambiguity environments.',
        'Partnered with product and business stakeholders to shape architecture, prioritize initiatives, and align engineering execution with business outcomes.',
        'Designed AI-assisted workflows for identifying PII and parsing participant consent responses across clinical study data, supporting compliance-aware research operations at scale.',
        'Built data preprocessing and prompt-based decision-tree pipelines to classify consent and sensitive information across ~10 clinical studies per year with ~10,000 participants per study, achieving ~80% parsing accuracy and reducing manual review effort by ~90%.',
        'Architected study metadata analysis using LLMs and retrieval-augmented generation to enable concept search across distributed research data workflows.',
        'Drove the design and delivery of a serverless REST API platform and AWS foundation that enabled a trading platform launch in a fast-moving product environment.',
        'Modernized CI/CD and release engineering, reducing deployment timelines from hours to minutes and improving confidence in frequent, reliable releases.',
        'Established distributed tracing, CloudWatch monitoring, and operational practices that improved visibility into service health and strengthened cloud-native reliability.',
        'Mentored engineers and coached teams on system design, Domain-Driven Design, clean architecture, and delivery best practices that improved engineering quality and velocity.'
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
