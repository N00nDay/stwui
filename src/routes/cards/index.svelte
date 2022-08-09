<script lang="ts">
	import Card from '@components/card';
	import Media from '@components/media';
	import Description from '@components/media/Description.svelte';
</script>

<div class="m-auto max-w-xl p-8 border border-gray-300 bg-white">
	<Card class="w-96">
		<Card.Body>Card Body</Card.Body>
	</Card>
	<br />
	<Card class="w-96" hoverable bordered>
		<Card.Body>Card Body</Card.Body></Card
	>
	<br />
	<Card class="w-96">
		<Card.Header>Card Header</Card.Header>
		<Card.Body>Card Body</Card.Body>
		<Card.Footer>Card Footer</Card.Footer>
	</Card>
	<br />
	<Card class="w-96" size="small">
		<Card.Header>
			Card Header
			<div slot="extras">Extras</div>
		</Card.Header>
		<Card.Body>Card Body</Card.Body>
		<Card.Footer>Card Footer</Card.Footer>
	</Card>
	<br />
	<Card class="w-96">
		<Card.Cover class="h-64">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
		</Card.Cover>
		<Card.Body>
			<Media>
				<Media.Content>
					<Media.Title>Europe Street beat</Media.Title>
					<Media.Description>www.instagram.com</Media.Description>
				</Media.Content>
			</Media>
		</Card.Body>
	</Card>

	<br />
	<Card class="w-96">
		<Card.Cover class="h-64">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
		</Card.Cover>
		<Card.Actions>
			<Card.Action>
				<span class="material-icons h-6 w-6"> settings </span>
			</Card.Action>
			<Card.Action>
				<span class="material-icons h-6 w-6"> description </span>
			</Card.Action>
		</Card.Actions>
	</Card>

	<br />
	<Card class="w-96 h-64" hoverable bordered>
		<Card.Cover class="relative rounded-b-md">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
			<Card.Body class="absolute bottom-0 left-0 right-0">
				<Media>
					<Media.Content>
						<Media.Title>Europe Street beat</Media.Title>
						<Media.Description>www.instagram.com</Media.Description>
					</Media.Content>
				</Media>
			</Card.Body>
		</Card.Cover>
	</Card>
</div>
