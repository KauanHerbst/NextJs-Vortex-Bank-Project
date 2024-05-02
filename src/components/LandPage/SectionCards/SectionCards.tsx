'use client';

import CosmicCardSvg from '@/svgs/CosmicCard/CosmicCardSvg';
import EllipseBlurSvg from '@/svgs/EllipseBlur/EllipseBlurSvg';
import GalacticCardSvg from '@/svgs/GalacticCard/GalacticCardSvg';
import StellarCardSvg from '@/svgs/StellarCard/StellarCardSvg';
import { useEffect, useState } from 'react';

function SectionCards() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [cardDimension, setCardDimension] = useState<dimensionOfCard>();

  type dimensionOfCard = {
    width: string;
    height: string;
  };

  function reDimensionCard(width: number) {
    let dimensions: dimensionOfCard = { width: '440', height: '400' };

    if (width <= 764) {
      dimensions.width = '360';
      dimensions.height = '360';
    }

    setCardDimension(dimensions);
  }

  useEffect(() => {

    function getScreenDimensions() {
      let width = window.innerWidth;
      setScreenWidth(width);
    }

    window.addEventListener('resize', getScreenDimensions);

    reDimensionCard(screenWidth);

    return () => {
      window.removeEventListener('resize', getScreenDimensions);
    };
  }, [screenWidth]);

  return (
    <section className="container flex flex-col">
      <div className="neue-regular text-3xl flex z-10 ">
        <h2 className="m-8 max-sm:m-4 text-auxiliary-white-blue hover:text-auxiliary-white-blue ease-in cursor-pointer max-md:text-base">
          Stellar Card
        </h2>
        <h2 className="m-8 max-sm:m-4 cursor-pointer hover:text-auxiliary-white-purple ease-in max-md:text-base">
          Galactic Gold
        </h2>
        <h2 className="m-8 max-sm:m-4 cursor-pointer hover:text-auxiliary-white-purple-black ease-in max-md:text-base">
          Cosmic Platinum
        </h2>
      </div>
      <div className="absolute mt-32 max-md:hidden">
        <EllipseBlurSvg width="700" height="700"></EllipseBlurSvg>
      </div>
      <div className="relative mt-16 flex">
        <div className="max-sm:w-[360px]">
          <StellarCardSvg
            width={cardDimension?.width}
            height={cardDimension?.height}
          ></StellarCardSvg>
        </div>
        <div className="max-sm:w-[360px] hidden">
          <GalacticCardSvg
            width={cardDimension?.width}
            height={cardDimension?.height}
          ></GalacticCardSvg>
        </div>
        <div className="max-sm:w-[360px] hidden">
          <CosmicCardSvg
            width={cardDimension?.width}
            height={cardDimension?.height}
          ></CosmicCardSvg>
        </div>
      </div>
    </section>
  );
}

export default SectionCards;
