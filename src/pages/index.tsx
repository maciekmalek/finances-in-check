import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

export default function IndexRoute() {
  const props = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
          description
          username
        }
      }
    }
  `);

  return <Layout {...props}></Layout>;
}
