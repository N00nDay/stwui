<script lang="ts">
	import { Button, Modal, Portal } from '../../lib';
	import {
		example,
		exampleLC,
		exampleLCC,
		props,
		slots,
		backdropProps,
		contentSlots,
		headerSlots,
		bodySlots,
		footerSlots,
		labelSlots,
		iconProps,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
	import { contentProps } from '../layout/examples';

	let open = false;
	let openLC = false;
	let openLCC = false;

	function openModal() {
		open = true;
	}

	function closeModal() {
		open = false;
	}

	function openLCModal() {
		openLC = true;
	}

	function closeLCModal() {
		openLC = false;
	}

	function openLCCModal() {
		openLCC = true;
	}

	function closeLCCModal() {
		openLCC = false;
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic Modal">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button type="primary" on:click={openModal}>Open Modal</Button>
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="Long Content With Footer">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button type="primary" on:click={openLCModal}>Open Modal</Button>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleLC} />
</ExampleContainer>

<ExampleContainer title="Long Content Screen Contained">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button type="primary" on:click={openLCCModal}>Open Modal</Button>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleLCC} />
</ExampleContainer>

<Portal>
	{#if open}
		<Modal handleClose={closeModal}>
			<Modal.Content slot="content">
				<Modal.Content.Header slot="header">Modal</Modal.Content.Header>
				<Modal.Content.Body slot="body">I am the body</Modal.Content.Body>
				<Modal.Content.Footer slot="footer">Footer</Modal.Content.Footer>
			</Modal.Content>
		</Modal>
	{/if}
</Portal>

<Portal>
	{#if openLC}
		<Modal handleClose={closeLCModal}>
			<Modal.Content slot="content">
				<Modal.Content.Header slot="header">Modal</Modal.Content.Header>
				<Modal.Content.Body slot="body">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel
					facilisis volutpat. Donec enim diam vulputate ut pharetra sit. Non quam lacus suspendisse
					faucibus interdum posuere lorem ipsum dolor. Convallis posuere morbi leo urna molestie at
					elementum eu. Feugiat sed lectus vestibulum mattis. A pellentesque sit amet porttitor eget
					dolor morbi non. Ut placerat orci nulla pellentesque dignissim enim sit amet. Tincidunt
					praesent semper feugiat nibh sed pulvinar proin. Molestie ac feugiat sed lectus vestibulum
					mattis ullamcorper velit. Euismod nisi porta lorem mollis aliquam ut porttitor leo.
					Volutpat sed cras ornare arcu dui vivamus. Laoreet id donec ultrices tincidunt arcu non
					sodales. Nunc sed blandit libero volutpat sed cras ornare arcu. Non nisi est sit amet
					facilisis magna etiam. Fusce id velit ut tortor. Phasellus vestibulum lorem sed risus.
					Molestie at elementum eu facilisis sed odio morbi quis. Convallis tellus id interdum
					velit. Accumsan in nisl nisi scelerisque eu. Arcu dictum varius duis at. In hendrerit
					gravida rutrum quisque non. Turpis egestas sed tempus urna et. In nulla posuere
					sollicitudin aliquam ultrices sagittis orci. Nulla facilisi cras fermentum odio eu.
					Adipiscing bibendum est ultricies integer quis auctor. At imperdiet dui accumsan sit amet
					nulla facilisi morbi. Facilisi etiam dignissim diam quis enim. Aliquet enim tortor at
					auctor urna. Nunc faucibus a pellentesque sit amet porttitor eget. Elementum pulvinar
					etiam non quam lacus suspendisse. Ipsum a arcu cursus vitae congue mauris rhoncus aenean.
					Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula. Tristique magna sit
					amet purus gravida quis blandit. Volutpat sed cras ornare arcu dui vivamus arcu. Felis
					imperdiet proin fermentum leo vel orci porta non. Iaculis urna id volutpat lacus. Vitae
					elementum curabitur vitae nunc sed velit dignissim. Commodo sed egestas egestas fringilla
					phasellus faucibus scelerisque eleifend. Maecenas accumsan lacus vel facilisis volutpat
					est. Dignissim cras tincidunt lobortis feugiat. Ac tincidunt vitae semper quis. Varius
					morbi enim nunc faucibus a pellentesque sit. Pharetra diam sit amet nisl. In tellus
					integer feugiat scelerisque varius morbi enim. Sit amet nisl purus in mollis. Eget felis
					eget nunc lobortis mattis aliquam faucibus. Posuere sollicitudin aliquam ultrices sagittis
					orci. Condimentum id venenatis a condimentum. Mauris augue neque gravida in fermentum et
					sollicitudin. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Eu sem
					integer vitae justo eget magna fermentum iaculis eu. Mattis rhoncus urna neque viverra.
					Vel quam elementum pulvinar etiam non quam lacus. Quis varius quam quisque id. Tortor
					dignissim convallis aenean et tortor at. Luctus accumsan tortor posuere ac ut consequat
					semper viverra nam. Condimentum id venenatis a condimentum vitae sapien pellentesque
					habitant morbi. Pellentesque diam volutpat commodo sed egestas egestas fringilla.
				</Modal.Content.Body>
				<Modal.Content.Footer slot="footer">
					<Button type="primary">Footer Button</Button>
				</Modal.Content.Footer>
			</Modal.Content>
		</Modal>
	{/if}
</Portal>

<Portal>
	{#if openLCC}
		<Modal handleClose={closeLCCModal}>
			<Modal.Content slot="content" class="max-h-full">
				<Modal.Content.Header slot="header" class="h-16">Modal</Modal.Content.Header>
				<Modal.Content.Body slot="body" class="overflow-y-auto">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel
					facilisis volutpat. Donec enim diam vulputate ut pharetra sit. Non quam lacus suspendisse
					faucibus interdum posuere lorem ipsum dolor. Convallis posuere morbi leo urna molestie at
					elementum eu. Feugiat sed lectus vestibulum mattis. A pellentesque sit amet porttitor eget
					dolor morbi non. Ut placerat orci nulla pellentesque dignissim enim sit amet. Tincidunt
					praesent semper feugiat nibh sed pulvinar proin. Molestie ac feugiat sed lectus vestibulum
					mattis ullamcorper velit. Euismod nisi porta lorem mollis aliquam ut porttitor leo.
					Volutpat sed cras ornare arcu dui vivamus. Laoreet id donec ultrices tincidunt arcu non
					sodales. Nunc sed blandit libero volutpat sed cras ornare arcu. Non nisi est sit amet
					facilisis magna etiam. Fusce id velit ut tortor. Phasellus vestibulum lorem sed risus.
					Molestie at elementum eu facilisis sed odio morbi quis. Convallis tellus id interdum
					velit. Accumsan in nisl nisi scelerisque eu. Arcu dictum varius duis at. In hendrerit
					gravida rutrum quisque non. Turpis egestas sed tempus urna et. In nulla posuere
					sollicitudin aliquam ultrices sagittis orci. Nulla facilisi cras fermentum odio eu.
					Adipiscing bibendum est ultricies integer quis auctor. At imperdiet dui accumsan sit amet
					nulla facilisi morbi. Facilisi etiam dignissim diam quis enim. Aliquet enim tortor at
					auctor urna. Nunc faucibus a pellentesque sit amet porttitor eget. Elementum pulvinar
					etiam non quam lacus suspendisse. Ipsum a arcu cursus vitae congue mauris rhoncus aenean.
					Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula. Tristique magna sit
					amet purus gravida quis blandit. Volutpat sed cras ornare arcu dui vivamus arcu. Felis
					imperdiet proin fermentum leo vel orci porta non. Iaculis urna id volutpat lacus. Vitae
					elementum curabitur vitae nunc sed velit dignissim. Commodo sed egestas egestas fringilla
					phasellus faucibus scelerisque eleifend. Maecenas accumsan lacus vel facilisis volutpat
					est. Dignissim cras tincidunt lobortis feugiat. Ac tincidunt vitae semper quis. Varius
					morbi enim nunc faucibus a pellentesque sit. Pharetra diam sit amet nisl. In tellus
					integer feugiat scelerisque varius morbi enim. Sit amet nisl purus in mollis. Eget felis
					eget nunc lobortis mattis aliquam faucibus. Posuere sollicitudin aliquam ultrices sagittis
					orci. Condimentum id venenatis a condimentum. Mauris augue neque gravida in fermentum et
					sollicitudin. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Eu sem
					integer vitae justo eget magna fermentum iaculis eu. Mattis rhoncus urna neque viverra.
					Vel quam elementum pulvinar etiam non quam lacus. Quis varius quam quisque id. Tortor
					dignissim convallis aenean et tortor at. Luctus accumsan tortor posuere ac ut consequat
					semper viverra nam. Condimentum id venenatis a condimentum vitae sapien pellentesque
					habitant morbi. Pellentesque diam volutpat commodo sed egestas egestas fringilla.
				</Modal.Content.Body>
				<Modal.Content.Footer slot="footer" class="h-24">
					<Button type="primary">Footer Button</Button>
				</Modal.Content.Footer>
			</Modal.Content>
		</Modal>
	{/if}
</Portal>

<PropsTable component="Modal" {props} />

<SlotsTable component="Modal" {slots} />

<PropsTable component="Modal.Backdrop" props={backdropProps} />

<PropsTable component="Modal.Content" props={contentProps} />

<SlotsTable component="Modal.Content" slots={contentSlots} />

<SlotsTable component="Modal.Content.Header" slots={headerSlots} />

<SlotsTable component="Modal.Content.Body" slots={bodySlots} />

<SlotsTable component="Modal.Content.Footer" slots={footerSlots} />

<PropsTable component="Modal.Content.Actions.Action.Icon" props={iconProps} />

<SlotsTable component="Modal.Content.Actions.Action.Label" slots={labelSlots} />

<ClassTable component="Modal" {classList} />
