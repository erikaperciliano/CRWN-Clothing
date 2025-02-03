import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { BUTTON_TYPE_CLASSES } from '../button.component';

describe('button tests', () => {
    test('should render base button with default styles', () => {
        render(<Button />);

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();

        expect(getComputedStyle(buttonElement).backgroundColor).toBe('white'); 
    });

    test('should render google button when passed google button type', () => {
        render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

        const googleButtonElement = screen.getByRole('button');

        expect(getComputedStyle(googleButtonElement).backgroundColor).toBe('rgb(53, 122, 232)');
    });

    test('should render inverted button when passed inverted button type', () => {
        render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

        const invertedButtonElement = screen.getByRole('button');

        expect(getComputedStyle(invertedButtonElement).backgroundColor).toBe('black');
    });

    test('should be disabled if isLoading is true', () => {
        render(<Button isLoading={true} />);

        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toBeDisabled();
    });
});
