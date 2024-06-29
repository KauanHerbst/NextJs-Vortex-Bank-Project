'use client';
import MoonSvg from '@/svgs/MoonSvg/MoonSvg';
import SunSvg from '@/svgs/SunSvg/SunSvg';
import { themeOnLoad } from '@/utils/Theme';
import React, { useEffect, useState } from 'react';

function ToggleTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    function checkTheme() {
      const storageTheme = localStorage.getItem('theme') || 'dark';
      setIsDarkTheme(storageTheme === 'dark');
      (document.querySelector('#toggle-theme') as HTMLInputElement).checked =
        storageTheme === 'dark';
    }

    function changeTheme(event: React.ChangeEvent<HTMLInputElement>) {
      const checked = event.target.checked;
      if (checked) {
        localStorage.setItem('theme', 'dark');
        setIsDarkTheme(true);
      } else {
        localStorage.setItem('theme', 'light');
        setIsDarkTheme(false);
      }
    }

    checkTheme();
    const checkBox = document.querySelector('#toggle-theme') as HTMLInputElement;
    checkBox.addEventListener('change', changeTheme as unknown as EventListener);

    return () => {
      checkBox.removeEventListener('change', changeTheme as unknown as EventListener);
    };
  }, []);

  useEffect(() => {
    themeOnLoad();
  }, [isDarkTheme]);

  return (
    <label className="container-toggle-theme">
      <input
        type="checkbox"
        name="toggle-theme"
        id="toggle-theme"
        defaultChecked={isDarkTheme}
      />
      <MoonSvg />
      <SunSvg />
    </label>
  );
}

export default ToggleTheme;
