<script lang="ts">
	import { ButtonGroup } from '../../lib';
	import {
		example,
		exampleActive,
		exampleDisabled,
		exampleIcon,
		exampleLeading,
		exampleLoading,
		slots,
		buttonProps,
		buttonSlots,
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { lock, send, home } from '../../docs/icons';

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

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<ButtonGroup>
			<ButtonGroup.Button on:click={() => console.log('button clicked!')}>One</ButtonGroup.Button>
			<ButtonGroup.Button on:click={() => console.log('button clicked!')}>Two</ButtonGroup.Button>
			<ButtonGroup.Button on:click={() => console.log('button clicked!')}>Three</ButtonGroup.Button>
		</ButtonGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="With Active">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<ButtonGroup>
			<ButtonGroup.Button on:click={() => changeActive1(0)} active={activeItem1 === 0}>
				One
			</ButtonGroup.Button>
			<ButtonGroup.Button on:click={() => changeActive1(1)} active={activeItem1 === 1}>
				Two
			</ButtonGroup.Button>
			<ButtonGroup.Button on:click={() => changeActive1(2)} active={activeItem1 === 2}>
				Three
			</ButtonGroup.Button>
		</ButtonGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleActive} />
</ExampleContainer>

<ExampleContainer title="With Disabled">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
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
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleDisabled} />
</ExampleContainer>

<ExampleContainer title="With Icon">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<ButtonGroup>
			<ButtonGroup.Button on:click={() => changeActive1(0)} active={activeItem1 === 0}>
				<ButtonGroup.Button.Icon slot="icon" data={home} />
			</ButtonGroup.Button>
			<ButtonGroup.Button on:click={() => changeActive1(1)} active={activeItem1 === 1}>
				<ButtonGroup.Button.Icon slot="icon" data={send} />
			</ButtonGroup.Button>
			<ButtonGroup.Button on:click={() => changeActive1(2)} active={activeItem1 === 2}>
				<ButtonGroup.Button.Icon slot="icon" data={lock} />
			</ButtonGroup.Button>
		</ButtonGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleIcon} />
</ExampleContainer>

<ExampleContainer title="With Leading">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<ButtonGroup>
			<ButtonGroup.Button on:click={() => changeActive1(0)} active={activeItem1 === 0}>
				<ButtonGroup.Button.Leading slot="leading" data={home} />
				Paid
			</ButtonGroup.Button>
			<ButtonGroup.Button on:click={() => changeActive1(1)} active={activeItem1 === 1}>
				<ButtonGroup.Button.Leading slot="leading" data={send} />
				Add
			</ButtonGroup.Button>
			<ButtonGroup.Button on:click={() => changeActive1(2)} active={activeItem1 === 2}>
				<ButtonGroup.Button.Leading slot="leading" data={lock} />
				Workspaces
			</ButtonGroup.Button>
		</ButtonGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleLeading} />
</ExampleContainer>

<ExampleContainer title="With Loading">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<ButtonGroup>
			<ButtonGroup.Button
				on:click={() => changeActive2(0)}
				active={activeItem2 === 0}
				loading={activeItem2 === 0 && loading}
			>
				<ButtonGroup.Button.Icon slot="icon" data={home} />
			</ButtonGroup.Button>
			<ButtonGroup.Button
				on:click={() => changeActive2(1)}
				active={activeItem2 === 1}
				loading={activeItem2 === 1 && loading}
			>
				<ButtonGroup.Button.Icon slot="icon" data={send} />
			</ButtonGroup.Button>
			<ButtonGroup.Button
				on:click={() => changeActive2(2)}
				active={activeItem2 === 2}
				loading={activeItem2 === 2 && loading}
			>
				<ButtonGroup.Button.Icon slot="icon" data={lock} />
			</ButtonGroup.Button>
		</ButtonGroup>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleLoading} />
</ExampleContainer>

<SlotsTable component="ButtonGroup" {slots} />

<PropsTable component="ButtonGroup.Button" props={buttonProps} />

<SlotsTable component="ButtonGroup.Button" slots={buttonSlots} />

<PropsTable component="ButtonGroup.Button.Leading" props={iconProps} />

<PropsTable component="ButtonGroup.Button.Icon" props={iconProps} />

<PropsTable component="ButtonGroup.Button.Trailing" props={iconProps} />
