<script lang="ts">
	import { Alert, Button, Col } from '../../lib';
	import {
		basicExample,
		withDescriptionExample,
		withExtraExample,
		props,
		slots,
		iconProps,
		titleSlots,
		descriptionSlots,
		extraSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer, WrapContainer } from '../../docs';
	import { alert_circle, alert, check_circle, info, arrow_right } from '../../docs/icons';

	let type: 'info' | 'warn' | 'success' | 'error' = 'info';
</script>

<Col class="col-24 example-container">
	<ExampleContainer title="Basic">
		<div
			slot="preview"
			class="w-full flex items-center justify-between flex-wrap gap-2"
			let:breakpoints
		>
			<WrapContainer {breakpoints}>
				<Alert type="info" class="w-full">
					<Alert.Title slot="title">Title</Alert.Title>
				</Alert>
			</WrapContainer>
			<WrapContainer {breakpoints}>
				<Alert type="warn" class="w-full">
					<Alert.Title slot="title">Title</Alert.Title>
				</Alert>
			</WrapContainer>
			<WrapContainer {breakpoints}>
				<Alert type="success" class="w-full">
					<Alert.Title slot="title">Title</Alert.Title>
				</Alert>
			</WrapContainer>
			<WrapContainer {breakpoints}>
				<Alert type="error" class="w-full">
					<Alert.Title slot="title">Title</Alert.Title>
				</Alert>
			</WrapContainer>
		</div>

		<CodeBlock slot="code" language="svelte" code={basicExample} />
	</ExampleContainer>
</Col>

<Col class="col-24 example-container">
	<ExampleContainer title="With Description">
		<div
			slot="preview"
			class="w-full flex items-center justify-between flex-wrap gap-2"
			let:breakpoints
		>
			<WrapContainer {breakpoints}>
				<Alert type="info" class="w-full">
					<Alert.Leading slot="leading" data={info} />
					<Alert.Title slot="title">Title</Alert.Title>
					<Alert.Description slot="description">I am a description</Alert.Description>
				</Alert>
			</WrapContainer>
			<WrapContainer {breakpoints}>
				<Alert type="warn" class="w-full">
					<Alert.Leading slot="leading" data={alert} />
					<Alert.Title slot="title">Title</Alert.Title>
					<Alert.Description slot="description">I am a description</Alert.Description>
				</Alert>
			</WrapContainer>
			<WrapContainer {breakpoints}>
				<Alert type="success" class="w-full">
					<Alert.Leading slot="leading" data={check_circle} />
					<Alert.Title slot="title">Title</Alert.Title>
					<Alert.Description slot="description">I am a description</Alert.Description>
				</Alert>
			</WrapContainer>
			<WrapContainer {breakpoints}>
				<Alert type="error" class="w-full">
					<Alert.Leading slot="leading" data={alert_circle} />
					<Alert.Title slot="title">Title</Alert.Title>
					<Alert.Description slot="description">I am a description</Alert.Description>
				</Alert>
			</WrapContainer>
		</div>

		<CodeBlock slot="code" language="svelte" code={withDescriptionExample} />
	</ExampleContainer>
</Col>

<Col class="col-24 example-container">
	<ExampleContainer title="With Description">
		<div
			slot="preview"
			class="w-full flex items-center justify-between flex-wrap gap-2"
			let:breakpoints
		>
			<WrapContainer {breakpoints}>
				<Alert type="info" class="w-full">
					<Alert.Leading slot="leading" data={info} />
					<Alert.Title slot="title">Title</Alert.Title>
					<Alert.Extra slot="extra">
						<Button type="primary">
							Action
							<Button.Trailing slot="trailing" data={arrow_right} />
						</Button>
					</Alert.Extra>
				</Alert>
			</WrapContainer>
			<WrapContainer {breakpoints}>
				<Alert type="warn" class="w-full">
					<Alert.Leading slot="leading" data={alert} />
					<Alert.Title slot="title">Title</Alert.Title>
					<Alert.Extra slot="extra">
						<Button type="primary">
							Action
							<Button.Trailing slot="trailing" data={arrow_right} />
						</Button>
					</Alert.Extra>
				</Alert>
			</WrapContainer>
			<WrapContainer {breakpoints}>
				<Alert type="success" class="w-full">
					<Alert.Leading slot="leading" data={check_circle} />
					<Alert.Title slot="title">Title</Alert.Title>
					<Alert.Extra slot="extra">
						<Button type="primary">Action</Button>
					</Alert.Extra>
				</Alert>
			</WrapContainer>
			<WrapContainer {breakpoints}>
				<Alert type="error" class="w-full">
					<Alert.Leading slot="leading" data={alert_circle} />
					<Alert.Title slot="title">Title</Alert.Title>
					<Alert.Extra slot="extra">
						<Button type="primary">Action</Button>
					</Alert.Extra>
				</Alert>
			</WrapContainer>
		</div>

		<CodeBlock slot="code" language="svelte" code={withExtraExample} />
	</ExampleContainer>
</Col>

<Col class="col-24">
	<PropsTable component="Alert" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Alert.Leading" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert.Description" slots={descriptionSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert.Extra" slots={extraSlots} />
</Col>
