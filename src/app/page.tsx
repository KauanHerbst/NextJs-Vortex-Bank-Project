import Hero from '@/components/LandPage/Hero/Hero';
import SectionApp from '@/components/LandPage/SectionApp/SectionApp';
import SectionBenefits from '@/components/LandPage/SectionBenefits/SectionBenefits';
import SectionCTACard from '@/components/LandPage/SectionCTACard/SectionCTACard';
import SectionCards from '@/components/LandPage/SectionCards/SectionCards';
import SectionCreateAccount from '@/components/LandPage/SectionCreateAccount/SectionCreateAccount';
import SectionFeedback from '@/components/LandPage/SectionFeedback/SectionFeedback';
import SectionLoan from '@/components/LandPage/SectionLoan/SectionLoan';

export default function Home() {
  return (
    <main className="bg-purple-black-2">
      <Hero></Hero>
      <SectionCards></SectionCards>
      <SectionBenefits></SectionBenefits>
      <SectionCTACard></SectionCTACard>
      <SectionApp></SectionApp>
      <SectionLoan></SectionLoan>
      <SectionFeedback></SectionFeedback>
      <SectionCreateAccount></SectionCreateAccount>
    </main>
  );
}
