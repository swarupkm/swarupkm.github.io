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
  summary: 'Engineering leader with nearly 13 years of experience designing scalable systems, driving technical strategy, and building cloud-native platforms across startups, product teams, and consulting environments.',
  experiences: [
    {
      title: 'Lead Software Engineer',
      company: 'Everest Engineering',
      location: 'Bengaluru, India',
      duration: 'June 2022 - Present',
      summary: [
        'Led multiple engineering engagements at Everest Engineering, guiding teams of 3–6 engineers across client-facing initiatives.',
        'Partnered with product and business stakeholders to define and deliver complex engineering initiatives across client engagements.',
        'Led technical strategy and execution for AI-enabled workflows, cloud-native platforms, and scalable data systems in clinical research.',
        'Architected and implemented study metadata analysis using LLMs and RAG-based concept search for distributed data workflows.',
        'Drove the design and delivery of a serverless REST API platform and cloud architecture that enabled a trading platform launch.',
        'Modernized CI/CD and release practices, reducing delivery timelines from hours to minutes.',
        'Established observability and monitoring practices using distributed tracing and CloudWatch to support cloud-native service reliability.',
        'Introduced trunk-based development and improved engineering quality, collaboration, and velocity.',
        'Mentored engineers across multiple teams and strengthened architectural practices in Domain-Driven Design and clean architecture.'
      ],
      techStack: ['Python', 'TypeScript', 'NodeJS', 'Postgres', 'DynamoDB', 'Serverless', 'Docker', 'React', 'AWS', 'DDD']
    },
    {
      title: 'Senior Software Engineer',
      company: 'SOCASH PTE LTD (acquired by Nium)',
      location: 'Bengaluru, India',
      duration: 'November 2018 - May 2022',
      summary: [
        'Designed and scaled payment platform capabilities for a fintech startup, with a focus on reliability, extensibility, throughput, and distributed systems.',
        'Integrated payment APIs for banks and retail platforms, improving merchant POS ecosystem capabilities.',
        'Re-architected a Node.js monolith into modular payment microservices using Java, PostgreSQL, and platform-oriented service design.',
        'Improved cash withdrawal and top-up experiences through secure, partner-driven integrations.',
        'Built and scaled the QA function with monitoring and observability tooling to support performance and API reliability across critical payment flows.'
      ],
      techStack: ['Java', 'NodeJS', 'Ruby (Test Automation)', 'AWS', 'Terraform', 'Postgres', 'Redis', 'RethinkDB (NoSQL DB)', 'DDD', 'TDD', 'CI using Jenkins']
    },
    {
      title: 'Software Engineer',
      company: 'Aconex (acquired by Oracle)',
      location: 'Bengaluru, India',
      duration: 'March 2017 - October 2018',
      summary: [
        'Contributed to backend services and platform reliability across document review workflows at Aconex.',
        'Maintained and deployed distributed microservices across regions with a strong focus on availability.',
        'Built REST APIs for real-time PDF review collaboration, supporting customer-facing document annotation workflows.',
        'Established automated UI testing infrastructure for core review features.'
      ],
      techStack: ['Java', 'Ruby (Test Automation)', 'AWS', 'Terraform', 'Postgres', 'MSSQL', 'DDD', 'TDD', 'CI using Jenkins']
    },
    {
      title: 'Software Consultant',
      company: 'Thoughtworks',
      location: 'Bengaluru, India',
      duration: 'November 2015 - February 2017',
      summary: [
        'Delivered software solutions on Bahmni, an open-source healthcare workflow platform, in a collaborative consulting environment.',
        'Implemented API automation and performance testing to support product quality and delivery.',
        'Supported client implementations for Médecins Sans Frontières (MSF), contributing to mission-critical workflows.'
      ],
      techStack: ['Selenium', 'Ruby (Test Automation)', 'Capybara', 'Gatling']
    },
    {
      title: 'Data Specialist',
      company: 'IBM',
      location: 'Bengaluru, India',
      duration: 'November 2013 - October 2015',
      summary: [
        'Contributed to a big data initiative to build a credit risk rating system with a focus on data quality and pipeline reliability.',
        'Analyzed source data and validated ETL mappings against business and technical documentation.',
        'Developed Python tools and scripts to generate reliable ETL test data and streamline data preparation workflows.'
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

    const titleNode = document.createElement('h3');
    titleNode.setAttribute('class', 'title heading-color');
    titleNode.textContent = exp.title;
    node.appendChild(titleNode);

    const companyNode = document.createElement('i');
    companyNode.textContent = `${exp.company}, ${exp.location} | ${exp.duration}`;
    node.appendChild(companyNode);

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
