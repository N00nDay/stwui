<script lang="ts">
	import { RadioGroup } from '../../lib';
	import {
		example,
		inlineExample,
		props,
		slots,
		labelSlots,
		radioProps,
		radioSlots,
		descriptionSlots,
		pillExample,
		gridExample,
		errorExample,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';

	let selected: string | undefined = undefined;
	let error: string | undefined = 'Here is an error!';
	$: if (selected) {
		error = undefined;
	} else {
		error = 'Here is an error!';
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-xs mx-auto">
			<RadioGroup name="group-1">
				<RadioGroup.Radio value="radio-1">
					<RadioGroup.Radio.Label slot="label">Radio-1</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-2">
					<RadioGroup.Radio.Label slot="label">Radio-2</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-3">
					<RadioGroup.Radio.Label slot="label">Radio-3</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-4">
					<RadioGroup.Radio.Label slot="label">Radio-4</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
			</RadioGroup>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="Group Label Inline with Description">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-xs mx-auto">
			<RadioGroup name="group-2" selected="radio-2">
				<RadioGroup.Label name="label">Radio Group 2</RadioGroup.Label>
				<RadioGroup.Radio value="radio-1">
					<RadioGroup.Radio.Label slot="label">Radio-1</RadioGroup.Radio.Label>
					<RadioGroup.Radio.Description slot="description">
						Radio-1 Description
					</RadioGroup.Radio.Description>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-2">
					<RadioGroup.Radio.Label slot="label">Radio-2</RadioGroup.Radio.Label>
					<RadioGroup.Radio.Description slot="description">
						Radio-2 Description
					</RadioGroup.Radio.Description>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-3">
					<RadioGroup.Radio.Label slot="label">Radio-3</RadioGroup.Radio.Label>
					<RadioGroup.Radio.Description slot="description">
						Radio-3 Description
					</RadioGroup.Radio.Description>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-4">
					<RadioGroup.Radio.Label slot="label">Radio-4</RadioGroup.Radio.Label>
					<RadioGroup.Radio.Description slot="description">
						Radio-4 Description
					</RadioGroup.Radio.Description>
				</RadioGroup.Radio>
			</RadioGroup>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={inlineExample} />
</ExampleContainer>

<ExampleContainer title="with Error">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-xs mx-auto">
			<RadioGroup name="group-1" bind:selected {error}>
				<RadioGroup.Radio value="radio-1">
					<RadioGroup.Radio.Label slot="label">Radio-1</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-2">
					<RadioGroup.Radio.Label slot="label">Radio-2</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-3">
					<RadioGroup.Radio.Label slot="label">Radio-3</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-4">
					<RadioGroup.Radio.Label slot="label">Radio-4</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
			</RadioGroup>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={errorExample} />
</ExampleContainer>

<ExampleContainer title="Pill">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-sm mx-auto">
			<RadioGroup name="group-3" type="pill">
				<RadioGroup.Radio value="radio-1">Radio-1</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-2">Radio-2</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-3">Radio-3</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-4">Radio-4</RadioGroup.Radio>
			</RadioGroup>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={pillExample} />
</ExampleContainer>

<ExampleContainer title="Pill with label and grid">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-xs mx-auto">
			<RadioGroup name="group-4" type="pill" class="grid-cols-2">
				<RadioGroup.Label slot="label">Radio Group 4</RadioGroup.Label>
				<RadioGroup.Radio value="radio-1">Radio-1</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-2">Radio-2</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-3">Radio-3</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-4">Radio-4</RadioGroup.Radio>
			</RadioGroup>
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={gridExample} />
</ExampleContainer>

<PropsTable component="RadioGroup" {props} />

<SlotsTable component="RadioGroup" {slots} />

<SlotsTable component="RadioGroup.Label" slots={labelSlots} />

<PropsTable component="RadioGroup.Radio" props={radioProps} />

<SlotsTable component="RadioGroup.Radio" slots={radioSlots} />

<SlotsTable component="RadioGroup.Radio.Label" slots={labelSlots} />

<SlotsTable component="RadioGroup.Radio.Description" slots={descriptionSlots} />

<ClassTable component="RadioGroup" {classList} />
