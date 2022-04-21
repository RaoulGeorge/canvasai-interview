import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import Projects from './index';
import '@testing-library/jest-dom'
import { projects } from "../../data";


describe('<Projects />', () => {
	beforeEach(() => {
		render(<Projects />)
	});

	test('renders a title', () => {
		expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Projects');
	});

	test('renders a searchbox', () => {
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	test('renders a list of projects by default', () => {
		expect(screen.getAllByRole('project-card')).toHaveLength(projects.length);
	});

	describe('when the search tags do not match any of the projects',  () => {
		test('renders an empty list', () => {
			addSearchTag('abc');
			expect(screen.getByRole('empty')).toBeInTheDocument();
		});
	});

	describe('when the search tags matches one project',  () => {
		test('renders a single item', () => {
			addSearchTag("mechanical");
			expect(screen.getAllByRole('project-card')).toHaveLength(1);
		});
	});

	describe('when there are multiple search tags', () => {
		test('renders multiple items', () => {
			addSearchTag("mechanical");
			addSearchTag("Project 1");
			expect(screen.getAllByRole('project-card')).toHaveLength(2);
		});
	});
});

const addSearchTag = searchTag => {
	fireEvent.change(screen.getByRole('textbox'), { target: { value: searchTag}});
	fireEvent.keyUp(screen.getByRole('textbox'), { key: "Enter", charCode: 13 });
}