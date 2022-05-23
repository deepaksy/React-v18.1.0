import React from "react"
import Loading from "../pages/Loading"
// import Home from "../pages/Home"
// import Hooks from "../pages/Hooks"
const Home = React.lazy(()=>import('../pages/Home'))
const Hooks = React.lazy(()=>import('../pages/Hooks/Hooks'))
const UseState = React.lazy(()=>import('../pages/Hooks/UseState'))
const ClassComponents = React.lazy(()=>import('../pages/ClassComponents'))
const UseEffect = React.lazy(()=>import('../pages/Hooks/UseEffect'))


export {
    Home,
    Hooks,
    Loading,
    ClassComponents,
    UseState,
    UseEffect
}