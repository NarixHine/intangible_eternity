import Image from 'next/image'
import Bg from './bg.jpg'
import Styles from './Home.module.css'

export default function Home() {
  return (
    <main className='relative h-screen w-full overflow-hidden'>
      <Image
        src={Bg}
        alt='Background'
        fill={true}
        className='overflow-hidden object-cover object-center pointer-events-none'
      ></Image>
            <div className={`w-20 h-20 bg-slate-400 absolute top-1/4 ${Styles.window_1}`}></div>
            <div className={`w-20 h-20 bg-slate-400 absolute top-2/4 ${Styles.window_2}`}></div>
            <div className={`w-20 h-20 bg-slate-400 absolute top-3/4 ${Styles.window_3}`}></div>
    </main>
  )
}
