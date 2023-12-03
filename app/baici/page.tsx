import Image from 'next/image'
import Lattice from './lattice.png'
import Snow from './bg.png'
import Logo from './logo.png'
import Fade from '@/components/fade'
import VideoPlayer from '@/components/video'

export default function China() {
    return (<main>
        <div className='relative h-screen w-full'>
            <Image
                src={Lattice}
                alt='Lattice'
                fill={true}
                className='overflow-hidden object-cover object-center'
            ></Image>
            <Image alt='Logo' width={600} src={Logo} className='p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></Image>
            <VideoPlayer src={'/garden.m3u8'} className={'object-cover h-full w-full'} autoPlay loop muted></VideoPlayer>
        </div>
        <div
            className='from-slate-100 from-20% p-10 w-full to-black to-70% bg-gradient-to-b border-b-2 border-slate-300'
        >
            <br></br>
            <div className='mx-auto flex w-full space-x-4 text-blue-700'>
                <div className='flex-1 text-right text-xl lg:text-4xl'><Fade>宋神宗即位，变法。</Fade></div>
                <div className='flex-row justify-items-center opacity-70'>
                    <div className='w-4 h-4 rounded-full bg-blue-700 my-3'></div>
                    <div className='w-1 h-40 rounded-sm mx-auto bg-gradient-to-b from-blue-700 to-blue-500'></div>
                </div>
                <div className='flex-1 text-left text-md lg:text-xl'>1067年</div>
            </div>
            <div className='mx-auto flex w-full space-x-4 text-blue-500'>
                <div className='flex-1 text-right text-md lg:text-xl'>1069年</div>
                <div className='flex-row justify-items-center opacity-70'>
                    <div className='w-4 h-4 rounded-full bg-blue-500 my-3'></div>
                    <div className='w-1 h-40 rounded-sm mx-auto bg-gradient-to-b from-blue-500 to-blue-300'></div>
                </div>
                <div className='flex-1 text-left text-xl lg:text-4xl'><Fade>任用王安石为参知政事。</Fade></div>
            </div>
            <div className='mx-auto flex w-full space-x-4 text-blue-300'>
                <div className='flex-1 text-right text-xl lg:text-4xl'><Fade>宋神宗忧忿而死。</Fade></div>
                <div className='flex-row justify-items-center opacity-70'>
                    <div className='w-4 h-4 rounded-full bg-blue-300 my-3'></div>
                    <div className='w-1 h-60 rounded-sm mx-auto bg-gradient-to-b from-blue-300 to-blue-100'></div>
                </div>
                <div className='flex-1 text-left text-md lg:text-xl'>1085年</div>
            </div>
            <div className='text-4xl lg:text-6xl text-center text-blue-100 my-16'><Fade>靖康之变，白瓷流落民间。</Fade></div>
            <div className='text-4xl lg:text-6xl text-center text-blue-100 my-24 opacity-70'><Fade>⇣</Fade></div>

        </div>
        <div className='relative w-full p-3'>
            <Image
                src={Snow}
                alt='Snowy Town'
                fill={true}
                className='overflow-hidden object-cover object-center -z-10'
            ></Image>
            <Fade>
                <div className='text-center text-4xl font-black my-6'>观看完整视频。</div>
                <VideoPlayer src={'/garden.m3u8'} className={'aspect-video mx-auto my-10 w-4/5 lg:w-1/2'} controls></VideoPlayer>
            </Fade>
        </div>
    </main >)
}
