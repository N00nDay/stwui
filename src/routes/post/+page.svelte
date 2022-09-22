<script lang="ts">
	import { Avatar, Col } from '../../lib';
	import Post from '../../lib/components/post';
	import { formatDate } from '$lib/utils/formatDate';

	let creator = {
		avatar:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		name: 'Joe Montana'
	};
	let created1 = new Date(2022, 8, 11);
	let created2 = new Date(2022, 8, 10);
	let created3 = new Date(2022, 7, 3);
	let created4 = new Date(2021, 8, 11);
	let images1 = [
		'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	];
	let images2 = [
		'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	];
	let images3 = [
		'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
	];
	let images4 = [
		'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	];
	let images5 = [
		'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	];
	let content =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	let likes = ['1', '2'];
	let comments = ['1', '2'];
</script>

<Col class="col-24">
	<div class="p-4 grid grid-cols-3 gap-2 items-start">
		<Post>
			<Post.Header slot="header">
				<Avatar slot="avatar" src={creator.avatar} />
				<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
				<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
			</Post.Header>

			<Post.Content slot="content">
				{@html content}
			</Post.Content>

			<Post.Images slot="images" images={images1} />

			<Post.Status slot="status" likes={[]} comments={[]} />

			<Post.Actions slot="actions">
				<Post.Actions.Action icon="thumb_up" label="Like" />
				<Post.Actions.Action icon="comment" label="Comment" />
				<Post.Actions.Action icon="share" label="Share" />
			</Post.Actions>
		</Post>

		<Post>
			<Post.Header slot="header">
				<Avatar slot="avatar" src={creator.avatar} />

				<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
				<Post.Header.Created slot="created">{formatDate(created2)}</Post.Header.Created>
			</Post.Header>

			<Post.Content slot="content">
				{@html content}
			</Post.Content>

			<Post.Images slot="images" images={images2} />

			<Post.Status slot="status" {likes} comments={[]} />

			<Post.Actions slot="actions">
				<Post.Actions.Action icon="thumb_up" label="Like" />
				<Post.Actions.Action icon="comment" label="Comment" />
				<Post.Actions.Action icon="share" label="Share" />
			</Post.Actions>
		</Post>

		<Post>
			<Post.Header slot="header">
				<Avatar slot="avatar" src={creator.avatar} />
				<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
				<Post.Header.Created slot="created">{formatDate(created3)}</Post.Header.Created>
			</Post.Header>

			<Post.Content slot="content">
				{@html content}
			</Post.Content>

			<Post.Images slot="images" images={images3} />

			<Post.Status slot="status" {likes} {comments} />

			<Post.Actions slot="actions">
				<Post.Actions.Action icon="thumb_up" label="Like" />
				<Post.Actions.Action icon="comment" label="Comment" />
				<Post.Actions.Action icon="share" label="Share" />
			</Post.Actions>
		</Post>

		<Post>
			<Post.Header slot="header">
				<Avatar slot="avatar" src={creator.avatar} />
				<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
				<Post.Header.Created slot="created">{formatDate(created4)}</Post.Header.Created>
			</Post.Header>

			<Post.Content slot="content">
				{@html content}
			</Post.Content>

			<Post.Images slot="images" images={images4} />

			<Post.Status slot="status" {likes} comments={[]} />

			<Post.Actions slot="actions">
				<Post.Actions.Action icon="thumb_up" label="Like" />
				<Post.Actions.Action icon="comment" label="Comment" />
				<Post.Actions.Action icon="share" label="Share" />
			</Post.Actions>
		</Post>

		<Post>
			<Post.Header slot="header">
				<Avatar slot="avatar" src={creator.avatar} />
				<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
				<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
			</Post.Header>

			<Post.Content slot="content">
				{@html content}
			</Post.Content>

			<Post.Images slot="images" images={images5} />

			<Post.Status slot="status" likes={[]} {comments} />

			<Post.Actions slot="actions">
				<Post.Actions.Action icon="thumb_up" label="Like" />
				<Post.Actions.Action icon="comment" label="Comment" />
				<Post.Actions.Action icon="share" label="Share" />
			</Post.Actions>
		</Post>
	</div>
</Col>
