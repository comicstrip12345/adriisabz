
const Route = ({children,path}) => {
    return window.location.pathname === path ? children : null
}

export default Route