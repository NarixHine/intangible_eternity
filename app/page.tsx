import Image from 'next/image'
import Bg from './bg.jpg'
import Styles from './Home.module.css'
import Baici from './baici.png'
import Chuisu from './chuisu.png'
import Jinshan from './jinshan.png'
import Link from 'next/link'
import { Zhi_Mang_Xing } from 'next/font/google'

const zmx = Zhi_Mang_Xing({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  return (
    <main className='relative h-screen w-full overflow-hidden'>
      <Image
        src={Bg}
        alt='Background'
        fill={true}
        className='overflow-hidden object-cover object-center pointer-events-none'
      ></Image>
      <Link href={'./baici'} className={`absolute top-1/4 ${Styles.window_1}`}>
        <Image src={Baici} height={120} quality={100} alt='白瓷宋清波'></Image>
      </Link>
      <Link href={''} className={`absolute top-2/4 ${Styles.window_2}`}>
        <Image src={Chuisu} height={120} quality={100} alt='吹塑版画'></Image>
      </Link>
      <Link href={'https://ewe.leaving.ink/ink/jinshan'} className={`absolute top-3/4 ${Styles.window_3}`}>
        <Image src={Jinshan} height={120} quality={100} alt='金山农民画'></Image>
      </Link>
      <p className={`absolute bottom-3 right-3 text-gray-700 ${zmx.className} text-sm`}>华师大二附中 2604——<Link href={'https://ewe.leaving.ink/ink/ie'} className='underline'>将非物质的一点，化作永恒</Link></p>
    </main>
  )
}
