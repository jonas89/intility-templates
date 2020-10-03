module.exports = {
  title: 'Create Intility App',
  tagline: 'Templates for Create React App',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'intility', // Usually your GitHub org/user name.
  projectName: 'cra-templates', // Usually your repo name.
  themeConfig: {
    defaultMode: 'dark',
    sidebarCollapsible: false,
    navbar: {
      title: 'Create Intility App',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://reactjs.org/',
          label: 'React docs',
          position: 'right',
        },
        {
          href: 'https://create-react-app.dev/',
          label: 'Create React App docs',
          position: 'right',
        },
        {
          href: 'https://gitlab.intility.no/DeveloperServices/cra-templates',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Bifrost',
              href: 'https://bifrost.intility.no/',
            },
            {
              label: 'React',
              href: 'https://reactjs.org/',
            },
            {
              label: 'Create React App',
              href: 'https://create-react-app.dev/',
            },
          ],
        },
        {
          title: 'Channels',
          items: [
            {
              label: '#programming',
              href: 'https://intility.slack.com/archives/CRTT6METE',
            },
            {
              label: '#frontend',
              href: 'https://intility.slack.com/archives/CRVGGS6R1',
            },
            {
              label: 'developers.intility.no',
              href: 'https://developers.intility.no/',
            },
          ],
        },
        {
          title: 'Intility Services',
          items: [
            {
              label: 'GitLab',
              href: 'https://gitlab.intility.no/',
            },
            {
              label: 'SonarQube',
              href: 'https://sonarqube.intility.no/',
            },
            {
              label: 'Sentry',
              href: 'https://sentry.intility.no/',
            },
            {
              label: 'OpenShift',
              href: 'https://openshift.intility.no:8443/',
            },
            {
              label: 'Azure Portal',
              href: 'https://portal.azure.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intility AS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://gitlab.intility.no/DeveloperServices/cra-templates/-/tree/master/docusaurus/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};