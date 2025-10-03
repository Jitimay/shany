// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });
});

function checkCode() {
    const enteredCode = document.getElementById('codeInput').value;
    const correctCode = '354262';
    const loginSection = document.getElementById('login-section');
    const pageSelection = document.getElementById('page-selection');
    const submitBtn = document.querySelector('.submit-btn');

    if (enteredCode === correctCode) {
        // Add loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Unlocking...';
        submitBtn.style.pointerEvents = 'none';

        setTimeout(() => {
            // Hide login with animation
            loginSection.style.transform = 'translateY(-50px)';
            loginSection.style.opacity = '0';
            
            setTimeout(() => {
                loginSection.style.display = 'none';
                pageSelection.classList.remove('content-hidden');
                pageSelection.classList.add('content-visible');
                
                // Trigger AOS refresh for page selection
                setTimeout(() => {
                    AOS.refresh();
                }, 100);
            }, 500);
        }, 1000);
    } else {
        // Enhanced error feedback
        const input = document.getElementById('codeInput');
        
        // Shake animation
        input.style.animation = 'shake 0.5s ease-in-out';
        input.style.borderColor = '#ff4757';
        input.style.boxShadow = '0 0 20px rgba(255, 71, 87, 0.3)';
        
        // Show custom error message
        showErrorMessage('Incorrect code. Please try again! 💔');
        
        // Reset input styling after animation
        setTimeout(() => {
            input.style.animation = '';
            input.style.borderColor = 'rgba(255, 107, 107, 0.3)';
            input.style.boxShadow = '';
            input.value = '';
        }, 500);
    }
}

function showGallery(type) {
    const pageSelection = document.getElementById('page-selection');
    const contentSection = document.getElementById('content-section');
    const chanyGallery = document.getElementById('chany-gallery');
    const togetherGallery = document.getElementById('together-gallery');
    const galleryTitle = document.getElementById('gallery-title');
    const gallerySubtitle = document.getElementById('gallery-subtitle');

    // Hide page selection with animation
    pageSelection.style.transform = 'translateY(-50px)';
    pageSelection.style.opacity = '0';
    
    setTimeout(() => {
        pageSelection.style.display = 'none';
        contentSection.classList.remove('content-hidden');
        contentSection.classList.add('content-visible');
        
        if (type === 'chany') {
            // Show Chany gallery
            chanyGallery.classList.remove('content-hidden');
            chanyGallery.classList.add('content-visible');
            togetherGallery.classList.add('content-hidden');
            togetherGallery.classList.remove('content-visible');
            
            galleryTitle.textContent = 'Beautiful Chany 💕';
            gallerySubtitle.textContent = 'Every photo captures your amazing spirit';
        } else if (type === 'together') {
            // Show Together gallery
            togetherGallery.classList.remove('content-hidden');
            togetherGallery.classList.add('content-visible');
            chanyGallery.classList.add('content-hidden');
            chanyGallery.classList.remove('content-visible');
            
            galleryTitle.textContent = 'Chany & Josh Together 💕';
            gallerySubtitle.textContent = 'Our beautiful journey as one';
        }
        
        // Trigger AOS refresh for gallery items
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, 500);
}

function goBackToSelection() {
    const pageSelection = document.getElementById('page-selection');
    const contentSection = document.getElementById('content-section');
    
    // Hide content section with animation
    contentSection.style.transform = 'translateY(-50px)';
    contentSection.style.opacity = '0';
    
    setTimeout(() => {
        contentSection.style.display = 'none';
        contentSection.classList.add('content-hidden');
        contentSection.classList.remove('content-visible');
        
        // Reset transform and opacity for next time
        contentSection.style.transform = '';
        contentSection.style.opacity = '';
        
        // Show page selection
        pageSelection.style.display = 'block';
        pageSelection.classList.remove('content-hidden');
        pageSelection.classList.add('content-visible');
        pageSelection.style.transform = '';
        pageSelection.style.opacity = '';
        
        // Trigger AOS refresh
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, 500);
}

function showErrorMessage(message) {
    // Remove existing error message
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Create new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${message}`;
    errorDiv.style.cssText = `
        position: absolute;
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ff4757, #ff6b7a);
        color: white;
        padding: 12px 20px;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: 0 10px 25px rgba(255, 71, 87, 0.3);
        animation: errorSlide 0.5s ease-out;
        z-index: 1000;
    `;
    
    document.querySelector('.login-form').style.position = 'relative';
    document.querySelector('.login-form').appendChild(errorDiv);
    
    // Remove error message after 3 seconds
    setTimeout(() => {
        if (errorDiv) {
            errorDiv.style.animation = 'errorSlideOut 0.5s ease-in forwards';
            setTimeout(() => errorDiv.remove(), 500);
        }
    }, 3000);
}

// Add CSS animations for error handling
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes errorSlide {
        from { 
            opacity: 0; 
            transform: translateX(-50%) translateY(-10px); 
        }
        to { 
            opacity: 1; 
            transform: translateX(-50%) translateY(0); 
        }
    }
    
    @keyframes errorSlideOut {
        from { 
            opacity: 1; 
            transform: translateX(-50%) translateY(0); 
        }
        to { 
            opacity: 0; 
            transform: translateX(-50%) translateY(-10px); 
        }
    }
`;
document.head.appendChild(style);

// Add enter key support
document.getElementById('codeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCode();
    }
});

// Add input focus effects
document.getElementById('codeInput').addEventListener('focus', function() {
    this.parentElement.style.transform = 'translateY(-2px)';
});

document.getElementById('codeInput').addEventListener('blur', function() {
    this.parentElement.style.transform = 'translateY(0)';
});
