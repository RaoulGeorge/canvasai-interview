import React from 'react';
import {render, fireEvent, screen, waitFor } from '@testing-library/react'
import InputWithTags from './index';
import '@testing-library/jest-dom'

describe('<InputWithTags />', () => {
	beforeEach(() => {
		render(<InputWithTags 
			placeholder="Start typing to search..." 
			onTagUpdated={() => {}}
			/>);
	});

	describe('when text is entered and then enter is hit',  () => {
		beforeEach(() => {
			addSearchTag('abc');
		});

		test('clears the input field', () => {
			expect(screen.getByRole('textbox')).toHaveValue('');
		});

		test('adds the text to a tag', () => {
			expect(screen.getByRole('tagname')).toBeInTheDocument();
			expect(screen.getByRole('tagname')).toHaveTextContent('abc');
		});
	});

	describe('when a tag is clicked',  () => {
		beforeEach(() => {
			addSearchTag('abc');
			clickSearchTag();
		});

		test('removes the tag', async () => {
			await waitFor(() => {
				expect(screen.queryByRole('tag')).not.toBeInTheDocument()
			})
		});
	});
});

const addSearchTag = searchTag => {
	fireEvent.change(screen.getByRole('textbox'), { target: { value: searchTag}});
	fireEvent.keyUp(screen.getByRole('textbox'), { key: "Enter", charCode: 13 });
}

const clickSearchTag = () => {
	fireEvent.click(screen.getByRole('tag'));
}