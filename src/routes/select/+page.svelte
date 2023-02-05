<script lang="ts">
	import { Card, Col, Select } from '../../lib';
	import {
		example,
		props,
		slots,
		labelSlots,
		optionsSlots,
		optionProps,
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { email } from '../../docs/icons';

	const options = ['Option 1', 'Option 2', 'Option 3'];

	let value: string | undefined;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value && value.length > 0) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Select name="select-1" placeholder="Basic">
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
			<br />
			<Select name="select-2">
				<Select.Label slot="label">Label</Select.Label>
				<Select.Leading slot="leading" data={email} />
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
			<br />
			<Select name="select-3" {error} bind:value>
				<Select.Label slot="label">Label</Select.Label>
				<Select.Leading slot="leading" data={email} />
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Select" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Select" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Select.Label" slots={labelSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Select.Leading" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Select.Options" slots={optionsSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Select.Options.Option" props={optionProps} />
</Col>
