<script lang="ts">
	import { Card, Layout, Col } from '../../lib';
	import { example, contentProps, headerSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
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

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Layout.Content" props={contentProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Layout.Header" slots={headerSlots} />
</Col>
