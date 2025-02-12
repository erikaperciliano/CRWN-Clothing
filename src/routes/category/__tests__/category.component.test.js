import { screen } from '@testing-library/react';
import Category from '../category.component';
import { renderWithProviders } from '../../../utils/test/test.utils';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: () => ({
        category: 'mens',
    }), 
}));

describe('Category tests', () => {
    test('It should render a Spinner if isLoading is true', () => {
        renderWithProviders(<Category />, {
            preloadedState: {
                categories: {
                    isLoading: true,
                    categories: []
                }
            }
        });

        const spinnerElement = screen.getByTestId('spinner');
        expect(spinnerElement).toBeInTheDocument();
    });

    test('It should render no spinner if isLoading is false', () => {
        renderWithProviders(<Category />, {
            preloadedState: {
                categories: {
                    isLoading: false,
                    categories: []
                }
            }
        });

        const spinnerElement = screen.queryByTestId('spinner');
        expect(spinnerElement).not.toBeInTheDocument();
    });

    test('It should render products if isLoading is false and there are items present', () => {
        renderWithProviders(<Category />, {
            preloadedState: {
                categories: {
                    isLoading: false,
                    categories: [
                        {
                            title: 'mens',
                            items: [
                                { id: 1, name: 'Product 1' },
                                { id: 2, name: 'Product 2' }
                            ]
                        }
                    ]
                }
            }
        });

        const spinnerElement = screen.queryByTestId('spinner');
        expect(spinnerElement).not.toBeInTheDocument(); 

        const product1Element = screen.getByText(/product 1/i);
        expect(product1Element).toBeInTheDocument();

        const product2Element = screen.getByText(/product 2/i);
        expect(product2Element).toBeInTheDocument();
    });
});
