<script lang="ts">
	import { Button, Divider } from '../../lib';
	import {
		positionExample,
		passAnythingExample,
		props,
		slots,
		iconProps,
		labelSlots,
		usage
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';

	import { plus_circle } from '../../docs/icons';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="With Position">
	<div slot="preview" class="w-full flex flex-col gap-2 items-center justify-center">
		<Divider class="w-full">
			<Divider.Label slot="label">Divider</Divider.Label>
		</Divider>
		<Divider position="left" class="w-full">
			<Divider.Label slot="label">Divider</Divider.Label>
		</Divider>
		<Divider position="right" class="w-full">
			<Divider.Label slot="label">Divider</Divider.Label>
		</Divider>
	</div>

	<CodeBlock slot="code" language="svelte" code={positionExample} />
</ExampleContainer>

<ExampleContainer title="Pass What You Want">
	<div slot="preview" class="w-full flex flex-col gap-2 items-center justify-center">
		<Divider class="w-full">
			<Divider.Label slot="label"><h3>Divider</h3></Divider.Label>
		</Divider>
		<Divider class="w-full">
			<Divider.Icon slot="icon" data={plus_circle} />
		</Divider>
		<Divider class="w-full">
			<Button type="primary">I am a Button</Button>
		</Divider>
	</div>

	<CodeBlock slot="code" language="svelte" code={passAnythingExample} />
</ExampleContainer>

<PropsTable component="Divider" {props} />

<SlotsTable component="Divider" {slots} />

<SlotsTable component="Divider.Label" slots={labelSlots} />

<PropsTable component="Divider.Icon" props={iconProps} />
