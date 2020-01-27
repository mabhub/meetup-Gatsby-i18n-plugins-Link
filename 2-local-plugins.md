# Organiser les différents métiers avec des plugins locaux

---

## Généralités concernant les plugins

Les plugins sont habituellement des dépendances npm,
activés grâce au fichier `gatsby-config.js`.

```shell
npm i gatsby-plugin-react-helmet
```

```js
// gatsby-config.js

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    // ou bien :
    {
      resolve: 'gatsby-plugin-react-helmet',
      option: {},
    }
  ],
};
```

---

## Plugin local

Il n'est pas indispensable de créer un package npm
pour créer un plugin utilisable dans Gatsby.

```
└── plugins/
    └── mon-propre-plugin/
        └── package.json
```

```js
// gatsby-config.js
module.exports = {
  plugins: ['mon-propre-plugin'],
};
```

Doc : https://www.gatsbyjs.org/docs/creating-a-local-plugin/

---

### APIs utilisables

Les 3 API Gatsby sont utilisables dans les plugins.

- gatsby-node.js
- gatsby-browser.js
- gatsby-ssr.js

---

### Organiser son code / factorisation

On peut donc placer les différents métiers applicatifs
dans différents plugins locaux :

```
└── plugins/
    ├── mon-plugin-1/
    |   ├── package.json
    │   └── gatsby-node.js
    └── mon-plugin-2/
        ├── package.json
        └── gatsby-node.js
```

On évite ainsi d'avoir un unique `gatsby-node.js` à la racine du site.

+ Maintenabilité
+ Pérénité
+ Lisibilité

---

## Demo / live coding
