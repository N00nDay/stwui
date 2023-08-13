import type { Slot, Prop } from '../../docs';

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Feed.Item />'
	}
];

export const itemSlots: Slot[] = [
	{
		id: '1',
		slot: 'connector',
		component: '<Feed.Item.Connector slot="connector" />'
	},
	{
		id: '2',
		slot: 'leading',
		component: '<Feed.Item.Leading slot="leading" />'
	},
	{
		id: '3',
		slot: 'content',
		component: '<Feed.Item.Content slot="content" />'
	},
	{
		id: '4',
		slot: 'datetime',
		component: '<Feed.Item.DateTime slot="datetime" />'
	}
];

export const leadingSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Feed.Item.Leading.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'avatar',
		component: '<Feed.Item.Leading.Avatar slot="avatar" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
	}
];

export const avatarProps: Prop[] = [
	{
		id: '1',
		prop: 'src',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'alt',
		type: 'string',
		default: 'user-avatar'
	},
	{
		id: '2',
		prop: 'size',
		type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
		default: 'sm'
	},
	{
		id: '3',
		prop: 'placeholder',
		type: 'boolean',
		default: 'true'
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'data',
		type: '<a href="/types#IconData" class="link">string (IconData)</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'viewBox',
		type: 'string',
		default: '0 0 24 24'
	},
	{
		id: '3',
		prop: 'size',
		type: 'string',
		default: '24px'
	},
	{
		id: '4',
		prop: 'width',
		type: 'string',
		default: '24px'
	},
	{
		id: '5',
		prop: 'height',
		type: 'string',
		default: '24px'
	},
	{
		id: '6',
		prop: 'color',
		type: 'string',
		default: 'currentColor'
	},
	{
		id: '7',
		prop: 'stroke',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'fill',
		type: 'string',
		default: 'currentColor'
	}
];

export const contentSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const usage = `
import { Feed } from 'stwui';
// OR
import Feed from 'stwui/feed'; // for tree shaking
`;

export const example = `
<script lang="ts">
   import { Feed } from 'stwui';
   import { formatDate } from 'stwui/utils';

	const check = "svg-path";
	const currency_usd = "svg-path";

	interface Item {
		avatar?: string;
		icon?: string;
		content: string;
		date: Date;
	}

	const items: Item[] = [
		{
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			content: '<span>Applied to <a href="#item1" class="font-bold">Front End Developer</a></span>',
			date: new Date(2022, 8, 21)
		},
		{
			icon: currency_usd,
			content:
				'<span>Advanced to phone screeingin by <a href="#item2" class="font-bold">Bethany Blake</a></span>',
			date: new Date(2022, 8, 19)
		},
		{
			icon: check,
			content:
				'<span>Completed phone screening with <a href="#item3" class="font-bold">Martha Gardner</a></span>',
			date: new Date(2022, 8, 15)
		},
		{
			icon: currency_usd,
			content:
				'<span>Advanced to interview by <a href="#item4" class="font-bold">Bethany Blake</a></span>',
			date: new Date(2022, 8, 2)
		},
		{
			icon: check,
			content:
				'<span>Completed interview with <a href="#item5" class="font-bold">Katherine Snyder</a></span>',
			date: new Date(2022, 7, 22)
		}
	];
</script>

<Feed>
   {#each items as item}
      {#if item.avatar}
         <Feed.Item>
            <Feed.Item.Leading slot="leading">
               <Feed.Item.Leading.Avatar slot="avatar" src={item.avatar} />
            </Feed.Item.Leading>
            <Feed.Item.Content slot="content">
               {@html item.content}
            </Feed.Item.Content>
            <Feed.Item.DateTime slot="datetime">
               <time datetime={item.date.toISOString()}>{formatDate(item.date)}</time>
            </Feed.Item.DateTime>
         </Feed.Item>
      {:else if item.icon}
         <Feed.Item>
            <Feed.Item.Leading
               slot="leading"
               class="bg-info-background"
            >
               <Feed.Item.Leading.Icon slot="icon" data={item.icon} />
            </Feed.Item.Leading>
            <Feed.Item.Content slot="content">
               {@html item.content}
            </Feed.Item.Content>
            <Feed.Item.DateTime slot="datetime">
               <time datetime={item.date.toISOString()}>{formatDate(item.date)}</time>
            </Feed.Item.DateTime>
         </Feed.Item>
      {:else}
         <Feed.Item>
            <Feed.Item.Content slot="content">
               {@html item.content}
            </Feed.Item.Content>
            <Feed.Item.DateTime slot="datetime">
               <time datetime={item.date.toISOString()}>{formatDate(item.date)}</time>
            </Feed.Item.DateTime>
         </Feed.Item>
      {/if}
   {/each}
</Feed>`;
