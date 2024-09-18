const experiences = [
  {
    title: 'Lead Software Engineer',
    company: 'Everest Engineering',
    location: 'Bengaluru, India',
    duration: 'June 2022 - Present',
    summary: [
      'Swarup is working for Australian based clients as a Lead Software Engineer. Domains ranging from Eductech to Fintech',
      'He helped startup clients launch their products and go from 0 to 1 using serverless architectures',
      'He improved the existing CI and deployment process of the clients, thereby reducing the deployment time from many hours to few minutes.',
      'He introduced Trunk Based Development as part of this improvement.',
      'He was managing a team of 5 engineers and helped upskill the team by introducing to Domain Driven Design, Clean Architecture and other architectural principles.'
    ],
    techStack: ['Typescript', 'NodeJS', 'Postgres', 'DynamoDB', 'Serverless', 'React', 'AWS', 'DDD']
  },
  {
    title: 'Senior Software Engineer',
    company: 'SOCASH PTE LTD (acquired by Nium)',
    location: 'Bengaluru, India',
    duration: 'November 2018 - May 2022',
    summary: [
      'Swarup worked in a Fintech startup as a backend developer, primarily focussing on the payments systems.',
      'He worked with Banks like ICBC, DBS etc and Retail platforms like Grab, Shopee, and Linkaja to integrate their payment APIs into the merchant POS device.',
      'For the above integration, he decomposed the existing Monolith (written in NodeJS) and build Payments micro-services using Java/Postgres tech stack.',
      'He maintained and enhanced the existing products around CashWithdrawals and CashDeposits/Topups. This too involved working with partners providing APIs.',
      'He assisted in setting up and mentoring the QA team for Performance tests and Automated externalAPI functional tests.',
    ],
    techStack: ['Java', 'NodeJS', 'Ruby (Test Automation)', 'AWS', 'Terraform', 'Postgres', 'Redis', 'RethinkDB(NoSQL DB)', 'DDD', 'TDD', 'CI using Jenkins']
  },
  {
    title: 'Software Engineer',
    company: 'Aconex (accquired by Oracle)',
    location: 'Bengaluru, India',
    duration: 'March 2017 - October 2018',
    summary: [
      'Swarup worked as a backend developer in Aconex for the Document review team.',
      'He maintained and deployed multiple microservices across geographies.',
      'Build APIs around PDF reviewing features which provided multiple customers with an ability to annotate/comment on the PDF actively worked on.',
      'Setup Automated UI test infrastructure and framework for PDF review.',
    ],
    techStack: ['Java', 'Ruby (Test Automation)', 'AWS', 'Terraform', 'Postgres', 'MSSQL', 'DDD', 'TDD', 'CI using Jenkins']
  },
  {
    title: 'Software Consultant',
    company: 'Thoughtworks',
    location: 'Bengaluru, India',
    duration: 'November 2015 - February 2017',
    summary: [
      'Swarup Worked as an SDET in ThoughtWorks for an open-source product called Bahmni. Bahmni is an open source healthcare and hospital workflow management product.',
      'He did automation testing and Performance testing of APIs as part of the delivery cycle.',
      'He supported client implementation of the mentioned product. The clients were MSF (Médecins SansFrontières)',
    ],
    techStack: ['Selenium', 'Ruby (Test Automation)', 'Capybara', 'Gatling']
  },
  {
    title: 'Data Specialist',
    company: 'IBM',
    location: 'Bengaluru, India',
    duration: 'November 2013 - October 2015',
    summary: [
      'Swarup worked as a Data Specialist for a Big Data project that was trying to build a Credit RiskRating system.',
      'He analyzed various data captured from Source Systems and verified the same with the ETL documentations',
      'He developed tools and scripts using Python to generate error-proof data for the ETL process and reduce dependency on manual data preparation.',
    ],
    techStack: ['Python', 'Hadoop', 'Hive', 'HBase', 'Pig']
  }
]

window.document.getElementsByClassName('all-experiences')[0].innerHTML = ''

for (let exp of experiences) {
  //
  const node = document.createElement('div')
  node.setAttribute('class', 'experience')

  //
  const titleNode = document.createElement('h3')
  titleNode.setAttribute('class', 'title heading-color')
  titleNode.innerText = exp.title
  node.appendChild(titleNode)

  //
  const companyNode = document.createElement('i')
  companyNode.innerHTML = `${exp.company}, ${exp.location} | ${exp.duration}`
  node.appendChild(companyNode)

  //
  const summaryNode = document.createElement('ul')
  exp.summary.forEach(e => {
    const _ = document.createElement('li')
    _.innerText = e
    summaryNode.appendChild(_)
  })
  node.appendChild(summaryNode)

  //
  const techStackNode = document.createElement('div')
  techStackNode.innerHTML = `Tech Stack: ${exp.techStack.join(', ')}`
  node.appendChild(techStackNode)

  window.document.getElementsByClassName('all-experiences')[0].appendChild(node)
}
