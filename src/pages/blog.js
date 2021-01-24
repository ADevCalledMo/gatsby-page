import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head"

import blogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            date(formatString: "Do MMMM YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
    <Head title="Blog" />
      <h1>Blog Posts</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edges => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edges.node.slug}`}>
                <h2>{edges.node.title}</h2>
                <p>{edges.node.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
