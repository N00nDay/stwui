<script lang="ts">
	import { Avatar, Col } from '../../lib';
	import {
		initialsExample,
		props,
		slots,
		placeholderSlots,
		indicatorProps,
		brokenImageExample,
		sizeExample,
		shapeExample
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
</script>

<Col class="col-24 example-container">
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
</Col>

<Col class="col-24 example-container">
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
</Col>

<Col class="col-24 example-container">
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

		<CodeBlock language="svelte" code={sizeExample} slot="code" />
	</ExampleContainer>
</Col>

<Col class="col-24 example-container">
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
</Col>

<Col class="col-24 example-container">
	<ExampleContainer title="With Initials">
		<div slot="preview" class="w-full">
			<div class="w-full max-w-lg m-auto flex flex-row items-center justify-center gap-2">
				<Avatar size="xs" initials="CH" />
				<Avatar size="sm" initials="CH" />
				<Avatar initials="CH" />
				<Avatar size="lg" initials="CH" />
				<Avatar size="xl" initials="CH" />
			</div>
		</div>

		<CodeBlock language="svelte" code={initialsExample} slot="code" />
	</ExampleContainer>
</Col>

<Col class="col-24">
	<PropsTable component="Avatar" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Avatar" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Avatar.Placeholder" slots={placeholderSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Avatar.Indicator" props={indicatorProps} />
</Col>
