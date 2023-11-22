<script lang="ts">
	import { Dropdown, Button, Badge } from '../../lib';
	import {
		examplePlacement,
		exampleAlignment,
		exampleAvatar,
		props,
		slots,
		itemsProps,
		itemsSlots,
		itemSlots,
		itemProps,
		iconProps,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
	import { home, trash } from '../../docs/icons';

	let visible1 = false;
	let visible2 = false;
	let visible3 = false;
	let visible4 = false;
	let visible5 = false;
	let visible6 = false;

	function toggleDropdown1() {
		visible1 = !visible1;
	}

	function closeDropdown1() {
		visible1 = false;
	}

	function toggleDropdown2() {
		visible2 = !visible2;
	}

	function closeDropdown2() {
		visible2 = false;
	}

	function toggleDropdown3() {
		visible3 = !visible3;
	}

	function closeDropdown3() {
		visible3 = false;
	}

	function toggleDropdown4() {
		visible4 = !visible4;
	}

	function closeDropdown4() {
		visible4 = false;
	}

	function toggleDropdown5() {
		visible5 = !visible5;
	}

	function closeDropdown5() {
		visible5 = false;
	}

	function toggleDropdown6() {
		visible6 = !visible6;
	}

	function closeDropdown6() {
		visible6 = false;
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="With Placement">
	<div slot="preview" class="w-full flex gap-2 justify-center items-center">
		<Dropdown bind:visible={visible1}>
			<Button slot="trigger" type="primary" on:click={toggleDropdown1}>Default Placement</Button>
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
			<Button slot="trigger" type="primary" on:click={toggleDropdown2}>Placement Top</Button>
			<Dropdown.Items slot="items" placement="top-start">
				<Dropdown.Items.Item on:click={closeDropdown2} label="Item 1">
					<Dropdown.Items.Item.Icon slot="icon" data={trash} />
				</Dropdown.Items.Item>
				<Dropdown.Items.Item on:click={closeDropdown2} label="Item 2">
					<Dropdown.Items.Item.Icon slot="extra" data={trash} />
				</Dropdown.Items.Item>
				<Dropdown.Items.Item on:click={closeDropdown2} label="Notifications">
					<Badge type="info" slot="extra">+99</Badge>
				</Dropdown.Items.Item>
				<Dropdown.Items.Item on:click={closeDropdown2} label="Item 4" />
				<Dropdown.Items.Item on:click={closeDropdown2} label="Item 5" />
				<Dropdown.Items.Item on:click={closeDropdown2} label="Item 6" />
				<Dropdown.Items.Item on:click={closeDropdown2} label="Item 7" />
				<Dropdown.Items.Divider />
				<Button type="danger" class="w-full justify-between">
					<Button.Leading slot="leading" data={home} />
					Home
					<Button.Trailing slot="trailing" data={home} />
				</Button>
			</Dropdown.Items>
		</Dropdown>
	</div>

	<CodeBlock slot="code" language="svelte" code={examplePlacement} />
</ExampleContainer>

<ExampleContainer title="With Alignment">
	<div slot="preview" class="w-full flex gap-2 justify-center items-center">
		<Dropdown bind:visible={visible3}>
			<Button slot="trigger" type="primary" on:click={toggleDropdown3}>Default Alignment</Button>
			<Dropdown.Items slot="items">
				<Dropdown.Items.Item on:click={closeDropdown3} label="Item 1">
					<Dropdown.Items.Item.Icon slot="icon" data={trash} />
				</Dropdown.Items.Item>
				<Dropdown.Items.Item on:click={closeDropdown3} label="Item 2">
					<Dropdown.Items.Item.Icon slot="extra" data={trash} />
				</Dropdown.Items.Item>
				<Dropdown.Items.Item on:click={closeDropdown3} label="Notifications">
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

		<Dropdown bind:visible={visible4}>
			<Button slot="trigger" type="primary" on:click={toggleDropdown4}>Alignment Center</Button>
			<Dropdown.Items slot="items" placement="bottom">
				<Dropdown.Items.Item on:click={closeDropdown4} label="Item 1">
					<Dropdown.Items.Item.Icon slot="icon" data={trash} />
				</Dropdown.Items.Item>
				<Dropdown.Items.Item on:click={closeDropdown4} label="Item 2">
					<Dropdown.Items.Item.Icon slot="extra" data={trash} />
				</Dropdown.Items.Item>
				<Dropdown.Items.Item on:click={closeDropdown4} label="Notifications">
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

		<Dropdown bind:visible={visible5}>
			<Button slot="trigger" type="primary" on:click={toggleDropdown5}>Alignment End</Button>
			<Dropdown.Items slot="items" placement="bottom-end">
				<Dropdown.Items.Item on:click={closeDropdown5} label="Item 1">
					<Dropdown.Items.Item.Icon slot="icon" data={trash} />
				</Dropdown.Items.Item>
				<Dropdown.Items.Item on:click={closeDropdown5} label="Item 2">
					<Dropdown.Items.Item.Icon slot="extra" data={trash} />
				</Dropdown.Items.Item>
				<Dropdown.Items.Item on:click={closeDropdown5} label="Notifications">
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
	</div>

	<CodeBlock slot="code" language="svelte" code={exampleAlignment} />
</ExampleContainer>

<ExampleContainer title="Avatar Dropdown">
	<div slot="preview" class="w-full flex gap-2 justify-center items-center">
		<Dropdown bind:visible={visible6}>
			<button
				aria-label="dropdown toggle"
				slot="trigger"
				on:click={toggleDropdown6}
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
			<Dropdown.Items slot="items">
				<Dropdown.Items.Item on:click={closeDropdown6} label="Item 1" />
				<Dropdown.Items.Item on:click={closeDropdown6} label="Item 2" />
				<Dropdown.Items.Item on:click={closeDropdown6} label="Item 3" />
			</Dropdown.Items>
		</Dropdown>
	</div>

	<CodeBlock slot="code" language="svelte" code={exampleAvatar} />
</ExampleContainer>

<PropsTable component="Dropdown" {props} />

<SlotsTable component="Dropdown" {slots} />

<PropsTable component="Dropdown.Items" props={itemsProps} />

<SlotsTable component="Dropdown.Items" slots={itemsSlots} />

<PropsTable component="Dropdown.Items.Item" props={itemProps} />

<SlotsTable component="Dropdown.Items.Item" slots={itemSlots} />

<PropsTable component="Dropdown.Items.Item.Icon" props={iconProps} />

<ClassTable component="Dropdown" {classList} />
