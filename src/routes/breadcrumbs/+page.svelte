<script lang="ts">
	import type MaterialIcons from '../../lib/types/material-icons';
	import { Breadcrumbs, Card, Col } from '../../lib';

	interface Crumb {
		icon?: MaterialIcons;
		label?: string;
		href: string;
	}

	const crumbs: Crumb[] = [
		{ icon: 'home', href: '/' },
		{ label: 'Projects', href: '/projecs' },
		{ label: 'Project Nero', href: '/projects/project-nero' }
	];
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Breadcrumbs</Card.Header>
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
			<br />
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
			<br />
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
		</Card.Content>
	</Card>
</Col>
