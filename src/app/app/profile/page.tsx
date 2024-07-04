import ProfileCard from '@/components/app/ProfileCard/ProfileCard';

export default function Profile() {
  return (
    <div className="w-[100%] h-[100%] flex md:justify-center md:items-center bg-white dark:bg-purple-black-2">
      <div className="w-[1140px] flex md:justify-center max-md:flex-col max-md:items-center max-md:mt-24 ">
        <ProfileCard></ProfileCard>
      </div>
    </div>
  );
}
