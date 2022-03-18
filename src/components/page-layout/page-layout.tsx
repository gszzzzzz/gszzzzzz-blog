import * as React from "react";
import PageMeta from "../page-meta/page-meta";
import Header from "../header/header";

interface PageLayoutProps {
  children?: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="max-w-container mx-auto px-4 antialiased">
      <PageMeta />
      <Header />
      <main>{children}</main>
    </div>
  );
}
