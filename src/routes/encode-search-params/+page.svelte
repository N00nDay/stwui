<script lang="ts">
	import { Row, Col, Input, Card, Badge, Button } from '../../lib';
	import { encodeSearchParams } from '../../lib/utils';
	import { example } from './examples';
	import { CodeBlock } from '../../docs';
	import { writable, type Writable } from 'svelte/store';

	let param = '';
	let value = '';

	let searchParams: Writable<Record<string, string>> = writable({
		paramOne: 'one',
		paramTwo: 'two'
	});

	function addParam() {
		searchParams.update((current) => {
			return { ...current, [param]: value };
		});
		param = '';
		value = '';
	}

	function deleteParam(paramToDelete: string) {
		searchParams.update((current) => {
			delete current[paramToDelete];
			return current;
		});
	}
</script>

<Col class="col-24">
	<Card>
		<Card.Content>
			<Row>
				<Col class="col-11">
					<Input label="Parameter" name="parameter" bind:value={param} class="pr-2" />
				</Col>
				<Col class="col-11">
					<Input label="Value" name="value" bind:value class="pr-2" />
				</Col>
				<Col class="col-2 flex justify-start items-end h-[62px]">
					<Button type="primary" on:click={addParam}>Submit</Button>
				</Col>
				<Col class="col-24 h-[64px] flex items-center justify-center gap-2">
					{#each Object.entries($searchParams) as [key, value]}
						<Badge type="info">
							{key}: {value}
							<Badge.Close slot="close" on:click={() => deleteParam(key)} />
						</Badge>
					{/each}
				</Col>
				<Col class="col-24 h-full flex items-end justify-center">
					Search Params: https://some-site.com{encodeSearchParams($searchParams)}
				</Col>
			</Row>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>
