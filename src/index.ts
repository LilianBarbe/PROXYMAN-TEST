import { gsap } from 'gsap';

import { greetUser } from '$utils/greet';

gsap.from('.fs0', { opacity: 0, duration: 3, y: 100 });

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
});
