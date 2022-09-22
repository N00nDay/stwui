<script lang="ts">
	import { Card, Col, Feed } from '../../lib';

	const item1 =
		'<span>Applied to <a href="#item1" class="font-bold">Front End Developer</a></span>';
	const item2 =
		'<span>Advanced to phone screeingin by <a href="#item2" class="font-bold">Bethany Blake</a></span>';
	const item3 =
		'<span>Completed phone screening with <a href="#item3" class="font-bold">Martha Gardner</a></span>';
	const item4 =
		'<span>Advanced to interview by <a href="#item4" class="font-bold">Bethany Blake</a></span>';
	const item5 =
		'<span>Completed interview with <a href="#item5" class="font-bold">Katherine Snyder</a></span>';
</script>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Simple</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Feed>
				<Feed.Item>
					<Feed.Item.Leading slot="leading">
						<Feed.Item.Leading.Avatar
							slot="avatar"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						/>
					</Feed.Item.Leading>
					<Feed.Item.Content slot="content">
						{@html item1}
					</Feed.Item.Content>
					<Feed.Item.DateTime slot="datetime" date={new Date(2022, 8, 21)} />
				</Feed.Item>

				<Feed.Item>
					<Feed.Item.Leading slot="leading" class="bg-info-background">
						<Feed.Item.Leading.Icon slot="avatar" icon="thumb_up" />
					</Feed.Item.Leading>
					<Feed.Item.Content slot="content">
						{@html item2}
					</Feed.Item.Content>
					<Feed.Item.DateTime slot="datetime" date={new Date(2022, 8, 19)} />
				</Feed.Item>

				<Feed.Item>
					<Feed.Item.Leading slot="leading" class="bg-success-background">
						<Feed.Item.Leading.Icon slot="avatar" icon="done" />
					</Feed.Item.Leading>
					<Feed.Item.Content slot="content">
						{@html item3}
					</Feed.Item.Content>
					<Feed.Item.DateTime slot="datetime" date={new Date(2022, 8, 15)} />
				</Feed.Item>

				<Feed.Item>
					<Feed.Item.Leading slot="leading" class="bg-info-background">
						<Feed.Item.Leading.Icon slot="avatar" icon="thumb_up" />
					</Feed.Item.Leading>
					<Feed.Item.Content slot="content">
						{@html item4}
					</Feed.Item.Content>
					<Feed.Item.DateTime slot="datetime" date={new Date(2022, 8, 2)} />
				</Feed.Item>

				<Feed.Item>
					<Feed.Item.Leading slot="leading" class="bg-success-background">
						<Feed.Item.Leading.Icon slot="avatar" icon="done" />
					</Feed.Item.Leading>
					<Feed.Item.Content slot="content">
						{@html item5}
					</Feed.Item.Content>
					<Feed.Item.DateTime slot="datetime" date={new Date(2022, 7, 22)} />
				</Feed.Item>
			</Feed>
		</Card.Content>
	</Card>
</Col>
