<script lang="ts">
	import { Card, Col, Toggle, Icon } from '../../lib';
	import {
		example,
		props,
		slots,
		iconProps,
		titleSlots,
		descriptionSlots,
		contentLeftSlots,
		contentRightSlots,
		iconsExample
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, UpdatedComponent } from '../../docs';
	import { brightness_4, brightness_5 } from '../../docs/icons';
</script>

<Col class="col-24">
	<UpdatedComponent version="v0.0.28-next" />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Toggle name="toggle-1" />
			<br />
			<Toggle name="toggle-2">
				<Toggle.ContentLeft slot="content-left">
					<Toggle.ContentLeft.Label slot="label">Left Label</Toggle.ContentLeft.Label>
				</Toggle.ContentLeft>
			</Toggle>
			<br />
			<Toggle name="toggle-3">
				<Toggle.ContentRight slot="content-right">
					<Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
				</Toggle.ContentRight>
			</Toggle>
			<br />
			<Toggle name="toggle-4">
				<Toggle.ContentLeft slot="content-left">
					<Toggle.ContentLeft.Label slot="label">Left Label</Toggle.ContentLeft.Label>
				</Toggle.ContentLeft>
				<Toggle.ContentRight slot="content-right">
					<Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
				</Toggle.ContentRight>
			</Toggle>
			<br />
			<Toggle name="toggle-5">
				<Toggle.ContentRight slot="content-right">
					<Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
					<Toggle.ContentRight.Description slot="description"
						>(10% off)</Toggle.ContentRight.Description
					>
				</Toggle.ContentRight>
			</Toggle>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">with Left and Right icons</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Toggle name="toggle">
				<Toggle.LeftIcon slot="left-icon" data={brightness_5} class="text-white" />
				<Toggle.RightIcon slot="right-icon" data={brightness_4} />
			</Toggle>

			<br />

			<CodeBlock language="svelte" code={iconsExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Toggle" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Toggle" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Toggle.LeftIcon" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Toggle.RightIcon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Toggle.ContentLeft" slots={contentLeftSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Toggle.ContentLeft.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Toggle.ContentLeft.Description" slots={descriptionSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Toggle.ContentRight" slots={contentRightSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Toggle.ContentRight.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Toggle.ContentRight.Description" slots={descriptionSlots} />
</Col>
