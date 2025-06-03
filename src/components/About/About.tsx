import AboutMe from '../../assets/main/about.png'
import ListImg from '../../assets/lets-icons_done-round.svg'
import { useTranslation } from 'react-i18next'

export default function About() {
    const {t} = useTranslation()
  return (
    <div id='about' className='py-[100px] px-[40px] flex flex-row gap-[109px] [@media(max-width:1024px)]:flex-col-reverse [@media(max-width:1024px)]:gap-[48px]'>
        <img src={AboutMe} />
        <div className='flex items-start justify-center flex-col gap-[25px]'>
            <h1 className='text-[36px] text-[#013B29] font-bold'>{t('about.title')}</h1>
            <p className='text-[20px] @media(max-width:1024px)]:text-[18px] [@media(max-width:1024px)]:text-[18px] [@media(max-width:500px)]:text-[16px]'>{t('about.paragraph')}</p>
            <ul className='flex flex-col gap-[25px] w-full [@media(max-width:1024px)]:gap-[20px]'>
                <li className='flex gap-[15px] text-[20px] @media(max-width:1024px)]:text-[18px] [@media(max-width:1024px)]:text-[18px] [@media(max-width:500px)]:text-[16px]'>
                    <img src={ListImg} className='w-[24px] h-[24px]'/>
                    <p>{t('about.advantage.first')}</p>
                </li>
                <li className='flex gap-[15px] text-[20px] @media(max-width:1024px)]:text-[18px] [@media(max-width:1024px)]:text-[18px] [@media(max-width:500px)]:text-[16px]'>
                    <img src={ListImg} className='w-[24px] h-[24px]'/>
                    <p>{t('about.advantage.second')}</p>
                </li>
                <li className='flex gap-[15px] text-[20px] @media(max-width:1024px)]:text-[18px] [@media(max-width:1024px)]:text-[18px] [@media(max-width:500px)]:text-[16px]'>
                    <img src={ListImg} className='w-[24px] h-[24px]'/>
                    <p>{t('about.advantage.third')}</p>
                </li>
            </ul>
        </div>
    </div>
  )
}
