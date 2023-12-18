import Link from 'next/link'
import { FcEditImage } from 'react-icons/fc'
import { FcFilm } from 'react-icons/fc'
import { FcLandscape } from 'react-icons/fc'
import { Zhi_Mang_Xing } from 'next/font/google'

const zmx = Zhi_Mang_Xing({ subsets: ['latin'], weight: ['400'] })

function NavBar() {
    return (
        <nav
            className={`flex w-full z-50 items-center space-x-4 lg:space-x-6 p-4 fixed top-0 border-y-amber-950 bg-slate-200/20 border-y-2 ${zmx.className}`}
        >
            <h1 className='font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-blue-400'>
                <Link href={'/'}>非物质的永恒</Link>
            </h1>
            <span className='flex-1'></span>
            <Link
                href=''
                className='text-lg transition-colors hover:text-primary'
            >
                <FcEditImage></FcEditImage>
            </Link>
            <Link
                href=''
                className='text-lg text-muted-foreground transition-colors hover:text-primary'
            >
                <FcLandscape></FcLandscape>
            </Link>
            <Link
                href=''
                className='text-lg text-muted-foreground transition-colors hover:text-primary'
            >
                <FcFilm></FcFilm>
            </Link>
        </nav>
    )
}

export default NavBar
