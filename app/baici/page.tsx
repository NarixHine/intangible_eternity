import Image from 'next/image'
import Lattice from './lattice.png'
import Snow from './bg.png'
import Logo from './logo.png'
import Fade from '@/components/fade'
import VideoPlayer from '@/components/video'
import { Metadata } from 'next'

export const metadata: Metadata = { title: '非物质的永恒 | 白瓷宋清波' }

export default function China() {
    return (<main>
        <div className='relative h-screen w-full'>
            <Image
                src={Lattice}
                alt='Lattice'
                fill={true}
                className='overflow-hidden object-cover object-center pointer-events-none'
            ></Image>
            <Image alt='Logo' width={600} src={Logo} priority className='p-5 pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></Image>
            <VideoPlayer src={'/garden.m3u8'} className={'object-cover h-full w-full'} autoPlay loop muted></VideoPlayer>
        </div>
        <div
            className='bg-slate-100 border-b-2 border-slate-300 p-10'
        >
            <div className='mx-auto text-blue-900 text-2xl text-center'>我们总是惊叹于景德镇的瓷器之美，<br></br>却不知其过程的艰辛，技艺的精湛。</div>
            <br></br>
            <div className='mx-auto text-blue-900 text-7xl text-center my-10'><Fade>七十二道工艺。</Fade></div>
            <br></br>
            <div className='mx-auto flex w-full space-x-4 text-blue-700'>
                <div className='flex-1 text-right text-xl lg:text-3xl'><Fade>材料选取、制坯、刻花勾描、釉料配置、施釉、烧窑</Fade></div>
                <div className='flex-row justify-items-center opacity-70'>
                    <div className='w-4 h-4 rounded-full bg-blue-700 my-3'></div>
                    <div className='w-1 h-40 rounded-sm mx-auto bg-gradient-to-b from-blue-700 to-blue-600'></div>
                </div>
                <div className='flex-1 text-left text-md lg:text-xl'>六个阶段。</div>
            </div>
            <div className='mx-auto flex w-full space-x-4 text-blue-600'>
                <div className='flex-1 text-right text-md lg:text-xl'>大致流程。</div>
                <div className='flex-row justify-items-center opacity-70'>
                    <div className='w-4 h-4 rounded-full bg-blue-600 my-3'></div>
                    <div className='w-1 h-40 rounded-sm mx-auto bg-gradient-to-b from-blue-600 to-blue-500'></div>
                </div>
                <div className='flex-1 text-left text-xl lg:text-3xl'><Fade>选材、塑形、勾线、上色、烧制</Fade></div>
            </div>
            <div className='mx-auto flex w-full space-x-4 text-blue-500'>
                <div className='flex-1 text-right text-xl lg:text-3xl'><Fade>“共计一坯之力，过手七十二，方克成器，其中微细节目，尚不能尽也。”</Fade></div>
                <div className='flex-row justify-items-center opacity-70'>
                    <div className='w-4 h-4 rounded-full bg-blue-500 my-3'></div>
                    <div className='w-1 h-60 rounded-sm mx-auto bg-gradient-to-b from-blue-500 to-blue-400'></div>
                </div>
                <div className='flex-1 text-left text-md lg:text-xl'>《天工开物》</div>
            </div>
            <div className='text-lg lg:text-2xl text-center text-blue-400 mt-16'><Fade>当然，不只是这些。</Fade></div>
            <div className='text-lg lg:text-2xl text-center text-blue-400'><Fade>你想知道那一件件瓷器文物背后的故事吗？</Fade></div>
            <br></br>
            <div className='text-3xl md:text-5xl text-center text-blue-400'><Fade>那就让我们走近一件青瓷的“一生”。</Fade></div>
            <div className='text-xl lg:text-5xl text-center text-blue-400 my-24 opacity-70'><Fade>⇣</Fade></div>
        </div>
        <div className='relative w-full p-3'>
            <Image
                src={Snow}
                alt='Snowy Town'
                fill={true}
                className='overflow-hidden object-cover object-center pointer-events-none -z-10'
            ></Image>
            <Fade>
                <div className='text-center text-4xl font-black my-6'>观看完整视频。</div>
                <VideoPlayer src={'/baici_movie/1.m3u8'} className={'aspect-video mx-auto my-10 w-4/5 lg:w-1/2'} controls></VideoPlayer>
            </Fade>
        </div>
    </main >)
}
