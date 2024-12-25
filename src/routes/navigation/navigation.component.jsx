import { Link, Outlet } from "react-router"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

import './navigation.styles.scss'
import { useContext } from "react"
import { UserContext } from "../../components/contexts/user.context"

const Navigation = () =>  {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);

    return(
        <>
            <div className="navigation">
                <Link  className="logo-container" to='/'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation