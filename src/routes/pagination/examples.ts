import type { Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'start',
		type: 'number',
		default: ''
	},
	{
		id: '2',
		prop: 'end',
		type: 'number',
		default: ''
	},
	{
		id: '3',
		prop: 'total',
		type: 'number',
		default: ''
	},
	{
		id: '4',
		prop: 'total',
		type: 'number',
		default: ''
	},
	{
		id: '5',
		prop: 'currentPage',
		type: 'number',
		default: ''
	},
	{
		id: '6',
		prop: 'onNextClick',
		type: '() => void',
		default: ''
	},
	{
		id: '7',
		prop: 'onPreviousClick',
		type: '() => void',
		default: ''
	},
	{
		id: '8',
		prop: 'onPageClick',
		type: '(page: number) => void',
		default: ''
	},
	{
		id: '9',
		prop: 'pageSize',
		type: 'number',
		default: '25'
	}
];

export const usage = `
import { Pagination } from 'stwui';
// OR
import Pagination from 'stwui/pagination'; // for tree shaking
`;

export const example = `
<script lang="ts">
	import { Pagination } from 'stwui';

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

<Pagination
	{start}
	{end}
	{total}
	pageSize={rowsPerPage}
	{currentPage}
	{onNextClick}
	{onPageClick}
	{onPreviousClick}
/>`;
