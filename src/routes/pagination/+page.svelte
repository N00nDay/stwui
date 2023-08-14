<script lang="ts">
	import { Pagination } from '../../lib';
	import { example, props, usage } from './examples';
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

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

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
