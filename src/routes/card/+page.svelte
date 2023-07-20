<script lang="ts">
	import { Card, Media } from '../../lib';
	import {
		allPartsExample,
		elevationExample,
		coverExample,
		coverOverlayExample,
		coverContentExample,
		borderedExample,
		hoverableExample,
		props,
		slots,
		headerSlots,
		coverSlots,
		contentSlots,
		footerSlots,
		actionsSlots,
		actionSlots,
		labelSlots,
		iconProps,
		usage
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { cog, plus_circle } from '../../docs/icons';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="All Parts">
	<div slot="preview" class="w-full block">
		<Card class="max-w-[400px] m-auto">
			<Card.Header slot="header">Card Header</Card.Header>
			<Card.Cover slot="cover">
				<img
					src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
					alt="cover"
					class="object-cover object-center w-full aspect-1 h-[300px]"
				/>
			</Card.Cover>
			<Card.Content slot="content">Card Content</Card.Content>
			<Card.Footer slot="footer">Card Footer</Card.Footer>
			<Card.Actions slot="actions">
				<Card.Actions.Action>
					<Card.Actions.Action.Icon data={cog} slot="icon" />
				</Card.Actions.Action>
				<Card.Actions.Action>
					<Card.Actions.Action.Icon data={plus_circle} slot="icon" />
				</Card.Actions.Action>
			</Card.Actions>
		</Card>
	</div>
	<CodeBlock slot="code" language="svelte" code={allPartsExample} />
</ExampleContainer>

<ExampleContainer title="With Cover">
	<div slot="preview" class="w-full block">
		<Card class="max-w-[400px] m-auto">
			<Card.Cover slot="cover">
				<img
					src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
					alt="cover"
					class="object-cover object-center w-full aspect-1 h-[300px]"
				/>
			</Card.Cover>
		</Card>
	</div>
	<CodeBlock slot="code" language="svelte" code={coverExample} />
</ExampleContainer>

<ExampleContainer title="With Cover and Overlay">
	<div slot="preview" class="w-full block">
		<Card class="max-w-[400px] m-auto">
			<Card.Cover slot="cover">
				<img
					src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
					alt="cover"
					class="object-cover object-center w-full aspect-1 h-[300px]"
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
	</div>
	<CodeBlock slot="code" language="svelte" code={coverOverlayExample} />
</ExampleContainer>

<ExampleContainer title="With Cover and Content">
	<div slot="preview" class="w-full block">
		<Card class="max-w-[400px] m-auto">
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
	</div>
	<CodeBlock slot="code" language="svelte" code={coverContentExample} />
</ExampleContainer>

<ExampleContainer title="Bordered Prop">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center flex-wrap">
		<Card bordered class="max-w-[400px] min-w-[320px] w-full">
			<Card.Content slot="content">I borddered!</Card.Content>
		</Card>

		<Card bordered={false} class="max-w-[400px] min-w-[320px] w-full">
			<Card.Content slot="content">I don't have a border!</Card.Content>
		</Card>
	</div>
	<CodeBlock slot="code" language="svelte" code={borderedExample} />
</ExampleContainer>

<ExampleContainer title="Hoverable Prop">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center flex-wrap">
		<Card hoverable class="max-w-[400px] min-w-[320px] w-full">
			<Card.Content slot="content">I am hoverable!</Card.Content>
		</Card>

		<Card class="max-w-[400px] min-w-[320px] w-full">
			<Card.Content slot="content">I am not hoverable!</Card.Content>
		</Card>
	</div>
	<CodeBlock slot="code" language="svelte" code={hoverableExample} />
</ExampleContainer>

<ExampleContainer title="Elevation">
	<div slot="preview" class="flex flex-col gap-2 items-center justify-center w-full">
		<Card elevation="none" class="w-full max-w-[400px] min-w-[320px]">
			<Card.Content slot="content">elevation="none"</Card.Content>
		</Card>

		<Card elevation="sm" class="w-full max-w-[400px] min-w-[320px]">
			<Card.Content slot="content">elevation="sm"</Card.Content>
		</Card>

		<Card elevation="md" class="w-full max-w-[400px] min-w-[320px]">
			<Card.Content slot="content">elevation="md"</Card.Content>
		</Card>

		<Card elevation="lg" class="w-full max-w-[400px] min-w-[320px]">
			<Card.Content slot="content">elevation="lg"</Card.Content>
		</Card>

		<Card elevation="xl" class="w-full max-w-[400px] min-w-[320px]">
			<Card.Content slot="content">elevation="xl"</Card.Content>
		</Card>
	</div>
	<CodeBlock slot="code" language="svelte" code={elevationExample} />
</ExampleContainer>

<PropsTable component="Card" {props} />

<SlotsTable component="Card" {slots} />

<SlotsTable component="Card.Header" slots={headerSlots} />

<SlotsTable component="Card.Cover" slots={coverSlots} />

<SlotsTable component="Card.Content" slots={contentSlots} />

<SlotsTable component="Card.Footer" slots={footerSlots} />

<SlotsTable component="Card.Actions" slots={actionsSlots} />

<SlotsTable component="Card.Actions.Action" slots={actionSlots} />

<PropsTable component="Card.Actions.Action.Icon" props={iconProps} />

<SlotsTable component="Card.Actions.Action.Label" slots={labelSlots} />
