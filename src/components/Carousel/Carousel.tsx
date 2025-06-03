import { useTranslation } from 'react-i18next';
import { ReviewsData } from '../../data/reviews.data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Carousel() {
  const { t } = useTranslation();

  return (
    <div className='py-[80px] px-[40px] bg-[#e2efe3] rounded-4xl [@media(max-width:1024px)]:py-[70px] [@media(max-width:500px)]:py-[50px]'>
      <h1 className='text-center font-bold text-[#013B29] text-4xl mb-10'>
        {t('reviews.title')}
      </h1>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        modules={[Pagination]}
        autoplay ={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {ReviewsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='p-10 bg-[#CDDFCE] rounded-4xl flex flex-col justify-between gap-[32px] h-full'>
              <h3 className='text-lg font-bold text-[#013B29] [@media(max-width:1024px)]:text-[14px]'>
                "{t(item.reviewKey)}"
              </h3>
              <h1 className='text-right font-semibold text-lg [@media(max-width:1024px)]:text-[14px]'>
                - {t(item.authorKey)}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}