<script lang="ts">
	import { Autocomplete, Card, Col } from '../../lib';
	import CodeBlock from '../../docs/components/code-block';
	import { example, props, slots, listSlots, optionProps, emptyOptionProps } from './examples';
	import { PropsTable, SlotsTable } from '../../docs';

	let value1: string;
	let value2: string;
	let value3: string;

	let options1 = ['Option 1', 'Option 2', 'Option 3'];
	let options2 = ['Option 1', 'Option 2', 'Option 3'];
	let options3 = ['Option 1', 'Option 2', 'Option 3'];

	let filtered1 = ['Option 1', 'Option 2', 'Option 3'];
	let filtered2 = ['Option 1', 'Option 2', 'Option 3'];
	let filtered3 = ['Option 1', 'Option 2', 'Option 3'];

	function filter1(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered1 = options1.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

	function filter2(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered2 = options2.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

	function filter3(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered3 = options3.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

	function filterOptions(option: string, key: 1 | 2 | 3) {
		if (key === 1) {
			if (option) {
				filtered1 = options1.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
			} else {
				filtered1 = options1;
			}
		} else if (key === 2) {
			if (option) {
				filtered2 = options2.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
			} else {
				filtered2 = options2;
			}
		} else {
			if (option) {
				filtered3 = options3.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
			} else {
				filtered3 = options3;
			}
		}
	}

	$: filterOptions(value1, 1);
	$: filterOptions(value2, 2);
	$: filterOptions(value3, 3);
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Autocomplete</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Autocomplete name="select-1" placeholder="Basic" bind:value={value1} on:input={filter1}>
				<Autocomplete.List slot="list">
					{#if filtered1.length > 0}
						{#each filtered1 as option}
							<Autocomplete.List.Option value={option} selected={value1 === option} />
						{/each}
					{:else}
						<Autocomplete.List.EmptyOption />
					{/if}
				</Autocomplete.List>
			</Autocomplete>
			<br />
			<Autocomplete
				name="select-2"
				label="Label"
				leading="email"
				trailing="phone"
				bind:value={value2}
				on:input={filter2}
			>
				<Autocomplete.List slot="list">
					{#if filtered2.length > 0}
						{#each filtered2 as option}
							<Autocomplete.List.Option value={option} selected={value2 === option} />
						{/each}
					{:else}
						<Autocomplete.List.EmptyOption />
					{/if}
				</Autocomplete.List>
			</Autocomplete>
			<br />
			<Autocomplete
				name="select-3"
				label="Label"
				leading="email"
				trailing="phone"
				error="There has been an error"
				bind:value={value3}
				on:input={filter3}
			>
				<Autocomplete.List slot="list">
					{#if filtered3.length > 0}
						{#each filtered3 as option}
							<Autocomplete.List.Option value={option} selected={value3 === option} />
						{/each}
					{:else}
						<Autocomplete.List.EmptyOption />
					{/if}
				</Autocomplete.List>
			</Autocomplete>

			<br />

			<CodeBlock language="html" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Autocomplete" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Autocomplete" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Autocomplete.List" slots={listSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Autocomplete.List.Option" props={optionProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Autocomplete.List.EmptyOption" props={emptyOptionProps} />
</Col>
