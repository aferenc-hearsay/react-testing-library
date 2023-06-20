import { render, screen } from '@testing-library/react';
import { TestingMaterialsPage } from './TestingMaterialsPage';

describe('Testing Materials page', () => {
    // Bad practice: more assertions in one test case
    test('should render the component', () => {
        render(<TestingMaterialsPage />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/test materials/i);
        expect(screen.getByRole('button', { name: /Click me/ })).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Write here');
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
        expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('Item 1');
    });

    // Good practice: one or two assertion per test case

    test('should render the heading', () => {
        render(<TestingMaterialsPage />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/test materials/i);
    });

    test('should render the button', () => {
        render(<TestingMaterialsPage />);
        expect(screen.getByRole('button', { name: /Click me/ })).toBeInTheDocument();
    });

    test('should render the input', () => {
        render(<TestingMaterialsPage />);
        expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Write here');
    });

    test('should render the list', () => {
        render(<TestingMaterialsPage />);
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
        expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('Item 1');
    });

    test('finding article and section element types by role', () => {
        render(<TestingMaterialsPage />);
        expect(screen.getAllByRole('article').length).toBe(3);
        expect(screen.getAllByRole('region').length).toBe(1); // Only works on sections with accessible name
        expect(screen.getByRole('region', { name: 'lorem ipsum first section' })).toBeInTheDocument();
        // title attribute is not recommended (Safari), that is why the next assert will fail
        // expect(screen.getByRole('region', { name: 'Lorem ipsum fifth section' })).toBeInTheDocument();
    });

    test('finding link', () => {
        render(<TestingMaterialsPage />);
        expect(screen.getByRole('link', { name: 'Accessibility of the section element' })).toHaveAttribute(
            'href',
            'https://www.scottohara.me/blog/2021/07/16/section.html',
        );
    });

    test('should select elements by role', () => {
        render(<TestingMaterialsPage />);
        expect(screen.getAllByRole('heading', { level: 2 })[0]).toHaveTextContent('Test form');
        expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
        expect(screen.getByRole('textbox')).toHaveValue('');
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    test('should select elements by text', () => {
        render(<TestingMaterialsPage />);
        expect(screen.getByText('Test materials')).toBeInTheDocument();
        expect(screen.getByText('Click me')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getAllByText(/item/i)).toHaveLength(3);
    });

    test('should prioritize queries correctly', () => {
        render(<TestingMaterialsPage />);
        expect(screen.getByRole('button')).toHaveTextContent('Click me');
        expect(screen.queryByText('Item 4')).not.toBeInTheDocument();
    });

    test('should use data-testid attributes when appropriate', () => {
        render(<TestingMaterialsPage />);
        const myButton = screen.getByTestId('my-button');
        expect(myButton).toBeInTheDocument();
        expect(myButton).toHaveAttribute('type', 'button');
        expect(myButton).toHaveTextContent('Click me');
    });
});
