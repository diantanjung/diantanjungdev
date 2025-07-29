import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "../ui/ScrollToTopButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
