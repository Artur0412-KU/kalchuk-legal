import { useTranslation } from "react-i18next"
import Modal from "../Modal/Modal"

export default function Card({text}: {text: string}) {
    const {t} = useTranslation()
    console.log(t)
  return (
    <div className='bg-[#CDDFCE] w-full px-[13px] py-[24px] rounded-[15px] h-[192px] flex flex-col items-center justify-between'>
        <h2 className='text-[16px] font-bold text-center'>{t(text)}</h2>
        <button onClick={()=>(document.getElementById('my_modal_5') as HTMLDialogElement).showModal()}  className='px-[32px] py-[9px] bg-[#007932] transition rounded-[10px] text-[16px] text-white hover:bg-white hover:text-[#007932] cursor-pointer'>{t('servies.button')}</button>
        <Modal/>
    </div>
  )
}
