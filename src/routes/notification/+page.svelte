<script lang="ts">
	import { Button, Card, Col, Notification } from '../../lib';
	import {
		example,
		typeExample,
		type2Example,
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
		extraSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { folder } from '../../docs/icons';
	import { close } from '../../lib/icons';

	const avatar =
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
</script>

<Col class="col-24 md:col-8 sm:col-12">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
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

		<br />

		<CodeBlock language="svelte" code={example} />
	</Card>
</Col>

<Col class="col-24 md:col-8 sm:col-12">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
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

		<br />

		<CodeBlock language="svelte" code={avatarExample} />
	</Card>
</Col>

<Col class="col-24 md:col-8 sm:col-12">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Notification type="success">
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

		<br />

		<CodeBlock language="svelte" code={typeExample} />
	</Card>
</Col>

<Col class="col-24 md:col-8 sm:col-12">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Notification type="info">
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

		<br />

		<CodeBlock language="svelte" code={type2Example} />
	</Card>
</Col>

<Col class="col-24 md:col-8 sm:col-12">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
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

		<br />

		<CodeBlock language="svelte" code={basicExample} />
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Notification" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Notification" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Notification.Leading" slots={leadingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Notification.Leading.Avatar" props={avatarProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Notification.Leading.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Notification.Content" slots={contentSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Notification.Content.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Notification.Content.Description" slots={descriptionSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Notification.Extra" slots={extraSlots} />
</Col>
