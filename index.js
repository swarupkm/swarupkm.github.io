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
    const iconNode = document.createElement('i');
    iconNode.className = `fa fa-${row.icon}`;

    const textNode = document.createElement('div');
    textNode.textContent = ` ${row.value} `;

    rowNode.appendChild(iconNode);
    rowNode.appendChild(textNode);
    container.appendChild(rowNode);
  });

  const linksNode = document.createElement('div');
  contact.links.forEach((link) => {
    const anchorNode = document.createElement('a');
    anchorNode.href = link.url;
    anchorNode.target = '_blank';

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
    liNode.appendChild(document.createElement('br'));
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

async function loadProfileData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) {
      throw new Error(`Failed to load data.json: ${response.status}`);
    }

    const data = await response.json();
    document.querySelector('.profile-name').textContent = data.name;
    document.querySelector('.profile-role').textContent = data.role;
    document.querySelector('.profile-summary').textContent = data.summary;

    renderContact(data.contact);
    renderEducation(data.education);
    renderSkills(data.skills);
    renderExperiences(data.experiences);
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('DOMContentLoaded', loadProfileData);
