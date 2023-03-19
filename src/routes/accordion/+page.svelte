<script lang="ts">
	import { Accordion } from '../../lib';
	import { example, slots, itemSlots, itemProps, titleSlots, contentSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';

	let open = '';

	function handleClick(item: string) {
		if (open === item) {
			open = '';
		} else {
			open = item;
		}
	}
</script>

<ExampleContainer title="Basic Accordion">
	<Accordion slot="preview" class="m-auto max-w-[400px]">
		<Accordion.Item open={open === 'open1'}>
			<Accordion.Item.Title slot="title" on:click={() => handleClick('open1')}
				>Item 1</Accordion.Item.Title
			>
			<Accordion.Item.Content slot="content">
				<div class="px-4 py-5">
					<strong>This is the first item's accordion body.</strong> It is shown by default, until
					the collapse plugin adds the appropriate classes that we use to style each element. These
					classes control the overall appearance, as well as the showing and hiding via CSS
					transitions. You can modify any of this with custom CSS or overriding our default
					variables. It's also worth noting that just about any HTML can go within the
					<code>.accordion-body</code>, though the transition does limit overflow.
				</div>
			</Accordion.Item.Content>
		</Accordion.Item>
		<Accordion.Item open={open === 'open2'}>
			<Accordion.Item.Title slot="title" on:click={() => handleClick('open2')}
				>Item 2</Accordion.Item.Title
			>
			<Accordion.Item.Content slot="content">
				<div class="px-4 py-5">
					<strong>This is the first item's accordion body.</strong> It is shown by default, until
					the collapse plugin adds the appropriate classes that we use to style each element. These
					classes control the overall appearance, as well as the showing and hiding via CSS
					transitions. You can modify any of this with custom CSS or overriding our default
					variables. It's also worth noting that just about any HTML can go within the
					<code>.accordion-body</code>, though the transition does limit overflow.
				</div>
			</Accordion.Item.Content>
		</Accordion.Item>
		<Accordion.Item open={open === 'open3'}>
			<Accordion.Item.Title slot="title" on:click={() => handleClick('open3')}
				>Item 3</Accordion.Item.Title
			>
			<Accordion.Item.Content slot="content">
				<div class="px-4 py-5">
					<strong>This is the first item's accordion body.</strong> It is shown by default, until
					the collapse plugin adds the appropriate classes that we use to style each element. These
					classes control the overall appearance, as well as the showing and hiding via CSS
					transitions. You can modify any of this with custom CSS or overriding our default
					variables. It's also worth noting that just about any HTML can go within the
					<code>.accordion-body</code>, though the transition does limit overflow.
				</div>
			</Accordion.Item.Content>
		</Accordion.Item>
	</Accordion>

	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<SlotsTable component="Accordion" {slots} />

<PropsTable component="Accordion.Item" props={itemProps} />

<SlotsTable component="Accordion.Item" slots={itemSlots} />

<SlotsTable component="Accordion.Item.Title" slots={titleSlots} />

<SlotsTable component="Accordion.Item.Content" slots={contentSlots} />
