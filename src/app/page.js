
import FeaturedPage from "@/components/featured/page";
import BannerPage from "@/components/shared/banner/page";
import FooterPage from "@/components/shared/footer/page";
import NavbarPage from "@/components/shared/navbar/page";

export default function Home() {
  return (
    <div className="container mx-auto">
      <NavbarPage/>
      <BannerPage/>
      <FeaturedPage/>
      <FooterPage/>
    </div>
  );
}
