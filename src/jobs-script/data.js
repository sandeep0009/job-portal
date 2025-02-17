 const jobsData = [
    {
      slug: 'product-development-engineer',
      title: 'Product Development Engineer',
      type: 'Full-time',
      locationType: 'Remote',
      location: 'India',
      description: 'Join Razorpay as a Product Development Engineer. Opportunity for early career professionals.',
      salary: 800000, 
      companyName: 'Razorpay',
      applicationEmail: 'careers@razorpay.com',
      applicationUrl: 'https://linkedin.com/jobs/view/3986401875/?alternateChannel=search',
      companyLogoUrl: 'https://example.com/logos/razorpay.png',
      approved: true, 
    },
    {
      slug: 'associate-software-engineer',
      title: 'Associate Software Engineer',
      type: 'Full-time',
      locationType: 'Remote',
      location: 'India',
      description: 'Opportunity to work as an Associate Software Engineer with Victoria\'s Secret.',
      salary: 600000, 
      companyName: "Victoria's Secret",
      applicationEmail: 'careers@victoriassecret.com',
      applicationUrl: 'https://careers.victoriassecret.com/job/20759220/',
      companyLogoUrl: 'https://example.com/logos/victoriassecret.png',
      approved: true,
    },
    {
      slug: 'software-engineer-backend',
      title: 'Software Engineer, Backend',
      type: 'Full-time',
      locationType: 'Remote',
      location: 'India',
      description: 'Grab is looking for a Software Engineer specializing in Backend development.',
      salary: 1500000, 
      companyName: 'Grab',
      applicationEmail: 'careers@grab.com',
      applicationUrl: 'https://jobs.smartrecruiters.com/Grab/744000004027565-software-engineer-backend?trid=2d92f286-613b-4daf-9dfa-6340ffbecf73',
      companyLogoUrl: 'https://example.com/logos/grab.png',
      approved: true,
    },
    {
      slug: 'backend-developer',
      title: 'Backend Developer',
      type: 'Full-time',
      locationType: 'Remote',
      location: 'India',
      description: 'Unacademy is hiring a Backend Developer to enhance its platform.',
      salary: 2000000, 
      companyName: 'Unacademy',
      applicationEmail: 'careers@unacademy.com',
      applicationUrl: 'https://linkedin.com/jobs/view/3987939930/?alternateChannel=search',
      companyLogoUrl: 'https://example.com/logos/unacademy.png',
      approved: true,
    },
    {
      slug: 'qa-engineer-intern',
      title: 'QA Engineer Intern',
      type: 'Internship',
      locationType: 'Remote',
      location: 'India',
      description: 'SenseHQ is looking for a QA Engineer Intern to join their team.',
      salary: 20000, 
      companyName: 'SenseHQ',
      applicationEmail: 'careers@sensehq.com',
      applicationUrl: 'https://cuvette.tech/app/public/internship/66a8c5249725cd30e2e06077?referralCode=FHZR3S',
      companyLogoUrl: 'https://example.com/logos/sensehq.png',
      approved: true,
    },
    {
      slug: 'react-native-engineer',
      title: 'React Native Engineer',
      type: 'Full-time',
      locationType: 'Remote',
      location: 'India',
      description: 'Wishlink is hiring a React Native Engineer to work on their mobile applications.',
      salary: 2000000, 
      companyName: 'Wishlink',
      applicationEmail: 'careers@wishlink.com',
      applicationUrl: 'https://wishlink.keka.com/careers/jobdetails/5876?source=linkedin',
      companyLogoUrl: 'https://example.com/logos/wishlink.png',
      approved: true,
    },
    {
      slug: 'engineer-ii-software-development',
      title: 'Engineer II - Software Development',
      type: 'Full-time',
      locationType: 'On-site',
      location: 'Mumbai, India',
      description: 'Accelya is seeking an Engineer II for their Software Development team.',
      salary: 1000000, 
      companyName: 'Accelya',
      applicationEmail: 'careers@accelya.com',
      applicationUrl: 'https://accelya.wd103.myworkdayjobs.com/Careers/job/India-Mumbai/Engineer-II---Software-Development_SWFP25_011',
      companyLogoUrl: 'https://example.com/logos/accelya.png',
      approved: true,
    },
    {
      slug: 'software-development-engineer-i',
      title: 'Software Development Engineer - I',
      type: 'Full-time',
      locationType: 'Remote',
      location: 'India',
      description: 'Kratikal is hiring a Software Development Engineer - I for their development team.',
      salary: 600000, 
      companyName: 'Kratikal',
      applicationEmail: 'careers@kratikal.com',
      applicationUrl: 'https://linkedin.com/jobs/view/3989629117/?alternateChannel=search',
      companyLogoUrl: 'https://example.com/logos/kratikal.png',
      approved: true,
    },
        {
          slug: 'product-development-engineer',
          title: 'Product Development Engineer',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'Join Razorpay as a Product Development Engineer. Opportunity for early career professionals.',
          salary: 800000,
          companyName: 'Razorpay',
          applicationEmail: 'careers@razorpay.com',
          applicationUrl: 'https://linkedin.com/jobs/view/3986401875/?alternateChannel=search',
          companyLogoUrl: 'https://example.com/logos/razorpay.png',
          approved: true,
        },
        {
          slug: 'associate-software-engineer',
          title: 'Associate Software Engineer',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'Opportunity to work as an Associate Software Engineer with Victoria\'s Secret.',
          salary: 600000,
          companyName: "Victoria's Secret",
          applicationEmail: 'careers@victoriassecret.com',
          applicationUrl: 'https://careers.victoriassecret.com/job/20759220/',
          companyLogoUrl: 'https://example.com/logos/victoriassecret.png',
          approved: true,
        },
        {
          slug: 'software-engineer-backend',
          title: 'Software Engineer, Backend',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'Grab is looking for a Software Engineer specializing in Backend development.',
          salary: 1500000,
          companyName: 'Grab',
          applicationEmail: 'careers@grab.com',
          applicationUrl: 'https://jobs.smartrecruiters.com/Grab/744000004027565-software-engineer-backend?trid=2d92f286-613b-4daf-9dfa-6340ffbecf73',
          companyLogoUrl: 'https://example.com/logos/grab.png',
          approved: true,
        },
        {
          slug: 'backend-developer',
          title: 'Backend Developer',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'Unacademy is hiring a Backend Developer to enhance its platform.',
          salary: 2000000,
          companyName: 'Unacademy',
          applicationEmail: 'careers@unacademy.com',
          applicationUrl: 'https://linkedin.com/jobs/view/3987939930/?alternateChannel=search',
          companyLogoUrl: 'https://example.com/logos/unacademy.png',
          approved: true,
        },
        {
          slug: 'qa-engineer-intern',
          title: 'QA Engineer Intern',
          type: 'Internship',
          locationType: 'Remote',
          location: 'India',
          description: 'SenseHQ is looking for a QA Engineer Intern to join their team.',
          salary: 20000,
          companyName: 'SenseHQ',
          applicationEmail: 'careers@sensehq.com',
          applicationUrl: 'https://cuvette.tech/app/public/internship/66a8c5249725cd30e2e06077?referralCode=FHZR3S',
          companyLogoUrl: 'https://example.com/logos/sensehq.png',
          approved: true,
        },
        {
          slug: 'react-native-engineer',
          title: 'React Native Engineer',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'Wishlink is hiring a React Native Engineer to work on their mobile applications.',
          salary: 2000000,
          companyName: 'Wishlink',
          applicationEmail: 'careers@wishlink.com',
          applicationUrl: 'https://wishlink.keka.com/careers/jobdetails/5876?source=linkedin',
          companyLogoUrl: 'https://example.com/logos/wishlink.png',
          approved: true,
        },
        {
          slug: 'engineer-ii-software-development',
          title: 'Engineer II - Software Development',
          type: 'Full-time',
          locationType: 'On-site',
          location: 'Mumbai, India',
          description: 'Accelya is seeking an Engineer II for their Software Development team.',
          salary: 1000000,
          companyName: 'Accelya',
          applicationEmail: 'careers@accelya.com',
          applicationUrl: 'https://accelya.wd103.myworkdayjobs.com/Careers/job/India-Mumbai/Engineer-II---Software-Development_SWFP25_011',
          companyLogoUrl: 'https://example.com/logos/accelya.png',
          approved: true,
        },
        {
          slug: 'software-development-engineer-i',
          title: 'Software Development Engineer - I',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'Kratikal is hiring a Software Development Engineer - I for their development team.',
          salary: 600000,
          companyName: 'Kratikal',
          applicationEmail: 'careers@kratikal.com',
          applicationUrl: 'https://linkedin.com/jobs/view/3989629117/?alternateChannel=search',
          companyLogoUrl: 'https://example.com/logos/kratikal.png',
          approved: true,
        },
      
        {
          slug: 'software-engineer-i',
          title: 'Software Engineer I',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'Postman is hiring for Software Engineer I.',
          salary: 1500000,
          companyName: 'Postman',
          applicationEmail: 'careers@postman.com',
          applicationUrl: 'https://job-boards.greenhouse.io/postman/jobs/6076279003?gh_src=7ad26f843us',
          companyLogoUrl: 'https://example.com/logos/postman.png',
          approved: true,
        },
        {
          slug: 'software-development',
          title: 'Software Development',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'CommerceIQ is hiring for Software Development.',
          salary: 1500000,
          companyName: 'CommerceIQ',
          applicationEmail: 'careers@commerceiq.com',
          applicationUrl: 'https://job-boards.greenhouse.io/commerceiq/jobs/6076202003?gh_src=a0aa0b973us',
          companyLogoUrl: 'https://example.com/logos/commerceiq.png',
          approved: true,
        },
        {
          slug: 'intern-software-engineering',
          title: 'Intern, Software Engineering',
          type: 'Internship',
          locationType: 'Remote',
          location: 'India',
          description: 'Workato is hiring for Intern, Software Engineering.',
          salary: 0, 
          companyName: 'Workato',
          applicationEmail: 'careers@workato.com',
          applicationUrl: 'https://job-boards.greenhouse.io/workato/jobs/7572736002?gh_src=89fc02d52us',
          companyLogoUrl: 'https://example.com/logos/workato.png',
          approved: true,
        },
        {
          slug: 'software-engineer-c-plus-plus',
          title: 'Software Engineer - C++',
          type: 'Full-time',
          locationType: 'On-site',
          location: 'India',
          description: 'National Instruments is hiring for Software Engineer - C++.',
          salary: 1000000,
          companyName: 'National Instruments',
          applicationEmail: 'careers@ni.com',
          applicationUrl: 'https://pef.fa.us1.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/9331',
          companyLogoUrl: 'https://example.com/logos/ni.png',
          approved: true,
        },
        {
          slug: 'software-engineer-data-engineering',
          title: 'Software Engineer - Data Engineering',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'Zeotap is hiring for Software Engineer - Data Engineering.',
          salary: 2000000,
          companyName: 'Zeotap',
          applicationEmail: 'careers@zeotap.com',
          applicationUrl: 'https://jobs.lever.co/zeotap/bd4ec452-d10b-4fcc-ba42-621bc93a1b6f/',
          companyLogoUrl: 'https://example.com/logos/zeotap.png',
          approved: true,
        },
        {
          slug: 'junior-web-developer',
          title: 'Junior Web Developer (Remote)',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'Kreativstorm is hiring for Junior Web Developer (Remote).',
          salary: 0, 
          companyName: 'Kreativstorm',
          applicationEmail: 'careers@kreativstorm.com',
          applicationUrl: 'https://kreativstorm.zohorecruit.eu/jobs/Careers/69764000025832572/Junior-Web-Developer-Remote?source=LinkedIn-Basic&embedsource=LinkedIn+Limited+Listings',
          companyLogoUrl: 'https://example.com/logos/kreativstorm.png',
          approved: true,
        },
        {
          slug: 'machine-learning-engineer-intern',
          title: 'Machine Learning Engineer Intern',
          type: 'Internship',
          locationType: 'On-site',
          location: 'Bangalore, India',
          description: 'Marvell’s semiconductor solutions is hiring for Machine Learning Engineer Intern.',
          salary: 700000,
          companyName: 'Marvell',
          applicationEmail: 'careers@marvell.com',
          applicationUrl: 'https://marvell.wd1.myworkdayjobs.com/MarvellCareers/job/Bangalore/Machine-Learning-Engineer-Intern_2401458?src=SNS-102&source=LinkedIn',
          companyLogoUrl: 'https://example.com/logos/marvell.png',
          approved: true,
        },
        {
          slug: 'junior-data-engineer',
          title: 'Junior Data Engineer',
          type: 'Full-time',
          locationType: 'On-site',
          location: 'Bangalore, India',
          description: 'Swiss Re is hiring for Junior Data Engineer.',
          salary: 1500000,
          companyName: 'Swiss Re',
          applicationEmail: 'careers@swissre.com',
          applicationUrl: 'https://careers.swissre.com/job/Bangalore-Junior-Data-Engineer-KA/1103010501/',
          companyLogoUrl: 'https://example.com/logos/swissre.png',
          approved: true,
        },
        {
          slug: 'software-engineer-india',
          title: 'Software Engineer - India',
          type: 'Full-time',
          locationType: 'On-site',
          location: 'India',
          description: 'CME Group is hiring for Software Engineer - India.',
          salary: 1500000,
          companyName: 'CME Group',
          applicationEmail: 'careers@cmegroup.com',
          applicationUrl: 'https://jobs.cmegroup.com/jobs/14411809-software-engineer-india?tm_event=view&tm_company=2371&tm_job=30912&source=Linkedin.com&bid=370',
          companyLogoUrl: 'https://example.com/logos/cmegroup.png',
          approved: true,
        },
        {
          slug: 'react-js-frontend-developer',
          title: 'React JS Frontend Developer - Remote',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'viamagus is hiring for React JS Frontend Developer - Remote.',
          salary: 0, 
          companyName: 'viamagus',
          applicationEmail: 'careers@viamagus.com',
          applicationUrl: 'https://linkedin.com/jobs/view/3990967664/?alternateChannel=search',
          companyLogoUrl: 'https://example.com/logos/viamagus.png',
          approved: true,
        },
        {
          slug: 'backend-developer-intern',
          title: 'Backend Developer Intern',
          type: 'Internship',
          locationType: 'Remote',
          location: 'India',
          description: 'Tap Health is hiring for Backend Developer Intern.',
          salary: 0,
          companyName: 'Tap Health',
          applicationEmail: 'careers@taphealth.com',
          applicationUrl: 'https://linkedin.com/jobs/view/3988650929/?alternateChannel=search',
          companyLogoUrl: 'https://example.com/logos/taphealth.png',
          approved: true,
        },
        {
          slug: 'backend-developer-intern',
          title: 'Backend Developer Intern',
          type: 'Internship',
          locationType: 'Remote',
          location: 'India',
          description: 'Spaarks is hiring for Backend Developer Intern.',
          salary: 30000, 
          companyName: 'Spaarks',
          applicationEmail: 'careers@spaarks.com',
          applicationUrl: 'https://linkedin.com/jobs/view/3990226465/?alternateChannel=search',
          companyLogoUrl: 'https://example.com/logos/spaarks.png',
          approved: true,
        },
        {
          slug: 'sde-backend-engineer',
          title: 'SDE Backend Engineer',
          type: 'Full-time',
          locationType: 'Remote',
          location: 'India',
          description: 'Setu is hiring for SDE Backend Engineer.',
          salary: 1500000,
          companyName: 'Setu',
          applicationEmail: 'careers@setu.com',
          applicationUrl: 'https://setu.zohorecruit.in/jobs/Careers/15063000019560338/SDE-Backend-Engineer?source=CareerSite',
          companyLogoUrl: 'https://example.com/logos/setu.png',
          approved: true,
        }
 
      
  ];
  
  module.exports = { jobsData };