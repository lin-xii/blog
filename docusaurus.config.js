// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "林十二XII 的 Blog",
  tagline: "刀耕火种的程序猿",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  url: "https://lin-xii.github.io",
  baseUrl: "/blog/",
  trailingSlash: false,
  projectName: "blog", // Usually your repo name.
  organizationName: "lin-xii", // Usually your GitHub org/user name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "全部文章",
          blogTitle: "林十二XII 的 Blog",
          blogDescription: "刀耕火种的程序猿",
          postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "林十二XII",
        logo: {
          alt: "Site Logo",
          src: "img/avatar.JPG",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/lin-xii",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Other",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 林十二XII, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
