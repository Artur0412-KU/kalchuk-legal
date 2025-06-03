import { useTranslation } from 'react-i18next'
import Modal from '../Modal/Modal'

export default function Main() {
    const {t} = useTranslation()
  return (
    <div className='bg-[url(/src/assets/main/main.png)] bg-cover px-[281px] py-[150px] flex flex-col text-center items-center gap-[15px] text-[#dddddd] [@media(max-width:1024px)]:p-[151px] [@media(max-width:500px)]:px-[34px]'>
        <h1 className='text-[40px] font-bold [@media(max-width:1024px)]:text-[36px] [@media(max-width:500px)]:text-[24px]'>{t('main.title')}</h1>
        <p className='text-[24px] [@media(max-width:1024px)]:text-[20px] [@media(max-width:500px)]:text-[16px]'>{t('main.subtitle')}</p>
        <button onClick={()=>(document.getElementById('my_modal_5') as HTMLDialogElement).showModal()} className='py-[13px] px-[52px] bg-[#007932] rounded-[20px] transition border-[#D1E9D3] border-[3px] text-[20px] hover:bg-[#D1E9D3] hover:text-[#007932]'>{t('main.button')}</button>

        <Modal/>
    </div>
  )
}
