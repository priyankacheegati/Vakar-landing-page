// script.js — Vakar Landing Page Interactions
document.addEventListener('DOMContentLoaded', () => {

  // === NAVBAR HAMBURGER ===
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const ctaButtons = document.querySelector('.cta-buttons');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    ctaButtons.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // === SMOOTH SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = a.getAttribute('href');
      if(target && target !== '#'){
        const el = document.querySelector(target);
        if(el){
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // === PRE-FILL CAR SELECT ===
  const carSelect = document.getElementById('selectedCar');
  document.querySelectorAll('.car-card .btn.small').forEach(btn => {
    btn.addEventListener('click', () => {
      const car = btn.dataset.car;
      if(car && carSelect) carSelect.value = car;
    });
  });

  // === BOOK NOW / BOOK BUTTONS ===
  document.querySelectorAll('.book-now').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const car = btn.dataset.car || 'Car';
      const appLink = `intent://booking?car=${encodeURIComponent(car)}#Intent;scheme=vakar;package=com.vakar.app;end`;
      const playStore = 'https://play.google.com/store/apps/details?id=com.vakar.app&hl=en';
      
      // Only one redirect at a time to prevent 429
      setTimeout(() => {
        window.location = appLink;
      }, 300);
    });
  });

  // === WHATSAPP BUTTONS ===
  document.querySelectorAll('.btn.whatsapp').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const car = btn.dataset.car || '';
      const msg = encodeURIComponent(`Hi Vakar, I want to book ${car}`);
      const waLink = `https://wa.me/918500666999?text=${msg}`;
      window.open(waLink, '_blank');
    });
  });

  // === BOOKING FORM ===
  const bookingForm = document.getElementById('booking-form');
  if(bookingForm){
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = bookingForm.elements['name'].value.trim();
      const phone = bookingForm.elements['phone'].value.trim();
      const email = bookingForm.elements['email'].value.trim();
      const car = bookingForm.elements['selectedCar'].value;
      const date = bookingForm.elements['pickupDate'].value;

      if(!name || !phone || !car || !date){
        alert('Please fill all required fields.');
        return;
      }

      // WhatsApp message first
      const waMsg = encodeURIComponent(`Hi Vakar, I want to book a car.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCar: ${car}\nPickup date: ${date}`);
      const waLink = `https://wa.me/918500666999?text=${waMsg}`;
      window.open(waLink, '_blank');

      // Then open app / fallback Play Store after slight delay
      const appLink = `intent://booking?car=${encodeURIComponent(car)}#Intent;scheme=vakar;package=com.vakar.app;end`;
      const playStore = 'https://play.google.com/store/apps/details?id=com.vakar.app&hl=en';
      const start = Date.now();
      setTimeout(() => { 
        window.location = appLink;
        setTimeout(() => {
          if(Date.now() - start < 1500) window.location.href = playStore;
        }, 1200);
      }, 500);

      bookingForm.reset();
    });
  }

  // === CONTACT FORM (Get in Touch) ===
  const queryForm = document.getElementById('query-form');
  if(queryForm){
    queryForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = queryForm.elements['name'].value.trim();
      const email = queryForm.elements['email'].value.trim();
      const message = queryForm.elements['message'].value.trim();

      const waMsg = encodeURIComponent(`Contact Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
      const waLink = `https://wa.me/918500666999?text=${waMsg}`;
      window.open(waLink, '_blank');

      queryForm.reset();
    });
  }

  // === REVIEWS CAROUSEL ===
  const reviews = document.querySelectorAll('.review-card');
  let currentReview = 0;
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  function showReview(index){
    reviews.forEach((review,i) => review.classList.toggle('active', i===index));
  }

  if(nextBtn) nextBtn.addEventListener('click', () => {
    currentReview = (currentReview+1)%reviews.length;
    showReview(currentReview);
  });

  if(prevBtn) prevBtn.addEventListener('click', () => {
    currentReview = (currentReview-1+reviews.length)%reviews.length;
    showReview(currentReview);
  });

  // Auto-slide every 3s
  setInterval(() => {
    currentReview = (currentReview+1)%reviews.length;
    showReview(currentReview);
  }, 3000);

  // === OFFER & STEP ANIMATION ON SCROLL ===
  const offerCards = document.querySelectorAll('.offer-card');
  const stepCards = document.querySelectorAll('.step-card');

  function revealOnScroll(){
    offerCards.forEach(card => {
      if(card.getBoundingClientRect().top < window.innerHeight-100) card.classList.add('visible');
    });
    stepCards.forEach(card => {
      if(card.getBoundingClientRect().top < window.innerHeight-100) card.classList.add('visible');
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

});
setTimeout(() => {
  window.location = appLink;
}, 1000); // 1 second delay
document.querySelectorAll('.whatsapp').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const car = this.dataset.car;
    const phone = '918500666999';
    const message = encodeURIComponent(`Hi, I want to book ${car}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  });
});
// WhatsApp buttons
document.querySelectorAll('.whatsapp').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const car = this.dataset.car || 'any car';
    const phone = '918500666999';
    const message = encodeURIComponent(`Hi, I want to book ${car}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  });
});
document.querySelectorAll('.whatsapp').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const car = this.dataset.car || 'any car';
    const phone = '918500666999';
    const message = encodeURIComponent(`Hi, I want to book ${car}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  });
});
// Book Now button click
document.querySelectorAll('.book-now').forEach(button => {
  button.addEventListener('click', () => {
    const carName = button.getAttribute('data-car');
    // Scroll to booking section
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });

    // Select car in booking form automatically
    const selectCar = document.querySelector('#booking select[name="selectedCar"]');
    if (selectCar) {
      selectCar.value = carName;
    }
  });
});

// WhatsApp button click
document.querySelectorAll('.whatsapp').forEach(button => {
  button.addEventListener('click', () => {
    const carName = button.getAttribute('data-car');
    const phone = "918500666999"; // Your WhatsApp number
    const message = `Hi, I want to book ${carName} from Vakar.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
});
// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});







