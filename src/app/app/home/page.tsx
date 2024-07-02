import ActivityCard from '@/components/app/ActivityCard/ActivityCard';
import BalanceCard from '@/components/app/BalanceCard/BalanceCard';
import OverviewMenuCard from '@/components/app/OverviewMenuCard/OverviewMenuCard';
import SupportCard from '@/components/app/SupportCard/SupportCard';

export default function Home() {
  return (
    <div className="w-[100%] h-[100%] flex md:justify-center md:items-center bg-white dark:bg-purple-black-2">
      <div className="w-[1140px] flex sm:justify-center gap-12 max-lg:gap-5 max-md:flex-col max-md:items-center max-sm:mt-10 ">
        <div className="">
          <BalanceCard></BalanceCard>
          <ActivityCard></ActivityCard>
          <SupportCard></SupportCard>
        </div>

        <div className="mr-4 max-lg:mr-0">
          <OverviewMenuCard></OverviewMenuCard>
        </div>
      </div>
    </div>
  );
}
