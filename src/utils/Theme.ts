export function themeOnLoad() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    console.log('dark');
    document.documentElement.classList.add('dark');
  } else {
    console.log('white');
    document.documentElement.classList.remove('dark');
  }

}
