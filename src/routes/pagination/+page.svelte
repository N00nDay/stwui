<script lang="ts">
	import { Pagination } from '../../lib';
	import { example, props } from './examples';
	import { PropsTable, BetaComponent, CodeBlock, ExampleContainer } from '../../docs';

	let rowsPerPage = 10;

	let start = 1;
	let end = 10;
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

<BetaComponent />

<ExampleContainer title="With Description & Extra" resizable={false}>
	<Pagination
		slot="preview"
		{start}
		{end}
		{total}
		pageSize={rowsPerPage}
		{currentPage}
		{onNextClick}
		{onPageClick}
		{onPreviousClick}
	/>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<PropsTable component="Alert" {props} />
