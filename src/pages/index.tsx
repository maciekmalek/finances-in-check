import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import RecordsStore from "../stores/records-store";
import { Provider } from "mobx-react";
import { storeAnnotation } from "mobx/dist/internal";

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

  return (
    <Provider records={new RecordsStore()}>
      <Layout {...props}></Layout>
    </Provider>
  );
}
