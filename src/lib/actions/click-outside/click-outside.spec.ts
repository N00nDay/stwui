import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import clickOutside from './index';

describe('clickOutside', () => {
	let node: HTMLElement;
	let extra: HTMLElement;
	let handler: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		node = document.createElement('div');
		extra = document.createElement('ul');
		extra.className = 'stwui-select-options';
		document.body.append(node, extra);
		handler = vi.fn();
	});

	afterEach(() => {
		node.remove();
		extra.remove();
	});

	it('calls the handler when clicking outside the node', () => {
		const action = clickOutside(node, handler);
		document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		expect(handler).toHaveBeenCalledTimes(1);
		action.destroy();
	});

	it('does not call the handler when clicking inside the node', () => {
		const action = clickOutside(node, handler);
		node.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		expect(handler).not.toHaveBeenCalled();
		action.destroy();
	});

	it('treats a portaled extra element as inside the node', () => {
		const action = clickOutside(node, { handler, extra });
		extra.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		expect(handler).not.toHaveBeenCalled();
		action.destroy();
	});

	it('picks up a portaled extra element after update', () => {
		const action = clickOutside(node, handler);
		extra.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		expect(handler).toHaveBeenCalledTimes(1);

		action.update({ handler, extra });
		extra.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		expect(handler).toHaveBeenCalledTimes(1);
		action.destroy();
	});
});
