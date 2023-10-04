<script lang="ts">
	import { Card, Media } from '../../lib';
	import {
		example,
		slots,
		avatarProps,
		contentSlots,
		titleSlots,
		descriptionSlots,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';

	const avatar =
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Card class="w-full max-w-lg">
			<Card.Content slot="content">
				<Media>
					<Media.Avatar src={avatar} />
					<Media.Content>
						<Media.Content.Title>Europe Street beat</Media.Content.Title>
						<Media.Content.Description>www.instagram.com</Media.Content.Description>
					</Media.Content>
				</Media>
			</Card.Content>
		</Card>
	</div>

	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<SlotsTable component="Media" {slots} />

<PropsTable component="Media.Avatar" props={avatarProps} />

<SlotsTable component="Media.Content" slots={contentSlots} />

<SlotsTable component="Medai.Content.Title" slots={titleSlots} />

<SlotsTable component="Medai.Content.Description" slots={descriptionSlots} />

<ClassTable component="Media" {classList} />
