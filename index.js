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
      category: 'Architecture & Leadership',
      items: ['DDD', 'System Design', 'Distributed Systems', 'Clean Architecture', 'TDD', 'OOP', 'Functional Programming', 'Agile', 'Scrum']
    },
    {
      category: 'AI Tools',
      items: ['Prompt Engineering', 'RAG', 'Vector Databases', 'Vector Search', 'Claude Sonnet 4.6', 'Spec Driven Development']
    },
    {
      category: 'Languages',
      items: ['Java', 'JavaScript', 'TypeScript', 'Ruby', 'Python']
    },
    {
      category: 'Cloud Technologies',
      items: ['Amazon Web Services', 'S3', 'Lambda', 'Step Functions', 'Glue', 'API Gateway', 'SNS', 'SQS']
    },
    {
      category: 'Databases',
      items: ['Postgres', 'DynamoDB', 'MongoDB']
    },
    {
      category: 'Infrastructure',
      items: ['Terraform', 'AWS CDK', 'Ansible', 'Docker', 'Serverless']
    },
    {
      category: 'CI/CD',
      items: ['Jenkins', 'GitHub Actions', 'GitLab', 'Git', 'Trunk-Based Development', 'Feature Toggles']
    },
    {
      category: 'Frameworks & Platforms',
      items: ['Node.js', 'NestJS', 'Next.js', 'React', 'Sanity CMS', 'REST APIs']
    }
  ],
  summary: 'Lead Software Engineer with 13+ years of building distributed, cloud-native systems in fintech, healthcare, and edtech. Cut the time to ship to production from 2 days to 2 minutes across 50 microservices, built a payment gateway that handles ~10,000 transactions a day in 4 countries, and reduced manual review of clinical data by ~90%. Leads teams of up to 7 engineers, from the first architecture sketch through to production.',
  experiences: [
    {
      title: 'Lead Software Engineer',
      company: 'Everest Engineering',
      logo: 'https://www.google.com/s2/favicons?domain=everest.engineering&sz=128',
      location: 'Bengaluru, India',
      duration: 'June 2022 - Present',
      summary: [
        'Led the technical side of several products from first discovery to production launch, with teams of 2-7 engineers, building cloud-native systems in Python, TypeScript, Node.js, React, AWS, serverless, Docker, Postgres, and DynamoDB.',
        'Worked closely with product and business leaders to plan roadmaps, decide what to build first, and keep several teams moving in early-stage products where requirements were still taking shape.',
        'Set up shared engineering practices around observability, distributed tracing, reliability, clean architecture, and Domain-Driven Design (DDD), so releases stayed stable and the code stayed easy to change after launch.',
        'Mentored 6-10 engineers through design reviews, pairing, and architecture discussions, helping them think about the product and the whole system rather than just their own tickets.'
      ],
      projects: [
        {
          name: 'Clinical Research Data Platform',
          client: 'HealthTech',
          summary: [
            'Led a team of seven engineers building a clinical research data product for allergy studies, and owned its architecture and delivery plan.',
            'Automated the classification of consent and sensitive information, which cut manual review by ~90% with ~80% parsing accuracy.',
            'Designed the ingestion and preprocessing pipeline that turns raw study data from many sources into one standard schema in an AWS data lake.',
            'Used Claude Sonnet 4.6 to draft data-mapping specifications, and built Python workflows on AWS (S3, Lambda, DynamoDB, Step Functions, Glue) that handle ~10 studies a year, ~10,000 participants per study, and ~1,500 survey observations per participant over time.',
            'Prototyped vector-based semantic search over a library of nearly 1 million clinical concepts, so researchers could look up concepts in the UI before we wired it into the automated parsing pipeline.'
          ]
        },
        {
          name: 'Ethical Investment Platform',
          client: 'FinTech, Australia',
          summary: [
            'Took an ethical investing and shareholder advocacy product from idea to beta launch, leading a team of 2-3 engineers across both product and technical decisions.',
            'Designed a serverless trading platform on AWS Lambda, S3, API Gateway, SNS, SQS, DynamoDB, and MongoDB that lets investors pledge to campaigns and follow their progress.',
            'Led integrations with KYC, trading, and fund management providers, using Domain-Driven Design to draw clear service boundaries that would hold up as the product grew.'
          ]
        },
        {
          name: 'Education Platform Modernization',
          client: 'EdTech, Australia',
          summary: [
            'Cut the time to get a change into production from 2 working days to 2 minutes by moving 50 microservices from GitFlow to Trunk-Based Development, with feature toggles and team-owned repositories, so teams could ship on their own instead of waiting for a shared release twice a month.',
            'Led a team of five engineers and helped them build stronger habits around Domain-Driven Design, sound architecture, and regular technical coaching.',
            'Introduced Clean Architecture into a few legacy projects to make them easier to test and maintain.',
            'Cleaned up public-facing APIs in legacy services by moving them to consistent RESTful patterns.'
          ]
        }
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'SOCASH PTE LTD (acquired by Nium)',
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQFGuyC-6U8bhg/company-logo_200_200/company-logo_200_200/0/1630621081343/socash_pte_ltd_logo?e=2147483647&v=beta&t=cAmLoQn2NQGc8mvmMhXwTFgmYJAFGJQ5ZzvjwXfhsuQ',
      companyUrl: 'https://sg.linkedin.com/company/socash',
      location: 'Bengaluru, India',
      duration: 'November 2018 - May 2022',
      summary: [
        'Built and ran a payment gateway connected to 15 banks and vendors, handling ~10,000 transactions a day for ~500 merchants in 4 countries.',
        'Broke a Node.js monolith into modular Java payment services on AWS (Terraform, Postgres, Redis, RethinkDB), using Domain-Driven Design (DDD) to make service boundaries and ownership clear and to let the platform scale.',
        'Automated provider failover so the gateway spotted downstream outages and rerouted payments on its own, instead of someone switching routes by hand during a partner incident.',
        'Led integrations with banks and retail partners through secure partner APIs, growing the merchant POS network across several countries.',
        'Shaped the payment platform\'s architecture and technical roadmap, weighing reliability, throughput, and ease of extension in a system where every failed transaction mattered.',
        'Raised the quality bar for critical payment APIs with Ruby test automation, Test-Driven Development (TDD), Jenkins CI, performance testing, monitoring, and observability.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Oracle',
      logo: 'https://www.google.com/s2/favicons?domain=oracle.com&sz=128',
      location: 'Bengaluru, India',
      duration: 'March 2017 - October 2018',
      summary: [
        'Built Java backend features for Aconex document review workflows, using Domain-Driven Design (DDD) to model how customers actually review documents.',
        'Deployed and ran distributed microservices across AWS regions with Terraform, Postgres, and MSSQL, with a focus on availability and predictable releases.',
        'Built REST APIs that let people review and annotate PDFs together in real time.',
        'Set up automated UI testing with Ruby, Test-Driven Development (TDD), and Jenkins CI, giving the core review features much better regression coverage.',
        'Stayed on the Aconex product for several months after Oracle\'s acquisition to help the product and engineering handover go smoothly.'
      ]
    },
    {
      title: 'Software Consultant',
      company: 'Thoughtworks',
      logo: 'https://www.google.com/s2/favicons?domain=thoughtworks.com&sz=128',
      location: 'Bengaluru, India',
      duration: 'November 2015 - February 2017',
      summary: [
        'Worked on Bahmni, an open-source hospital management platform, alongside product, engineering, and implementation teams.',
        'Wrote Ruby API tests, Gatling performance tests, and Selenium and Capybara UI tests, so the team got faster, more reliable feedback before each release.',
        'Supported rollouts for Médecins Sans Frontières (MSF), where the system had to work reliably in demanding field hospitals.'
      ]
    },
    {
      title: 'Data Specialist',
      company: 'IBM',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_200_200/company-logo_200_200/0/1688684715866/ibm_logo?e=2147483647&v=beta&t=yWxQj1oew7nR92bDw8r80j2EiCwx29aNxLZktJYrsWw',
      location: 'Bengaluru, India',
      duration: 'November 2013 - October 2015',
      summary: [
        'Worked on a Hadoop-based credit risk platform (Hive, HBase, Pig), testing data quality and pipeline reliability.',
        'Analyzed source data and checked ETL mappings against business and technical requirements.',
        'Wrote Python tools to generate ETL test data and speed up data preparation.'
      ]
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
    anchorNode.setAttribute('aria-label', `${link.label}: ${link.url}`);
    anchorNode.title = link.label;

    const iconNode = document.createElement('i');
    iconNode.className = `fa fa-${link.icon}`;
    iconNode.setAttribute('aria-hidden', 'true');

    const labelNode = document.createElement('span');
    labelNode.className = 'social-label';
    const socialUrl = new URL(link.url);
    labelNode.textContent = `${socialUrl.hostname.replace(/^www\./, '')}${socialUrl.pathname.replace(/\/$/, '')}`;

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
      const projectsNode = document.createElement('div');
      projectsNode.className = 'projects';
      exp.projects.forEach((project) => {
        const projectNode = document.createElement('section');
        projectNode.className = 'project';

        const projectTitleNode = document.createElement('h4');
        projectTitleNode.className = 'project-title';
        projectTitleNode.textContent = `Project: ${project.name} | ${project.client}`;
        projectNode.appendChild(projectTitleNode);

        const projectSummaryNode = document.createElement('ul');
        project.summary.forEach((item) => {
          const liNode = document.createElement('li');
          liNode.textContent = item;
          projectSummaryNode.appendChild(liNode);
        });
        projectNode.appendChild(projectSummaryNode);

        projectsNode.appendChild(projectNode);
      });
      node.appendChild(projectsNode);
    }

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

function createDocxParagraph(text, options = {}, runOptions = {}) {
  const { Paragraph, TextRun } = docx;
  return new Paragraph({
    ...options,
    children: [new TextRun({
      text,
      font: 'Calibri',
      size: 20,
      color: '333333',
      ...runOptions
    })]
  });
}

function createDocxBullet(text) {
  return createDocxParagraph(text, {
    style: 'ListParagraph',
    bullet: { level: 0 },
    spacing: { after: 60, line: 240 }
  }, { size: 21 });
}

function buildResumeDocx(data) {
  const { AlignmentType, BorderStyle, Document, HeadingLevel, Packer } = docx;
  const sectionHeadingOptions = {
    heading: HeadingLevel.HEADING_1,
    border: {
      bottom: { color: '1F3864', space: 4, style: BorderStyle.SINGLE, size: 6 }
    },
    spacing: { before: 280, after: 120 }
  };
  const children = [
    createDocxParagraph(data.name, {
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 }
    }, { bold: true, size: 40, color: '1F3864' }),
    createDocxParagraph(data.role, {
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 }
    }, { bold: true, size: 24, color: '333333' }),
    createDocxParagraph([
      data.contact.location,
      data.contact.email,
      data.contact.phone
    ].join(' | '), {
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 }
    }, { size: 19, color: '555555' }),
    createDocxParagraph([
      ...data.contact.links.map((link) => `${link.label}: ${link.url}`)
    ].join(' | '), {
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 }
    }, { size: 19, color: '555555' }),
    createDocxParagraph('SUMMARY', sectionHeadingOptions, { bold: true, size: 22, color: '1F3864' }),
    createDocxParagraph(data.summary, { spacing: { after: 160, line: 240 } }, { size: 19, color: '555555' }),
    createDocxParagraph('WORK EXPERIENCE', sectionHeadingOptions, { bold: true, size: 22, color: '1F3864' })
  ];

  data.experiences.forEach((experience) => {
    children.push(
      createDocxParagraph(experience.title, { spacing: { after: 20, before: 200 } }, {
        bold: true,
        size: 22,
        color: '1F3864'
      }),
      createDocxParagraph(`${experience.company}, ${experience.location} | ${experience.duration}`, {
        spacing: { after: 100 }
      }, { bold: true, size: 20 }),
      ...experience.summary.map(createDocxBullet)
    );

    if (experience.projects) {
      experience.projects.forEach((project) => {
        children.push(
          createDocxParagraph(`Project: ${project.name} | ${project.client}`, {
            spacing: { before: 120, after: 20 }
          }, { bold: true, size: 20, color: '1F3864' }),
          ...project.summary.map(createDocxBullet)
        );
      });
    }

  });

  children.push(
    createDocxParagraph('KEY SKILLS', sectionHeadingOptions, { bold: true, size: 22, color: '1F3864' }),
    ...data.skills.map((skill) => createDocxParagraph(`${skill.category}: ${skill.items.join(', ')}`, {
      spacing: { after: 80, line: 240 }
    }, { size: 20 })),
    createDocxParagraph('EDUCATION', sectionHeadingOptions, { bold: true, size: 22, color: '1F3864' }),
    createDocxParagraph(data.education.degree, { spacing: { after: 40 } }, { bold: true, size: 20, color: '333333' }),
    createDocxParagraph(`${data.education.institute} | ${data.education.duration}`, {}, { size: 19, color: '555555' }),
    createDocxParagraph(`CGPA: ${data.education.cgpa}`, {}, { size: 19, color: '555555' })
  );

  const document = new Document({
    sections: [{
      properties: {
        page: {
          margin: { top: 720, right: 900, bottom: 720, left: 900 },
          size: { width: 12240, height: 15840 }
        }
      },
      children
    }]
  });
  return Packer.toBlob(document);
}

function formatDateForFilename(date = new Date()) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function downloadResumeDocx() {
  if (!window.docx) return;

  buildResumeDocx(currentResumeData).then((blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${currentResumeData.name.replace(/\s+/g, '_')}_Resume_${formatDateForFilename()}.docx`;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      link.remove();
      URL.revokeObjectURL(url);
    }, 1000);
  });
}

function downloadResumePdf() {
  window.print();
}

function setPrintDocumentTitle() {
  document.title = `${currentResumeData.name.replace(/\s+/g, '_')}_Resume_${formatDateForFilename()}`;
}

function restoreDocumentTitle() {
  document.title = `${currentResumeData.name} | Resume`;
}

function loadProfileData() {
  currentResumeData = JSON.parse(JSON.stringify(baseProfileData));
  renderResumeData(currentResumeData);
  document.querySelector('.docx-download').addEventListener('click', downloadResumeDocx);
  document.querySelector('.pdf-download').addEventListener('click', downloadResumePdf);
  window.addEventListener('beforeprint', setPrintDocumentTitle);
  window.addEventListener('afterprint', restoreDocumentTitle);
}

window.addEventListener('DOMContentLoaded', loadProfileData);
