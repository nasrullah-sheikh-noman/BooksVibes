import NavbarPage from "@/components/shared/navbar/page";
import BannerPage from "@/components/shared/banner/page";
import FooterPage from "@/components/shared/footer/page";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarPage />
      <BannerPage />
      <main className="flex-1">{children}</main>
      <FooterPage />
    </div>
  );
}