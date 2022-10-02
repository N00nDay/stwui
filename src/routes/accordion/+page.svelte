<script lang="ts">
	import { Accordion, Card, Col } from '../../lib';

	let open1 = '';
	let open2 = '';
	let open3 = '';

	function handleClick1(item: string) {
		if (open1 === item) {
			open1 = '';
		} else {
			open1 = item;
		}
	}

	function handleClick2(item: string) {
		if (open2 === item) {
			open2 = '';
		} else {
			open2 = item;
		}
	}

	function handleClick3(item: string) {
		if (open3 === item) {
			open3 = '';
		} else {
			open3 = item;
		}
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Accordion>
				<Accordion.Item open={open1 === 'open1'}>
					<Accordion.Item.Title slot="title" on:click={() => handleClick1('open1')}
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
				<Accordion.Item open={open1 === 'open2'}>
					<Accordion.Item.Title slot="title" on:click={() => handleClick1('open2')}
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
				<Accordion.Item open={open1 === 'open3'}>
					<Accordion.Item.Title slot="title" on:click={() => handleClick1('open3')}
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
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Custom Styling</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Accordion>
				<Accordion.Item open={open3 === 'open1'}>
					<Accordion.Item.Title
						slot="title"
						on:click={() => handleClick3('open1')}
						class={open3 === 'open1'
							? 'bg-primary text-white hover:text-white'
							: 'hover:bg-blue-500 hover:text-white'}>Item 1</Accordion.Item.Title
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
				<Accordion.Item open={open3 === 'open2'}>
					<Accordion.Item.Title
						slot="title"
						on:click={() => handleClick3('open2')}
						class={open3 === 'open2'
							? 'bg-primary text-white hover:text-white'
							: 'hover:bg-blue-500 hover:text-white'}>Item 2</Accordion.Item.Title
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
				<Accordion.Item open={open3 === 'open3'}>
					<Accordion.Item.Title
						slot="title"
						on:click={() => handleClick3('open3')}
						class={open3 === 'open3'
							? 'bg-primary text-white hover:text-white'
							: 'hover:bg-blue-500 hover:text-white'}>Item 3</Accordion.Item.Title
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
		</Card.Content>
	</Card>
</Col>
