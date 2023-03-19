<script lang="ts">
	import { Breadcrumbs, Card, Col } from '../../lib';
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

<Col class="col-24 example-container">
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
</Col>

<Col class="col-24 example-container">
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
</Col>

<Col class="col-24 example-container">
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
