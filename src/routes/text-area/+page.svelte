<script lang="ts">
	import { TextArea, Dropdown, Button } from '../../lib';
	import {
		props,
		slots,
		labelSlots,
		example1,
		example2,
		example3,
		example4,
		example5,
		example6,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
	import { account, calendar } from '$lib/icons';

	let value: string | undefined;
	let error: string | undefined = "You're doing it wrong!";
	let dropdown1 = false;
	let dropdown2 = false;
	let dropdown3 = false;
	let dropdown4 = false;

	function toggleDropdown1() {
		dropdown1 = !dropdown1;
	}

	function toggleDropdown2() {
		dropdown2 = !dropdown2;
	}

	function toggleDropdown3() {
		dropdown3 = !dropdown3;
	}

	function toggleDropdown4() {
		dropdown4 = !dropdown4;
	}

	$: if (value && value.length > 0) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<TextArea name="input-1" placeholder="Basic" />
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={example1} />
</ExampleContainer>

<ExampleContainer title="With Label">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<TextArea name="input-1" placeholder="Basic">
				<TextArea.Label slot="label">Label</TextArea.Label>
			</TextArea>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={example2} />
</ExampleContainer>

<ExampleContainer title="With Error">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<TextArea name="input-3" {error} bind:value>
				<TextArea.Label slot="label">Label</TextArea.Label>
			</TextArea>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={example3} />
</ExampleContainer>

<ExampleContainer title="With Title">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<TextArea name="input-4" placeholder="Description">
				<TextArea.Label slot="label">Label</TextArea.Label>
				<TextArea.Title slot="title" name="title" placeholder="Title" />
			</TextArea>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={example4} />
</ExampleContainer>

<ExampleContainer title="With Pills">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<TextArea name="input-4" placeholder="Description">
				<TextArea.Label slot="label">Label</TextArea.Label>
				<TextArea.Title slot="title" name="title" placeholder="Title" />
				<TextArea.Pills slot="pills">
					<Dropdown bind:visible={dropdown1}>
						<Button
							slot="trigger"
							type="default"
							shape="pill"
							size="xs"
							class="shadow-none"
							on:click={toggleDropdown1}
						>
							<Button.Leading slot="leading" data={account} />
							Assign</Button
						>
						<Dropdown.Items slot="items">
							<Dropdown.Items.Item on:click={toggleDropdown1} label="Person One">
								<Dropdown.Items.Item.Icon slot="icon" data={account} />
							</Dropdown.Items.Item>
							<Dropdown.Items.Item on:click={toggleDropdown1} label="Person Two">
								<Dropdown.Items.Item.Icon slot="icon" data={account} />
							</Dropdown.Items.Item>
							<Dropdown.Items.Item on:click={toggleDropdown1} label="Person Three">
								<Dropdown.Items.Item.Icon slot="icon" data={account} />
							</Dropdown.Items.Item>
						</Dropdown.Items>
					</Dropdown>

					<Dropdown bind:visible={dropdown2}>
						<Button
							slot="trigger"
							type="default"
							shape="pill"
							size="xs"
							class="shadow-none"
							on:click={toggleDropdown2}
						>
							<Button.Leading slot="leading" data={calendar} />
							Due Date</Button
						>
						<Dropdown.Items slot="items">
							<Dropdown.Items.Item on:click={toggleDropdown2} label="Today">
								<Dropdown.Items.Item.Icon slot="icon" data={calendar} />
							</Dropdown.Items.Item>
							<Dropdown.Items.Item on:click={toggleDropdown2} label="Tomorrow">
								<Dropdown.Items.Item.Icon slot="icon" data={calendar} />
							</Dropdown.Items.Item>
						</Dropdown.Items>
					</Dropdown>
				</TextArea.Pills>
			</TextArea>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={example5} />
</ExampleContainer>

<ExampleContainer title="With Actions">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<TextArea name="input-4" placeholder="Description">
				<TextArea.Label slot="label">Label</TextArea.Label>
				<TextArea.Title slot="title" name="title" placeholder="Title" />
				<TextArea.Pills slot="pills">
					<Dropdown bind:visible={dropdown3}>
						<Button
							slot="trigger"
							type="default"
							shape="pill"
							size="xs"
							class="shadow-none"
							on:click={toggleDropdown3}
						>
							<Button.Leading slot="leading" data={account} />
							Assign</Button
						>
						<Dropdown.Items slot="items">
							<Dropdown.Items.Item on:click={toggleDropdown3} label="Person One">
								<Dropdown.Items.Item.Icon slot="icon" data={account} />
							</Dropdown.Items.Item>
							<Dropdown.Items.Item on:click={toggleDropdown3} label="Person Two">
								<Dropdown.Items.Item.Icon slot="icon" data={account} />
							</Dropdown.Items.Item>
							<Dropdown.Items.Item on:click={toggleDropdown3} label="Person Three">
								<Dropdown.Items.Item.Icon slot="icon" data={account} />
							</Dropdown.Items.Item>
						</Dropdown.Items>
					</Dropdown>

					<Dropdown bind:visible={dropdown4}>
						<Button
							slot="trigger"
							type="default"
							shape="pill"
							size="xs"
							class="shadow-none"
							on:click={toggleDropdown4}
						>
							<Button.Leading slot="leading" data={calendar} />
							Due Date</Button
						>
						<Dropdown.Items slot="items">
							<Dropdown.Items.Item on:click={toggleDropdown3} label="Today">
								<Dropdown.Items.Item.Icon slot="icon" data={calendar} />
							</Dropdown.Items.Item>
							<Dropdown.Items.Item on:click={toggleDropdown4} label="Tomorrow">
								<Dropdown.Items.Item.Icon slot="icon" data={calendar} />
							</Dropdown.Items.Item>
						</Dropdown.Items>
					</Dropdown>
				</TextArea.Pills>
				<TextArea.Actions slot="actions">
					<div />
					<Button type="primary">Submit</Button>
				</TextArea.Actions>
			</TextArea>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={example6} />
</ExampleContainer>

<PropsTable component="TextArea" {props} />

<SlotsTable component="TextArea" {slots} />

<SlotsTable component="TextArea.Label" slots={labelSlots} />

<ClassTable component="TextArea" {classList} />
