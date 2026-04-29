const profileData = {
  name: 'Swarup Mahapatra',
  role: 'Lead Software Engineer',
  contact: {
    location: 'Bengaluru, Karnataka, India',
    email: 'swarupmahapatra1@gmail.com',
    phone: '+91-9742777306',
    links: [
      {
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in/swarupmahapatra1/'
      },
      {
        icon: 'github',
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
      items: ['Jenkins', 'GitHub Actions', 'GitLab']
    },
    {
      category: 'Infrastructure',
      items: ['Terraform', 'AWS CDK', 'Ansible']
    },
    {
      category: 'Practices',
      items: ['DDD', 'TDD', 'OOP', 'Functional Programming']
    },
    {
      category: 'AI Tools',
      items: ['Prompt Engineering', 'RAG', 'Vector Databases']
    }
  ],
  summary: 'Seasoned Lead Software Engineer with nearly 13 years of experience building and scaling software platforms across services, startups, and product organizations.',
  experiences: [
    {
      title: 'Lead Software Engineer',
      company: 'Everest Engineering',
      location: 'Bengaluru, India',
      duration: 'June 2022 - Present',
      summary: [
        'Leading engineering engagements for Australian clients across EdTech, FinTech, and Clinical Research domains.',
        'Supporting a clinical research team in analyzing allergy study data using AI-enabled workflows and building a scalable data pipeline platform.',
        'Implemented study metadata analysis using LLMs and enabled clinical concept search through RAG-based solutions.',
        'Helped launch a client trading platform to market by building and scaling serverless cloud architecture.',
        'Modernized CI/CD and deployment processes, reducing release timelines from hours to minutes.',
        'Introduced trunk-based development to improve delivery speed, code quality, and collaboration.',
        'Managed and mentored a team of 5 engineers, driving capability uplift in Domain-Driven Design and Clean Architecture principles.'
      ],
      techStack: ['Python', 'TypeScript', 'NodeJS', 'Postgres', 'DynamoDB', 'Serverless', 'React', 'AWS', 'DDD']
    },
    {
      title: 'Senior Software Engineer',
      company: 'SOCASH PTE LTD (acquired by Nium)',
      location: 'Bengaluru, India',
      duration: 'November 2018 - May 2022',
      summary: [
        'Worked as a backend engineer in a FinTech startup, with a primary focus on payments systems.',
        'Integrated payment APIs for banks (ICBC, DBS) and retail platforms (Grab, Shopee, LinkAja) into merchant POS ecosystems.',
        'Decomposed a Node.js monolith and built payment microservices using Java and PostgreSQL.',
        'Enhanced cash withdrawal and cash deposit/top-up products through partner API integrations.',
        'Helped establish and mentor the QA team for performance testing and automated external API functional testing.'
      ],
      techStack: ['Java', 'NodeJS', 'Ruby (Test Automation)', 'AWS', 'Terraform', 'Postgres', 'Redis', 'RethinkDB (NoSQL DB)', 'DDD', 'TDD', 'CI using Jenkins']
    },
    {
      title: 'Software Engineer',
      company: 'Aconex (acquired by Oracle)',
      location: 'Bengaluru, India',
      duration: 'March 2017 - October 2018',
      summary: [
        'Worked as a backend engineer in the Document Review team at Aconex.',
        'Maintained and deployed multiple microservices across regions.',
        'Built APIs for PDF review workflows, enabling customers to annotate and comment on documents in real time.',
        'Set up automated UI testing infrastructure and framework for PDF review features.'
      ],
      techStack: ['Java', 'Ruby (Test Automation)', 'AWS', 'Terraform', 'Postgres', 'MSSQL', 'DDD', 'TDD', 'CI using Jenkins']
    },
    {
      title: 'Software Consultant',
      company: 'Thoughtworks',
      location: 'Bengaluru, India',
      duration: 'November 2015 - February 2017',
      summary: [
        'Worked as a software developer at Thoughtworks on Bahmni, an open-source healthcare and hospital workflow platform.',
        'Delivered API automation and performance testing as part of the product delivery cycle.',
        'Supported client implementations for MSF (Médecins Sans Frontières).'
      ],
      techStack: ['Selenium', 'Ruby (Test Automation)', 'Capybara', 'Gatling']
    },
    {
      title: 'Data Specialist',
      company: 'IBM',
      location: 'Bengaluru, India',
      duration: 'November 2013 - October 2015',
      summary: [
        'Worked as a Data Specialist on a Big Data initiative to build a credit risk rating system.',
        'Analyzed source-system data and validated mappings against ETL documentation.',
        'Developed Python tools and scripts to generate reliable ETL test data, reducing dependency on manual data preparation.'
      ],
      techStack: ['Python', 'Hadoop', 'Hive', 'HBase', 'Pig']
    }
  ]
};

function renderContact(contact) {
  const container = document.querySelector('.contact-items');
  container.innerHTML = '';

  const infoRows = [
    { icon: 'map-marker', value: contact.location },
    { icon: 'envelope', value: contact.email },
    { icon: 'phone', value: contact.phone }
  ];

  infoRows.forEach((row) => {
    const rowNode = document.createElement('div');
    rowNode.className = 'contact-row';

    const iconNode = document.createElement('i');
    iconNode.className = `fa fa-${row.icon}`;

    const textNode = document.createElement('div');
    textNode.className = 'contact-text';
    textNode.textContent = ` ${row.value} `;

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

    anchorNode.appendChild(iconNode);
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
    techStackNode.textContent = `Tech Stack: ${exp.techStack.join(', ')}`;
    node.appendChild(techStackNode);

    experiencesNode.appendChild(node);
  });
}

function loadProfileData() {
  const data = profileData;
  document.querySelector('.profile-name').textContent = data.name;
  document.querySelector('.profile-role').textContent = data.role;
  document.querySelector('.profile-summary').textContent = data.summary;

  renderContact(data.contact);
  renderEducation(data.education);
  renderSkills(data.skills);
  renderExperiences(data.experiences);
}

window.addEventListener('DOMContentLoaded', loadProfileData);
