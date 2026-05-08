import { Footer } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
