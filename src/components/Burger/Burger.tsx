import burger from '../../assets/burger.svg'
import close from '../../assets/close.svg'
import { useTranslation } from 'react-i18next';

export default function Burger() {
    const { t} = useTranslation();
  return (
    <div className="drawer hidden [@media(max-width:500px)]:flex drawer-end justify-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            <img src={burger}/>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 gap-[30px] p-[40px] flex justify-between flex-row-reverse">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay flex justify-end w-[48px] h-[48px]">
              <img src={close} className='w-[48px]'/>
            </label>
            <div className='flex flex-col items-start justify-start'>
              <li>
              <a href="" className='transation hover:text-[#007932]'>{t('header.about')}</a>
              </li>
              <li>
              <a href="" className='transation hover:text-[#007932]'>{t('header.services')}</a>
              </li>
              <li>
              <a href="" className='transation hover:text-[#007932]'>{t('header.reviews')}</a>
              </li>
              <li>
              <a href="" className='transation hover:text-[#007932]'>{t('header.contact')}</a>
              </li>

            </div>
            
            
          </ul>
        </div>
      </div>
  )
}
