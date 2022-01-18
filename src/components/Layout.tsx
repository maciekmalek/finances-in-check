import * as React from "react";
import Navbar from "./Navbar";

class Layout extends React.Component {
  render(): React.ReactNode {
    return (
      <Navbar
        path={""}
        uri={""}
        location={undefined}
        navigate={undefined}
        children={undefined}
        params={undefined}
        pageResources={{
          component: undefined,
          json: {
            data: undefined,
            pageContext: undefined,
          },
          page: {
            componentChunkName: "",
            path: "",
            webpackCompilationHash: "",
            matchPath: "",
          },
        }}
        data={undefined}
        pageContext={undefined}
        serverData={undefined}
      ></Navbar>
    );
  }
}

export default Layout;
