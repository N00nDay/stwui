<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Carousel } from '../../lib/components/carousel';

	const slides = [
		{
			src: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
			alt: 'Wild Landscape'
		},
		{
			src: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
			alt: 'Camera'
		},
		{
			src: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
			alt: 'Exotic Fruits'
		}
	];
</script>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Carousel</CardHeader>
		<CardContent class="p-4 h-96 bg-black">
			<Carousel {slides} />
		</CardContent>
	</Card>

	<Card bordered={false}>
		<CardHeader>Carousel</CardHeader>
		<CardContent class="p-4 h-[30rem] bg-black">
			<Carousel {slides} />
		</CardContent>
	</Card>
</Col>
