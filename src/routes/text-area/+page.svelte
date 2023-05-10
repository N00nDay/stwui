<script lang="ts">
	import { Card, Col, TextArea, Dropdown, Button } from '../../lib';
	import { example, kitchenExample, props, slots, labelSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock, BetaComponent } from '../../docs';
	import { account, calendar } from '$lib/icons';

	let value: string | undefined;
	let error: string | undefined = "You're doing it wrong!";
	let dropdown1 = false;
	let dropdown2 = false;
	let dropdown3 = false;

	function toggleDropdown1() {
		dropdown1 = !dropdown1;
	}

	function toggleDropdown2() {
		dropdown2 = !dropdown2;
	}

	function toggleDropdown3() {
		dropdown3 = !dropdown3;
	}

	$: if (value && value.length > 0) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<Col class="col-24">
	<BetaComponent />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<TextArea name="input-1" placeholder="Basic" />
			<br />
			<TextArea name="input-2">
				<TextArea.Label slot="label">Label</TextArea.Label>
			</TextArea>
			<br />
			<TextArea name="input-3" {error} bind:value>
				<TextArea.Label slot="label">Label</TextArea.Label>
			</TextArea>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
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
							<Dropdown.Items.Item on:click={toggleDropdown1} label="Today">
								<Dropdown.Items.Item.Icon slot="icon" data={calendar} />
							</Dropdown.Items.Item>
							<Dropdown.Items.Item on:click={toggleDropdown1} label="Tomorrow">
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

			<br />

			<CodeBlock language="svelte" code={kitchenExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="TextArea" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="TextArea" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="TextArea.Label" slots={labelSlots} />
</Col>
