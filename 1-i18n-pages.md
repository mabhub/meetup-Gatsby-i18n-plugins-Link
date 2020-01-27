










# Création de routes/pages pour l'internationalisation
















---

## Petit sondage pour commencer

- Qui a déjà (au moins) bricolé avec Gatsby ?
- Qui a déjà ouvert un fichier gatsby-node.js ?
- Qui y a déjà utilisé les *extension points* de Gatsby ? (onCreatePage, onCreateNode, createPage,…)
- Qui y a déjà créé manuellement des routes ?
- Qui a déjà écrit un plugin Gatsby ? *(les starters ne comptent pas 😉)*
- Qui l'a publié ?


















---

## Starter minimaliste

Le starter *gatsby-starter-hello-world* est le plus petit.
Aucun plugin ni configuration par défaut.

`gatsby new mon-site https://github.com/gatsbyjs/gatsby-starter-hello-world`

> Il n'est *pas* conseillé de partir de celui-là en général.















---

## Mécanique des pages simples

Par défaut, une page *(route)* est créée
pour chaque fichier JS du dossier `src/pages`

```
├── public/
├── src/
│   └── pages/
│       ├── index.js
│       └── page-2.js
├── static/
├── gatsby-config.js
└── package.json
```

Doc : https://www.gatsbyjs.org/docs/creating-and-modifying-pages/
















---

### Un simple composant React

Une page se fait d'un simple composant React :

```js
// src/pages/page-2.js

import React from 'react';

export default props => <div>Hello world (page2)</div>;
```




















---

### Astuce

La page d'erreur 404 du mode de développement
permet d'accéder à l'ensemble des pages existantes.

- http://localhost:8000/dev-404-page/
- http://localhost:8000/poufpouf/

Doc : https://www.gatsbyjs.org/docs/add-404-page/




















---

## Gatsby APIs

Gatsby fournit 4 fichiers pour contrôler son comportement :

- gatsby-config.js :  Chargement et paramétrages des plugins
- gatsby-browser.js : Dans la navigateur *(runtime)*
- gatsby-node.js :    Au moment du *build*
- gatsby-ssr.js :     Serve side rendering

Doc : https://www.gatsbyjs.org/docs/api-files/


















---

### Gatsby Node APIs

```js
// gatsby-node.js

exports.sourceNodes = async () => { /* */ };
exports.onCreateNode = async () => { /* */ };
exports.createPages = async () => { /* */ };
exports.onCreatePage = async () => { /* */ };
exports.onPostBuild = async () => { /* */ };
// ...
```

> Hooks, Extension points, etc. :
>   Fonctions qu'on exporte, qui seront appelées par Gatsby

Doc : https://www.gatsbyjs.org/docs/node-apis/




















---

## Créer une page

Ces hooks fournissent des `actions`.
Parmi ces actions, la fonction `createPage()` put être appelée.

Doc : https://www.gatsbyjs.org/docs/node-apis/#createPages




















---

### Créer une page manuellement

```js
// gatsby-node.js
exports.createPages = async ({ actions }) => {

  actions.createPage({
    path: '/my/custom/pif/paf',
    component: path.resolve('./src/PageTemplate.js'),
    context: {}, // Objet fourni en props au composant
  });

};
```
> Les fonctions de l'objet `actions`, sont des *dispatch* d'actions Redux.

Doc :
- https://www.gatsbyjs.org/docs/actions/
- https://www.gatsbyjs.org/docs/actions/#createPage
- https://redux.js.org/api/bindactioncreators/




















---

## Cas d'usage : internationalisation

Pour **chaque page** de `src/pages`,
on veut créer une route pour **chaque langue**.

+ Référencement
+ Accessibilité
+ Performances

Mais on souhaite éviter d'avoir à
créer un fichier JS / langue / page.




















---

### Une page par langue

```js
// gatsby-node.js
exports.onCreatePage = async ({ page, actions }) => {

  for (const language of ['fr', 'en', 'es']) {

    actions.createPage({
      ...page,
      path: `/${language}${page.path}`,
      context: { language },
    });


  };

};
```




















---

### Sources de données

Les données utilisées dans `gatsby-node.js`
peuvent provenir de n'importe ou :

- Variables JS
- Données distantes : API Rest, Json, GraphQL, CMS, scraping…
- Données locales : JSON, Markdown, Images,…

C'est ainsi que fonctionnent les plugins *source* (`gatsby-source-*`)

Doc : https://www.gatsbyjs.org/plugins/?=source


















---
