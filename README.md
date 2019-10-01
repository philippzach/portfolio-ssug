# Website for SSUG

A typography-heavy & light-themed Gatsby Starter which uses the Headless CMS [Prismic](https://prismic.io/).

Blog Content is managed by Prismic. You can find the hard coded content in "/pages". Each file represents a Page Url.

## In order to get it working locally

1. npm install (make sure using Node v10, as Gatsby doesn't support latest)
2. Install Gatsby: npm install -g gatsby-cli
3. create .env.development + .evn.production with API key:
   `API_KEY="MC5YQWhMUlJBQUFMX0RoYjJK.DO-\_vU8IFe-\_vSt4He-\_vRjvv71rMu-\_vU7vv73vv71h77-9Ljnvv71977-9WO-\_vQlZMkJ1"`
4. run "gatsby develop" to run local server on localhost:8000
5. run "gatsby build" to compile to production ready code
6. After running "build" the static files will be in /public folder

## Features

Multiple features of Prismic are used in this starter:

- **Slices**: Enrich your blogposts with custom quotes, images or codeblocks. You can order them how you like. When you used the _Image-Slice_ the image will get inserted and optimized by **gatsby-image**
- **Custom types (Categories / Posts)**:

Therefore the starter has following features:

- Prismic as Headless CMS
- Emotion and CSS for styling
- Responsive layout
  - gatsby-image - The right image size for every screen size
  - Media Queries
- SEO
  - Sitemap
  - Schema.org JSONLD
  - Helmet for Meta Tags
  - Favicons
  - robots.txt
- Offline Support
- WebApp Manifest Support
- Typography.js
- Configurable
  - Use the `website.js` to easily change the most important information

## Instructions

### Quick start guide

The easiest way to deploy this starter is to use the same setup, meaning that your Prismic repository is configured the same way as this starter. The rest of this README aims to explain exactly that. You can read through the instructions with this high-level overview in mind:

1. Clone and install the starter
2. Register an account on Prismic
3. Configure your custom types
4. Create an API key and store it in an ENV variable
5. Go to your content tab
6. Create new documents for the `Homepage, Hero Links, Projects` type and fill out every input field
7. Create at least one document for the `Category` type
8. Create at least one document for the `Post` type. Every _Slice_ needs to be used at least one time and it needs to have one category assigned! _Note: You could for example create one post with every slice and one category in it._
9. Your project is ready for development and production

### Custom setup

Changes to your Prismic repository imply the need to change the React/GraphQL code of this starter, e.g. if you change the names (and therefore API IDs) of custom types or their input fields, you'll need to change the corresponding GraphQL queries.

## Install

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```shell
gatsby new project-name https://github.com/LekoArts/gatsby-starter-prismic
cd project-name
```

## Prismic

You have to know the basics of Prismic's interface in order to be able to make the necessary changes / setup your project accordingly. You can also checkout the document ["Sourcing from Prismic"](https://www.gatsbyjs.org/docs/sourcing-from-prismic/) I wrote for the official Gatsby documentation.

### Custom types

To configure the exact same custom type as this starter, follow these steps:

1. Go to your custom types tab
2. Click the button "Create New" and choose "Repeatable Type". Give it the name `Post` (the API ID should be `post` automatically)
3. On the right side you have a sidebar with **Build mode** and **JSON editor**. Open the **JSON editor** tab and insert the data from `.prismic/post.json`. Save your type

Follow the second and third step (with the respective file from `.prismic`) for the following types:

| Name       | API ID     | Type       |
| ---------- | ---------- | ---------- |
| Category   | category   | Repeatable |
| Hero Links | hero_links | Single     |
| Homepage   | homepage   | Single     |
| Projects   | projects   | Single     |

These are the exact same custom types I used for this starter.

### API key

You need to define the API Key for your Prismic repository in `gatsby-config.js` ([Video tutorial](https://www.youtube.com/watch?v=iH0P4KcOeVc)). You can retrieve the key here:

- You can generate an access token in the **API & Security** section of your repository settings. Setting a **Callback URL** is not necessary.
- The token will be listed under "Permanent access tokens".

It's best to store the API Key in an environment variable. Create the file `.env.development` in the root dir of your project. Its content should be:

`API_KEY=OIJSOJIO-YOURKEYHERE-EAJNALÖKND`

If you deploy to Netlify you can also setup an environment variable.

More information on the source plugin: [gatsby-source-prismic](https://github.com/angeloashmore/gatsby-source-prismic)

### Labels

Prismic gives you the tool called **Label** in the Rich Text field. You can wrap single words or complete text blocks with a label (they will have a yellow background when labeled). Normally this is just a `<span>` with a name, but the `gatsby-config.js` converts these marked words/blocks into code blocks with PrismJS classnames (and therefore syntax highlighting 🎉).

The two usecases:

- You mark a single word / sentence and apply the `text` label: Inline code (single backtick in markdown)
- You choose the `Preformatted` block (where can also choose the Headings) and apply any other (except `text`) label: Code block (three backticks in markdown)

### Slices

The `Post` custom types offers four slices in the slice zone:

- **Code Block**: This slice automatically inserts a `Preformatted` field in which you can paste your code. Before inserting you should choose a **Label** for the correct syntax highlighting
- **Quote**: A quote in a `blockquote`
- **Text**: Your normal _Rich Text_ field
- **Image**: This image won't be inlined with a Prismic URL, but downloaded and processed with `gatsby-image`

## Development

**Before running the local development server you'll need to add Content to your Prismic repository!**

Go to your documents (`https://your-name.prismic.io/documents/`) and create content with the newly created types. Fill out the `Homepage`, `Hero Links`, and `Projects` single type. Create some categories and add at least one Post. This post needs to contain all available slices and at least one category. If you create multiple posts make sure that every slice gets used at least one time.

**Please note**: You have to publish all these documents (not only saving them)!

After that you can run the local server:

```shell
npm run dev
```

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/plugins/)

### Building your site

```shell
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/website`:

```JS
module.exports = {
  _pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  _title: 'Gatsby Starter - Prismic.io', // Navigation and Site Title
  _titleAlt: 'Prismic Starter', // Title for JSONLD
  description: 'A bright single-page portfolio starter with big typography & images for Gatsby.',
  _url: 'https://gatsby-starter-prismic.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'LekoArts', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@starter_prismicio', // Twitter Username
};
```

You can also change the colors, container widths and other stuff in `src/styles/theme`:

```JS
const theme = {
  colors: {
    primary: '#3D63AE',
    bg: '#fff',
    black: '#000',
    greyLight: '#EBEDF2',
    greyBlue: '#a2bce2',
    grey: '#595C62',
    greyDark: '#303643',
    greyDarker: '#1c252b',
  },
  maxWidth: '1000px',
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
};

export default theme;
```

**Attention:** You also need to edit `static/robots.txt` to include your domain!
