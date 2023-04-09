<script lang="ts">
	import { Button, List } from '../../lib';
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
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { contentSlots } from '../accordion/examples';
	import { account, print, info } from '../../lib/icons';

	const items = [
		{
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Calvin Hawkins',
			description: 'calvin.hawkins@example.com',
			data: account
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Kristen Ramos',
			description: 'kristen.ramos@example.com',
			data: print
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Ted Fox',
			description: 'ted.fox@example.com',
			data: info
		}
	];
</script>

<ExampleContainer title="Default">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<List class="w-full max-w-lg">
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
	</div>

	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="No Dividers & Icon">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<List divided={false} class="w-full max-w-lg">
			{#each items as item}
				<List.Item>
					<List.Item.Leading slot="leading">
						<List.Item.Leading.Icon slot="icon" data={item.data} />
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
	</div>

	<CodeBlock slot="code" language="svelte" code={noDividersExample} />
</ExampleContainer>

<ExampleContainer title="With Extra">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<List class="w-full max-w-lg">
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
	</div>

	<CodeBlock slot="code" language="svelte" code={extraExample} />
</ExampleContainer>

<ExampleContainer title="with Edge to Edge">
	<div
		slot="preview"
		class="-ml-6 -mr-6 w-[calc(100%+3rem)] flex flex-row items-center justify-center"
	>
		<List edgeToEdge class="w-full max-w-lg ">
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
	</div>

	<CodeBlock slot="code" language="svelte" code={edgeToEdgeExample} />
</ExampleContainer>

<ExampleContainer title="Bordered">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<List bordered class="w-full max-w-lg">
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
	</div>

	<CodeBlock slot="code" language="svelte" code={borderedExample} />
</ExampleContainer>

<ExampleContainer title="List No Avatar">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<List class="w-full max-w-lg">
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
	</div>

	<CodeBlock slot="code" language="svelte" code={noAvatarExample} />
</ExampleContainer>

<ExampleContainer title="List Just Title">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<List class="w-full max-w-lg">
			{#each items as item}
				<List.Item>
					<List.Item.Content slot="content">
						<List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
					</List.Item.Content>
				</List.Item>
			{/each}
		</List>
	</div>

	<CodeBlock slot="code" language="svelte" code={titleExample} />
</ExampleContainer>

<ExampleContainer title="List Just Description">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<List class="w-full max-w-lg">
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
	</div>

	<CodeBlock slot="code" language="svelte" code={descriptionExample} />
</ExampleContainer>

<PropsTable component="List" {props} />

<SlotsTable component="List" {slots} />

<SlotsTable component="List.Item" slots={itemSlots} />

<SlotsTable component="List.Item.Leading" slots={leadingSlots} />

<PropsTable component="List.Item.Leading.Icon" props={iconProps} />

<PropsTable component="List.Item.Leading.Avatar" props={avatarProps} />

<SlotsTable component="List.Item.Content" slots={contentSlots} />

<SlotsTable component="List.Item.Content.Title" slots={titleSlots} />

<SlotsTable component="List.Item.Content.Description" slots={descriptionSlots} />

<PropsTable component="List.Item.Extra" props={extraProps} />

<SlotsTable component="List.Item.Extra" slots={extraSlots} />
