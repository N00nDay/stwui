import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'solid' | 'ghost'",
		default: 'ghost'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Breadcrumbs.Crumb />'
	}
];

export const crumbProps: Prop[] = [
	{
		id: '1',
		prop: 'href',
		type: 'string',
		default: ''
	}
];

export const crumbSlots: Slot[] = [
	{
		id: '1',
		slot: 'divider',
		component: '<Breadcrumbs.Crumb.Divider slot="divider" />'
	},
	{
		id: '2',
		slot: 'icon',
		component: '<Breadcrumbs.Crumb.Icon slot="icon" />'
	},
	{
		id: '3',
		slot: 'label',
		component: '<Breadcrumbs.Crumb.Label slot="label" />'
	},
	{
		id: '4',
		slot: 'default',
		component: ''
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

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const exampleDefault = `
<script lang="ts">
	import { Breadcrumbs, Icon } from 'stwui';
   
   interface Crumb {
		icon?: string;
		label?: string;
		href: string;
	}

	const home = "svg-path";

   const crumbs: Crumb[] = [
		{ icon: home, href: '/' },
		{ label: 'Projects', href: '/projecs' },
		{ label: 'Project Hero', href: '/projects/project-hero' }
	];
</script>

<Breadcrumbs>
	{#each crumbs as crumb}
		{#if crumb.icon && crumb.label}
			<Breadcrumbs.Crumb href={crumb.href}>
			<Breadcrumbs.Crumb.Icon slot="icon" data={crumb.icon} />
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{:else if crumb.icon}
			<Breadcrumbs.Crumb href={crumb.href}>
			<Breadcrumbs.Crumb.Icon slot="icon" data={crumb.icon} />
			</Breadcrumbs.Crumb>
		{:else}
			<Breadcrumbs.Crumb href={crumb.href}>
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{/if}
	{/each}
</Breadcrumbs>`;

export const exampleSolid = `
<script lang="ts">
	import { Breadcrumbs, Icon } from 'stwui';
		
	interface Crumb {
		icon?: string;
		label?: string;
		href: string;
	}

	const home = "svg-path";

	const crumbs: Crumb[] = [
		{ icon: home, href: '/' },
		{ label: 'Projects', href: '/projecs' },
		{ label: 'Project Hero', href: '/projects/project-hero' }
	];
</script>

<Breadcrumbs type="solid">
	{#each crumbs as crumb}
		{#if crumb.icon && crumb.label}
			<Breadcrumbs.Crumb href={crumb.href}>
			<Breadcrumbs.Crumb.Icon slot="icon" data={crumb.icon} />
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{:else if crumb.icon}
			<Breadcrumbs.Crumb href={crumb.href}>
			<Breadcrumbs.Crumb.Icon slot="icon" data={crumb.icon} />
			</Breadcrumbs.Crumb>
		{:else}
			<Breadcrumbs.Crumb href={crumb.href}>
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{/if}
	{/each}
</Breadcrumbs>`;

export const exampleDivider = `
<script lang="ts">
	import { Breadcrumbs, Icon } from 'stwui';
		
	interface Crumb {
		icon?: string;
		label?: string;
		href: string;
	}

	const home = "svg-path";

	const crumbs: Crumb[] = [
		{ icon: home, href: '/' },
		{ label: 'Projects', href: '/projecs' },
		{ label: 'Project Hero', href: '/projects/project-hero' }
	];
</script>

<Breadcrumbs type="solid" class="h-12">
	{#each crumbs as crumb}
		{#if crumb.icon && crumb.label}
			<Breadcrumbs.Crumb href={crumb.href}>
				<div slot="divider" class="divider">|</div>
				<Breadcrumbs.Crumb.Icon slot="icon" data={crumb.icon} />
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{:else if crumb.icon}
			<Breadcrumbs.Crumb href={crumb.href}>
				<div slot="divider" class="divider">|</div>
				<Breadcrumbs.Crumb.Icon slot="icon" data={crumb.icon} />
			</Breadcrumbs.Crumb>
		{:else}
			<Breadcrumbs.Crumb href={crumb.href}>
				<div slot="divider" class="divider">|</div>
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{/if}
	{/each}
</Breadcrumbs>`;
