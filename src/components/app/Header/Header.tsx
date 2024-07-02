'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import NavBarDesktop from '../NavBarDesktop/NavBarDesktop';
import NavBarMobile from '../NavBarMobile/NavBarMobile';
import LogoVB from '@/svgs/LogoVB/LogoVB';
import MenuSvg from '@/svgs/MenuSvg/MenuSvg';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

function Header() {
  const pathName = usePathname();
  const [currentPath, setCurrentPath] = useState<string>(formatPahtString(pathName));
  const [currentBoxSelected, setCurrentBoxSelected] = useState<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState<Boolean>(true);
  const [menuIsOpen, setMenuIsOpen] = useState<Boolean>(false);

  function checkIsMobile(): void {
    const screenWidth: number = window.innerWidth;
    setIsMobile(screenWidth < 1024);
  }

  function checkIsMenuOpen(): void {
    const menuMobile = document.querySelector('#menu-mobile') as HTMLElement;
    if (menuIsOpen) {
      menuMobile.classList.remove('hidden', 'menuTransitionClose');
      menuMobile.classList.add('menuTransitionOpen');
    } else {
      menuMobile.classList.remove('menuTransitionOpen');
      menuMobile.classList.add('menuTransitionClose');
    }
  }

  function closeMenuMobile(): void {
    setMenuIsOpen(false);
  }

  function openMenuMobile(): void {
    setMenuIsOpen(true);
  }

  function formatPahtString(path: string): string {
    const partsString = path.split('/');
    return partsString[partsString.length - 1];
  }

  function changeBoxSelected(newPath: string) {
    if (currentBoxSelected) {
      currentBoxSelected.classList.remove('selected-box');
    }
    const element = document.querySelector(`#${newPath}-box`) as HTMLElement;
    if (element) {
      element.classList.add('selected-box');
      setCurrentBoxSelected(element);
    }
  }

  useEffect(() => {
    const formattedPah = formatPahtString(pathName);
    setCurrentPath(formattedPah);
    changeBoxSelected(formattedPah);
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [pathName]);

  useEffect(() => {
    changeBoxSelected(currentPath);
  }, [currentPath, isMobile]);

  useEffect(() => {
    checkIsMenuOpen();
  }, [menuIsOpen]);
  return (
    <header className="w-[100vw] flex justify-center items-center h-[90px] bg-black-blue-primary">
      <div className="w-[1140px] flex justify-between items-center neurial-medium">
        {isMobile ? (
          <>
            <div className="px-6">
              <LogoVB width="60" height="60"></LogoVB>
            </div>
            <div className="flex justify-center items-center">
              <div className="mr-10">
                <ToggleTheme></ToggleTheme>
              </div>
              <button className="px-6" onClick={openMenuMobile}>
                <MenuSvg width="45" height="45"></MenuSvg>
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
        {isMobile ? (
          <NavBarMobile closeFunction={closeMenuMobile}></NavBarMobile>
        ) : (
          <NavBarDesktop></NavBarDesktop>
        )}
      </div>
    </header>
  );
}

export default Header;
