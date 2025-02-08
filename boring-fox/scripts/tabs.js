/* ==========================================
    TABS AND BOOKMARKS CONFIG
========================================== */

const DATA = {
  "tabs": [
    {
      "id": "content1",
      "label": "1",
      "categories": [
        {
          "name": "Productivity",
          "links": [
            { "text": "Click Up", "href": "https://app.clickup.com/9012429639/home" }, 
            { "text": "Calendar", "href": "https://calendar.google.com/calendar/u/0/r/week" },
            { "text": "Personal GDrive", "href": "https://drive.google.com/drive/u/0/my-drive" },
            { "text": "Dillinger", "href": "https://dillinger.io/" }
          ]
        },
        {
          "name": "Digital On",
          "links": [
            { "text": "Click Up", "href": "https://app.clickup.com/9015783623/home" },
            { "text": "Blue Host", "href": "https://www.bluehost.com/my-account/login" },
            { "text": "Digital ON GDrive", "href": "https://drive.google.com/drive/u/8/home" },
            { "text": "Go High Level", "href": "https://www.gohighlevel.com/main-page" }
          ]
        },
        {
          "name": "AI Tool",
          "links": [
            { "text": "Chat GPT", "href": "https://chatgpt.com/" },
            { "text": "Gemini", "href": "https://gemini.google.com/" },
            { "text": "Google AI Studio", "href": "" },
            { "text": "Link #12", "href": "" }
          ]
        },
        {
          "name": "University",
          "links": [
            { "text": "e-Learning", "href": "https://elearning.di.unipi.it/" },
            { "text": "Valutami", "href": "https://esami.unipi.it/auth/session.php" },
            { "text": "MatLab", "href": "https://matlab.mathworks.com/" },
            { "text": "Portale Alice", "href": "https://www.studenti.unipi.it/Home.do" }
          ]
        },
        {
          "name": "Finance",
          "links": [
            { "text": "Home Banking", "href": "https://homebanking.bpergroup.net//wps/portal/hb/home/ibpr/sec/login/login?bank=05387&channel=IBPR&a=1&_ga=2.248626126.83323429.1609262983-1963081641.1609262983" },
            { "text": "PayPal", "href": "https://paypal.me/NiccoFulgaro" },
            { "text": "CoinBase", "href": "https://www.coinbase.com/home" },
            { "text": "Wallet Budget Manager", "href": "https://web.budgetbakers.com/dashboard" }
          ]
        },
        {
          "name": "Entertainment",
          "links": [
            { "text": "Spotify", "href": "https://open.spotify.com" },
            { "text": "Youtube", "href": "https://www.youtube.com/" },
            { "text": "Prime Video", "href": "https://www.primevideo.com/" },
            { "text": "Instagram", "href": "https://instagram.com" }
          ]
        }
      ]
    },
    {
      "id": "content2",
      "label": "2",
      "categories": [
        {
          "name": "Web Dev",
          "links": [
            { "text": "Dribble", "href": "https://dribbble.com/" },
            { "text": "Coloors", "href": "https://coolors.co/" },
            { "text": "CSS Gradient", "href": "https://cssgradient.io/" },
            { "text": "Canva", "href": "https://canva.com" }
          ]
        },
        {
          "name": "",
          "links": [
            { "text": "Icons8", "href": "https://icons8.it/icons" },
            { "text": "Mockey Mockups", "href": "https://mockey.ai/mockups" },
            { "text": "Vecteezy", "href": "https://it.vecteezy.com/" },
            { "text": "SVG Icons", "href": "https://fontawesomeicons.com/svg/icons?search=arrow+drop+down" }
          ]
        },
        {
          "name": "TV",
          "links": [
            { "text": "Prime Video", "href": "https://www.primevideo.com/" },
            { "text": "Straming Community", "href": "https://streamingcommunity.paris/" },
            { "text": "Rai Play", "href": "https://www.raiplay.it/" },
            { "text": "Google List", "href": "https://www.google.com/interests/saved" }
          ]
        },
        {
          "name": "Social",
          "links": [
            { "text": "Instagram", "href": "https://www.instagram.com/" },
            { "text": "Reddit", "href": "https://www.reddit.com/" },
            { "text": "Whatsapp", "href": "https://web.whatsapp.com/" },
            { "text": "Telegram", "href": "https://web.telegram.org/" }
          ]
        },
        {
          "name": "Dev",
          "links": [
            { "text": "Git Hub", "href": "https://github.com/" },
            { "text": "Netlify", "href": "https://app.netlify.com/" },
            { "text": "Google Collab", "href": "https://colab.research.google.com/" },
            { "text": "Vault", "href": "https://portal.cloud.hashicorp.com/orgs/91e40d80-c1ce-492a-bdfb-295b40011f05/projects/af39de1f-dec2-4ec8-8e05-f3b84c4942f8" }
          ]
        },
        // {
        //   "name": "Shopping",
        //   "links": [
        //     { "text": "Amazon", "href": "https://www.amazon.it/" },
        //     { "text": "Zalando Privé", "href": "https://www.zalando-prive.it/" },
        //     { "text": "Asos", "href": "https://www.asos.com/it/" },
        //     { "text": "Trova Prezzi", "href": "https://www.trovaprezzi.it/" }
        //   ]
        // },
        {
          "name": "Utils",
          "links": [
            { "text": "Tini Wow PDF", "href": "https://tinywow.com/" },
            { "text": "Soundiiz", "href": "https://soundiiz.com/webapp/playlists" },
            { "text": "Temp Mail", "href": "https://adguard.com/it/adguard-temp-mail/overview.html" },
            { "text": "Flat Hub - Linux Store", "href": "https://flathub.org/home" }
          ]
        }
      ]
    },
    {
      "id": "content3",
      "label": "3"
    },
    {
      "id": "content4",
      "label": "4"
    }
  ]
}

function populateTabs() {
    const tabs = document.getElementById("tab-group");
    const container = document.querySelector(".container");
    
    DATA.tabs.forEach(tabData => {
        const tab = document.createElement("button");
        tab.className = "tab";
        tab.textContent = tabData.label;
        tab.addEventListener("click", showContent);
        tab.dataset.contentId = tabData.id;
        tabs.appendChild(tab);
        
        const content = document.getElementById(tabData.id);
        if (!content) {
            const bookmarksDiv = document.createElement("div");
            bookmarksDiv.className = "content";
            bookmarksDiv.id = tabData.id;
            container.appendChild(bookmarksDiv);
        }
    });
    
    const defaultTab = document.querySelector('.tab[data-content-id="content1"]');
    if (defaultTab) showContent({ currentTarget: defaultTab });
}

async function populateContent(contentId) {
    const tabData = DATA.tabs.find(tab => tab.id === contentId);
    const contentElement = document.getElementById(contentId);
    
    if (!tabData || !contentElement) return;
    
    const columns = contentElement.getElementsByClassName("column");
    
    // Clear previous content in columns
    Array.from(columns).forEach(column => (column.innerHTML = ""));
    
    tabData.categories.forEach((category, i) => {
        const j = Math.floor(i / 2);
        if (columns[j]) {
            const html = `
                <li>
                    <span class="folder">${category.name}</span>
                    <ul class="sub-list">
                        ${category.links.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
                    </ul>
                </li>
            `;
            const bookmarksContainer = document.createElement("div");
            bookmarksContainer.className = "bookmarks-container";
            bookmarksContainer.innerHTML = `<ul class="bookmark-list">${html}</ul>`;
            columns[j].appendChild(bookmarksContainer);
        }
    });
}

function showContent(event) {
    const contentId = event.currentTarget.dataset.contentId;
    const contents = document.getElementsByClassName("content");
    
    Array.from(contents).forEach(content => {
        content.style.display = "none";
    });
    
    const contentElement = document.getElementById(contentId);
    if (!contentElement.dataset.populated) {
        populateContent(contentId);
        contentElement.dataset.populated = "true";
    }
    contentElement.style.display = "block";
    
    const tabs = document.getElementsByClassName("tab");
    Array.from(tabs).forEach(tab => tab.classList.remove("active"));
    event.currentTarget.classList.add("active");
}


// Loads the bookmarks for the tabs
populateTabs();
