<script lang="ts">
	import { Card, Chip, Col } from '../../lib';
	import { example, closeExample, props, slots, avatarProps, labelSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	const avatar =
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
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
			<Chip size="lg">
				<Chip.Avatar slot="avatar" src="no-image.png" />
				<Chip.Label slot="label">Castor Troy</Chip.Label>
			</Chip>
			<Chip size="xl" type="error">
				<Chip.Avatar slot="avatar" src={avatar} />
				<Chip.Label slot="label">Castor Troy</Chip.Label>
			</Chip>

			<br />
			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">With Close</Card.Header>
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

			<br />
			<br />

			<CodeBlock language="svelte" code={closeExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Chip" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Chip" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Chip.Avatar" props={avatarProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Chip.Label" slots={labelSlots} />
</Col>
