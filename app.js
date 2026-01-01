// Add CSS for animated alert
const style = document.createElement('style');
style.innerHTML = `
    .animated-alert {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 20px 25px;
        border-radius: 8px;
        font-family: Arial, sans-serif;
        font-size: 18px;
        font-weight: bold;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        opacity: 0;
        transform: translateX(400px) scale(0.5);
        transition: all 0.5s ease-out;
        max-width: 400px;
    }
    
    .animated-alert.show {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
    
    .alert-success {
        background-color: #fd3535ff;
        color: white;
        border-left: 5px solid #45a049;
    }
`;
document.head.appendChild(style);

// Animated Alert Function
function showAnimatedAlert(message, type = 'success') {
    // Create alert container
    const alertContainer = document.createElement('div');
    alertContainer.className = `animated-alert alert-${type}`;
    alertContainer.innerHTML = message;
    
    // Add to page
    document.body.appendChild(alertContainer);
    
    // Trigger animation
    setTimeout(() => {
        alertContainer.classList.add('show');
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        alertContainer.classList.remove('show');
        setTimeout(() => {
            alertContainer.remove();
        }, 400);
    }, 3000);
}

// Show welcome alert when page loads
window.addEventListener('load', function() {
    showAnimatedAlert('Welcome to this page!', 'success');
});
