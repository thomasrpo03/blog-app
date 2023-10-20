import ArticlesSection from "../components/articles-section";
import Profile from "../components/profile";
import { Separator } from "../components/ui/separator";

const LandingPage = () => {
  return (
    <main className="lg:px-20 md:px-10 px-6 py-8 flex flex-col items-start  gap-10">
      <Profile />
      <Separator />
      <ArticlesSection />      
    </main>
  );
};
export default LandingPage;
