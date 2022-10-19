import OriginalTabs from './Tabs.svelte';
import OriginalTab from './Tab.svelte';
import Icon from '../icon/Icon.svelte';

const Tabs = OriginalTabs as TabsStatic;
Tabs.Tab = OriginalTab as TabStatic;
Tabs.Tab.Icon = Icon;

export default Tabs;

export interface TabsStatic {
	new (...args: ConstructorParameters<typeof OriginalTabs>): OriginalTabs;
	Tab: TabStatic;
}

export interface TabStatic {
	new (...args: ConstructorParameters<typeof OriginalTab>): OriginalTab;
	Icon: typeof Icon;
}
