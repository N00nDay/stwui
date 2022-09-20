import OriginalAccordion from './Accordion.svelte';
import OriginalItem from './Item.svelte';
import Title from './Title.svelte';
import Content from './Content.svelte';

interface AccordionItemStatic {
	new (): OriginalItem;
	Title: typeof Title;
	Content: typeof Content;
}
export interface AccordionStatic {
	new (): OriginalAccordion;
	Item: AccordionItemStatic;
}

const Accordion = OriginalAccordion as AccordionStatic;
Accordion.Item = OriginalItem as AccordionItemStatic;
Accordion.Item.Title = Title;
Accordion.Item.Content = Content;

export default Accordion;
