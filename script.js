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
        
        // Show content section and reset display
        contentSection.style.display = 'block';
        contentSection.classList.remove('content-hidden');
        contentSection.classList.add('content-visible');
        
        if (type === 'chany') {
            // Show Chany gallery
            chanyGallery.style.display = 'grid';
            chanyGallery.classList.remove('content-hidden');
            chanyGallery.classList.add('content-visible');
            togetherGallery.style.display = 'none';
            togetherGallery.classList.add('content-hidden');
            togetherGallery.classList.remove('content-visible');
            
            galleryTitle.textContent = 'Beautiful Chany 💕';
            gallerySubtitle.textContent = 'Every photo captures your amazing spirit';
        } else if (type === 'together') {
            // Show Together gallery
            togetherGallery.style.display = 'grid';
            togetherGallery.classList.remove('content-hidden');
            togetherGallery.classList.add('content-visible');
            chanyGallery.style.display = 'none';
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
    const chanyGallery = document.getElementById('chany-gallery');
    const togetherGallery = document.getElementById('together-gallery');
    
    // Hide content section with animation
    contentSection.style.transform = 'translateY(-50px)';
    contentSection.style.opacity = '0';
    
    setTimeout(() => {
        // Hide content section
        contentSection.style.display = 'none';
        contentSection.classList.add('content-hidden');
        contentSection.classList.remove('content-visible');
        
        // Hide both galleries and reset their states
        chanyGallery.classList.add('content-hidden');
        chanyGallery.classList.remove('content-visible');
        togetherGallery.classList.add('content-hidden');
        togetherGallery.classList.remove('content-visible');
        
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
document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('codeInput');
    if (codeInput) {
        codeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkCode();
            }
        });

        // Add input focus effects
        codeInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });

        codeInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    }
});
// Poem Section Function
function showPoem() {
    const pageSelection = document.getElementById('page-selection');
    const poemSection = document.getElementById('poem-section');

    // Hide page selection with animation
    pageSelection.style.transform = 'translateY(-50px)';
    pageSelection.style.opacity = '0';
    
    setTimeout(() => {
        pageSelection.style.display = 'none';
        
        // Show poem section
        poemSection.style.display = 'block';
        poemSection.classList.remove('content-hidden');
        poemSection.classList.add('content-visible');
        
        // Trigger AOS refresh for poem items
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, 500);
}

// Update goBackToSelection to handle poem section
function goBackToSelectionFromPoem() {
    const pageSelection = document.getElementById('page-selection');
    const poemSection = document.getElementById('poem-section');
    
    // Hide poem section with animation
    poemSection.style.transform = 'translateY(-50px)';
    poemSection.style.opacity = '0';
    
    setTimeout(() => {
        // Hide poem section
        poemSection.style.display = 'none';
        poemSection.classList.add('content-hidden');
        poemSection.classList.remove('content-visible');
        
        // Reset transform and opacity for next time
        poemSection.style.transform = '';
        poemSection.style.opacity = '';
        
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

// Enhanced goBackToSelection to handle all sections
function goBackToSelection() {
    const pageSelection = document.getElementById('page-selection');
    const contentSection = document.getElementById('content-section');
    const poemSection = document.getElementById('poem-section');
    const chanyGallery = document.getElementById('chany-gallery');
    const togetherGallery = document.getElementById('together-gallery');
    
    // Check which section is currently visible and hide it
    if (contentSection.classList.contains('content-visible')) {
        // Hide content section with animation
        contentSection.style.transform = 'translateY(-50px)';
        contentSection.style.opacity = '0';
        
        setTimeout(() => {
            contentSection.style.display = 'none';
            contentSection.classList.add('content-hidden');
            contentSection.classList.remove('content-visible');
            
            // Hide both galleries and reset their states
            chanyGallery.classList.add('content-hidden');
            chanyGallery.classList.remove('content-visible');
            togetherGallery.classList.add('content-hidden');
            togetherGallery.classList.remove('content-visible');
            
            // Reset transform and opacity for next time
            contentSection.style.transform = '';
            contentSection.style.opacity = '';
            
            showPageSelection();
        }, 500);
    } else if (poemSection.classList.contains('content-visible')) {
        // Hide poem section with animation
        poemSection.style.transform = 'translateY(-50px)';
        poemSection.style.opacity = '0';
        
        setTimeout(() => {
            poemSection.style.display = 'none';
            poemSection.classList.add('content-hidden');
            poemSection.classList.remove('content-visible');
            
            // Reset transform and opacity for next time
            poemSection.style.transform = '';
            poemSection.style.opacity = '';
            
            showPageSelection();
        }, 500);
    }
}

function showPageSelection() {
    const pageSelection = document.getElementById('page-selection');
    
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
}

// Music Control Functions
let musicPlaying = false;
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');

function toggleMusic() {
    if (musicPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.classList.add('paused');
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        musicPlaying = false;
    } else {
        backgroundMusic.play().catch(e => {
            console.log('Music play failed:', e.message);
            // Show a subtle notification that music file is missing
            showMusicNotification('Add background.mp3 to music folder 🎵');
        });
        musicToggle.classList.add('playing');
        musicToggle.classList.remove('paused');
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        musicPlaying = true;
    }
}

function showMusicNotification(message = 'Click to play music 🎵') {
    // Create a subtle notification for music
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: rgba(255, 107, 107, 0.9);
        color: white;
        padding: 10px 15px;
        border-radius: 20px;
        font-size: 0.9rem;
        z-index: 1001;
        animation: fadeInOut 3s ease-in-out forwards;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification) notification.remove();
    }, 3000);
}

// Auto-start music when user first interacts (after login)
document.addEventListener('click', function autoStartMusic() {
    if (!musicPlaying && backgroundMusic) {
        backgroundMusic.play().catch(e => {
            console.log('Music play failed - file may not exist yet');
            // Hide music button if no music file
            if (e.name === 'NotSupportedError') {
                document.querySelector('.music-control').style.display = 'none';
            }
        });
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        musicPlaying = true;
    }
    // Remove this listener after first interaction
    document.removeEventListener('click', autoStartMusic);
}, { once: true });

// Add fade in/out animation for music notification
const musicStyle = document.createElement('style');
musicStyle.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(10px); }
        20%, 80% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(musicStyle);