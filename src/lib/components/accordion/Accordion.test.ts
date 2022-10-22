import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Accordion from '.';

describe('Accordion', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Accordion);
		expect(getByTestId('accordion')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Accordion, {
			props: {
				class: 'bg-primary'
			}
		});
		expect(getByTestId('accordion')).toBeTruthy();
		expect(getByTestId('accordion').className).to.contain('bg-primary');
	});
});

describe('Accordion.Item', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Accordion.Item);
		expect(getByTestId('accordion.item')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Accordion.Item, {
			props: {
				open: true,
				class: 'bg-primary'
			}
		});
		expect(getByTestId('accordion.item')).toBeTruthy();
		expect(getByTestId('accordion.item').className).to.contain('bg-primary');
	});
});

describe('Accordion.Item.Title', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Accordion.Item.Title);
		expect(getByTestId('accordion.item.title')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Accordion.Item.Title, {
			props: {
				class: 'bg-primary'
			}
		});
		expect(getByTestId('accordion.item.title')).toBeTruthy();
		expect(getByTestId('accordion.item.title').className).to.contain('bg-primary');
	});
});

describe('Accordion.Item.Content', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Accordion.Item.Content);
		expect(getByTestId('accordion.item.content')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Accordion.Item.Content, {
			props: {
				class: 'bg-primary'
			}
		});
		expect(getByTestId('accordion.item.content')).toBeTruthy();
		expect(getByTestId('accordion.item.content').className).to.contain('bg-primary');
	});
});
