/* Production tweaks — apply locked defaults. No edit panel. */
(function () {
  const TWEAKS = {
    theme: "dark",
    serif: "Fraunces",
    accentHue: 55,
    marqueeSpeed: 60,
    heroLayout: "asymmetric",
    postLayout: "standard"
  };

  const SERIF_STACKS = {
    'Fraunces': "'Fraunces', 'Times New Roman', serif",
    'Instrument Serif': "'Instrument Serif', 'Times New Roman', serif",
    'Playfair Display': "'Playfair Display', 'Times New Roman', serif",
    'Cormorant': "'Cormorant Garamond', 'Times New Roman', serif",
    'EB Garamond': "'EB Garamond', 'Times New Roman', serif"
  };

  const root = document.documentElement;
  root.setAttribute('data-theme', TWEAKS.theme);
  root.style.setProperty('--font-serif', SERIF_STACKS[TWEAKS.serif]);
  root.style.setProperty('--c-accent', `oklch(0.72 0.15 ${TWEAKS.accentHue})`);
  root.style.setProperty('--c-accent-soft', `oklch(0.72 0.15 ${TWEAKS.accentHue} / 0.15)`);
  root.style.setProperty('--marquee-dur', TWEAKS.marqueeSpeed + 's');
  const applyBody = () => {
    document.body.setAttribute('data-hero-layout', TWEAKS.heroLayout);
    document.body.setAttribute('data-post-layout', TWEAKS.postLayout);
  };
  if (document.body) applyBody();
  else document.addEventListener('DOMContentLoaded', applyBody);
})();
