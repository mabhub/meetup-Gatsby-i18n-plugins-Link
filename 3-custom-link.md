










# Composant personnalisé pour les liens localisés



















---

## Les liens simples

```js
// page-2.js

import React from 'react';
import { Link } from 'gatsby';

export default props => (
  <div>
    Page 2
    <Link to="/page-3">Page 3</Link>
  </div>
);
```



















---

### Problème des routes localisées

Un même composant de page est utilisé pour chaque langue,
avec des routes différentes :

- `/fr/page-2`
- `/en/page-2`
- `/de/page-2`
- `/fr/page-3`
- `/en/page-3`
- `/de/page-3`

On souhaite que depuis `page-2` un lien
vers une autre page préserve la bonne langue.



















---

### Composant Link personnalisé

```js
// custom-link.js

import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

const CustomLink = ({ to, ...props }) => {
  const { i18n } = useTranslation();

  return <Link to={`/${i18n.language}${to}`} {...props} />;
};

export default CustomLink;
```

> Idéalement, on ajoute `React.forwardRef()`



---

### Utilisation simple

Dans les composants déjà en place, on peut simplement remplacer
le `<Link />` de Gatsby, par celui qu'on vient de créer :

```diff
  import React from 'react';
- import { Link } from 'gatsby';
+ import Link from '../components/custom-link.js';
```



















---