<script lang="ts">
	import { Accordion, Card, Col } from '../../lib';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Accordion>
				<Accordion.Item key={0}>
					<Accordion.Item.Title slot="title">Item 1</Accordion.Item.Title>
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
				<Accordion.Item key={1}>
					<Accordion.Item.Title slot="title">Item 2</Accordion.Item.Title>
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
				<Accordion.Item key={2}>
					<Accordion.Item.Title slot="title">Item 3</Accordion.Item.Title>
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
		<Card.Header slot="header">Only One</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Accordion onlyOne>
				<Accordion.Item key={0}>
					<Accordion.Item.Title slot="title">Item 1</Accordion.Item.Title>
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
				<Accordion.Item key={1}>
					<Accordion.Item.Title slot="title">Item 2</Accordion.Item.Title>
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
				<Accordion.Item key={2}>
					<Accordion.Item.Title slot="title">Item 3</Accordion.Item.Title>
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
