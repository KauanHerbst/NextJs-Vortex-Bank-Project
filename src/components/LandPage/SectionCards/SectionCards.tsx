'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import CosmicCardSvg from '@/svgs/CosmicCard/CosmicCardSvg';
import EllipseBlurSvg from '@/svgs/EllipseBlur/EllipseBlurSvg';
import GalacticCardSvg from '@/svgs/GalacticCard/GalacticCardSvg';
import StellarCardSvg from '@/svgs/StellarCard/StellarCardSvg';
import { useEffect, useState } from 'react';

function SectionCards() {
  const [screenWidth, setScreenWidth] = useState(1000);
  const [cardDimension, setCardDimension] = useState<dimensionOfCard>();
  const [actualCard, setActualCard] = useState(0);
  const [actualElement, setActualElement] = useState<HTMLElement>();
  const [actualCardTag, setActualCardTag] = useState<HTMLElement>();
  const [isAnimating, setIsAnimating] = useState<Boolean>();

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

    Aos.init();
    getScreenDimensions();

    window.addEventListener('resize', getScreenDimensions);

    reDimensionCard(screenWidth);

    return () => {
      window.removeEventListener('resize', getScreenDimensions);
    };
  }, [screenWidth]);

  useEffect(() => {
    const stellarTag = document.querySelector('#stellar') as HTMLElement;
    const galacticTag = document.querySelector('#galactic') as HTMLElement;
    const cosmicTag = document.querySelector('#cosmic') as HTMLElement;
    const stellarCard = document.querySelector('#card-0') as HTMLElement;
    const galacticCard = document.querySelector('#card-1') as HTMLElement;
    const cosmicCard = document.querySelector('#card-2') as HTMLElement;

    function cardAnimation(tag: HTMLElement, card: HTMLElement, classColor: string) {
      setActualElement(tag);
      setActualCardTag(card);
      tag.classList.add(classColor);
      setIsAnimating(true);
      setTimeout(function () {
        card.classList.remove('hidden');
        card.classList.add('animated-slide-right');
        setIsAnimating(false);
      }, 900);
    }

    function changeCard() {
      if (actualElement !== undefined && actualCardTag !== undefined) {
        actualElement.classList.remove(
          'text-auxiliary-white-blue',
          'text-auxiliary-white-purple',
          'text-auxiliary-white-purple-black',
        );
        actualCardTag.classList.remove('animated-slide-right');
        actualCardTag.classList.add('animated-slide-left');
      }
      if (!isAnimating) {
        if (actualCard === 0) {
          cardAnimation(stellarTag, stellarCard, 'text-auxiliary-white-blue');
        } else if (actualCard === 1) {
          cardAnimation(galacticTag, galacticCard, 'text-auxiliary-white-purple');
        } else if (actualCard === 2) {
          cardAnimation(cosmicTag, cosmicCard, 'text-auxiliary-white-purple-black');
        } else {
          cardAnimation(stellarTag, stellarCard, 'text-auxiliary-white-blue');
        }
      }
    }

    function getTargetElement(event: MouseEvent) {
      if (event.target instanceof HTMLElement) {
        const targetElement = event.target;
        if (targetElement !== null) {
          if (targetElement.id === 'stellar') {
            setActualCard(0);
          } else if (targetElement.id === 'galactic') {
            setActualCard(1);
          } else if (targetElement.id === 'cosmic') {
            setActualCard(2);
          } else {
            setActualCard(0);
          }
        }
      }
    }

    stellarTag.addEventListener('click', getTargetElement);
    galacticTag.addEventListener('click', getTargetElement);
    cosmicTag.addEventListener('click', getTargetElement);
    changeCard();

    return () => {
      stellarTag.removeEventListener('click', getTargetElement);
      galacticTag.removeEventListener('click', getTargetElement);
      cosmicTag.removeEventListener('click', getTargetElement);
    };
  }, [actualCard]);

  return (
    <section className="container flex flex-col">
      <div
        className="neue-regular text-3xl flex z-10"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-center"
      >
        <h2
          className="m-8 max-sm:m-4 text-auxiliary-white-blue hover:text-auxiliary-white-blue ease-in cursor-pointer max-md:text-base"
          id="stellar"
        >
          Stellar Card
        </h2>
        <h2
          className="m-8 max-sm:m-4 cursor-pointer hover:text-auxiliary-white-purple ease-in max-md:text-base"
          id="galactic"
        >
          Galactic Gold
        </h2>
        <h2
          className="m-8 max-sm:m-4 cursor-pointer hover:text-auxiliary-white-purple-black ease-in max-md:text-base"
          id="cosmic"
        >
          Cosmic Platinum
        </h2>
      </div>
      <div
        className="absolute mt-32 max-md:hidden"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="200"
        data-aos-anchor-placement="top-center"
      >
        <EllipseBlurSvg width="700" height="700"></EllipseBlurSvg>
      </div>
      <div
        className="relative mt-16 flex"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        data-aos-anchor-placement="top-center"
      >
        <div className="max-sm:w-[360px] hidden relative" id="card-0">
          <StellarCardSvg
            width={cardDimension?.width}
            height={cardDimension?.height}
          ></StellarCardSvg>
        </div>
        <div className="max-sm:w-[360px] hidden relative" id="card-1">
          <GalacticCardSvg
            width={cardDimension?.width}
            height={cardDimension?.height}
          ></GalacticCardSvg>
        </div>
        <div className="max-sm:w-[360px] hidden relative" id="card-2">
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
