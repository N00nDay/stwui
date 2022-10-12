<script lang="ts">
	import { Dropdown, Button, Card, Col } from '../../lib';
	import { example, props, slots, itemsProps, itemsSlots, itemSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	let visible1 = false;
	let visible2 = false;

	function closeDropdown1() {
		visible1 = false;
	}

	function openDropdown1() {
		visible1 = true;
	}

	function toggleDropdown1() {
		visible1 = !visible1;
	}

	function closeDropdown2() {
		visible2 = false;
	}

	function openDropdown2() {
		visible2 = true;
	}

	function toggleDropdown2() {
		visible2 = !visible2;
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Dropdown</Card.Header>
		<Card.Content slot="content" class="p-4">
			<div class="flex justify-between items-center flex-row">
				<Dropdown handleClose={closeDropdown1} on:click={openDropdown1} visible={visible1}>
					<Button slot="trigger" type="primary" on:click={toggleDropdown1}>Toggle Dropdown</Button>
					<Dropdown.Items slot="items">
						<Dropdown.Items.Item>Item 1</Dropdown.Items.Item>
						<Dropdown.Items.Item>Item 2</Dropdown.Items.Item>
						<Dropdown.Items.Item>Item 3</Dropdown.Items.Item>
					</Dropdown.Items>
				</Dropdown>

				<Dropdown handleClose={closeDropdown2} on:click={openDropdown2} visible={visible2}>
					<button
						slot="trigger"
						on:click={toggleDropdown2}
						type="button"
						class="bg-white flex text-sm rounded-full h-10 w-10 active:hover:animate-none active:hover:scale-95"
						id="user-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
					>
						<span class="sr-only">Open user menu</span>
						<img
							class="h-full w-full rounded-full"
							src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
							alt=""
						/>
					</button>
					<Dropdown.Items slot="items" placement="right">
						<Dropdown.Items.Item>Item 1</Dropdown.Items.Item>
						<Dropdown.Items.Item>Item 2</Dropdown.Items.Item>
						<Dropdown.Items.Item>Item 3</Dropdown.Items.Item>
					</Dropdown.Items>
				</Dropdown>
			</div>
			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Dropdown" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Dropdown" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Dropdown.Items" props={itemsProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Dropdown.Items" slots={itemsSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Dropdown.Items.Item" slots={itemSlots} />
</Col>
