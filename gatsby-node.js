exports.createPages = async ({ actions, graphql, reporter }) => {
  const res = await graphql(`
    query AllWpPage {
      allWpPage {
        edges {
          node {
            id
            title
            uri
            isFrontPage
            isPostsPage
          }
        }
        totalCount
      }
    }
  `);

  if (
    res &&
    res.data &&
    res.data.allWpPage &&
    res.data.allWpPage.edges &&
    res.data.allWpPage.edges.length > 0
  ) {
    res.data.allWpPage.edges.forEach((page) => {
      actions.createPage({
        path: page.node.uri,
        component: require.resolve("./src/templates/page.jsx"),
        context: {
          id: page.node.id,
        },
      });

      reporter.info(
        `Page created: ${page.node.title} at ${page.node.uri} [${
          page.node.isFrontPage
            ? "Home Page"
            : page.node.isPostsPage
            ? "Posts Page"
            : "Page"
        }]`
      );
    });
    reporter.info(`# -----> PAGES TOTAL: ${res.data.allWpPage.totalCount}`);
  }
};
