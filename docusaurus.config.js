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
          feedOptions: {
            type: "rss",
            copyright: `Copyright © ${new Date().getFullYear()} 林十二XII 的 Blog`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-0F0ZD1DZPN",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO
      metadata: [
        {
          name: "keywords",
          content: "lin-xii,林十二,林十二XII,blog,博客,小破站",
        },
      ],
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
          { to: "/tags", label: "Tags", position: "left" },
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
            title: "其他平台",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/lin__xii",
              },
              {
                label: "Bilibili",
                href: "https://space.bilibili.com/5346265",
              },
            ],
          },
          {
            title: "站内工具",
            items: [
              {
                label: "rss",
                href: "https://lin-xii.github.io/blog/rss.xml",
              },
            ],
          },
          {
            title: "小伙伴们",
            items: [
              {
                label: "TopCaver",
                href: "http://blog.topcaver.com/",
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

  plugins: [injectLunrSearch()],
};

module.exports = config;

function injectLunrSearch() {
  if (process.env.NODE_ENV === "production") {
    // if (process.env.NODE_ENV === "development") {
    return [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["en", "zh"], // language codes
      },
    ];
  }
  return null;
}
