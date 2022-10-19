<script lang="ts">
	import { Card, Col, Select, Icon } from '../../lib';
	import {
		example,
		props,
		slots,
		labelSlots,
		leadingSlots,
		optionsSlots,
		optionProps,
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, UpdatedComponent } from '../../docs';
	import { email } from '../../docs/icons';

	const options = ['Option 1', 'Option 2', 'Option 3'];
</script>

<Col class="col-24">
	<UpdatedComponent version="v0.0.28-next" />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Select name="select-1" placeholder="Basic">
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
			<br />
			<Select name="select-2">
				<Select.Label slot="label">Label</Select.Label>
				<Select.Leading slot="leading">
					<Select.Leading.Icon data={email} />
				</Select.Leading>
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>
			<br />
			<Select name="select-3" error="There has been an error">
				<Select.Label slot="label">Label</Select.Label>
				<Select.Leading slot="leading">
					<Select.Leading.Icon data={email} />
				</Select.Leading>
				<Select.Options slot="options">
					{#each options as option}
						<Select.Options.Option {option} />
					{/each}
				</Select.Options>
			</Select>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Select" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Select" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Select.Label" slots={labelSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Select.Leading" slots={leadingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Select.Leading.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Select.Options" slots={optionsSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Select.Options.Option" props={optionProps} />
</Col>
