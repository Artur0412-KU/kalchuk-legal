import Logo from '../../assets/logo.svg'
import arrow from '../../assets/arrrow.svg'
import { useTranslation } from "react-i18next";
import Burger from '../Burger/Burger';

export default function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="px-[40px] py-[25px] flex items-center justify-between [@media(max-width:1024px)]:py-[20px]">
      <img src={Logo} alt="" /> 

      <ul className="flex items-center gap-[133px] text-[20px] [@media(max-width:1024px)]:gap-[85px] [@media(max-width:1024px)]:text-[16px] [@media(max-width:500px)]:hidden">
        <a href="#about" className='transation hover:text-[#007932]'>{t('header.about')}</a>
        <a href="#services" className='transation hover:text-[#007932]'>{t('header.services')}</a>
        <a href="" className='transation hover:text-[#007932]'>{t('header.reviews')}</a>
        <a href="" className='transation hover:text-[#007932]'>{t('header.contact')}</a>
      </ul>


      <div className='flex'>
        <details className="dropdown">
        <summary className="btn m-1 border-0 bg-white hover:shadow-none font-normal text-[20px] [@media(max-width:1024px)]:text-[16px]">
          <img src={arrow} alt="" /> {i18n.language.toUpperCase()}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => changeLanguage('ua')}>
            <a>UA</a>
          </li>
          <li onClick={() => changeLanguage('en')}>
            <a>EN</a>
          </li>
          <li onClick={() => changeLanguage('fr')}>
            <a>FR</a>
          </li>
        </ul>
      </details>
      <Burger/>
      </div>

      

       
    </div>
  )
}
