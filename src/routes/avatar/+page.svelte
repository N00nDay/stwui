<script lang="ts">
	import { Avatar, Card, Col } from '../../lib';
	import {
		exampleSize,
		exampleIndicator,
		exampleInitials,
		props,
		slots,
		placeholderSlots,
		indicatorProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Avatar</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Avatar
				size="xs"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="sm"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar src="noimage.jpg" />
			<Avatar
				size="lg"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
			<Avatar
				size="xl"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleSize} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Indicator</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Avatar
				class="mr-2"
				size="xs"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			>
				<Avatar.Indicator slot="indicator" placement="top-left" />
			</Avatar>
			<Avatar
				class="mr-2"
				size="sm"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			>
				<Avatar.Indicator slot="indicator" placement="top-right" />
			</Avatar>
			<Avatar
				class="mr-2"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			>
				<Avatar.Indicator slot="indicator" placement="bottom-left" />
			</Avatar>
			<Avatar
				class="mr-2"
				size="lg"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			>
				<Avatar.Indicator slot="indicator" placement="bottom-right" />
			</Avatar>
			<Avatar
				class="mr-2"
				size="xl"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			>
				<Avatar.Indicator slot="indicator" placement="top-right" />
			</Avatar>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleIndicator} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Initials</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Avatar size="xs" initials="CH" />
			<Avatar size="sm" initials="CH" />
			<Avatar initials="CH" />
			<Avatar size="lg" initials="CH" />
			<Avatar size="xl" initials="CH" />

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleInitials} />
		</Card.Content>
	</Card>
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
