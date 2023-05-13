import  Router  from "next/router"

export const handleHomePage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    Router.push('/')
}

