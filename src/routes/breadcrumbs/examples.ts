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

export const iconSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
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
				<Breadcrumbs.Crumb.Icon slot="icon">
					<Icon path={crumb.icon} />
				</Breadcrumbs.Crumb.Icon>
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{:else if crumb.icon}
			<Breadcrumbs.Crumb href={crumb.href}>
				<Breadcrumbs.Crumb.Icon slot="icon">
					<Icon path={crumb.icon} />
				</Breadcrumbs.Crumb.Icon>
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
				<Breadcrumbs.Crumb.Icon slot="icon">
					<Icon path={crumb.icon} />
				</Breadcrumbs.Crumb.Icon>
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{:else if crumb.icon}
			<Breadcrumbs.Crumb href={crumb.href}>
				<Breadcrumbs.Crumb.Icon slot="icon">
					<Icon path={crumb.icon} />
				</Breadcrumbs.Crumb.Icon>
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
				<Breadcrumbs.Crumb.Icon slot="icon">
					<Icon path={crumb.icon} />
				</Breadcrumbs.Crumb.Icon>
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{:else if crumb.icon}
			<Breadcrumbs.Crumb href={crumb.href}>
				<div slot="divider" class="divider">|</div>
				<Breadcrumbs.Crumb.Icon slot="icon">
					<Icon path={crumb.icon} />
				</Breadcrumbs.Crumb.Icon>
			</Breadcrumbs.Crumb>
		{:else}
			<Breadcrumbs.Crumb href={crumb.href}>
				<div slot="divider" class="divider">|</div>
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{/if}
	{/each}
</Breadcrumbs>`;
