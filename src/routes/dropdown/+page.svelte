<script lang="ts">
	import { Dropdown, Button, Card, Col, Badge } from '../../lib';
	import {
		example,
		props,
		slots,
		itemsProps,
		itemsSlots,
		itemSlots,
		itemProps,
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { home, trash } from '../../docs/icons';

	let visible1 = false;
	let visible2 = false;

	function closeDropdown1() {
		console.log('do something');
		visible1 = false;
	}

	function toggleDropdown1() {
		visible1 = !visible1;
	}

	function closeDropdown2() {
		console.log('do something');
		visible2 = false;
	}

	function toggleDropdown2() {
		visible2 = !visible2;
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<div class="flex justify-between items-center flex-row">
				<Dropdown bind:visible={visible1}>
					<Button slot="trigger" type="primary" on:click={toggleDropdown1}>Toggle Dropdown</Button>
					<Dropdown.Items slot="items">
						<Dropdown.Items.Item on:click={closeDropdown1} label="Item 1">
							<Dropdown.Items.Item.Icon slot="icon" data={trash} />
						</Dropdown.Items.Item>
						<Dropdown.Items.Item on:click={closeDropdown1} label="Item 2">
							<Dropdown.Items.Item.Icon slot="extra" data={trash} />
						</Dropdown.Items.Item>
						<Dropdown.Items.Item on:click={closeDropdown1} label="Notifications">
							<Badge type="info" slot="extra">+99</Badge>
						</Dropdown.Items.Item>
						<Dropdown.Items.Divider />
						<Button type="danger" class="w-full justify-between">
							<Button.Leading slot="leading" data={home} />
							Home
							<Button.Trailing slot="trailing" data={home} />
						</Button>
					</Dropdown.Items>
				</Dropdown>

				<Dropdown bind:visible={visible2}>
					<button
						aria-label="dropdown toggle"
						slot="trigger"
						on:click={toggleDropdown2}
						type="button"
						class="bg-white flex text-sm rounded-full h-10 w-10 active:hover:animate-none active:hover:scale-95"
						id="user-menu-button"
					>
						<span class="sr-only">Open user menu</span>
						<img
							class="h-full w-full rounded-full"
							src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
							alt=""
						/>
					</button>
					<Dropdown.Items slot="items" placement="right">
						<Dropdown.Items.Item on:click={closeDropdown2} label="Item 1" />
						<Dropdown.Items.Item on:click={closeDropdown2} label="Item 2" />
						<Dropdown.Items.Item on:click={closeDropdown2} label="Item 3" />
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
	<PropsTable component="Dropdown.Items.Item" props={itemProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Dropdown.Items.Item" slots={itemSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Dropdown.Items.Item.Icon" props={iconProps} />
</Col>
