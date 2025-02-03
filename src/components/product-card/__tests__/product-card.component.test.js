import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.utils';
import * as reactRedux from 'react-redux'; 
import Navigation from '../../../routes/navigation/navigation.component';
import { signOutStart } from '../../../store/user/user.action';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn()
}));

describe('Navigation tests', () => {
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
        reactRedux.useDispatch.mockReturnValue(mockDispatch); 
    });

    afterEach(() => {
        jest.restoreAllMocks(); 
    });

    test('it should dispatch signOutStart action when clicking on the Sign Out Link', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                user: {
                    currentUser: { id: 1, displayName: 'Test User' },
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
