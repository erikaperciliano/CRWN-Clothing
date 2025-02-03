import { screen, fireEvent } from '@testing-library/react';
import Navigation from '../navigation.component';
import { renderWithProviders } from '../../../utils/test/test.utils';
import * as reactRedux from 'react-redux';
import { signOutStart } from '../../../store/user/user.action';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(), 
}));

describe('Navigation tests', () => {
    const mockDispatch = jest.fn(); 

    beforeEach(() => {
        reactRedux.useDispatch.mockReturnValue(mockDispatch); 
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('It should render a Sign in link if there is no currentUser', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                user: {
                    currentUser: null,
                }
            }
        });

        const signOutLinkElement = screen.queryByText(/sign out/i);
        expect(signOutLinkElement).toBeNull();

        const signInLinkElement = screen.getByText(/sign in/i);
        expect(signInLinkElement).toBeInTheDocument();
    });

    test('It should render Sign Out and not Sign in if there is a currentUser', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                user: {
                    currentUser: {},
                }
            }
        });

        const signInLinkElement = screen.queryByText(/sign in/i);
        expect(signInLinkElement).toBeNull();

        const signOutLinkElement = screen.getByText(/sign out/i);
        expect(signOutLinkElement).toBeInTheDocument();
    });

    test('it should not render a cart dropdown if isCartOpen is false', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                cart: {
                    isCartOpen: false,
                    cartItems: []
                }
            }
        });

        const dropdownTextElement = screen.queryByText(/your cart is empty/i);
        expect(dropdownTextElement).toBeNull();
    });

    test('it should render a cart dropdown if isCartOpen is true', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                cart: {
                    isCartOpen: true,
                    cartItems: []
                }
            }
        });

        const dropdownTextElement = screen.getByText(/your cart is empty/i);
        expect(dropdownTextElement).toBeInTheDocument();
    });

    test('it should dispatch signOutStart action when clicking on the Sign Out link', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                user: {
                    currentUser: {}, 
                }
            }
        });

        const signOutLinkElement = screen.getByText(/sign out/i);
        expect(signOutLinkElement).toBeInTheDocument();

        fireEvent.click(signOutLinkElement); 
        expect(mockDispatch).toHaveBeenCalled();

        const signOutAction = signOutStart();
        expect(mockDispatch).toHaveBeenCalledWith(signOutAction);
    });
});
