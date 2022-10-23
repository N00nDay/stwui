import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';

import Alert from '.';

describe('Alert', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Alert);
		expect(getByTestId('alert')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Alert, {
			props: {
				type: 'info',
				class: 'bg-primary'
			}
		});
		expect(getByTestId('alert')).toBeTruthy();
		expect(getByTestId('alert').className).to.contain('bg-primary');
	});
});

describe('Alert.Title', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Alert.Title);
		expect(getByTestId('alert.title')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Alert.Title, {
			props: {
				class: 'bg-primary'
			}
		});
		expect(getByTestId('alert.title')).toBeTruthy();
		expect(getByTestId('alert.title').className).to.contain('bg-primary');
	});

	it('Should be clickable', async () => {
		const { getByTestId, component } = render(Alert.Title);

		const mock = vi.fn();
		const alertTitle = getByTestId('alert.title');

		component.$on('click', mock);
		fireEvent.click(alertTitle);

		expect(mock).toHaveBeenCalled();
	});
});

describe('Alert.Description', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Alert.Description);
		expect(getByTestId('alert.description')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Alert.Description, {
			props: {
				class: 'bg-primary'
			}
		});
		expect(getByTestId('alert.description')).toBeTruthy();
		expect(getByTestId('alert.description').className).to.contain('bg-primary');
	});

	it('Should be clickable', async () => {
		const { getByTestId, component } = render(Alert.Description);

		const mock = vi.fn();
		const alertDescription = getByTestId('alert.description');

		component.$on('click', mock);
		fireEvent.click(alertDescription);

		expect(mock).toHaveBeenCalled();
	});
});

describe('Alert.Extra', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Alert.Extra);
		expect(getByTestId('alert.extra')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Alert.Extra, {
			props: {
				class: 'bg-primary'
			}
		});
		expect(getByTestId('alert.extra')).toBeTruthy();
		expect(getByTestId('alert.extra').className).to.contain('bg-primary');
	});

	it('Should be clickable', async () => {
		const { getByTestId, component } = render(Alert.Extra);

		const mock = vi.fn();
		const alertExtra = getByTestId('alert.extra');

		component.$on('click', mock);
		fireEvent.click(alertExtra);

		expect(mock).toHaveBeenCalled();
	});
});
