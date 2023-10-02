<script lang="ts">
	import { Button, Notification } from '../../lib';
	import {
		example,
		basicExample,
		avatarExample,
		props,
		slots,
		leadingSlots,
		avatarProps,
		iconProps,
		contentSlots,
		titleSlots,
		descriptionSlots,
		extraSlots,
		usage
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { folder } from '../../docs/icons';
	import { close } from '../../lib/icons';

	const avatar =
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="With Icon, Title, & Description">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Notification>
			<Notification.Leading slot="leading">
				<Notification.Leading.Icon data={folder} class="text-pink-500" />
			</Notification.Leading>
			<Notification.Content slot="content">
				<Notification.Content.Title slot="title">Successfully Saved!</Notification.Content.Title>
				<Notification.Content.Description slot="description">
					Anyone with a link can now view this file.
				</Notification.Content.Description>
			</Notification.Content>
			<Notification.Extra slot="extra" class="-top-2 -right-2">
				<Button on:click={() => console.log('notification closed!')} shape="circle">
					<Button.Icon slot="icon" data={close} />
				</Button>
			</Notification.Extra>
		</Notification>
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="With Avatar, Title, & Description">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Notification>
			<Notification.Leading slot="leading">
				<Notification.Leading.Avatar slot="avatar" src={avatar} />
			</Notification.Leading>
			<Notification.Content slot="content">
				<Notification.Content.Title slot="title">New Message</Notification.Content.Title>
				<Notification.Content.Description slot="description">
					Nice work on that proposal!
				</Notification.Content.Description>
			</Notification.Content>
		</Notification>
	</div>
	<CodeBlock slot="code" language="svelte" code={avatarExample} />
</ExampleContainer>

<ExampleContainer title="With Description & Extra">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Notification>
			<Notification.Content slot="content">
				<Notification.Content.Description slot="description">
					Anyone with a link can now view this file.
				</Notification.Content.Description>
			</Notification.Content>
			<Notification.Extra slot="extra" class="-top-2 -right-2">
				<Button
					type="primary"
					size="sm"
					on:click={() => console.log('notification extra clicked!')}
					trailing="arrow_forward">Details</Button
				>
			</Notification.Extra>
		</Notification>
	</div>
	<CodeBlock slot="code" language="svelte" code={basicExample} />
</ExampleContainer>

<PropsTable component="Notification" {props} />

<SlotsTable component="Notification" {slots} />

<SlotsTable component="Notification.Leading" slots={leadingSlots} />

<PropsTable component="Notification.Leading.Avatar" props={avatarProps} />

<PropsTable component="Notification.Leading.Icon" props={iconProps} />

<SlotsTable component="Notification.Content" slots={contentSlots} />

<SlotsTable component="Notification.Content.Title" slots={titleSlots} />

<SlotsTable component="Notification.Content.Description" slots={descriptionSlots} />

<SlotsTable component="Notification.Extra" slots={extraSlots} />
