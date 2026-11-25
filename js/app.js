// ==================== СЛОВАРЬ ПЕРЕВОДОВ (RU / ÖZ на новом алфавите) ====================
const I18N = {
  ru: {
    auth_title: "Вход в рабочее пространство",
    auth_desc: "Единая платформа тюторов с синхронизацией HEMIS и Google Drive.",
    login_label: "ЛОГИН ПРОФИЛЯ",
    pass_label: "ПАРОЛЬ",
    login_btn: "Войти в кабинет",
    nav_dashboard: "Обзор",
    nav_students: "Студенты и HEMIS",
    nav_telegram: "Telegram и Отчеты",
    nav_diaries: "Дневники",
    nav_profile: "Профиль и CV",
    nav_calendar: "Календарь и Блог",
    nav_users: "Пользователи",
    dash_sub: "Сводная аналитика воспитательной и тюторской деятельности",
    kpi_students: "ВСЕГО СТУДЕНТОВ",
    kpi_posts: "ПОСТЫ В TELEGRAM",
    kpi_gdoc_ready: "Готово к Google Doc",
    kpi_volunteers: "ВОЛОНТЕРЫ",
    kpi_monitoring: "МОНИТОРИНГ / СОЦРЕЕСТР",
    chart_activity_title: "Активность постов и мероприятий",
    chart_activity_sub: "Динамика публикаций и воспитательной работы по месяцам",
    chart_dist_title: "Распределение студентов",
    dist_housing: "По жилью",
    dist_social: "По соцреестру",
    dist_gender: "По полу (М/Ж)",
    students_title: "Студенты и HEMIS",
    btn_sync_hemis: "Синхронизировать с tyutor.hemis.uz",
    btn_add_student: "Добавить студента",
    sub_all_students: "Все студенты",
    sub_housing: "Жилье",
    sub_social: "Социальный реестр",
    sub_volunteers: "Волонтеры",
    sub_schedule: "Расписание (HEMIS)",
    tg_title: "Telegram-архив и Генератор отчетов",
    tg_sub: "Импорт постов из t.me/studlifeuniv с сортировкой по датам и выгрузкой в Google Docs",
    tg_add_post: "Добавить пост по ссылке",
    btn_load_post: "Загрузить пост",
    report_builder: "Конструктор отчета (Google Doc)",
    report_sub: "Отбор публикаций строго в рамках выбранного периода и категорий",
    period_from: "ПЕРИОД С",
    period_to: "ПЕРИОД ПО",
    report_tag_filter: "КАТЕГОРИЯ ТЕГОВ",
    btn_send_gdoc: "Перенести в Google Doc",
    diaries_title: "Дневники мониторинга и работы с родителями",
    diaries_sub: "Индивидуальная воспитательная работа, фиксация результатов и архив наблюдений",
    tab_monitoring: "Мониторинг студентов",
    tab_parents: "Работа с родителями",
    profile_title: "Личный профиль и Авто-CV",
    profile_sub: "Данные синхронизируются с Google Drive и автоматически формируют резюме",
    btn_print_cv: "Печать / PDF CV",
    profile_form_title: "Анкета сотрудника / тютора",
    upload_photo: "Загрузить фото",
    cal_title: "Календарь событий и Личный дневник",
    cal_sub: "Планирование мероприятий, напоминания и свободные заметки тютора",
    btn_add_event: "Добавить событие",
    blog_title: "Личный мини-блог и To-Do",
    btn_save_note: "Сохранить запись",
    users_title: "Управление профилями и паролями",
    users_sub: "Создание новых кабинетов, привязка папок Google Drive и сброс паролей",
    btn_new_user: "Открыть новый профиль"
  },
  oz: {
    auth_title: "Kabinetga kiriş",
    auth_desc: "HEMIS va Google Drive bilan sinxronlaşgan yagona tyutorlar platformasi.",
    login_label: "PROFIL LOGINI",
    pass_label: "PAROL",
    login_btn: "Kabinetga kiriş",
    nav_dashboard: "Umumiy köriniş",
    nav_students: "Talabalar va HEMIS",
    nav_telegram: "Telegram va Hisobotlar",
    nav_diaries: "Kundaliklar",
    nav_profile: "Profil va CV",
    nav_calendar: "Taqvim va Blog",
    nav_users: "Foydalanuvçilar",
    dash_sub: "Tarbiyaviy va tyutorlik faoliyatining yiğma tahlili",
    kpi_students: "JAMI TALABALAR",
    kpi_posts: "TELEGRAM POSTLARI",
    kpi_gdoc_ready: "Google Doc uşun tayyor",
    kpi_volunteers: "VOLONTYORLAR",
    kpi_monitoring: "MONITORING / IJTIMOIY REESTR",
    chart_activity_title: "Postlar va tadbirlar faolligi",
    chart_activity_sub: "Oylar böyiça naşrlar va tarbiyaviy işlar dinamikasi",
    chart_dist_title: "Talabalar taqsimoti",
    dist_housing: "Turar joy böyiça",
    dist_social: "Ijtimoiy reestr",
    dist_gender: "Jinsi böyiça (E/A)",
    students_title: "Talabalar va HEMIS",
    btn_sync_hemis: "tyutor.hemis.uz bilan sinxronlaş",
    btn_add_student: "Talaba qöşiş",
    sub_all_students: "Barça talabalar",
    sub_housing: "Turar joy",
    sub_social: "Ijtimoiy reestr",
    sub_volunteers: "Volontyorlar",
    sub_schedule: "Dars jadvali (HEMIS)",
    tg_title: "Telegram arxivi va Hisobotlar konstruktori",
    tg_sub: "t.me/studlifeuniv postlarini sanalar böyiça saralaş va Google Docs ga çiqariş",
    tg_add_post: "Havola orqali post qöşiş",
    btn_load_post: "Postni yuklaş",
    report_builder: "Hisobot konstruktori (Google Doc)",
    report_sub: "Tanlangan davr va toifalar doirasida postlarni saralaş",
    period_from: "DAVR DAN",
    period_to: "DAVR GAÇA",
    report_tag_filter: "TEGLAR TOIFASI",
    btn_send_gdoc: "Google Doc ga ötkaziş",
    diaries_title: "Monitoring va ota-onalar bilan işlaş kundaliklari",
    diaries_sub: "Individual tarbiyaviy işlar, natijalarni qayd etiş va kuzatuvlar arxivi",
    tab_monitoring: "Talabalar monitoringi",
    tab_parents: "Ota-onalar bilan işlaş",
    profile_title: "Şaxsiy profil va Avto-CV",
    profile_sub: "Ma’lumotlar Google Drive bilan sinxronlanadi va avtomatik CV yaratadi",
    btn_print_cv: "Çop etiş / PDF CV",
    profile_form_title: "Xodim / tyutor anketasi",
    upload_photo: "Rasm yuklaş",
    cal_title: "Tadbirlar taqvimi va Şaxsiy kundalik",
    cal_sub: "Tadbirlarni rejalashtiriş, eslatmalar va tyutorning erkin qaydları",
    btn_add_event: "Tadbir qöşiş",
    blog_title: "Şaxsiy mini-blog va To-Do",
    btn_save_note: "Qaydni saqlaş",
    users_title: "Profillar va parollarni boşqariş",
    users_sub: "Yangi kabinetlar oçiş, Google Drive papkalarini biriktiriş va parollarni tiklaş",
    btn_new_user: "Yangi profil oçiş"
  }
};

const STORAGE_KEY = "mytutors_uz_state_v3";
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyTLIm6lvnKEE2Ol1JlylHM3QCuhJu_-7Cz0eB_8xBhsFdOhBUQmQ8FrZR4b2hPUq4y/exec";

function syncToGoogleDrive() {
  if (!currentUser || !APPS_SCRIPT_URL.includes("/exec")) return;
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      action: "saveUserData",
      userId: currentUser.id,
      data: appState
    })
  }).catch(() => {});
}

// ==================== ПРЕДУСТАНОВЛЕННЫЕ 16 ПРОФИЛЕЙ (БЕЗ СЛУЧАЙНЫХ СТУДЕНТОВ) ====================
const DEFAULT_USERS = [
  { id: "admin", login: "admin", pass: "admin2026", name: "Зафар Вахобов", role: "admin", roleTitle: "Главный администратор", dept: "Отдел по работе со студентами", groups: "Все группы", driveFolder: "MyTutors_Root_Master", phone: "+998 90 100 00 01", email: "z.vakhobov@univ-silkroad.uz", edu: "Магистр, НИР (ВАК)", bio: "Координация тюторской службы, цифровой мониторинг и студенческие медиа-проекты.", photo: "" },
  { id: "head", login: "head", pass: "head2026", name: "Гульмира Рашидова", role: "management", roleTitle: "Начальница отдела", dept: "Отдел по работе со студентами", groups: "Все группы", driveFolder: "MyTutors_Management_Head", phone: "+998 90 100 00 02", email: "g.rashidova@univ-silkroad.uz", edu: "Высшее педагогическое", bio: "Руководство отделом по работе со студентами и координация воспитательных программ.", photo: "" },
  { id: "dean", login: "dean", pass: "dean2026", name: "Баходир Тураев", role: "management", roleTitle: "Декан факультета", dept: "Факультет туризма и культурного наследия", groups: "Все группы", driveFolder: "MyTutors_Dean_Office", phone: "+998 90 100 00 03", email: "b.turaev@univ-silkroad.uz", edu: "Кандидат наук, доцент", bio: "Контроль успеваемости, дисциплины и социальной поддержки студентов факультета.", photo: "" },
  { id: "staff", login: "staff", pass: "staff2026", name: "Дилноза Хасанова", role: "management", roleTitle: "Сотрудница отдела", dept: "Отдел по работе со студентами", groups: "Все группы", driveFolder: "MyTutors_Staff_Monitor", phone: "+998 90 100 00 04", email: "d.khasanova@univ-silkroad.uz", edu: "Высшее", bio: "Мониторинг сводных отчетов, волонтерских групп и реестра общежитий.", photo: "" },
  { id: "tutor1", login: "tutor1", pass: "t12026", name: "Ш. Зайнидинова", role: "tutor", roleTitle: "Тютор", dept: "Факультет туризма", groups: "TR-101, TR-102", driveFolder: "MyTutors_Private_Tutor_01", phone: "+998 90 201 01 01", email: "sh.zaynidinova@univ-silkroad.uz", edu: "Высшее", bio: "Тютор академических групп TR-101 и TR-102.", photo: "" },
  { id: "tutor2", login: "tutor2", pass: "t22026", name: "М. Рахимбердиева", role: "tutor", roleTitle: "Тютор", dept: "Факультет менеджмента", groups: "MH-201, MH-202", driveFolder: "MyTutors_Private_Tutor_02", phone: "+998 90 201 01 02", email: "m.rahimberdiyeva@univ-silkroad.uz", edu: "Высшее", bio: "Тютор академических групп MH-201 и MH-202.", photo: "" },
  { id: "tutor3", login: "tutor3", pass: "t32026", name: "М. Абдурахманова", role: "tutor", roleTitle: "Тютор", dept: "Факультет культурного наследия", groups: "GD-301, GD-302", driveFolder: "MyTutors_Private_Tutor_03", phone: "+998 90 201 01 03", email: "m.abduraxmanova@univ-silkroad.uz", edu: "Высшее", bio: "Тютор академических групп GD-301 и GD-302.", photo: "" },
  { id: "tutor4", login: "tutor4", pass: "t42026", name: "Д. Каримов", role: "tutor", roleTitle: "Тютор", dept: "Факультет гостиничного дела", groups: "HT-101, HT-201", driveFolder: "MyTutors_Private_Tutor_04", phone: "", email: "", edu: "Высшее", bio: "", photo: "" },
  { id: "tutor5", login: "tutor5", pass: "t52026", name: "Н. Саидова", role: "tutor", roleTitle: "Тютор", dept: "Факультет туризма", groups: "TR-201, TR-202", driveFolder: "MyTutors_Private_Tutor_05", phone: "", email: "", edu: "Высшее", bio: "", photo: "" },
  { id: "tutor6", login: "tutor6", pass: "t62026", name: "А. Усманов", role: "tutor", roleTitle: "Тютор", dept: "Факультет менеджмента", groups: "MG-301, MG-302", driveFolder: "MyTutors_Private_Tutor_06", phone: "", email: "", edu: "Высшее", bio: "", photo: "" },
  { id: "tutor7", login: "tutor7", pass: "t72026", name: "Ф. Холматова", role: "tutor", roleTitle: "Тютор", dept: "Факультет археологии", groups: "AR-101, AR-102", driveFolder: "MyTutors_Private_Tutor_07", phone: "", email: "", edu: "Высшее", bio: "", photo: "" },
  { id: "tutor8", login: "tutor8", pass: "t82026", name: "С. Исмоилов", role: "tutor", roleTitle: "Тютор", dept: "Факультет гидов", groups: "GD-201, GD-202", driveFolder: "MyTutors_Private_Tutor_08", phone: "", email: "", edu: "Высшее", bio: "", photo: "" },
  { id: "tutor9", login: "tutor9", pass: "t92026", name: "З. Назарова", role: "tutor", roleTitle: "Тютор", dept: "Факультет менеджмента", groups: "MH-101, MH-102", driveFolder: "MyTutors_Private_Tutor_09", phone: "", email: "", edu: "Высшее", bio: "", photo: "" },
  { id: "tutor10", login: "tutor10", pass: "t102026", name: "О. Рустамов", role: "tutor", roleTitle: "Тютор", dept: "Факультет гостиничного дела", groups: "HT-301, HT-302", driveFolder: "MyTutors_Private_Tutor_10", phone: "", email: "", edu: "Высшее", bio: "", photo: "" },
  { id: "tutor11", login: "tutor11", pass: "t112026", name: "Л. Шарипова", role: "tutor", roleTitle: "Тютор", dept: "Факультет туризма", groups: "TR-301, TR-302", driveFolder: "MyTutors_Private_Tutor_11", phone: "", email: "", edu: "Высшее", bio: "", photo: "" },
  { id: "tutor12", login: "tutor12", pass: "t122026", name: "Б. Юлдашев", role: "tutor", roleTitle: "Тютор", dept: "Факультет менеджмента", groups: "MG-101, MG-102", driveFolder: "MyTutors_Private_Tutor_12", phone: "", email: "", edu: "Высшее", bio: "", photo: "" }
];

const TG_TAGS = [
  "#Ma'rifatUlashib", "#YashilMakon", "#HealthWeek", "#BeshTashabbus",
  "#Munozara", "#YoshlarKuni", "#TalabalarHayoti", "#Ekologiya", "#Sport"
];

const SOCIAL_CATEGORIES = [
  "Сироты", "Инвалидность", "Железная тетрадь", "Женская тетрадь", "Малообеспеченные"
];

const VOLUNTEER_DIRECTIONS = [
  "Не состоит", "Эко-волонтеры", "Волонтеры Приемной кампании", "Медиа-волонтеры", "Культурно-массовый сектор"
];

const MONITORING_CATEGORIES = [
  "Курение", "Хиджаб", "Борода", "Прогулы", "Другое..."
];

const RELATIVE_TYPES = [
  "Мать", "Отец", "Дедушка", "Бабушка", "Тётя", "Дядя", "Брат", "Сестра", "Отчим", "Мачеха", "Другое..."
];

// Начальное состояние: база студентов, постов и дневников полностью чистая — тюторы заполняют сами
let appState = loadState();
let currentUser = null;
let currentLang = "ru";
let activeTab = "dashboard";
let activeStudentSubtab = "all";
let activeHousingFilter = "all";
let activeDiarySubtab = "monitoring";
let activeMonitoringFilter = "active";
let activeTgTagFilter = "all";
let selectedNewPostTags = ["#TalabalarHayoti"];
let distChartMode = "housing";
let distSelectedGroup = "all";

let dashFilters = { tutor: "all", course: "all", group: "all", gender: "all" };
let calYear = 2026;
let calMonth = 10; // Ноябрь (0-indexed)
let selectedCalDate = "2026-11-26";

let activityChartInstance = null;
let distChartInstance = null;
let tempFamilyMembers = [];

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        users: parsed.users || JSON.parse(JSON.stringify(DEFAULT_USERS)),
        students: parsed.students || [],
        tgPosts: parsed.tgPosts || [],
        monitoring: parsed.monitoring || [],
        parentMeetings: parsed.parentMeetings || [],
        schedule: parsed.schedule || [],
        calendarEvents: parsed.calendarEvents || [],
        blogPosts: parsed.blogPosts || []
      };
    }
  } catch (e) {}
  return {
    users: JSON.parse(JSON.stringify(DEFAULT_USERS)),
    students: [],
    tgPosts: [],
    monitoring: [],
    parentMeetings: [],
    schedule: [],
    calendarEvents: [],
    blogPosts: []
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));

  function syncToGoogleDrive() {
    if (!currentUser || !APPS_SCRIPT_URL.includes("/exec")) return;
    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        action: "saveUserData",
        userId: currentUser.id,
        data: appState
      })
    }).catch(() => {});
  }

  syncToGoogleDrive();
}

// ==================== УНИВЕРСАЛЬНОЕ ПОДТВЕРЖДЕНИЕ ПЕРЕД УДАЛЕНИЕМ ====================
let pendingDeleteCallback = null;

function askConfirmDelete(anchorBtn, onConfirm, customMessage) {
  const popover = document.getElementById("confirmPopover");
  const textEl = document.getElementById("confirmPopoverText");
  textEl.textContent = customMessage || (currentLang === "oz" ? "Rostdan ham öçirmoqçimisiz?" : "Вы точно хотите удалить?");
  pendingDeleteCallback = onConfirm;

  popover.classList.remove("hidden");
  const rect = anchorBtn.getBoundingClientRect();
  const popWidth = 220;
  let left = rect.left + rect.width / 2 - popWidth / 2;
  if (left < 12) left = 12;
  if (left + popWidth > window.innerWidth - 12) left = window.innerWidth - popWidth - 12;

  let top = rect.top - popover.offsetHeight - 8;
  if (top < 12) top = rect.bottom + 8;

  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
}

document.getElementById("confirmYesBtn").addEventListener("click", () => {
  document.getElementById("confirmPopover").classList.add("hidden");
  if (typeof pendingDeleteCallback === "function") {
    pendingDeleteCallback();
    pendingDeleteCallback = null;
  }
});

document.getElementById("confirmNoBtn").addEventListener("click", () => {
  document.getElementById("confirmPopover").classList.add("hidden");
  pendingDeleteCallback = null;
});

document.addEventListener("click", (e) => {
  const popover = document.getElementById("confirmPopover");
  if (!popover.classList.contains("hidden") && !popover.contains(e.target) && !e.target.closest("[data-del-trigger]")) {
    popover.classList.add("hidden");
    pendingDeleteCallback = null;
  }
  if (!e.target.closest(".custom-select")) {
    document.querySelectorAll(".custom-select.open").forEach(el => el.classList.remove("open"));
  }
});

// ==================== ЯЗЫК И ТЕМА ====================
function setLanguage(lang) {
  currentLang = lang;
  const slider = document.getElementById("langSlider");
  slider.style.transform = lang === "oz" ? "translateX(38px)" : "translateX(0)";
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang] && I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });

  if (currentUser) {
    updateHeaderAndGreeting();
    renderAllViews();
    positionNavSlider();
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  document.getElementById("themeIconMoon").classList.toggle("hidden", isDark);
  document.getElementById("themeIconSun").classList.toggle("hidden", !isDark);
  if (currentUser && activeTab === "dashboard") {
    renderCharts();
  }
}

function showToast(msg) {
  const toast = document.getElementById("toastMsg");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.add("hidden"), 3000);
}

// ==================== АВТОРИЗАЦИЯ И РАЗГРАНИЧЕНИЕ ПРАВ ====================
async function loadFromGoogleDrive() {
  if (!currentUser || typeof APPS_SCRIPT_URL === "undefined" || !APPS_SCRIPT_URL.includes("/exec")) return;
  showToast(currentLang === "oz" ? "Google Drive dan ma’lumotlar yuklanmoqda..." : "Загрузка базы из Google Drive...");
  try {
    const url = `${APPS_SCRIPT_URL}?userId=${encodeURIComponent(currentUser.id)}&role=${encodeURIComponent(currentUser.role)}`;
    const res = await fetch(url);
    const json = await res.json();

    if (json.status === "ok" && json.data) {
      const savedUsers = appState.users;
      appState = {
        users: (currentUser.role === "admin" && Array.isArray(json.data.users)) ? json.data.users : savedUsers,
        students: json.data.students || [],
        tgPosts: json.data.tgPosts || [],
        monitoring: json.data.monitoring || [],
        parentMeetings: json.data.parentMeetings || [],
        schedule: json.data.schedule || [],
        calendarEvents: json.data.calendarEvents || [],
        blogPosts: json.data.blogPosts || []
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      renderAllViews();
      showToast(currentLang === "oz" ? "Baza Google Drive dan sinxronlandi" : "База синхронизирована с Google Drive");
    }
  } catch (err) {
    showToast(currentLang === "oz" ? "Lokal keshdan foydalanilmoqda" : "Работаем с локальной копией данных");
  }
}

function handleLogin(e) {
  e.preventDefault();
  const login = document.getElementById("loginUsername").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();
  const errEl = document.getElementById("loginError");

  const found = appState.users.find(u => u.login === login && u.pass === pass);
  if (!found) {
    errEl.textContent = currentLang === "oz" ? "Login yoki parol notöğri kiritildi." : "Неверный логин или пароль профиля.";
    errEl.classList.remove("hidden");
    return;
  }

  errEl.classList.add("hidden");
  currentUser = found;
  document.getElementById("authScreen").classList.add("hidden");
  document.getElementById("appShell").classList.remove("hidden");

  // Кнопка управления пользователями видна только админу
  document.getElementById("navUsersBtn").classList.toggle("hidden", currentUser.role !== "admin");

  dashFilters = {
    tutor: currentUser.role === "tutor" ? currentUser.id : "all",
    course: "all",
    group: "all",
    gender: "all"
  };

  updateHeaderAndGreeting();
  loadProfileForm();
  switchTab("dashboard");
  loadFromGoogleDrive();
}

function logout() {
  currentUser = null;
  document.getElementById("appShell").classList.add("hidden");
  document.getElementById("authScreen").classList.remove("hidden");
  document.getElementById("loginPassword").value = "";
}

function updateHeaderAndGreeting() {
  if (!currentUser) return;
  const initials = currentUser.name.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();
  document.getElementById("headerUserAvatar").textContent = initials;
  document.getElementById("headerUserName").textContent = currentUser.name;
  document.getElementById("headerUserRole").textContent = currentUser.roleTitle;
  document.getElementById("driveTooltip").textContent = `Google Drive: ${currentUser.driveFolder}`;

  const greetPrefix = currentLang === "oz" ? "Xuş kelibsiz" : "Добро пожаловать";
  document.getElementById("welcomeGreeting").textContent = `${greetPrefix}, ${currentUser.name}`;
}

function getVisibleStudents() {
  let list = appState.students;
  if (currentUser.role === "tutor") {
    list = list.filter(s => s.tutorId === currentUser.id);
  } else if (dashFilters.tutor !== "all") {
    list = list.filter(s => s.tutorId === dashFilters.tutor);
  }
  if (dashFilters.course !== "all") list = list.filter(s => String(s.course) === String(dashFilters.course));
  if (dashFilters.group !== "all") list = list.filter(s => s.group === dashFilters.group);
  if (dashFilters.gender !== "all") list = list.filter(s => s.gender === dashFilters.gender);
  return list;
}

function getRoleScopedStudents() {
  if (currentUser.role === "tutor") {
    return appState.students.filter(s => s.tutorId === currentUser.id);
  }
  return appState.students;
}

// ==================== КАСТОМНЫЕ ВЫПАДАЮЩИЕ СПИСКИ ====================
function renderCustomSelect(containerId, options, selectedVal, onChange) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  const currentOpt = options.find(o => String(o.value) === String(selectedVal)) || options[0] || { label: "—", value: "" };

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('${containerId}')">
      <span>${currentOpt.label}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu">
      ${options.map(opt => `
        <div class="cs-option ${String(opt.value) === String(selectedVal) ? 'selected' : ''}" data-val="${opt.value}">
          <span>${opt.label}</span>
          ${String(opt.value) === String(selectedVal) ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5l10 -10"/></svg>' : ''}
        </div>
      `).join("")}
    </div>
  `;

  wrap.querySelectorAll(".cs-option").forEach(el => {
    el.addEventListener("click", () => {
      wrap.classList.remove("open");
      onChange(el.dataset.val);
    });
  });
}

function toggleCustomSelect(id) {
  const target = document.getElementById(id);
  const wasOpen = target.classList.contains("open");
  document.querySelectorAll(".custom-select.open").forEach(el => el.classList.remove("open"));
  if (!wasOpen) target.classList.add("open");
}

// ==================== НАВИГАЦИЯ С ПЛАВНЫМ СЛАЙДЕРОМ ====================
function switchTab(tabName, subTab = null) {
  activeTab = tabName;
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-view").forEach(sec => {
    sec.classList.toggle("active", sec.id === `view-${tabName}`);
  });
  positionNavSlider();

  if (tabName === "students" && subTab) {
    setStudentSubtab(subTab);
  } else {
    renderAllViews();
  }
}

function positionNavSlider() {
  const activeBtn = document.querySelector(".nav-item.active");
  const slider = document.getElementById("navPillSlider");
  if (!activeBtn || !slider) return;
  slider.style.width = `${activeBtn.offsetWidth}px`;
  slider.style.transform = `translateX(${activeBtn.offsetLeft - 4}px)`;
}

window.addEventListener("resize", positionNavSlider);

function renderAllViews() {
  if (!currentUser) return;
  if (activeTab === "dashboard") renderDashboard();
  if (activeTab === "students") renderStudentsSection();
  if (activeTab === "telegram") renderTelegramSection();
  if (activeTab === "diaries") renderDiariesSection();
  if (activeTab === "profile") syncProfileCV();
  if (activeTab === "calendar") renderCalendarAndBlog();
  if (activeTab === "users" && currentUser.role === "admin") renderUsersAdminTable();
}

// ==================== 1. DASHBOARD И ГРАФИКИ (2K PNG / SVG) ====================
function renderDashboard() {
  const tutors = appState.users.filter(u => u.role === "tutor");
  const filterTutorWrap = document.getElementById("filterTutorWrap");

  if (currentUser.role === "tutor") {
    filterTutorWrap.classList.add("hidden");
  } else {
    filterTutorWrap.classList.remove("hidden");
    const tutorOpts = [{ value: "all", label: currentLang === "oz" ? "Barça tyutorlar" : "Все тюторы" }]
      .concat(tutors.map(t => ({ value: t.id, label: t.name })));
    renderCustomSelect("filterTutorWrap", tutorOpts, dashFilters.tutor, (val) => {
      dashFilters.tutor = val;
      renderDashboard();
    });
  }

  const courseOpts = [
    { value: "all", label: currentLang === "oz" ? "Barça kurslar" : "Все курсы" },
    { value: "1", label: "1 курс" },
    { value: "2", label: "2 курс" },
    { value: "3", label: "3 курс" },
    { value: "4", label: "4 курс" }
  ];
  renderCustomSelect("filterCourseWrap", courseOpts, dashFilters.course, (val) => {
    dashFilters.course = val;
    renderDashboard();
  });

  const scopedStudents = getRoleScopedStudents();
  const uniqueGroups = [...new Set(scopedStudents.map(s => s.group).filter(Boolean))];
  const groupOpts = [{ value: "all", label: currentLang === "oz" ? "Barça guruhlar" : "Все группы" }]
    .concat(uniqueGroups.map(g => ({ value: g, label: g })));
  renderCustomSelect("filterGroupWrap", groupOpts, dashFilters.group, (val) => {
    dashFilters.group = val;
    renderDashboard();
  });

  const genderOpts = [
    { value: "all", label: currentLang === "oz" ? "Jinsi: Barça" : "Пол: Все" },
    { value: "М", label: currentLang === "oz" ? "Erkak (E)" : "Мужской (М)" },
    { value: "Ж", label: currentLang === "oz" ? "Ayol (A)" : "Женский (Ж)" }
  ];
  renderCustomSelect("filterGenderWrap", genderOpts, dashFilters.gender, (val) => {
    dashFilters.gender = val;
    renderDashboard();
  });

  // Выпадающий список групп для круговой диаграммы
  const distGroupOpts = [{ value: "all", label: currentLang === "oz" ? "Guruhlar böyiça" : "По группам" }]
    .concat(uniqueGroups.map(g => ({ value: g, label: g })));
  renderCustomSelect("distGroupSelectWrap", distGroupOpts, distSelectedGroup, (val) => {
    distSelectedGroup = val;
    distChartMode = val === "all" ? "group_all" : "group_single";
    document.querySelectorAll("#distModeTabs .pill-sm").forEach(b => b.classList.remove("active"));
    renderCharts();
  });

  // KPI подсчеты на реальных данных
  const filtered = getVisibleStudents();
  const dormCount = filtered.filter(s => s.housingType === "dorm").length;
  const ownCount = filtered.filter(s => s.housingType === "own").length;

  const posts = currentUser.role === "tutor"
    ? appState.tgPosts.filter(p => p.authorId === currentUser.id)
    : (dashFilters.tutor !== "all" ? appState.tgPosts.filter(p => p.authorId === dashFilters.tutor) : appState.tgPosts);

  const volunteers = filtered.filter(s => s.volunteer && s.volunteer !== "Не состоит");
  const volDirsCount = new Set(volunteers.map(v => v.volunteer)).size;

  const activeMon = appState.monitoring.filter(m => {
    if (m.status !== "active") return false;
    if (currentUser.role === "tutor" && m.tutorId !== currentUser.id) return false;
    if (dashFilters.tutor !== "all" && m.tutorId !== dashFilters.tutor) return false;
    return true;
  });

  const socStudents = filtered.filter(s => Array.isArray(s.social) && s.social.length > 0);

  document.getElementById("kpiTotalStudents").textContent = filtered.length;
  document.getElementById("kpiDormCount").textContent = `Общежитие: ${dormCount}`;
  document.getElementById("kpiOwnHouseCount").textContent = `Свой дом: ${ownCount}`;
  document.getElementById("kpiTotalPosts").textContent = posts.length;
  document.getElementById("kpiTotalVolunteers").textContent = volunteers.length;
  document.getElementById("kpiVolDirs").textContent = `${volDirsCount} направлений`;
  document.getElementById("kpiMonSocValue").textContent = `${activeMon.length} / ${socStudents.length}`;
  document.getElementById("kpiOnControl").textContent = `На контроле: ${activeMon.length}`;
  document.getElementById("kpiSocCats").textContent = `Соц. категории: ${socStudents.length}`;

  renderCharts();
}

function setDistMode(mode) {
  distChartMode = mode;
  distSelectedGroup = "all";
  document.querySelectorAll("#distModeTabs .pill-sm").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  renderCharts();
}

function renderCharts() {
  const isDark = document.body.classList.contains("dark");
  const textColor = isDark ? "#9ca3af" : "#6b7280";

  // 1. График реальной активности (посты Telegram + беседы в дневниках по месяцам Июн-Ноя 2026)
  const months = ["2026-06", "2026-07", "2026-08", "2026-09", "2026-10", "2026-11"];
  const monthLabels = currentLang === "oz"
    ? ["Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy"]
    : ["Июн", "Июл", "Авг", "Сен", "Окт", "Ноя"];

  const visiblePosts = currentUser.role === "tutor"
    ? appState.tgPosts.filter(p => p.authorId === currentUser.id)
    : (dashFilters.tutor !== "all" ? appState.tgPosts.filter(p => p.authorId === dashFilters.tutor) : appState.tgPosts);

  const postsPerMonth = months.map(m => visiblePosts.filter(p => (p.date || "").startsWith(m)).length);

  const visibleMon = currentUser.role === "tutor"
    ? appState.monitoring.filter(m => m.tutorId === currentUser.id)
    : (dashFilters.tutor !== "all" ? appState.monitoring.filter(m => m.tutorId === dashFilters.tutor) : appState.monitoring);

  const visibleParents = currentUser.role === "tutor"
    ? appState.parentMeetings.filter(m => m.tutorId === currentUser.id)
    : (dashFilters.tutor !== "all" ? appState.parentMeetings.filter(m => m.tutorId === dashFilters.tutor) : appState.parentMeetings);

  const talksPerMonth = months.map(m => {
    let count = 0;
    visibleMon.forEach(rec => (rec.entries || []).forEach(ent => { if ((ent.date || "").startsWith(m)) count++; }));
    visibleParents.forEach(pm => { if ((pm.date || "").startsWith(m)) count++; });
    return count;
  });

  if (activityChartInstance) activityChartInstance.destroy();
  activityChartInstance = new ApexCharts(document.querySelector("#activityChart"), {
    chart: { type: "bar", height: 270, toolbar: { show: false }, background: "transparent", fontFamily: "Inter, sans-serif" },
    series: [
      { name: currentLang === "oz" ? "Telegram postlari" : "Посты Telegram", data: postsPerMonth },
      { name: currentLang === "oz" ? "Uçraşuv va suhbatlar" : "Встречи и беседы", data: talksPerMonth }
    ],
    colors: ["#ff6b3d", isDark ? "#e5e7eb" : "#262932"],
    plotOptions: { bar: { borderRadius: 6, columnWidth: "44%" } },
    dataLabels: { enabled: false },
    xaxis: { categories: monthLabels, labels: { style: { colors: textColor } }, axisBorder: { show: false } },
    yaxis: { min: 0, tickAmount: 4, labels: { style: { colors: textColor }, formatter: val => Math.round(val) } },
    grid: { borderColor: isDark ? "#2a2f3d" : "#eef0f4", strokeDashArray: 4 },
    legend: { position: "top", horizontalAlign: "right", labels: { colors: textColor } }
  });
  activityChartInstance.render();

  // 2. Диаграмма распределения студентов
  let students = getVisibleStudents();
  if (distChartMode === "group_single" && distSelectedGroup !== "all") {
    students = students.filter(s => s.group === distSelectedGroup);
  }

  let labels = [];
  let series = [];
  let colors = ["#2563eb", "#ff6b3d", "#7c3aed", "#10b981", "#f59e0b"];

  if (distChartMode === "housing" || distChartMode === "group_single") {
    labels = currentLang === "oz"
      ? ["Yotoqxona", "Ijara xonadon", "Qarindoşinikida", "Öz uyi"]
      : ["Общежитие", "Съемная кв.", "У родственников", "Свой дом"];
    series = [
      students.filter(s => s.housingType === "dorm").length,
      students.filter(s => s.housingType === "rent").length,
      students.filter(s => s.housingType === "relatives").length,
      students.filter(s => s.housingType === "own").length
    ];
  } else if (distChartMode === "social") {
    labels = SOCIAL_CATEGORIES;
    series = SOCIAL_CATEGORIES.map(cat => students.filter(s => (s.social || []).includes(cat)).length);
  } else if (distChartMode === "gender") {
    labels = currentLang === "oz" ? ["Erkaklar (E)", "Ayollar (A)"] : ["Мужчины (М)", "Женщины (Ж)"];
    series = [
      students.filter(s => s.gender === "М").length,
      students.filter(s => s.gender === "Ж").length
    ];
    colors = ["#2563eb", "#ff6b3d"];
  } else if (distChartMode === "group_all") {
    const groups = [...new Set(students.map(s => s.group).filter(Boolean))];
    labels = groups.length ? groups : ["Нет групп"];
    series = groups.length ? groups.map(g => students.filter(s => s.group === g).length) : [0];
  }

  if (distChartInstance) distChartInstance.destroy();
  distChartInstance = new ApexCharts(document.querySelector("#distributionChart"), {
    chart: { type: "donut", height: 270, background: "transparent", fontFamily: "Inter, sans-serif" },
    series: series,
    labels: labels,
    colors: colors,
    stroke: { width: 2, colors: [isDark ? "#181b23" : "#ffffff"] },
    plotOptions: {
      pie: {
        donut: {
          size: "68%",
          labels: {
            show: true,
            total: {
              show: true,
              label: currentLang === "oz" ? "Jami" : "Всего",
              color: textColor,
              formatter: () => students.length
            }
          }
        }
      }
    },
    dataLabels: { enabled: false },
    legend: { position: "bottom", labels: { colors: textColor } }
  });
  distChartInstance.render();
}

// Экспорт графиков в SVG и PNG 2K (ширина >= 2560px)
async function exportChart(which, format) {
  const chart = which === "activity" ? activityChartInstance : distChartInstance;
  if (!chart) return;
  const dataURI = await chart.dataURI();
  if (format === "svg") {
    const svgEl = document.querySelector(`#${which === "activity" ? "activityChart" : "distributionChart"} svg`);
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svgEl);
    const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
    triggerDownload(URL.createObjectURL(blob), `mytutors_${which}_chart.svg`);
    return;
  }

  // Масштабирование PNG до 2K (2560px по ширине)
  const img = new Image();
  img.onload = () => {
    const targetWidth = 2560;
    const scale = targetWidth / img.width;
    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = Math.round(img.height * scale);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = document.body.classList.contains("dark") ? "#181b23" : "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    triggerDownload(canvas.toDataURL("image/png", 1.0), `mytutors_${which}_2K.png`);
  };
  img.src = dataURI.imgURI;
}

function triggerDownload(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// ==================== 2. СТУДЕНТЫ, ЖИЛЬЕ, СОЦРЕЕСТР, ВОЛОНТЕРЫ, РАСПИСАНИЕ ====================
function setStudentSubtab(sub) {
  activeStudentSubtab = sub;
  document.querySelectorAll("#studentSubtabs .subtab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.sub === sub);
  });
  updateRoomSearchVisibility();
  renderStudentsSection();
}

function updateRoomSearchVisibility() {
  const box = document.getElementById("dormRoomSearchBox");
  const show = activeStudentSubtab === "housing" && activeHousingFilter === "dorm";
  box.classList.toggle("hidden", !show);
}

function renderStudentsSection() {
  const area = document.getElementById("studentsContentArea");
  const students = getRoleScopedStudents();

  if (activeStudentSubtab === "all") {
    if (!students.length) {
      area.innerHTML = `<div class="empty-state">Список студентов пуст. Нажмите «Добавить студента» или выполните синхронизацию с tyutor.hemis.uz.</div>`;
      return;
    }
    area.innerHTML = `
      <div class="bento-card">
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Ф.И.О.</th>
                <th>Группа / Курс</th>
                <th>Пол</th>
                <th>Жилье</th>
                <th>Тютор</th>
                <th>Телефон</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${students.map(s => {
                const tutor = appState.users.find(u => u.id === s.tutorId);
                return `
                  <tr>
                    <td><strong>${s.name}</strong></td>
                    <td>${s.group} • ${s.course} курс</td>
                    <td>${s.gender}</td>
                    <td>${formatHousingBadge(s)}</td>
                    <td>${tutor ? tutor.name : "—"}</td>
                    <td>${s.phone || "—"}</td>
                    <td style="text-align:right; white-space:nowrap;">
                      <button type="button" class="btn-link-orange mr-8" onclick="openStudentModal('${s.id}')">Изменить</button>
                      <button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteStudent('${s.id}', this)" title="Удалить">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
                      </button>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    return;
  }

  if (activeStudentSubtab === "housing") {
    const dorms = students.filter(s => s.housingType === "dorm");
    const rents = students.filter(s => s.housingType === "rent");
    const rels = students.filter(s => s.housingType === "relatives");
    const owns = students.filter(s => s.housingType === "own");

    let list = students;
    if (activeHousingFilter === "dorm") list = dorms;
    if (activeHousingFilter === "rent") list = rents;
    if (activeHousingFilter === "relatives") list = rels;
    if (activeHousingFilter === "own") list = owns;

    const roomQuery = (document.getElementById("dormRoomSearchInput").value || "").trim();
    if (activeHousingFilter === "dorm" && roomQuery) {
      list = list.filter(s => String(s.room || "").toLowerCase().includes(roomQuery.toLowerCase()));
    }

    const filterButtons = `
      <div class="subtabs-pills mb-16">
        <button type="button" class="subtab-btn ${activeHousingFilter === 'all' ? 'active' : ''}" onclick="setHousingFilter('all')">Все (${students.length})</button>
        <button type="button" class="subtab-btn ${activeHousingFilter === 'dorm' ? 'active' : ''}" onclick="setHousingFilter('dorm')">Общежитие (${dorms.length})</button>
        <button type="button" class="subtab-btn ${activeHousingFilter === 'rent' ? 'active' : ''}" onclick="setHousingFilter('rent')">Съемная квартира (${rents.length})</button>
        <button type="button" class="subtab-btn ${activeHousingFilter === 'relatives' ? 'active' : ''}" onclick="setHousingFilter('relatives')">У родственников (${rels.length})</button>
        <button type="button" class="subtab-btn ${activeHousingFilter === 'own' ? 'active' : ''}" onclick="setHousingFilter('own')">Свой дом (${owns.length})</button>
      </div>
    `;

    if (!list.length) {
      const emptyMsg = (activeHousingFilter === "dorm" && roomQuery && currentUser.role === "tutor")
        ? "Ваши студенты в данной комнате не проживают"
        : "По выбранному фильтру записей не найдено.";
      area.innerHTML = `${filterButtons}<div class="empty-state">${emptyMsg}</div>`;
      return;
    }

    area.innerHTML = `
      ${filterButtons}
      <div class="cards-grid-3">
        ${list.map(s => {
          // Автосвязка соседей по комнате в общежитии по всей базе
          let roommatesHtml = "";
          if (s.housingType === "dorm" && s.room) {
            const mates = appState.students.filter(other => other.id !== s.id && other.housingType === "dorm" && String(other.room) === String(s.room));
            roommatesHtml = `
              <div class="roommates-panel">
                <div style="font-weight:700; margin-bottom:4px;">Комната № ${s.room} • Соседи (${mates.length}):</div>
                ${mates.length
                  ? mates.map(m => `<div>• ${m.name} (${m.group})</div>`).join("")
                  : `<div style="color:var(--text-muted)">Других студентов в этой комнате не найдено</div>`}
              </div>
            `;
          } else if (s.housingType === "rent") {
            roommatesHtml = `
              <div class="roommates-panel">
                <div><strong>Адрес:</strong> ${s.address || "Не указан"}</div>
                <div><strong>Владелец:</strong> ${s.landlord || "Не указан"}</div>
              </div>
            `;
          } else if (s.housingType === "relatives") {
            roommatesHtml = `
              <div class="roommates-panel">
                <div><strong>Адрес:</strong> ${s.address || "Не указан"}</div>
                <div><strong>Родственник:</strong> ${s.relativeHost || "Не указан"}</div>
              </div>
            `;
          } else {
            roommatesHtml = `
              <div class="roommates-panel">
                <div><strong>Адрес:</strong> ${s.address || "Постоянное место жительства"}</div>
              </div>
            `;
          }

          return `
            <div class="student-card">
              <div>
                <div class="st-card-top">
                  <div>
                    <div class="st-name">${s.name}</div>
                    <div class="st-meta">${s.group} • ${s.course} курс</div>
                  </div>
                  ${formatHousingBadge(s)}
                </div>
                ${roommatesHtml}
              </div>
              <div class="st-card-actions">
                <span class="st-meta">${s.phone || ""}</span>
                <div>
                  <button type="button" class="btn-link-orange" onclick="openStudentModal('${s.id}')">Подробнее →</button>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
    return;
  }

  if (activeStudentSubtab === "social") {
    const socList = students.filter(s => Array.isArray(s.social) && s.social.length > 0);
    if (!socList.length) {
      area.innerHTML = `<div class="empty-state">Студенты социально уязвимых категорий пока не добавлены. Отметьте категории в карточке студента.</div>`;
      return;
    }
    area.innerHTML = `
      <div class="cards-grid-3">
        ${socList.map(s => `
          <div class="student-card">
            <div>
              <div class="st-name">${s.name}</div>
              <div class="st-meta mb-12">${s.group} • ${s.course} курс</div>
              <div class="checkbox-chips">
                ${s.social.map(c => `<span class="badge-pill rent">${c}</span>`).join("")}
              </div>
            </div>
            <div class="st-card-actions">
              <span class="st-meta">${s.phone || ""}</span>
              <button type="button" class="btn-link-orange" onclick="openStudentModal('${s.id}')">Открыть</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
    return;
  }

  if (activeStudentSubtab === "volunteers") {
    const vols = students.filter(s => s.volunteer && s.volunteer !== "Не состоит");
    if (!vols.length) {
      area.innerHTML = `<div class="empty-state">Группы волонтеров пока пусты. Назначьте направление в карточке студента.</div>`;
      return;
    }
    area.innerHTML = `
      <div class="cards-grid-3">
        ${vols.map(s => `
          <div class="student-card">
            <div>
              <div class="st-card-top">
                <div>
                  <div class="st-name">${s.name}</div>
                  <div class="st-meta">${s.group} • ${s.course} курс</div>
                </div>
                <span class="badge-pill rel">${s.volunteer}</span>
              </div>
            </div>
            <div class="st-card-actions">
              <span class="st-meta">${s.phone || ""}</span>
              <button type="button" class="btn-link-orange" onclick="openStudentModal('${s.id}')">Изменить</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
    return;
  }

  if (activeStudentSubtab === "schedule") {
    area.innerHTML = `
      <div class="bento-card">
        <div class="card-head">
          <div>
            <h3 class="card-title">Расписание занятий групп (парсинг tyutor.hemis.uz)</h3>
            <p class="card-sub">Актуальная сетка пар, аудиторий и преподавателей прикрепленных групп</p>
          </div>
          <button type="button" class="btn-blue" onclick="openHemisImportModal()">Обновить расписание</button>
        </div>
        ${appState.schedule.length ? `
          <table class="data-table">
            <thead><tr><th>Группа</th><th>Пара / Время</th><th>Дисциплина</th><th>Аудитория</th><th>Преподаватель</th></tr></thead>
            <tbody>
              ${appState.schedule.map(row => `<tr><td><strong>${row.group}</strong></td><td>${row.time}</td><td>${row.subject}</td><td>${row.room}</td><td>${row.teacher}</td></tr>`).join("")}
            </tbody>
          </table>
        ` : `<div class="empty-state">Расписание еще не загружено из HEMIS.</div>`}
      </div>
    `;
  }
}

function setHousingFilter(filter) {
  activeHousingFilter = filter;
  updateRoomSearchVisibility();
  renderStudentsSection();
}

function formatHousingBadge(s) {
  if (s.housingType === "dorm") return `<span class="badge-pill">Общежитие, комн. ${s.room || "—"}</span>`;
  if (s.housingType === "rent") return `<span class="badge-pill rent">Съемная квартира</span>`;
  if (s.housingType === "relatives") return `<span class="badge-pill rel">У родственников</span>`;
  return `<span class="badge-pill house"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/></svg> Свой дом</span>`;
}

// ==================== МОДАЛКА КАРТОЧКИ СТУДЕНТА ====================
let modalStudentState = { course: "1", gender: "М", tutorId: "", housingType: "dorm", volunteer: "Не состоит" };

function openStudentModal(studentId = null) {
  const st = studentId ? appState.students.find(s => s.id === studentId) : null;
  document.getElementById("editStudentId").value = st ? st.id : "";
  document.getElementById("studentModalTitle").textContent = st ? "Редактирование карточки студента" : "Новый студент";
  document.getElementById("stFullName").value = st ? st.name : "";
  document.getElementById("stGroup").value = st ? st.group : "";
  document.getElementById("stPhone").value = st ? st.phone : "";

  modalStudentState = {
    course: st ? String(st.course) : "1",
    gender: st ? st.gender : "М",
    tutorId: st ? st.tutorId : (currentUser.role === "tutor" ? currentUser.id : "tutor1"),
    housingType: st ? st.housingType : "dorm",
    volunteer: st ? (st.volunteer || "Не состоит") : "Не состоит"
  };

  renderCustomSelect("stCourseSelectWrap", [
    { value: "1", label: "1 курс" }, { value: "2", label: "2 курс" },
    { value: "3", label: "3 курс" }, { value: "4", label: "4 курс" }
  ], modalStudentState.course, v => { modalStudentState.course = v; renderCustomSelect("stCourseSelectWrap", [
    { value: "1", label: "1 курс" }, { value: "2", label: "2 курс" },
    { value: "3", label: "3 курс" }, { value: "4", label: "4 курс" }
  ], v, arguments.callee); });

  renderCustomSelect("stGenderSelectWrap", [
    { value: "М", label: "Мужской (М)" }, { value: "Ж", label: "Женский (Ж)" }
  ], modalStudentState.gender, v => {
    modalStudentState.gender = v;
    renderCustomSelect("stGenderSelectWrap", [{ value: "М", label: "Мужской (М)" }, { value: "Ж", label: "Женский (Ж)" }], v, arguments.callee);
  });

  const tutors = appState.users.filter(u => u.role === "tutor");
  const tutorOpts = tutors.map(t => ({ value: t.id, label: t.name }));
  renderCustomSelect("stTutorSelectWrap", tutorOpts, modalStudentState.tutorId, v => {
    modalStudentState.tutorId = v;
    renderCustomSelect("stTutorSelectWrap", tutorOpts, v, arguments.callee);
  });

  renderHousingTypeSelector(st);

  // Родители и родственники (по умолчанию Мать и Отец)
  tempFamilyMembers = st && Array.isArray(st.family) && st.family.length
    ? JSON.parse(JSON.stringify(st.family))
    : [
        { relation: "Мать", customRelation: "", name: "", phone: "", work: "" },
        { relation: "Отец", customRelation: "", name: "", phone: "", work: "" }
      ];
  renderFamilyMembersRows();

  // Социальные чипы
  const activeSoc = st && Array.isArray(st.social) ? st.social : [];
  document.getElementById("stSocialChips").innerHTML = SOCIAL_CATEGORIES.map(cat => `
    <div class="tag-chip ${activeSoc.includes(cat) ? 'active' : ''}" onclick="this.classList.toggle('active')">${cat}</div>
  `).join("");

  const volOpts = VOLUNTEER_DIRECTIONS.map(v => ({ value: v, label: v }));
  renderCustomSelect("stVolunteerWrap", volOpts, modalStudentState.volunteer, v => {
    modalStudentState.volunteer = v;
    renderCustomSelect("stVolunteerWrap", volOpts, v, arguments.callee);
  });

  document.getElementById("studentModal").classList.remove("hidden");
}

function renderHousingTypeSelector(st = null) {
  const opts = [
    { value: "dorm", label: "Общежитие" },
    { value: "rent", label: "Съемная квартира" },
    { value: "relatives", label: "У родственников" },
    { value: "own", label: "Свой дом (маркер домика)" }
  ];
  renderCustomSelect("stHousingTypeWrap", opts, modalStudentState.housingType, (val) => {
    modalStudentState.housingType = val;
    renderHousingTypeSelector(st);
  });
  renderDynamicHousingInputs(st);
}

function renderDynamicHousingInputs(st = null) {
  const dyn = document.getElementById("housingDynamicFields");
  const extra = document.getElementById("housingExtraFullRow");
  const preview = document.getElementById("modalRoommatesPreview");
  const type = modalStudentState.housingType;

  preview.classList.add("hidden");

  if (type === "dorm") {
    dyn.innerHTML = `
      <div class="form-group">
        <label class="form-label">Номер комнаты в общежитии</label>
        <input type="text" id="stRoomInput" class="form-input" value="${st && st.room ? st.room : ''}" placeholder="Например: 401" oninput="updateModalRoommatesPreview()" />
      </div>
    `;
    extra.innerHTML = "";
    updateModalRoommatesPreview();
  } else if (type === "rent") {
    dyn.innerHTML = `
      <div class="form-group">
        <label class="form-label">Адрес съемной квартиры</label>
        <input type="text" id="stAddressInput" class="form-input" value="${st && st.address ? st.address : ''}" placeholder="г. Самарканд, ул. ..." />
      </div>
    `;
    extra.innerHTML = `
      <div class="form-group">
        <label class="form-label">Данные о владельце квартиры (Ф.И.О., телефон, паспорт)</label>
        <input type="text" id="stLandlordInput" class="form-input" value="${st && st.landlord ? st.landlord : ''}" placeholder="Ф.И.О. арендодателя и номер телефона" />
      </div>
    `;
  } else if (type === "relatives") {
    dyn.innerHTML = `
      <div class="form-group">
        <label class="form-label">Адрес проживания у родственников</label>
        <input type="text" id="stAddressInput" class="form-input" value="${st && st.address ? st.address : ''}" placeholder="Адрес родственников..." />
      </div>
    `;
    extra.innerHTML = `
      <div class="form-group">
        <label class="form-label">Данные о родственниках (степень родства, Ф.И.О., телефон)</label>
        <input type="text" id="stRelativeHostInput" class="form-input" value="${st && st.relativeHost ? st.relativeHost : ''}" placeholder="Например: Дядя — Каримов Б., +998 90 ..." />
      </div>
    `;
  } else {
    dyn.innerHTML = `
      <div class="form-group">
        <label class="form-label">Адрес собственного дома</label>
        <input type="text" id="stAddressInput" class="form-input" value="${st && st.address ? st.address : ''}" placeholder="г. Самарканд, ..." />
      </div>
    `;
    extra.innerHTML = "";
  }
}

function updateModalRoommatesPreview() {
  const roomInput = document.getElementById("stRoomInput");
  const preview = document.getElementById("modalRoommatesPreview");
  if (!roomInput || !preview) return;
  const roomVal = roomInput.value.trim();
  const editId = document.getElementById("editStudentId").value;

  if (!roomVal) {
    preview.classList.add("hidden");
    return;
  }
  const mates = appState.students.filter(s => s.id !== editId && s.housingType === "dorm" && String(s.room) === roomVal);
  preview.classList.remove("hidden");
  preview.innerHTML = mates.length
    ? `Автосвязка по комнате № ${roomVal}: найдено соседей — ${mates.map(m => `${m.name} (${m.group})`).join(", ")}`
    : `Комната № ${roomVal}: других студентов в базе пока не зарегистрировано.`;
}

function renderFamilyMembersRows() {
  const container = document.getElementById("familyMembersContainer");
  container.innerHTML = tempFamilyMembers.map((mem, idx) => `
    <div class="family-row">
      <div>
        <div class="custom-select" id="famRelSelect_${idx}"></div>
        ${mem.relation === "Другое..." ? `<input type="text" class="form-input mt-6" placeholder="Кто именно..." value="${mem.customRelation || ''}" onchange="tempFamilyMembers[${idx}].customRelation = this.value" />` : ""}
      </div>
      <input type="text" class="form-input" placeholder="Ф.И.О." value="${mem.name || ''}" onchange="tempFamilyMembers[${idx}].name = this.value" />
      <input type="text" class="form-input" placeholder="Телефон" value="${mem.phone || ''}" onchange="tempFamilyMembers[${idx}].phone = this.value" />
      <input type="text" class="form-input" placeholder="Место работы" value="${mem.work || ''}" onchange="tempFamilyMembers[${idx}].work = this.value" />
      <button type="button" class="btn-del-icon" data-del-trigger="1" onclick="removeFamilyMemberRow(${idx}, this)" title="Удалить">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>
      </button>
    </div>
  `).join("");

  tempFamilyMembers.forEach((mem, idx) => {
    const opts = RELATIVE_TYPES.map(r => ({ value: r, label: r }));
    renderCustomSelect(`famRelSelect_${idx}`, opts, mem.relation, (val) => {
      tempFamilyMembers[idx].relation = val;
      renderFamilyMembersRows();
    });
  });
}

function addFamilyMemberRow() {
  tempFamilyMembers.push({ relation: "Бабушка", customRelation: "", name: "", phone: "", work: "" });
  renderFamilyMembersRows();
}

function removeFamilyMemberRow(idx, btnEl) {
  askConfirmDelete(btnEl, () => {
    tempFamilyMembers.splice(idx, 1);
    renderFamilyMembersRows();
  });
}

function saveStudent() {
  const name = document.getElementById("stFullName").value.trim();
  const group = document.getElementById("stGroup").value.trim();
  if (!name || !group) {
    showToast("Укажите Ф.И.О. и группу студента");
    return;
  }

  const editId = document.getElementById("editStudentId").value;
  const social = [...document.querySelectorAll("#stSocialChips .tag-chip.active")].map(el => el.textContent);

  const record = {
    id: editId || `st_${Date.now()}`,
    name,
    group,
    course: modalStudentState.course,
    gender: modalStudentState.gender,
    phone: document.getElementById("stPhone").value.trim(),
    tutorId: modalStudentState.tutorId,
    housingType: modalStudentState.housingType,
    room: document.getElementById("stRoomInput") ? document.getElementById("stRoomInput").value.trim() : "",
    address: document.getElementById("stAddressInput") ? document.getElementById("stAddressInput").value.trim() : "",
    landlord: document.getElementById("stLandlordInput") ? document.getElementById("stLandlordInput").value.trim() : "",
    relativeHost: document.getElementById("stRelativeHostInput") ? document.getElementById("stRelativeHostInput").value.trim() : "",
    family: tempFamilyMembers,
    social,
    volunteer: modalStudentState.volunteer
  };

  if (editId) {
    const idx = appState.students.findIndex(s => s.id === editId);
    if (idx !== -1) appState.students[idx] = record;
  } else {
    appState.students.unshift(record);
  }

  saveState();
  closeModal("studentModal");
  renderAllViews();
  showToast("Карточка студента сохранена");
}

function deleteStudent(id, btnEl) {
  askConfirmDelete(btnEl, () => {
    appState.students = appState.students.filter(s => s.id !== id);
    saveState();
    renderAllViews();
    showToast("Студент удален из базы");
  });
}

// Импорт HEMIS
function openHemisImportModal() {
  document.getElementById("hemisModal").classList.remove("hidden");
}

function runHemisImport() {
  const bulk = document.getElementById("hemisBulkText").value.trim();
  if (!bulk) {
    showToast("Вставьте данные студентов из HEMIS");
    return;
  }
  const lines = bulk.split("\n").filter(Boolean);
  let added = 0;
  lines.forEach((line, i) => {
    const parts = line.split("|").map(p => p.trim());
    if (parts[0]) {
      appState.students.unshift({
        id: `hemis_${Date.now()}_${i}`,
        name: parts[0],
        group: parts[1] || "TR-101",
        course: parts[2] || "1",
        gender: (parts[3] || "М").toUpperCase().startsWith("Ж") ? "Ж" : "М",
        phone: parts[4] || "",
        tutorId: currentUser.role === "tutor" ? currentUser.id : "tutor1",
        housingType: "own",
        room: "", address: "", landlord: "", relativeHost: "",
        family: [], social: [], volunteer: "Не состоит"
      });
      added++;
    }
  });
  saveState();
  closeModal("hemisModal");
  document.getElementById("hemisSyncStatus").textContent = `Последняя синхронизация с tyutor.hemis.uz: ${new Date().toLocaleString()}`;
  renderAllViews();
  showToast(`Импортировано студентов: ${added}`);
}

// ==================== 3. TELEGRAM И ОТЧЕТЫ GOOGLE DOCS ====================
const TELEGRAM_WORKER_URL = "https://mytutors-parser.lanigirodesigner.workers.dev";
let reportSelectedTag = "all";

function renderTelegramSection() {
  document.getElementById("tgDateInput").value = new Date().toISOString().slice(0, 10);

  document.getElementById("tgNewPostTags").innerHTML = TG_TAGS.map(tag => `
    <div class="tag-chip ${selectedNewPostTags.includes(tag) ? 'active' : ''}" onclick="toggleNewPostTag('${tag}')">${tag}</div>
  `).join("");

  const allTags = ["all", ...TG_TAGS];
  document.getElementById("tgFilterTagsRow").innerHTML = allTags.map(t => `
    <div class="tag-chip ${activeTgTagFilter === t ? 'active' : ''}" onclick="setTgTagFilter('${t}')">${t === 'all' ? 'Все посты' : t}</div>
  `).join("");

  const tagOpts = [{ value: "all", label: "Все категории тегов" }].concat(TG_TAGS.map(t => ({ value: t, label: t })));
  renderCustomSelect("reportTagSelectWrap", tagOpts, reportSelectedTag, (val) => {
    reportSelectedTag = val;
    renderTelegramSection();
  });

  let posts = currentUser.role === "tutor"
    ? appState.tgPosts.filter(p => p.authorId === currentUser.id)
    : appState.tgPosts;

  if (activeTgTagFilter !== "all") {
    posts = posts.filter(p => (p.tags || []).includes(activeTgTagFilter));
  }

  posts = [...posts].sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  const listEl = document.getElementById("tgPostsList");
  if (!posts.length) {
    listEl.innerHTML = `<div class="empty-state">Загруженных постов из Telegram пока нет. Вставьте ссылку формата https://t.me/studlifeuniv/12028 выше.</div>`;
  } else {
    listEl.innerHTML = posts.map(p => `
      <div class="post-card">
        <div class="post-head">
          <div>
            <a href="${p.url}" target="_blank" style="color:var(--blue); font-weight:700; text-decoration:none;">${p.url}</a>
            <span class="st-meta"> • ${p.date}</span>
          </div>
          <button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteTgPost('${p.id}', this)" title="Удалить пост">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
          </button>
        </div>
        <p style="font-size:14px; white-space:pre-line;">${p.text}</p>
        <div class="checkbox-chips mt-10">
          ${(p.tags || []).map(t => `<span class="badge-pill">${t}</span>`).join("")}
        </div>
        ${(p.images || []).length ? `
          <div class="post-images">
            ${p.images.map(img => `<img src="${img}" alt="TG" onclick="openLightbox('${img}')" />`).join("")}
          </div>
        ` : ""}
      </div>
    `).join("");
  }

  updateReportPreview();
}

function toggleNewPostTag(tag) {
  if (selectedNewPostTags.includes(tag)) {
    selectedNewPostTags = selectedNewPostTags.filter(t => t !== tag);
  } else {
    selectedNewPostTags.push(tag);
  }
  renderTelegramSection();
}

function setTgTagFilter(tag) {
  activeTgTagFilter = tag;
  renderTelegramSection();
}

async function parseTelegramPost() {
  const url = document.getElementById("tgUrlInput").value.trim();
  const dateInput = document.getElementById("tgDateInput");
  const textInput = document.getElementById("tgTextInput");
  let postDate = dateInput.value || new Date().toISOString().slice(0, 10);
  let text = textInput.value.trim();
  let images = [];

  if (!url) {
    showToast("Введите ссылку на публикацию в Telegram");
    return;
  }

  showToast(currentLang === "oz" ? "Telegram post yuklanmoqda..." : "Загрузка поста из Telegram...");

  try {
    const endpoint = `${TELEGRAM_WORKER_URL.replace(/\/+$/, "")}/tg?url=${encodeURIComponent(url)}`;
    const res = await fetch(endpoint);
    const data = await res.json();

    if (data && data.ok) {
      if (!text && data.text) text = data.text;
      if (data.date) postDate = data.date;
      if (Array.isArray(data.images)) images = data.images;
    }
  } catch (err) {
    console.warn("Ошибка парсинга через Cloudflare Worker:", err);
  }

  if (!text) {
    text = `Публикация из канала @studlifeuniv (${url}). Проведено воспитательно-просветительское мероприятие со студентами университета.`;
  }

  appState.tgPosts.unshift({
    id: `post_${Date.now()}`,
    authorId: currentUser.id,
    url,
    date: postDate,
    text,
    tags: [...selectedNewPostTags],
    images
  });

  saveState();
  document.getElementById("tgUrlInput").value = "";
  textInput.value = "";
  renderTelegramSection();
  showToast(currentLang === "oz" ? "Post qöşildi va sana böyiça saralandi" : "Пост добавлен и отсортирован по дате");
}

function deleteTgPost(id, btnEl) {
  askConfirmDelete(btnEl, () => {
    appState.tgPosts = appState.tgPosts.filter(p => p.id !== id);
    saveState();
    renderTelegramSection();
    showToast("Публикация удалена");
  });
}

function getFilteredReportPosts() {
  const from = document.getElementById("reportDateFrom").value;
  const to = document.getElementById("reportDateTo").value;
  let posts = currentUser.role === "tutor"
    ? appState.tgPosts.filter(p => p.authorId === currentUser.id)
    : appState.tgPosts;

  return posts.filter(p => {
    if (from && p.date < from) return false;
    if (to && p.date > to) return false;
    if (reportSelectedTag !== "all" && !(p.tags || []).includes(reportSelectedTag)) return false;
    return true;
  }).sort((a, b) => a.date.localeCompare(b.date));
}

function updateReportPreview() {
  const matched = getFilteredReportPosts();
  document.getElementById("reportSummaryBox").innerHTML = `
    Найдено публикаций за период: <strong>${matched.length}</strong><br/>
    <span class="st-meta">Документ назначения: Google Doc (${currentUser.driveFolder})</span>
  `;
}

async function exportToGoogleDoc() {
  const matched = getFilteredReportPosts();
  if (!matched.length) {
    showToast(currentLang === "oz" ? "Tanlangan davrda hisobot uşun postlar yöq" : "За выбранный период нет публикаций для отчета");
    return;
  }

  const from = document.getElementById("reportDateFrom").value || "—";
  const to = document.getElementById("reportDateTo").value || "—";
  const periodStr = `${from} — ${to}`;

  const reportText = matched.map((p, idx) => {
    const tagsStr = Array.isArray(p.tags) && p.tags.length ? ` [${p.tags.join(", ")}]` : "";
    return `${idx + 1}. (${p.date})${tagsStr}\n${p.text}\nСсылка: ${p.url}`;
  }).join("\n\n");

  if (typeof APPS_SCRIPT_URL === "undefined" || !APPS_SCRIPT_URL.includes("/exec")) {
    showToast("Не задан APPS_SCRIPT_URL в js/app.js");
    return;
  }

  showToast(currentLang === "oz" ? "Google Doc ga yuborilmoqda..." : "Отправка отчета в Google Doc...");

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        action: "appendReportToDoc",
        userId: currentUser.id,
        tutorName: currentUser.name,
        period: periodStr,
        reportText
      })
    });
    const text = await res.text();
    const json = JSON.parse(text);

    if (json.status === "ok") {
      showToast(currentLang === "oz" ? "Hisobot Google Doc ga qöşildi" : "Отчет добавлен в Google Doc тютора");
    } else {
      showToast("Ошибка Google Doc: " + (json.message || "неизвестная ошибка"));
    }
  } catch (err) {
    console.error("Ошибка экспорта в Google Doc:", err);
    showToast("Не удалось отправить отчет в Google Doc");
  }
}

function openLightbox(src) {
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxModal").classList.remove("hidden");
}

// ==================== 4. ДНЕВНИКИ (МОНИТОРИНГ + РОДИТЕЛИ) ====================
function setDiarySubtab(sub) {
  activeDiarySubtab = sub;
  document.getElementById("diaryTabMonitoring").classList.toggle("active", sub === "monitoring");
  document.getElementById("diaryTabParents").classList.toggle("active", sub === "parents");
  renderDiariesSection();
}

function renderDiariesSection() {
  const area = document.getElementById("diariesContentArea");
  if (activeDiarySubtab === "monitoring") {
    let list = currentUser.role === "tutor"
      ? appState.monitoring.filter(m => m.tutorId === currentUser.id)
      : appState.monitoring;

    const filtered = list.filter(m => m.status === activeMonitoringFilter);

    area.innerHTML = `
      <div class="subtabs-row">
        <div class="subtabs-pills">
          <button type="button" class="subtab-btn ${activeMonitoringFilter === 'active' ? 'active' : ''}" onclick="activeMonitoringFilter='active'; renderDiariesSection()">Активные на учете (${list.filter(m => m.status === 'active').length})</button>
          <button type="button" class="subtab-btn ${activeMonitoringFilter === 'archived' ? 'active' : ''}" onclick="activeMonitoringFilter='archived'; renderDiariesSection()">Снятые с учета / Архив (${list.filter(m => m.status === 'archived').length})</button>
        </div>
        <button type="button" class="btn-orange" onclick="openMonitoringModal()">+ Поставить на мониторинг</button>
      </div>

      ${!filtered.length ? `<div class="empty-state">В данной вкладке записей мониторинга пока нет.</div>` : `
        <div class="diary-grid">
          ${filtered.map(rec => {
            const st = appState.students.find(s => s.id === rec.studentId);
            const tutor = appState.users.find(u => u.id === rec.tutorId);
            return `
              <div class="diary-card">
                <div class="st-card-top">
                  <div>
                    <div class="st-name">${st ? st.name : rec.studentName}</div>
                    <div class="st-meta">${st ? st.group : ""} • Тютор: ${tutor ? tutor.name : ""}</div>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="badge-pill rent">${rec.category}</span>
                    <button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteMonitoringRecord('${rec.id}', this)" title="Удалить карточку">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
                    </button>
                  </div>
                </div>

                <div class="diary-entries">
                  ${(rec.entries || []).map(ent => `
                    <div class="diary-entry-item ${ent.type || ''}">
                      <div class="diary-entry-date">${ent.date} ${ent.type === 'positive' ? '• Положительный результат (снят с учета)' : ''} ${ent.type === 'reopened' ? '• Повторная постановка на учет' : ''}</div>
                      <div>${ent.text}</div>
                    </div>
                  `).join("")}
                </div>

                ${rec.status === "active" ? `
                  <textarea id="noteInput_${rec.id}" class="form-textarea mt-10" rows="2" placeholder="Запись о проведенной беседе..."></textarea>
                  <div class="st-card-actions">
                    <label style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--emerald); font-weight:600; cursor:pointer;">
                      <input type="checkbox" id="posCheck_${rec.id}" /> Положительный результат (снять с учета)
                    </label>
                    <button type="button" class="btn-dark" onclick="addMonitoringEntry('${rec.id}')">Добавить запись</button>
                  </div>
                ` : `
                  <div class="st-card-actions">
                    <span class="st-meta">Все записи сохранены в БД</span>
                    <button type="button" class="btn-orange sm" onclick="reopenMonitoringRecord('${rec.id}')">Вернуть на учет повторно</button>
                  </div>
                `}
              </div>
            `;
          }).join("")}
        </div>
      `}
    `;
    return;
  }

  // Вкладка: Работа с родителями
  const meetings = currentUser.role === "tutor"
    ? appState.parentMeetings.filter(m => m.tutorId === currentUser.id)
    : appState.parentMeetings;

  const students = getRoleScopedStudents();
  area.innerHTML = `
    <div class="bento-card mb-16">
      <h3 class="card-title mb-12">Зафиксировать встречу / беседу с родителями</h3>
      <div class="form-grid-3">
        <div class="custom-select" id="pmStudentSelectWrap"></div>
        <input type="date" id="pmDateInput" class="form-input" value="${new Date().toISOString().slice(0, 10)}" />
        <input type="text" id="pmParentWho" class="form-input" placeholder="Кто присутствовал (Мать / Отец)" />
      </div>
      <textarea id="pmNotesInput" class="form-textarea mt-10" rows="2" placeholder="Какие вопросы обсуждались и какое принято решение..."></textarea>
      <button type="button" class="btn-orange mt-10" onclick="addParentMeeting()">Сохранить запись встречи</button>
    </div>

    ${!meetings.length ? `<div class="empty-state">Записей о встречах с родителями пока нет.</div>` : `
      <div class="diary-grid">
        ${meetings.map(m => `
          <div class="diary-card">
            <div class="st-card-top">
              <div>
                <div class="st-name">${m.studentName}</div>
                <div class="st-meta">${m.date} • ${m.who}</div>
              </div>
              <button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteParentMeeting('${m.id}', this)" title="Удалить">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
              </button>
            </div>
            <p style="font-size:13px;">${m.notes}</p>
          </div>
        `).join("")}
      </div>
    `}
  `;

  window._selectedPmStudentId = students[0] ? students[0].id : "";
  const stOpts = students.length
    ? students.map(s => ({ value: s.id, label: `${s.name} (${s.group})` }))
    : [{ value: "", label: "Сначала добавьте студентов" }];

  renderCustomSelect("pmStudentSelectWrap", stOpts, window._selectedPmStudentId, (val) => {
    window._selectedPmStudentId = val;
    renderCustomSelect("pmStudentSelectWrap", stOpts, val, arguments.callee);
  });
}

let monModalStudentId = "";
let monModalCategory = "Курение";

function openMonitoringModal() {
  const students = getRoleScopedStudents();
  if (!students.length) {
    showToast("Сначала добавьте студентов в базу");
    return;
  }
  monModalStudentId = students[0].id;
  monModalCategory = "Курение";

  const stOpts = students.map(s => ({ value: s.id, label: `${s.name} (${s.group})` }));
  renderCustomSelect("monStudentSelectWrap", stOpts, monModalStudentId, (v) => {
    monModalStudentId = v;
    renderCustomSelect("monStudentSelectWrap", stOpts, v, arguments.callee);
  });

  const catOpts = MONITORING_CATEGORIES.map(c => ({ value: c, label: c }));
  renderCustomSelect("monCategorySelectWrap", catOpts, monModalCategory, (v) => {
    monModalCategory = v;
    document.getElementById("monCustomCatWrap").classList.toggle("hidden", v !== "Другое...");
    renderCustomSelect("monCategorySelectWrap", catOpts, v, arguments.callee);
  });

  document.getElementById("monCustomCatWrap").classList.add("hidden");
  document.getElementById("monInitialNote").value = "";
  document.getElementById("monitoringModal").classList.remove("hidden");
}

function saveMonitoringRecord() {
  const st = appState.students.find(s => s.id === monModalStudentId);
  if (!st) return;

  const finalCat = monModalCategory === "Другое..."
    ? (document.getElementById("monCustomCategoryInput").value.trim() || "Другое")
    : monModalCategory;
  const note = document.getElementById("monInitialNote").value.trim() || "Поставлен(а) на индивидуальный мониторинг.";

  // Если студент уже был в архиве по этой категории — возобновляем с фиксацией в истории
  const existing = appState.monitoring.find(m => m.studentId === st.id && m.category === finalCat);
  if (existing) {
    existing.status = "active";
    existing.entries.push({
      date: new Date().toISOString().slice(0, 10),
      type: "reopened",
      text: `Повторно возвращен(а) на учет: ${note}`
    });
  } else {
    appState.monitoring.unshift({
      id: `mon_${Date.now()}`,
      studentId: st.id,
      studentName: st.name,
      tutorId: st.tutorId,
      category: finalCat,
      status: "active",
      entries: [{ date: new Date().toISOString().slice(0, 10), type: "normal", text: note }]
    });
  }

  saveState();
  closeModal("monitoringModal");
  renderDiariesSection();
  showToast("Запись мониторинга сохранена");
}

function addMonitoringEntry(recId) {
  const rec = appState.monitoring.find(m => m.id === recId);
  if (!rec) return;
  const input = document.getElementById(`noteInput_${recId}`);
  const check = document.getElementById(`posCheck_${recId}`);
  const text = input.value.trim();
  if (!text) {
    showToast("Введите текст заметки");
    return;
  }

  const autoPositive = /сбрил|сняла|бросил|устранен/i.test(text);
  const isPositive = check.checked || autoPositive;

  rec.entries.push({
    date: new Date().toISOString().slice(0, 10),
    type: isPositive ? "positive" : "normal",
    text
  });

  if (isPositive) {
    rec.status = "archived";
    showToast("Положительный результат зафиксирован. Студент перенесен в архив.");
  } else {
    showToast("Запись добавлена в дневник");
  }

  saveState();
  renderDiariesSection();
}

function reopenMonitoringRecord(recId) {
  const rec = appState.monitoring.find(m => m.id === recId);
  if (!rec) return;
  rec.status = "active";
  rec.entries.push({
    date: new Date().toISOString().slice(0, 10),
    type: "reopened",
    text: "Студент(ка) повторно возвращен(а) на учет для продолжения индивидуального контроля."
  });
  saveState();
  activeMonitoringFilter = "active";
  renderDiariesSection();
  showToast("Студент возвращен на учет с сохранением истории");
}

function deleteMonitoringRecord(id, btnEl) {
  askConfirmDelete(btnEl, () => {
    appState.monitoring = appState.monitoring.filter(m => m.id !== id);
    saveState();
    renderDiariesSection();
    showToast("Карточка мониторинга удалена");
  });
}

function addParentMeeting() {
  const st = appState.students.find(s => s.id === window._selectedPmStudentId);
  const notes = document.getElementById("pmNotesInput").value.trim();
  if (!st || !notes) {
    showToast("Выберите студента и опишите итоги встречи");
    return;
  }
  appState.parentMeetings.unshift({
    id: `pm_${Date.now()}`,
    tutorId: currentUser.id,
    studentId: st.id,
    studentName: `${st.name} (${st.group})`,
    date: document.getElementById("pmDateInput").value,
    who: document.getElementById("pmParentWho").value.trim() || "Родители",
    notes
  });
  saveState();
  renderDiariesSection();
  showToast("Встреча с родителями зафиксирована");
}

function deleteParentMeeting(id, btnEl) {
  askConfirmDelete(btnEl, () => {
    appState.parentMeetings = appState.parentMeetings.filter(m => m.id !== id);
    saveState();
    renderDiariesSection();
    showToast("Запись удалена");
  });
}

// ==================== 5. ПРОФИЛЬ И АВТО-CV ====================
function loadProfileForm() {
  if (!currentUser) return;
  document.getElementById("profFullName").value = currentUser.name || "";
  document.getElementById("profPosition").value = currentUser.roleTitle || "";
  document.getElementById("profDepartment").value = currentUser.dept || "";
  document.getElementById("profPhone").value = currentUser.phone || "";
  document.getElementById("profEmail").value = currentUser.email || "";
  document.getElementById("profEducation").value = currentUser.edu || "";
  document.getElementById("profBio").value = currentUser.bio || "";
  syncProfileCV();
}

function handleProfilePhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    currentUser.photo = reader.result;
    saveState();
    syncProfileCV();
    showToast("Фото обновлено в профиле и CV");
  };
  reader.readAsDataURL(file);
}

function syncProfileCV() {
  if (!currentUser) return;
  currentUser.name = document.getElementById("profFullName").value;
  currentUser.roleTitle = document.getElementById("profPosition").value;
  currentUser.dept = document.getElementById("profDepartment").value;
  currentUser.phone = document.getElementById("profPhone").value;
  currentUser.email = document.getElementById("profEmail").value;
  currentUser.edu = document.getElementById("profEducation").value;
  currentUser.bio = document.getElementById("profBio").value;
  saveState();

  const initials = (currentUser.name || "UT").split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();
  const prev = document.getElementById("profilePhotoPreview");
  prev.innerHTML = currentUser.photo ? `<img src="${currentUser.photo}" alt="Avatar" />` : initials;

  const myStudents = getRoleScopedStudents();
  document.getElementById("cvPreviewSheet").innerHTML = `
    <div style="display:flex; align-items:center; gap:16px; padding-bottom:16px; border-bottom:1px solid var(--border); margin-bottom:16px;">
      <div class="profile-photo-preview">${currentUser.photo ? `<img src="${currentUser.photo}" alt="CV" />` : initials}</div>
      <div>
        <div style="font-size:20px; font-weight:800;">${currentUser.name}</div>
        <div style="color:var(--accent); font-weight:600; font-size:13px;">${currentUser.roleTitle} • ${currentUser.dept}</div>
        <div class="st-meta mt-6">${currentUser.phone} • ${currentUser.email}</div>
      </div>
    </div>
    <div class="mb-12"><strong>Образование:</strong> ${currentUser.edu || "—"}</div>
    <div class="mb-12"><strong>Закрепленные группы:</strong> ${currentUser.groups} (${myStudents.length} студ.)</div>
    <div><strong>Профессиональный профиль:</strong><p class="mt-6" style="font-size:13px; color:var(--text-muted);">${currentUser.bio || "—"}</p></div>
  `;
}

// ==================== 6. КАЛЕНДАРЬ И ЛИЧНЫЙ БЛОГ ====================
let selectedEventColor = "#ff6b3d";

function renderCalendarAndBlog() {
  const monthNames = currentLang === "oz"
    ? ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
    : ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  document.getElementById("calMonthTitle").textContent = `${monthNames[calMonth]} ${calYear}`;

  const weekdays = currentLang === "oz" ? ["DU", "SE", "ÇO", "PA", "JU", "ŞA", "YA"] : ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  document.getElementById("calWeekdays").innerHTML = weekdays.map(d => `<div>${d}</div>`).join("");

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  const myEvents = appState.calendarEvents.filter(ev => ev.userId === currentUser.id);
  let cells = "";
  for (let i = 0; i < offset; i++) cells += `<div></div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const dayEvs = myEvents.filter(ev => ev.date === dateStr);
    const isSelected = dateStr === selectedCalDate;

    cells += `
      <div class="cal-day-cell ${isSelected ? 'selected' : ''}" onclick="selectCalDate('${dateStr}')">
        <div class="cal-day-num">${d}</div>
        <div class="cal-dots">
          ${dayEvs.map(ev => `<span class="cal-dot" style="background:${ev.color}"></span>`).join("")}
        </div>
      </div>
    `;
  }
  document.getElementById("calDaysGrid").innerHTML = cells;

  // Список событий выбранного дня
  const selectedEvents = myEvents.filter(ev => ev.date === selectedCalDate);
  document.getElementById("selectedDayLabel").textContent = `${selectedCalDate} • ЗАПЛАНИРОВАННЫЕ СОБЫТИЯ (${selectedEvents.length})`;

  const listEl = document.getElementById("selectedDayEventsList");
  listEl.innerHTML = selectedEvents.length
    ? selectedEvents.map(ev => `
        <div class="day-event-row">
          <div>
            <div style="font-weight:700; font-size:13px;"><span style="color:${ev.color}">●</span> ${ev.time} — ${ev.title}</div>
            <div class="st-meta">${ev.desc || ""}</div>
          </div>
          <button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteCalendarEvent('${ev.id}', this)" title="Удалить событие">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
          </button>
        </div>
      `).join("")
    : `<div class="st-meta">На выбранную дату событий пока не запланировано.</div>`;

  // Личный блог
  const myBlogs = appState.blogPosts.filter(b => b.userId === currentUser.id);
  document.getElementById("blogPostsList").innerHTML = myBlogs.length
    ? myBlogs.map(b => `
        <div class="day-event-row" style="align-items:flex-start;">
          <div>
            <div style="font-weight:700; font-size:14px;">${b.title}</div>
            <div class="st-meta mb-8">${b.date}</div>
            <div style="font-size:13px;">${b.body}</div>
          </div>
          <button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteBlogPost('${b.id}', this)" title="Удалить запись">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
          </button>
        </div>
      `).join("")
    : `<div class="st-meta">Личный дневник пока пуст.</div>`;
}

function changeCalMonth(delta) {
  calMonth += delta;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendarAndBlog();
}

function selectCalDate(dateStr) {
  selectedCalDate = dateStr;
  renderCalendarAndBlog();
}

function openEventModal() {
  const colorOpts = [
    { value: "#ff6b3d", label: "Оранжевый (Важно)" },
    { value: "#2563eb", label: "Синий (Учебный процесс)" },
    { value: "#10b981", label: "Зеленый (Мероприятие)" },
    { value: "#7c3aed", label: "Фиолетовый (Личное)" }
  ];
  renderCustomSelect("evColorSelectWrap", colorOpts, selectedEventColor, (val) => {
    selectedEventColor = val;
    renderCustomSelect("evColorSelectWrap", colorOpts, val, arguments.callee);
  });
  document.getElementById("evTitle").value = "";
  document.getElementById("evDesc").value = "";
  document.getElementById("eventModal").classList.remove("hidden");
}

function saveCalendarEvent() {
  const title = document.getElementById("evTitle").value.trim();
  if (!title) {
    showToast("Введите название события");
    return;
  }
  appState.calendarEvents.push({
    id: `ev_${Date.now()}`,
    userId: currentUser.id,
    date: selectedCalDate,
    time: document.getElementById("evTime").value || "12:00",
    color: selectedEventColor,
    title,
    desc: document.getElementById("evDesc").value.trim()
  });
  saveState();
  closeModal("eventModal");
  renderCalendarAndBlog();
  showToast("Событие добавлено в календарь");
}

function deleteCalendarEvent(id, btnEl) {
  askConfirmDelete(btnEl, () => {
    appState.calendarEvents = appState.calendarEvents.filter(ev => ev.id !== id);
    saveState();
    renderCalendarAndBlog();
    showToast("Событие удалено");
  });
}

function addBlogPost() {
  const title = document.getElementById("blogPostTitle").value.trim();
  const body = document.getElementById("blogPostBody").value.trim();
  if (!title && !body) return;
  appState.blogPosts.unshift({
    id: `blog_${Date.now()}`,
    userId: currentUser.id,
    title: title || "Заметка",
    body,
    date: new Date().toLocaleDateString()
  });
  saveState();
  document.getElementById("blogPostTitle").value = "";
  document.getElementById("blogPostBody").value = "";
  renderCalendarAndBlog();
  showToast("Запись сохранена");
}

function deleteBlogPost(id, btnEl) {
  askConfirmDelete(btnEl, () => {
    appState.blogPosts = appState.blogPosts.filter(b => b.id !== id);
    saveState();
    renderCalendarAndBlog();
    showToast("Запись удалена");
  });
}

// ==================== 7. АДМИНИСТРИРОВАНИЕ ПРОФИЛЕЙ И ПАРОЛЕЙ ====================
let newUserRole = "tutor";

function renderUsersAdminTable() {
  const table = document.getElementById("usersAdminTable");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Сотрудник</th>
        <th>Роль</th>
        <th>Группы</th>
        <th>Логин</th>
        <th>Пароль (изменить)</th>
        <th>Папка Google Drive</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${appState.users.map(u => `
        <tr>
          <td><strong>${u.name}</strong></td>
          <td>${u.roleTitle}</td>
          <td>${u.groups}</td>
          <td><code>${u.login}</code></td>
          <td>
            <div style="display:flex; gap:6px; align-items:center;">
              <input type="text" id="passField_${u.id}" class="form-input" style="padding:6px 10px; width:130px;" value="${u.pass}" />
              <button type="button" class="btn-export sm" onclick="updateUserPassword('${u.id}')">Обновить</button>
            </div>
          </td>
          <td><span class="st-meta">${u.driveFolder}</span></td>
          <td style="text-align:right;">
            ${u.id !== "admin" ? `
              <button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteUserAccount('${u.id}', this)" title="Удалить профиль">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
              </button>
            ` : ""}
          </td>
        </tr>
      `).join("")}
    </tbody>
  `;
}

function updateUserPassword(userId) {
  const u = appState.users.find(x => x.id === userId);
  const newPass = document.getElementById(`passField_${userId}`).value.trim();
  if (!u || !newPass) return;
  u.pass = newPass;
  saveState();
  showToast(`Новый пароль для ${u.name} сохранен`);
}

function openNewUserModal() {
  const roleOpts = [
    { value: "tutor", label: "Тютор" },
    { value: "management", label: "Руководство / Отдел" },
    { value: "admin", label: "Администратор" }
  ];
  renderCustomSelect("nuRoleWrap", roleOpts, newUserRole, (v) => {
    newUserRole = v;
    renderCustomSelect("nuRoleWrap", roleOpts, v, arguments.callee);
  });
  document.getElementById("newUserModal").classList.remove("hidden");
}

function createNewUser() {
  const name = document.getElementById("nuName").value.trim();
  const login = document.getElementById("nuLogin").value.trim();
  const pass = document.getElementById("nuPass").value.trim();
  const groups = document.getElementById("nuGroups").value.trim() || "Не назначены";

  if (!name || !login || !pass) {
    showToast("Заполните Ф.И.О., логин и пароль");
    return;
  }
  if (appState.users.some(u => u.login === login)) {
    showToast("Такой логин уже существует");
    return;
  }

  const roleTitles = { tutor: "Тютор", management: "Руководство", admin: "Администратор" };
  appState.users.push({
    id: `user_${Date.now()}`,
    login,
    pass,
    name,
    role: newUserRole,
    roleTitle: roleTitles[newUserRole],
    dept: "Университет туризма",
    groups,
    driveFolder: `MyTutors_Private_${login}`,
    phone: "", email: "", edu: "", bio: "", photo: ""
  });

  saveState();
  closeModal("newUserModal");
  renderUsersAdminTable();
  showToast(`Кабинет для ${name} успешно открыт`);
}

function deleteUserAccount(userId, btnEl) {
  askConfirmDelete(btnEl, () => {
    appState.users = appState.users.filter(u => u.id !== userId);
    saveState();
    renderUsersAdminTable();
    showToast("Профиль удален");
  });
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}
