<script lang="ts">
	import { Breadcrumbs, Card, Col, Icon } from '../../lib';
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
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
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

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
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

			<br />

			<CodeBlock language="svelte" code={exampleDefault} />
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

			<br />

			<CodeBlock language="svelte" code={exampleSolid} />
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

			<br />

			<CodeBlock language="svelte" code={exampleDivider} />
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
