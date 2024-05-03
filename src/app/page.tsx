import Hero from '@/components/LandPage/Hero/Hero';
import SectionBenefits from '@/components/LandPage/SectionBenefits/SectionBenefits';
import SectionCards from '@/components/LandPage/SectionCards/SectionCards';

export default function Home() {
  return (
    <main className="bg-purple-black-2">
      <Hero></Hero>
      <SectionCards></SectionCards>
      <SectionBenefits></SectionBenefits>
    </main>
  );
}
