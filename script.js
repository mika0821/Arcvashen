const roomGalleryMap = {
  standard: [
    "assets/standard-room-1.svg",
    "assets/standard-room-2.svg",
    "assets/standard-room-3.svg"
  ],
  comfort: [
    "assets/comfort-room-1.svg",
    "assets/comfort-room-2.svg",
    "assets/comfort-room-3.svg"
  ],
  family: [
    "assets/family-room-1.svg",
    "assets/family-room-2.svg",
    "assets/family-room-3.svg"
  ],
  vip: [
    "assets/vip-room-1.svg",
    "assets/vip-room-2.svg",
    "assets/vip-room-3.svg"
  ]
};

const translations = {
  hy: {
    brandName: "Arcvashen",
    navAbout: "Մեր մասին",
    navRooms: "Սենյակներ",
    navRestaurant: "Ռեստորան",
    navLocation: "Տեղակայություն",
    navContact: "Կապ",
    heroEyebrow: "Հյուրանոց և ռեստորան Հայաստանում",
    heroTitle: "Հանգիստ վայր հարմարավետ գիշերակացի և ջերմ հյուրասիրության համար։",
    heroText: "Պրոֆեսիոնալ և հյուրընկալ հյուրանոց-ռեստորան հյուրերի համար, ովքեր գնահատում են մաքրությունը, հանգիստ սպասարկումը և ավանդական հյուրընկալությունը։",
    heroButtonRooms: "Դիտել սենյակները",
    heroButtonRestaurant: "Ռեստորան",
    heroCardTitle: "Հարմարավետ հանգիստ",
    heroCardText: "Հանգիստ սենյակներ, թարմ սնունդ, հարգալից սպասարկում",
    trustOneTitle: "Մաքուր սենյակներ",
    trustOneText: "Խնամքով պատրաստված յուրաքանչյուր հյուրի համար։",
    trustTwoTitle: "Ռեստորան տեղում",
    trustTwoText: "Նախաճաշ, ճաշ, ընթրիք և հայկական ուտեստներ։",
    trustThreeTitle: "Ընտանիքների համար հարմար",
    trustThreeText: "Հանգիստ մթնոլորտ բոլոր տարիքի հյուրերի համար։",
    aboutEyebrow: "Միջավայրի մասին",
    aboutTitle: "Հյուրընկալություն՝ հանգիստ և դասական բնավորությամբ։",
    aboutTextOne: "Հյուրանոցը նախատեսված է այն հյուրերի համար, ովքեր նախընտրում են մաքուր, հարգալից և խաղաղ միջավայր՝ աղմկոտ կամ չափազանց ժամանակակից դիզայնի փոխարեն։",
    aboutTextTwo: "Հյուրերը կարող են մնալ հարմարավետ սենյակներում, վայելել ռեստորանը և հեշտությամբ գտնել հիմնական տեղեկությունները շատ պարզ և մոբայլի համար հարմար կայքում։",
    aboutBoxTitle: "Պարզ։ Մաքուր։ Հարգալից։",
    aboutBoxText: "Տեսողական ոճը կառուցված է ջերմ գույների, ընթեռնելի տեքստի և մեղմ շարժման վրա՝ պրոֆեսիոնալ զգացողության համար։",
    roomsEyebrow: "Սենյակներ",
    roomsTitle: "Ընտրեք սենյակը, որը համապատասխանում է ձեր այցին։",
    roomsIntro: "Սեղմեք ցանկացած սենյակի վրա՝ դրա նկարները բացելու համար և նույն էկրանին սահեցրեք՝ ավելին տեսնելու համար։",
    roomViewPhotos: "Դիտել նկարները",
    restaurantEyebrow: "Ռեստորան",
    restaurantTitle: "Ջերմ ճաշատեսակներ՝ հանգիստ ռեստորանային մթնոլորտում։",
    restaurantText: "Ռեստորանը կարող է ներկայացնել նախաճաշ, ճաշ, ընթրիք, հայկական ուտեստներ և ընտանեկան հյուրասիրություններ։ Կառուցվածքը մաքուր է, որպեսզի հատկապես տարիքով հյուրերը արագ գտնեն անհրաժեշտ տեղեկատվությունը։",
    restaurantPointOneTitle: "Ավանդական մենյու",
    restaurantPointOneText: "Տեղական ուտեստներ և ծանոթ համեր։",
    restaurantPointTwoTitle: "Ընտանեկան միջավայր",
    restaurantPointTwoText: "Հանգիստ նստատեղեր և հարգալից սպասարկում։",
    restaurantPointThreeTitle: "Միջոցառումներ հնարավոր են",
    restaurantPointThreeText: "Հարմար փոքր հավաքների համար։",
    galleryEyebrow: "Մթնոլորտ",
    galleryTitle: "Կայք, որը հենց առաջին հայացքից փոխանցում է հանգիստ տրամադրություն։",
    galleryOneTitle: "Հանգստացնող սենյակներ",
    galleryTwoTitle: "Ջերմ հյուրասիրություն",
    galleryThreeTitle: "Հայկական միջավայր",
    locationEyebrow: "Տեղակայություն",
    locationTitle: "Գտնվում է Հայաստանում։",
    locationText: "Պատրաստ լինելուց հետո այս տեղում փոխարինեք ճշգրիտ հասցեն։ Հետագայում կարող է ավելացվել նաև քարտեզ։",
    addressLabel: "Հասցե",
    addressValue: "Հայաստան — ճշգրիտ հասցեն այստեղ",
    contactEyebrow: "Կապ",
    contactTitle: "Կոնտակտային տվյալներ",
    contactIntro: "Այս բաժինը նախատեսված է հեռախոսահամարների և պարզ կոնտակտային տվյալների համար։ Հետագայում կարող եք փոխարինել դրանք իրական տվյալներով։",
    contactPhoneLabel: "Հեռախոս",
    contactPhoneValue: "+374 00 00 00 00",
    contactPhoneHint: "Հիմնական ընդունարան",
    contactMobileLabel: "Բջջային / WhatsApp",
    contactMobileValue: "+374 00 00 00 00",
    contactMobileHint: "Արագ հարցերի և ամրագրման համար",
    contactEmailLabel: "Էլ. հասցե",
    contactEmailValue: "info@arcvashen.am",
    contactEmailHint: "Ընդհանուր տեղեկատվություն և հարցումներ",
    footerText: "Հյուրանոց և ռեստորան Հայաստանում",
    backToTop: "Վերև",
    modalLabel: "Սենյակի նկարներ",
    modalClose: "Փակել",
    modalPrevious: "Նախորդ",
    modalNext: "Հաջորդ",
    rooms: [
      {
        key: "standard",
        title: "Ստանդարտ սենյակ",
        description: "Հարմար տարբերակ կարճ այցերի և հանգիստ գիշերակացի համար։",
        cover: "assets/room-standard.svg",
        guests: "1–2 հյուր",
        bed: "1 մահճակալ",
        price: "Գինը՝ հարցման դեպքում"
      },
      {
        key: "comfort",
        title: "Կոմֆորտ սենյակ",
        description: "Ավելի ընդարձակ սենյակ՝ լրացուցիչ հարմարավետությամբ ձեր հանգստի համար։",
        cover: "assets/room-comfort.svg",
        guests: "2 հյուր",
        bed: "1 կամ 2 մահճակալ",
        price: "Գինը՝ հարցման դեպքում"
      },
      {
        key: "family",
        title: "Ընտանեկան սենյակ",
        description: "Գործնական ընտրություն ընտանիքների և ավելի երկար կացության համար։",
        cover: "assets/room-family.svg",
        guests: "3–4 հյուր",
        bed: "2 մահճակալ",
        price: "Գինը՝ հարցման դեպքում"
      },
      {
        key: "vip",
        title: "VIP սենյակ",
        description: "Ամենահանգիստ, առավել ընդարձակ և ներկայացուցչական տարբերակը։",
        cover: "assets/room-vip.svg",
        guests: "2–3 հյուր",
        bed: "Մեծ մահճակալ",
        price: "Գինը՝ հարցման դեպքում"
      }
    ]
  },
  ru: {
    brandName: "Arcvashen",
    navAbout: "О нас",
    navRooms: "Номера",
    navRestaurant: "Ресторан",
    navLocation: "Расположение",
    navContact: "Контакты",
    heroEyebrow: "Отель и ресторан в Армении",
    heroTitle: "Спокойное место для комфортного проживания и тёплого гостеприимства.",
    heroText: "Профессиональный и гостеприимный отель-ресторан для гостей, которые ценят чистоту, спокойный сервис и традиционное армянское гостеприимство.",
    heroButtonRooms: "Смотреть номера",
    heroButtonRestaurant: "Ресторан",
    heroCardTitle: "Комфортное проживание",
    heroCardText: "Тихие номера, свежая еда, уважительное обслуживание",
    trustOneTitle: "Чистые номера",
    trustOneText: "Подготовлены с вниманием для каждого гостя.",
    trustTwoTitle: "Ресторан на месте",
    trustTwoText: "Завтрак, обед, ужин и армянские блюда.",
    trustThreeTitle: "Подходит для семей",
    trustThreeText: "Спокойная атмосфера для гостей любого возраста.",
    aboutEyebrow: "О месте",
    aboutTitle: "Гостеприимство со спокойным и классическим характером.",
    aboutTextOne: "Отель создан для гостей, которые предпочитают чистую, уважительную и спокойную атмосферу вместо шумного или слишком современного дизайна.",
    aboutTextTwo: "Гости могут остановиться в удобных номерах, посетить ресторан и легко найти основную информацию на простом сайте, удобном для мобильных устройств.",
    aboutBoxTitle: "Просто. Чисто. Уважительно.",
    aboutBoxText: "Визуальный стиль использует тёплые цвета, читаемый текст и мягкую анимацию для профессионального ощущения.",
    roomsEyebrow: "Номера",
    roomsTitle: "Выберите номер, который подходит именно вам.",
    roomsIntro: "Нажмите на любой номер, чтобы открыть его фотографии и листать их на том же экране.",
    roomViewPhotos: "Смотреть фото",
    restaurantEyebrow: "Ресторан",
    restaurantTitle: "Тёплые блюда в спокойной атмосфере ресторана.",
    restaurantText: "Ресторан может представить завтрак, обед, ужин, армянские блюда и семейные ужины. Макет остаётся чистым, чтобы особенно гостям старшего возраста было легко найти нужную информацию.",
    restaurantPointOneTitle: "Традиционное меню",
    restaurantPointOneText: "Местные блюда и знакомые вкусы.",
    restaurantPointTwoTitle: "Семейная атмосфера",
    restaurantPointTwoText: "Спокойные посадочные места и уважительное обслуживание.",
    restaurantPointThreeTitle: "Возможны мероприятия",
    restaurantPointThreeText: "Подходит для небольших встреч.",
    galleryEyebrow: "Атмосфера",
    galleryTitle: "Сайт, который с первого взгляда вызывает спокойствие.",
    galleryOneTitle: "Спокойные номера",
    galleryTwoTitle: "Тёплая кухня",
    galleryThreeTitle: "Армянская атмосфера",
    locationEyebrow: "Расположение",
    locationTitle: "Находится в Армении.",
    locationText: "Когда будете готовы, замените этот текст точным адресом. Позже сюда можно добавить и карту.",
    addressLabel: "Адрес",
    addressValue: "Армения — точный адрес здесь",
    contactEyebrow: "Контакты",
    contactTitle: "Контактная информация",
    contactIntro: "Этот раздел предназначен только для телефонных номеров и простых контактных данных. Позже вы можете заменить шаблон на реальные данные.",
    contactPhoneLabel: "Телефон",
    contactPhoneValue: "+374 00 00 00 00",
    contactPhoneHint: "Основной номер ресепшн",
    contactMobileLabel: "Мобильный / WhatsApp",
    contactMobileValue: "+374 00 00 00 00",
    contactMobileHint: "Для быстрых вопросов и бронирования",
    contactEmailLabel: "Email",
    contactEmailValue: "info@arcvashen.am",
    contactEmailHint: "Общая информация и запросы",
    footerText: "Отель и ресторан в Армении",
    backToTop: "Наверх",
    modalLabel: "Фотографии номера",
    modalClose: "Закрыть",
    modalPrevious: "Предыдущее",
    modalNext: "Следующее",
    rooms: [
      {
        key: "standard",
        title: "Стандартный номер",
        description: "Удобный вариант для коротких визитов и спокойной ночи.",
        cover: "assets/room-standard.svg",
        guests: "1–2 гостя",
        bed: "1 кровать",
        price: "Цена по запросу"
      },
      {
        key: "comfort",
        title: "Комфорт номер",
        description: "Более просторный номер с дополнительным удобством для вашего отдыха.",
        cover: "assets/room-comfort.svg",
        guests: "2 гостя",
        bed: "1 или 2 кровати",
        price: "Цена по запросу"
      },
      {
        key: "family",
        title: "Семейный номер",
        description: "Практичный выбор для семей и более длительного проживания.",
        cover: "assets/room-family.svg",
        guests: "3–4 гостя",
        bed: "2 кровати",
        price: "Цена по запросу"
      },
      {
        key: "vip",
        title: "VIP номер",
        description: "Самый спокойный, просторный и представительский вариант.",
        cover: "assets/room-vip.svg",
        guests: "2–3 гостя",
        bed: "Большая кровать",
        price: "Цена по запросу"
      }
    ]
  },
  en: {
    brandName: "Arcvashen",
    navAbout: "About",
    navRooms: "Rooms",
    navRestaurant: "Restaurant",
    navLocation: "Location",
    navContact: "Contact",
    heroEyebrow: "Hotel & Restaurant in Armenia",
    heroTitle: "A calm place for comfortable stays and warm hospitality.",
    heroText: "A professional, welcoming hotel and restaurant created for guests who value cleanliness, quiet service, and traditional hospitality.",
    heroButtonRooms: "View rooms",
    heroButtonRestaurant: "Restaurant",
    heroCardTitle: "Comfortable stay",
    heroCardText: "Quiet rooms, fresh food, respectful service",
    trustOneTitle: "Clean rooms",
    trustOneText: "Prepared carefully for every guest.",
    trustTwoTitle: "Restaurant on-site",
    trustTwoText: "Breakfast, lunch, dinner, and Armenian dishes.",
    trustThreeTitle: "Good for families",
    trustThreeText: "Peaceful atmosphere for all ages.",
    aboutEyebrow: "About the place",
    aboutTitle: "Hospitality with a calm and classic character.",
    aboutTextOne: "The hotel is designed for guests who prefer a clean, respectful, and peaceful atmosphere instead of loud or overly modern design.",
    aboutTextTwo: "Guests can stay in comfortable rooms, enjoy meals in the restaurant, and easily understand the main information from a very simple mobile-friendly website.",
    aboutBoxTitle: "Simple. Clean. Respectful.",
    aboutBoxText: "The visual style uses warm colors, readable text, and soft movement for a professional feeling.",
    roomsEyebrow: "Rooms",
    roomsTitle: "Choose the room that fits your visit.",
    roomsIntro: "Tap any room to open its photos and swipe through more images on the same screen.",
    roomViewPhotos: "View photos",
    restaurantEyebrow: "Restaurant",
    restaurantTitle: "Warm meals in a quiet restaurant atmosphere.",
    restaurantText: "The restaurant can present breakfast, lunch, dinner, Armenian dishes, and private family meals. The layout is clean so older guests can quickly find the information they need.",
    restaurantPointOneTitle: "Traditional menu",
    restaurantPointOneText: "Local dishes and familiar flavors.",
    restaurantPointTwoTitle: "Family friendly",
    restaurantPointTwoText: "Calm seating and respectful service.",
    restaurantPointThreeTitle: "Events possible",
    restaurantPointThreeText: "Suitable for small gatherings.",
    galleryEyebrow: "Atmosphere",
    galleryTitle: "A website that feels calm from the first look.",
    galleryOneTitle: "Restful rooms",
    galleryTwoTitle: "Warm dining",
    galleryThreeTitle: "Armenian setting",
    locationEyebrow: "Location",
    locationTitle: "Located in Armenia.",
    locationText: "Replace this placeholder with the exact address when you are ready. A map section can also be added later.",
    addressLabel: "Address",
    addressValue: "Armenia — exact address here",
    contactEyebrow: "Contact",
    contactTitle: "Contact information",
    contactIntro: "This section is for phone numbers and simple contact details only. You can replace the placeholders with the real details later.",
    contactPhoneLabel: "Phone",
    contactPhoneValue: "+374 00 00 00 00",
    contactPhoneHint: "Main reception number",
    contactMobileLabel: "Mobile / WhatsApp",
    contactMobileValue: "+374 00 00 00 00",
    contactMobileHint: "For quick booking questions",
    contactEmailLabel: "Email",
    contactEmailValue: "info@arcvashen.am",
    contactEmailHint: "General information and requests",
    footerText: "Hotel & Restaurant in Armenia",
    backToTop: "Back to top",
    modalLabel: "Room gallery",
    modalClose: "Close",
    modalPrevious: "Previous",
    modalNext: "Next",
    rooms: [
      {
        key: "standard",
        title: "Standard Room",
        description: "A comfortable choice for short visits and a peaceful night.",
        cover: "assets/room-standard.svg",
        guests: "1–2 guests",
        bed: "1 bed",
        price: "Price on request"
      },
      {
        key: "comfort",
        title: "Comfort Room",
        description: "A more spacious room with extra comfort for your stay.",
        cover: "assets/room-comfort.svg",
        guests: "2 guests",
        bed: "1 or 2 beds",
        price: "Price on request"
      },
      {
        key: "family",
        title: "Family Room",
        description: "A practical choice for families and longer stays.",
        cover: "assets/room-family.svg",
        guests: "3–4 guests",
        bed: "2 beds",
        price: "Price on request"
      },
      {
        key: "vip",
        title: "VIP Suite",
        description: "A quiet, spacious, and more representative room category.",
        cover: "assets/room-vip.svg",
        guests: "2–3 guests",
        bed: "Large bed",
        price: "Price on request"
      }
    ]
  }
};

const roomGrid = document.getElementById("roomGrid");
const langButtons = document.querySelectorAll("[data-lang]");
const menuButton = document.querySelector(".menu-button");
const mainNav = document.getElementById("mainNav");
const menuScrim = document.getElementById("menuScrim");
const supportedLanguages = Object.keys(translations);
const roomModal = document.getElementById("roomModal");
const modalCloseButton = document.getElementById("modalCloseButton");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalRoomTitle");
const modalLabel = document.getElementById("modalRoomLabel");
const modalCounter = document.getElementById("modalCounter");
const modalThumbs = document.getElementById("modalThumbs");
const modalMeta = document.getElementById("modalMeta");
const modalImageWrap = document.getElementById("modalImageWrap");
const backToTopButton = document.getElementById("backToTopButton");
const footerTopLink = document.getElementById("footerTopLink");

let currentLanguage = "hy";
let activeRoomIndex = 0;
let activeGalleryIndex = 0;
let touchStartX = 0;

function getSavedLanguage() {
  const saved = localStorage.getItem("hotelLanguage");
  return supportedLanguages.includes(saved) ? saved : "hy";
}

function getCurrentDictionary() {
  return translations[currentLanguage];
}

function translateStaticText(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.title = `${dictionary.brandName} | Hotel & Restaurant`;
}

function renderRooms(language) {
  const dictionary = translations[language];
  roomGrid.innerHTML = dictionary.rooms
    .map(
      (room, index) => `
        <article class="room-card reveal ${index === 1 ? "delay-1" : index > 1 ? "delay-2" : ""}">
          <img src="${room.cover}" alt="${room.title}" loading="lazy" />
          <div class="room-card-body">
            <h3>${room.title}</h3>
            <p>${room.description}</p>
            <div class="room-meta" aria-label="Room details">
              <span>${room.guests}</span>
              <span>${room.bed}</span>
              <span>${room.price}</span>
            </div>
            <button class="button tertiary room-open-button" type="button" data-room-index="${index}">${dictionary.roomViewPhotos}</button>
          </div>
        </article>
      `
    )
    .join("");
}

function setLanguage(language) {
  currentLanguage = language;
  translateStaticText(language);
  renderRooms(language);
  localStorage.setItem("hotelLanguage", language);

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  if (roomModal.classList.contains("open")) {
    openRoomGallery(activeRoomIndex, activeGalleryIndex);
  }

  startRevealObserver();
}

function closeMobileMenu() {
  mainNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
  menuScrim.hidden = true;
}

function toggleMobileMenu() {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
  menuScrim.hidden = !isOpen;
}

function getActiveRoom() {
  return translations[currentLanguage].rooms[activeRoomIndex];
}

function renderModalThumbs(gallery) {
  modalThumbs.innerHTML = gallery
    .map(
      (image, index) => `
        <button type="button" class="room-thumb ${index === activeGalleryIndex ? "active" : ""}" data-thumb-index="${index}" aria-label="${index + 1}">
          <img src="${image}" alt="Thumbnail ${index + 1}" />
        </button>
      `
    )
    .join("");
}

function renderModalMeta(room) {
  modalMeta.innerHTML = `
    <span>${room.guests}</span>
    <span>${room.bed}</span>
    <span>${room.price}</span>
  `;
}

function updateModalImage() {
  const dictionary = getCurrentDictionary();
  const room = getActiveRoom();
  const gallery = roomGalleryMap[room.key];
  const total = gallery.length;
  const currentImage = gallery[activeGalleryIndex];

  modalLabel.textContent = dictionary.modalLabel;
  modalTitle.textContent = room.title;
  modalImage.src = currentImage;
  modalImage.alt = `${room.title} ${activeGalleryIndex + 1}`;
  modalCounter.textContent = `${activeGalleryIndex + 1} / ${total}`;
  modalCloseButton.setAttribute("aria-label", dictionary.modalClose);
  modalPrev.setAttribute("aria-label", dictionary.modalPrevious);
  modalNext.setAttribute("aria-label", dictionary.modalNext);

  renderModalThumbs(gallery);
  renderModalMeta(room);
}

function openRoomGallery(roomIndex, imageIndex = 0) {
  activeRoomIndex = roomIndex;
  activeGalleryIndex = imageIndex;
  roomModal.classList.add("open");
  roomModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  updateModalImage();
}

function closeRoomGallery() {
  roomModal.classList.remove("open");
  roomModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function stepGallery(direction) {
  const room = getActiveRoom();
  const total = roomGalleryMap[room.key].length;
  activeGalleryIndex = (activeGalleryIndex + direction + total) % total;
  updateModalImage();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleSmoothAnchorClick(event) {
  const link = event.currentTarget;
  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  const target = document.querySelector(href);
  if (!target) return;
  event.preventDefault();
  closeMobileMenu();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startRevealObserver() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

menuButton.addEventListener("click", toggleMobileMenu);
menuScrim.addEventListener("click", closeMobileMenu);

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", handleSmoothAnchorClick);
});

document.addEventListener("click", (event) => {
  const openButton = event.target.closest(".room-open-button");
  if (openButton) {
    openRoomGallery(Number(openButton.dataset.roomIndex));
  }

  const thumbButton = event.target.closest(".room-thumb");
  if (thumbButton) {
    activeGalleryIndex = Number(thumbButton.dataset.thumbIndex);
    updateModalImage();
  }

  if (event.target.matches("[data-modal-close]")) {
    closeRoomGallery();
  }
});

modalCloseButton.addEventListener("click", closeRoomGallery);
modalPrev.addEventListener("click", () => stepGallery(-1));
modalNext.addEventListener("click", () => stepGallery(1));

modalImageWrap.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

modalImageWrap.addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0].screenX;
  const delta = touchEndX - touchStartX;
  if (Math.abs(delta) < 40) return;
  if (delta < 0) {
    stepGallery(1);
  } else {
    stepGallery(-1);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (roomModal.classList.contains("open")) {
      closeRoomGallery();
    }
    closeMobileMenu();
  }

  if (!roomModal.classList.contains("open")) return;

  if (event.key === "ArrowRight") {
    stepGallery(1);
  }

  if (event.key === "ArrowLeft") {
    stepGallery(-1);
  }
});

window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("visible", window.scrollY > 520);
});

backToTopButton.addEventListener("click", scrollToTop);
footerTopLink.addEventListener("click", scrollToTop);

setLanguage(getSavedLanguage());
startRevealObserver();
