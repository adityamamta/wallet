import './swiper-style.css';
import { StarIcon, User1, User2, User3 } from '../../assets/assets-export';
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const testimonials = [
    {
        text: "“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”",
        name: "Johnny Owens",
        image: User1,
    },
    {
        text: "“This app has saved me so much time! It’s super easy to use, and I feel much more organized. I can finally focus on things that matter instead of looking for my cards or tickets. Highly recommend it!”",
        name: "Sophia Carter",
        image: User2,
    },
    {
        text: "“Wallet has completely changed how I manage my daily tasks. Everything I need is just one swipe away, and I love the smooth functionality. It’s a must-have app for anyone looking to stay organized!”",
        name: "Ethan Brown",
        image: User3,
    },
];

const SwiperSlider = () => {
    return (
        <div className="container testimonials-container">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="review">
                        <p>{testimonial.text}</p>
                        <div className="profile">
                            <img src={testimonial.image} alt={`${testimonial.name} profile`} />
                            <div className="name-rating">
                                <p className="name">{testimonial.name}</p>
                                <div className="rating">
                                    {Array(5)
                                        .fill(null)
                                        .map((_, i) => (
                                            <img key={i} src={StarIcon} alt="star icon" />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperSlider;
