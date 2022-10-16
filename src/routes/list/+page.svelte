<script lang="ts">
	import { Button, Card, Col, List } from '../../lib';
	import {
		example,
		noDividersExample,
		extraExample,
		edgeToEdgeExample,
		borderedExample,
		noAvatarExample,
		titleExample,
		descriptionExample,
		props,
		slots,
		iconProps,
		titleSlots,
		descriptionSlots,
		itemSlots,
		leadingSlots,
		avatarProps,
		extraProps,
		extraSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { contentSlots } from '../accordion/examples';

	const items = [
		{
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Calvin Hawkins',
			description: 'calvin.hawkins@example.com'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Kristen Ramos',
			description: 'kristen.ramos@example.com'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Ted Fox',
			description: 'ted.fox@example.com'
		}
	];
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Basic</Card.Header>
		<Card.Content slot="content">
			<List>
				{#each items as item}
					<List.Item>
						<List.Item.Leading slot="leading">
							<List.Item.Leading.Avatar slot="avatar" src={item.avatar} />
						</List.Item.Leading>
						<List.Item.Content slot="content">
							<List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
							<List.Item.Content.Description slot="description">
								{item.description}
							</List.Item.Content.Description>
						</List.Item.Content>
					</List.Item>
				{/each}
			</List>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">No Dividers</Card.Header>
		<Card.Content slot="content">
			<List divided={false}>
				{#each items as item}
					<List.Item>
						<List.Item.Leading slot="leading">
							<List.Item.Leading.Avatar slot="avatar" src={item.avatar} />
						</List.Item.Leading>
						<List.Item.Content slot="content">
							<List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
							<List.Item.Content.Description slot="description">
								{item.description}
							</List.Item.Content.Description>
						</List.Item.Content>
					</List.Item>
				{/each}
			</List>

			<br />

			<CodeBlock language="svelte" code={noDividersExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">With Extra</Card.Header>
		<Card.Content slot="content">
			<List>
				{#each items as item}
					<List.Item>
						<List.Item.Leading slot="leading">
							<List.Item.Leading.Avatar slot="avatar" src={item.avatar} />
						</List.Item.Leading>
						<List.Item.Content slot="content">
							<List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
							<List.Item.Content.Description slot="description">
								{item.description}
							</List.Item.Content.Description>
						</List.Item.Content>
						<List.Item.Extra slot="extra" placement="start">
							<Button type="primary" shape="pill" on:click={() => console.log('clicking extra!')}>
								Extra
							</Button>
						</List.Item.Extra>
					</List.Item>
				{/each}
			</List>

			<br />

			<CodeBlock language="svelte" code={extraExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">List Edge to Edge</Card.Header>
		<Card.Content slot="content" class="p-0 sm:p-0">
			<List edgeToEdge>
				{#each items as item}
					<List.Item>
						<List.Item.Leading slot="leading">
							<List.Item.Leading.Avatar slot="avatar" src={item.avatar} />
						</List.Item.Leading>
						<List.Item.Content slot="content">
							<List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
							<List.Item.Content.Description slot="description">
								{item.description}
							</List.Item.Content.Description>
						</List.Item.Content>
					</List.Item>
				{/each}
			</List>

			<br />

			<CodeBlock language="svelte" code={edgeToEdgeExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">List Bordered</Card.Header>
		<Card.Content slot="content">
			<List bordered>
				{#each items as item}
					<List.Item>
						<List.Item.Leading slot="leading">
							<List.Item.Leading.Avatar slot="avatar" src={item.avatar} />
						</List.Item.Leading>
						<List.Item.Content slot="content">
							<List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
							<List.Item.Content.Description slot="description">
								{item.description}
							</List.Item.Content.Description>
						</List.Item.Content>
					</List.Item>
				{/each}
			</List>

			<br />

			<CodeBlock language="svelte" code={borderedExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">List No Avatar</Card.Header>
		<Card.Content slot="content" class="p-0 sm:p-0">
			<List>
				{#each items as item}
					<List.Item>
						<List.Item.Content slot="content">
							<List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
							<List.Item.Content.Description slot="description">
								{item.description}
							</List.Item.Content.Description>
						</List.Item.Content>
					</List.Item>
				{/each}
			</List>

			<br />

			<CodeBlock language="svelte" code={noAvatarExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">List Just Title</Card.Header>
		<Card.Content slot="content" class="p-0 sm:p-0">
			<List>
				{#each items as item}
					<List.Item>
						<List.Item.Content slot="content">
							<List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
						</List.Item.Content>
					</List.Item>
				{/each}
			</List>

			<br />

			<CodeBlock language="svelte" code={titleExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">List Just Description</Card.Header>
		<Card.Content slot="content" class="p-0 sm:p-0">
			<List>
				{#each items as item}
					<List.Item>
						<List.Item.Content slot="content">
							<List.Item.Content.Description slot="description">
								{item.description}
							</List.Item.Content.Description>
						</List.Item.Content>
					</List.Item>
				{/each}
			</List>

			<br />

			<CodeBlock language="svelte" code={descriptionExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="List" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="List" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="List.Item" slots={itemSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="List.Item.Leading" slots={leadingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="List.Item.Leading.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="List.Item.Leading.Avatar" props={avatarProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="List.Item.Content" slots={contentSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="List.Item.Content.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="List.Item.Content.Description" slots={descriptionSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="List.Item.Extra" props={extraProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="List.Item.Extra" slots={extraSlots} />
</Col>
