const path = require('path');

exports.createPages = async ({ actions }) => {

  actions.createPage({
    path: '/my/custom/pif/paf',
    component: path.resolve('./src/PageTemplate.js'),
    context: {}, // Objet fourni en props au composant
  });

};


