<script lang="ts">
	import type { CarouselSlide, LightboxAction } from '../../lib/types';
	import { Post } from '../../lib';
	import { formatDate } from '../../lib/utils';
	import {
		example,
		example1,
		example2,
		example4,
		example5,
		props,
		slots,
		headerSlots,
		avatarProps,
		creatorSlots,
		createdSlots,
		contentSlots,
		imagesProps,
		statusProps,
		actionsSlots,
		actionSlots,
		labelSlots,
		iconProps,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
	import { comment, share, thumb_up } from '../../lib/icons';

	let creator = {
		avatar:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		name: 'Joe Montana'
	};
	let created1 = new Date(2022, 8, 11);
	let created4 = new Date(2021, 8, 11);
	let images4: CarouselSlide[] = [
		{
			id: '41',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '42',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '43',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '44',
			src: 'https://images.unsplash.com/photo-1664064568815-38b7be217ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2445&q=80'
		}
	];
	let images5: CarouselSlide[] = [
		{
			id: '51',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '52',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '53',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '54',
			src: 'https://images.unsplash.com/photo-1664064568815-38b7be217ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2445&q=80'
		},
		{
			id: '55',
			src: 'https://images.unsplash.com/photo-1664075550378-6b07dd9830a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
		}
	];
	let content =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
	let likes = ['1', '2'];
	let comments = ['1', '2'];

	const lightboxActions: LightboxAction[] = [];
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Simple Post">
	<div slot="preview" class="w-full block">
		<Post bordered={true} class="m-auto max-w-[400px]">
			<Post.Header slot="header">
				<Post.Header.Avatar slot="avatar" src={creator.avatar} />
				<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
				<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
			</Post.Header>

			<Post.Content slot="content">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html content}
			</Post.Content>
		</Post>
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="With Actions">
	<div slot="preview" class="w-full block">
		<Post bordered={true} class="m-auto max-w-[400px]">
			<Post.Header slot="header">
				<Post.Header.Avatar slot="avatar" src={creator.avatar} />
				<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
				<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
			</Post.Header>

			<Post.Content slot="content">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html content}
			</Post.Content>

			<Post.Actions slot="actions">
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={thumb_up} />
					<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
				</Post.Actions.Action>
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={comment} />
					<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
				</Post.Actions.Action>
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={share} />
					<Post.Actions.Action.Label slot="label">Share</Post.Actions.Action.Label>
				</Post.Actions.Action>
			</Post.Actions>
		</Post>
	</div>
	<CodeBlock slot="code" language="svelte" code={example1} />
</ExampleContainer>

<ExampleContainer title="With Status">
	<div slot="preview" class="w-full block">
		<Post bordered={true} class="m-auto max-w-[400px]">
			<Post.Header slot="header">
				<Post.Header.Avatar slot="avatar" src={creator.avatar} />
				<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
				<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
			</Post.Header>

			<Post.Content slot="content">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html content}
			</Post.Content>

			<Post.Status slot="status" {likes} comments={[]} />

			<Post.Actions slot="actions">
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={thumb_up} />
					<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
				</Post.Actions.Action>
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={comment} />
					<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
				</Post.Actions.Action>
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={share} />
					<Post.Actions.Action.Label slot="label">Share</Post.Actions.Action.Label>
				</Post.Actions.Action>
			</Post.Actions>
		</Post>
	</div>
	<CodeBlock slot="code" language="svelte" code={example2} />
</ExampleContainer>

<ExampleContainer title="Post With Images">
	<div slot="preview" class="w-full block">
		<Post bordered={true} class="m-auto max-w-[400px]">
			<Post.Header slot="header">
				<Post.Header.Avatar slot="avatar" src={creator.avatar} />
				<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
				<Post.Header.Created slot="created">{formatDate(created4)}</Post.Header.Created>
			</Post.Header>

			<Post.Content slot="content">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html content}
			</Post.Content>

			<Post.Images id="post-4" slot="images" images={images4} {lightboxActions} />

			<Post.Status slot="status" {likes} comments={[]} />

			<Post.Actions slot="actions">
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={thumb_up} />
					<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
				</Post.Actions.Action>
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={comment} />
					<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
				</Post.Actions.Action>
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={share} />
					<Post.Actions.Action.Label slot="label">Share</Post.Actions.Action.Label>
				</Post.Actions.Action>
			</Post.Actions>
		</Post>
	</div>
	<CodeBlock slot="code" language="svelte" code={example4} />
</ExampleContainer>

<ExampleContainer title="Post With 4+ Images">
	<div slot="preview" class="w-full block">
		<Post bordered={true} class="m-auto max-w-[400px]">
			<Post.Header slot="header">
				<Post.Header.Avatar slot="avatar" src={creator.avatar} />
				<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
				<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
			</Post.Header>

			<Post.Content slot="content">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html content}
			</Post.Content>

			<Post.Images id="post-5" slot="images" images={images5} {lightboxActions} />

			<Post.Status slot="status" likes={[]} {comments} />

			<Post.Actions slot="actions">
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={thumb_up} />
					<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
				</Post.Actions.Action>
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={comment} />
					<Post.Actions.Action.Label slot="label">Like</Post.Actions.Action.Label>
				</Post.Actions.Action>
				<Post.Actions.Action>
					<Post.Actions.Action.Icon slot="icon" data={share} />
					<Post.Actions.Action.Label slot="label">Share</Post.Actions.Action.Label>
				</Post.Actions.Action>
			</Post.Actions>
		</Post>
	</div>
	<CodeBlock slot="code" language="svelte" code={example5} />
</ExampleContainer>

<PropsTable component="Post" {props} />

<SlotsTable component="Post" {slots} />

<SlotsTable component="Post.Header" slots={headerSlots} />

<PropsTable component="Post.Header.Avatar" props={avatarProps} />

<SlotsTable component="Post.Header.Creator" slots={creatorSlots} />

<SlotsTable component="Post.Header.Created" slots={createdSlots} />

<SlotsTable component="Post.Content" slots={contentSlots} />

<PropsTable component="Post.Images" props={imagesProps} />

<PropsTable component="Post.Status" props={statusProps} />

<SlotsTable component="Post.Actions" slots={actionsSlots} />

<SlotsTable component="Post.Actions.Action" slots={actionSlots} />

<PropsTable component="Post.Actions.Action.Icon" props={iconProps} />

<SlotsTable component="Post.Actions.Action.Label" slots={labelSlots} />

<ClassTable component="Post" {classList} />
