import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function Header() {
  const { site } = useStaticQuery(query);
  const { gitHubUrl } = site.siteMetadata;

  return (
    <header className="flex items-center justify-between py-4">
      <div>
        <h1 className="font-semibold">차규석</h1>
        <h2 className="text-xs">Cha Gyuseok (gszzzzzz)</h2>
      </div>
      <div className="flex items-center gap-4">
        <a className="text-sm">Posts</a>
        <a className="text-sm">Resources</a>
        <a className="text-sm">About</a>
        <Link to={gitHubUrl} className="text-sm hover:underline">
          GitHub
        </Link>
      </div>
    </header>
  );
}

const query = graphql`
  query Header {
    site {
      siteMetadata {
        gitHubUrl
      }
    }
  }
`;
