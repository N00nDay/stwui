import OriginalCarousel from './Carousel.svelte';
import OriginalControls from './Controls.svelte';
import Control from './Control.svelte';
import type { Slide } from './carousel';

export interface CarouselControlsStatic {
	new (): OriginalControls;
	Control: typeof Control;
}
export interface CarouselStatic {
	new (): OriginalCarousel;
	Controls: CarouselControlsStatic;
}

const Carousel = OriginalCarousel as CarouselStatic;
Carousel.Controls = OriginalControls as CarouselControlsStatic;
Carousel.Controls.Control = Control;

export { Slide };
export default Carousel;
