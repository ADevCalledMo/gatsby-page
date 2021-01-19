import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark {
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                    }
                }
            }
        }
    `)

    console.log(data, "<---- DATA IS HERE")

  return (
    <Layout>
      <h1>Blog Posts</h1>
      <ol>
          {data.allMarkdownRemark.edges.map((edges) => {
            return (
                <li>
                    <h2>{edges.node.frontmatter.title}</h2>
                    <p>{edges.node.frontmatter.date}</p>
                </li>
            )
          })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
