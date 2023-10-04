<script lang="ts">
	import { Currency } from '../../lib';
	import {
		basicExample,
		withLabelExample,
		withLeadingExample,
		withtrailingExample,
		withErrorExample,
		disabledExample,
		props,
		slots,
		labelSlots,
		iconProps,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
	import { email } from '../../docs/icons';
	import { currency_usd } from '../../lib/icons';

	let value: string | undefined;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value && value.length > 0 && value !== '0.00') {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Currency name="currency-1" placeholder="Basic" class="w-full max-w-[400px]" />
	</div>

	<CodeBlock slot="code" language="svelte" code={basicExample} />
</ExampleContainer>

<ExampleContainer title="With Label">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Currency name="currency-2" class="w-full max-w-[400px]">
			<Currency.Label slot="label">Label</Currency.Label>
		</Currency>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLabelExample} />
</ExampleContainer>

<ExampleContainer title="With Leading">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Currency name="currency-3" class="w-full max-w-[400px]">
			<Currency.Label slot="label">Label</Currency.Label>
			<Currency.Leading slot="leading" data={currency_usd} />
		</Currency>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLeadingExample} />
</ExampleContainer>

<ExampleContainer title="With Trailing">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Currency name="currency-3" class="w-full max-w-[400px]">
			<Currency.Label slot="label">Label</Currency.Label>
			<Currency.Trailing slot="trailing" data={currency_usd} />
		</Currency>
	</div>

	<CodeBlock slot="code" language="svelte" code={withtrailingExample} />
</ExampleContainer>

<ExampleContainer title="With Error">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Currency name="currency-4" {error} bind:value allowClear class="w-full max-w-[400px]">
			<Currency.Label slot="label">Label</Currency.Label>
			<Currency.Leading slot="leading" data={email} />
		</Currency>
	</div>

	<CodeBlock slot="code" language="svelte" code={withErrorExample} />
</ExampleContainer>

<ExampleContainer title="Disabled">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Currency name="currency-2" disabled class="w-full max-w-[400px]">
			<Currency.Label slot="label">Label</Currency.Label>
		</Currency>
	</div>

	<CodeBlock slot="code" language="svelte" code={disabledExample} />
</ExampleContainer>

<PropsTable component="Currency" {props} />

<SlotsTable component="Currency" {slots} />

<SlotsTable component="Currency.Label" slots={labelSlots} />

<PropsTable component="Currency.Leading" props={iconProps} />

<PropsTable component="Currency.Trailing" props={iconProps} />

<ClassTable component="Currency" {classList} />
