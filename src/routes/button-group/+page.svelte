<script lang="ts">
	import { ButtonGroup, Card, Col } from '../../lib';

	function handleClick() {
		console.log('button clicked!');
	}

	let activeItem1 = 1;

	function changeActive1(index: number) {
		activeItem1 = index;
	}

	let activeItem2: number;
	let loading = false;

	function changeActive2(index: number) {
		activeItem2 = index;
		loading = true;

		setTimeout(() => {
			loading = false;
		}, 2000);
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Basic</Card.Header>
		<Card.Content slot="content" class="p-4">
			<ButtonGroup>
				<ButtonGroup.Button on:click={handleClick}>One</ButtonGroup.Button>
				<ButtonGroup.Button on:click={handleClick}>Two</ButtonGroup.Button>
				<ButtonGroup.Button on:click={handleClick}>Three</ButtonGroup.Button>
			</ButtonGroup>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Basic with Active</Card.Header>
		<Card.Content slot="content" class="p-4">
			<ButtonGroup>
				<ButtonGroup.Button on:click={() => changeActive1(0)} active={activeItem1 === 0}
					>One</ButtonGroup.Button
				>
				<ButtonGroup.Button on:click={() => changeActive1(1)} active={activeItem1 === 1}
					>Two</ButtonGroup.Button
				>
				<ButtonGroup.Button on:click={() => changeActive1(2)} active={activeItem1 === 2}
					>Three</ButtonGroup.Button
				>
			</ButtonGroup>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Basic with Disabled</Card.Header>
		<Card.Content slot="content" class="p-4">
			<ButtonGroup>
				<ButtonGroup.Button disabled on:click={() => changeActive1(0)} active={activeItem1 === 0}
					>One</ButtonGroup.Button
				>
				<ButtonGroup.Button on:click={() => changeActive1(1)} active={activeItem1 === 1}
					>Two</ButtonGroup.Button
				>
				<ButtonGroup.Button on:click={() => changeActive1(2)} active={activeItem1 === 2}
					>Three</ButtonGroup.Button
				>
			</ButtonGroup>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Basic with Icon</Card.Header>
		<Card.Content slot="content" class="p-4">
			<ButtonGroup>
				<ButtonGroup.Button on:click={() => changeActive1(0)} active={activeItem1 === 0}>
					<ButtonGroup.Button.Icon slot="icon" icon="paid" /></ButtonGroup.Button
				>
				<ButtonGroup.Button on:click={() => changeActive1(1)} active={activeItem1 === 1}
					><ButtonGroup.Button.Icon slot="icon" icon="add_circle" /></ButtonGroup.Button
				>
				<ButtonGroup.Button on:click={() => changeActive1(2)} active={activeItem1 === 2}
					><ButtonGroup.Button.Icon slot="icon" icon="workspaces" /></ButtonGroup.Button
				>
			</ButtonGroup>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Basic with Leading</Card.Header>
		<Card.Content slot="content" class="p-4">
			<ButtonGroup>
				<ButtonGroup.Button on:click={() => changeActive1(0)} active={activeItem1 === 0}>
					<ButtonGroup.Button.Leading slot="leading">
						<ButtonGroup.Button.Leading.Icon slot="icon" icon="paid" />
					</ButtonGroup.Button.Leading>
					Paid</ButtonGroup.Button
				>

				<ButtonGroup.Button on:click={() => changeActive1(1)} active={activeItem1 === 1}
					><ButtonGroup.Button.Leading slot="leading">
						<ButtonGroup.Button.Leading.Icon slot="icon" icon="add_circle" />
					</ButtonGroup.Button.Leading>Add</ButtonGroup.Button
				>
				<ButtonGroup.Button on:click={() => changeActive1(2)} active={activeItem1 === 2}
					><ButtonGroup.Button.Leading slot="leading">
						<ButtonGroup.Button.Leading.Icon slot="icon" icon="workspaces" />
					</ButtonGroup.Button.Leading>Workspaces</ButtonGroup.Button
				>
			</ButtonGroup>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Basic with Loading</Card.Header>
		<Card.Content slot="content" class="p-4">
			<ButtonGroup>
				<ButtonGroup.Button
					on:click={() => changeActive2(0)}
					active={activeItem2 === 0}
					loading={activeItem2 === 0 && loading}
				>
					<ButtonGroup.Button.Icon slot="icon" icon="paid" /></ButtonGroup.Button
				>
				<ButtonGroup.Button
					on:click={() => changeActive2(1)}
					active={activeItem2 === 1}
					loading={activeItem2 === 1 && loading}
					><ButtonGroup.Button.Icon slot="icon" icon="add_circle" /></ButtonGroup.Button
				>
				<ButtonGroup.Button
					on:click={() => changeActive2(2)}
					active={activeItem2 === 2}
					loading={activeItem2 === 2 && loading}
					><ButtonGroup.Button.Icon slot="icon" icon="workspaces" /></ButtonGroup.Button
				>
			</ButtonGroup>
		</Card.Content>
	</Card>
</Col>
