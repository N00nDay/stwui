import OriginalTimeline from './Timeline.svelte';
import Item from './Item.svelte';

const Timeline = OriginalTimeline as TimelineStatic;
Timeline.Item = Item;

export default Timeline;

export interface TimelineStatic {
	new (...args: ConstructorParameters<typeof OriginalTimeline>): OriginalTimeline;
	Item: typeof Item;
}
