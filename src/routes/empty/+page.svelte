<script lang="ts">
	import { Button, Empty } from '../../lib';
	import { example, slots, iconProps, titleSlots, descriptionSlots, actionSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';

	import { plus_circle, lock } from '../../docs/icons';
</script>

<ExampleContainer title="Avatar Dropdown">
	<div slot="preview" class="w-full flex gap-2 justify-center items-center">
		<Empty>
			<Empty.Icon slot="icon" data={lock} />
			<Empty.Title slot="title">No Projects</Empty.Title>
			<Empty.Description slot="description">
				Get started by creating a new project.
			</Empty.Description>
			<Empty.Action slot="action">
				<Button type="primary" on:click={() => console.log('clicked new project')}>
					<Button.Leading slot="leading" data={plus_circle} />
					New Project
				</Button>
			</Empty.Action>
		</Empty>
	</div>

	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<SlotsTable component="Empty" {slots} />

<PropsTable component="Empty.Icon" props={iconProps} />

<SlotsTable component="Empty.Title" slots={titleSlots} />

<SlotsTable component="Empty.Description" slots={descriptionSlots} />

<SlotsTable component="Empty.Action" slots={actionSlots} />
