<script lang="ts">
	import { Card, Col, Icon, Input } from '../../lib';
	import {
		example,
		props,
		slots,
		labelSlots,
		leadingSlots,
		trailingSlots,
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable, UpdatedComponent, CodeBlock } from '../../docs';
	import { email, phone, lock } from '../../docs/icons';
</script>

<Col class="col-24">
	<UpdatedComponent version="v0.0.28-next" />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Input name="input-1" placeholder="Basic" allowClear />
			<br />
			<Input name="input-2" allowClear>
				<Input.Label slot="label">Label</Input.Label>
				<Input.Leading slot="leading">
					<Input.Leading.Icon slot="icon" data={email} />
				</Input.Leading>
				<Input.Trailing slot="trailing">
					<Input.Trailing.Icon slot="icon" data={phone} />
				</Input.Trailing>
			</Input>
			<br />
			<Input
				name="input-3"
				error="There has been an error"
				handleLeadingClick={() => console.log('clicking leading')}
			>
				<Input.Label slot="label">Label</Input.Label>
				<Input.Leading slot="leading">
					<Input.Leading.Icon slot="icon" data={email} />
				</Input.Leading>
				<Input.Trailing slot="trailing">
					<Input.Trailing.Icon slot="icon" data={phone} />
				</Input.Trailing>
			</Input>
			<br />
			<Input type="password" name="input-4" showPasswordToggle>
				<Input.Label slot="label">Password</Input.Label>
				<Input.Leading slot="leading">
					<Input.Leading.Icon slot="icon" data={lock} />
				</Input.Leading>
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
	<SlotsTable component="Input.Leading" slots={leadingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Input.Leading.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Input.Trailing" slots={trailingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Input.Trailing.Icon" props={iconProps} />
</Col>
