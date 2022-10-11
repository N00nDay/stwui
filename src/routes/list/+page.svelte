<script lang="ts">
	import { Button, Card, Col, List } from '../../lib';

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
		<Card.Header slot="header">List Basic</Card.Header>
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
							<Button type="primary" shape="pill" on:click={() => console.log('clicking extra!')}
								>Extra</Button
							>
						</List.Item.Extra>
					</List.Item>
				{/each}
			</List>
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
		</Card.Content>
	</Card>
</Col>
