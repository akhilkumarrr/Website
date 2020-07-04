module.exports = {
  siteTitle: 'Akhil Kumar | Software Engineer',
  siteDescription:
    'Akhil Kumar is a software engineer based in Boston, MA who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Akhil Kumar, Akhil, Kumar, yeruva, software engineer, front-end engineer, web developer, Python, UNSW',
  siteUrl: 'https://akhilkumar.info',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Akhil Kumar',
  location: 'Syndey, AU',
  email: 'akhilkumar@email.com',
  github: 'https://github.com/akhilkumarr',
  twitterHandle: '@akhilkumarr',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/akhilkumarr',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/akhilkumarr',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/bKumar7',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/akhilkumarr',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/akhilkumarr',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
