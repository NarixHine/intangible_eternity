import Link from 'next/link'
import { Zhi_Mang_Xing } from 'next/font/google'
import Image from 'next/image'
import Baici from './baici.png'
import Chuisu from './chuisu.png'
import Jinshan from './jinshan.png'

const zmx = Zhi_Mang_Xing({ subsets: ['latin'], weight: ['400'] })

function NavBar() {
    return (
        <nav
            className={`flex w-full z-50 items-center space-x-4 lg:space-x-6 py-3 px-4 fixed top-0 border-y-amber-950 bg-slate-200/20 border-y-2 ${zmx.className}`}
        >
            <h1 className='text-2xl text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-blue-400'>
                <Link href={'/'}>非物质的永恒</Link>
            </h1>
            <span className='flex-1'></span>
            <Link
                href='/baici'
            >
                <Image src={Baici} height={20} quality={100} alt='白瓷宋清波'></Image>
            </Link>
            <Link
                href=''
            >
                <Image src={Chuisu} height={20} quality={100} alt='吹塑版画'></Image>
            </Link>
            <Link
                href='https://ewe.leaving.ink/ink/jinshan'
            >
                <Image src={Jinshan} height={20} quality={100} alt='金山农民画'></Image>
            </Link>
        </nav>
    )
}

export default NavBar
