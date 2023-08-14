import type { Slot, Prop } from '../../docs';

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Timeline.Item />'
	}
];

export const itemProps: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'comment' | undefined",
		default: ''
	},
	{
		id: '2',
		prop: 'avatar',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '3',
		prop: 'creator',
		type: 'string',
		default: ''
	},
	{
		id: '4',
		prop: 'creaated',
		type: 'Date',
		default: ''
	},
	{
		id: '5',
		prop: 'description',
		type: 'string',
		default: ''
	},
	{
		id: '6',
		prop: 'icon',
		type: '<a href="/types#IconData" class="link">string (IconData)</a> | undefined',
		default: ''
	}
];

export const usage = `
import { Timeline } from 'stwui';
import type { TimelineItem } from 'stwui/types';
// OR
import Timeline from 'stwui/timeline'; // for tree shaking
import type TimelineItem from 'stwui/types/timeline'; // for tree shaking
`;

export const example = `
<script lang="ts">
	import { Timeline } from 'stwui';
	import type { TimelineItem } from '../../lib/types/timeline-item';

	const account = "svg-path";
	const currency_usd = "svg-path";

	const timeline: TimelineItem[] = [
		{
			created: new Date(2022, 8, 1),
			avatar: "image.png",
			creator: 'Eduardo Benz',
			type: 'comment',
			description: 'Lorem ipsum...'
		},
		{
			icon: account,
			created: new Date(2022, 8, 5),
			avatar: "image.png",
			creator: 'Hilary Mahy',
			description: 'Lorem ipsum...'
		},
		{
			icon: currency_usd,
			created: new Date(2022, 8, 6),
			avatar: "image.png",
			creator: 'Hilary Mahy',
			description: 'Lorem ipsum...'
		},
		{
			created: new Date(2022, 8, 7),
			avatar: "image.png",
			creator: 'Jason Meyers',
			type: 'comment',
			description: 'Lorem ipsum...'
		}
	];
</script>

<Timeline>
   {#each timeline as item}
      <Timeline.Item
         created={item.created}
         avatar={item.avatar}
         creator={item.creator}
         type={item.type}
         icon={item.icon}
         description={item.description}
      />
   {/each}
</Timeline>`;
