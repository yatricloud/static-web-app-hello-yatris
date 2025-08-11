// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Add smooth scroll behavior for buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle different button actions
            if (this.textContent === 'Get Started') {
                showNotification('Getting started with Yatricloud! 🚀');
            } else if (this.textContent === 'Learn More') {
                showNotification('Discover more about our cloud solutions! ☁️');
            }
        });
    });
    
    // Removed parallax effect (no background shapes in minimalist design)
    
    // Removed playful mouse move effect for a more professional feel
    
    // Add intersection observer for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Removed typing effect for subtitle for a calmer, professional feel
    
    // Add notification system
    function showNotification(message) {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create new notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Style the notification - simplified and neutral
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #111827;
            color: #ffffff;
            padding: 0.75rem 1rem;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            font-weight: 600;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }
    
    // Removed playful logo spin/click effect
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const primaryBtn = document.querySelector('.btn-primary');
            if (primaryBtn) {
                primaryBtn.click();
            }
        }
    });
    
    // Removed page fade-in animation
    
    // Removed particle hover effects on buttons and related CSS for a calmer UI
    
    console.log('Yatricloud website loaded successfully! 🚀');
});


