<script lang="ts">
	import { Card, Col, Media } from '../../lib';
	import CodeBlock from '../../docs/components/code-block';
	import {
		example,
		noAvatarExample,
		slots,
		avatarProps,
		contentSlots,
		titleSlots,
		descriptionSlots
	} from './examples';
	import { PropsTable, SlotsTable } from '../../docs';

	const avatar =
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
</script>

<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Card bordered={false}>
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

		<br />

		<CodeBlock language="svelte" code={example} />
	</Card>
</Col>

<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Card bordered={false}>
			<Card.Content slot="content">
				<Media>
					<Media.Content>
						<Media.Content.Title>Europe Street beat</Media.Content.Title>
						<Media.Content.Description>www.instagram.com</Media.Content.Description>
					</Media.Content>
				</Media>
			</Card.Content>
		</Card>

		<br />

		<CodeBlock language="svelte" code={noAvatarExample} />
	</Card>
</Col>

<Col class="col-24">
	<SlotsTable component="Media" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Media.Avatar" props={avatarProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Media.Content" slots={contentSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Medai.Content.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Medai.Content.Description" slots={descriptionSlots} />
</Col>
