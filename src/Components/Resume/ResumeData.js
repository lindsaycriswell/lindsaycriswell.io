let ResumeData = {
  header: "Lindsay Criswell",
  contacts: [
    { title: "415-269-7648", link: "tel:4152697648" },
    {
      title: "lindsaycriswell@gmail.com",
      link: "mailto:lindsaycriswell@gmail.com"
    },
    {
      title: "GitHub",
      link: "https://github.com/lindsaycriswell"
    },
    {
      title: "Blog",
      link: "https://medium.com/@lcriswell"
    }
  ],
  summary:
    "Full stack web developer dedicated to creating innovative web experiences that help users engage with their passions. With experience in JavaScript, React, and Ruby on Rails, and a background in non-profit marketing and fundraising, I bring strong project management, client engagement, and communication skills that help socially-conscious companies achieve their missions. Trivia, travel, and knitting enthusiast.",
  technicalProjects: [
    {
      title: "Kitchen Sync",
      links: [
        {
          title: "GitHub (front end)",
          link: "https://github.com/lindsaycriswell/kitchen-sync-frontend"
        },
        {
          title: "GitHub (back end)",
          link: "https://github.com/lindsaycriswell/kitchen-sync-backend"
        },
        {
          title: "Demo",
          link: "https://youtu.be/l_ZTE3p2yXQ"
        }
      ],
      description:
        "A cooking time management app with timed recipe instructions to complete multiple dishes simultaneously",
      features: [
        "Developed front end utilizing JavaScript, React, and Semantic UI.",
        "Employed Redux to streamline state management for efficient access to data.",
        "Created algorithms to operate on JavaScript’s Date object to ensure chronological display of timed recipe directions.",
        "Scraped Yummly cooking website to develop a custom recipe API to seed the database."
      ]
    },
    {
      title: "Learn.Love.Travel",
      links: [
        {
          title: "GitHub",
          link: "https://github.com/lindsaycriswell/learn-love-travel"
        },
        {
          title: "Demo",
          link: "https://youtu.be/rH24vAmeyNM"
        }
      ],
      description:
        "A travel app for exploring new destinations and reviewing places that you visited, inspired by TripAdvisor",
      features: [
        "Utilized JavaScript, React, and Semantic UI to design the front end.",
        "Integrated React Router to dictate URL functionality, enabling a user to return to viewed pages easily.",
        "Seeded database with data from Google Maps and Yelp APIs for comprehensive information on selected destinations.",
        "Employed user authentication and tokens for security and to ensure a user stays logged in upon page refresh."
      ]
    },
    {
      title: "Booze Houndz",
      links: [
        {
          title: "GitHub",
          link: "https://github.com/lindsaycriswell/booze-houndz"
        },
        {
          title: "Demo",
          link: "https://youtu.be/3-nz2Q98dhk"
        }
      ],
      description:
        "A Yelp-style business review app to find liquor stores in New York City",
      features: [
        "Designed database schema and configured ActiveRecord associations.",
        "Utilized data from the Yelp API to build a back end database of locations and liquor stores.",
        "Wrote Rspec tests to monitor app behavior and ensure correct functionality."
      ]
    }
  ],
  technicalSkills:
    "JavaScript, React, Redux, Ruby, Rails, Rack, JSON, SQL, HTML, CSS, Semantic UI, Bootstrap, Raiser’s Edge, Blackbaud",
  employment: [
    {
      org: "Harlem Academy",
      location: "New York, NY",
      title: "Assistant Development Director",
      dates: "January 2017 - November 2017",
      responsibilities: [
        "Developed and executed donor communications strategy, including website maintenance (HTML), social media presence, and eblasts.",
        "Produced three 28-page marketing magazines per year from scratch; conceptualized and wrote stories and directed design/photography.",
        "Oversaw all communications and marketing elements for an annual gala that raised over $1 million in one night."
      ]
    },
    {
      org: "Horace Mann",
      location: "New York, NY",
      title: "Assistant Director of Annual Giving",
      dates: "October 2014 - January 2017",
      responsibilities: [
        "Co-managed the school’s $6 million+ annual giving campaign, increasing alumni giving by nearly 2% (over 100 donations).",
        "Piloted GivingTuesday program that raised over $250,000 in one day from 177 donors (11% increase in amount; 23% increase in supporters).",
        "Recruited and trained 200 alumni volunteers, providing them with engagement tools to effectively solicit their classmates.",
        "Maintained and promoted alumni networking mobile app, driving hundreds of new users."
      ]
    },
    {
      org: "San Francisco University High School",
      location: "San Francisco, CA",
      title: "Development Associate",
      dates: "August 2012 - July 2014",
      responsibilities: [
        "Led an annual month-long silent auction that raised $125,000 in the first year, a 25% increase over the previous yearly record.",
        "Strategized and executed multiple aspects of all fundraising campaigns, including financial planning and reporting, management of  two extensive databases, donor research and cultivation, and production of  solicitation and marketing materials."
      ]
    }
  ],
  education: [
    {
      school: "Flatiron School",
      location: "New York, NY",
      year: "2018",
      description:
        "Software Engineering Immersive Program with an emphasis on JavaScript, React, and Ruby on Rails"
    },
    {
      school: "University of California, San Diego",
      location: "La Jolla, CA",
      year: "2006",
      description:
        "Bachelor of Arts in Urban Studies & Planning; Minor in English Literature"
    }
  ]
};

export default ResumeData;
