import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

export default function PageMeta() {
  let { site } = useStaticQuery(query);
  let { title, description, siteUrl } = site.siteMetadata;

  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
}

const query = graphql`
  query PageMeta {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
