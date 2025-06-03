import Plus from '../../assets/plus_green.svg'
import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation();
  return (
    <div className='py-[100px] px-[40px] [@media(max-width:500px)]:py-[75px]'>
      <h1 className='text-center font-bold text-[40px] text-[#013B29] [@media(max-width:500px)]:text-[30px] [@media(max-width:500px)]:text-left'>{t('faq.title')}</h1>

      <div className='flex flex-col gap-[50px] mt-[89px] [@media(max-width:1024px)]:mt-[69px] [@media(max-width:500px)]:mt-[36px]'>
        <details className="group border-b-1 border-[#BEBEBE]">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[24px] mb-5 [@media(max-width:1024px)]:text-[20px] [@media(max-width:500px)]:text-[14px]">
            <span className = "w-full">{t('faq.first.question')}</span>
            <span className="transition group-open:rotate-180">
              <img src={Plus} alt='plus' className='[@media(max-width:1024px)]:w-[32px] [@media(max-width:500px)]:w-[24px]'/>
            </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 mb-2 text-[16px] [@media(max-width:500px)]:text-[14px]">
        {t('faq.first.answer')}
        </p>
      </details>

      <details className="group border-b-1 border-[#BEBEBE]">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[24px] mb-5 [@media(max-width:1024px)]:text-[20px] [@media(max-width:500px)]:text-[14px]">
            <span className = "w-1/2">{t('faq.second.question')}</span>
            <span className="transition group-open:rotate-180">
            <img src={Plus} alt='plus' className='[@media(max-width:1024px)]:w-[32px] [@media(max-width:500px)]:w-[24px]'/>
            </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 mb-2 text-[16px] [@media(max-width:500px)]:text-[14px]">{t('faq.second.answer')}
        </p>
      </details>

      <details className="group border-b-1 border-[#BEBEBE]">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[24px] mb-5 [@media(max-width:1024px)]:text-[20px] [@media(max-width:500px)]:text-[14px]">
            <span className = "w-full">{t('faq.third.question')}</span>
            <span className="transition group-open:rotate-180">
            <img src={Plus} alt='plus' className='[@media(max-width:1024px)]:w-[32px] [@media(max-width:500px)]:w-[24px]'/>
            </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 mb-2 text-[16px] [@media(max-width:500px)]:text-[14px]">
          {t('faq.third.answer')}
        </p>
      </details>

      <details className="group border-b-1 border-[#BEBEBE]">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[24px] mb-5 [@media(max-width:1024px)]:text-[20px] [@media(max-width:500px)]:text-[14px]">
            <span>{t('faq.fourth.question')}</span>
            <span className="transition group-open:rotate-180">
            <img src={Plus} alt='plus' className='[@media(max-width:1024px)]:w-[32px] [@media(max-width:500px)]:w-[24px]'/>
            </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 mb-2 text-[16px] [@media(max-width:500px)]:text-[14px]">
          {t('faq.fourth.answer')}
        </p>
      </details>

      <details className="group border-b-1 border-[#BEBEBE]">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[24px] mb-5 [@media(max-width:1024px)]:text-[20px] [@media(max-width:500px)]:text-[14px]">
            <span className = "w-full">{t('faq.fifth.question')}</span>
            <span className="transition group-open:rotate-180">
            <img src={Plus} alt='plus' className='[@media(max-width:1024px)]:w-[32px] [@media(max-width:500px)]:w-[24px]'/>
            </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 mb-2 text-[16px] [@media(max-width:500px)]:text-[14px]">
          {t('faq.fifth.answer')}
        </p>
      </details>
      </div>

      
        
    </div>
  )
}
