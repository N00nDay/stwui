import OriginalTable from './Table.svelte';
import OriginalHeader from './Header.svelte';
import HeaderRow from './HeaderRow.svelte';
import OriginalBody from './Body.svelte';
import OriginalRow from './Row.svelte';
import Cell from './Cell.svelte';
import Footer from './Footer.svelte';

const Table = OriginalTable as TableStatic;
Table.Header = OriginalHeader as HeaderStatic;
Table.Header.Row = HeaderRow;
Table.Body = OriginalBody as BodyStatic;
Table.Body.Row = OriginalRow as RowStatic;
Table.Body.Row.Cell = Cell;
Table.Footer = Footer;

export default Table;

export interface TableStatic {
	new (...args: ConstructorParameters<typeof OriginalTable>): OriginalTable;
	Header: HeaderStatic;
	Body: BodyStatic;
	Footer: typeof Footer;
}

export interface HeaderStatic {
	new (...args: ConstructorParameters<typeof OriginalHeader>): OriginalHeader;
	Row: typeof HeaderRow;
}

export interface BodyStatic {
	new (...args: ConstructorParameters<typeof OriginalBody>): OriginalBody;
	Row: RowStatic;
}

export interface RowStatic {
	new (...args: ConstructorParameters<typeof OriginalRow>): OriginalRow;
	Cell: typeof Cell;
}
