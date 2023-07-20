<script lang="ts">
	import { Card, Carousel } from '../../lib';
	import type { CarouselSlide } from '../../lib/types';
	import { example, props, usage } from './examples';
	import { PropsTable, CodeBlock, ExampleContainer } from '../../docs';

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

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic" innerClass="p-0 sm:p-0">
	<div slot="preview" class="w-full block">
		<Card bordered={false}>
			<Card.Content slot="content" class="h-[36rem] bg-black !p-0">
				<Carousel {slides} />
			</Card.Content>
		</Card>
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<PropsTable component="Carousel" {props} />
