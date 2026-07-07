
        // Smooth scroll and active navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

        // Handle navigation clicks
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }

                // Update active state
                navLinks.forEach(l => {
                    l.classList.remove('active', 'text-gray-900', 'font-medium', 'border-l-3', 'border-blue-500', 'pl-7');
                    l.classList.add('text-gray-600');
                });
                link.classList.add('active', 'text-gray-900', 'font-medium');
                link.classList.remove('text-gray-600');
            });
        });

        // Update active nav on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active', 'text-gray-900', 'font-medium');
                link.classList.add('text-gray-600');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active', 'text-gray-900', 'font-medium');
                    link.classList.remove('text-gray-600');
                }
            });
        });

        // Add random animation delays to decorative shapes
        const shapes = document.querySelectorAll('.decorative-shape');
        shapes.forEach((shape, i) => {
            shape.style.animationDelay = `${i * 0.5}s`;
        });

    //    SLIDER

    const slides = [
        {
            img: "assets/images/mu-landingpage.png",
            tags: ["Online Marketplace", "Multipage Website","Responsive"], // Add your custom tags here
            title: "Lucson - Freelance Marketplace",
          link: "#project1",
          wa: "https://wa.me/123456789"
        },
        {
            img: "assets/images/REUTIB.png",
            tags: ["Multipage Website","Responsive"], // Add your custom tags here
            title: "Reutter GmbH",
          link: "#project2",
          wa: "https://wa.me/987654321"
        },
        {
            img: "assets/images/reutter",
            tags: ["Landing Page","Responsive"], // Add your custom tags here
            title: "Automotive Battery Vent",
          link: "#project3",
          wa: "https://wa.me/112233445"
        },
        {
            img: "assets/images/payment.png",
            tags: ["Mobile Application","Mobile Only"], // Add your custom tags here
            title: "Secure Payment",
          link: "#project3",
          wa: "https://wa.me/112233445"
        },
        {
            img: "assets/images/consultant.png",
            tags: ["Multipage Website","Responsive"], // Add your custom tags here
            title: "Empowering Legal",
          link: "#project3",
          wa: "https://wa.me/112233445"
        },
        {
            img: "assets/images/startup.png",
            tags: ["Landing Page","Responsive"], // Add your custom tags here
            title: "Sell Your Startup",
          link: "#project3",
          wa: "https://wa.me/112233445"
        },
        {
            img: "assets/images/Campuscredit.png",
            tags: ["Saas Project","Responsive"], // Add your custom tags here
            title: "CampusCredit",
          link: "#project3",
          wa: "https://wa.me/112233445"
        },
        {
            img: "assets/images/coolinghoses.png",
            tags: ["Landing Page","Responsive"], // Add your custom tags here
            title: "Cooling Hoses and Pipes",
          link: "#project3",
          wa: "https://wa.me/112233445"
        }
    ];
      
      let currentIndex = 0;
      const duration = 5000; 
      let elapsed = 0;
      let isPaused = false;
      let lastTime = Date.now();
      let timerInterval = null;
      
      function updateSlider() {
        const imgElement = document.getElementById('slide-img');
        const titleElement = document.getElementById('slide-title');
        const linkElement = document.getElementById('slide-link');
        const whatsappElement = document.getElementById('slide-whatsapp');
        const counterElement = document.getElementById('slide-counter');
        const tagsElement = document.getElementById('slide-tags'); // Targeted tags container
      
        if (imgElement && titleElement && linkElement && whatsappElement && counterElement && tagsElement) {
          const current = slides[currentIndex];
          
          // Update Content
          imgElement.src = current.img;
          titleElement.innerText = current.title;
          linkElement.href = current.link;
          whatsappElement.href = current.wa;
          counterElement.innerText = `${currentIndex + 1} / ${slides.length}`;
      
          // Update Tags dynamically using your Tailwind design architecture
          tagsElement.innerHTML = current.tags
            .map(tag => `<span class="bg-black text-white px-3 py-1 rounded-full">${tag}</span>`)
            .join('');
        }
        elapsed = 0; 
        lastTime = Date.now();
      }
      
      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
      }
      
      function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
      }
      
      function animateProgressBar() {
        if (timerInterval) clearInterval(timerInterval);
        
        timerInterval = setInterval(() => {
          const now = Date.now();
          const delta = now - lastTime;
          lastTime = now;
      
          if (!isPaused) {
            elapsed += delta;
            let percentage = (elapsed / duration) * 100;
            
            if (percentage >= 100) {
              percentage = 0;
              nextSlide();
            }
            const progressBar = document.getElementById('progress-bar');
            if (progressBar) progressBar.style.width = `${percentage}%`;
          }
        }, 30);
      }
      
      function initSliderWhenReady() {
        const checkExist = setInterval(() => {
          const sliderWindow = document.getElementById('slider-window');
          
          if (sliderWindow) {
            clearInterval(checkExist);
      
            sliderWindow.addEventListener('mouseenter', () => isPaused = true);
            sliderWindow.addEventListener('mouseleave', () => {
              isPaused = false;
              lastTime = Date.now();
            });
      
            updateSlider();
            animateProgressBar();
          }
        }, 50);
      }
      
      initSliderWhenReady();
        

        // PROCESS

        const stepItems = document.querySelectorAll('.proc-v-item');
        const mainImage = document.getElementById('proc-display-img');
        
        const images = [
            "assets/images/discovery.png",
            "assets/images/wireframes and flow.png",
            "assets/images/visual designs.png",
            "assets/images/prototype.png",
            "assets/images/handoff.png"
        ];

        let procIndex = 0;

        function nextStep() {
            // Remove active status from all
            stepItems.forEach(item => {
                item.classList.remove('active');
                const title = item.querySelector('.proc-v-title');
                title.classList.remove('text-slate-900');
                title.classList.add('text-gray-300');
            });

            // Set current step active
            const current = stepItems[procIndex];
            current.classList.add('active');
            const currentTitle = current.querySelector('.proc-v-title');
            currentTitle.classList.remove('text-gray-300');
            currentTitle.classList.add('text-slate-900');

            // Swap Image
            mainImage.style.opacity = '0';
            mainImage.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                mainImage.src = images[procIndex];
                mainImage.style.opacity = '1';
                mainImage.style.transform = 'scale(1)';
            }, 300);

            // Increment index
            procIndex = (procIndex + 1) % stepItems.length;
        }

        // Run initially and then every 5 seconds
        nextStep();
        setInterval(nextStep, 5000);


        // FAQ
        function contact_screen_toggle_faq(clickedElement) {
            const targetContainer = clickedElement.parentElement;
            const isTargetOpen = targetContainer.classList.contains('faq_sec_open');
            
            // Mutually collapse other open nodes cleanly
            document.querySelectorAll('.faq_sec_group').forEach(groupNode => {
                groupNode.classList.remove('faq_sec_open');
            });
            
            // Toggle open execution state flag
            if (!isTargetOpen) {
                targetContainer.classList.add('faq_sec_open');
            }
        }

        // Technical Questions

        function contact_screen_toggle_techQ(clickedElement) {
            const techQContainer = clickedElement.parentElement;
            const istechQOpen = techQContainer.classList.contains('techQ_sec_open');
            
            // Mutually collapse other open nodes cleanly
            document.querySelectorAll('.techQ_sec_group').forEach(groupNode => {
                groupNode.classList.remove('techQ_sec_open');
            });
            
            // Toggle open execution state flag
            if (!istechQOpen) {
                techQContainer.classList.add('techQ_sec_open');
            }
        }
//   mobile menu

const menuToggle = document.getElementById('menu-toggle');
const sidebarMenu = document.getElementById('sidebar-menu');
const navMenu = document.getElementById('nav-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

menuToggle.addEventListener('click', () => {
    // Show/hide mobile links
    navMenu.classList.toggle('hidden');
    // Switch between hamburger and X close icon
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
