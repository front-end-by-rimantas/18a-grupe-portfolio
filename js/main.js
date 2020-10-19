// header
import { headerData } from './data/header.js';
import { RenderHeader } from './components/header/RenderHeader.js';
// hero
// about us
// portfolio gallery
// our services
import { servicesData } from './data/services.js';
import { renderServices } from './components/services/renderServices.js';
// our team
// achievements
// pricing
// blog
// testimonials
// contact us
// maps
// footer

// header
new RenderHeader(headerData);
// hero
// about us
// portfolio gallery
// our services
renderServices(servicesData);
// our team
// achievements
// pricing
// blog
// testimonials
// contact us
// maps
// footer