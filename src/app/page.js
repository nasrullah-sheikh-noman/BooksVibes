import LeftSidebarPage from "@/components/leftsidebar/page";
import MiddleSidebarPage from "@/components/middle/page";
import RightSidebarPage from "@/components/rightsidebar/page";

export default function Home() {
  return (
    <div>
      <div className='container mx-auto grid grid-cols-3 gap-4 items-center text-center mt-8'>
            <LeftSidebarPage/>
            <MiddleSidebarPage/>
            <RightSidebarPage/>
          </div>
    </div>
  );
}
