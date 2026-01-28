import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './slider.html',
  styleUrls: ['./slider.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Slider implements OnInit, AfterViewInit {
  @ViewChild('heroSwiper') heroSwiper!: ElementRef<any>;

  slides = [
    {
      title: 'We Can Solve Your Business Needs',
      description: 'We provide a twofold increase in traffic in 6 months. We increase the number of transitions from search engines for thematic queries.',
      image: '/image/Slideri.png'
    },
    {
      title: 'We Are A Solution Driven Team',
      description: 'We are your web development, Digital marketing, SEO and mobile apps development company in Pakistan, Top software House',
      image: '/image/Slideo.png'
    },
    {
      title: 'We Turn Your Ideas Into Reality',
      description: 'We are your web development, Digital marketing, SEO and mobile apps development company in Pakistan, Top software House',
      image: '/image/Sliderex.png'
    }
  ];

  ngOnInit() {
    register();
  }

  ngAfterViewInit() {
    if (this.heroSwiper?.nativeElement) {
      const swiperEl = this.heroSwiper.nativeElement;

      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          clickable: true
        },
        navigation: false
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();

      // Function to animate active slide elements
      const animateActiveSlide = () => {
        const allSlides = swiperEl.querySelectorAll('swiper-slide') as NodeListOf<Element>;
        allSlides.forEach((slide: Element) => {
          const animElements = slide.querySelectorAll('.animate-slide') as NodeListOf<HTMLElement>;
          animElements.forEach(el => el.classList.remove('active'));
        });

        setTimeout(() => {
          const activeSlide = swiperEl.querySelector('swiper-slide.swiper-slide-active') as Element | null;
          if (activeSlide) {
            const animElements = activeSlide.querySelectorAll('.animate-slide') as NodeListOf<HTMLElement>;
            animElements.forEach(el => el.classList.add('active'));
          }
        }, 100);
      };



      // Initial animation
      setTimeout(() => {
        animateActiveSlide();
      }, 300);

      // Listen to slide change events
      swiperEl.swiper.on('slideChange', () => {
        animateActiveSlide();
      });
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.heroSwiper?.nativeElement?.swiper) {
      this.heroSwiper.nativeElement.swiper.update();
    }
  }
}