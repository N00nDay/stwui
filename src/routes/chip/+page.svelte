<script lang="ts">
	import { Chip } from '../../lib';
	import {
		typeExample,
		sizeExample,
		closeExample,
		props,
		slots,
		avatarProps,
		labelSlots,
		placeholderSlots,
		avatarSlots,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';

	const avatar =
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="With Type">
	<div slot="preview" class="flex flex-row flex-wrap gap-2 items-center justify-center w-full">
		<Chip>
			<Chip.Avatar slot="avatar" src={avatar} />
			<Chip.Label slot="label">No Type</Chip.Label>
		</Chip>
		<Chip type="info">
			<Chip.Avatar slot="avatar" src={avatar} />
			<Chip.Label slot="label">info</Chip.Label>
		</Chip>
		<Chip type="success">
			<Chip.Avatar slot="avatar" src={avatar} />
			<Chip.Label slot="label">success</Chip.Label>
		</Chip>

		<Chip type="warn">
			<Chip.Avatar slot="avatar" src={avatar} />
			<Chip.Label slot="label">warn</Chip.Label>
		</Chip>
		<Chip type="error">
			<Chip.Avatar slot="avatar" src={avatar} />
			<Chip.Label slot="label">error</Chip.Label>
		</Chip>
	</div>
	<CodeBlock slot="code" language="svelte" code={typeExample} />
</ExampleContainer>

<ExampleContainer title="With Size">
	<div slot="preview" class="flex flex-row flex-wrap gap-2 items-center justify-center w-full">
		<Chip size="xs">
			<Chip.Avatar slot="avatar" src={avatar} />
			<Chip.Label slot="label">Castor Troy</Chip.Label>
		</Chip>
		<Chip size="sm">
			<Chip.Avatar slot="avatar" src={avatar} />
			<Chip.Label slot="label">Castor Troy</Chip.Label>
		</Chip>

		<Chip>
			<Chip.Avatar slot="avatar" src={avatar} />
			<Chip.Label slot="label">Castor Troy</Chip.Label>
		</Chip>
		<Chip size="lg">
			<Chip.Avatar slot="avatar" src="no-image.png" />
			<Chip.Label slot="label">Castor Troy</Chip.Label>
		</Chip>
		<Chip size="xl">
			<Chip.Avatar slot="avatar" src={avatar} />
			<Chip.Label slot="label">Castor Troy</Chip.Label>
		</Chip>
	</div>
	<CodeBlock slot="code" language="svelte" code={sizeExample} />
</ExampleContainer>

<ExampleContainer title="With Close">
	<div slot="preview" class="flex flex-row flex-wrap gap-2 items-center justify-center w-full">
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
	</div>
	<CodeBlock slot="code" language="svelte" code={closeExample} />
</ExampleContainer>

<PropsTable component="Chip" {props} />

<SlotsTable component="Chip" {slots} />

<PropsTable component="Chip.Avatar" props={avatarProps} />

<SlotsTable component="Chip.Avatar" slots={avatarSlots} />

<SlotsTable component="Chip.Avatar.Placeholder" slots={placeholderSlots} />

<SlotsTable component="Chip.Label" slots={labelSlots} />

<ClassTable component="Chip" {classList} />
