<script lang="ts">
	import { AvatarGroup, Card, Col, Divider } from '../../lib';
	import {
		exampleGroup,
		slots,
		iconProps,
		placeholderSlots,
		indicatorProps,
		groupProps,
		groupSlots,
		groupAvatarProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	const avatars = [
		'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	];
</script>

<Col class="col-24 mb-4">
	<h1 class="text-light-content dark:text-dark-content mb-0">AvatarGroup</h1>
	<Divider />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
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
			<br />

			<CodeBlock language="svelte" code={exampleGroup} />
		</Card.Content>
	</Card>
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
