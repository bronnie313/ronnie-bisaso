import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import ProjectItem from './ProjectItems';
import 'swiper/css'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Icon } from '@iconify/react';

const ProjectsContainter = () => {
    const { projects } = useSelector((store) => store.slide )
    const [activeIndex, setActiveIndex] = useState(0);
    const breakpoints = {
        320: {
          slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3, 
        },
      };

    if (!projects.length) {
        return (
          <div>
            <h3>Personal Projects</h3>
            <br />
            <p>Your don't have any projects yet</p>
          </div>
        )
    }

    return (
            <div className='slide-big-container'>
                    <div className="custom-button custom-button-prev">
                        <Icon icon="tabler:arrow-up" rotate={3} fontSize={'3rem'} />
                    </div>
                <div className='slide-container'>
                    <div className='slide-content'>
                        <div className='card-wrapper'>
                            <Swiper
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={40}
                                breakpoints={breakpoints}
                                speed={100}
                                fade={true}
                                navigation={{
                                    nextEl: '.custom-button-next',
                                    prevEl: '.custom-button-prev'
                                }}
                                pagination={{
                                     clickable: true,
                                     dynamicBullets: true,
                              }}
                                // onSwiper={(swiper) => console.log(swiper)}
                                onSlideChangeTransitionEnd={(swiper) => {
                                    setActiveIndex(swiper.activeIndex);
                                  }}                                >
                            {
                                projects.map((item, index) => {
                                    return (
                                        <div>
                                            <SwiperSlide key={item.id} className={`custom-slide ${activeIndex === index ? 'centered-slide' : ''}`}>
                                                <ProjectItem key={item.id} {...item} />
                                            </SwiperSlide>
                                        </div>
                                    )
                                })
                            }
                           
                           
                            </Swiper>
                        </div>
                    </div>
                </div>
                        <div className="custom-button custom-button-next">
                                <Icon icon="tabler:arrow-up" rotate={1} fontSize={'3rem'} />
                        </div>
            </div>
    )
}

export default ProjectsContainter;
