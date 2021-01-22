import React from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout";
// query($slug: String!) {
//   contentfulBlogPost(slug: { eq: $slug }) {
//     title
//     date(formatString: "Do MMMM YYYY")
//     body {
//       raw
//     }
//   }
// }

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "Do MMMM YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            fixed(width: 750) {
              src
            }
          }
        }
      }
    }
  }
`;

const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const {
          fixed: { src },
          title
        } = node.data.target;

        return <img src={src} alt={title} />;
      }
    }
  };

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.date}</p>
      {renderRichText(props.data.contentfulBlogPost.body, options)}
    </Layout>
  );
};

export default Blog;
