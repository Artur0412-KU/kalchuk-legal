import Card from '../Card/Card'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const { t } = useTranslation();
  return (
    <div id='services' className='px-[40px] py-[80px] bg-[#A8E6CD]/20 rounded-[30px] [@media(max-width:1024px)]:py-[70px] [@media(max-width:500px)]:py-[50px]'>
        <h1 className='text-center text-[40px] font-bold text-[#013B29]'>{t('servies.title')}</h1>
        <div className='grid grid-cols-3 grid-auto-flow-row gap-[50px] pt-[65px] [@media(max-width:1024px)]:grid-cols-2 [@media(max-width:500px)]:flex [@media(max-width:500px)]:flex-col'>
            <Card text='servies.list.first'/>
            <Card text='servies.list.second'/>
            <Card text='servies.list.third'/>
            <Card text='servies.list.fourth'/>
            <Card text="servies.list.fifth"/>
            <Card text="servies.list.sixth"/>
            <Card text="servies.list.seventh"/>
        </div>
    </div>
  )
}
