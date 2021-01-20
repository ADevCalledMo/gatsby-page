import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog Posts</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edges => {
          return (
            <li>
              <Link to={`/blog/${edges.node.fields.slug}`}>
                <h2>{edges.node.frontmatter.title}</h2>
                <p>{edges.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
