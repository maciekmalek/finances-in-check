import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
class IndexRoute extends React.Component {
  constructor(props: PageProps) {
    super(props);
    this.state = { items: [], text: "" };
  }
  render(): React.ReactNode {
    return <Layout {...this.props}></Layout>;
  }
}

export default IndexRoute;
