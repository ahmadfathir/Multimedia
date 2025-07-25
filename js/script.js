document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Gallery Modal
    const galleryImages = document.querySelectorAll('.gallery-img');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.querySelector('.modal-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            modalImage.src = this.src;
            imageModal.show();
        });
    });
    
    // Load More Gallery Items
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real implementation, this would load more images via AJAX
            alert('Fitur ini akan memuat lebih banyak gambar dari server.');
        });
    }
    
    // Form Submission
    const ticketForm = document.getElementById('ticketForm');
    if (ticketForm) {
        ticketForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Pemesanan tiket berhasil! Kami telah mengirim detail tiket ke email Anda.');
            this.reset();
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
            this.reset();
        });
    }
    
    // Add animation class when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .attraction-card, .gallery-img, .card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});