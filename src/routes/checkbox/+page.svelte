<script lang="ts">
	import { CheckboxGroup } from '../../lib';
	import {
		example,
		inlineExample,
		labelDescriptionExample,
		props,
		slots,
		groupLabelSlots,
		checkboxProps,
		checkboxSlots,
		labelSlots,
		descriptionSlots,
		disabledExample,
		defaultCheckedExample,
		errorExample,
		usage
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';

	let checked = false;
	let error: string | undefined = 'Here is an error!';
	$: if (checked) {
		error = undefined;
	} else {
		error = 'Here is an error!';
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="flex flex-col gap-2 items-center justify-center w-full">
		<CheckboxGroup>
			<CheckboxGroup.Checkbox name="cb-1" value="cb-1">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-1</CheckboxGroup.Checkbox.Label>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox name="cb-2" value="cb-2">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-2</CheckboxGroup.Checkbox.Label>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox name="cb-3" value="cb-3">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-3</CheckboxGroup.Checkbox.Label>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox indeterminate name="cb-4" value="cb-4">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-4</CheckboxGroup.Checkbox.Label>
			</CheckboxGroup.Checkbox>
		</CheckboxGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="With Label and Description">
	<div slot="preview" class="flex flex-col gap-2 items-center justify-center w-full">
		<CheckboxGroup>
			<CheckboxGroup.Label slot="label">Checkbox Group</CheckboxGroup.Label>
			<CheckboxGroup.Checkbox name="cb-9" value="cb-9">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-9</CheckboxGroup.Checkbox.Label>
				<CheckboxGroup.Checkbox.Description slot="description">
					desc-9
				</CheckboxGroup.Checkbox.Description>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox name="cb-10" value="cb-10">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-10</CheckboxGroup.Checkbox.Label>
				<CheckboxGroup.Checkbox.Description slot="description">
					desc-10
				</CheckboxGroup.Checkbox.Description>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox name="cb-11" value="cb-11">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-11</CheckboxGroup.Checkbox.Label>
				<CheckboxGroup.Checkbox.Description slot="description">
					desc-11
				</CheckboxGroup.Checkbox.Description>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox name="cb-12" value="cb-12">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-12</CheckboxGroup.Checkbox.Label>
				<CheckboxGroup.Checkbox.Description slot="description">
					desc-12
				</CheckboxGroup.Checkbox.Description>
			</CheckboxGroup.Checkbox>
		</CheckboxGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={labelDescriptionExample} />
</ExampleContainer>

<ExampleContainer title="With Inline Description">
	<div slot="preview" class="flex flex-col gap-2 items-center justify-center w-full">
		<CheckboxGroup inline>
			<CheckboxGroup.Label slot="label">Checkbox Group</CheckboxGroup.Label>
			<CheckboxGroup.Checkbox name="cb-13" value="cb-13">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-13</CheckboxGroup.Checkbox.Label>
				<CheckboxGroup.Checkbox.Description slot="description">
					desc-13
				</CheckboxGroup.Checkbox.Description>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox name="cb-14" value="cb-14">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-14</CheckboxGroup.Checkbox.Label>
				<CheckboxGroup.Checkbox.Description slot="description">
					desc-14
				</CheckboxGroup.Checkbox.Description>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox name="cb-15" value="cb-15">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-15</CheckboxGroup.Checkbox.Label>
				<CheckboxGroup.Checkbox.Description slot="description">
					desc-15
				</CheckboxGroup.Checkbox.Description>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox name="cb-16" value="cb-16">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-16</CheckboxGroup.Checkbox.Label>
				<CheckboxGroup.Checkbox.Description slot="description">
					desc-16
				</CheckboxGroup.Checkbox.Description>
			</CheckboxGroup.Checkbox>
		</CheckboxGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={inlineExample} />
</ExampleContainer>

<ExampleContainer title="With Default Checked">
	<div slot="preview" class="flex flex-col gap-2 items-center justify-center w-full">
		<CheckboxGroup>
			<CheckboxGroup.Checkbox name="cb-19" value="cb-19" checked={true}>
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-19</CheckboxGroup.Checkbox.Label>
			</CheckboxGroup.Checkbox>
		</CheckboxGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={defaultCheckedExample} />
</ExampleContainer>

<ExampleContainer title="With Disabled">
	<div slot="preview" class="flex flex-col gap-2 items-center justify-center w-full">
		<CheckboxGroup>
			<CheckboxGroup.Checkbox name="cb-17" value="cb-17" disabled={true}>
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-17</CheckboxGroup.Checkbox.Label>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox name="cb-18" value="cb-18" disabled={true} checked={true}>
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-18</CheckboxGroup.Checkbox.Label>
			</CheckboxGroup.Checkbox>
		</CheckboxGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={disabledExample} />
</ExampleContainer>

<ExampleContainer title="With Error">
	<div slot="preview" class="flex flex-col gap-2 items-center justify-center w-full">
		<CheckboxGroup>
			<CheckboxGroup.Checkbox name="cb-20" value="cb-20" {error} bind:checked>
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-20</CheckboxGroup.Checkbox.Label>
			</CheckboxGroup.Checkbox>
			<CheckboxGroup.Checkbox name="cb-21" value="cb-21">
				<CheckboxGroup.Checkbox.Label slot="label">Checkbox-21</CheckboxGroup.Checkbox.Label>
			</CheckboxGroup.Checkbox>
		</CheckboxGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={errorExample} />
</ExampleContainer>

<PropsTable component="CheckboxGroup" {props} />

<SlotsTable component="CheckboxGroup" {slots} />

<SlotsTable component="CheckboxGroup.Label" slots={groupLabelSlots} />

<PropsTable component="CheckboxGroup.Checkbox" props={checkboxProps} />

<SlotsTable component="CheckboxGroup.Checkbox" slots={checkboxSlots} />

<SlotsTable component="CheckboxGroup.Checkbox.Label" slots={labelSlots} />

<SlotsTable component="CheckboxGroup.Checkbox.Description" slots={descriptionSlots} />
