<script lang="ts">
	import { Alert, Button } from '../../lib';
	import {
		basicExample,
		withDescriptionExample,
		withExtraExample,
		kitcheSinkExample,
		props,
		slots,
		iconProps,
		titleSlots,
		descriptionSlots,
		extraSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { alert_circle, alert, check_circle, info, arrow_right } from '../../docs/icons';
</script>

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Alert type="info" class="w-full max-w-lg m-auto">
			<Alert.Title slot="title">Title</Alert.Title>
		</Alert>
		<Alert type="warn" class="w-full max-w-lg m-auto">
			<Alert.Title slot="title">Title</Alert.Title>
		</Alert>
		<Alert type="success" class="w-full max-w-lg m-auto">
			<Alert.Title slot="title">Title</Alert.Title>
		</Alert>
		<Alert type="error" class="w-full max-w-lg m-auto">
			<Alert.Title slot="title">Title</Alert.Title>
		</Alert>
	</div>

	<CodeBlock slot="code" language="svelte" code={basicExample} />
</ExampleContainer>

<ExampleContainer title="With Description">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Alert type="info" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={info} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Description slot="description">I am a description</Alert.Description>
		</Alert>

		<Alert type="warn" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={alert} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Description slot="description">I am a description</Alert.Description>
		</Alert>

		<Alert type="success" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={check_circle} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Description slot="description">I am a description</Alert.Description>
		</Alert>

		<Alert type="error" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={alert_circle} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Description slot="description">I am a description</Alert.Description>
		</Alert>
	</div>

	<CodeBlock slot="code" language="svelte" code={withDescriptionExample} />
</ExampleContainer>

<ExampleContainer title="With Action">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Alert type="info" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={info} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Extra slot="extra">
				<Button type="primary">
					Action
					<Button.Trailing slot="trailing" data={arrow_right} />
				</Button>
			</Alert.Extra>
		</Alert>

		<Alert type="warn" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={alert} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Extra slot="extra">
				<Button type="primary">
					Action
					<Button.Trailing slot="trailing" data={arrow_right} />
				</Button>
			</Alert.Extra>
		</Alert>

		<Alert type="success" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={check_circle} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Extra slot="extra">
				<Button type="primary">
					Action
					<Button.Trailing slot="trailing" data={arrow_right} />
				</Button>
			</Alert.Extra>
		</Alert>

		<Alert type="error" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={alert_circle} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Extra slot="extra">
				<Button type="primary">
					Action
					<Button.Trailing slot="trailing" data={arrow_right} />
				</Button>
			</Alert.Extra>
		</Alert>
	</div>

	<CodeBlock slot="code" language="svelte" code={withExtraExample} />
</ExampleContainer>

<ExampleContainer title="The Kitchen Sink">
	<div slot="preview" class="w-full flex flex-col gap-2">
		<Alert type="info" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={info} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Description slot="description">I am a description</Alert.Description>
			<Alert.Extra slot="extra">
				<Button type="primary">
					Action
					<Button.Trailing slot="trailing" data={arrow_right} />
				</Button>
			</Alert.Extra>
		</Alert>

		<Alert type="warn" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={alert} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Description slot="description">I am a description</Alert.Description>
			<Alert.Extra slot="extra">
				<Button type="primary">
					Action
					<Button.Trailing slot="trailing" data={arrow_right} />
				</Button>
			</Alert.Extra>
		</Alert>

		<Alert type="success" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={check_circle} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Description slot="description">I am a description</Alert.Description>
			<Alert.Extra slot="extra">
				<Button type="primary">
					Action
					<Button.Trailing slot="trailing" data={arrow_right} />
				</Button>
			</Alert.Extra>
		</Alert>

		<Alert type="error" class="w-full max-w-lg m-auto">
			<Alert.Leading slot="leading" data={alert_circle} />
			<Alert.Title slot="title">Title</Alert.Title>
			<Alert.Description slot="description">I am a description</Alert.Description>
			<Alert.Extra slot="extra">
				<Button type="primary">
					Action
					<Button.Trailing slot="trailing" data={arrow_right} />
				</Button>
			</Alert.Extra>
		</Alert>
	</div>

	<CodeBlock slot="code" language="svelte" code={kitcheSinkExample} />
</ExampleContainer>

<PropsTable component="Alert" {props} />

<SlotsTable component="Alert" {slots} />

<PropsTable component="Alert.Leading" props={iconProps} />

<SlotsTable component="Alert.Title" slots={titleSlots} />

<SlotsTable component="Alert.Description" slots={descriptionSlots} />

<SlotsTable component="Alert.Extra" slots={extraSlots} />
