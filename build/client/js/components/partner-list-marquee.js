import vanillaMarquee from 'https://cdn.jsdelivr.net/npm/vanilla-marquee@1.1.2/+esm';

export default function partnerListMarquee() {
  const element = document.getElementById("partner-list-marquee");

  if (!element) return;

  new vanillaMarquee(element, {
    duration: 20 * 1000,
    duplicated: true
  });
}