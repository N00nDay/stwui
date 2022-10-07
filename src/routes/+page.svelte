<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		Row,
		Col,
		Button,
		Card,
		Statistic,
		List,
		ButtonGroup,
		Post,
		Avatar,
		Toggle,
		Badge,
		Notification,
		Icon,
		Progress
	} from '../lib';
	import numberFormatter from '../lib/utils/numberFormatter';
	import { formatDate } from '../lib/utils/formatDate';
	import type { CarouselSlide, LightboxAction } from '../lib/types';

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

	let sendLoading = false;
	let deleteLoading = false;

	let activeItem = 1;

	let creator = {
		avatar:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		name: 'Joe Montana'
	};

	let created3 = new Date(2022, 7, 3);

	let images3: CarouselSlide[] = [
		{
			id: '31',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '32',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '33',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		}
	];

	let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	let likes = ['1', '2'];
	let comments = ['1', '2'];

	let on = true;

	const lightboxActions: LightboxAction[] = [];

	function changeActive(index: number) {
		activeItem = index;
	}

	function handleGetStarted() {
		goto('/accordion');
	}

	function getTrendValue(current: number, comparison: number | undefined) {
		return !comparison ? current : current - comparison;
	}

	function getTrendPercent(current: number, comparison: number | undefined) {
		const trendValue = !comparison ? current : current - comparison;
		return !comparison || comparison === 0 ? 100 : trendValue / comparison;
	}
</script>

<div class="w-full h-full">
	<Row class="h-[500px]">
		<Col class="md:col-12 col-24 h-full">
			<div
				class="p-4 md:p-8 min-h-[500px] h-[calc(100vh-200px)] flex flex-col justify-center items-start"
			>
				<h1 class="font-black text-6xl text-primary">Components you want</h1>
				<h1 class="font-black text-6xl text-light-content dark:text-dark-content">
					the way you want them
				</h1>
				<p class="text-light-content dark:text-dark-content mt-4">
					STWUI provides a complete set of Svelte components and UI tools to help you develop faster
					than ever.
				</p>
				<!-- <Button class="mt-4" type="primary" on:click={handleGetStarted}
					>Get Started
					<Button.Trailing slot="trailing">
						<Button.Trailing.Icon slot="icon" icon="arrow_forward" />
					</Button.Trailing>
				</Button> -->
			</div>
		</Col>
		<Col class="md:col-12 hidden md:flex h-full">
			<Card
				bordered={false}
				class="w-full relative -top-4 -right-4 min-w-[700px] min-h-[500px] h-[calc(100vh-200px)] overflow-hidden"
			>
				<Card.Content class="px-3 py-6 sm:px-3 sm:py-6">
					<Row>
						<Col class="col-12">
							<div class="w-full p-4">
								<Statistic class="bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
									<Statistic.Icon class="text-white" slot="icon" icon="assessment" />
									<Statistic.Title class="text-white" slot="title">Page Views</Statistic.Title>
									<Statistic.Value class="text-white" slot="value">
										{numberFormatter(2660000, {
											style: 'currency',
											notation: 'compact',
											maximumFractionDigits: 1,
											minimumFractionDigits: 1
										})}
									</Statistic.Value>
									<Statistic.Comparison slot="comparison">
										<Statistic.Comparison.Value class="text-white" slot="value">
											Last Year: {numberFormatter(2580000, {
												style: 'currency',
												notation: 'compact',
												maximumFractionDigits: 1,
												minimumFractionDigits: 1
											})}
										</Statistic.Comparison.Value>
										<Statistic.Comparison.Trend
											class="bg-white text-white"
											icon="trending_up"
											slot="trend"
										>
											{numberFormatter(getTrendValue(2660000, 2580000), {
												style: 'currency',
												notation: 'compact',
												maximumFractionDigits: 1,
												minimumFractionDigits: 1
											})} ({numberFormatter(getTrendPercent(2660000, 2580000), {
												style: 'percent'
											})})
										</Statistic.Comparison.Trend>
									</Statistic.Comparison>
								</Statistic>
							</div>
							<div class="p-4">
								<ButtonGroup block>
									<ButtonGroup.Button on:click={() => changeActive(0)} active={activeItem === 0}
										>One</ButtonGroup.Button
									>
									<ButtonGroup.Button on:click={() => changeActive(1)} active={activeItem === 1}
										>Two</ButtonGroup.Button
									>
									<ButtonGroup.Button on:click={() => changeActive(2)} active={activeItem === 2}
										>Three</ButtonGroup.Button
									>
								</ButtonGroup>
							</div>
							<div class="p-4">
								<Post>
									<Post.Header slot="header">
										<Avatar slot="avatar" src={creator.avatar} />
										<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
										<Post.Header.Created slot="created">{formatDate(created3)}</Post.Header.Created>
									</Post.Header>

									<Post.Content slot="content">
										{@html content}
									</Post.Content>

									<Post.Images id="post-3" slot="images" images={images3} {lightboxActions} />

									<Post.Status slot="status" {likes} {comments} />

									<Post.Actions slot="actions">
										<Post.Actions.Action icon="thumb_up" label="Like" />
										<Post.Actions.Action icon="comment" label="Comment" />
										<Post.Actions.Action icon="share" label="Share" />
									</Post.Actions>
								</Post>
							</div>
						</Col>
						<Col class="col-12">
							<div class="p-4">
								<Card>
									<List edgeToEdge>
										{#each items as item}
											<List.Item>
												<List.Item.Leading slot="leading">
													<List.Item.Leading.Avatar slot="avatar" src={item.avatar} />
												</List.Item.Leading>
												<List.Item.Content slot="content">
													<List.Item.Content.Title slot="title"
														>{item.title}</List.Item.Content.Title
													>
													<List.Item.Content.Description slot="description"
														>{item.description}</List.Item.Content.Description
													>
												</List.Item.Content>
											</List.Item>
										{/each}
									</List>
								</Card>
							</div>

							<div class="p-4 flex flex-row gap-2">
								<Toggle name="toggle-1" {on} />

								<Toggle name="toggle-2" />

								<Badge type="success"
									>Badge 1
									<Badge.Close />
								</Badge>

								<Badge type="error">Badge 2</Badge>
							</div>

							<div class="p-4">
								<Notification class="cursor-default">
									<Notification.Leading slot="leading">
										<Icon icon="account_tree" class="text-pink-500" />
									</Notification.Leading>
									<Notification.Content slot="content">
										<Notification.Content.Title slot="title"
											>Successfully Saved!</Notification.Content.Title
										>
										<Notification.Content.Description slot="description">
											Anyone with a link can now view this file.
										</Notification.Content.Description>
									</Notification.Content>
									<Notification.Extra slot="extra">
										<Button on:click={() => console.log('notification closed!')} shape="circle">
											<Button.Icon slot="icon" icon="close" />
										</Button>
									</Notification.Extra>
								</Notification>
							</div>

							<div class="p-4">
								<Progress value={25} />
								<br />
								<Progress value={0} indeterminate />
								<br />
								<Progress value={75} radial />
								<Progress value={100} radial type="success" />
							</div>

							<div class="p-4">
								<Button
									type="primary"
									on:click={() => (sendLoading = !sendLoading)}
									loading={sendLoading}
								>
									<Button.Leading slot="leading">
										<Button.Leading.Icon slot="icon" icon="send" />
									</Button.Leading>
									Click Me!
								</Button>

								<Button
									type="danger"
									on:click={() => (deleteLoading = !deleteLoading)}
									loading={deleteLoading}
								>
									<Button.Leading slot="leading">
										<Button.Leading.Icon slot="icon" icon="delete" />
									</Button.Leading>
									Click Me!
								</Button>
							</div>
						</Col>
					</Row>
				</Card.Content>
			</Card>
		</Col>
	</Row>
</div>
