import { Children } from "react"
import { Redirect, Route } from "react-router"
import { useAuth } from "../../contexts/AuthProvider"

export function PrivateRoute({children, ...rest}) {
    const {logged} = useAuth()
    return (
        <Route {...rest}
        render={() =>{
            return logged === true ?
            children :
            <Redirect to="/"/>
        }}/>
    )
}
