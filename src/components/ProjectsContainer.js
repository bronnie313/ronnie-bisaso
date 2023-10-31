import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import ProjectItem from './ProjectItems';
import 'swiper/css'
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const ProjectsContainter = () => {
    const { projects } = useSelector((store) => store.slide )
    const [activeIndex, setActiveIndex] = useState(0);
    // console.log(useSelector((store) => store.slide ));
    const breakpoints = {
        320: {
          slidesPerView: 1, // 1 slide for mobile
        },
        520: {
            slidesPerView: 2,
        },
        768: {
          slidesPerView: 2, // 2 slides for tablets (e.g., width >= 768px)
        },
        1024: {
          slidesPerView: 3, // 3 slides for desktop (e.g., width >= 1024px)
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
            <div>
                <div className='slide-container'>
                    <div className='slide-content'>
                        <div className='card-wrapper'>
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={40}
                                breakpoints={breakpoints}
                                speed={100}
                                navigation
                                pagination={{ clickable: true }}
                                // centeredSlides={true} // Center the active slide
                                // centeredSlidesBounds={true} // Enable centered slides bounds
                                 // Enable centered slides bounds
                                // centeredSlidesBounds={{
                                //   start: 1 / 3, // Centered card 1/3 from the left
                                //   end: 2 / 3, // Centered card 2/3 from the left
                                // }}
                                // scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
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
            </div>
    )
}

export default ProjectsContainter;
