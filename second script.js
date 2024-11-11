
gsap.from('.animate-hero', {
    duration: 2.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
    });


    
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-services', {
scrollTrigger: {
trigger: '.animate-services',
start: 'top 100%', // Adjust this value as needed
end: 'bottom 50%', // Adjust this value as needed
},
duration: 1.6,
opacity: 0,
y: -150,
stagger: 0.3,
delay: 1.6
});



gsap.registerPlugin(ScrollTrigger);

gsap.from('.zoom-element', {
scrollTrigger: {
trigger: '.zoom-element',
start: 'top 80%', // Adjust as needed
end: 'bottom 20%', // Adjust as needed
toggleActions: 'play none none none'
},
scale: 0,
duration: 2.5,
ease: 'power1.inOut'
});


gsap.registerPlugin(ScrollTrigger);

gsap.from('.zoom', {
scrollTrigger: {
trigger: '.zoom',
start: 'top 80%', // Adjust as needed
end: 'bottom 20%', // Adjust as needed
toggleActions: 'play none none none'
},
scale: 0,
duration: 2.5,
ease: 'power1.inOut'
});



let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;
const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonialsPerView = 3; // Number of testimonials to show at a time

function showNextTestimonial() {
currentIndex++;
if (currentIndex >= totalTestimonials - testimonialsPerView) {
testimonialsContainer.style.transition = 'none';
currentIndex = 0;
testimonialsContainer.style.transform = `translateX(0)`;
setTimeout(() => {
testimonialsContainer.style.transition = 'transform 1.18s ease-in-out';
currentIndex++;
testimonialsContainer.style.transform = `translateX(-${currentIndex * 300}px)`;
}, 50);
} else {
testimonialsContainer.style.transform = `translateX(-${currentIndex * 300}px)`;
}
}

setInterval(showNextTestimonial, 3000); // Change testimonial every 3 seconds

// Initially set the container width to accommodate all testimonials
testimonialsContainer.style.width = `${totalTestimonials * 300}px`;

// Set each testimonial width to be 400px
testimonials.forEach(testimonial => {
testimonial.style.width = '300px';
});




document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    item.classList.toggle('active');
    });
    });
    });
