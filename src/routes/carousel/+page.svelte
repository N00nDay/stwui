<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, Carousel } from '../../lib';

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
		<Card.Header slot="header">Carousel</Card.Header>
		<Card.Content slot="content" class="p-4 h-96 bg-black">
			<Carousel {slides} />
		</Card.Content>
	</Card>

	<Card bordered={false}>
		<Card.Header slot="header">Carousel</Card.Header>
		<Card.Content slot="content" class="p-4 h-[30rem] bg-black">
			<Carousel {slides} />
		</Card.Content>
	</Card>
</Col>
