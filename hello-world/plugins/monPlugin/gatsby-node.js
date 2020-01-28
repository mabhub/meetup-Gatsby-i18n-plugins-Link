
exports.onCreatePage = async ({ page, actions }) => {

  for (const language of ['fr', 'en', 'es']) {

    actions.createPage({
      ...page,
      path: `/${language}${page.path}`,
      context: { language },
    });

  };

};
