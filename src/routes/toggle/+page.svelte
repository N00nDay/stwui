<script lang="ts">
	import { Toggle } from '../../lib';
	import {
		example1,
		example2,
		example3,
		example4,
		example5,
		example6,
		props,
		slots,
		iconProps,
		titleSlots,
		descriptionSlots,
		contentLeftSlots,
		contentRightSlots,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
	import { brightness_4, brightness_5 } from '../../docs/icons';

	let on = false;
	let error: string | undefined = 'Here is an error!';
	$: if (on) {
		error = undefined;
	} else {
		error = 'Here is an error!';
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Toggle />
	</div>

	<CodeBlock slot="code" language="svelte" code={example1} />
</ExampleContainer>

<ExampleContainer title="With Left Label">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Toggle>
			<Toggle.ContentLeft slot="content-left">
				<Toggle.ContentLeft.Label slot="label">Left Label</Toggle.ContentLeft.Label>
			</Toggle.ContentLeft>
		</Toggle>
	</div>

	<CodeBlock slot="code" language="svelte" code={example2} />
</ExampleContainer>

<ExampleContainer title="With Both Labels">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Toggle>
			<Toggle.ContentLeft slot="content-left">
				<Toggle.ContentLeft.Label slot="label">Left Label</Toggle.ContentLeft.Label>
			</Toggle.ContentLeft>
			<Toggle.ContentRight slot="content-right">
				<Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
			</Toggle.ContentRight>
		</Toggle>
	</div>

	<CodeBlock slot="code" language="svelte" code={example3} />
</ExampleContainer>

<ExampleContainer title="With Description">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Toggle>
			<Toggle.ContentRight slot="content-right">
				<Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
				<Toggle.ContentRight.Description slot="description"
					>(10% off)</Toggle.ContentRight.Description
				>
			</Toggle.ContentRight>
		</Toggle>
	</div>

	<CodeBlock slot="code" language="svelte" code={example4} />
</ExampleContainer>

<ExampleContainer title="With Error">
	<div slot="preview" class="w-full flex flex-col gap-2 items-center justify-center">
		<Toggle {error} bind:on />
	</div>

	<CodeBlock slot="code" language="svelte" code={example5} />
</ExampleContainer>

<ExampleContainer title="With Icons">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Toggle>
			<Toggle.LeftIcon slot="left-icon" data={brightness_5} class="text-white" />
			<Toggle.RightIcon slot="right-icon" data={brightness_4} />
		</Toggle>
	</div>

	<CodeBlock slot="code" language="svelte" code={example6} />
</ExampleContainer>

<PropsTable component="Toggle" {props} />

<SlotsTable component="Toggle" {slots} />

<PropsTable component="Toggle.LeftIcon" props={iconProps} />

<PropsTable component="Toggle.RightIcon" props={iconProps} />

<SlotsTable component="Toggle.ContentLeft" slots={contentLeftSlots} />

<SlotsTable component="Toggle.ContentLeft.Title" slots={titleSlots} />

<SlotsTable component="Toggle.ContentLeft.Description" slots={descriptionSlots} />

<SlotsTable component="Toggle.ContentRight" slots={contentRightSlots} />

<SlotsTable component="Toggle.ContentRight.Title" slots={titleSlots} />

<SlotsTable component="Toggle.ContentRight.Description" slots={descriptionSlots} />

<ClassTable component="Toggle" {classList} />
