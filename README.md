# Next.js 14+ Boilerplate with Tailwind CSS 3.4 and TypeScript

🚀 A boilerplate for building Next.js projects with the App Router, Tailwind CSS, and TypeScript. This setup emphasizes a high-quality developer experience with a modern stack that includes Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Commitlint, and Tailwind CSS. It also supports multi-language (i18n) out of the box. Optimized for compatibility with Next.js 15 and beyond.

Clone this repository to kickstart your own [Next.js](https://nextjs.org) project.

### 🌟 Features

This boilerplate focuses on flexibility and a streamlined developer experience, allowing you to remove or extend components as needed:

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 [TypeScript](https://www.typescriptlang.org) for type safety
- 💎 [Tailwind CSS](https://tailwindcss.com) integration for rapid UI development
- ✅ Strict Mode for TypeScript and React 18
- 🌐 Multi-language (i18n) with [next-intl](https://next-intl-docs.vercel.app/)
- ♻️ Type-safe environment variables with T3 Env
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code formatting with [Prettier](https://prettier.io)
- 🦊 Husky for managing Git hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Commitlint to enforce conventional commit messages
- 💡 Absolute Imports using `@` prefix
- 🗺️ SEO Enhancements like sitemap.xml and robots.txt generation
- 🌈 Simple Theme included for a quick start


### 📋Requirements

- Node.js 20+ and npm

### Getting started

Clone the repository and install dependencies:

```shell
git clone <repo-url> my-project-name
cd my-project-name
npm install
```

Run the development server:

```shell
npm run dev
```

Visit http://localhost:3000 in your browser to see your project in action..

### 📂Project structure

```shell
.
├── README.md                    # Documentation
├── .github                      # GitHub configurations
├── .husky                       # Husky Git hooks configurations
├── .vscode                      # VSCode settings
├── public                       # Public assets
├── src                          # Main source code
│   ├── app                      # Next.js App Router components
│   ├── components               # Reusable React components
│   ├── libs                     # Third-party library configurations
│   ├── locales                  # Internationalization files (i18n)
│   ├── styles                   # Global and component styles
│   ├── types                    # TypeScript type definitions
│   ├── utils                    # Utility functions
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

Feel free to customize the provided code to fit your needs 🚀.

### 🔖 Commit Guidelines

This project uses the [Conventional Commits](https://www.conventionalcommits.org/) standard for commit messages. To simplify the commit process, use [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```


### 🌍 Deploying to Production

Build the production version:

```shell
$ npm run build
```

To test the production build locally, run:

```shell
$ npm run start
```

Open http://localhost:3000 to see the production version.

#### Bundle Analyzer

To analyze the JavaScript bundle size, use the built-in bundle analyzer:

```shell
npm run build-stats
```

This command will generate and open a report in your browser.
