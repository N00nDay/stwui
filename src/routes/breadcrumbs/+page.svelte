<script lang="ts">
	import type MaterialIcons from '../../lib/types/material-icons';
	import { Breadcrumbs, Card, Col } from '../../lib';
	import CodeBlock from '../../docs/components/code-block';
	import {
		exampleDefault,
		exampleSolid,
		exampleDivider,
		props,
		slots,
		crumbProps,
		crumbSlots,
		iconProps,
		labelSlots
	} from './examples';
	import { PropsTable, SlotsTable } from '../../docs';

	interface Crumb {
		icon?: MaterialIcons;
		label?: string;
		href: string;
	}

	const crumbs: Crumb[] = [
		{ icon: 'home', href: '/' },
		{ label: 'Projects', href: '/projecs' },
		{ label: 'Project Hero', href: '/projects/project-hero' }
	];
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Breadcrumbs>
				{#each crumbs as crumb}
					{#if crumb.icon && crumb.label}
						<Breadcrumbs.Crumb href={crumb.href}>
							<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
							<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
						</Breadcrumbs.Crumb>
					{:else if crumb.icon}
						<Breadcrumbs.Crumb href={crumb.href}>
							<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
						</Breadcrumbs.Crumb>
					{:else}
						<Breadcrumbs.Crumb href={crumb.href}>
							<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
						</Breadcrumbs.Crumb>
					{/if}
				{/each}
			</Breadcrumbs>

			<br />

			<CodeBlock language="typescript" code={exampleDefault} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Solid</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Breadcrumbs type="solid">
				{#each crumbs as crumb}
					{#if crumb.icon && crumb.label}
						<Breadcrumbs.Crumb href={crumb.href}>
							<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
							<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
						</Breadcrumbs.Crumb>
					{:else if crumb.icon}
						<Breadcrumbs.Crumb href={crumb.href}>
							<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
						</Breadcrumbs.Crumb>
					{:else}
						<Breadcrumbs.Crumb href={crumb.href}>
							<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
						</Breadcrumbs.Crumb>
					{/if}
				{/each}
			</Breadcrumbs>

			<br />

			<CodeBlock language="typescript" code={exampleSolid} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Custom Divider</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Breadcrumbs type="solid" class="h-12">
				{#each crumbs as crumb}
					{#if crumb.icon && crumb.label}
						<Breadcrumbs.Crumb href={crumb.href}>
							<div slot="divider" class="divider">|</div>
							<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
							<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
						</Breadcrumbs.Crumb>
					{:else if crumb.icon}
						<Breadcrumbs.Crumb href={crumb.href}>
							<div slot="divider" class="divider">|</div>
							<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
						</Breadcrumbs.Crumb>
					{:else}
						<Breadcrumbs.Crumb href={crumb.href}>
							<div slot="divider" class="divider">|</div>
							<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
						</Breadcrumbs.Crumb>
					{/if}
				{/each}
			</Breadcrumbs>

			<br />

			<CodeBlock language="typescript" code={exampleDivider} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Breadcrumbs" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Breadcrumbs" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Breadcrumbs.Crumb" props={crumbProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Breadcrumbs.Crumb" slots={crumbSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Breadcrumbs.Crumb.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Breadcrumbs.Crumb.Label" slots={labelSlots} />
</Col>
