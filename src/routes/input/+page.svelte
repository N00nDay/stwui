<script lang="ts">
	import { Input } from '../../lib';
	import {
		basicExample,
		withLabelExample,
		withLeadingExample,
		withtrailingExample,
		withErrorExample,
		disabledExample,
		passwordExample,
		props,
		slots,
		labelSlots,
		iconProps,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
	import { email, phone, lock } from '../../docs/icons';

	let value: string | undefined;
	let error: string | undefined = "You're doing it wrong!";
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
			<Input name="input-1" placeholder="Basic" />
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={basicExample} />
</ExampleContainer>

<ExampleContainer title="With Label">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Input name="input-2">
				<Input.Label slot="label">Label</Input.Label>
			</Input>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLabelExample} />
</ExampleContainer>

<ExampleContainer title="With Leading">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Input name="input-3" allowClear>
				<Input.Label slot="label">Label</Input.Label>
				<Input.Leading slot="leading" data={email} />
			</Input>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withLeadingExample} />
</ExampleContainer>

<ExampleContainer title="With Trailing">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Input name="input-4" allowClear>
				<Input.Label slot="label">Label</Input.Label>
				<Input.Trailing slot="trailing" data={phone} />
			</Input>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withtrailingExample} />
</ExampleContainer>

<ExampleContainer title="With Error">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Input
				name="input-5"
				bind:value
				{error}
				handleLeadingClick={() => console.log('clicking leading')}
			>
				<Input.Label slot="label">Label</Input.Label>
				<Input.Leading slot="leading" data={email} />
				<Input.Trailing slot="trailing" data={phone} />
			</Input>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={withErrorExample} />
</ExampleContainer>

<ExampleContainer title="Disabled">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Input name="input-6" disabled>
				<Input.Label slot="label">Label</Input.Label>
				<Input.Leading slot="leading" data={email} />
			</Input>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={disabledExample} />
</ExampleContainer>

<ExampleContainer title="With Password">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-lg mx-auto">
			<Input type="password" name="input-7" showPasswordToggle>
				<Input.Label slot="label">Password</Input.Label>
				<Input.Leading slot="leading" data={lock} />
			</Input>
		</div>
	</div>

	<CodeBlock slot="code" language="svelte" code={passwordExample} />
</ExampleContainer>

<PropsTable component="Input" {props} />

<SlotsTable component="Input" {slots} />

<SlotsTable component="Input.Label" slots={labelSlots} />

<PropsTable component="Input.Leading" props={iconProps} />

<PropsTable component="Input.Trailing" props={iconProps} />

<ClassTable component="Input" {classList} />
