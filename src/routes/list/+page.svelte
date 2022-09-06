<script lang="ts">
	import type { IListItem } from '../../lib/components/list/Item.svelte';
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { List, ListItem } from '../../lib/components/list';

	const items: IListItem[] = [
		{
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Calvin Hawkins',
			description: 'calvin.hawkins@example.com',
			extra: {
				label: 'Extra',
				onClick: () => console.log('clicking extra!'),
				placement: 'start'
			}
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Kristen Ramos',
			description: 'kristen.ramos@example.com',
			extra: {
				label: 'Extra',
				leading: 'add_reaction',
				onClick: () => console.log('clicking extra!'),
				size: 'sm',
				type: 'primary',
				shape: 'pill'
			}
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Ted Fox',
			description: 'ted.fox@example.com',
			extra: {
				icon: 'edit',
				onClick: () => console.log('clicking extra!'),
				shape: 'circle',
				type: 'primary',
				placement: 'end'
			}
		}
	];
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>List Basic</CardHeader>
		<CardContent>
			<List>
				{#each items as item}
					<ListItem avatar={item.avatar} title={item.title} description={item.description} />
				{/each}
			</List>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>List No Dividers</CardHeader>
		<CardContent>
			<List divided={false}>
				{#each items as item}
					<ListItem avatar={item.avatar} title={item.title} description={item.description} />
				{/each}
			</List>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>List With Extra</CardHeader>
		<CardContent>
			<List>
				{#each items as item}
					<ListItem
						avatar={item.avatar}
						title={item.title}
						description={item.description}
						extra={item.extra}
					/>
				{/each}
			</List>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>List Edge To Edge</CardHeader>
		<CardContent noPadding>
			<List edgeToEdge>
				{#each items as item}
					<ListItem avatar={item.avatar} title={item.title} description={item.description} />
				{/each}
			</List>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>List Bordered</CardHeader>
		<CardContent>
			<List bordered>
				{#each items as item}
					<ListItem avatar={item.avatar} title={item.title} description={item.description} />
				{/each}
			</List>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>List No Avatar</CardHeader>
		<CardContent>
			<List bordered>
				{#each items as item}
					<ListItem title={item.title} description={item.description} />
				{/each}
			</List>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>List No Description</CardHeader>
		<CardContent>
			<List bordered>
				{#each items as item}
					<ListItem avatar={item.avatar} title={item.title} />
				{/each}
			</List>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>List Title Only</CardHeader>
		<CardContent>
			<List bordered>
				{#each items as item}
					<ListItem title={item.title} />
				{/each}
			</List>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>List Description Only</CardHeader>
		<CardContent>
			<List bordered>
				{#each items as item}
					<ListItem description={item.description} />
				{/each}
			</List>
		</CardContent>
	</Card>
</Col>
