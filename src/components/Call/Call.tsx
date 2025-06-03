import { useTranslation } from "react-i18next"
import Modal from "../Modal/Modal"

export default function Call() {
    const {t} = useTranslation()
  return (
    <div className='my-[100px] mx-[40px] bg-linear-to-r from-[#013B29] to-[#007932] px-[156px] py-[46px] rounded-[30px] flex flex-col items-center justify-center gap-[27px] text-white [@media(max-width:1024px)]:py-[70px] [@media(max-width:1024px)]:px-[40px] [@media(max-width:500px)]:px-[20px] [@media(max-width:500px)]:py-[80px]'>
        <h1 className='font-semibold text-[40px] [@media(max-width:1024px)]:text-[36px] [@media(max-width:500px)]:text-[24px] text-center'>{t('call.title')}</h1>
        <h3 className='font-semibold text-[24px] [@media(max-width:1024px)]:text-[20px] [@media(max-width:500px)]:text-[16px] text-center'>{t('call.paragraph')}</h3>
        <button onClick={()=>(document.getElementById('my_modal_5') as HTMLDialogElement).showModal()} className='text-[20px] py-[13px] px-[44px] bg-[#007932] border-[#D1E9D3] hover:bg-[#D1E9D3] hover:text-[#007932] transition border-[3px] rounded-[15px] cursor-pointer  text-center [@media(max-width:500px)]:py-[11px]'>{t('call.button')}</button>

        <Modal/>

    </div>
  )
}
