// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Omega's Terminal",
  tagline: 'A modern and modular terminal for clanning',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  plugins: [require.resolve('docusaurus-lunr-search')],
  // Set the production url of your site here
  url: 'https://terminal-docs.omegadev.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "title", content: "Omega's Terminal documentation" },
        { name: "description", content: "Guides and addons list for omega's clanning terminal" },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://terminal-doc.omegadev.xyz/" },
        { name: "og:title", content: "Omega's Terminal documentation" },
        { name: "og:description", content: "Guides and addons list for omega's clanning terminal" },
        { name: "og:image", content: "https://terminal-docs.omegadev.xyz/img/meta.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://terminal-doc.omegadev.xyz/" },
        { name: "twitter:title", content: "Omega's Terminal documentation" },
        { name: "twitter:description", content: "Guides and addons list for omega's clanning terminal" },
        { name: "twitter:image", content: "https://terminal-docs.omegadev.xyz/img/meta.png" }
      ],
      // Replace with your project's social card
      navbar: {
        title: "Omega's Terminal",
        logo: {
          alt: "Omega's Terminal Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            position: 'left',
            label: 'Addons',
            to: '/docs/Addons',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/Guides/Basic/Setup',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Events viewer',
                href: 'https://terminal.omegadev.xyz',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['lua']
      },
    }),
};

export default config;
