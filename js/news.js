// News functionality for Safari Match website
document.addEventListener("DOMContentLoaded", function () {
  initializeNews();
});

function initializeNews() {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  const modal = document.getElementById("news-modal");
  const closeModal = document.querySelector(".close-modal");

  if (!modal || !closeModal) {
    console.error("News modal elements not found");
    return;
  }

  // Add click event to all read more buttons
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.dataset.category;
      const id = this.dataset.id;
      showArticle(category, id);
    });
  });

  // Close modal when clicking the close button
  closeModal.addEventListener("click", function () {
    hideModal();
  });

  // Close modal when clicking outside the content
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      hideModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      hideModal();
    }
  });

  // News data is loaded dynamically when needed
}

function showArticle(category, id) {
  const modal = document.getElementById("news-modal");
  const modalContent = document.getElementById("modal-content");

  if (!modal || !modalContent) return;

  // Get article data
  const article = getArticleData(category, id);

  if (!article) {
    showError("Article not found");
    return;
  }

  // Populate modal content
  modalContent.innerHTML = `
        <h2>${article.title}</h2>
        <div class="article-meta">
            <p>Published: <time datetime="${article.date}">${formatDate(
    article.date
  )}</time></p>
            <p>Category: ${article.category}</p>
        </div>
        <div class="article-content">
            ${article.content}
        </div>
    `;

  // Show modal
  modal.style.display = "block";

  // Add animation class
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);

  // Focus management for accessibility
  modal.focus();

  // Prevent body scroll
  document.body.style.overflow = "hidden";
}

function hideModal() {
  const modal = document.getElementById("news-modal");

  if (!modal) return;

  // Remove animation class
  modal.classList.remove("show");

  // Hide modal after animation
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);

  // Restore body scroll
  document.body.style.overflow = "";

  // Return focus to the page
  document.querySelector(".news-hero").focus();
}

function getArticleData(category, id) {
  const articles = {
    updates: {
      1: {
        title: "Exciting New Features Released!",
        date: "2025-07-15",
        category: "Game Updates",
        content: `
                    <p>We're thrilled to announce the release of several exciting new features that will enhance your Safari Match experience!</p>
                    
                    <h3>New Animal Blocks</h3>
                    <p>Introducing three brand new animal blocks that will add variety and challenge to your gameplay:</p>
                    <ul>
                        <li><strong>Elephant Block:</strong> A powerful block that can clear entire rows when matched</li>
                        <li><strong>Giraffe Block:</strong> Tall and majestic, creates special combinations with other blocks</li>
                        <li><strong>Zebra Block:</strong> Striped beauty that activates chain reactions</li>
                    </ul>
                    
                    <h3>Enhanced Power-ups</h3>
                    <p>We've upgraded the existing power-ups and added new ones:</p>
                    <ul>
                        <li><strong>Lightning Strike:</strong> Clears all blocks of the same type</li>
                        <li><strong>Wild Wind:</strong> Shuffles the entire board for new opportunities</li>
                        <li><strong>Time Freeze:</strong> Gives you extra time to plan your moves</li>
                    </ul>
                    
                    <h3>Improved Graphics</h3>
                    <p>The visual experience has been significantly enhanced with:</p>
                    <ul>
                        <li>Higher resolution textures for all animal blocks</li>
                        <li>Improved particle effects for power-ups</li>
                        <li>Enhanced background animations</li>
                        <li>Better lighting and shadows</li>
                    </ul>
                    
                    <h3>Performance Improvements</h3>
                    <p>We've also made several under-the-hood improvements:</p>
                    <ul>
                        <li>Faster loading times</li>
                        <li>Reduced memory usage</li>
                        <li>Better frame rate on mobile devices</li>
                        <li>Improved touch responsiveness</li>
                    </ul>
                    
                    <p>These new features are available immediately for all players. We hope you enjoy the enhanced Safari Match experience!</p>
                `,
      },
      2: {
        title: "100+ New Levels Added!",
        date: "2025-07-10",
        category: "Game Updates",
        content: `
                    <p>Get ready for an even bigger safari adventure! We've added over 100 new levels that will challenge your puzzle-solving skills and take you deeper into the wilderness.</p>
                    
                    <h3>New Level Types</h3>
                    <p>Each new level introduces unique challenges and mechanics:</p>
                    <ul>
                        <li><strong>Forest Levels:</strong> Navigate through dense vegetation with limited visibility</li>
                        <li><strong>River Crossings:</strong> Use water elements to create special combinations</li>
                        <li><strong>Mountain Passes:</strong> Climb to new heights with elevation-based puzzles</li>
                        <li><strong>Desert Oases:</strong> Find hidden treasures in the arid landscape</li>
                    </ul>
                    
                    <h3>Advanced Objectives</h3>
                    <p>The new levels feature more complex goals:</p>
                    <ul>
                        <li>Multi-step objectives that require strategic planning</li>
                        <li>Time-based challenges for speed demons</li>
                        <li>Limited move puzzles that test efficiency</li>
                        <li>Hidden object searches throughout the levels</li>
                    </ul>
                    
                    <h3>New Obstacles</h3>
                    <p>Face fresh challenges with innovative obstacles:</p>
                    <ul>
                        <li><strong>Rock Barriers:</strong> Indestructible blocks that must be worked around</li>
                        <li><strong>Ice Blocks:</strong> Frozen elements that require multiple matches to thaw</li>
                        <li><strong>Vine Traps:</strong> Entangling obstacles that limit movement</li>
                        <li><strong>Sand Storms:</strong> Temporary visibility challenges</li>
                    </ul>
                    
                    <h3>Reward System</h3>
                    <p>Complete the new levels to earn exclusive rewards:</p>
                    <ul>
                        <li>Special animal skins and costumes</li>
                        <li>Unique power-up combinations</li>
                        <li>Hidden safari locations to unlock</li>
                        <li>Achievement badges for completion</li>
                    </ul>
                    
                    <p>Start your journey through these new levels today and discover what secrets the expanded safari world holds!</p>
                `,
      },
    },
    diaries: {
      1: {
        title: "Behind the Scenes: Creating the Safari World",
        date: "2025-07-08",
        category: "Trail Diaries",
        content: `
                    <p>Welcome to our first behind-the-scenes look at the creation of Safari Match! Today, we'll take you through the journey of how our team brought this wild adventure to life.</p>
                    
                    <h3>The Inspiration</h3>
                    <p>Our journey began with a simple question: "What if we could bring the magic of an African safari to a puzzle game?" The idea came to our lead designer, Sarah, during a family trip to Kenya. Watching elephants roam freely across the savanna, she realized that the natural world held endless possibilities for game mechanics.</p>
                    
                    <h3>The Design Process</h3>
                    <p>Creating Safari Match was a collaborative effort that spanned over 18 months:</p>
                    <ul>
                        <li><strong>Research Phase:</strong> Our team spent months studying African wildlife, ecosystems, and landscapes</li>
                        <li><strong>Concept Development:</strong> We created hundreds of sketches and prototypes</li>
                        <li><strong>Art Direction:</strong> Finding the perfect balance between realistic and stylized graphics</li>
                        <li><strong>Sound Design:</strong> Recording authentic African sounds and creating immersive audio</li>
                    </ul>
                    
                    <h3>Technical Challenges</h3>
                    <p>We faced several technical hurdles during development:</p>
                    <ul>
                        <li>Optimizing graphics for mobile devices while maintaining visual quality</li>
                        <li>Creating smooth animations that work across different screen sizes</li>
                        <li>Implementing the match-3 mechanics with safari-themed elements</li>
                        <li>Ensuring cross-platform compatibility</li>
                    </ul>
                    
                    <h3>Community Involvement</h3>
                    <p>Throughout development, we involved our community in key decisions:</p>
                    <ul>
                        <li>Beta testing with over 1,000 players</li>
                        <li>Community polls for feature prioritization</li>
                        <li>Regular feedback sessions and surveys</li>
                        <li>Player suggestion implementation</li>
                    </ul>
                    
                    <h3>Looking Forward</h3>
                    <p>This is just the beginning of our safari adventure. We have many more features, levels, and experiences planned. Our team is constantly inspired by the natural world and our amazing community of players.</p>
                    
                    <p>Thank you for joining us on this journey through the wild!</p>
                `,
      },
      2: {
        title: "Community Spotlight: Player Stories",
        date: "2025-07-05",
        category: "Trail Diaries",
        content: `
                    <p>One of the most rewarding aspects of creating Safari Match has been getting to know our incredible community of players. Today, we want to share some of their inspiring stories with you.</p>
                    
                    <h3>Emma's Story: Finding Joy in Difficult Times</h3>
                    <p>Emma, a 34-year-old teacher from Manchester, discovered Safari Match during a particularly challenging period in her life. "I was going through a difficult divorce and struggling with anxiety," she shares. "The peaceful safari setting and engaging puzzles became my daily escape. I'd play for an hour each evening, and it helped me find moments of calm and joy."</p>
                    
                    <p>Emma has now completed over 500 levels and credits the game with helping her develop better problem-solving skills. "It's amazing how a simple puzzle game can teach you to approach life's challenges differently," she says.</p>
                    
                    <h3>David's Journey: From Casual to Competitive</h3>
                    <p>David, a 28-year-old software developer from London, started playing Safari Match casually but quickly became hooked on the competitive aspects. "I love trying to beat my own high scores and discovering new strategies," he explains. "The game has a perfect balance of accessibility and depth."</p>
                    
                    <p>David has created several strategy guides for the community and regularly participates in our weekly challenges. "The community aspect is fantastic. I've made friends with players from around the world who share my passion for puzzle games."</p>
                    
                    <h3>Family Fun: The Thompson Family</h3>
                    <p>The Thompson family from Birmingham has made Safari Match a part of their daily routine. Parents James and Lisa play alongside their 8-year-old daughter, Mia, and 12-year-old son, Tom. "It's wonderful to have a game that we can all enjoy together," says Lisa. "Mia loves the cute animals, Tom enjoys the strategic challenges, and James and I appreciate the relaxing atmosphere."</p>
                    
                    <p>They've even created their own family tournament system, keeping score of who can complete levels the fastest. "It's become a fun way to spend quality time together," James adds.</p>
                    
                    <h3>Accessibility Champion: Maria's Mission</h3>
                    <p>Maria, a 42-year-old accessibility advocate from Glasgow, has been instrumental in helping us improve Safari Match for players with different needs. "As someone with limited mobility, I appreciate games that are accessible and inclusive," she explains. "The team has been incredibly responsive to feedback about accessibility features."</p>
                    
                    <p>Thanks to Maria's input, we've added features like customizable touch sensitivity, high contrast mode, and voice navigation support. "It's heartwarming to see developers who genuinely care about making their games accessible to everyone," she says.</p>
                    
                    <h3>Join the Community</h3>
                    <p>These stories represent just a small sample of our amazing community. Whether you're a casual player looking for relaxation or a competitive gamer seeking challenges, there's a place for you in the Safari Match family.</p>
                    
                    <p>Share your own story with us on our community forums, and who knows? You might be featured in our next community spotlight!</p>
                `,
      },
    },
  };

  return articles[category]?.[id] || null;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function showError(message) {
  const modal = document.getElementById("news-modal");
  const modalContent = document.getElementById("modal-content");

  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
        <h2>Error</h2>
        <p>${message}</p>
        <button onclick="hideModal()" class="cta-button">Close</button>
    `;

  modal.style.display = "block";
}

// Add smooth scrolling for news page navigation
function initializeNewsNavigation() {
  const newsLinks = document.querySelectorAll('a[href^="#"]');

  newsLinks.forEach((link) => {
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
}

// Initialize news navigation
document.addEventListener("DOMContentLoaded", initializeNewsNavigation);

// Performance monitoring for news page
if ("performance" in window) {
  window.addEventListener("load", function () {
    const perfData = performance.getEntriesByType("navigation")[0];
    if (perfData) {
      console.log(
        "News page load time:",
        perfData.loadEventEnd - perfData.loadEventStart,
        "ms"
      );
    }
  });
}

// Export functions for use in other modules
window.NewsManager = {
  showArticle,
  hideModal,
  getArticleData,
};
