import type { Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'slides',
		type: '<a class="link" href="/types#CarouselSlide">CarouselSlide[]</a>',
		default: '[]'
	},
	{
		id: '2',
		prop: 'activeSlide',
		type: 'number',
		default: '0'
	},
	{
		id: '3',
		prop: 'rotation',
		type: 'number',
		default: '0'
	}
];

export const usage = `
import { Carousel } from 'stwui';
import type { CarouselSlide } from 'stwui/types';
// OR
import Carousel from 'stwui/carousel'; // for tree shaking
import type CarouselSlide from 'stwui/types/carousel-slide'; // for tree shaking
`;

export const example = `
<script lang="ts">
	import { Carousel } from 'stwui';
	import type { CarouselSlide } from 'stwui/types';

	const slides: CarouselSlide[] = [
		{
			id: '1',
			src: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
			alt: 'Wild Landscape'
		},
		{
			id: '2',
			src: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
			alt: 'Camera'
		},
		{
			id: '3',
			src: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
			alt: 'Exotic Fruits'
		}
	];
</script>

<div class="h-[36rem]">
	<Carousel {slides} />
</div>`;
