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
            { "text": "Chat GPT", "href": "https://chatgpt.com/" }
          ]
        },
        {
          "name": "Digital On",
          "links": [
            { "text": "Click Up", "href": "https://app.clickup.com/9015783623/home" },
            { "text": "Blue Host", "href": "https://www.bluehost.com/my-account/login" },
            { "text": "Digital ON GDrive", "href": "https://drive.google.com/drive/u/8/home" },
            { "text": "Link #8", "href": "" }
          ]
        },
        {
          "name": "AI Tool",
          "links": [
            { "text": "Chat GPT", "href": "https://chatgpt.com/" },
            { "text": "Gemini", "href": "https://gemini.google.com/" },
            { "text": "Link@11", "href": "" },
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
            { "text": "Icons8", "href": "https://icons8.it/icons" },
            { "text": "Canva", "href": "https://canva.com" }
          ]
        },
        {
          "name": "",
          "links": [
            { "text": "Link #5", "href": "" },
            { "text": "Link #6", "href": "" },
            { "text": "Link #7", "href": "" },
            { "text": "Link #8", "href": "" }
          ]
        },
        {
          "name": "Category 3",
          "links": [
            { "text": "Link #9", "href": "" },
            { "text": "Link #10", "href": "" },
            { "text": "Link #11", "href": "" },
            { "text": "Link #12", "href": "" }
          ]
        },
        {
          "name": "Category 4",
          "links": [
            { "text": "Link #13", "href": "" },
            { "text": "Link #14", "href": "" },
            { "text": "Link #15", "href": "" },
            { "text": "Link #16", "href": "" }
          ]
        },
        {
          "name": "Category 5",
          "links": [
            { "text": "Link #17", "href": "" },
            { "text": "Link #18", "href": "" },
            { "text": "Link #19", "href": "" },
            { "text": "Link #20", "href": "" }
          ]
        },
        {
          "name": "Category 6",
          "links": [
            { "text": "Link #21", "href": "" },
            { "text": "Link #22", "href": "" },
            { "text": "Link #23", "href": "" },
            { "text": "Link #24", "href": "" }
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
