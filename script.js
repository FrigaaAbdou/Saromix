
    // Select hamburger icon and nav links container
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    // Toggle the 'nav-active' class when the hamburger is clicked
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
    });

    window.addEventListener('load', function() {
      // When the page is fully loaded, add the 'hide' class to the loader
      const loader = document.getElementById('loader');
      loader.classList.add('hide');
      // Optionally, you can remove it from the DOM after the transition:
      setTimeout(() => {
        loader.parentNode.removeChild(loader);
      }, 600); // Adjust timing if needed (must be slightly longer than the CSS transition)
    });

      // Only load the video on larger screens
      if (window.innerWidth > 768) {
        const video = document.createElement('video');
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'metadata';
        video.className = 'hero-video';
        video.poster = 'fallback-image.jpg';
    
        const source = document.createElement('source');
        source.src = 'saromix-clip.mp4';
        source.type = 'video/mp4';
        video.appendChild(source);
    
        document.querySelector('.hero').prepend(video);
      }