<script lang="ts">
	import { Card, Col, Select } from '../../lib';
	import {
		example,
		exampleMultiple,
		props,
		slots,
		labelSlots,
		optionsSlots,
		optionProps,
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { email } from '../../docs/icons';
	import type { SelectOption } from '$lib/types';

	const options = [
		{
			value: 'option_1',
			label: 'Option 1'
		},
		{
			value: 'option_2',
			label: 'Option 2'
		},
		{
			value: 'option_3',
			label: 'Option 3'
		}
	];
	const multipleOptions = [
		{
			value: 'option_1',
			label: 'Option 1'
		},
		{
			value: 'option_2',
			label: 'Option 2'
		},
		{
			value: 'option_3',
			label: 'Option 3'
		},
		{
			value: 'option_4',
			label: 'Option 4'
		},
		{
			value: 'option_5',
			label: 'Option 5'
		},
		{
			value: 'option_6',
			label: 'Option 6'
		}
	];

	let value: SelectOption | undefined;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value && value.value) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Single</Card.Header>
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

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Multiple</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Select name="select-4" placeholder="Basic" multiple>
				<Select.Options slot="options">
					{#each multipleOptions as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>

			<br />

			<CodeBlock language="svelte" code={exampleMultiple} />
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
