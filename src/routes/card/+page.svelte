<script lang="ts">
	import { Card, Col, Media, Divider } from '../../lib';
	import {
		example,
		exampleOverlay,
		exampleContent,
		exampleAnatomy,
		props,
		slots,
		headerSlots,
		coverSlots,
		contentSlots,
		footerSlots,
		actionsSlots,
		actionProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
</script>

<Col class="col-24 mb-4">
	<h1 class="text-light-content dark:text-dark-content mb-0">Card</h1>
	<Divider />
</Col>

<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Card bordered={false}>
			<Card.Cover slot="cover">
				<img
					src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
					alt="cover"
					class="object-cover object-center w-full aspect-1 h-[300px]"
				/>
			</Card.Cover>
			<Card.Actions slot="actions">
				<Card.Actions.Action icon="settings" />
				<Card.Actions.Action icon="description" />
			</Card.Actions>
		</Card>

		<br />

		<CodeBlock language="svelte" code={example} />
	</Card>
</Col>
<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Card bordered={false} hoverable>
			<Card.Cover slot="cover" class="relative rounded-b-md">
				<img
					src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
					alt="cover"
					class="object-cover object-center w-full h-[300px] aspect-1"
				/>
				<Card.Cover.Overlay class="top-[unset] h-24">
					<Media class="absolute bottom-0 left-0 right-0 px-4 py-5">
						<Media.Content>
							<Media.Content.Title>Europe Street beat</Media.Content.Title>
							<Media.Content.Description>www.instagram.com</Media.Content.Description>
						</Media.Content>
					</Media>
				</Card.Cover.Overlay>
			</Card.Cover>
		</Card>

		<br />

		<CodeBlock language="svelte" code={exampleOverlay} />
	</Card>
</Col>
<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Card bordered={false}>
			<Card.Cover slot="cover">
				<img
					src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
					alt="cover"
					class="object-cover object-center w-full h-[300px] aspect-1"
				/>
			</Card.Cover>
			<Card.Content slot="content">
				<Media>
					<Media.Content>
						<Media.Content.Title>Europe Street beat</Media.Content.Title>
						<Media.Content.Description>www.instagram.com</Media.Content.Description>
					</Media.Content>
				</Media>
			</Card.Content>
		</Card>

		<br />

		<CodeBlock language="svelte" code={exampleContent} />
	</Card>
</Col>
<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Card bordered={false}>
			<Card.Header slot="header">Card Header</Card.Header>
			<Card.Content slot="content">Card Content</Card.Content>
			<Card.Footer slot="footer">Card Footer</Card.Footer>
			<Card.Actions slot="actions">
				<Card.Actions.Action icon="looks_one" />
				<Card.Actions.Action icon="looks_two" />
			</Card.Actions>
		</Card>

		<br />

		<CodeBlock language="svelte" code={exampleAnatomy} />
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Card" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Card" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Card.Header" slots={headerSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Card.Cover" slots={coverSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Card.Content" slots={contentSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Card.Footer" slots={footerSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Card.Actions" slots={actionsSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Card.Actions.Action" props={actionProps} />
</Col>
