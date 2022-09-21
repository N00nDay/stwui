import OriginalAccordion from './Accordion.svelte';
import OriginalItem from './Item.svelte';
import Title from './Title.svelte';
import Content from './Content.svelte';

// FIXME: this interface removes the errors below but causes
// "Expected 0 arguments, but got 1." error when imported into external applications

interface AccordionItemStatic extends OriginalItem {
	new (): OriginalItem;
	Title: typeof Title;
	Content: typeof Content;
}
export interface AccordionStatic extends OriginalAccordion {
	new (): OriginalAccordion;
	Item: AccordionItemStatic;
}

const Accordion = OriginalAccordion as AccordionStatic;
Accordion.Item = OriginalItem as AccordionItemStatic;
// const Accordion = OriginalAccordion;
// Accordion.Item = OriginalItem;
Accordion.Item.Title = Title;
Accordion.Item.Content = Content;

export default Accordion;
