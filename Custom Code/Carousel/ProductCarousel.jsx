import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import { Pagination, Navigation } from 'swiper';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
const ProductCard = (props) => {
   return (
      <div className="card card-size">
         <img
            src="https://images.squarespace-cdn.com/content/v1/550b2072e4b0d3cbec5358d7/1556724168509-XQNGRCU5UCI7MOVZQN5P/DSC_4318.jpg?format=2500w"
            alt="img"
            className=" card-img-top "
         />
         <div className="card-body text-left ">
            <h4 className="card-title">{props.productName}</h4>
            <div className="card-text">{props.productDescription}</div>
            <button className="btn btn-primary">Buy</button>
         </div>
      </div>
   );
};

class ProductCarousel extends Component {
   state = { isFirst: true, isLast: false };
   sliderRef = React.createRef();

   handlePrev = () => {
      if (!this.sliderRef.current) return;
      this.sliderRef.current.swiper.slidePrev();
   };

   handleNext = () => {
      if (!this.sliderRef.current) return;
      this.sliderRef.current.swiper.slideNext();
   };

   onSlideChange = (swiper) => {
      this.setState({
         isFirst: swiper.isBeginning,
         isLast: swiper.isEnd,
      });
   };

   render() {
      const { isFirst, isLast } = this.state;
      return (
         <>
            <div className="container">
               <div className="post-section">
                  <div className="heading-section my-3">
                     <div className="box-slide">
                        <h1>All Post</h1>

                        {/* NAVIGATION CUSTOM ICON  */}

                        <div className="arrow">
                           <div className="swiper-pagination"></div>
                           <IoIosArrowRoundBack
                              className={`prev-arrow ${
                                 isFirst ? 'disabled' : ''
                              }`}
                              onClick={this.handlePrev}
                           />
                           <IoIosArrowRoundForward
                              className={`next-arrow ${
                                 isLast ? 'disabled' : ''
                              }`}
                              onClick={this.handleNext}
                           />
                        </div>
                     </div>
                     <hr />
                     <br />
                  </div>
                  <div className="slide-section">
                     {/* SILDER START HERE */}
                     {/* SILDER START HERE */}

                     <Swiper
                        ref={this.sliderRef}
                        onSlideChange={this.onSlideChange}
                        // slidesPerView={4}
                        // spaceBetween={30}
                        // infinite={false}
                        speed={500}
                        breakpoints={{
                           250: {
                              // width: 350,
                              slidesPerView: 2,
                              spaceBetween: 0,
                           },

                           500: {
                              // width: 500,
                              slidesPerView: 2,
                              spaceBetween: 0,
                           },

                           700: {
                              // width: 500,
                              slidesPerView: 3,
                              spaceBetween: 0,
                           },

                           900: {
                              // width: 500,
                              slidesPerView: 4,
                              spaceBetween: 0,
                           },

                           1200: {
                              // width: 500,
                              slidesPerView: 5,
                              spaceBetween: 0,
                           },
                        }}
                        pagination={{
                           el: '.swiper-pagination',
                           type: 'fraction',
                        }}
                        navigation={false}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                     >
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 1"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 2"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 3"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 4"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 5"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 6"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 7"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 8"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 9"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 10"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductCard
                              productName="Mecanical Watch 11"
                              productDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, recusandae?"
                           />
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default ProductCarousel;
