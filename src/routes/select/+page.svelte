<script lang="ts">
	import { Select } from '../../lib';
	import {
		example,
		exampleLabel,
		exampleError,
		exampleLeading,
		exampleDisabled,
		exampleMultiple,
		props,
		slots,
		labelSlots,
		optionsSlots,
		optionProps,
		iconProps,
		exampleMultipleMobile,
		exampleMobile,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
	import { email } from '../../docs/icons';

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
		},
		{
			value: 'option_7',
			label: 'Option 7'
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

	function handleChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		console.log('event', target.value);
	}

	// let value: SelectOption | undefined;
	let value: string | undefined;
	let error: string | undefined = "You're doing it wrong!";
	// $: if (value && value.value) {
	$: if (value) {
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
			<Select name="select-1" placeholder="Basic" on:change={handleChange} {options}>
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="With Label">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Select name="select-2" {options}>
				<Select.Label slot="label">Label</Select.Label>
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleLabel} />
</ExampleContainer>

<ExampleContainer title="With Leading">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Select name="select-3" {options}>
				<Select.Label slot="label">Label</Select.Label>
				<Select.Leading slot="leading" data={email} />
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleLeading} />
</ExampleContainer>

<ExampleContainer title="With Error">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Select name="select-4" {error} bind:value {options}>
				<Select.Label slot="label">Label</Select.Label>
				<Select.Leading slot="leading" data={email} />
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleError} />
</ExampleContainer>

<ExampleContainer title="Disabled">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Select name="select-5" disabled {options}>
				<Select.Label slot="label">Label</Select.Label>
				<Select.Leading slot="leading" data={email} />
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleDisabled} />
</ExampleContainer>

<ExampleContainer title="Multi-Select">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Select name="select-6" placeholder="Multiple" multiple {options}>
				<Select.Label slot="label">Label</Select.Label>
				<Select.Options slot="options">
					{#each multipleOptions as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleMultiple} />
</ExampleContainer>

<ExampleContainer title="With Mobile">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Select name="select-2" mobile {options}>
				<Select.Label slot="label">Label</Select.Label>
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleMobile} />
</ExampleContainer>

<ExampleContainer title="Multi-Select With Mobile">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Select name="select-2" mobile multiple {options}>
				<Select.Label slot="label">Label</Select.Label>
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleMultipleMobile} />
</ExampleContainer>

<PropsTable component="Select" {props} />

<SlotsTable component="Select" {slots} />

<SlotsTable component="Select.Label" slots={labelSlots} />

<PropsTable component="Select.Leading" props={iconProps} />

<SlotsTable component="Select.Options" slots={optionsSlots} />

<PropsTable component="Select.Options.Option" props={optionProps} />

<ClassTable component="Select" {classList} />
