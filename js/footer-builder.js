// Footer Builder for Safari Match website
document.addEventListener("DOMContentLoaded", function () {
  buildFooter();
});

function buildFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");

  if (!footerPlaceholder) {
    console.error("Footer placeholder not found");
    return;
  }

  const currentYear = new Date().getFullYear();

  const footer = document.createElement("footer");
  footer.className = "main-footer";
  footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <h3>Legal</h3>
                <ul class="footer-links">
                    <li><a href="./privacy-safari.html">Privacy Policy</a></li>
                    <li><a href="./cookies-safari.html">Cookie Policy</a></li>
                    <li><a href="./disclaimer-safari.html">Disclaimer</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Contact Information</h3>
                <div class="contact-info">
                    <p><strong>Email:</strong> <a href="mailto:contact@nextlevelquesting.com" class="contact-link">contact@nextlevelquesting.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+447675221234" class="contact-link">+44 767 522 1234</a></p>
                    <p><strong>Address:</strong> <span class="address-text contact-link">10 Downing Street, London, SW1A 2AA, United Kingdom</span></p>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p class="copyright">&copy; ${currentYear} Nextlevelquesting.com. All rights reserved.</p>
            </div>
        </div>
    `;

  footerPlaceholder.appendChild(footer);

  // Add footer styles
  addFooterStyles();

  // Initialize footer interactions
  initializeFooterInteractions();
}

function addFooterStyles() {
  const style = document.createElement("style");
  style.textContent = `
        .main-footer {
            background: linear-gradient(135deg, var(--bg-dark) 0%, var(--primary-color) 100%);
            color: var(--text-light);
            padding: 0;
            margin-top: var(--spacing-xl);
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: var(--spacing-xl) var(--spacing-sm);
            display: flex;
            flex-wrap: wrap;
            gap: var(--spacing-lg);
        }
        
        .footer-section {
            flex: 1;
            min-width: 250px;
        }
        
        .footer-section h3 {
            color: var(--accent-color);
            margin-bottom: var(--spacing-md);
            font-size: 1.25rem;
            font-weight: 600;
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: var(--spacing-xs);
        }
        
        .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .footer-links li {
            margin-bottom: var(--spacing-xs);
        }
        
        .footer-links a {
            color: var(--text-light);
            text-decoration: none;
            transition: color var(--transition-fast);
            display: inline-block;
            padding: var(--spacing-xs) 0;
        }
        
        .footer-links a:hover {
            color: var(--accent-color);
            transform: translateX(5px);
            transition: all var(--transition-fast);
        }
        
        .contact-info p {
            margin-bottom: var(--spacing-xs);
            line-height: 1.5;
        }
        
        .contact-info a {
            color: white;
            text-decoration: none;
            transition: color var(--transition-fast);
        }
        
        .contact-info a:hover {
            color: var(--accent-color);
        }
        
        .address-text {
            color: white;
        }
        
        /* Footer-specific contact styles */
        .main-footer .contact-info p {
            color: white;
        }
        
        .main-footer .contact-info strong {
            color: white;
        }
        
        .main-footer .contact-info a {
            color: white !important;
        }
        
        .main-footer .contact-info a:hover {
            color: var(--accent-color) !important;
        }
        
        .social-links {
            display: flex;
            gap: var(--spacing-md);
        }
        
        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: var(--text-light);
            text-decoration: none;
            transition: all var(--transition-normal);
            border: 2px solid transparent;
        }
        
        .social-link:hover {
            background: var(--accent-color);
            color: var(--text-primary);
            transform: translateY(-3px);
            border-color: var(--text-light);
        }
        
        .footer-bottom {
            background: rgba(0, 0, 0, 0.3);
            border-top: 1px solid var(--accent-color);
            padding: var(--spacing-md) 0;
        }
        
        .footer-bottom-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing-sm);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: var(--spacing-sm);
            text-align: center;
        }
        
        .copyright {
            margin: 0;
            color: var(--text-light);
            font-size: 0.9rem;
        }
        

        
        /* Responsive Design */
        @media (max-width: 1280px) {
            .footer-content {
                gap: var(--spacing-md);
            }
            
            .footer-section {
                min-width: 220px;
            }
        }
        
        @media (max-width: 768px) {
            .footer-content {
                padding: var(--spacing-lg) var(--spacing-sm);
                gap: var(--spacing-md);
            }
            
            .footer-section {
                min-width: 200px;
                flex: 1 1 calc(50% - var(--spacing-md));
            }
            
            .footer-section h3 {
                font-size: 1.125rem;
                margin-bottom: var(--spacing-sm);
            }
            
            .footer-bottom-content {
                flex-direction: column;
                text-align: center;
                gap: var(--spacing-xs);
            }
        }
        
        @media (max-width: 360px) {
            .footer-content {
                padding: var(--spacing-md) var(--spacing-sm);
                gap: var(--spacing-sm);
            }
            
            .footer-section {
                min-width: 180px;
                flex: 1 1 100%;
            }
            
            .footer-section h3 {
                font-size: 1rem;
                margin-bottom: var(--spacing-xs);
            }
            
            .footer-links a {
                font-size: 0.9rem;
                padding: var(--spacing-xs) 0;
            }
            
            .contact-info p {
                font-size: 0.9rem;
                line-height: 1.4;
            }
            
            .social-link {
                width: 35px;
                height: 35px;
            }
            
            .copyright,
            .powered-by {
                font-size: 0.85rem;
            }
        }
        
        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            .social-link {
                border-width: 1px;
            }
        }
        
        /* Focus states for accessibility */
        .footer-links a:focus,
        .contact-info a:focus,
        .social-link:focus {
            outline: 2px solid var(--accent-color);
            outline-offset: 2px;
        }
        
        /* Print styles */
        @media print {
            .main-footer {
                background: white !important;
                color: black !important;
                border-top: 2px solid #ccc;
            }
            
            .footer-section h3 {
                color: black !important;
                border-bottom-color: #ccc;
            }
            
            .footer-links a,
            .contact-info a {
                color: black !important;
            }
            
            .social-links {
                display: none;
            }
        }
        
        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
            .footer-links a,
            .social-link {
                transition: none;
            }
            
            .footer-links a:hover {
                transform: none;
            }
            
            .social-link:hover {
                transform: none;
            }
        }
    `;

  document.head.appendChild(style);
}

function initializeFooterInteractions() {
  // Add smooth scrolling for footer links
  const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');

  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Add hover effects for social links
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.1)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Update copyright year automatically
function updateCopyrightYear() {
  const copyrightElement = document.querySelector(".copyright");
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = `&copy; ${currentYear} Nextlevelquesting.com. All rights reserved.`;
  }
}

// Call update function on page load
document.addEventListener("DOMContentLoaded", updateCopyrightYear);
