// Components
import PropsTable from './components/props-table/PropsTable.svelte';
import SlotsTable from './components/slots-table/SlotsTable.svelte';
import ClassTable from './components/class-table/ClassTable.svelte';
import BetaComponent from './components/beta-component/BetaComponent.svelte';
import UpdatedComponent from './components/updated-component/UpdatedComponent.svelte';
import InlineCode from './components/inline-code/InlineCode.svelte';
import CodeBlock from './components/code-block';
import Navigation from './components/navigation/Navigation.svelte';
import Search from './components/search/Search.svelte';
import Kbd from './components/kbd/Kbd.svelte';
import ExampleContainer from './components/example-container/ExampleContainer.svelte';
import WrapContainer from './components/example-container/WrapContainer.svelte';

// Types
import type { Prop } from './types/props-table';
import type { Slot } from './types/slots-table';
import type { IClass } from './types/class-table';

export {
	PropsTable,
	SlotsTable,
	ClassTable,
	BetaComponent,
	UpdatedComponent,
	InlineCode,
	CodeBlock,
	Navigation,
	Prop,
	Slot,
	IClass,
	Search,
	Kbd,
	ExampleContainer,
	WrapContainer
};
