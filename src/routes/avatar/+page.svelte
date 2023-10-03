<script lang="ts">
	import { Avatar } from '../../lib';
	import {
		initialsExample,
		props,
		slots,
		placeholderSlots,
		indicatorProps,
		brokenImageExample,
		indicatorExample,
		sizeExample,
		shapeExample,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Sizes">
	<div slot="preview" class="w-full">
		<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2">
			<Avatar
				size="xs"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="sm"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="lg"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="xl"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
		</div>
	</div>

	<CodeBlock language="svelte" code={sizeExample} slot="code" />
</ExampleContainer>

<ExampleContainer title="Broken Image Fallback">
	<div slot="preview" class="w-full">
		<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2">
			<Avatar size="xs" src="broken_image.png" />
			<Avatar size="sm" src="broken_image.png" />
			<Avatar src="broken_image.png" />
			<Avatar size="lg" src="broken_image.png" />
			<Avatar size="xl" src="broken_image.png" />
		</div>
	</div>

	<CodeBlock language="svelte" code={brokenImageExample} slot="code" />
</ExampleContainer>

<ExampleContainer title="With Indicator">
	<div slot="preview" class="w-full">
		<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2">
			<Avatar
				size="xs"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			>
				<Avatar.Indicator slot="indicator" placement="top-left" />
			</Avatar>
			<Avatar
				size="sm"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			>
				<Avatar.Indicator slot="indicator" placement="top-right" />
			</Avatar>
			<Avatar
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			>
				<Avatar.Indicator slot="indicator" placement="bottom-right" />
			</Avatar>
			<Avatar
				size="lg"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			>
				<Avatar.Indicator slot="indicator" placement="bottom-left" />
			</Avatar>
			<Avatar
				size="xl"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			>
				<Avatar.Indicator slot="indicator" placement="top-left" />
			</Avatar>
		</div>
	</div>

	<CodeBlock language="svelte" code={indicatorExample} slot="code" />
</ExampleContainer>

<ExampleContainer title="Shapes">
	<div slot="preview" class="w-full">
		<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2 mb-2">
			<Avatar
				size="xs"
				shape="rounded"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="sm"
				shape="rounded"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				shape="rounded"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="lg"
				shape="rounded"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="xl"
				shape="rounded"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
		</div>
		<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2">
			<Avatar
				size="xs"
				shape="square"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="sm"
				shape="square"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				shape="square"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="lg"
				shape="square"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="xl"
				shape="square"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
		</div>
	</div>

	<CodeBlock language="svelte" code={shapeExample} slot="code" />
</ExampleContainer>

<ExampleContainer title="With Initials">
	<div slot="preview" class="w-full">
		<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2">
			<Avatar size="xs" initials="ND" />
			<Avatar size="sm" initials="ND" />
			<Avatar initials="ND" />
			<Avatar size="lg" initials="ND" />
			<Avatar size="xl" initials="ND" />
		</div>
	</div>

	<CodeBlock language="svelte" code={initialsExample} slot="code" />
</ExampleContainer>

<PropsTable component="Avatar" {props} />

<SlotsTable component="Avatar" {slots} />

<SlotsTable component="Avatar.Placeholder" slots={placeholderSlots} />

<PropsTable component="Avatar.Indicator" props={indicatorProps} />

<ClassTable component="Avatar" {classList} />
