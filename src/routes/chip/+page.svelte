<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, Chip } from '../../lib';

	const avatar =
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80';
	const label = 'Castor Troy';
</script>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Chip</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Chip size="xs">
				<Chip.Avatar slot="avatar" src={avatar} />
				<Chip.Label slot="label">Castor Troy</Chip.Label>
			</Chip>
			<Chip size="sm" type="success">
				<Chip.Avatar slot="avatar" src={avatar} />
				<Chip.Label slot="label">Castor Troy</Chip.Label>
			</Chip>

			<Chip type="warn">
				<Chip.Avatar slot="avatar" src={avatar} />
				<Chip.Label slot="label">Castor Troy</Chip.Label>
			</Chip>
			<Chip size="lg" type="error">
				<Chip.Avatar slot="avatar" src={avatar} />
				<Chip.Label slot="label">Castor Troy</Chip.Label>
			</Chip>
			<Chip size="xl">
				<Chip.Avatar slot="avatar" src={avatar} />
				<Chip.Label slot="label">Castor Troy</Chip.Label>
			</Chip>

			<Chip class="bg-black text-white bg-opacity-100">
				<Chip.Avatar slot="avatar" src={avatar} />
				<Chip.Label slot="label">Castor Troy</Chip.Label>
			</Chip>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Chip with Close</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Chip type="info">
				<Chip.Avatar slot="avatar" src={avatar} />
				<Chip.Label slot="label">Castor Troy</Chip.Label>
				<Chip.Close slot="close" />
			</Chip>
			<Chip>
				<Chip.Avatar slot="avatar" src={avatar} />
				<Chip.Label slot="label">Castor Troy</Chip.Label>
				<Chip.Close slot="close" />
			</Chip>
		</Card.Content>
	</Card>
</Col>
