<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Accordion, AccordionItem } from '../../lib/components/accordion';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Default</CardHeader>
		<CardContent class="p-4">
			<Accordion>
				<AccordionItem label="Item 1">
					<div class="px-4 py-5">
						<strong>This is the first item's accordion body.</strong> It is shown by default, until
						the collapse plugin adds the appropriate classes that we use to style each element.
						These classes control the overall appearance, as well as the showing and hiding via CSS
						transitions. You can modify any of this with custom CSS or overriding our default
						variables. It's also worth noting that just about any HTML can go within the
						<code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				</AccordionItem>
				<AccordionItem label="Item 2">
					<div class="px-4 py-5">
						<strong>This is the first item's accordion body.</strong> It is shown by default, until
						the collapse plugin adds the appropriate classes that we use to style each element.
						These classes control the overall appearance, as well as the showing and hiding via CSS
						transitions. You can modify any of this with custom CSS or overriding our default
						variables. It's also worth noting that just about any HTML can go within the
						<code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				</AccordionItem>
				<AccordionItem label="Item 3">
					<div class="px-4 py-5">
						<strong>This is the first item's accordion body.</strong> It is shown by default, until
						the collapse plugin adds the appropriate classes that we use to style each element.
						These classes control the overall appearance, as well as the showing and hiding via CSS
						transitions. You can modify any of this with custom CSS or overriding our default
						variables. It's also worth noting that just about any HTML can go within the
						<code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				</AccordionItem>
			</Accordion>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Only One</CardHeader>
		<CardContent class="p-4">
			<Accordion onlyOne>
				<AccordionItem label="Item 1">
					<div class="px-4 py-5">
						<strong>This is the first item's accordion body.</strong> It is shown by default, until
						the collapse plugin adds the appropriate classes that we use to style each element.
						These classes control the overall appearance, as well as the showing and hiding via CSS
						transitions. You can modify any of this with custom CSS or overriding our default
						variables. It's also worth noting that just about any HTML can go within the
						<code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				</AccordionItem>
				<AccordionItem label="Item 2">
					<div class="px-4 py-5">
						<strong>This is the first item's accordion body.</strong> It is shown by default, until
						the collapse plugin adds the appropriate classes that we use to style each element.
						These classes control the overall appearance, as well as the showing and hiding via CSS
						transitions. You can modify any of this with custom CSS or overriding our default
						variables. It's also worth noting that just about any HTML can go within the
						<code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				</AccordionItem>
				<AccordionItem label="Item 3">
					<div class="px-4 py-5">
						<strong>This is the first item's accordion body.</strong> It is shown by default, until
						the collapse plugin adds the appropriate classes that we use to style each element.
						These classes control the overall appearance, as well as the showing and hiding via CSS
						transitions. You can modify any of this with custom CSS or overriding our default
						variables. It's also worth noting that just about any HTML can go within the
						<code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				</AccordionItem>
			</Accordion>
		</CardContent>
	</Card>
</Col>
