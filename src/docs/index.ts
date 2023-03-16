// Components
import PropsTable from './components/props-table/PropsTable.svelte';
import SlotsTable from './components/slots-table/SlotsTable.svelte';
import BetaComponent from './components/beta-component/BetaComponent.svelte';
import UpdatedComponent from './components/updated-component/UpdatedComponent.svelte';
import InlineCode from './components/inline-code/InlineCode.svelte';
import CodeBlock from './components/code-block';
import Navigation from './components/navigation/Navigation.svelte';
import Search from './components/search/Search.svelte';
import Kbd from './components/kbd/Kbd.svelte';
import ExampleContainer from './components/example-container/ExampleContainer.svelte';

// Types
import type { Prop } from './types/props-table';
import type { Slot } from './types/slots-table';

export {
	PropsTable,
	SlotsTable,
	BetaComponent,
	UpdatedComponent,
	InlineCode,
	CodeBlock,
	Navigation,
	Prop,
	Slot,
	Search,
	Kbd,
	ExampleContainer
};
