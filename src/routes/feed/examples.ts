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
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'icon',
		type: '<a class="link" href="/types#MaterialIcon">MaterialIcon</a>',
		default: ''
	}
];

export const contentSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
   import type { MaterialIcon } from 'stwui/types';
   import { Feed } from 'stwui';
   import { formatDate } from 'stwui/utils';

	interface Item {
		avatar?: string;
		icon?: MaterialIcon;
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
			icon: 'thumb_up',
			content:
				'<span>Advanced to phone screeingin by <a href="#item2" class="font-bold">Bethany Blake</a></span>',
			date: new Date(2022, 8, 19)
		},
		{
			icon: 'done',
			content:
				'<span>Completed phone screening with <a href="#item3" class="font-bold">Martha Gardner</a></span>',
			date: new Date(2022, 8, 15)
		},
		{
			icon: 'thumb_up',
			content:
				'<span>Advanced to interview by <a href="#item4" class="font-bold">Bethany Blake</a></span>',
			date: new Date(2022, 8, 2)
		},
		{
			icon: 'done',
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
               class={item.icon === 'thumb_up' ? 'bg-info-background' : 'bg-success-background'}
            >
               <Feed.Item.Leading.Icon slot="avatar" icon={item.icon} />
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
