import { forwardRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children }, ref) => {
  return (
    <div ref={ref} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-14 sm:pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
