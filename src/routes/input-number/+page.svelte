<script lang="ts">
	import { InputNumber } from '../../lib';
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
		maxExample,
		minExample,
		showSpinExample
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { email, phone } from '../../docs/icons';

	let value: number;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value || value === 0) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<InputNumber name="input-1" placeholder="Basic" />
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={basicExample} />
</ExampleContainer>

<ExampleContainer title="With Label">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<InputNumber name="input-2">
				<InputNumber.Label slot="label">Label</InputNumber.Label>
			</InputNumber>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLabelExample} />
</ExampleContainer>

<ExampleContainer title="With Leading">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<InputNumber name="input-3" allowClear>
				<InputNumber.Label slot="label">Label</InputNumber.Label>
				<InputNumber.Leading slot="leading" data={email} />
			</InputNumber>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLeadingExample} />
</ExampleContainer>

<ExampleContainer title="With Trailing">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<InputNumber name="input-4" allowClear>
				<InputNumber.Label slot="label">Label</InputNumber.Label>
				<InputNumber.Trailing slot="trailing" data={phone} />
			</InputNumber>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withtrailingExample} />
</ExampleContainer>

<ExampleContainer title="With Error">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<InputNumber
				name="input-5"
				bind:value
				{error}
				handleLeadingClick={() => console.log('clicking leading')}
			>
				<InputNumber.Label slot="label">Label</InputNumber.Label>
				<InputNumber.Leading slot="leading" data={email} />
				<InputNumber.Trailing slot="trailing" data={phone} />
			</InputNumber>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withErrorExample} />
</ExampleContainer>

<ExampleContainer title="Disabled">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<InputNumber name="input-6" disabled>
				<InputNumber.Label slot="label">Label</InputNumber.Label>
				<InputNumber.Leading slot="leading" data={email} />
			</InputNumber>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={disabledExample} />
</ExampleContainer>

<ExampleContainer title="With showSpin">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<InputNumber name="input-3" allowClear showSpin>
				<InputNumber.Label slot="label">Label</InputNumber.Label>
				<InputNumber.Leading slot="leading" data={email} />
			</InputNumber>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={showSpinExample} />
</ExampleContainer>

<ExampleContainer title="With min (1)">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<InputNumber name="input-3" min="1" showSpin>
				<InputNumber.Label slot="label">Label</InputNumber.Label>
				<InputNumber.Leading slot="leading" data={email} />
			</InputNumber>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={minExample} />
</ExampleContainer>

<ExampleContainer title="With max (10)">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<InputNumber name="input-3" max="10" showSpin>
				<InputNumber.Label slot="label">Label</InputNumber.Label>
				<InputNumber.Leading slot="leading" data={email} />
			</InputNumber>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={maxExample} />
</ExampleContainer>

<PropsTable component="InputNumber" {props} />

<SlotsTable component="InputNumber" {slots} />

<SlotsTable component="InputNumber.Label" slots={labelSlots} />

<PropsTable component="InputNumber.Leading" props={iconProps} />

<PropsTable component="InputNumber.Trailing" props={iconProps} />
