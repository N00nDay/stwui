<script lang="ts">
	import { Accordion, Card, Col, Table } from '../../lib';
	import CodeBlock from '../../docs/components/code-block';
	import { example } from './examples';

	let open = '';

	function handleClick(item: string) {
		if (open === item) {
			open = '';
		} else {
			open = item;
		}
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Accordion>
				<Accordion.Item open={open === 'open1'}>
					<Accordion.Item.Title slot="title" on:click={() => handleClick('open1')}
						>Item 1</Accordion.Item.Title
					>
					<Accordion.Item.Content slot="content">
						<div class="px-4 py-5">
							<strong>This is the first item's accordion body.</strong> It is shown by default,
							until the collapse plugin adds the appropriate classes that we use to style each
							element. These classes control the overall appearance, as well as the showing and
							hiding via CSS transitions. You can modify any of this with custom CSS or overriding
							our default variables. It's also worth noting that just about any HTML can go within
							the
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
							<strong>This is the first item's accordion body.</strong> It is shown by default,
							until the collapse plugin adds the appropriate classes that we use to style each
							element. These classes control the overall appearance, as well as the showing and
							hiding via CSS transitions. You can modify any of this with custom CSS or overriding
							our default variables. It's also worth noting that just about any HTML can go within
							the
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
							<strong>This is the first item's accordion body.</strong> It is shown by default,
							until the collapse plugin adds the appropriate classes that we use to style each
							element. These classes control the overall appearance, as well as the showing and
							hiding via CSS transitions. You can modify any of this with custom CSS or overriding
							our default variables. It's also worth noting that just about any HTML can go within
							the
							<code>.accordion-body</code>, though the transition does limit overflow.
						</div>
					</Accordion.Item.Content>
				</Accordion.Item>
			</Accordion>

			<br />

			<CodeBlock language="html" code={example} />
		</Card.Content>
	</Card>
</Col>
