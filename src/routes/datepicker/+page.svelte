<script lang="ts">
	import { Card, Col, DatePicker } from '../../lib';
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
		withTimeAndStepExample,
		withTimeExample,
		withActionExample,
		withTime24Example,
		withMobileExample,
		withMobileAndActionsExample,
		withMobileAndTimeExample,
		localeExample
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer, InlineCode } from '../../docs';
	import { calendar } from '../../lib/icons';
	import dayjs from 'dayjs';
	// import 'dayjs/locale/de';
	// import { onMount } from 'svelte';

	let value: Date | null;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}

	function handleToday() {
		const today = dayjs().toISOString();
		value = new Date(today);
	}

	// onMount(() => {
	// 	dayjs.locale('de');
	// });
</script>

<!-- <svelte:head>
	<script src="path/to/dayjs/locale/de"></script>
</svelte:head> -->

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

<ExampleContainer title="With Time">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-7" label="Date" class="w-full" showTime>
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withTimeExample} />
</ExampleContainer>

<ExampleContainer title="With Time (24 hour)">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-7" label="Date" class="w-full" showTime format="MMMM D, YYYY @ H:mm">
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withTime24Example} />
</ExampleContainer>

<ExampleContainer title="With Time And Step">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-7" label="Date" class="w-full" showTime minuteStep={15}>
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withTimeAndStepExample} />
</ExampleContainer>

<ExampleContainer title="With Action">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker
				bind:value
				name="date-8"
				label="Date"
				class="w-full"
				actions={[{ label: 'Today', action: handleToday }]}
			>
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withActionExample} />
</ExampleContainer>

<ExampleContainer title="Mobile">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-9" label="Date" class="w-full" mobile>
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withMobileExample} />
</ExampleContainer>

<ExampleContainer title="Mobile With Actions">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker
				bind:value
				name="date-9"
				label="Date"
				class="w-full"
				mobile
				actions={[{ label: 'Today', action: handleToday }]}
			>
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withMobileAndActionsExample} />
</ExampleContainer>

<ExampleContainer title="Mobile With Time">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<DatePicker name="date-9" label="Date" class="w-full" mobile showTime>
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withMobileAndTimeExample} />
</ExampleContainer>

<Col class="col-24 example-container">
	<div class="w-full">
		<div class="w-full flex items-center justify-between px-0.5 pb-2">
			<h4 class="text-content">Localization</h4>
		</div>

		<Card bordered={false}>
			<Card.Content slot="content">
				<p class="text-content">
					By default, the locale is en-US. However, there are several other locales available
					through Dayjs. To use other languages, you can simply import the locale and assign it
					globally. Once you import the locale, you can call <InlineCode>dayjs.locale()</InlineCode>
					with the key of the imported locale to change the global locale. The list of supported locales
					can be found
					<a
						class="link"
						target="_blank"
						rel="noreferrer noopener"
						href="https://github.com/iamkun/dayjs/tree/dev/src/locale">here</a
					>.
				</p>
				<br />
				<CodeBlock language="typescript" code={localeExample} />
			</Card.Content>
		</Card>
	</div>
</Col>

<PropsTable component="DatePicker" {props} />

<SlotsTable component="DatePicker" {slots} />

<SlotsTable component="DatePicker.Label" slots={labelSlots} />

<PropsTable component="DatePicker.Leading" props={iconProps} />

<PropsTable component="DatePicker.Trailing" props={iconProps} />
