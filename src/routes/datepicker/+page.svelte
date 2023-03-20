<script lang="ts">
	import { DatePicker } from '../../lib';
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
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { phone } from '../../docs/icons';
	import { calendar } from '../../lib/icons';

	const date2Max = new Date(2022, 7, 30);
	const date2Min = new Date(2022, 7, 3);

	let value: Date | null;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-1" placeholder="Basic" class="w-full" />
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={basicExample} />
</ExampleContainer>

<ExampleContainer title="With Label">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-2" allowClear class="w-full">
				<DatePicker.Label slot="label">Date</DatePicker.Label>
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLabelExample} />
</ExampleContainer>

<ExampleContainer title="With Leading">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-3" allowClear class="w-full">
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Leading slot="leading" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLeadingExample} />
</ExampleContainer>

<ExampleContainer title="With Trailing">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-4" label="Date" class="w-full">
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withtrailingExample} />
</ExampleContainer>

<ExampleContainer title="With Error">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-5" label="Date" bind:value {error} class="w-full">
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withErrorExample} />
</ExampleContainer>

<ExampleContainer title="Disabled">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-6" label="Date" disabled class="w-full">
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={disabledExample} />
</ExampleContainer>

<PropsTable component="DatePicker" {props} />

<SlotsTable component="DatePicker" {slots} />

<SlotsTable component="DatePicker.Label" slots={labelSlots} />

<PropsTable component="DatePicker.Leading" props={iconProps} />

<PropsTable component="DatePicker.Trailing" props={iconProps} />
