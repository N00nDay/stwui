<script lang="ts">
	import { Breadcrumbs } from '../../lib';
	import {
		exampleDefault,
		exampleSolid,
		exampleDivider,
		props,
		slots,
		crumbProps,
		crumbSlots,
		iconProps,
		labelSlots,
		usage
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { home } from '../../docs/icons';

	interface Crumb {
		icon?: string;
		label?: string;
		href: string;
	}

	const crumbs: Crumb[] = [
		{ icon: home, href: '#home' },
		{ label: 'Projects', href: '#projecs' },
		{ label: 'Project Hero', href: '#project-hero' }
	];
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="m-auto max-w-[266px]">
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
		</Breadcrumbs>
	</div>

	<CodeBlock slot="code" language="svelte" code={exampleDefault} />
</ExampleContainer>

<ExampleContainer title="Solid">
	<div slot="preview" class="m-auto max-w-[330px]">
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
		</Breadcrumbs>
	</div>

	<CodeBlock slot="code" language="svelte" code={exampleSolid} />
</ExampleContainer>

<ExampleContainer title="With Custom Dividers">
	<div slot="preview" class="m-auto max-w-[290px]">
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
		</Breadcrumbs>
	</div>

	<CodeBlock slot="code" language="svelte" code={exampleDivider} />
</ExampleContainer>

<PropsTable component="Breadcrumbs" {props} />

<SlotsTable component="Breadcrumbs" {slots} />

<PropsTable component="Breadcrumbs.Crumb" props={crumbProps} />

<SlotsTable component="Breadcrumbs.Crumb" slots={crumbSlots} />

<PropsTable component="Breadcrumbs.Crumb.Icon" props={iconProps} />

<SlotsTable component="Breadcrumbs.Crumb.Label" slots={labelSlots} />
