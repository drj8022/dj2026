export default [
  {
    id: 'myfuture',
    layout: 'Basic',
    animation: 'Slide Up',
    images: [
      {id: 1, src: '/images/myfuture-med.jpg', alternativeText: 'my alt text', width: 1280, height: 2020}
      // {id: 1, src: '/images/myfuture-tall-2.jpg', alternativeText: 'my alt text', width: 925, height: 1920}
      // {id: 1, src: '/images/myfuture-tall.jpg', alternativeText: 'my alt text', width: 1280, height: 2656}
      // {id: 1, src: '/images/myfuture-1.jpg', alternativeText: 'my alt text', width: 1280, height: 960}
    ],
    title: { copy: 'MyFuture' },
    meta: {
      office: 'MullenLowe',
      role: 'Lead developer',
      time: '~1 year',
      launch: '2025',
      client: 'Department of Defense',
      tech: 'Node, Rails, AWS',
    },
    description: '<p>Myfuture was a long form project that required sophisticated input from dozens of experts. Everyone from internal team members, 3rd party vendors, and close client relationships drove toward a goal of creating a site to assist high-school graduates with figuring out what&rsquo;s next in life.</p><p>Specifically, I worked with our content and design teams to ensure everything they were creating would be captured in our <span>cms</span>. I worked with our <span>ux</span> team and project managers to ensure features could be built on time and on budget. I worked with analytics and other teams to confirm everything was <span>ada</span> compliant and could be tracked properly. I lead the development work, "chunking" out areas where other devs could add features.</p><p>We built several custom visualization elements, quizes, and interactive tools; experiences users could only access on-site. We also ingested government data to generate over 7,000 unique detail pages, and created sophisticated searching and filtering functionality to parse that content. In addition to the main deliverable we also provided the DoD with monthly <span>seo</span>, <span>ada</span> and broken link scans.</p>',
    ctas: [
      {id: 1, label: 'Wayback Machine', href: 'https://web.archive.org/web/20260621083651/https://myfuture.com/'}
    ],
  },
  {
    id: 'waypoint',
    layout: 'Triptych Reverse',
    animation: 'Clip Left',
    images: [
      {id: 1, src: '/images/waypoint-1.jpg', alternativeText: 'my alt text', width: 1280, height: 800},
      {id: 2, src: '/images/waypoint-2.jpg', alternativeText: 'my alt text', width: 1280, height: 800},
      {id: 3, src: '/images/waypoint-3.jpg', alternativeText: 'my alt text', width: 1280, height: 800},
    ],
    title: { copy:'Waypoint Living Spaces' },
    meta: {
      office: 'MullenLowe',
      role: 'Lead front-end developer',
      time: '7 Months',
      launch: '2023',
      client: 'American Woodmark Company',
      tech: 'Adobe Experience Manager',
    },
    description: '<p>Instead of our usual open source stack, this client chose to go with Adobe, Azure, and other Microsoft products. We brought on an <span>aem</span> architect to assist, which was great as we found ourselves pioneering somewhat with Adobe&rsquo;s new <span>aem</span> as a cloud service.</p><p>The build was fun if somewhat challenging. We created four custom tools, including a bespoke cabinet configurator and a cost estimator. I was able to "chunk" out bits of work for another front-end dev, and I got to use a bit of Java to quickly turn some modules around. Overall it was a fantastic learning experience, I loved being on a larger team and the collaboration required to succeed really helped me step my game up.</p>',
    ctas: [
      {id:1, label: 'Waypoint.com', href: 'https://www.waypointlivingspaces.com/'}
    ]
  },
  {
    id: 'wechoose2',
    layout: 'Triptych',
    animation: 'Clip Right',
    images: [
      {id: 1, src: '/images/jfkwechoose2-1.jpg', alternativeText: 'my alt text', width: 1280, height: 720},
      {id: 2, src: '/images/jfkwechoose2-2.jpg', alternativeText: 'my alt text', width: 1280, height: 720},
      {id: 3, src: '/images/jfkwechoose2-3.jpg', alternativeText: 'my alt text', width: 1280, height: 720},
    ],
    title: { copy:'WeChoose2' },
    meta: {
      office: 'MullenLowe',
      role: 'Lead Developer',
      time: '3 Months',
      launch: '2022',
      client: 'JFK Presidential Library',
      tech: 'Tiktok API, waveform visualizer, animations'
    },
    description: 'This was a very fun project. Celebrating the 60th anniversary of JFK&rsquo;s &ldquo;Moonshot&rdquo; speech, the JFK Presidential Library & Museum wanted to connect with the next generation of Americans. This build had had a crazy amount of interactive animations, a Tiktok <span>api</span> integration, and a custom waveform visualizer for an original song written for the occasion.',
  },
  {
    id: 'opamil',
    layout: 'Simple',
    animation: 'Slide Up',
    title: { copy:'Opa.mil' },
    meta: {
      office: 'MullenLowe',
      role: 'Front end developer',
      time: '8 Months',
      launch: '2018',
      client: 'Department of Defense',
      tech: 'Rails, Refinery, SOC 2 compliance',
    },
    description: '<p>Opa acts as an online repository for the DoD and there were some novel security workarounds we needed to solve to launch on time.</p><p>I built out all user facing elements of this site using Ruby on Rails and the Refinery framework. The broader team was great to work with and I got extensive experience tweaking rails methods and running rails migrations.</p>',
    ctas: [
      {id:1, label: 'opa.mil', href: 'https://www.opa.mil/'}
    ]
  },
  {
    id: 'cybermission',
    layout: 'Basic',
    // layout: 'Tall',
    animation: 'Slide Up',
    images: [
      {id: 3, src: '/images/cybermission-tall.jpg', alternativeText: 'my alt text', width: 1280, height: 1920},
    ],
    title: { copy:'Cyber Mission' },
    meta: {
      office: 'MullenLowe',
      role: 'Lead developer',
      time: '7 Months',
      launch: '2024',
      client: 'Department of Defense',
      tech: 'Next.js, Strapi',
    },
    description: '<p>Another project for the DoD, Cybermission was created to educate young people about cybersecurity, and to inspire them to get started by engaging in play.</p><p>To this end we created four interactive games, each focusing on different aspects of military cyber security. Games involving math, pattern matching, &ldquo;code breaking&rdquo; and the like. Players could earn badges by completing challenges and share their results. Dedicated players could even unlock a secret mission!</p><p>This whole project was a blast; not just because making games is fun, but the design was slick and the technical challenge of all that state management was pretty wild. The team really worked really well together and our group collaborations always got us somewhere better that where we started.</p>',
    ctas: [
      {id:1, label: 'Wayback Machine', href: 'https://web.archive.org/web/20241115114903/https://www.cybermission.tech/'}
    ]
  },
  {
    id: 'hyatt',
    layout: 'Simple',
    animation: 'Slide Up',
    title: { copy:'Hyatt Three Cities' },
    meta: {
      office: 'MullenLowe',
      role: 'Lead front-end developer',
      time: '2-3 Months',
      launch: '2017',
      client: 'Hyatt Hotels',
      tech: 'React, Google Maps API, YouTube API',
    },
    description: '<p>This was a fun and fast project myself and another developer built in late 2017. Hyatt wanted to create "36 hours in..." style influencer content to promote new properties in NYC, Miami, and Chicago. The idea was to film an influencer for 36 hours as they traversed each city, focusing on the urban amenities, not just the luxurious buildings.</p><p>We created a custom map skin and used the Google Maps API to show users exactly where the influencer was walking during their urban explorations. We then synched the path with the Youtube API to essentially create a scrubbable playhead of the influencers journey. We also built "pop-up video" style overlay content when the influencer visited specific bars, restaurants, and entertainment venues.</p><p>The New York video was working and looking great, but unfortunately the project was cancelled after hurricane Irma pummeled Miami and made shooting on-site impossible. </p>',
  },
  {
    id: 'pieinthesky',
    layout: 'Triptych Reverse',
    animation: 'Clip Left',
    images: [
      {id: 1, src: '/images/pieinthesky-1.jpg', alternativeText: 'my alt text', width: 1280, height: 743},
      {id: 2, src: '/images/pieinthesky-2.jpg', alternativeText: 'my alt text', width: 1280, height: 743},
      {id: 3, src: '/images/pieinthesky-3.jpg', alternativeText: 'my alt text', width: 1280, height: 743},
    ],
    title: { copy:'Pie In the Sky' },
    meta: {
      office: 'MullenLowe',
      role: 'Front end developer',
      time: '2 Months',
      launch: '2018',
      client: 'JetBlue',
    },
    description: 'JetBlue was expanding its west coast presence and wanted to make NYC and LA feel a bit closer together. We helped them built a custom transcontinental pizza delivery service. This site needed a distinct look and feel, as well as zip code lookups and the ability to handle various user states. Credit card info was handled by a 3rd party, and there wasn&rsquo;t a back end since there were only a few hundred pizzas to keep track of.',
  },
  {
    id: 'soundmachine',
    layout: 'Diptych',
    animation: 'Clip Right',
    images: [
      {id: 1, src: '/images/sound-machine-02.jpg', alternativeText: 'my alt text', width: 640, height: 480},
      {id: 2, src: '/images/sound-machine-01.jpg', alternativeText: 'my alt text', width: 640, height: 480},
      {id: 3, src: '/images/sound-machine-04.jpg', alternativeText: 'my alt text', width: 640, height: 480},
    ],
    title: { copy: 'The Sound Machine' },
    meta: {
      office: 'Thesis Project',
      // role: 'Thesis Project',
      time: '3 Months',
      launch: '2009',
      client: 'MassArt',
      tech: 'Max MSP, woodworking',
    },
    description: '<p>The goal of the Sound Machine is to give people with limited or no musical back-ground the experience of being a performer. It is designed to challenge users to communicate in ways they may be unfamiliar or uncomfortable with. The absence of a screen attempts to push the computer into the background, allowing participants to focus on their fellow performers.</p><p>I built the Sound Machine because I love music, but I am not a musician. I wondered if musical novices would be able to duplicate the modes of communication used by professional musicians. This project also presented itself as a great platform for experimenting with physical interfaces.</p>',
    // description: '<p>The goal of the Sound Machine is to give people with limited or no musical background the experience of being a performer. The Sound Machine is designed to challenge users to communicate in modes, non-verbally for example, that they may be unfamiliar or uncomfortable with. Screens are omitted in an attempt to push the computer into the background, allowing participants the freedom to focus on their fellow performers.</p><p>I love music, but I am not a musician, so this project really excited me. I have always enjoyed watching the dynamics that occur between performing musicians. I wondered if such communication, informed by those professional individuals knowledge of music, would be possible to replicate using non-musicians. This project also presented itself as a great platform for moving away from screen-based media and into physical interfaces.</p><p>For me, that moment of interest was the litmus test for the project&rsquo;s ultimate success. It was great to see my passion rewarded when a group of friends got together and shared a smile at the experience. It was even more rewarding to see groups of strangers using the machine to form an impromptu community.</p>',
  }
  // {
  //   id: 'oneyearcity',
  //   layout: 'Simple',
  //   images: [
  //     {id: 1, src: '/images/one-year-city-01.jpg', alternativeText: 'my alt text'},
  //     // {id: 2, src: '/images/waypoint-2.jpg', alternativeText: 'my alt text'},
  //     // {id: 3, src: '/images/waypoint-3.jpg', alternativeText: 'my alt text'},
  //   ],
  //   title: { copy:'One Year in the City' },
  //   meta: {
  //     office: 'MassArt',
  //     role: 'Designer',
  //     time: '1 Month',
  //     launch: '2008',
  //     // client: 'American Woodmark Company',
  //     tech: 'Adobe Illustrator, Microsoft Excel, Patientce',
  //   },
  //   description: '<p>This poster overlays weather patterns with sports and crime data for the city of Boston during 2007. I doodled the basic design in a few minutes, and then painstakingly translated the data into Illustrator by hand.</p><p>It&rsquo;s interesting to see crime wax when the Pats lost the super bowl, and wane when the Sox won the world series. Did the fans play a role? Was weather the cause, or was it all just circumstantial? I like that the viewer is challenged to be the judge.</p>',
  // }
]
