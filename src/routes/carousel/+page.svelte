<script lang="ts">
	import { Card, Carousel, Col } from '../../lib';
	import type { CarouselSlide } from '../../lib/types';
	import { example, props } from './examples';
	import { PropsTable, CodeBlock } from '../../docs';

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

<Col class="col-24">
	<Card bordered={false} class="bg-transparent dark:bg-transparent" elevation="none">
		<Card bordered={false}>
			<Card.Content slot="content" class="p-0 h-[36rem] bg-black">
				<Carousel {slides} />
			</Card.Content>
		</Card>
		<br />

		<CodeBlock language="svelte" code={example} />
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Carousel" {props} />
</Col>
