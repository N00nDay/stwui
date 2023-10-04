<script lang="ts">
	import { Layout } from '../../lib';
	import {
		contentProps,
		headerSlots,
		sidebarOutsideExample,
		sidebarRightExample,
		sidebarExample,
		defaultExample,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';

	const defaultClass = 'shadow-none border-none text-white';

	const headerAndFooter = defaultClass + ' bg-blue-500';
	const body = defaultClass + ' bg-primary';
	const sidebar = defaultClass + ' bg-blue-700';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Default">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Layout class="h-full">
			<Layout.Header class="{headerAndFooter} static z-0"
				>Header
				<Layout.Header.Extra slot="extra">Header Extra</Layout.Header.Extra>
			</Layout.Header>
			<Layout.Content>
				<Layout.Content.Body class="{body} flex items-center justify-center min-h-[200px]"
					>Body</Layout.Content.Body
				>
			</Layout.Content>
			<Layout.Footer class="{headerAndFooter} static z-0">
				Footer
				<Layout.Footer.Extra slot="extra">Footer Extra</Layout.Footer.Extra>
			</Layout.Footer>
		</Layout>
	</div>

	<CodeBlock slot="code" language="svelte" code={defaultExample} />
</ExampleContainer>

<ExampleContainer title="With Sidebar">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Layout class="h-full">
			<Layout.Header class="{headerAndFooter} static z-0"
				>Header
				<Layout.Header.Extra slot="extra">Header Extra</Layout.Header.Extra>
			</Layout.Header>
			<Layout.Content>
				<Layout.Content.Sidebar class="{sidebar} flex items-center justify-center min-h-[200px]"
					>Sidebar</Layout.Content.Sidebar
				>
				<Layout.Content.Body class="{body} flex items-center justify-center min-h-[200px]"
					>Body</Layout.Content.Body
				>
			</Layout.Content>
			<Layout.Footer class="{headerAndFooter} static z-0">
				Footer
				<Layout.Footer.Extra slot="extra">Footer Extra</Layout.Footer.Extra>
			</Layout.Footer>
		</Layout>
	</div>

	<CodeBlock slot="code" language="svelte" code={sidebarExample} />
</ExampleContainer>

<ExampleContainer title="With Sidebar Right">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Layout class="h-full">
			<Layout.Header class="{headerAndFooter} static z-0"
				>Header
				<Layout.Header.Extra slot="extra">Header Extra</Layout.Header.Extra>
			</Layout.Header>
			<Layout.Content>
				<Layout.Content.Body class="{body} flex items-center justify-center min-h-[200px]"
					>Body</Layout.Content.Body
				>
				<Layout.Content.Sidebar class="{sidebar} flex items-center justify-center min-h-[200px]"
					>Sidebar</Layout.Content.Sidebar
				>
			</Layout.Content>
			<Layout.Footer class="{headerAndFooter} static z-0">
				Footer
				<Layout.Footer.Extra slot="extra">Footer Extra</Layout.Footer.Extra>
			</Layout.Footer>
		</Layout>
	</div>

	<CodeBlock slot="code" language="svelte" code={sidebarRightExample} />
</ExampleContainer>

<ExampleContainer title="Sidebar Outside">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<Layout class="h-full">
			<Layout.Content>
				<Layout.Content.Sidebar class="{sidebar} flex items-center justify-center min-h-[328px]"
					>Sidebar</Layout.Content.Sidebar
				>
				<Layout class="flex flex-col items-center justify-center border-b-none min-h-[200px]">
					<Layout.Header class="{headerAndFooter} static z-0"
						>Header
						<Layout.Header.Extra slot="extra">Header Extra</Layout.Header.Extra>
					</Layout.Header>

					<Layout.Content>
						<Layout.Content.Body class="{body} flex items-center justify-center min-h-[200px]"
							>Body</Layout.Content.Body
						>
					</Layout.Content>

					<Layout.Footer class="{headerAndFooter} static z-0 max-h-[64px]">
						Footer
						<Layout.Footer.Extra slot="extra">Footer Extra</Layout.Footer.Extra>
					</Layout.Footer>
				</Layout>
			</Layout.Content>
		</Layout>
	</div>

	<CodeBlock slot="code" language="svelte" code={sidebarOutsideExample} />
</ExampleContainer>

<PropsTable component="Layout.Content" props={contentProps} />

<SlotsTable component="Layout.Header" slots={headerSlots} />

<ClassTable component="Layout" {classList} />
