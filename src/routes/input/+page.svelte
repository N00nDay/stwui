<script lang="ts">
	import { Card, Col, Input } from '../../lib';
	import { example, props, slots, labelSlots, iconProps } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { email, phone, lock } from '../../docs/icons';

	let value: string | undefined;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value && value.length > 0) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Input name="input-1" placeholder="Basic" allowClear />
			<br />
			<Input name="input-2" allowClear>
				<Input.Label slot="label">Label</Input.Label>
				<Input.Leading slot="leading" data={email} />
				<Input.Trailing slot="trailing" data={phone} />
			</Input>
			<br />
			<Input
				name="input-3"
				bind:value
				{error}
				handleLeadingClick={() => console.log('clicking leading')}
			>
				<Input.Label slot="label">Label</Input.Label>
				<Input.Leading slot="leading" data={email} />
				<Input.Trailing slot="trailing" data={phone} />
			</Input>
			<br />
			<Input type="password" name="input-4" showPasswordToggle>
				<Input.Label slot="label">Password</Input.Label>
				<Input.Leading slot="leading" data={lock} />
			</Input>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Input" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Input" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Input.Label" slots={labelSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Input.Leading" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Input.Trailing" props={iconProps} />
</Col>
