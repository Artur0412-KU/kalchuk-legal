import { useTranslation } from "react-i18next";
import Instagram from '../../assets/social/ri_instagram-fill.png'
import Facebook from '../../assets/social/ic_baseline-facebook.png'
import LogoWhite from '../../assets/logo white.svg'
import i18next from "i18next";

export default function Footer() {
    const { t } = useTranslation();
  return (
    <div className='px-[44px] py-[77px] flex flex-col gap-5 bg-[#013B29] [@media(max-width:1024px)]:px-[41px] [@media(max-width:1024px)]:py-[87px] [@media(max-width:500px)]:flex-col [@media(max-width:500px)]:gap-[100px] [@media(max-width:500px)]:py-[68px] [@media(max-width:500px)]:px-[40px]'>
      <div className="flex items-center justify-between w-full">
         <img src={LogoWhite} className="w-[128px]"/>
        <ul className="flex items-center gap-[58px] text-[20px] [@media(max-width:1024px)]:gap-[85px] [@media(max-width:1024px)]:text-[16px] [@media(max-width:500px)]:gap-[20px] text-white">
          <a href="#about" className='transation hover:text-gray-400'>{t('header.about')}</a>
          <a href="#services" className='transation hover:text-gray-400'>{t('header.services')}</a>
          <a href="#services" className='transation hover:text-gray-400'>{t('header.reviews')}</a>
          <a href="" className='transation hover:text-gray-400'>{t('header.contact')}</a>
        </ul>

        <div className='flex gap-[11px]'>
            <a href='https://www.instagram.com/alyosy_kalchuchka/?hl=en' target='_blank'>
                 <img src={Instagram}/>
            </a>
            <a href='https://www.facebook.com/alyona.kalchuk/' target='_blank'>
                <img src={Facebook}/>
            </a>
          </div>
      </div>

      <div className="text-center">
        <a href={i18next.language === 'ua'
      ? 'src/assets/files/Confidentiality_UA.pdf'
      : i18next.language === 'fr'
      ? 'src/assets/files/Confidentality_FR.pdf'
      : 'src/assets/files/Confidentality_EN.pdf'} rel="noopener noreferrer" target="_blank" className='cursor-pointer text-white transation hover:text-gray-400'>{t('privacyTitle')}</a>
      </div>  
      
    </div>
  )
}
