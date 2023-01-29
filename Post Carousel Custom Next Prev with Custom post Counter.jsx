// CSS

#app {
   height: 100%;
}
html,
body {
   position: relative;
   height: 100%;
}

body {
   background: transparent;
   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
   font-size: 14px;
   color: #000;
   margin: 0;
   padding: 0;
}

.swiper {
   width: 100%;
   height: 100%;
}

.swiper-slide {
   font-size: 18px;
   background: transparent;
   /* Center slide text vertically */
   display: -webkit-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   -webkit-justify-content: center;
   justify-content: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   -webkit-align-items: center;
   align-items: center;
}

.swiper-slide img {
   display: block;
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.swiper-container {
   width: 480px;
}

.card-size {
   width: 95%;
}

@media screen and (min-width: 640px) {
   .swiper-container {
      width: 640px;
   }
}

@media screen and (min-width: 768px) {
   .swiper-container {
      width: 768px;
   }
}

/* arrow */

.arrow {
   font-size: 40px;
}

.box-slide {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.prev-arrow,
.next-arrow {
   cursor: pointer;
}

.prev-arrow.disabled,
.next-arrow.disabled {
   pointer-events: none;
   opacity: 0.5;
}

/* paginations */

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
   bottom: inherit;
   left: inherit;
   width: auto;
   display: inline-block;
}

.swiper-pagination {
   position: inherit;
   text-align: left;
   transition: 0.3s opacity;
   transform: inherit;
   /* z-index: 10; */
}




// Code


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

