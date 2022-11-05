<script lang="ts">
	import { Card, Col, Pagination } from '../../lib';
	import { example, props } from './examples';
	import { PropsTable, BetaComponent, CodeBlock } from '../../docs';

	let rowsPerPage = 25;

	let start = 1;
	let end = 25;
	let total = 97;
	let currentPage = 1;

	function calculateStartAndEnd() {
		start = currentPage * rowsPerPage - rowsPerPage + 1;
		end = start + (rowsPerPage - 1) > total ? total : start + (rowsPerPage - 1);
	}

	function onPreviousClick() {
		currentPage--;
		calculateStartAndEnd();
	}

	function onNextClick() {
		console.log('FIRED!');
		currentPage++;
		calculateStartAndEnd();
	}

	function onPageClick(page: number) {
		currentPage = page;
		calculateStartAndEnd();
	}
</script>

<Col class="col-24">
	<BetaComponent />
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Pagination
				{start}
				{end}
				{total}
				{currentPage}
				{onNextClick}
				{onPageClick}
				{onPreviousClick}
			/>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Alert" {props} />
</Col>
