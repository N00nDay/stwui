<script lang="ts">
	import { Autocomplete } from '../../lib';
	import {
		withLabelExample,
		withLeadingExample,
		withErrorExample,
		disabledExample,
		allowNonOptionExample,
		props,
		slots,
		labelSlots,
		optionsSlots,
		optionProps,
		emptyOptionSlots,
		iconProps,
		withMobileExample,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
	import { email } from '../../docs/icons';

	let value1: string;
	let value2: string;
	let value3: string;
	let value4: string;
	let value5: string;
	let value6 = 'I am not in the options!';
	let value7: string;

	let options = ['Option 1', 'Option 2', 'Option 3'];
	let filtered7Options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

	let filtered1 = ['Option 1', 'Option 2', 'Option 3'];
	let filtered2 = ['Option 1', 'Option 2', 'Option 3'];
	let filtered3 = ['Option 1', 'Option 2', 'Option 3'];
	let filtered4 = ['Option 1', 'Option 2', 'Option 3'];
	let filtered5 = ['Option 1', 'Option 2', 'Option 3'];
	let filtered6 = ['Option 1', 'Option 2', 'Option 3'];
	let filtered7 = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

	function filter1(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered1 = options.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

	function filter2(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered2 = options.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

	function filter3(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered3 = options.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

	function filter4(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered4 = options.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

	function filter5(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered5 = options.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

	function filter6(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered6 = options.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

	function filter7(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered7 = options.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

	function filterOptions(option: string, key: 1 | 2 | 3 | 4 | 5 | 6 | 7) {
		if (key === 1) {
			if (option) {
				filtered1 = options.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
			} else {
				filtered1 = options;
			}
		} else if (key === 2) {
			if (option) {
				filtered2 = options.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
			} else {
				filtered2 = options;
			}
		} else if (key === 3) {
			if (option) {
				filtered3 = options.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
			} else {
				filtered3 = options;
			}
		} else if (key === 4) {
			if (option) {
				filtered4 = options.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
			} else {
				filtered4 = options;
			}
		} else if (key === 5) {
			if (option) {
				filtered5 = options.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
			} else {
				filtered5 = options;
			}
		} else if (key === 6) {
			if (option) {
				filtered6 = options.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
			} else {
				filtered6 = options;
			}
		} else if (key === 7) {
			if (option) {
				filtered7 = filtered7Options.filter((opt) =>
					opt.toLowerCase().includes(option.toLowerCase())
				);
			} else {
				filtered7 = filtered7Options;
			}
		}
	}

	$: filterOptions(value1, 1);
	$: filterOptions(value2, 2);
	$: filterOptions(value3, 3);
	$: filterOptions(value4, 4);
	$: filterOptions(value5, 5);
	$: filterOptions(value6, 6);
	$: filterOptions(value7, 7);

	let error: string | undefined = "You're doing it wrong!";
	$: if (value4 && value4.length > 0) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Autocomplete
			name="select-1"
			placeholder="Basic"
			bind:value={value1}
			on:input={filter1}
			{options}
			class="w-full max-w-lg mx-auto"
		>
			<Autocomplete.Options slot="options">
				{#if filtered1.length > 0}
					{#each filtered1 as option}
						<Autocomplete.Options.Option {option} />
					{/each}
				{:else}
					<Autocomplete.Options.EmptyOption />
				{/if}
			</Autocomplete.Options>
		</Autocomplete>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLabelExample} />
</ExampleContainer>

<ExampleContainer title="With Label">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Autocomplete
			name="select-2"
			placeholder="Basic"
			bind:value={value2}
			on:input={filter2}
			{options}
			class="w-full max-w-lg mx-auto"
		>
			<Autocomplete.Label slot="label">Label</Autocomplete.Label>
			<Autocomplete.Options slot="options">
				{#if filtered2.length > 0}
					{#each filtered2 as option}
						<Autocomplete.Options.Option {option} />
					{/each}
				{:else}
					<Autocomplete.Options.EmptyOption />
				{/if}
			</Autocomplete.Options>
		</Autocomplete>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLabelExample} />
</ExampleContainer>

<ExampleContainer title="With Leading">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Autocomplete
			name="select-3"
			bind:value={value3}
			on:input={filter3}
			{options}
			class="w-full max-w-lg mx-auto"
		>
			<Autocomplete.Label slot="label">Label</Autocomplete.Label>
			<Autocomplete.Leading slot="leading" data={email} />
			<Autocomplete.Options slot="options">
				{#if filtered3.length > 0}
					{#each filtered3 as option}
						<Autocomplete.Options.Option {option} />
					{/each}
				{:else}
					<Autocomplete.Options.EmptyOption />
				{/if}
			</Autocomplete.Options>
		</Autocomplete>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLeadingExample} />
</ExampleContainer>

<ExampleContainer title="With Error">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Autocomplete
			name="select-4"
			bind:value={value4}
			on:input={filter4}
			{options}
			{error}
			class="w-full max-w-lg mx-auto"
		>
			<Autocomplete.Label slot="label">Label</Autocomplete.Label>
			<Autocomplete.Leading slot="leading" data={email} />
			<Autocomplete.Options slot="options">
				{#if filtered4.length > 0}
					{#each filtered4 as option}
						<Autocomplete.Options.Option {option} />
					{/each}
				{:else}
					<Autocomplete.Options.EmptyOption />
				{/if}
			</Autocomplete.Options>
		</Autocomplete>
	</div>

	<CodeBlock slot="code" language="svelte" code={withErrorExample} />
</ExampleContainer>

<ExampleContainer title="Disabled">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Autocomplete
			name="select-5"
			bind:value={value5}
			on:input={filter5}
			{options}
			disabled
			class="w-full max-w-lg mx-auto"
		>
			<Autocomplete.Label slot="label">Label</Autocomplete.Label>
			<Autocomplete.Leading slot="leading" data={email} />
			<Autocomplete.Options slot="options">
				{#if filtered5.length > 0}
					{#each filtered5 as option}
						<Autocomplete.Options.Option {option} />
					{/each}
				{:else}
					<Autocomplete.Options.EmptyOption />
				{/if}
			</Autocomplete.Options>
		</Autocomplete>
	</div>

	<CodeBlock slot="code" language="svelte" code={disabledExample} />
</ExampleContainer>

<ExampleContainer title="With Any Value">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Autocomplete
			name="select-6"
			placeholder="Basic"
			bind:value={value6}
			on:input={filter6}
			{options}
			allowNonListValue
			class="w-full max-w-lg mx-auto"
		>
			<Autocomplete.Options slot="options">
				{#if filtered6.length > 0}
					{#each filtered6 as option}
						<Autocomplete.Options.Option {option} />
					{/each}
				{:else}
					<Autocomplete.Options.EmptyOption />
				{/if}
			</Autocomplete.Options>
		</Autocomplete>
	</div>

	<CodeBlock slot="code" language="svelte" code={allowNonOptionExample} />
</ExampleContainer>

<ExampleContainer title="With Mobile">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Autocomplete
			name="select-7"
			placeholder="Basic"
			bind:value={value7}
			on:input={filter7}
			{options}
			class="w-full max-w-lg mx-auto"
			mobile
		>
			<Autocomplete.Label slot="label">Label</Autocomplete.Label>
			<Autocomplete.Options slot="options">
				{#if filtered7.length > 0}
					{#each filtered7 as option}
						<Autocomplete.Options.Option {option} />
					{/each}
				{:else}
					<Autocomplete.Options.EmptyOption />
				{/if}
			</Autocomplete.Options>
		</Autocomplete>
	</div>

	<CodeBlock slot="code" language="svelte" code={withMobileExample} />
</ExampleContainer>

<PropsTable component="Autocomplete" {props} />

<SlotsTable component="Autocomplete" {slots} />

<SlotsTable component="Autocomplete.Label" slots={labelSlots} />

<PropsTable component="Autocomplete.Leading" props={iconProps} />

<SlotsTable component="Autocomplete.Options" slots={optionsSlots} />

<PropsTable component="Autocomplete.Options.Option" props={optionProps} />

<SlotsTable component="Autocomplete.Options.EmptyOption" slots={emptyOptionSlots} />

<ClassTable component="Autocomplete" {classList} />
