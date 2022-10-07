<script lang="ts">
	import { Avatar, AvatarGroup, Card, Col } from '../../lib';
	import CodeBlock from '../../docs/components/code-block';
	import {
		exampleSize,
		exampleIndicator,
		exampleInitials,
		exampleGroup,
		props,
		slots,
		iconProps,
		placeholderSlots,
		indicatorProps,
		groupProps,
		groupSlots,
		groupAvatarProps
	} from './examples';
	import { PropsTable, SlotsTable } from '../../docs';

	const avatars = [
		'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	];
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

			<CodeBlock language="typescript" code={exampleSize} />
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

			<CodeBlock language="typescript" code={exampleIndicator} />
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

			<CodeBlock language="typescript" code={exampleInitials} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Avatar Group</Card.Header>
		<Card.Content slot="content" class="p-4">
			<AvatarGroup size="xs">
				{#each avatars as avatar}
					<AvatarGroup.Avatar src={avatar} />
				{/each}
			</AvatarGroup>
			<br />
			<AvatarGroup size="sm">
				{#each avatars as avatar}
					<AvatarGroup.Avatar src={avatar} />
				{/each}
			</AvatarGroup>
			<br />
			<AvatarGroup>
				{#each avatars as avatar}
					<AvatarGroup.Avatar src={avatar} />
				{/each}
			</AvatarGroup>
			<br />
			<AvatarGroup size="lg">
				{#each avatars as avatar}
					<AvatarGroup.Avatar src={avatar} class="ring-primary dark:ring-primary" />
				{/each}
			</AvatarGroup>
			<br />
			<AvatarGroup size="xl">
				{#each avatars as avatar}
					<AvatarGroup.Avatar src={avatar} />
				{/each}
			</AvatarGroup>

			<br />

			<CodeBlock language="typescript" code={exampleGroup} />
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
	<PropsTable component="Avatar.Placeholder.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Avatar.Indicator" props={indicatorProps} />
</Col>

<Col class="col-24">
	<PropsTable component="AvatarGroup" props={groupProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="AvatarGroup" slots={groupSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="AvatarGroup.Avatar" props={groupAvatarProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="AvatarGroup.Avatar" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="AvatarGroup.Avatar.Placeholder" slots={placeholderSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="AvatarGroup.Avatar.Placeholder.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="AvatarGroup.Avatar.Indicator" props={indicatorProps} />
</Col>
