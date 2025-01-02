import { Link, Outlet } from "react-router"
import { useContext } from "react"

import { UserContext } from "../../components/contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../components/contexts/cart.context"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

import { NavigationContainer, NavLink, NavLinks, LogoConainer } from './navigation.styles';

const Navigation = () =>  {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return(
        <>
            <NavigationContainer>
                <LogoConainer  to='/'>
                    <CrwnLogo className="logo"/>
                </LogoConainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span'  onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ): (
                        <NavLink to='auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                { isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet/>
        </>
    )
}

export default Navigation