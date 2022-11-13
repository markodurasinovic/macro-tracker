import { useRouter } from 'next/router'

// export default function NavLink(args: { children: Array<any>; href: string; style: string }) {
export default function NavLink({children, href, style} : { children: Array<any>; href: string; style: string }) {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} className={style}>
            {children}
        </a>
    )
}