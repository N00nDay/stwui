<script lang="ts">
	import { Card, Layout, Col } from '../../lib';
	import { example, contentProps, headerSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
</script>

<ExampleContainer title="Default">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Layout class="h-full">
			<Layout.Header class="shadow-none border border-border static z-0"
				>Header
				<Layout.Header.Extra slot="extra">Header Extra</Layout.Header.Extra>
			</Layout.Header>
			<Layout.Content>
				<Layout.Content.Sidebar
					class="flex items-center justify-center border-l border-b border-border min-h-[200px]"
					>Sidebar</Layout.Content.Sidebar
				>
				<Layout.Content.Body
					class="flex items-center justify-center border-b border-r border-l border-border min-h-[200px]"
					>Body</Layout.Content.Body
				>
			</Layout.Content>
		</Layout>
	</div>

	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<PropsTable component="Layout.Content" props={contentProps} />

<SlotsTable component="Layout.Header" slots={headerSlots} />
