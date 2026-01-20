import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-area',
  imports: [CommonModule],
  templateUrl: './project-area.html',
  styleUrl: './project-area.css',
})
export class ProjectArea {
projects = [
    { title: 'Native E Donation App', category: 'Mobile App Development', image: '/image/Edonation-appss.png', link: 'portfolio-item/e-donation-app' },
    { title: 'Play Ground (ESPORT)', category: 'Design', image: '/image/Esport-Web-Design-1.png', link: 'portfolio-item/e-sport-website-design' },
    { title: 'Ground Fitness App For Health', category: 'Mobile App Development', image: '/image/ground-app-sss-1.png', link: 'portfolio-item/ground-fitness-app' },
    { title: 'Fastest White Hat SEO Results', category: 'SEO', image: '/image/seo-results-1.png', link: 'portfolio-item/fastest-white-hat-seo-results' },
    { title: 'Custom E-Commerce Hub', category: 'Web Development', image: '/image/Ecommerce-Shopping-Hub-1.png', link: 'portfolio-item/ecommerce-website-development' },
    { title: 'Furniture Gallery App', category: 'Design', image: '/image/furniture-app-portfolio-1.png', link: 'portfolio-item/top-ui-ux-designing' },
    { title: 'Car Booking Taxi App', category: 'Mobile App Development', image: '/image/car-booking-app-1.png', link: 'portfolio-item/car-booking-taxi-app' },
    { title: 'Save Sales Custom Admin Panel', category: 'Web Development', image: '/image/save-sales-Admin-Panel.png', link: 'portfolio-item/custom-admin-panel' },
    { title: 'Soobz Online Clothing Brand', category: 'Web Development', image: '/image/Soobz new.png', link: 'portfolio-item/soobz-online-clothing-brand' },
    { title: 'Trade Kitchen Suppliers', category: 'Web Development', image: '/image/trade.jpg', link: 'portfolio-item/trade-kitchen-suppliers' },
    { title: 'Quick Professional Movers', category: 'Web Development', image: '/image/quick pro.png', link: 'portfolio-item/quick-professional-movers' },
    { title: 'Hair Salon Reviews', category: 'Web Development', image: '/image/softnew2.jpg', link: 'portfolio-item/hair-salon-reviews' },
    { title: 'Al Hayyat Group Of Companies', category: 'Web Development', image: '/image/0_alhayyat.jpg', link: 'portfolio-item/al-hayyat-group-of-companies' },
    { title: 'The Centrum International Peshawar', category: 'Web Development', image: '/image/0_centrum jped.jpg', link: 'portfolio-item/the-centrum-international-peshawar' },
    { title: 'Elad Signs Printing With Admin Panel', category: 'Software Development', image: '/image/2_new elade.png', link: 'portfolio-item/elad-signs-printing-with-admin-panel' },
    { title: 'Elad boutique Ecommerce CRM', category: 'Web Development', image: '/image/Elad-min.jpg', link: 'portfolio-item/elad-boutique-ecommerce-crm' }
  ];
}