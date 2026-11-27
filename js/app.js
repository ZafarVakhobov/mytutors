// ==================== СЛОВАРЬ ПЕРЕВОДОВ (RU / ÖZ на новом алфавите) ====================
const I18N = {
  ru: {
    auth_title: "Вход в рабочее пространство",
    auth_desc: "Единая платформа тюторов с синхронизацией HEMIS и Google Drive.",
    login_label: "ЛОГИН ПРОФИЛЯ",
    pass_label: "ПАРОЛЬ",
    login_btn: "Войти",
    nav_dashboard: "Обзор",
    nav_students: "Студенты",
    nav_telegram: "Telegram и Отчеты",
    nav_diaries: "Дневники",
    nav_profile: "Профиль и CV",
    nav_calendar: "Календарь и Блог",
    nav_users: "Пользователи",
    drive_synced: "Google Drive синхронизирован",
    menu_edit_profile: "Редактировать профиль и CV",
    menu_logout: "Выйти из профиля",
    dash_sub: "Сводная аналитика воспитательной и тюторской деятельности",
    kpi_students: "ВСЕГО СТУДЕНТОВ",
    kpi_posts: "ПОСТЫ В TELEGRAM",
    kpi_channel: "Канал: studlifeuniv",
    kpi_gdoc_ready: "Готово к Google Doc",
    kpi_volunteers: "ВОЛОНТЕРЫ",
    kpi_vol_tags: "Направления волонтерства",
    kpi_monitoring: "МОНИТОРИНГ / СОЦРЕЕСТР",
    chart_activity_title: "Активность постов и мероприятий",
    chart_activity_sub: "Динамика публикаций и воспитательной работы по месяцам",
    chart_dist_title: "Распределение студентов",
    dist_housing: "По жилью",
    dist_social: "По соцреестру",
    dist_gender: "По полу (М/Ж)",
    dist_employment: "По работе",
    dist_study_form: "По форме обучения",
    dist_volunteers: "По волонтерству",
    dist_region: "По регионам",
    students_title: "Студенты и HEMIS",
    btn_sync_hemis: "Синхронизировать с tyutor.hemis.uz",
    btn_add_student: "Добавить студента",
    sub_all_students: "Все студенты",
    sub_housing: "Жилье",
    sub_social: "Социальный реестр",
    sub_volunteers: "Волонтеры",
    sub_employment: "Трудоустройство",
    sub_schedule: "Расписание (HEMIS)",
    ph_room_search: "Поиск комнаты № (напр. 401)",
    ph_st_search_short: "Поиск студента...",
    tg_title: "Telegram-архив и Генератор отчетов",
    tg_sub: "Импорт постов из t.me/studlifeuniv с сортировкой по датам и выгрузкой в Google Docs",
    tg_add_post: "Добавить пост по ссылке",
    btn_load_post: "Загрузить пост",
    lbl_tg_author: "Автор поста",
    lbl_tg_groups: "Группы (теги)",
    lbl_tg_collab: "Совместно с (коллаборация)",
    tg_edit_modal_title: "Редактирование поста Telegram",
    lbl_tg_url: "Ссылка на пост",
    lbl_tg_date: "Дата публикации",
    lbl_tg_text: "Текст публикации",
    lbl_tg_tags: "Теги публикации",
    ph_tg_text: "Текст поста (подтянется автоматически через Cloudflare Worker или вставьте вручную для предпросмотра)...",
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
    photo_hint: "JPG / PNG • Сохраняется в папку Google Drive",
    lbl_fio: "Ф.И.О.",
    lbl_position: "Должность",
    lbl_dept: "Факультет / Отдел",
    lbl_phone: "Телефон",
    lbl_email: "Email",
    lbl_edu: "Образование / Степень",
    lbl_bio: "Опыт работы и достижения",
    cal_title: "Календарь событий и Личный дневник",
    cal_sub: "Планирование мероприятий, напоминания и свободные заметки тютора",
    btn_add_event: "Добавить событие",
    blog_title: "Личный мини-блог и To-Do",
    mode_note: "Заметка / Блог",
    mode_todo: "Список дел (To-Do)",
    ph_note_title: "Заголовок заметки или идеи...",
    ph_note_body: "Запишите мысли, план работы со студентами или задачи...",
    ph_todo_task: "Новая задача (например: Проверить общежитие)...",
    btn_add_todo: "Добавить",
    btn_save_note: "Сохранить запись",
    users_title: "Управление профилями и паролями",
    users_sub: "Создание новых кабинетов, привязка папок Google Drive и сброс паролей",
    btn_new_user: "Открыть новый профиль",
    lbl_st_fio: "Ф.И.О. студента *",
    lbl_st_group: "Группа *",
    lbl_st_course: "Курс",
    lbl_st_gender: "Пол",
    lbl_st_phone: "Телефон студента",
    lbl_st_tutor: "Закрепленный тютор",
    lbl_st_study_form: "Форма обучения",
    lbl_st_passport: "Паспортные данные",
    lbl_st_pinfl: "ПИНФЛ (JŞŞIR)",
    lbl_st_hemis_id: "HEMIS ID",
    sec_origin: "ДАННЫЕ О ПРОИСХОЖДЕНИИ",
    lbl_st_region: "Регион / Область",
    sec_housing: "ДАННЫЕ О ПРОЖИВАНИИ",
    lbl_housing_type: "Тип жилья",
    sec_employment: "РАБОТА И ТРУДОУСТРОЙСТВО",
    lbl_emp_status: "Статус занятости",
    lbl_emp_org: "Наименование организации",
    ph_emp_org: "ООО / Гостиница / Организация...",
    lbl_emp_position: "Должность",
    ph_emp_position: "Например: Администратор / Официант",
    lbl_emp_address: "Адрес места работы",
    ph_emp_address: "г. Самарканд, ул. ...",
    lbl_emp_boss: "Ф.И.О. руководителя",
    ph_emp_boss: "Каримов Алишер Ботирович",
    lbl_emp_boss_phone: "Номер телефона руководителя",
    lbl_emp_from: "Время работы (с)",
    lbl_emp_to: "Время работы (до)",
    lbl_emp_salary: "Зарплата (UZS)",
    sec_family: "ДАННЫЕ О РОДИТЕЛЯХ И РОДСТВЕННИКАХ",
    btn_add_short: "Добавить",
    lbl_soc_cats: "Социальные категории",
    lbl_vol_dir: "Волонтерское направление",
    btn_cancel: "Отмена",
    btn_save_changes: "Сохранить изменения",
    btn_save: "Сохранить",
    mon_modal_title: "Поставить студента на мониторинг",
    lbl_student: "Студент",
    lbl_mon_cat: "Категория мониторинга",
    lbl_mon_custom: "Укажите категорию вручную",
    lbl_mon_note: "Первичная запись в дневнике",
    hemis_desc: "Вставьте список студентов из выгрузки HEMIS (каждый с новой строки в формате: Ф.И.О. | Группа | Курс | Пол (М/Ж) | Телефон) или подключите токен API HEMIS.",
    lbl_hemis_url: "API Токен / Ссылка профиля tyutor.hemis.uz",
    lbl_hemis_bulk: "Пакетный импорт списка студентов",
    btn_import_db: "Импортировать в базу",
    ev_modal_title: "Новое событие календаря",
    lbl_ev_title: "Название события",
    lbl_ev_time: "Время",
    lbl_ev_color: "Цветовая метка",
    lbl_ev_desc: "Описание / Место проведения",
    btn_save_event: "Сохранить событие",
    lbl_nu_name: "Ф.И.О. сотрудника",
    lbl_nu_login: "Логин",
    lbl_nu_pass: "Пароль",
    lbl_nu_role: "Роль",
    lbl_nu_course: "Курс",
    lbl_nu_groups: "Закрепленные группы",
    btn_create_cabinet: "Создать кабинет",
    lbl_partial_admin: "Частичные права администратора",
    desc_partial_admin: "Полный доступ к управлению и удалению данных"
  },
  oz: {
    auth_title: "Kabinetga kiriş",
    auth_desc: "HEMIS va Google Drive bilan sinxronlaşgan yagona tyutorlar platformasi.",
    login_label: "PROFIL LOGINI",
    pass_label: "PAROL",
    login_btn: "Kiriş",
    nav_dashboard: "Umumiy köriniş",
    nav_students: "Talabalar",
    nav_telegram: "Telegram va Hisobotlar",
    nav_diaries: "Kundaliklar",
    nav_profile: "Profil va CV",
    nav_calendar: "Taqvim va Blog",
    nav_users: "Foydalanuvçilar",
    drive_synced: "Google Drive sinxronlaşgan",
    menu_edit_profile: "Profil va CV ni tahrirlaş",
    menu_logout: "Profildan çiqiş",
    dash_sub: "Tarbiyaviy va tyutorlik faoliyatining yiğma tahlili",
    kpi_students: "JAMI TALABALAR",
    kpi_posts: "TELEGRAM POSTLARI",
    kpi_channel: "Kanal: studlifeuniv",
    kpi_gdoc_ready: "Google Doc uşun tayyor",
    kpi_volunteers: "VOLONTYORLAR",
    kpi_vol_tags: "Volontyorlik yönalişlari",
    kpi_monitoring: "MONITORING / IJTIMOIY REESTR",
    chart_activity_title: "Postlar va tadbirlar faolligi",
    chart_activity_sub: "Oylar böyiça naşrlar va tarbiyaviy işlar dinamikasi",
    chart_dist_title: "Talabalar taqsimoti",
    dist_housing: "Turar joy böyiça",
    dist_social: "Ijtimoiy reestr",
    dist_gender: "Jinsi böyiça (E/A)",
    dist_employment: "Iş bilan bandlik",
    dist_study_form: "Ta’lim şakli böyiça",
    dist_volunteers: "Volontyorlik böyiça",
    dist_region: "Hududlar böyiça",
    students_title: "Talabalar va HEMIS",
    btn_sync_hemis: "tyutor.hemis.uz bilan sinxronlaş",
    btn_add_student: "Talaba qöşiş",
    sub_all_students: "Barça talabalar",
    sub_housing: "Turar joy",
    sub_social: "Ijtimoiy reestr",
    sub_volunteers: "Volontyorlar",
    sub_employment: "Bandlik / Iş",
    sub_schedule: "Dars jadvali (HEMIS)",
    ph_room_search: "Xona № qidiriş (masalan, 401)",
    ph_st_search_short: "Talabani qidiriş...",
    tg_title: "Telegram arxivi va Hisobotlar konstruktori",
    tg_sub: "t.me/studlifeuniv postlarini sanalar böyiça saralaş va Google Docs ga çiqariş",
    tg_add_post: "Havola orqali post qöşiş",
    btn_load_post: "Postni yuklaş",
    lbl_tg_author: "Post muallifi",
    lbl_tg_groups: "Guruhlar (teglar)",
    lbl_tg_collab: "Hamkorlikda (kollaboratsiya)",
    tg_edit_modal_title: "Telegram postini tahrirlaş",
    lbl_tg_url: "Post havolasi",
    lbl_tg_date: "Naşr sanasi",
    lbl_tg_text: "Post matni",
    lbl_tg_tags: "Post teglari",
    ph_tg_text: "Post matni (Cloudflare Worker orqali avtomatik yuklanadi yoki qölda kiriting)...",
    report_builder: "Hisobot konstruktori (Google Doc)",
    report_sub: "Tanlangan davr va toifalar doirasida postlarni saralaş",
    period_from: "DAVR (DAN)",
    period_to: "DAVR (GAÇA)",
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
    photo_hint: "JPG / PNG • Google Drive papkasiga saqlanadi",
    lbl_fio: "F.I.Ş.",
    lbl_position: "Lavozim",
    lbl_dept: "Fakultet / Bölim",
    lbl_phone: "Telefon",
    lbl_email: "Email",
    lbl_edu: "Ma’lumoti / Ilmiy daraja",
    lbl_bio: "Iş tajribasi va yutuqlar",
    cal_title: "Tadbirlar taqvimi va Şaxsiy kundalik",
    cal_sub: "Tadbirlarni rejalashtiriş, eslatmalar va tyutorning erkin qaydları",
    btn_add_event: "Tadbir qöşiş",
    blog_title: "Şaxsiy mini-blog va To-Do",
    mode_note: "Qayd / Blog",
    mode_todo: "Işlar röyxati (To-Do)",
    ph_note_title: "Qayd yoki ğoya sarlavhasi...",
    ph_note_body: "Fikrlar, talabalar bilan işlaş rejasi yoki vazifalarni yozing...",
    ph_todo_task: "Yangi vazifa (masalan: Yotoqxonani tekşiriş)...",
    btn_add_todo: "Qöşiş",
    btn_save_note: "Qaydni saqlaş",
    users_title: "Profillar va parollarni boşqariş",
    users_sub: "Yangi kabinetlar oçiş, Google Drive papkalarini biriktiriş va parollarni tiklaş",
    btn_new_user: "Yangi profil oçiş",
    lbl_st_fio: "Talabaning F.I.Ş. *",
    lbl_st_group: "Guruh *",
    lbl_st_course: "Kurs",
    lbl_st_gender: "Jinsi",
    lbl_st_phone: "Talaba telefoni",
    lbl_st_tutor: "Biriktirilgan tyutor",
    lbl_st_study_form: "Ta’lim şakli",
    lbl_st_passport: "Pasport ma’lumotlari",
    lbl_st_pinfl: "JŞŞIR (PINFL)",
    lbl_st_hemis_id: "HEMIS ID",
    sec_origin: "KELIB ÇIQIŞI (HUDUD)",
    lbl_st_region: "Viloyat / Şahar",
    sec_housing: "TURAR JOY MA’LUMOTLARI",
    lbl_housing_type: "Turar joy turi",
    sec_employment: "IŞ VA BANDLIK MA’LUMOTLARI",
    lbl_emp_status: "Bandlik holati",
    lbl_emp_org: "Taşkilot nomi",
    ph_emp_org: "MÇJ / Mehmonxona / Taşkilot...",
    lbl_emp_position: "Lavozimi",
    ph_emp_position: "Masalan: Administrator / Ofitsiant",
    lbl_emp_address: "Iş joyi manzili",
    ph_emp_address: "Samarqand ş., ... köçasi",
    lbl_emp_boss: "Rahbarning F.I.Ş.",
    ph_emp_boss: "Karimov Alişer Botiroviç",
    lbl_emp_boss_phone: "Rahbar telefon raqami",
    lbl_emp_from: "Iş vaqti (dan)",
    lbl_emp_to: "Iş vaqti (gaça)",
    lbl_emp_salary: "Oylik maosh (UZS)",
    sec_family: "OTA-ONALAR VA QARINDOŞLAR MA’LUMOTLARI",
    btn_add_short: "Qöşiş",
    lbl_soc_cats: "Ijtimoiy toifalar",
    lbl_vol_dir: "Volontyorlik yönalişi",
    btn_cancel: "Bekor qiliş",
    btn_save_changes: "Özgarishlarni saqlaş",
    btn_save: "Saqlaş",
    mon_modal_title: "Talabani monitoringga qöyiş",
    lbl_student: "Talaba",
    lbl_mon_cat: "Monitoring toifasi",
    lbl_mon_custom: "Toifani qölda kiriting",
    lbl_mon_note: "Kundalikdagi dastlabki qayd",
    hemis_desc: "HEMIS tizimidan talabalar röyxatini joylaştirinq (har bir qatorda: F.I.Ş. | Guruh | Kurs | Jinsi (E/A) | Telefon) yoki HEMIS API tokenini ulang.",
    lbl_hemis_url: "API Token / tyutor.hemis.uz profil havolasi",
    lbl_hemis_bulk: "Talabalar röyxatini ommaviy import qiliş",
    btn_import_db: "Bazaga import qiliş",
    ev_modal_title: "Taqvimda yangi tadbir",
    lbl_ev_title: "Tadbir nomi",
    lbl_ev_time: "Vaqti",
    lbl_ev_color: "Rang belgisi",
    lbl_ev_desc: "Tavsif / Ötkaziliş joyi",
    btn_save_event: "Tadbirni saqlaş",
    lbl_nu_name: "Xodimning F.I.Ş.",
    lbl_nu_login: "Login",
    lbl_nu_pass: "Parol",
    lbl_nu_role: "Rol",
    lbl_nu_course: "Kurs",
    lbl_nu_groups: "Biriktirilgan guruhlar",
    btn_create_cabinet: "Kabinet oçiş",
    lbl_partial_admin: "Qisman administrator huquqlari",
    desc_partial_admin: "Ma’lumotlarni boşqariş va öçirişga töliq ruxsat"
  }
};

function t(ruText, ozText) {
  return currentLang === "oz" ? ozText : ruText;
}

const STORAGE_KEY = "mytutors_uz_state_v3";
const SESSION_USER_KEY = "mytutors_uz_session_user_v1";
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyTLIm6lvnKEE2Ol1JlylHM3QCuhJu_-7Cz0eB_8xBhsFdOhBUQmQ8FrZR4b2hPUq4y/exec";

// ==================== ПРЕДУСТАНОВЛЕННЫЕ 16 ПРОФИЛЕЙ ====================
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
  "#Ma’rifatUlaşib", "#YaşilMakon", "#HealthWeek", "#BeşTaşabbus",
  "#Munozara", "#YoşlarKuni", "#TalabalarHayoti", "#Ekologiya", "#Sport"
];

const SOCIAL_CATEGORIES = [
  { value: "Сироты", ru: "Сироты", oz: "Yetimlar" },
  { value: "Инвалидность", ru: "Инвалидность", oz: "Nogironligi bor" },
  { value: "Железная тетрадь", ru: "Железная тетрадь", oz: "Temir daftar" },
  { value: "Женская тетрадь", ru: "Женская тетрадь", oz: "Ayollar daftari" },
  { value: "Малообеспеченные", ru: "Малообеспеченные", oz: "Kam ta’minlangan" }
];


const STUDY_FORMS = [
  { value: "full_grant", ru: "Полный грант", oz: "Töliq grant" },
  { value: "half_grant", ru: "50% грант", oz: "50% grant" },
  { value: "privileged_grant", ru: "Льготный грант", oz: "Imtiyozli grant" },
  { value: "contract", ru: "Контрактная основа", oz: "Tölov-kontrakt" }
];


const UZ_REGIONS = [
  "Qoraqalpoğiston Respublikasi",
  "Andijon viloyati",
  "Buxoro viloyati",
  "Farğona viloyati",
  "Jizzax viloyati",
  "Namangan viloyati",
  "Navoiy viloyati",
  "Qaşqadaryo viloyati",
  "Samarqand viloyati",
  "Samarqand şahri",
  "Sirdaryo viloyati",
  "Surxondaryo viloyati",
  "Toşkent viloyati",
  "Toşkent şahri",
  "Xorazm viloyati"
];

let regionSearchQuery = "";
let _cachedCountries = null;

// Загружаем точный международный справочник стран (ISO-3166) без опечаток
function getWorldCountriesList() {
  if (_cachedCountries) return _cachedCountries;
  const list = [
    ["Afğoniston", "афганистан afghanistan"],
    ["AQŞ", "сша америка usa united states"],
    ["Armaniston", "армения armenia"],
    ["Avstraliya", "австралия australia"],
    ["Avstriya", "австрия austria"],
    ["Bahrayn", "бахрейн bahrain"],
    ["Bangladeş", "бангладеш bangladesh"],
    ["Belarus", "беларусь белоруссия belarus"],
    ["Belgiya", "бельгия belgium"],
    ["Birlaşgan Arab Amirliklari (BAA)", "оаэ эмираты uae dubai"],
    ["Bolgariya", "болгария bulgaria"],
    ["Braziliya", "бразилия brazil"],
    ["Buyuk Britaniya", "великобритания англия uk britain"],
    ["Çexiya", "чехия czech"],
    ["Daniya", "дания denmark"],
    ["Eron", "иран iran"],
    ["Estoniya", "эстония estonia"],
    ["Filippin", "филиппины philippines"],
    ["Finlandiya", "финляндия finland"],
    ["Fransiya", "франция france"],
    ["Germaniya", "германия germany"],
    ["Gretsiya", "греция greece"],
    ["Gruziya", "грузия georgia"],
    ["Hindiston", "индия india"],
    ["Indoneziya", "индонезия indonesia"],
    ["Iordaniya", "иордания jordan"],
    ["Iroq", "ирак iraq"],
    ["Irlandiya", "ирландия ireland"],
    ["Ispaniya", "испания spain"],
    ["Isroil", "израиль israel"],
    ["Italiya", "италия italy"],
    ["Janubiy Koreya", "южная корея south korea"],
    ["Kanada", "канада canada"],
    ["Kipr", "кипр cyprus"],
    ["Kuba", "куба cuba"],
    ["Kuvayt", "кувейт kuwait"],
    ["Latviya", "латвия latvia"],
    ["Litva", "литва lithuania"],
    ["Livan", "ливан lebanon"],
    ["Malayziya", "малайзия malaysia"],
    ["Marokaş", "марокко morocco"],
    ["Meksika", "мексика mexico"],
    ["Misr", "египет egypt"],
    ["Moldova", "молдова moldova"],
    ["Möğuliston", "монголия mongolia"],
    ["Nepal", "непал nepal"],
    ["Niderlandiya", "нидерланды голландия netherlands"],
    ["Norvegiya", "норвегия norway"],
    ["Ozarbayjon", "азербайджан azerbaijan"],
    ["Pokiston", "пакистан pakistan"],
    ["Polşa", "польша poland"],
    ["Portugaliya", "португалия portugal"],
    ["Qatar", "катар qatar"],
    ["Qirğiziston", "кыргызстан киргизия kyrgyzstan"],
    ["Qozoğiston", "казахстан kazakhstan"],
    ["Rossiya", "россия russia"],
    ["Ruminiya", "румыния romania"],
    ["Saudiya Arabistoni", "саудовская аравия saudi arabia"],
    ["Serbiya", "сербия serbia"],
    ["Singapur", "сингапур singapore"],
    ["Slovakiya", "словакия slovakia"],
    ["Sloveniya", "словения slovenia"],
    ["Suriya", "сирия syria"],
    ["Şimoliy Koreya", "северная корея north korea"],
    ["Şvetsariya", "швейцария switzerland"],
    ["Şvetsiya", "швеция sweden"],
    ["Tailand", "таиланд thailand"],
    ["Tojikiston", "таджикистан tajikistan"],
    ["Tunis", "тунис tunisia"],
    ["Turkiya", "турция turkey"],
    ["Turkmaniston", "туркменистан туркмения turkmenistan"],
    ["Ukraina", "украина ukraine"],
    ["Ummon", "оман oman"],
    ["Vengriya", "венгрия hungary"],
    ["Vyetnam", "вьетнам vietnam"],
    ["Xitoy", "китай china"],
    ["Xorvatiya", "хорватия croatia"],
    ["Yaman", "йемен yemen"],
    ["Yangi Zelandiya", "новая зеландия new zealand"],
    ["Yaponiya", "япония japan"]
  ];
  _cachedCountries = list.map(([uz, kw]) => ({
    value: uz,
    label: uz,
    search: `${uz} ${kw}`.toLowerCase()
  }));
  return _cachedCountries;
}

function renderStudentRegionSelect() {
  const wrap = document.getElementById("stRegionSelectWrap");
  if (!wrap) return;
  const currentLabel = modalStudentState.region || t("Выберите регион или страну...", "Hudud yoki davlatni tanlang...");

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('stRegionSelectWrap'); setTimeout(() => { const i = document.getElementById('regionSearchInput'); if(i) i.focus(); }, 30);">
      <span>${currentLabel}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" style="padding: 8px;" onclick="event.stopPropagation()">
      <input type="text" id="regionSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск области или страны (напр. Xitoy, Hindiston)...", "Viloyat yoki davlat qidiriş (masalan: Xitoy, Hindiston)...")}" value="${regionSearchQuery}" oninput="renderRegionOptionsList()" />
      <div id="regionOptionsList" class="tg-tag-search-list"></div>
    </div>
  `;
  renderRegionOptionsList();
}

function renderRegionOptionsList() {
  const listEl = document.getElementById("regionOptionsList");
  const inp = document.getElementById("regionSearchInput");
  if (!listEl) return;

  regionSearchQuery = inp ? inp.value : "";
  const q = regionSearchQuery.trim().toLowerCase();
  const checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5l10 -10"/></svg>';

  const uzMatches = q
    ? UZ_REGIONS.filter(r => r.toLowerCase().includes(q))
    : UZ_REGIONS;

  const countries = getWorldCountriesList();
  const countryMatches = q
    ? countries.filter(c => c.search.includes(q))
    : countries;

  let html = "";
  if (uzMatches.length) {
    html += `<div class="cs-divider-label">${t("Узбекистан", "Özbekiston")}</div>`;
    html += uzMatches.map(r => `
      <div class="cs-option ${modalStudentState.region === r ? 'selected' : ''}" onclick="selectStudentRegion('${r.replace(/'/g, "\\'")}')">
        <span>${r}</span>
        ${modalStudentState.region === r ? checkSvg : ''}
      </div>
    `).join("");
  }

  if (countryMatches.length) {
    html += `<div class="cs-divider-label">${t("Зарубежные страны", "Xorijiy davlatlar")}</div>`;
    html += countryMatches.slice(0, q ? 20 : 15).map(c => `
      <div class="cs-option ${modalStudentState.region === c.value ? 'selected' : ''}" onclick="selectStudentRegion('${c.value.replace(/'/g, "\\'")}')">
        <span>${c.label}</span>
        ${modalStudentState.region === c.value ? checkSvg : ''}
      </div>
    `).join("");
  }

  listEl.innerHTML = html || `<div class="st-meta" style="padding:8px 10px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`;
}

function selectStudentRegion(val) {
  modalStudentState.region = val;
  regionSearchQuery = "";
  const wrap = document.getElementById("stRegionSelectWrap");
  if (wrap) wrap.classList.remove("open");
  renderStudentRegionSelect();
}

const VOLUNTEER_DIRECTIONS = [
  { value: "Не состоит", ru: "Не состоит", oz: "A’zo emas" },
  { value: "Эко-волонтеры", ru: "Эко-волонтеры", oz: "Eko-volontyorlar" },
  { value: "Волонтеры Приемной кампании", ru: "Волонтеры Приемной кампании", oz: "Qabul komissiyasi volontyorlari" },
  { value: "Медиа-волонтеры", ru: "Медиа-волонтеры", oz: "Media-volontyorlar" },
  { value: "Культурно-массовый сектор", ru: "Культурно-массовый сектор", oz: "Madaniy-ommaviy sektor" }
];


function getStudentVolunteers(s) {
  if (!s) return [];
  const raw = Array.isArray(s.volunteer)
    ? s.volunteer
    : (Array.isArray(s.volunteers) ? s.volunteers : (s.volunteer ? [s.volunteer] : []));
  return [...new Set(raw.map(v => String(v || "").trim()).filter(v => v && v !== "Не состоит"))];
}

const MONITORING_CATEGORIES = [
  { value: "Курение", ru: "Курение", oz: "Çekiş" },
  { value: "Хиджаб", ru: "Хиджаб", oz: "Römolli" },
  { value: "Борода", ru: "Борода", oz: "Soqol" },
  { value: "Прогулы", ru: "Прогулы", oz: "Dars qoldiriş" },
  { value: "Другое...", ru: "Другое...", oz: "Boşqa..." }
];

const RELATIVE_TYPES = [
  { value: "Мать", ru: "Мать", oz: "Onasi" },
  { value: "Отец", ru: "Отец", oz: "Otasi" },
  { value: "Дедушка", ru: "Дедушка", oz: "Bobosi" },
  { value: "Бабушка", ru: "Бабушка", oz: "Buvisi" },
  { value: "Тётя", ru: "Тётя", oz: "Xolasi / Ammasi" },
  { value: "Дядя", ru: "Дядя", oz: "Toğasi / Amakisi" },
  { value: "Брат", ru: "Брат", oz: "Akasi / Ukasi" },
  { value: "Сестра", ru: "Сестра", oz: "Opasi / Singlisi" },
  { value: "Отчим", ru: "Отчим", oz: "Ögay otasi" },
  { value: "Мачеха", ru: "Мачеха", oz: "Ögay onasi" },
  { value: "Другое...", ru: "Другое...", oz: "Boşqa..." }
];

function getLabelFromDict(dictArr, val) {
  const found = dictArr.find(x => x.value === val);
  if (!found) return val;
  return currentLang === "oz" ? found.oz : found.ru;
}

const USER_ROLES = [
  { value: "tutor", ru: "Тютор", oz: "Tyutor" },
  { value: "management", ru: "Руководство / Отдел", oz: "Rahbariyat / Bölim" },
  { value: "psychologist", ru: "Психолог", oz: "Psixolog" },
  { value: "inspector", ru: "Инспектор", oz: "Inspektor" },
  { value: "womens_council", ru: "Женский совет", oz: "Xotin-qizlar kengaşi" },
  { value: "admin", ru: "Главный администратор", oz: "Boş administrator" }
];

function localizeRoleTitle(role, fallbackTitle) {
  const found = USER_ROLES.find(r => r.value === role);
  if (found) {
    return currentLang === "oz" ? found.oz : found.ru;
  }
  return fallbackTitle || (role === "tutor" ? t("Тютор", "Tyutor") : "");
}

function isFullAdmin(user = currentUser) {
  return !!(user && user.role === "admin");
}

function hasAdminPrivileges(user = currentUser) {
  return !!(user && (user.role === "admin" || user.partialAdmin === true));
}

function isTutorOnly(user = currentUser) {
  return !!(user && user.role === "tutor" && !user.partialAdmin);
}

function canDeleteData(ownerId) {
  if (!currentUser) return false;
  if (hasAdminPrivileges(currentUser)) return true;
  if (isTutorOnly()) {
    return ownerId === currentUser.id;
  }
  return false;
}

// ==================== СОСТОЯНИЕ И СИНХРОНИЗАЦИЯ БЕЗ ДУБЛИКАТОВ ====================
let appState = loadState();
let currentUser = null;
let currentLang = "ru";
let activeTab = "dashboard";
let activeStudentSubtab = "all";
let activeHousingFilter = "all";
let activeEmploymentFilter = "all";
let activeVolunteerFilter = "all";
let volFilterSearchQuery = "";
let activeDiarySubtab = "monitoring";
let activeMonitoringFilter = "active";
let activeTgTagFilter = "all";
let selectedNewPostTags = ["#TalabalarHayoti"];
let distChartMode = "housing";
let distSelectedGroup = "all";
let blogActiveMode = "note";

let dashFilters = { tutor: "all", course: "all", group: "all", gender: "all" };
let studentListFilters = { search: "", tutors: [], course: "all", group: "all", gender: "all" };
let stFilterTutorSearch = "";
let calYear = 2026;
let calMonth = 10;
let selectedCalDate = "2026-11-26";

let activityChartInstance = null;
let distChartInstance = null;
let tempFamilyMembers = [];

function deduplicateById(arr) {
  if (!Array.isArray(arr)) return [];
  const seen = new Set();
  const res = [];
  for (const item of arr) {
    if (!item || typeof item !== "object") continue;
    const key = item.id || JSON.stringify(item);
    if (!seen.has(key)) {
      seen.add(key);
      res.push(item);
    }
  }
  return res;
}

function sanitizeAppState(rawObj) {
  const base = rawObj || {};
  return {
    users: deduplicateById(base.users || JSON.parse(JSON.stringify(DEFAULT_USERS))),
    students: deduplicateById(base.students || []),
    tgPosts: deduplicateById(base.tgPosts || []),
    monitoring: deduplicateById(base.monitoring || []),
    parentMeetings: deduplicateById(base.parentMeetings || []),
    schedule: deduplicateById(base.schedule || []),
    calendarEvents: deduplicateById(base.calendarEvents || []),
    blogPosts: deduplicateById(base.blogPosts || []),
    todos: deduplicateById(base.todos || []),
    customTags: Array.isArray(base.customTags) ? [...new Set(base.customTags.filter(Boolean))] : [],
    recentTags: Array.isArray(base.recentTags) ? [...new Set(base.recentTags.filter(Boolean))] : [],
    customVolunteers: Array.isArray(base.customVolunteers) ? [...new Set(base.customVolunteers.filter(Boolean))] : [],
    customSocialCategories: Array.isArray(base.customSocialCategories) ? [...new Set(base.customSocialCategories.filter(Boolean))] : []
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return sanitizeAppState(JSON.parse(raw));
    }
  } catch (e) {}
  return sanitizeAppState(null);
}

// Изолированная отправка данных: каждый тютор сохраняет в папку user_<id> ТОЛЬКО свои записи,
// а админ — полный снимок (или свои записи + реестр пользователей), чтобы удаленные записи не воскресали!
function buildPayloadForCurrentUser() {
  if (!currentUser) return appState;
  if (isTutorOnly()) {
    return {
      students: appState.students.filter(s => s.tutorId === currentUser.id),
      tgPosts: appState.tgPosts.filter(p => p.authorId === currentUser.id),
      monitoring: appState.monitoring.filter(m => m.tutorId === currentUser.id),
      parentMeetings: appState.parentMeetings.filter(m => m.tutorId === currentUser.id),
      schedule: appState.schedule.filter(sc => !sc.tutorId || sc.tutorId === currentUser.id),
      calendarEvents: appState.calendarEvents.filter(ev => ev.userId === currentUser.id),
      blogPosts: appState.blogPosts.filter(b => b.userId === currentUser.id),
      todos: appState.todos.filter(td => td.userId === currentUser.id),
      customTags: appState.customTags || [],
      recentTags: appState.recentTags || [],
      customVolunteers: appState.customVolunteers || [],
      customSocialCategories: appState.customSocialCategories || []
    };
  }
  // Для админа/руководства: сохраняем их личные записи (календарь, блог, todo, посты без привязки к тютору)
  return {
    users: appState.users,
    students: appState.students.filter(s => s.tutorId === currentUser.id),
    tgPosts: appState.tgPosts.filter(p => p.authorId === currentUser.id),
    monitoring: appState.monitoring.filter(m => m.tutorId === currentUser.id),
    parentMeetings: appState.parentMeetings.filter(m => m.tutorId === currentUser.id),
    schedule: appState.schedule,
    calendarEvents: appState.calendarEvents.filter(ev => ev.userId === currentUser.id),
    blogPosts: appState.blogPosts.filter(b => b.userId === currentUser.id),
    todos: appState.todos.filter(td => td.userId === currentUser.id),
    customTags: appState.customTags || [],
    recentTags: appState.recentTags || [],
    customVolunteers: appState.customVolunteers || [],
    customSocialCategories: appState.customSocialCategories || []
  };
}

function saveState(skipCloudSync = false) {
  appState = sanitizeAppState(appState);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));

  if (!skipCloudSync && currentUser && APPS_SCRIPT_URL.includes("/exec")) {
    const scopedData = buildPayloadForCurrentUser();
    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        action: "saveUserData",
        userId: currentUser.id,
        data: scopedData
      })
    }).catch(() => {});
  }
}

// Если админ отредактировал или удалил студента/пост конкретного тютора — синхронизируем и папку этого тютора
function syncSpecificTutorFolder(tutorId) {
  if (!tutorId || !APPS_SCRIPT_URL.includes("/exec")) return;
  if (currentUser && currentUser.id === tutorId) return; // Уже синхронизируется через saveState()

  const tutorPayload = {
    students: appState.students.filter(s => s.tutorId === tutorId),
    tgPosts: appState.tgPosts.filter(p => p.authorId === tutorId),
    monitoring: appState.monitoring.filter(m => m.tutorId === tutorId),
    parentMeetings: appState.parentMeetings.filter(m => m.tutorId === tutorId),
    schedule: appState.schedule.filter(sc => !sc.tutorId || sc.tutorId === tutorId),
    calendarEvents: appState.calendarEvents.filter(ev => ev.userId === tutorId),
    blogPosts: appState.blogPosts.filter(b => b.userId === tutorId),
    todos: appState.todos.filter(td => td.userId === tutorId)
  };

  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      action: "saveUserData",
      userId: tutorId,
      data: tutorPayload
    })
  }).catch(() => {});
}

// ==================== УНИВЕРСАЛЬНОЕ ПОДТВЕРЖДЕНИЕ ПЕРЕД УДАЛЕНИЕМ ====================
let pendingDeleteCallback = null;

function askConfirmDelete(anchorBtn, onConfirm, customMessage) {
  const popover = document.getElementById("confirmPopover");
  const textEl = document.getElementById("confirmPopoverText");
  textEl.textContent = customMessage || t("Вы точно хотите удалить?", "Rostdan ham öçirmoqçimisiz?");
  document.getElementById("confirmYesBtn").textContent = t("Да", "Ha");
  document.getElementById("confirmNoBtn").textContent = t("Нет", "Yöq");
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
  if (!e.target.closest("#userDropdownWrap")) {
    closeUserDropdown();
  }
  if (!e.target.closest(".tg-all-tags-dropdown")) {
    document.querySelectorAll(".tg-all-tags-dropdown.open").forEach(el => el.classList.remove("open"));
  }
  if (!e.target.closest(".custom-tag-inline-wrap")) {
    const ac = document.getElementById("customTagAutocomplete");
    if (ac) ac.classList.add("hidden");
    const sac = document.getElementById("customSocialAutocomplete");
    if (sac) sac.classList.add("hidden");
  }
  if (!e.target.closest(".social-other-dropdown")) {
    document.querySelectorAll(".social-other-dropdown.open").forEach(el => el.classList.remove("open"));
  }
});

// ==================== ВЫПАДАЮЩЕЕ МЕНЮ ПРОФИЛЯ В ШАПКЕ ====================
function toggleUserDropdown(e) {
  if (e) e.stopPropagation();
  const wrap = document.getElementById("userDropdownWrap");
  const menu = document.getElementById("userDropdownMenu");
  if (!wrap || !menu) return;
  const isOpen = !menu.classList.contains("hidden");
  if (isOpen) {
    closeUserDropdown();
  } else {
    menu.classList.remove("hidden");
    wrap.classList.add("open");
  }
}

function closeUserDropdown() {
  const wrap = document.getElementById("userDropdownWrap");
  const menu = document.getElementById("userDropdownMenu");
  if (menu) menu.classList.add("hidden");
  if (wrap) wrap.classList.remove("open");
}

// ==================== ЯЗЫК И ТЕМА ====================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("mytutors_lang_v1", lang);
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

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (I18N[lang] && I18N[lang][key]) {
      el.setAttribute("placeholder", I18N[lang][key]);
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

// ==================== АВТОРИЗАЦИЯ И СИНХРОНИЗАЦИЯ ====================
async function loadFromGoogleDrive() {
  if (!currentUser || typeof APPS_SCRIPT_URL === "undefined" || !APPS_SCRIPT_URL.includes("/exec")) return;
  showToast(t("Загрузка базы из Google Drive...", "Google Drive dan ma’lumotlar yuklanmoqda..."));
  try {
    const reqRole = hasAdminPrivileges() ? "admin" : currentUser.role;
    const url = `${APPS_SCRIPT_URL}?userId=${encodeURIComponent(currentUser.id)}&role=${encodeURIComponent(reqRole)}&t=${Date.now()}`;
    const res = await fetch(url, { method: "GET", redirect: "follow" });
    const json = await res.json();

    if (json.status === "ok" && json.data) {
      const savedUsers = appState.users;
      const incoming = json.data;

      // Если заходит тютор — загружаем строго его актуальные данные, перезаписывая устаревший кэш
      if (isTutorOnly()) {
        appState = sanitizeAppState({
          users: savedUsers,
          students: (incoming.students || []).filter(s => s.tutorId === currentUser.id),
          tgPosts: (incoming.tgPosts || []).filter(p => p.authorId === currentUser.id),
          monitoring: (incoming.monitoring || []).filter(m => m.tutorId === currentUser.id),
          parentMeetings: (incoming.parentMeetings || []).filter(m => m.tutorId === currentUser.id),
          schedule: incoming.schedule || [],
          calendarEvents: (incoming.calendarEvents || []).filter(ev => ev.userId === currentUser.id),
          blogPosts: (incoming.blogPosts || []).filter(b => b.userId === currentUser.id),
          todos: (incoming.todos || []).filter(td => td.userId === currentUser.id),
          customTags: incoming.customTags || appState.customTags || [],
          recentTags: incoming.recentTags || appState.recentTags || [],
          customVolunteers: incoming.customVolunteers || appState.customVolunteers || [],
          customSocialCategories: incoming.customSocialCategories || appState.customSocialCategories || []
        });
      } else {
        // Админ/руководство получает объединенный и дедуплицированный реестр по всем папкам
        appState = sanitizeAppState({
          users: (currentUser.role === "admin" && Array.isArray(incoming.users) && incoming.users.length) ? incoming.users : savedUsers,
          students: incoming.students || [],
          tgPosts: incoming.tgPosts || [],
          monitoring: incoming.monitoring || [],
          parentMeetings: incoming.parentMeetings || [],
          schedule: incoming.schedule || [],
          calendarEvents: (incoming.calendarEvents || []).filter(ev => ev.userId === currentUser.id),
          blogPosts: (incoming.blogPosts || []).filter(b => b.userId === currentUser.id),
          todos: (incoming.todos || []).filter(td => td.userId === currentUser.id),
          customTags: incoming.customTags || appState.customTags || [],
          recentTags: incoming.recentTags || appState.recentTags || [],
          customVolunteers: incoming.customVolunteers || appState.customVolunteers || [],
          customSocialCategories: incoming.customSocialCategories || appState.customSocialCategories || []
        });
      }

      // Синхронизируем ссылку на currentUser (включая фото профиля)
      const refreshedMe = appState.users.find(u => u.id === currentUser.id);
      if (refreshedMe) {
        currentUser = refreshedMe;
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      updateHeaderAndGreeting();
      loadProfileForm();
      renderAllViews();
      showToast(t("База синхронизирована с Google Drive", "Baza Google Drive dan sinxronlandi"));
    }
  } catch (err) {
    showToast(t("Работаем с локальной копией данных", "Lokal keshdan foydalanilmoqda"));
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const login = document.getElementById("loginUsername").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();
  const errEl = document.getElementById("loginError");
  const submitBtn = e.target.querySelector("button[type='submit']");

  errEl.classList.add("hidden");
  if (submitBtn) submitBtn.disabled = true;

  try {
    if (typeof APPS_SCRIPT_URL !== "undefined" && APPS_SCRIPT_URL.includes("/exec")) {
      const res = await fetch(`${APPS_SCRIPT_URL}?action=getUsers&t=${Date.now()}`, {
        method: "GET",
        redirect: "follow"
      });
      const json = await res.json();
      if (json.status === "ok" && Array.isArray(json.users) && json.users.length) {
        appState.users = deduplicateById(json.users);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      }
    }
  } catch (err) {
    console.warn("Используем локальный список пользователей:", err);
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }

  const found = appState.users.find(u => u.login === login && u.pass === pass);
  if (!found) {
    errEl.textContent = t("Неверный логин или пароль профиля.", "Login yoki parol notöğri kiritildi.");
    errEl.classList.remove("hidden");
    return;
  }

  errEl.classList.add("hidden");
  currentUser = found;
  selectedPostAuthorId = found.id;
  localStorage.setItem(SESSION_USER_KEY, found.id);
  document.getElementById("authScreen").classList.add("hidden");
  document.getElementById("appShell").classList.remove("hidden");
  document.getElementById("navUsersBtn").classList.toggle("hidden", currentUser.role !== "admin");

  dashFilters = {
    tutor: isTutorOnly() ? currentUser.id : "all",
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
  localStorage.removeItem(SESSION_USER_KEY);
  document.getElementById("appShell").classList.add("hidden");
  document.getElementById("authScreen").classList.remove("hidden");
  document.getElementById("loginPassword").value = "";
}

function restoreSession() {
  const savedLang = localStorage.getItem("mytutors_lang_v1");
  if (savedLang === "oz" || savedLang === "ru") {
    setLanguage(savedLang);
  }

  const savedId = localStorage.getItem(SESSION_USER_KEY);
  if (!savedId || !Array.isArray(appState.users)) return;

  const found = appState.users.find(u => u.id === savedId);
  if (!found) return;

  currentUser = found;
  selectedPostAuthorId = found.id;
  document.getElementById("authScreen").classList.add("hidden");
  document.getElementById("appShell").classList.remove("hidden");
  document.getElementById("navUsersBtn").classList.toggle("hidden", currentUser.role !== "admin");

  dashFilters = {
    tutor: isTutorOnly() ? currentUser.id : "all",
    course: "all",
    group: "all",
    gender: "all"
  };

  updateHeaderAndGreeting();
  loadProfileForm();
  switchTab("dashboard");
  if (typeof loadFromGoogleDrive === "function") {
    loadFromGoogleDrive();
  }
}

function updateHeaderAndGreeting() {
  if (!currentUser) return;
  const initials = (currentUser.name || "UT").split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();
  const avatarEl = document.getElementById("headerUserAvatar");
  if (avatarEl) {
    avatarEl.innerHTML = currentUser.photo
      ? `<img src="${currentUser.photo}" alt="Avatar" />`
      : initials;
  }
  document.getElementById("headerUserName").textContent = currentUser.name;
  document.getElementById("headerUserRole").textContent = localizeRoleTitle(currentUser.role, currentUser.roleTitle);
  document.getElementById("driveTooltip").textContent = `Google Drive: ${currentUser.driveFolder}`;

  const greetPrefix = t("Добро пожаловать", "Xuş kelibsiz");
  document.getElementById("welcomeGreeting").textContent = `${greetPrefix}, ${currentUser.name}`;
}

function getVisibleStudents() {
  let list = appState.students;
  if (isTutorOnly()) {
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
  if (isTutorOnly()) {
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
  if (!activeBtn || !slider) {
    if (slider) slider.style.width = "0px";
    return;
  }
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
  const scopedStudents = getRoleScopedStudents();

  if (isTutorOnly()) {
    filterTutorWrap.classList.add("hidden");
  } else {
    filterTutorWrap.classList.remove("hidden");
    const tutorOpts = [{ value: "all", label: t("Все тюторы", "Barça tyutorlar") }]
      .concat(tutors.map(tr => ({ value: tr.id, label: tr.name })));
    renderCustomSelect("filterTutorWrap", tutorOpts, dashFilters.tutor, (val) => {
      dashFilters.tutor = val;
      if (val === "all") {
        dashFilters.course = "all";
      } else {
        const trObj = appState.users.find(u => u.id === val);
        dashFilters.course = (trObj && trObj.course) ? String(trObj.course) : "all";
      }
      renderDashboard();
    });
  }

  // Умный фильтр курсов: учитывает курс, прикрепленный к профилю тютора
  let courseOpts = [];
  const activeTutorForCourse = isTutorOnly()
    ? currentUser
    : (dashFilters.tutor !== "all" ? appState.users.find(u => u.id === dashFilters.tutor) : null);

  if (activeTutorForCourse && activeTutorForCourse.course) {
    const tc = String(activeTutorForCourse.course);
    dashFilters.course = tc;
    courseOpts = [{ value: tc, label: `${tc} ${t("курс", "kurs")}` }];
  } else if (isTutorOnly()) {
    const tutorCourses = [...new Set(scopedStudents.map(s => String(s.course)).filter(Boolean))].sort();
    if (tutorCourses.length === 1) {
      dashFilters.course = tutorCourses[0];
      courseOpts = [{ value: tutorCourses[0], label: `${tutorCourses[0]} ${t("курс", "kurs")}` }];
    } else if (tutorCourses.length > 1) {
      if (dashFilters.course !== "all" && !tutorCourses.includes(String(dashFilters.course))) {
        dashFilters.course = "all";
      }
      courseOpts = [{ value: "all", label: t("Все курсы", "Barça kurslar") }]
        .concat(tutorCourses.map(c => ({ value: c, label: `${c} ${t("курс", "kurs")}` })));
    } else {
      dashFilters.course = "all";
      courseOpts = [{ value: "all", label: t("Курс не задан", "Kurs kiritilmagan") }];
    }
  } else {
    courseOpts = [
      { value: "all", label: t("Все курсы", "Barça kurslar") },
      { value: "1", label: `1 ${t("курс", "kurs")}` },
      { value: "2", label: `2 ${t("курс", "kurs")}` },
      { value: "3", label: `3 ${t("курс", "kurs")}` },
      { value: "4", label: `4 ${t("курс", "kurs")}` }
    ];
  }

  renderCustomSelect("filterCourseWrap", courseOpts, dashFilters.course, (val) => {
    dashFilters.course = val;
    renderDashboard();
  });

  const invalidGroupLabels = new Set(["Все группы", "Не назначены", "Biriktirilmagan", "—", ""]);
  const parseUserGroups = (u) => {
    if (!u || !u.groups) return [];
    return String(u.groups)
      .split(",")
      .map(g => g.trim())
      .filter(g => g && !invalidGroupLabels.has(g));
  };

  let uniqueGroups = [];
  if (isTutorOnly()) {
    uniqueGroups = [...new Set(parseUserGroups(currentUser))];
  } else if (dashFilters.tutor !== "all") {
    const selectedTutor = appState.users.find(u => u.id === dashFilters.tutor);
    uniqueGroups = [...new Set(parseUserGroups(selectedTutor))];
  } else {
    const allSet = new Set();
    appState.users.filter(u => u.role === "tutor").forEach(tr => {
      parseUserGroups(tr).forEach(g => allSet.add(g));
    });
    uniqueGroups = [...allSet].sort((a, b) => a.localeCompare(b));
  }

  if (dashFilters.group !== "all" && !uniqueGroups.includes(dashFilters.group)) {
    dashFilters.group = "all";
  }

  const groupOpts = [{ value: "all", label: t("Все группы", "Barça guruhlar") }]
    .concat(uniqueGroups.map(g => ({ value: g, label: g })));
  renderCustomSelect("filterGroupWrap", groupOpts, dashFilters.group, (val) => {
    dashFilters.group = val;
    renderDashboard();
  });

  const genderOpts = [
    { value: "all", label: t("Пол: Все", "Jinsi: Barça") },
    { value: "М", label: t("Мужской (М)", "Erkak (E)") },
    { value: "Ж", label: t("Женский (Ж)", "Ayol (A)") }
  ];
  renderCustomSelect("filterGenderWrap", genderOpts, dashFilters.gender, (val) => {
    dashFilters.gender = val;
    renderDashboard();
  });



  // KPI подсчеты на реальных данных
  const filtered = getVisibleStudents();
  const dormCount = filtered.filter(s => s.housingType === "dorm").length;
  const employedCount = filtered.filter(s => s.employed === true).length;

  const posts = isTutorOnly()
    ? appState.tgPosts.filter(p => p.authorId === currentUser.id)
    : (dashFilters.tutor !== "all" ? appState.tgPosts.filter(p => p.authorId === dashFilters.tutor) : appState.tgPosts);

  const volunteers = filtered.filter(s => getStudentVolunteers(s).length > 0);
  const volDirsSet = new Set();
  volunteers.forEach(s => getStudentVolunteers(s).forEach(d => volDirsSet.add(d)));
  const volDirsCount = volDirsSet.size;

  const activeMon = appState.monitoring.filter(m => {
    if (m.status !== "active") return false;
    if (isTutorOnly() && m.tutorId !== currentUser.id) return false;
    if (dashFilters.tutor !== "all" && m.tutorId !== dashFilters.tutor) return false;
    return true;
  });

  const socStudents = filtered.filter(s => Array.isArray(s.social) && s.social.length > 0);

  document.getElementById("kpiTotalStudents").textContent = filtered.length;
  document.getElementById("kpiDormCount").textContent = `${t("Общежитие", "Yotoqxona")}: ${dormCount}`;
  document.getElementById("kpiOwnHouseCount").textContent = `${t("Работают", "Işlaydi")}: ${employedCount}`;
  document.getElementById("kpiTotalPosts").textContent = posts.length;
  document.getElementById("kpiTotalVolunteers").textContent = volunteers.length;
  document.getElementById("kpiVolDirs").textContent = `${volDirsCount} ${t("направлений", "yönaliş")}`;
  document.getElementById("kpiMonSocValue").textContent = `${activeMon.length} / ${socStudents.length}`;
  document.getElementById("kpiOnControl").textContent = `${t("На контроле", "Nazoratda")}: ${activeMon.length}`;
  document.getElementById("kpiSocCats").textContent = `${t("Соц. категории", "Ijtimoiy toifa")}: ${socStudents.length}`;

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

  // 1. График активности
  const months = ["2026-06", "2026-07", "2026-08", "2026-09", "2026-10", "2026-11"];
  const monthLabels = currentLang === "oz"
    ? ["Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy"]
    : ["Июн", "Июл", "Авг", "Сен", "Окт", "Ноя"];

  const visiblePosts = isTutorOnly()
    ? appState.tgPosts.filter(p => p.authorId === currentUser.id)
    : (dashFilters.tutor !== "all" ? appState.tgPosts.filter(p => p.authorId === dashFilters.tutor) : appState.tgPosts);

  const postsPerMonth = months.map(m => visiblePosts.filter(p => (p.date || "").startsWith(m)).length);

  const visibleMon = isTutorOnly()
    ? appState.monitoring.filter(m => m.tutorId === currentUser.id)
    : (dashFilters.tutor !== "all" ? appState.monitoring.filter(m => m.tutorId === dashFilters.tutor) : appState.monitoring);

  const visibleParents = isTutorOnly()
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
    chart: { type: "bar", height: 270, toolbar: { show: false }, background: "transparent", fontFamily: "Onest, sans-serif" },
    series: [
      { name: t("Посты Telegram", "Telegram postlari"), data: postsPerMonth },
      { name: t("Встречи и беседы", "Uçraşuv va suhbatlar"), data: talksPerMonth }
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

  let labels = [];
  let series = [];
  let colors = ["#2563eb", "#ff6b3d", "#7c3aed", "#10b981", "#f59e0b"];

  if (distChartMode === "housing") {
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
    labels = SOCIAL_CATEGORIES.map(c => currentLang === "oz" ? c.oz : c.ru);
    series = SOCIAL_CATEGORIES.map(cat => students.filter(s => (s.social || []).includes(cat.value)).length);
  } else if (distChartMode === "employment") {
    labels = currentLang === "oz"
      ? ["Iş bilan band", "Işlamaydi"]
      : ["Трудоустроенные", "Не трудоустроенные"];
    series = [
      students.filter(s => s.employed === true).length,
      students.filter(s => !s.employed).length
    ];
    colors = ["#10b981", "#94a3b8"];
  } else if (distChartMode === "studyForm") {
    labels = STUDY_FORMS.map(f => currentLang === "oz" ? f.oz : f.ru);
    series = [
      students.filter(s => s.studyForm === "full_grant").length,
      students.filter(s => s.studyForm === "half_grant").length,
      students.filter(s => s.studyForm === "privileged_grant").length,
      students.filter(s => !s.studyForm || s.studyForm === "contract").length
    ];
    colors = ["#10b981", "#2563eb", "#7c3aed", "#ff6b3d"];
  } else if (distChartMode === "volunteers") {
    const allDirs = getAllVolunteerDirections();
    labels = allDirs.map(d => d.label);
    series = allDirs.map(d => {
      if (d.value === "Не состоит") {
        return students.filter(s => getStudentVolunteers(s).length === 0).length;
      }
      return students.filter(s => getStudentVolunteers(s).includes(d.value)).length;
    });
    colors = ["#94a3b8", "#10b981", "#2563eb", "#7c3aed", "#ff6b3d", "#f59e0b", "#ec4899", "#06b6d4"];
  } else if (distChartMode === "region") {
    const allRegions = [...new Set([...UZ_REGIONS, ...students.map(s => s.region).filter(Boolean)])];
    const activeRegions = allRegions.filter(r => students.some(s => s.region === r));
    const unspecifiedCount = students.filter(s => !s.region).length;
    labels = [...activeRegions];
    series = activeRegions.map(r => students.filter(s => s.region === r).length);
    if (unspecifiedCount > 0 || !labels.length) {
      labels.push(t("Не указан", "Kiritilmagan"));
      series.push(unspecifiedCount);
    }
    colors = [
      "#2563eb", "#10b981", "#ff6b3d", "#7c3aed", "#f59e0b",
      "#06b6d4", "#ec4899", "#84cc16", "#6366f1", "#14b8a6",
      "#f97316", "#a855f7", "#0ea5e9", "#eab308", "#ef4444", "#94a3b8"
    ];
  }

  if (distChartInstance) distChartInstance.destroy();
  distChartInstance = new ApexCharts(document.querySelector("#distributionChart"), {
    chart: { type: "donut", height: 270, background: "transparent", fontFamily: "Onest, sans-serif" },
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
              label: t("Всего", "Jami"),
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

async function exportChart(which, format) {
  const chart = which === "activity" ? activityChartInstance : distChartInstance;
  if (!chart) return;

  const containerId = which === "activity" ? "activityChart" : "distributionChart";
  const containerEl = document.getElementById(containerId);

  if (format === "svg") {
    const svgEl = containerEl ? containerEl.querySelector("svg") : null;
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svgEl);
    const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
    triggerDownload(URL.createObjectURL(blob), `mytutors_${which}_chart.svg`);
    return;
  }

  const targetWidth = 2560;
  const currentWidth = (containerEl && containerEl.clientWidth) ? containerEl.clientWidth : 640;
  const renderScale = Math.max(3, Math.ceil(targetWidth / currentWidth));

  const dataURI = await chart.dataURI({ scale: renderScale });
  const img = new Image();
  img.onload = () => {
    const pad = 48;
    const scale = (targetWidth - pad * 2) / img.width;
    const drawW = Math.round(img.width * scale);
    const drawH = Math.round(img.height * scale);

    const canvas = document.createElement("canvas");
    canvas.width = drawW + pad * 2;
    canvas.height = drawH + pad * 2;

    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = document.body.classList.contains("dark") ? "#181b23" : "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, pad, pad, drawW, drawH);

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

// ==================== 2. СТУДЕНТЫ, ЖИЛЬЕ, СОЦРЕЕСТР, ВОЛОНТЕРЫ, ТРУДОУСТРОЙСТВО, РАСПИСАНИЕ ====================
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

function formatGenderShort(g) {
  if (currentLang === "oz") {
    return g === "Ж" ? "A" : "E";
  }
  return g === "Ж" ? "Ж" : "М";
}

function formatSalaryUZS(val) {
  const num = Number(val);
  if (!num || isNaN(num)) return "—";
  return `${num.toLocaleString("ru-RU")} UZS`;
}

function formatPhoneTgLink(phone) {
  const raw = String(phone || "").trim();
  if (!raw) return "—";
  const digits = raw.replace(/\D/g, "");
  if (!digits) return raw;
  return `<a href="https://t.me/+${digits}" target="_blank" rel="noopener noreferrer" class="phone-tg-link" title="${t("Открыть в Telegram", "Telegram da oçiş")}">${raw}</a>`;
}

function renderStudentsSection() {
  const area = document.getElementById("studentsContentArea");
  const students = getRoleScopedStudents();

  const syncEl = document.getElementById("hemisSyncStatus");
  if (syncEl && !syncEl.dataset.customTime) {
    syncEl.textContent = t(
      "Синхронизация с tyutor.hemis.uz: готова к импорту",
      "tyutor.hemis.uz bilan sinxronlaş: importga tayyor"
    );
  }

  if (activeStudentSubtab === "all") {
    area.innerHTML = `
      <div class="st-all-toolbar" id="studentsAllToolbar">
        <div class="st-search-group">
          <div class="st-search-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>
            <input type="text" id="stAllSearchInput" placeholder="${t("Поиск студента по Ф.И.О., группе, телефону...", "Talabani F.I.Ş., guruh, telefon böyiça qidiriş...")}" value="${studentListFilters.search.replace(/"/g, '&quot;')}" oninput="onStudentSearchInput(this.value)" />
          </div>
          <button type="button" id="stQuickRegisterBtn" class="btn-orange sm hidden" onclick="openStudentModal(null, studentListFilters.search.trim())">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5l0 14"/><path d="M5 12l14 0"/></svg>
            <span>${t("Зарегистрировать студента", "Talabani röyxatdan ötkaziş")}</span>
          </button>
        </div>
        <div class="st-all-filters">
          <div class="custom-select ${isTutorOnly() ? 'hidden' : ''}" id="stFilterTutorWrap"></div>
          <div class="custom-select" id="stFilterCourseWrap"></div>
          <div class="custom-select" id="stFilterGroupWrap"></div>
          <div class="custom-select" id="stFilterGenderWrap"></div>
          <button type="button" id="stFilterResetBtn" class="btn-export sm hidden" onclick="resetStudentListFilters()">${t("Сбросить", "Tozalaş")}</button>
        </div>
      </div>
      <div id="studentsAllTableContainer"></div>
    `;
    renderStudentListFilterControls();
    renderStudentsAllTable();
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
        <button type="button" class="subtab-btn ${activeHousingFilter === 'all' ? 'active' : ''}" onclick="setHousingFilter('all')">${t("Все", "Barçasi")} (${students.length})</button>
        <button type="button" class="subtab-btn ${activeHousingFilter === 'dorm' ? 'active' : ''}" onclick="setHousingFilter('dorm')">${t("Общежитие", "Yotoqxona")} (${dorms.length})</button>
        <button type="button" class="subtab-btn ${activeHousingFilter === 'rent' ? 'active' : ''}" onclick="setHousingFilter('rent')">${t("Съемная квартира", "Ijara xonadon")} (${rents.length})</button>
        <button type="button" class="subtab-btn ${activeHousingFilter === 'relatives' ? 'active' : ''}" onclick="setHousingFilter('relatives')">${t("У родственников", "Qarindoşinikida")} (${rels.length})</button>
        <button type="button" class="subtab-btn ${activeHousingFilter === 'own' ? 'active' : ''}" onclick="setHousingFilter('own')">${t("Свой дом", "Öz uyi")} (${owns.length})</button>
      </div>
    `;

    if (!list.length) {
      const emptyMsg = (activeHousingFilter === "dorm" && roomQuery && isTutorOnly())
        ? t("Ваши студенты в данной комнате не проживают", "Sizning talabalaringiz uşbu xonada yaşamaydi")
        : t("По выбранному фильтру записей не найдено.", "Tanlangan filtr böyiça yozuvlar topilmadi.");
      area.innerHTML = `${filterButtons}<div class="empty-state">${emptyMsg}</div>`;
      return;
    }

    area.innerHTML = `
      ${filterButtons}
      <div class="cards-grid-3">
        ${list.map(s => {
          let roommatesHtml = "";
          if (s.housingType === "dorm" && s.room) {
            const mates = appState.students.filter(other => other.id !== s.id && other.housingType === "dorm" && String(other.room) === String(s.room));
            roommatesHtml = `
              <div class="roommates-panel">
                <div style="font-weight:700; margin-bottom:4px;">${t("Комната №", "Xona №")} ${s.room} • ${t("Соседи", "Xonadoşlar")} (${mates.length}):</div>
                ${mates.length
                  ? mates.map(m => `<div>• ${m.name} (${m.group})</div>`).join("")
                  : `<div style="color:var(--text-muted)">${t("Других студентов в этой комнате не найдено", "Bu xonada boşqa talabalar topilmadi")}</div>`}
              </div>
            `;
          } else if (s.housingType === "rent") {
            roommatesHtml = `
              <div class="roommates-panel">
                <div><strong>${t("Адрес", "Manzil")}:</strong> ${s.address || t("Не указан", "Kiritilmagan")}</div>
                <div><strong>${t("Владелец", "Uy egasi")}:</strong> ${s.landlord || t("Не указан", "Kiritilmagan")}</div>
              </div>
            `;
          } else if (s.housingType === "relatives") {
            roommatesHtml = `
              <div class="roommates-panel">
                <div><strong>${t("Адрес", "Manzil")}:</strong> ${s.address || t("Не указан", "Kiritilmagan")}</div>
                <div><strong>${t("Родственник", "Qarindoşi")}:</strong> ${s.relativeHost || t("Не указан", "Kiritilmagan")}</div>
              </div>
            `;
          } else {
            roommatesHtml = `
              <div class="roommates-panel">
                <div><strong>${t("Адрес", "Manzil")}:</strong> ${s.address || t("Постоянное место жительства", "Doimiy yaşaş joyi")}</div>
              </div>
            `;
          }

          return `
            <div class="student-card">
              <div>
                <div class="st-card-top">
                  <div>
                    <div class="st-name">${s.name}</div>
                    <div class="st-meta">${s.group} • ${s.course} ${t("курс", "kurs")}</div>
                  </div>
                  ${formatHousingBadge(s)}
                </div>
                ${roommatesHtml}
              </div>
              <div class="st-card-actions">
                <span class="st-meta">${s.phone || ""}</span>
                <div>
                  <button type="button" class="btn-link-orange" onclick="openStudentModal('${s.id}')">${t("Подробнее", "Batafsil")}</button>
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
      area.innerHTML = `<div class="empty-state">${t(
        "Студенты социально уязвимых категорий пока не добавлены. Отметьте категории в карточке студента.",
        "Ijtimoiy himoyaga muhtoj toifadagi talabalar hali qöşilmagan. Talaba kartasida toifalarni belgilang."
      )}</div>`;
      return;
    }
    area.innerHTML = `
      <div class="cards-grid-3">
        ${socList.map(s => `
          <div class="student-card">
            <div>
              <div class="st-name">${s.name}</div>
              <div class="st-meta mb-12">${s.group} • ${s.course} ${t("курс", "kurs")}</div>
              <div class="checkbox-chips">
                ${s.social.map(c => `<span class="badge-pill rent">${getLabelFromDict(SOCIAL_CATEGORIES, c)}</span>`).join("")}
              </div>
            </div>
            <div class="st-card-actions">
              <span class="st-meta">${s.phone || ""}</span>
              <button type="button" class="btn-link-orange" onclick="openStudentModal('${s.id}')">${t("Открыть", "Oçiş")}</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
    return;
  }

  if (activeStudentSubtab === "volunteers") {
    const vols = students.filter(s => getStudentVolunteers(s).length > 0);
    const activeDirs = getAllVolunteerDirections().filter(d => d.value !== "Не состоит");
    const first5Dirs = activeDirs.slice(0, 5);
    const extraDirs = activeDirs.slice(5);

    const isExtraActive = activeVolunteerFilter !== "all" && !first5Dirs.some(d => d.value === activeVolunteerFilter);
    const activeExtraObj = isExtraActive ? activeDirs.find(d => d.value === activeVolunteerFilter) : null;

    let list = vols;
    if (activeVolunteerFilter !== "all") {
      list = vols.filter(s => getStudentVolunteers(s).includes(activeVolunteerFilter));
    }

    const filterButtons = `
      <div class="subtabs-pills mb-16">
        <button type="button" class="subtab-btn ${activeVolunteerFilter === 'all' ? 'active' : ''}" onclick="setVolunteerFilter('all')">${t("Все", "Barçasi")} (${vols.length})</button>
        ${first5Dirs.map(d => {
          const cnt = vols.filter(s => getStudentVolunteers(s).includes(d.value)).length;
          return `<button type="button" class="subtab-btn ${activeVolunteerFilter === d.value ? 'active' : ''}" onclick="setVolunteerFilter('${d.value.replace(/'/g, "\\'")}')">${d.label} (${cnt})</button>`;
        }).join("")}
        ${activeExtraObj ? `<button type="button" class="subtab-btn active" onclick="setVolunteerFilter('${activeExtraObj.value.replace(/'/g, "\\'")}')">${activeExtraObj.label} (${vols.filter(s => getStudentVolunteers(s).includes(activeExtraObj.value)).length})</button>` : ""}
        ${extraDirs.length > 0 ? `
          <div class="tg-all-tags-dropdown" id="volOtherDirsDropdown">
            <button type="button" class="tg-all-tags-trigger" onclick="toggleVolOtherDirsDropdown(event)">
              <span>${t("Другие направления", "Boşqa yönalişlar")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6l6 -6"/></svg>
            </button>
            <div class="tg-all-tags-menu" onclick="event.stopPropagation()">
              <input type="text" id="volFilterSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск направления...", "Yönaliş qidiriş...")}" oninput="renderVolFilterSearchList()" />
              <div id="volFilterSearchList" class="tg-tag-search-list"></div>
            </div>
          </div>
        ` : ""}
      </div>
    `;

    if (!vols.length) {
      area.innerHTML = `${filterButtons}<div class="empty-state">${t(
        "Группы волонтеров пока пусты. Назначьте направление в карточке студента.",
        "Volontyorlar guruhi hozirça böş. Talaba kartasida yönalişni belgilang."
      )}</div>`;
      return;
    }

    if (!list.length) {
      area.innerHTML = `${filterButtons}<div class="empty-state">${t(
        "По выбранному направлению волонтеров пока нет.",
        "Tanlangan yönaliş böyiça volontyorlar hozirça yöq."
      )}</div>`;
      return;
    }

    area.innerHTML = `
      ${filterButtons}
      <div class="cards-grid-3">
        ${list.map(s => {
          const dirs = getStudentVolunteers(s);
          return `
            <div class="student-card">
              <div>
                <div class="st-name">${s.name}</div>
                <div class="st-meta mb-12">${s.group} • ${s.course} ${t("курс", "kurs")}</div>
                <div class="checkbox-chips">
                  ${dirs.map(v => `<span class="badge-pill rel">${getLabelFromDict(VOLUNTEER_DIRECTIONS, v)}</span>`).join("")}
                </div>
              </div>
              <div class="st-card-actions">
                <span class="st-meta">${s.phone || ""}</span>
                <button type="button" class="btn-link-orange" onclick="openStudentModal('${s.id}')">${t("Изменить", "Tahrirlaş")}</button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
    return;
  }

  if (activeStudentSubtab === "employment") {
    const employedList = students.filter(s => s.employed === true);
    const unemployedList = students.filter(s => !s.employed);

    let list = students;
    if (activeEmploymentFilter === "employed") list = employedList;
    if (activeEmploymentFilter === "unemployed") list = unemployedList;

    const filterButtons = `
      <div class="subtabs-pills mb-16">
        <button type="button" class="subtab-btn ${activeEmploymentFilter === 'all' ? 'active' : ''}" onclick="activeEmploymentFilter='all'; renderStudentsSection()">${t("Все", "Barçasi")} (${students.length})</button>
        <button type="button" class="subtab-btn ${activeEmploymentFilter === 'employed' ? 'active' : ''}" onclick="activeEmploymentFilter='employed'; renderStudentsSection()">${t("Трудоустроенные", "Iş bilan bandlar")} (${employedList.length})</button>
        <button type="button" class="subtab-btn ${activeEmploymentFilter === 'unemployed' ? 'active' : ''}" onclick="activeEmploymentFilter='unemployed'; renderStudentsSection()">${t("Не трудоустроенные", "Işlamaydiganlar")} (${unemployedList.length})</button>
      </div>
    `;

    if (!list.length) {
      area.innerHTML = `${filterButtons}<div class="empty-state">${t(
        "По выбранному фильтру студентов не найдено.",
        "Tanlangan filtr böyiça talabalar topilmadi."
      )}</div>`;
      return;
    }

    area.innerHTML = `
      ${filterButtons}
      <div class="cards-grid-3">
        ${list.map(s => {
          const workDetails = s.employed ? `
            <div class="roommates-panel">
              <div><strong>${t("Организация", "Taşkilot")}:</strong> ${s.empOrg || "—"}</div>
              <div><strong>${t("Должность", "Lavozim")}:</strong> ${s.empPosition || "—"}</div>
              <div><strong>${t("Адрес", "Manzil")}:</strong> ${s.empAddress || "—"}</div>
              <div><strong>${t("Руководитель", "Rahbar")}:</strong> ${s.empBossName || "—"} ${s.empBossPhone ? `(${s.empBossPhone})` : ""}</div>
              <div><strong>${t("График", "Iş vaqti")}:</strong> ${s.empTimeFrom || "—"} – ${s.empTimeTo || "—"}</div>
              <div><strong>${t("Зарплата", "Maosh")}:</strong> ${formatSalaryUZS(s.empSalary)}</div>
            </div>
          ` : `
            <div class="roommates-panel">
              <div style="color:var(--text-muted)">${t("Студент в настоящее время не трудоустроен", "Talaba hozirgi vaqtda iş bilan band emas")}</div>
            </div>
          `;

          return `
            <div class="student-card">
              <div>
                <div class="st-card-top">
                  <div>
                    <div class="st-name">${s.name}</div>
                    <div class="st-meta">${s.group} • ${s.course} ${t("курс", "kurs")}</div>
                  </div>
                  ${s.employed
                    ? `<span class="badge-pill work">${t("Трудоустроен", "Işlaydi")}</span>`
                    : `<span class="badge-pill unemployed">${t("Не трудоустроен", "Işlamaydi")}</span>`}
                </div>
                ${workDetails}
              </div>
              <div class="st-card-actions">
                <span class="st-meta">${s.phone || ""}</span>
                <button type="button" class="btn-link-orange" onclick="openStudentModal('${s.id}')">${t("Изменить", "Tahrirlaş")}</button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
    return;
  }

  if (activeStudentSubtab === "schedule") {
    area.innerHTML = `
      <div class="bento-card">
        <div class="card-head">
          <div>
            <h3 class="card-title">${t("Расписание занятий групп (парсинг tyutor.hemis.uz)", "Guruhlar dars jadvali (tyutor.hemis.uz)")}</h3>
            <p class="card-sub">${t("Актуальная сетка пар, аудиторий и преподавателей прикрепленных групп", "Biriktirilgan guruhlarning joriy dars jadvali, auditoriyalari va öqituvçilari")}</p>
          </div>
          <button type="button" class="btn-blue" onclick="openHemisImportModal()">${t("Обновить расписание", "Jadvalni yangilaş")}</button>
        </div>
        ${appState.schedule.length ? `
          <table class="data-table">
            <thead><tr><th>${t("Группа", "Guruh")}</th><th>${t("Пара / Время", "Juftlik / Vaqt")}</th><th>${t("Дисциплина", "Fan")}</th><th>${t("Аудитория", "Auditoriya")}</th><th>${t("Преподаватель", "Öqituvçi")}</th></tr></thead>
            <tbody>
              ${appState.schedule.map(row => `<tr><td><strong>${row.group}</strong></td><td>${row.time}</td><td>${row.subject}</td><td>${row.room}</td><td>${row.teacher}</td></tr>`).join("")}
            </tbody>
          </table>
        ` : `<div class="empty-state">${t("Расписание еще не загружено из HEMIS.", "Dars jadvali hali HEMIS dan yuklanmagan.")}</div>`}
      </div>
    `;
  }
}



// ==================== ПОИСК И ФИЛЬТРЫ ВО ВКЛАДКЕ «ВСЕ СТУДЕНТЫ» ====================
function onStudentSearchInput(val) {
  studentListFilters.search = val || "";
  renderStudentsAllTable();
}

function resetStudentListFilters() {
  studentListFilters = { search: "", tutors: [], course: "all", group: "all", gender: "all" };
  stFilterTutorSearch = "";
  const inp = document.getElementById("stAllSearchInput");
  if (inp) inp.value = "";
  renderStudentListFilterControls();
  renderStudentsAllTable();
}

function filterStudentsByTutorClick(tutorId) {
  if (!tutorId || isTutorOnly()) return;
  if (studentListFilters.tutors.length === 1 && studentListFilters.tutors[0] === tutorId) {
    studentListFilters.tutors = [];
  } else {
    studentListFilters.tutors = [tutorId];
  }
  renderStudentListFilterControls();
  renderStudentsAllTable();
}

function toggleStFilterTutor(tutorId) {
  const arr = studentListFilters.tutors || [];
  if (arr.includes(tutorId)) {
    studentListFilters.tutors = arr.filter(id => id !== tutorId);
  } else {
    studentListFilters.tutors = [...arr, tutorId];
  }
  renderStudentListFilterControls(true);
  renderStudentsAllTable();
}

function formatStFilterTutorTrigger() {
  const selected = studentListFilters.tutors || [];
  if (!selected.length) return t("Все тюторы", "Barça tyutorlar");
  if (selected.length === 1) {
    const u = appState.users.find(x => x.id === selected[0]);
    return u ? u.name : t("1 тютор", "1 tyutor");
  }
  return `${t("Тюторы", "Tyutorlar")}: ${selected.length}`;
}

function renderStFilterTutorOptions() {
  const listEl = document.getElementById("stFilterTutorOptions");
  const inp = document.getElementById("stFilterTutorSearchInput");
  if (!listEl) return;

  stFilterTutorSearch = inp ? inp.value : "";
  const q = stFilterTutorSearch.trim().toLowerCase();
  const tutors = appState.users.filter(u => u.role === "tutor");
  const matched = q
    ? tutors.filter(tr => (tr.name || "").toLowerCase().includes(q) || (tr.login || "").toLowerCase().includes(q))
    : tutors;

  if (!matched.length) {
    listEl.innerHTML = `<div class="st-meta" style="padding:8px 10px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`;
    return;
  }

  listEl.innerHTML = matched.map(tr => {
    const checked = (studentListFilters.tutors || []).includes(tr.id);
    return `
      <label class="social-check-option">
        <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleStFilterTutor('${tr.id}')" />
        <span>${tr.name}</span>
      </label>
    `;
  }).join("");
}

function renderStudentListFilterControls(keepTutorOpen = false) {
  const invalidGroupLabels = new Set(["Все группы", "Не назначены", "Biriktirilmagan", "—", ""]);
  const parseGroups = (u) => {
    if (!u || !u.groups) return [];
    return String(u.groups).split(",").map(g => g.trim()).filter(g => g && !invalidGroupLabels.has(g));
  };

  // 1. Мультивыбор тюторов (для админов / руководства)
  const tutorWrap = document.getElementById("stFilterTutorWrap");
  if (tutorWrap && !isTutorOnly()) {
    const wasOpen = keepTutorOpen || tutorWrap.classList.contains("open");
    tutorWrap.innerHTML = `
      <div class="cs-trigger" onclick="toggleCustomSelect('stFilterTutorWrap'); setTimeout(() => { const i = document.getElementById('stFilterTutorSearchInput'); if(i) i.focus(); }, 30);">
        <span>${formatStFilterTutorTrigger()}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
      </div>
      <div class="cs-menu" onclick="event.stopPropagation()">
        <input type="text" id="stFilterTutorSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск тютора...", "Tyutor qidiriş...")}" value="${stFilterTutorSearch}" oninput="renderStFilterTutorOptions()" />
        <div id="stFilterTutorOptions" class="tg-tag-search-list"></div>
      </div>
    `;
    if (wasOpen) tutorWrap.classList.add("open");
    renderStFilterTutorOptions();
  }

  // Определяем активных тюторов для зависимых списков курсов и групп
  let targetTutors = [];
  if (isTutorOnly()) {
    targetTutors = [currentUser];
  } else if (studentListFilters.tutors.length > 0) {
    targetTutors = appState.users.filter(u => studentListFilters.tutors.includes(u.id));
  } else {
    targetTutors = appState.users.filter(u => u.role === "tutor");
  }

  // 2. Фильтр курсов (соответственно выбранным тюторам)
  let availableCourses = [];
  if (isTutorOnly() || studentListFilters.tutors.length > 0) {
    const cSet = new Set();
    targetTutors.forEach(tr => { if (tr && tr.course) cSet.add(String(tr.course)); });
    if (cSet.size === 0) {
      const targetIds = new Set(targetTutors.map(tr => tr.id));
      appState.students.filter(s => targetIds.has(s.tutorId)).forEach(s => {
        if (s.course) cSet.add(String(s.course));
      });
    }
    availableCourses = [...cSet].sort();
  }
  if (!availableCourses.length) availableCourses = ["1", "2", "3", "4"];

  let courseOpts = [];
  if (availableCourses.length === 1 && (isTutorOnly() || studentListFilters.tutors.length > 0)) {
    studentListFilters.course = availableCourses[0];
    courseOpts = [{ value: availableCourses[0], label: `${availableCourses[0]} ${t("курс", "kurs")}` }];
  } else {
    if (studentListFilters.course !== "all" && !availableCourses.includes(String(studentListFilters.course))) {
      studentListFilters.course = "all";
    }
    courseOpts = [{ value: "all", label: t("Все курсы", "Barça kurslar") }]
      .concat(availableCourses.map(c => ({ value: c, label: `${c} ${t("курс", "kurs")}` })));
  }
  renderCustomSelect("stFilterCourseWrap", courseOpts, studentListFilters.course, (val) => {
    studentListFilters.course = val;
    renderStudentListFilterControls();
    renderStudentsAllTable();
  });

  // 3. Фильтр групп (соответственно выбранным тюторам)
  const gSet = new Set();
  targetTutors.forEach(tr => parseGroups(tr).forEach(g => gSet.add(g)));
  const availableGroups = [...gSet].sort((a, b) => a.localeCompare(b));
  if (studentListFilters.group !== "all" && !availableGroups.includes(studentListFilters.group)) {
    studentListFilters.group = "all";
  }
  const groupOpts = [{ value: "all", label: t("Все группы", "Barça guruhlar") }]
    .concat(availableGroups.map(g => ({ value: g, label: g })));
  renderCustomSelect("stFilterGroupWrap", groupOpts, studentListFilters.group, (val) => {
    studentListFilters.group = val;
    renderStudentListFilterControls();
    renderStudentsAllTable();
  });

  // 4. Фильтр по полу
  const genderOpts = [
    { value: "all", label: t("Пол: Все", "Jinsi: Barça") },
    { value: "М", label: t("Мужской (М)", "Erkak (E)") },
    { value: "Ж", label: t("Женский (Ж)", "Ayol (A)") }
  ];
  renderCustomSelect("stFilterGenderWrap", genderOpts, studentListFilters.gender, (val) => {
    studentListFilters.gender = val;
    renderStudentListFilterControls();
    renderStudentsAllTable();
  });
}

function renderStudentsAllTable() {
  const container = document.getElementById("studentsAllTableContainer");
  const quickRegBtn = document.getElementById("stQuickRegisterBtn");
  const resetBtn = document.getElementById("stFilterResetBtn");
  if (!container) return;

  let list = getRoleScopedStudents();
  const q = (studentListFilters.search || "").trim().toLowerCase();

  if (!isTutorOnly() && studentListFilters.tutors.length > 0) {
    list = list.filter(s => studentListFilters.tutors.includes(s.tutorId));
  }
  if (studentListFilters.course !== "all") {
    list = list.filter(s => String(s.course) === String(studentListFilters.course));
  }
  if (studentListFilters.group !== "all") {
    list = list.filter(s => s.group === studentListFilters.group);
  }
  if (studentListFilters.gender !== "all") {
    list = list.filter(s => s.gender === studentListFilters.gender);
  }
  if (q) {
    list = list.filter(s =>
      (s.name || "").toLowerCase().includes(q) ||
      (s.group || "").toLowerCase().includes(q) ||
      (s.phone || "").toLowerCase().includes(q) ||
      (s.passport || "").toLowerCase().includes(q) ||
      (s.hemisId || "").toLowerCase().includes(q)
    );
  }

  // Показываем кнопку «Зарегистрировать студента» рядом с поиском, если введено имя и совпадений нет
  if (quickRegBtn) {
    quickRegBtn.classList.toggle("hidden", !(q && list.length === 0));
  }

  // Показываем кнопку «Сбросить», если активен любой фильтр
  const hasActiveFilter = Boolean(
    q ||
    studentListFilters.tutors.length > 0 ||
    (studentListFilters.course !== "all" && !(isTutorOnly() && currentUser && currentUser.course)) ||
    studentListFilters.group !== "all" ||
    studentListFilters.gender !== "all"
  );
  if (resetBtn) {
    resetBtn.classList.toggle("hidden", !hasActiveFilter);
  }

  if (!list.length) {
    const emptyText = q
      ? t(`Студент «${studentListFilters.search.trim()}» не найден. Вы можете сразу зарегистрировать его.`, `«${studentListFilters.search.trim()}» topilmadi. Uni darhol röyxatdan ötkazişingiz mumkin.`)
      : t("Список студентов пуст или не соответствует выбранным фильтрам.", "Talabalar röyxati böş yoki tanlangan filtrlarga mos kelmadi.");
    container.innerHTML = `<div class="empty-state">${emptyText}</div>`;
    return;
  }

  container.innerHTML = `
    <div class="bento-card">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>${t("Ф.И.О.", "F.I.Ş.")}</th>
              <th>${t("Группа / Курс", "Guruh / Kurs")}</th>
              <th>${t("Пол", "Jinsi")}</th>
              <th>${t("Жилье", "Turar joy")}</th>
              <th>${t("Работа", "Iş joyi")}</th>
              <th>${t("Тютор", "Tyutor")}</th>
              <th>${t("Телефон", "Telefon")}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${list.map(s => {
              const tutor = appState.users.find(u => u.id === s.tutorId);
              const empBadge = s.employed
                ? `<span class="badge-pill work">${t("Трудоустроен", "Işlaydi")}${s.empOrg ? ` • ${s.empOrg}` : ""}</span>`
                : `<span class="badge-pill unemployed">${t("Не трудоустроен", "Işlamaydi")}</span>`;
              const isTutorActive = studentListFilters.tutors.includes(s.tutorId);
              const tutorCellHtml = tutor
                ? (isTutorOnly()
                    ? `<span>${tutor.name}</span>`
                    : `<button type="button" class="tutor-table-btn ${isTutorActive ? 'active' : ''}" onclick="filterStudentsByTutorClick('${tutor.id}')" title="${t("Фильтровать по этому тютору", "Uşbu tyutor böyiça filtrlash")}">${tutor.name}</button>`)
                : "—";
              return `
                <tr>
                  <td><strong>${s.name}</strong></td>
                  <td>${s.group} • ${s.course} ${t("курс", "kurs")}</td>
                  <td>${formatGenderShort(s.gender)}</td>
                  <td>${formatHousingBadge(s)}</td>
                  <td>${empBadge}</td>
                  <td>${tutorCellHtml}</td>
                  <td>${formatPhoneTgLink(s.phone)}</td>
                  <td style="text-align:right; white-space:nowrap;">
                    <button type="button" class="btn-link-orange mr-8" onclick="openStudentModal('${s.id}')">${t("Изменить", "Tahrirlaş")}</button>
                    ${canDeleteData(s.tutorId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteStudent('${s.id}', this)" title="${t("Удалить", "Öçiriş")}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
                    </button>` : ""}
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function setVolunteerFilter(val) {
  activeVolunteerFilter = val;
  volFilterSearchQuery = "";
  renderStudentsSection();
}

function toggleVolOtherDirsDropdown(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById("volOtherDirsDropdown");
  if (!dd) return;
  const wasOpen = dd.classList.contains("open");
  document.querySelectorAll(".tg-all-tags-dropdown.open").forEach(el => el.classList.remove("open"));
  if (!wasOpen) {
    dd.classList.add("open");
    const inp = document.getElementById("volFilterSearchInput");
    if (inp) {
      inp.value = volFilterSearchQuery;
      inp.focus();
      renderVolFilterSearchList();
    }
  }
}

function renderVolFilterSearchList() {
  const listEl = document.getElementById("volFilterSearchList");
  const inp = document.getElementById("volFilterSearchInput");
  if (!listEl) return;

  volFilterSearchQuery = inp ? inp.value : "";
  const q = volFilterSearchQuery.trim().toLowerCase();
  const students = getRoleScopedStudents();
  const vols = students.filter(s => getStudentVolunteers(s).length > 0);
  const extraDirs = getAllVolunteerDirections().filter(d => d.value !== "Не состоит").slice(5);
  const filtered = q
    ? extraDirs.filter(d => d.label.toLowerCase().includes(q) || d.value.toLowerCase().includes(q))
    : extraDirs;

  if (!filtered.length) {
    listEl.innerHTML = `<div class="st-meta" style="padding:8px 10px;">${t("Направления не найдены", "Yönalişlar topilmadi")}</div>`;
    return;
  }

  listEl.innerHTML = filtered.map(d => {
    const cnt = vols.filter(s => getStudentVolunteers(s).includes(d.value)).length;
    return `
      <div class="cs-option ${activeVolunteerFilter === d.value ? 'selected' : ''}" onclick="setVolunteerFilter('${d.value.replace(/'/g, "\'")}')">
        <span>${d.label} (${cnt})</span>
        ${activeVolunteerFilter === d.value ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5l10 -10"/></svg>' : ''}
      </div>
    `;
  }).join("");
}

function setHousingFilter(filter) {
  activeHousingFilter = filter;
  updateRoomSearchVisibility();
  renderStudentsSection();
}

function formatHousingBadge(s) {
  if (s.housingType === "dorm") return `<span class="badge-pill">${t("Общежитие, комн.", "Yotoqxona, xona")} ${s.room || "—"}</span>`;
  if (s.housingType === "rent") return `<span class="badge-pill rent">${t("Съемная квартира", "Ijara xonadon")}</span>`;
  if (s.housingType === "relatives") return `<span class="badge-pill rel">${t("У родственников", "Qarindoşinikida")}</span>`;
  return `<span class="badge-pill house"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/></svg> ${t("Свой дом", "Öz uyi")}</span>`;
}

// ==================== МОДАЛКА КАРТОЧКИ СТУДЕНТА ====================
let modalStudentState = {
  group: "",
  course: "1",
  gender: "М",
  tutorId: "",
  studyForm: "contract",
  region: "",
  housingType: "dorm",
  volunteers: [],
  selectedSocial: [],
  employed: "no"
};

function getGroupsForTutor(tutorId) {
  const tutor = appState.users.find(u => u.id === tutorId);
  if (!tutor || !tutor.groups) return [];
  const raw = String(tutor.groups).trim();
  if (!raw || raw === "Все группы" || raw === "Не назначены" || raw === "Biriktirilmagan") {
    // Если у профиля указано «Все группы», собираем все группы всех тюторов
    const all = [];
    appState.users.filter(u => u.role === "tutor").forEach(u => {
      String(u.groups || "").split(",").map(g => g.trim()).filter(Boolean).forEach(g => {
        if (g !== "Все группы" && g !== "Не назначены" && g !== "Biriktirilmagan" && !all.includes(g)) {
          all.push(g);
        }
      });
    });
    return all;
  }
  return raw.split(",").map(g => g.trim()).filter(Boolean);
}

function renderStudentGroupSelect(tutorId, preferredGroup = "") {
  const groups = getGroupsForTutor(tutorId);
  if (preferredGroup && !groups.includes(preferredGroup)) {
    groups.unshift(preferredGroup);
  }
  const groupOpts = groups.length
    ? groups.map(g => ({ value: g, label: g }))
    : [{ value: "", label: t("Группы не назначены", "Guruhlar biriktirilmagan") }];

  modalStudentState.group = (preferredGroup && groups.includes(preferredGroup))
    ? preferredGroup
    : (groups[0] || "");

  const onGroupChange = (v) => {
    modalStudentState.group = v;
    renderCustomSelect("stGroupSelectWrap", groupOpts, v, onGroupChange);
  };
  renderCustomSelect("stGroupSelectWrap", groupOpts, modalStudentState.group, onGroupChange);
}

function openStudentModal(studentId = null, prefillName = "") {
  const st = studentId ? appState.students.find(s => s.id === studentId) : null;
  document.getElementById("editStudentId").value = st ? st.id : "";
  document.getElementById("studentModalTitle").textContent = st
    ? t("Редактирование карточки студента", "Talaba kartasini tahrirlaş")
    : t("Новый студент", "Yangi talaba");
  document.getElementById("stFullName").value = st ? st.name : (prefillName || "");
  document.getElementById("stPhone").value = st ? st.phone : "";
  const passEl = document.getElementById("stPassport");
  if (passEl) passEl.value = st && st.passport ? st.passport : "";
  const pinflEl = document.getElementById("stPinfl");
  if (pinflEl) pinflEl.value = st && st.pinfl ? st.pinfl : "";
  const hemisEl = document.getElementById("stHemisId");
  if (hemisEl) hemisEl.value = st && st.hemisId ? st.hemisId : "";

  const defaultTutorId = st ? st.tutorId : (isTutorOnly() ? currentUser.id : "tutor1");
  const defaultTutorObj = appState.users.find(u => u.id === defaultTutorId);
  const initialCourse = st
    ? String(st.course)
    : (defaultTutorObj && defaultTutorObj.course ? String(defaultTutorObj.course) : "1");

  modalStudentState = {
    group: st ? (st.group || "") : "",
    course: initialCourse,
    gender: st ? st.gender : "М",
    tutorId: defaultTutorId,
    studyForm: st && st.studyForm ? st.studyForm : "contract",
    region: st && st.region ? st.region : "",
    housingType: st ? st.housingType : "dorm",
    volunteers: st ? getStudentVolunteers(st) : [],
    employed: st && st.employed ? "yes" : "no"
  };

  renderStudentGroupSelect(modalStudentState.tutorId, modalStudentState.group);

  const courseOptions = [
    { value: "1", label: `1 ${t("курс", "kurs")}` },
    { value: "2", label: `2 ${t("курс", "kurs")}` },
    { value: "3", label: `3 ${t("курс", "kurs")}` },
    { value: "4", label: `4 ${t("курс", "kurs")}` }
  ];
  const onCourseChange = (v) => {
    modalStudentState.course = v;
    renderCustomSelect("stCourseSelectWrap", courseOptions, v, onCourseChange);
  };
  renderCustomSelect("stCourseSelectWrap", courseOptions, modalStudentState.course, onCourseChange);

  const genderOptions = [
    { value: "М", label: t("Мужской (М)", "Erkak (E)") },
    { value: "Ж", label: t("Женский (Ж)", "Ayol (A)") }
  ];
  const onGenderChange = (v) => {
    modalStudentState.gender = v;
    renderCustomSelect("stGenderSelectWrap", genderOptions, v, onGenderChange);
  };
  renderCustomSelect("stGenderSelectWrap", genderOptions, modalStudentState.gender, onGenderChange);

  const tutorWrap = document.getElementById("stTutorSelectWrap");
  const canSelectTutor = hasAdminPrivileges();

  if (isTutorOnly()) {
    modalStudentState.tutorId = currentUser.id;
  }

  if (canSelectTutor) {
    if (tutorWrap) tutorWrap.classList.remove("disabled");
    const tutors = appState.users.filter(u => u.role === "tutor");
    const tutorOpts = tutors.map(tr => ({ value: tr.id, label: tr.name }));
    const onTutorChange = (v) => {
      modalStudentState.tutorId = v;
      renderCustomSelect("stTutorSelectWrap", tutorOpts, v, onTutorChange);
      renderStudentGroupSelect(v, "");
      const pickedTutor = appState.users.find(u => u.id === v);
      if (pickedTutor && pickedTutor.course) {
        modalStudentState.course = String(pickedTutor.course);
        renderCustomSelect("stCourseSelectWrap", courseOptions, modalStudentState.course, onCourseChange);
      }
    };
    renderCustomSelect("stTutorSelectWrap", tutorOpts, modalStudentState.tutorId, onTutorChange);
  } else {
    const lockedUser = appState.users.find(u => u.id === modalStudentState.tutorId) || currentUser;
    const lockedName = lockedUser ? lockedUser.name : "—";
    if (tutorWrap) {
      tutorWrap.classList.add("disabled");
      tutorWrap.innerHTML = `
        <div class="cs-trigger">
          <span>${lockedName}</span>
        </div>
      `;
    }
  }

  const studyFormOpts = STUDY_FORMS.map(f => ({ value: f.value, label: currentLang === "oz" ? f.oz : f.ru }));
  const onStudyFormChange = (v) => {
    modalStudentState.studyForm = v;
    renderCustomSelect("stStudyFormWrap", studyFormOpts, v, onStudyFormChange);
  };
  renderCustomSelect("stStudyFormWrap", studyFormOpts, modalStudentState.studyForm, onStudyFormChange);

  renderHousingTypeSelector(st);

  regionSearchQuery = "";
  renderStudentRegionSelect();

  renderEmploymentSelector(st);

  // Родители и родственники
  tempFamilyMembers = st && Array.isArray(st.family) && st.family.length
    ? JSON.parse(JSON.stringify(st.family))
    : [
        { relation: "Мать", customRelation: "", name: "", phone: "", work: "" },
        { relation: "Отец", customRelation: "", name: "", phone: "", work: "" }
      ];
  renderFamilyMembersRows();

  // Социальные категории (мультивыбор + кастомные + «Другие категории» если > 5)
  modalStudentState.selectedSocial = st && Array.isArray(st.social) ? [...st.social] : [];
  isCustomSocialInputOpen = false;
  renderStudentSocialArea();

  // Волонтерское направление (drop-up + автопоиск + добавление своего направления)
  volSearchQuery = "";
  renderStudentVolunteerSelect();

  document.getElementById("studentModal").classList.remove("hidden");
}

function renderEmploymentSelector(st = null) {
  const empOpts = [
    { value: "no", label: t("Не трудоустроен", "Işlamaydi") },
    { value: "yes", label: t("Трудоустроен", "Işlaydi") }
  ];
  renderCustomSelect("stEmploymentStatusWrap", empOpts, modalStudentState.employed, (val) => {
    modalStudentState.employed = val;
    renderEmploymentSelector(st);
  });

  const orgBox = document.getElementById("employmentOrgField");
  const extraBox = document.getElementById("employmentExtraFields");

  if (modalStudentState.employed === "yes") {
    orgBox.innerHTML = `
      <div class="form-group">
        <label class="form-label">${t("Наименование организации", "Taşkilot nomi")}</label>
        <input type="text" id="stEmpOrg" class="form-input" value="${st && st.empOrg ? st.empOrg : ""}" placeholder="${t("ООО / Гостиница / Организация...", "MÇJ / Mehmonxona / Taşkilot...")}" />
      </div>
    `;
    extraBox.classList.remove("hidden");
    document.getElementById("stEmpPosition").value = st && st.empPosition ? st.empPosition : "";
    document.getElementById("stEmpAddress").value = st && st.empAddress ? st.empAddress : "";
    document.getElementById("stEmpBossName").value = st && st.empBossName ? st.empBossName : "";
    document.getElementById("stEmpBossPhone").value = st && st.empBossPhone ? st.empBossPhone : "";
    document.getElementById("stEmpTimeFrom").value = st && st.empTimeFrom ? st.empTimeFrom : "14:00";
    document.getElementById("stEmpTimeTo").value = st && st.empTimeTo ? st.empTimeTo : "18:00";
    document.getElementById("stEmpSalary").value = st && st.empSalary ? st.empSalary : "";
  } else {
    orgBox.innerHTML = "";
    extraBox.classList.add("hidden");
  }
}

function renderHousingTypeSelector(st = null) {
  const opts = [
    { value: "dorm", label: t("Общежитие", "Yotoqxona") },
    { value: "rent", label: t("Съемная квартира", "Ijara xonadon") },
    { value: "relatives", label: t("У родственников", "Qarindoşinikida") },
    { value: "own", label: t("Свой дом", "Öz uyidan qatnaydi") }
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
        <label class="form-label">${t("Номер комнаты в общежитии", "Yotoqxonadagi xona raqami")}</label>
        <input type="text" id="stRoomInput" class="form-input" value="${st && st.room ? st.room : ''}" placeholder="${t("Например: 401", "Masalan: 401")}" oninput="updateModalRoommatesPreview()" />
      </div>
    `;
    extra.innerHTML = "";
    updateModalRoommatesPreview();
  } else if (type === "rent") {
    dyn.innerHTML = `
      <div class="form-group">
        <label class="form-label">${t("Адрес съемной квартиры", "Ijara xonadon manzili")}</label>
        <input type="text" id="stAddressInput" class="form-input" value="${st && st.address ? st.address : ''}" placeholder="${t("г. Самарканд, ул. ...", "Samarqand ş., ... köçasi")}" />
      </div>
    `;
    extra.innerHTML = `
      <div class="form-group">
        <label class="form-label">${t("Данные о владельце квартиры (Ф.И.О., телефон, паспорт)", "Uy egasi haqida ma’lumot (F.I.Ş., telefon, pasport)")}</label>
        <input type="text" id="stLandlordInput" class="form-input" value="${st && st.landlord ? st.landlord : ''}" placeholder="${t("Ф.И.О. арендодателя и номер телефона", "Uy egasining F.I.Ş. va telefon raqami")}" />
      </div>
    `;
  } else if (type === "relatives") {
    dyn.innerHTML = `
      <div class="form-group">
        <label class="form-label">${t("Адрес проживания у родственников", "Qarindoşinikida yaşaş manzili")}</label>
        <input type="text" id="stAddressInput" class="form-input" value="${st && st.address ? st.address : ''}" placeholder="${t("Адрес родственников...", "Qarindoşining manzili...")}" />
      </div>
    `;
    extra.innerHTML = `
      <div class="form-group">
        <label class="form-label">${t("Данные о родственниках (степень родства, Ф.И.О., телефон)", "Qarindoşi haqida ma’lumot (qarindoşlik darajasi, F.I.Ş., telefon)")}</label>
        <input type="text" id="stRelativeHostInput" class="form-input" value="${st && st.relativeHost ? st.relativeHost : ''}" placeholder="${t("Например: Дядя — Каримов Б., +998 90 ...", "Masalan: Toğasi — Karimov B., +998 90 ...")}" />
      </div>
    `;
  } else {
    dyn.innerHTML = `
      <div class="form-group">
        <label class="form-label">${t("Адрес собственного дома", "Öz uyining manzili")}</label>
        <input type="text" id="stAddressInput" class="form-input" value="${st && st.address ? st.address : ''}" placeholder="${t("г. Самарканд, ...", "Samarqand ş., ...")}" />
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
    ? `${t("Автосвязка по комнате №", "Xona № böyiça avtomatik boğlaniş")} ${roomVal}: ${t("найдено соседей", "xonadoşlar topildi")} — ${mates.map(m => `${m.name} (${m.group})`).join(", ")}`
    : `${t("Комната №", "Xona №")} ${roomVal}: ${t("других студентов в базе пока не зарегистрировано.", "bazada boşqa talabalar hali röyxatga olinmagan.")}`;
}

function renderFamilyMembersRows() {
  const container = document.getElementById("familyMembersContainer");
  container.innerHTML = tempFamilyMembers.map((mem, idx) => `
    <div class="family-row">
      <div>
        <div class="custom-select" id="famRelSelect_${idx}"></div>
        ${mem.relation === "Другое..." ? `<input type="text" class="form-input mt-6" placeholder="${t("Кто именно...", "Kim ekanligi...")}" value="${mem.customRelation || ''}" onchange="tempFamilyMembers[${idx}].customRelation = this.value" />` : ""}
      </div>
      <input type="text" class="form-input" placeholder="${t("Ф.И.О.", "F.I.Ş.")}" value="${mem.name || ''}" onchange="tempFamilyMembers[${idx}].name = this.value" />
      <input type="text" class="form-input" placeholder="${t("Телефон", "Telefon")}" value="${mem.phone || ''}" onchange="tempFamilyMembers[${idx}].phone = this.value" />
      <input type="text" class="form-input" placeholder="${t("Место работы", "Iş joyi")}" value="${mem.work || ''}" onchange="tempFamilyMembers[${idx}].work = this.value" />
      ${canDeleteData(modalStudentState.tutorId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="removeFamilyMemberRow(${idx}, this)" title="${t("Удалить", "Öçiriş")}">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>
      </button>` : "<div></div>"}
    </div>
  `).join("");

  tempFamilyMembers.forEach((mem, idx) => {
    const opts = RELATIVE_TYPES.map(r => ({ value: r.value, label: currentLang === "oz" ? r.oz : r.ru }));
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
  if (!canDeleteData(modalStudentState.tutorId)) return;
  askConfirmDelete(btnEl, () => {
    tempFamilyMembers.splice(idx, 1);
    renderFamilyMembersRows();
  });
}

function saveStudent() {
  const name = document.getElementById("stFullName").value.trim();
  const group = (modalStudentState.group || "").trim();
  if (!name || !group) {
    showToast(t("Укажите Ф.И.О. и группу студента", "Talabaning F.I.Ş. va guruhini kiriting"));
    return;
  }

  const editId = document.getElementById("editStudentId").value;
  const oldStudent = editId ? appState.students.find(s => s.id === editId) : null;
  const social = [...new Set(modalStudentState.selectedSocial || [])];
  const isEmployed = modalStudentState.employed === "yes";

  const record = {
    id: editId || `st_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name,
    group,
    course: modalStudentState.course,
    gender: modalStudentState.gender,
    studyForm: modalStudentState.studyForm || "contract",
    passport: document.getElementById("stPassport") ? document.getElementById("stPassport").value.trim() : "",
    pinfl: document.getElementById("stPinfl") ? document.getElementById("stPinfl").value.trim() : "",
    hemisId: document.getElementById("stHemisId") ? document.getElementById("stHemisId").value.trim() : "",
    region: modalStudentState.region || "",
    phone: document.getElementById("stPhone").value.trim(),
    tutorId: modalStudentState.tutorId,
    housingType: modalStudentState.housingType,
    room: document.getElementById("stRoomInput") ? document.getElementById("stRoomInput").value.trim() : "",
    address: document.getElementById("stAddressInput") ? document.getElementById("stAddressInput").value.trim() : "",
    landlord: document.getElementById("stLandlordInput") ? document.getElementById("stLandlordInput").value.trim() : "",
    relativeHost: document.getElementById("stRelativeHostInput") ? document.getElementById("stRelativeHostInput").value.trim() : "",
    employed: isEmployed,
    empOrg: isEmployed && document.getElementById("stEmpOrg") ? document.getElementById("stEmpOrg").value.trim() : "",
    empPosition: isEmployed ? document.getElementById("stEmpPosition").value.trim() : "",
    empAddress: isEmployed ? document.getElementById("stEmpAddress").value.trim() : "",
    empBossName: isEmployed ? document.getElementById("stEmpBossName").value.trim() : "",
    empBossPhone: isEmployed ? document.getElementById("stEmpBossPhone").value.trim() : "",
    empTimeFrom: isEmployed ? document.getElementById("stEmpTimeFrom").value : "",
    empTimeTo: isEmployed ? document.getElementById("stEmpTimeTo").value : "",
    empSalary: isEmployed ? document.getElementById("stEmpSalary").value.trim() : "",
    family: tempFamilyMembers,
    social,
    volunteer: [...new Set(modalStudentState.volunteers || [])]
  };

  if (editId) {
    const idx = appState.students.findIndex(s => s.id === editId);
    if (idx !== -1) appState.students[idx] = record;
  } else {
    appState.students.unshift(record);
  }

  saveState();
  syncSpecificTutorFolder(record.tutorId);
  if (oldStudent && oldStudent.tutorId !== record.tutorId) {
    syncSpecificTutorFolder(oldStudent.tutorId);
  }

  closeModal("studentModal");
  renderAllViews();
  showToast(t("Карточка студента сохранена", "Talaba kartasi saqlandi"));
}

function deleteStudent(id, btnEl) {
  const checkTarget = appState.students.find(s => s.id === id);
  if (!checkTarget || !canDeleteData(checkTarget.tutorId)) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uşun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    const target = appState.students.find(s => s.id === id);
    const ownerTutorId = target ? target.tutorId : null;
    appState.students = appState.students.filter(s => s.id !== id);
    saveState();
    if (ownerTutorId) syncSpecificTutorFolder(ownerTutorId);
    renderAllViews();
    showToast(t("Студент удален из базы", "Talaba bazadan öçirildi"));
  });
}

// Импорт HEMIS
function openHemisImportModal() {
  document.getElementById("hemisModal").classList.remove("hidden");
}

function runHemisImport() {
  const bulk = document.getElementById("hemisBulkText").value.trim();
  if (!bulk) {
    showToast(t("Вставьте данные студентов из HEMIS", "HEMIS dan talabalar ma’lumotlarini kiriting"));
    return;
  }
  const lines = bulk.split("\n").filter(Boolean);
  let added = 0;
  const targetTutorId = isTutorOnly() ? currentUser.id : "tutor1";

  lines.forEach((line, i) => {
    const parts = line.split("|").map(p => p.trim());
    if (parts[0]) {
      const gRaw = (parts[3] || "М").toUpperCase();
      const isFemale = gRaw.startsWith("Ж") || gRaw.startsWith("A");
      appState.students.unshift({
        id: `hemis_${Date.now()}_${i}_${Math.random().toString(36).slice(2, 5)}`,
        name: parts[0],
        group: parts[1] || "TR-101",
        course: parts[2] || "1",
        gender: isFemale ? "Ж" : "М",
        phone: parts[4] || "",
        tutorId: targetTutorId,
        studyForm: "contract",
        housingType: "own",
        room: "", address: "", landlord: "", relativeHost: "",
        employed: false, empOrg: "", empPosition: "", empAddress: "",
        empBossName: "", empBossPhone: "", empTimeFrom: "", empTimeTo: "", empSalary: "",
        family: [], social: [], volunteer: []
      });
      added++;
    }
  });
  saveState();
  syncSpecificTutorFolder(targetTutorId);
  closeModal("hemisModal");
  const syncEl = document.getElementById("hemisSyncStatus");
  syncEl.dataset.customTime = "1";
  syncEl.textContent = `${t("Последняя синхронизация с tyutor.hemis.uz", "tyutor.hemis.uz bilan oxirgi sinxronlaş")}: ${new Date().toLocaleString()}`;
  renderAllViews();
  showToast(`${t("Импортировано студентов", "Import qilingan talabalar")}: ${added}`);
}

// ==================== 3. TELEGRAM И ОТЧЕТЫ GOOGLE DOCS ====================
const TELEGRAM_WORKER_URL = "https://mytutors-parser.lanigirodesigner.workers.dev";
let reportSelectedTag = "all";
let isCustomTagInputOpen = false;
let tgAllTagsSearchQuery = "";
let reportTagSearchQuery = "";

let selectedPostAuthorId = "";
let tgAuthorSearchQuery = "";
let selectedPostGroups = [];
let tgGroupsSearchQuery = "";
let selectedPostCollabs = []; // [{ type: "user", id, name } | { type: "custom", name }]
let tgCollabSearchQuery = "";
let activeTgAuthorFilter = "all";

let editTgState = {
  id: "",
  authorId: "",
  authorSearch: "",
  groups: [],
  groupsSearch: "",
  collaborators: [],
  collabSearch: "",
  tags: []
};

function getAvailableGroupsForPost(authorId, collaborators) {
  const invalid = new Set(["Все группы", "Не назначены", "Biriktirilmagan", "—", ""]);
  const groupSet = new Set();
  const addUserGroups = (uid) => {
    const u = (appState.users || []).find(x => x.id === uid);
    if (!u || u.role !== "tutor" || !u.groups) return;
    String(u.groups)
      .split(",")
      .map(g => g.trim())
      .filter(g => g && !invalid.has(g))
      .forEach(g => groupSet.add(g));
  };

  if (authorId) addUserGroups(authorId);
  (collaborators || []).forEach(c => {
    if (c && c.type === "user" && c.id) addUserGroups(c.id);
  });
  return [...groupSet];
}

function formatTgGroupsTrigger(selectedArr) {
  if (!selectedArr || !selectedArr.length) {
    return t("Выберите группы...", "Guruhlarni tanlang...");
  }
  if (selectedArr.length <= 2) return selectedArr.join(", ");
  return `${selectedArr[0]}, ${selectedArr[1]} (+${selectedArr.length - 2})`;
}

function renderTgGroupsSelect(keepOpen = false) {
  const fieldWrap = document.getElementById("tgGroupsFieldWrap");
  const grid = document.getElementById("tgMetaGrid");
  const wrap = document.getElementById("tgGroupsSelectWrap");
  if (!fieldWrap || !grid || !wrap) return;

  const available = getAvailableGroupsForPost(getEffectiveNewPostAuthorId(), selectedPostCollabs);
  selectedPostGroups = selectedPostGroups.filter(g => available.includes(g));

  if (!available.length) {
    fieldWrap.classList.add("hidden");
    grid.classList.remove("has-groups");
    return;
  }

  fieldWrap.classList.remove("hidden");
  grid.classList.add("has-groups");
  const wasOpen = keepOpen || wrap.classList.contains("open");

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('tgGroupsSelectWrap'); setTimeout(() => { const i = document.getElementById('tgGroupsSearchInput'); if(i) i.focus(); }, 30);">
      <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${formatTgGroupsTrigger(selectedPostGroups)}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()">
      <input type="text" id="tgGroupsSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск группы...", "Guruh qidiriş...")}" value="${tgGroupsSearchQuery}" oninput="renderTgGroupsOptionsList()" />
      <div id="tgGroupsOptionsList" class="tg-tag-search-list"></div>
    </div>
  `;

  if (wasOpen) wrap.classList.add("open");
  renderTgGroupsOptionsList();
}

function renderTgGroupsOptionsList() {
  const listEl = document.getElementById("tgGroupsOptionsList");
  const inp = document.getElementById("tgGroupsSearchInput");
  if (!listEl) return;

  tgGroupsSearchQuery = inp ? inp.value : "";
  const q = tgGroupsSearchQuery.trim().toLowerCase();
  const available = getAvailableGroupsForPost(getEffectiveNewPostAuthorId(), selectedPostCollabs);
  const matched = q ? available.filter(g => g.toLowerCase().includes(q)) : available;

  listEl.innerHTML = matched.length
    ? matched.map(g => {
        const checked = selectedPostGroups.includes(g);
        return `
          <label class="social-check-option">
            <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleNewPostGroup('${g.replace(/'/g, "\'")}')" />
            <span>#${g}</span>
          </label>
        `;
      }).join("")
    : `<div class="st-meta" style="padding:8px 10px;">${t("Группы не найдены", "Guruhlar topilmadi")}</div>`;
}

function toggleNewPostGroup(groupName) {
  if (selectedPostGroups.includes(groupName)) {
    selectedPostGroups = selectedPostGroups.filter(g => g !== groupName);
  } else {
    selectedPostGroups = [...selectedPostGroups, groupName];
  }
  renderTgGroupsSelect(true);
}

function getEffectiveNewPostAuthorId() {
  if (hasAdminPrivileges() && selectedPostAuthorId && appState.users.some(u => u.id === selectedPostAuthorId)) {
    return selectedPostAuthorId;
  }
  return currentUser ? currentUser.id : "";
}

function renderTgAuthorSelect() {
  const fieldWrap = document.getElementById("tgAuthorFieldWrap");
  const grid = document.getElementById("tgMetaGrid");
  const wrap = document.getElementById("tgAuthorSelectWrap");
  if (!fieldWrap || !grid || !wrap) return;

  if (!hasAdminPrivileges()) {
    fieldWrap.classList.add("hidden");
    grid.classList.remove("has-author");
    return;
  }

  fieldWrap.classList.remove("hidden");
  grid.classList.add("has-author");

  const authorId = getEffectiveNewPostAuthorId();
  selectedPostAuthorId = authorId;
  const authorObj = appState.users.find(u => u.id === authorId);
  const label = authorObj
    ? `${authorObj.name} (${localizeRoleTitle(authorObj.role, authorObj.roleTitle)})`
    : t("Выберите автора...", "Muallifni tanlang...");

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('tgAuthorSelectWrap'); setTimeout(() => { const i = document.getElementById('tgAuthorSearchInput'); if(i) i.focus(); }, 30);">
      <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${label}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()">
      <input type="text" id="tgAuthorSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск автора...", "Muallif qidiriş...")}" value="${tgAuthorSearchQuery}" oninput="renderTgAuthorOptionsList()" />
      <div id="tgAuthorOptionsList" class="tg-tag-search-list"></div>
    </div>
  `;
  renderTgAuthorOptionsList();
}

function renderTgAuthorOptionsList() {
  const listEl = document.getElementById("tgAuthorOptionsList");
  const inp = document.getElementById("tgAuthorSearchInput");
  if (!listEl) return;

  tgAuthorSearchQuery = inp ? inp.value : "";
  const q = tgAuthorSearchQuery.trim().toLowerCase();
  const users = appState.users || [];
  const matched = q
    ? users.filter(u => (u.name || "").toLowerCase().includes(q) || (u.login || "").toLowerCase().includes(q))
    : users;

  const checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5l10 -10"/></svg>';
  listEl.innerHTML = matched.length
    ? matched.map(u => `
        <div class="cs-option ${selectedPostAuthorId === u.id ? 'selected' : ''}" onclick="selectNewPostAuthor('${u.id}')">
          <span>${u.name} <span class="st-meta">(${localizeRoleTitle(u.role, u.roleTitle)})</span></span>
          ${selectedPostAuthorId === u.id ? checkSvg : ''}
        </div>
      `).join("")
    : `<div class="st-meta" style="padding:8px 10px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`;
}

function selectNewPostAuthor(userId) {
  selectedPostAuthorId = userId;
  tgAuthorSearchQuery = "";
  selectedPostCollabs = selectedPostCollabs.filter(c => !(c.type === "user" && c.id === userId));
  const wrap = document.getElementById("tgAuthorSelectWrap");
  if (wrap) wrap.classList.remove("open");
  renderTgAuthorSelect();
  renderTgGroupsSelect();
  renderTgCollabSelect();
}

function formatTgCollabTrigger() {
  if (!selectedPostCollabs.length) {
    return t("Без соавторов (выберите из списка или введите)", "Hamkorlarsiz (röyxatdan tanlang yoki kiriting)");
  }
  const names = selectedPostCollabs.map(c => c.name);
  if (names.length <= 2) return names.join(", ");
  return `${names[0]}, ${names[1]} (+${names.length - 2})`;
}

function renderTgCollabSelect(keepOpen = false) {
  const wrap = document.getElementById("tgCollabSelectWrap");
  if (!wrap) return;
  const wasOpen = keepOpen || wrap.classList.contains("open");

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('tgCollabSelectWrap'); setTimeout(() => { const i = document.getElementById('tgCollabSearchInput'); if(i) i.focus(); }, 30);">
      <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${formatTgCollabTrigger()}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()">
      <input type="text" id="tgCollabSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск сотрудника или введите нового партнёра...", "Xodimni qidiriş yoki yangi hamkor kiritiş...")}" value="${tgCollabSearchQuery}" oninput="renderTgCollabOptionsList()" onkeydown="if(event.key==='Enter'){event.preventDefault(); addCustomTgCollab(this.value);}" />
      <div id="tgCollabOptionsList" class="tg-tag-search-list"></div>
    </div>
  `;

  if (wasOpen) wrap.classList.add("open");
  renderTgCollabOptionsList();
}

function renderTgCollabOptionsList() {
  const listEl = document.getElementById("tgCollabOptionsList");
  const inp = document.getElementById("tgCollabSearchInput");
  if (!listEl) return;

  tgCollabSearchQuery = inp ? inp.value : "";
  const q = tgCollabSearchQuery.trim().toLowerCase();

  // Все зарегистрированные пользователи (кроме выбранного автора поста)
  const effectiveAuthorId = getEffectiveNewPostAuthorId();
  const users = (appState.users || []).filter(u => u.id !== effectiveAuthorId);
  const matchedUsers = q
    ? users.filter(u => (u.name || "").toLowerCase().includes(q) || (u.login || "").toLowerCase().includes(q))
    : users;

  const exactUserMatch = users.some(u => (u.name || "").toLowerCase() === q);
  const customSelected = selectedPostCollabs.filter(c => c.type === "custom");

  let html = "";

  if (customSelected.length && !q) {
    html += `<div class="cs-divider-label">${t("Внешние партнёры (для этого поста)", "Taşqi hamkorlar (uşbu post uşun)")}</div>`;
    html += customSelected.map(c => `
      <label class="social-check-option">
        <input type="checkbox" checked onchange="removeCustomTgCollab('${c.name.replace(/'/g, "\\'")}')" />
        <span>${c.name}</span>
      </label>
    `).join("");
  }

  if (matchedUsers.length) {
    html += `<div class="cs-divider-label">${t("Пользователи системы", "Tizim foydalanuvçilari")}</div>`;
    html += matchedUsers.map(u => {
      const checked = selectedPostCollabs.some(c => c.type === "user" && c.id === u.id);
      return `
        <label class="social-check-option">
          <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleTgCollabUser('${u.id}')" />
          <span>${u.name} <span class="st-meta">(${localizeRoleTitle(u.role, u.roleTitle)})</span></span>
        </label>
      `;
    }).join("");
  }

  // Одноразовый ввод внешнего партнёра без сохранения в БД
  const cleanQuery = tgCollabSearchQuery.trim();
  if (cleanQuery && !exactUserMatch) {
    html += `
      <div class="tag-ac-item create-new" onclick="addCustomTgCollab('${cleanQuery.replace(/'/g, "\\'")}')">
        <span>+ ${t("Добавить партнёра", "Yangi hamkor qöşiş")}: <strong>${cleanQuery}</strong></span>
      </div>
    `;
  }

  listEl.innerHTML = html || `<div class="st-meta" style="padding:8px 10px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`;
}

function toggleTgCollabUser(userId) {
  const user = appState.users.find(u => u.id === userId);
  if (!user) return;
  const exists = selectedPostCollabs.some(c => c.type === "user" && c.id === userId);
  if (exists) {
    selectedPostCollabs = selectedPostCollabs.filter(c => !(c.type === "user" && c.id === userId));
  } else {
    selectedPostCollabs.push({ type: "user", id: user.id, name: user.name });
  }
  renderTgGroupsSelect();
  renderTgCollabSelect(true);
}

function addCustomTgCollab(rawName) {
  const clean = convertUzbekLatinText(String(rawName || "").trim());
  if (!clean) return;
  const already = selectedPostCollabs.some(c => c.type === "custom" && c.name.toLowerCase() === clean.toLowerCase());
  if (!already) {
    selectedPostCollabs.push({ type: "custom", name: clean });
  }
  tgCollabSearchQuery = "";
  renderTgCollabSelect(true);
}

function removeCustomTgCollab(name) {
  selectedPostCollabs = selectedPostCollabs.filter(c => !(c.type === "custom" && c.name === name));
  renderTgCollabSelect(true);
}

function setTgAuthorFilter(userId) {
  activeTgAuthorFilter = userId || "all";
  renderTelegramSection();
}

function resetTgAuthorFilter() {
  activeTgAuthorFilter = "all";
  renderTelegramSection();
}


function normalizeTagInput(raw) {
  let cleaned = String(raw || "").trim().replace(/\s+/g, "");
  if (!cleaned) return "";
  if (!cleaned.startsWith("#")) cleaned = "#" + cleaned;
  return cleaned;
}

function getAllKnownTags() {
  const set = new Set(TG_TAGS);
  (appState.customTags || []).forEach(tg => { if (tg) set.add(tg); });
  (appState.tgPosts || []).forEach(p => {
    (p.tags || []).forEach(tg => { if (tg) set.add(tg); });
  });
  return [...set];
}

function getTop5RecentTags() {
  const ordered = [];
  const addUnique = (tg) => {
    if (tg && !ordered.includes(tg)) ordered.push(tg);
  };
  (appState.recentTags || []).forEach(addUnique);
  const sortedPosts = [...(appState.tgPosts || [])].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  sortedPosts.forEach(p => (p.tags || []).forEach(addUnique));
  TG_TAGS.forEach(addUnique);
  return ordered.slice(0, 5);
}

function recordRecentTags(tagsArr) {
  if (!Array.isArray(tagsArr) || !tagsArr.length) return;
  const current = appState.recentTags || [];
  const merged = [...tagsArr.filter(Boolean), ...current.filter(tg => !tagsArr.includes(tg))];
  appState.recentTags = merged.slice(0, 30);
}

function openCustomTagInput() {
  isCustomTagInputOpen = true;
  renderNewPostTagsArea();
  const inp = document.getElementById("customTagInput");
  if (inp) {
    inp.focus();
    updateCustomTagAutocomplete();
  }
}

function closeCustomTagInput() {
  isCustomTagInputOpen = false;
  renderNewPostTagsArea();
}

function addOrSelectCustomTag(rawVal) {
  const tag = normalizeTagInput(rawVal);
  if (!tag || tag === "#") return;

  if (!TG_TAGS.includes(tag) && !(appState.customTags || []).includes(tag)) {
    appState.customTags = [tag, ...(appState.customTags || [])];
  }
  if (!selectedNewPostTags.includes(tag)) {
    selectedNewPostTags.push(tag);
  }
  recordRecentTags([tag]);
  saveState();
  isCustomTagInputOpen = false;
  renderTelegramSection();
}

function updateCustomTagAutocomplete() {
  const inp = document.getElementById("customTagInput");
  const menu = document.getElementById("customTagAutocomplete");
  if (!inp || !menu) return;

  const q = inp.value.trim().toLowerCase().replace(/^#/, "");
  const allTags = getAllKnownTags();
  const matches = q
    ? allTags.filter(tg => tg.toLowerCase().replace(/^#/, "").includes(q))
    : allTags.slice(0, 8);

  const normalizedInput = normalizeTagInput(inp.value);
  const exactExists = allTags.some(tg => tg.toLowerCase() === normalizedInput.toLowerCase());

  let html = matches.slice(0, 8).map(tg => `
    <div class="tag-ac-item" onmousedown="event.preventDefault(); addOrSelectCustomTag('${tg.replace(/'/g, "\'")}')">
      <span>${tg}</span>
      ${selectedNewPostTags.includes(tg) ? '<span style="color:var(--accent)">✓</span>' : ''}
    </div>
  `).join("");

  if (normalizedInput && normalizedInput !== "#" && !exactExists) {
    html += `
      <div class="tag-ac-item create-new" onmousedown="event.preventDefault(); addOrSelectCustomTag('${normalizedInput.replace(/'/g, "\'")}')">
        <span>+ ${t("Добавить тег", "Yangi teg qöşiş")}: <strong>${normalizedInput}</strong></span>
      </div>
    `;
  }

  if (!html) {
    menu.classList.add("hidden");
  } else {
    menu.innerHTML = html;
    menu.classList.remove("hidden");
  }
}

function renderNewPostTagsArea() {
  const wrap = document.getElementById("tgNewPostTags");
  if (!wrap) return;

  // Базовые теги + выбранные пользователем кастомные теги (чтобы не перегружать форму)
  const extraSelected = selectedNewPostTags.filter(tg => !TG_TAGS.includes(tg));
  const chipsToShow = [...TG_TAGS, ...extraSelected];

  const chipsHtml = chipsToShow.map(tag => `
    <div class="tag-chip ${selectedNewPostTags.includes(tag) ? 'active' : ''}" onclick="toggleNewPostTag('${tag.replace(/'/g, "\'")}')">${tag}</div>
  `).join("");

  const customControlHtml = isCustomTagInputOpen
    ? `
      <div class="custom-tag-inline-wrap">
        <input type="text" id="customTagInput" class="custom-tag-input" placeholder="${t("Введите #тег...", "#teg kiriting...")}" oninput="updateCustomTagAutocomplete()" onkeydown="if(event.key==='Enter'){event.preventDefault(); addOrSelectCustomTag(this.value);} else if(event.key==='Escape'){closeCustomTagInput();}" />
        <button type="button" class="tag-chip custom-tag-btn" onclick="addOrSelectCustomTag(document.getElementById('customTagInput').value)">+</button>
        <div id="customTagAutocomplete" class="tag-autocomplete-menu hidden"></div>
      </div>
    `
    : `
      <button type="button" class="tag-chip custom-tag-btn" onclick="openCustomTagInput()">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5l0 14"/><path d="M5 12l14 0"/></svg>
        <span>${t("Свой тег", "Öz tegim")}</span>
      </button>
    `;

  wrap.innerHTML = chipsHtml + customControlHtml;
}

function toggleAllTagsDropdown(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById("tgAllTagsDropdown");
  if (!dd) return;
  const wasOpen = dd.classList.contains("open");
  document.querySelectorAll(".tg-all-tags-dropdown.open").forEach(el => el.classList.remove("open"));
  if (!wasOpen) {
    dd.classList.add("open");
    const inp = document.getElementById("tgFilterTagSearch");
    if (inp) {
      inp.value = tgAllTagsSearchQuery;
      inp.focus();
      renderFilterTagSearchList();
    }
  }
}

function renderFilterTagSearchList() {
  const listEl = document.getElementById("tgFilterTagList");
  const inp = document.getElementById("tgFilterTagSearch");
  if (!listEl) return;
  tgAllTagsSearchQuery = inp ? inp.value : "";
  const q = tgAllTagsSearchQuery.trim().toLowerCase().replace(/^#/, "");
  const allTags = getAllKnownTags();
  const filtered = q
    ? allTags.filter(tg => tg.toLowerCase().replace(/^#/, "").includes(q))
    : allTags;

  if (!filtered.length) {
    listEl.innerHTML = `<div class="st-meta" style="padding:8px 10px;">${t("Теги не найдены", "Teglar topilmadi")}</div>`;
    return;
  }

  listEl.innerHTML = filtered.map(tg => `
    <div class="cs-option ${activeTgTagFilter === tg ? 'selected' : ''}" onclick="setTgTagFilter('${tg.replace(/'/g, "\'")}')">
      <span>${tg}</span>
      ${activeTgTagFilter === tg ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5l10 -10"/></svg>' : ''}
    </div>
  `).join("");
}

function renderReportTagSelect() {
  const wrap = document.getElementById("reportTagSelectWrap");
  if (!wrap) return;

  const currentLabel = reportSelectedTag === "all"
    ? t("Все категории тегов", "Barça teg toifalari")
    : reportSelectedTag;

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('reportTagSelectWrap')">
      <span>${currentLabel}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" style="min-width: 100%; padding: 8px;" onclick="event.stopPropagation()">
      <input type="text" id="reportTagSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск тега...", "Teg qidiriş...")}" value="${reportTagSearchQuery}" oninput="renderReportTagOptionsList()" />
      <div id="reportTagOptionsList" class="tg-tag-search-list"></div>
    </div>
  `;
  renderReportTagOptionsList();
}

function renderReportTagOptionsList() {
  const listEl = document.getElementById("reportTagOptionsList");
  const inp = document.getElementById("reportTagSearchInput");
  if (!listEl) return;

  reportTagSearchQuery = inp ? inp.value : "";
  const q = reportTagSearchQuery.trim().toLowerCase().replace(/^#/, "");
  const top5 = getTop5RecentTags();
  const allTags = getAllKnownTags();
  const restTags = allTags.filter(tg => !top5.includes(tg));

  const checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5l10 -10"/></svg>';

  let html = "";
  if (!q) {
    html += `
      <div class="cs-option ${reportSelectedTag === 'all' ? 'selected' : ''}" onclick="selectReportTag('all')">
        <span>${t("Все категории тегов", "Barça teg toifalari")}</span>
        ${reportSelectedTag === 'all' ? checkSvg : ''}
      </div>
      <div class="cs-divider-label">${t("Последние 5 тегов", "Oxirgi 5 ta teg")}</div>
      ${top5.map(tg => `
        <div class="cs-option ${reportSelectedTag === tg ? 'selected' : ''}" onclick="selectReportTag('${tg.replace(/'/g, "\'")}')">
          <span>${tg}</span>
          ${reportSelectedTag === tg ? checkSvg : ''}
        </div>
      `).join("")}
    `;
    if (restTags.length) {
      html += `
        <div class="cs-divider-label">${t("Все остальные теги", "Boşqa barça teglar")}</div>
        ${restTags.map(tg => `
          <div class="cs-option ${reportSelectedTag === tg ? 'selected' : ''}" onclick="selectReportTag('${tg.replace(/'/g, "\'")}')">
            <span>${tg}</span>
            ${reportSelectedTag === tg ? checkSvg : ''}
          </div>
        `).join("")}
      `;
    }
  } else {
    const matched = allTags.filter(tg => tg.toLowerCase().replace(/^#/, "").includes(q));
    html = matched.length
      ? matched.map(tg => `
          <div class="cs-option ${reportSelectedTag === tg ? 'selected' : ''}" onclick="selectReportTag('${tg.replace(/'/g, "\'")}')">
            <span>${tg}</span>
            ${reportSelectedTag === tg ? checkSvg : ''}
          </div>
        `).join("")
      : `<div class="st-meta" style="padding:8px 10px;">${t("Теги не найдены", "Teglar topilmadi")}</div>`;
  }

  listEl.innerHTML = html;
}

function selectReportTag(val) {
  reportSelectedTag = val;
  reportTagSearchQuery = "";
  const wrap = document.getElementById("reportTagSelectWrap");
  if (wrap) wrap.classList.remove("open");
  renderReportTagSelect();
  updateReportPreview();
}

function renderTelegramSection() {
  document.getElementById("tgDateInput").value = new Date().toISOString().slice(0, 10);

  renderNewPostTagsArea();
  renderTgAuthorSelect();
  renderTgGroupsSelect();
  renderTgCollabSelect();

  // Фильтр постов: «Все посты» + 5 последних использованных тегов + выпадающий список всех тегов с поиском
  const top5 = getTop5RecentTags();
  const isCustomActiveOutsideTop5 = activeTgTagFilter !== "all" && !top5.includes(activeTgTagFilter);
  const filterRowEl = document.getElementById("tgFilterTagsRow");

  filterRowEl.innerHTML = `
    <div class="tag-chip ${activeTgTagFilter === 'all' ? 'active' : ''}" onclick="setTgTagFilter('all')">${t('Все посты', 'Barça postlar')}</div>
    ${top5.map(tg => `
      <div class="tag-chip ${activeTgTagFilter === tg ? 'active' : ''}" onclick="setTgTagFilter('${tg.replace(/'/g, "\'")}')">${tg}</div>
    `).join("")}
    ${isCustomActiveOutsideTop5 ? `<div class="tag-chip active" onclick="setTgTagFilter('${activeTgTagFilter.replace(/'/g, "\'")}')">${activeTgTagFilter}</div>` : ""}
    <div class="tg-all-tags-dropdown" id="tgAllTagsDropdown">
      <button type="button" class="tg-all-tags-trigger" onclick="toggleAllTagsDropdown(event)">
        <span>${t("Все теги", "Barça teglar")}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6l6 -6"/></svg>
      </button>
      <div class="tg-all-tags-menu" onclick="event.stopPropagation()">
        <input type="text" id="tgFilterTagSearch" class="tg-tag-search-input" placeholder="${t("Поиск тега...", "Teg qidiriş...")}" oninput="renderFilterTagSearchList()" />
        <div id="tgFilterTagList" class="tg-tag-search-list"></div>
      </div>
    </div>
  `;

  renderReportTagSelect();

  let posts = isTutorOnly()
    ? appState.tgPosts.filter(p =>
        p.authorId === currentUser.id ||
        (p.collaborators || []).some(c => c.type === "user" && c.id === currentUser.id)
      )
    : appState.tgPosts;

  if (activeTgTagFilter !== "all") {
    posts = posts.filter(p => (p.tags || []).includes(activeTgTagFilter));
  }

  if (activeTgAuthorFilter !== "all") {
    posts = posts.filter(p =>
      p.authorId === activeTgAuthorFilter ||
      (p.collaborators || []).some(c => c.type === "user" && c.id === activeTgAuthorFilter)
    );
  }

  posts = [...posts].sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  const activeAuthorObj = activeTgAuthorFilter !== "all"
    ? appState.users.find(u => u.id === activeTgAuthorFilter)
    : null;

  const authorFilterBannerHtml = activeAuthorObj ? `
    <div class="tg-author-filter-banner">
      <span>${t("Фильтр по автору / партнёру", "Muallif / hamkor böyiça filtr")}: <strong>${activeAuthorObj.name}</strong></span>
      <button type="button" class="btn-export sm" onclick="resetTgAuthorFilter()">${t("Сбросить фильтр", "Filtrni tozalash")}</button>
    </div>
  ` : "";

  const listEl = document.getElementById("tgPostsList");
  if (!posts.length) {
    listEl.innerHTML = authorFilterBannerHtml + `<div class="empty-state">${t(
      "Загруженных постов из Telegram пока нет. Вставьте ссылку формата https://t.me/studlifeuniv/12028 выше.",
      "Telegram dan yuklangan postlar hozirça yöq. Yuqorida https://t.me/studlifeuniv/12028 şaklidagi havolani kiriting."
    )}</div>`;
  } else {
    listEl.innerHTML = authorFilterBannerHtml + posts.map(p => {
      const cleanImages = (p.images || []).filter(isRealPostPhoto);
      const authorUser = appState.users.find(u => u.id === p.authorId);
      const authorName = authorUser ? authorUser.name : t("Неизвестный автор", "Noma’lum muallif");
      const collabs = Array.isArray(p.collaborators) ? p.collaborators : [];
      const collabsHtml = collabs.length ? `
        <span style="margin-left:4px;">${t("совместно с:", "hamkorlikda:")}</span>
        ${collabs.map(c => {
          if (c.type === "user") {
            const uObj = appState.users.find(u => u.id === c.id);
            const displayName = uObj ? uObj.name : c.name;
            return `<button type="button" class="collab-pill clickable ${activeTgAuthorFilter === c.id ? 'active' : ''}" onclick="setTgAuthorFilter('${c.id}')">${displayName}</button>`;
          }
          return `<span class="collab-pill custom-static">${c.name}</span>`;
        }).join("")}
      ` : "";

      return `
        <div class="post-card">
          <div class="post-head">
            <div>
              <a href="${p.url}" target="_blank" style="color:var(--blue); font-weight:700; text-decoration:none;">${p.url}</a>
              <span class="st-meta"> • ${p.date}</span>
            </div>
            <div class="post-head-actions">
              ${hasAdminPrivileges() ? `<button type="button" class="btn-link-orange" onclick="openEditTgPostModal('${p.id}')">${t("Изменить", "Tahrirlaş")}</button>` : ""}
              ${canDeleteData(p.authorId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteTgPost('${p.id}', this)" title="${t("Удалить пост", "Postni öçiriş")}">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
              </button>` : ""}
            </div>
          </div>
          <p style="font-size:14px; white-space:pre-line;">${p.text}</p>
          <div class="checkbox-chips mt-10">
            ${(p.tags || []).map(tg => `<button type="button" class="badge-pill clickable-tag ${activeTgTagFilter === tg ? 'active' : ''}" onclick="setTgTagFilter('${tg.replace(/'/g, "\'")}')">${tg}</button>`).join("")}
          </div>
          ${cleanImages.length ? `
            <div class="post-images">
              ${cleanImages.map(img => `<img src="${img}" alt="TG" onclick="openLightbox('${img}')" />`).join("")}
            </div>
          ` : ""}
          <div class="post-collab-bar">
            <span>${t("Автор:", "Muallif:")}</span>
            ${authorUser
              ? `<button type="button" class="collab-pill clickable ${activeTgAuthorFilter === authorUser.id ? 'active' : ''}" onclick="setTgAuthorFilter('${authorUser.id}')">${authorName}</button>`
              : `<span class="collab-pill custom-static">${authorName}</span>`}
            ${collabsHtml}
          </div>
        </div>
      `;
    }).join("");
  }

  updateReportPreview();
}

function toggleNewPostTag(tag) {
  if (selectedNewPostTags.includes(tag)) {
    selectedNewPostTags = selectedNewPostTags.filter(tg => tg !== tag);
  } else {
    selectedNewPostTags.push(tag);
  }
  renderNewPostTagsArea();
}

function setTgTagFilter(tag) {
  activeTgTagFilter = tag;
  tgAllTagsSearchQuery = "";
  renderTelegramSection();
}

function isRealPostPhoto(url) {
  if (typeof url !== "string" || !url.startsWith("http")) return false;
  const lower = url.toLowerCase();
  if (lower.includes("/emoji/") || lower.includes("telegram.org/img/emoji") || lower.includes("t.me/i/")) {
    return false;
  }
  return true;
}

async function parseTelegramPost() {
  const url = document.getElementById("tgUrlInput").value.trim();
  const dateInput = document.getElementById("tgDateInput");
  const textInput = document.getElementById("tgTextInput");
  let postDate = dateInput.value || new Date().toISOString().slice(0, 10);
  let text = textInput.value.trim();
  let images = [];

  if (!url) {
    showToast(t("Введите ссылку на публикацию в Telegram", "Telegram post havolasini kiriting"));
    return;
  }

  showToast(t("Загрузка поста из Telegram...", "Telegram post yuklanmoqda..."));

  try {
    const endpoint = `${TELEGRAM_WORKER_URL.replace(/\/+$/, "")}/tg?url=${encodeURIComponent(url)}`;
    const res = await fetch(endpoint, { method: "GET", redirect: "follow" });
    const data = await res.json();

    if (data && data.ok) {
      if (!text && data.text) text = data.text;
      if (data.date) postDate = data.date;
      if (Array.isArray(data.images)) {
        images = data.images.filter(isRealPostPhoto);
      }
    }
  } catch (err) {
    console.warn("Ошибка парсинга через Cloudflare Worker:", err);
  }

  if (!text) {
    text = t(
      `Публикация из канала @studlifeuniv (${url}). Проведено воспитательно-просветительское мероприятие со студентами университета.`,
      `@studlifeuniv kanalidagi naşr (${url}). Universitet talabalari bilan ma’naviy-ma’rifiy tadbir ötkazildi.`
    );
  }

  const chosenAuthorId = getEffectiveNewPostAuthorId();
  const groupTags = selectedPostGroups.map(g => normalizeTagInput(g)).filter(Boolean);
  const mergedTags = [...new Set([...selectedNewPostTags, ...groupTags])];

  appState.tgPosts.unshift({
    id: `post_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    authorId: chosenAuthorId,
    groups: [...selectedPostGroups],
    collaborators: [...selectedPostCollabs],
    url,
    date: postDate,
    text,
    tags: mergedTags,
    images
  });

  selectedPostAuthorId = currentUser.id;
  tgAuthorSearchQuery = "";
  selectedPostGroups = [];
  tgGroupsSearchQuery = "";
  selectedPostCollabs = [];
  tgCollabSearchQuery = "";
  recordRecentTags(mergedTags);
  saveState();
  syncSpecificTutorFolder(chosenAuthorId);
  document.getElementById("tgUrlInput").value = "";
  textInput.value = "";
  renderTelegramSection();
  showToast(t("Пост добавлен и отсортирован по дате", "Post qöşildi va sana böyiça saralandi"));
}


// ==================== РЕДАКТИРОВАНИЕ ПОСТА TELEGRAM (ТОЛЬКО АДМИН / ЧАСТ. АДМИН) ====================
function openEditTgPostModal(postId) {
  if (!hasAdminPrivileges()) {
    showToast(t("Недостаточно прав для редактирования", "Tahrirlaş uşun ruxsat yetarli emas"));
    return;
  }
  const post = appState.tgPosts.find(p => p.id === postId);
  if (!post) return;

  const postGroups = Array.isArray(post.groups) ? [...post.groups] : [];
  editTgState = {
    id: post.id,
    authorId: post.authorId || currentUser.id,
    authorSearch: "",
    groups: postGroups,
    groupsSearch: "",
    collaborators: Array.isArray(post.collaborators) ? JSON.parse(JSON.stringify(post.collaborators)) : [],
    collabSearch: "",
    tags: Array.isArray(post.tags) ? [...post.tags] : []
  };

  document.getElementById("editTgPostId").value = post.id;
  document.getElementById("editTgUrl").value = post.url || "";
  document.getElementById("editTgDate").value = post.date || new Date().toISOString().slice(0, 10);
  document.getElementById("editTgText").value = post.text || "";

  renderEditTgAuthorSelect();
  renderEditTgGroupsSelect();
  renderEditTgCollabSelect();
  renderEditTgTagsArea();

  document.getElementById("editTgPostModal").classList.remove("hidden");
}

function renderEditTgAuthorSelect() {
  const wrap = document.getElementById("editTgAuthorWrap");
  if (!wrap) return;
  const authorObj = appState.users.find(u => u.id === editTgState.authorId);
  const label = authorObj
    ? `${authorObj.name} (${localizeRoleTitle(authorObj.role, authorObj.roleTitle)})`
    : t("Выберите автора...", "Muallifni tanlang...");

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('editTgAuthorWrap'); setTimeout(() => { const i = document.getElementById('editTgAuthorSearch'); if(i) i.focus(); }, 30);">
      <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${label}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()">
      <input type="text" id="editTgAuthorSearch" class="tg-tag-search-input" placeholder="${t("Поиск автора...", "Muallif qidiriş...")}" value="${editTgState.authorSearch}" oninput="renderEditTgAuthorOptions()" />
      <div id="editTgAuthorOptions" class="tg-tag-search-list"></div>
    </div>
  `;
  renderEditTgAuthorOptions();
}

function renderEditTgAuthorOptions() {
  const listEl = document.getElementById("editTgAuthorOptions");
  const inp = document.getElementById("editTgAuthorSearch");
  if (!listEl) return;

  editTgState.authorSearch = inp ? inp.value : "";
  const q = editTgState.authorSearch.trim().toLowerCase();
  const users = appState.users || [];
  const matched = q
    ? users.filter(u => (u.name || "").toLowerCase().includes(q) || (u.login || "").toLowerCase().includes(q))
    : users;

  const checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5l10 -10"/></svg>';
  listEl.innerHTML = matched.length
    ? matched.map(u => `
        <div class="cs-option ${editTgState.authorId === u.id ? 'selected' : ''}" onclick="selectEditTgAuthor('${u.id}')">
          <span>${u.name} <span class="st-meta">(${localizeRoleTitle(u.role, u.roleTitle)})</span></span>
          ${editTgState.authorId === u.id ? checkSvg : ''}
        </div>
      `).join("")
    : `<div class="st-meta" style="padding:8px 10px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`;
}

function selectEditTgAuthor(userId) {
  editTgState.authorId = userId;
  editTgState.authorSearch = "";
  editTgState.collaborators = editTgState.collaborators.filter(c => !(c.type === "user" && c.id === userId));
  const wrap = document.getElementById("editTgAuthorWrap");
  if (wrap) wrap.classList.remove("open");
  renderEditTgAuthorSelect();
  renderEditTgGroupsSelect();
  renderEditTgCollabSelect();
}

function formatEditTgCollabTrigger() {
  if (!editTgState.collaborators.length) {
    return t("Без соавторов", "Hamkorlarsiz");
  }
  const names = editTgState.collaborators.map(c => c.name);
  if (names.length <= 2) return names.join(", ");
  return `${names[0]}, ${names[1]} (+${names.length - 2})`;
}

function renderEditTgCollabSelect(keepOpen = false) {
  const wrap = document.getElementById("editTgCollabWrap");
  if (!wrap) return;
  const wasOpen = keepOpen || wrap.classList.contains("open");

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('editTgCollabWrap'); setTimeout(() => { const i = document.getElementById('editTgCollabSearch'); if(i) i.focus(); }, 30);">
      <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${formatEditTgCollabTrigger()}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()">
      <input type="text" id="editTgCollabSearch" class="tg-tag-search-input" placeholder="${t("Поиск сотрудника или новый партнёр...", "Xodimni qidiriş yoki yangi hamkor...")}" value="${editTgState.collabSearch}" oninput="renderEditTgCollabOptions()" onkeydown="if(event.key==='Enter'){event.preventDefault(); addEditTgCustomCollab(this.value);}" />
      <div id="editTgCollabOptions" class="tg-tag-search-list"></div>
    </div>
  `;

  if (wasOpen) wrap.classList.add("open");
  renderEditTgCollabOptions();
}

function renderEditTgCollabOptions() {
  const listEl = document.getElementById("editTgCollabOptions");
  const inp = document.getElementById("editTgCollabSearch");
  if (!listEl) return;

  editTgState.collabSearch = inp ? inp.value : "";
  const q = editTgState.collabSearch.trim().toLowerCase();
  const users = (appState.users || []).filter(u => u.id !== editTgState.authorId);
  const matchedUsers = q
    ? users.filter(u => (u.name || "").toLowerCase().includes(q) || (u.login || "").toLowerCase().includes(q))
    : users;

  const exactUserMatch = users.some(u => (u.name || "").toLowerCase() === q);
  const customSelected = editTgState.collaborators.filter(c => c.type === "custom");

  let html = "";
  if (customSelected.length && !q) {
    html += `<div class="cs-divider-label">${t("Внешние партнёры", "Taşqi hamkorlar")}</div>`;
    html += customSelected.map(c => `
      <label class="social-check-option">
        <input type="checkbox" checked onchange="removeEditTgCustomCollab('${c.name.replace(/'/g, "\\'")}')" />
        <span>${c.name}</span>
      </label>
    `).join("");
  }

  if (matchedUsers.length) {
    html += `<div class="cs-divider-label">${t("Пользователи системы", "Tizim foydalanuvçilari")}</div>`;
    html += matchedUsers.map(u => {
      const checked = editTgState.collaborators.some(c => c.type === "user" && c.id === u.id);
      return `
        <label class="social-check-option">
          <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleEditTgCollabUser('${u.id}')" />
          <span>${u.name} <span class="st-meta">(${localizeRoleTitle(u.role, u.roleTitle)})</span></span>
        </label>
      `;
    }).join("");
  }

  const cleanQuery = editTgState.collabSearch.trim();
  if (cleanQuery && !exactUserMatch) {
    html += `
      <div class="tag-ac-item create-new" onclick="addEditTgCustomCollab('${cleanQuery.replace(/'/g, "\\'")}')">
        <span>+ ${t("Добавить партнёра", "Yangi hamkor qöşiş")}: <strong>${cleanQuery}</strong></span>
      </div>
    `;
  }

  listEl.innerHTML = html || `<div class="st-meta" style="padding:8px 10px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`;
}

function toggleEditTgCollabUser(userId) {
  const user = appState.users.find(u => u.id === userId);
  if (!user) return;
  const exists = editTgState.collaborators.some(c => c.type === "user" && c.id === userId);
  if (exists) {
    editTgState.collaborators = editTgState.collaborators.filter(c => !(c.type === "user" && c.id === userId));
  } else {
    editTgState.collaborators.push({ type: "user", id: user.id, name: user.name });
  }
  renderEditTgGroupsSelect();
  renderEditTgCollabSelect(true);
}

function addEditTgCustomCollab(rawName) {
  const clean = convertUzbekLatinText(String(rawName || "").trim());
  if (!clean) return;
  const already = editTgState.collaborators.some(c => c.type === "custom" && c.name.toLowerCase() === clean.toLowerCase());
  if (!already) {
    editTgState.collaborators.push({ type: "custom", name: clean });
  }
  editTgState.collabSearch = "";
  renderEditTgCollabSelect(true);
}

function removeEditTgCustomCollab(name) {
  editTgState.collaborators = editTgState.collaborators.filter(c => !(c.type === "custom" && c.name === name));
  renderEditTgCollabSelect(true);
}


function renderEditTgGroupsSelect(keepOpen = false) {
  const fieldWrap = document.getElementById("editTgGroupsFieldWrap");
  const grid = document.getElementById("editTgMetaGrid");
  const wrap = document.getElementById("editTgGroupsWrap");
  if (!fieldWrap || !grid || !wrap) return;

  const available = getAvailableGroupsForPost(editTgState.authorId, editTgState.collaborators);
  editTgState.groups = (editTgState.groups || []).filter(g => available.includes(g));

  if (!available.length) {
    fieldWrap.classList.add("hidden");
    grid.classList.remove("has-groups");
    return;
  }

  fieldWrap.classList.remove("hidden");
  grid.classList.add("has-groups");
  const wasOpen = keepOpen || wrap.classList.contains("open");

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('editTgGroupsWrap'); setTimeout(() => { const i = document.getElementById('editTgGroupsSearch'); if(i) i.focus(); }, 30);">
      <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${formatTgGroupsTrigger(editTgState.groups)}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()">
      <input type="text" id="editTgGroupsSearch" class="tg-tag-search-input" placeholder="${t("Поиск группы...", "Guruh qidiriş...")}" value="${editTgState.groupsSearch}" oninput="renderEditTgGroupsOptions()" />
      <div id="editTgGroupsOptions" class="tg-tag-search-list"></div>
    </div>
  `;

  if (wasOpen) wrap.classList.add("open");
  renderEditTgGroupsOptions();
}

function renderEditTgGroupsOptions() {
  const listEl = document.getElementById("editTgGroupsOptions");
  const inp = document.getElementById("editTgGroupsSearch");
  if (!listEl) return;

  editTgState.groupsSearch = inp ? inp.value : "";
  const q = editTgState.groupsSearch.trim().toLowerCase();
  const available = getAvailableGroupsForPost(editTgState.authorId, editTgState.collaborators);
  const matched = q ? available.filter(g => g.toLowerCase().includes(q)) : available;

  listEl.innerHTML = matched.length
    ? matched.map(g => {
        const checked = (editTgState.groups || []).includes(g);
        return `
          <label class="social-check-option">
            <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleEditTgGroup('${g.replace(/'/g, "\'")}')" />
            <span>#${g}</span>
          </label>
        `;
      }).join("")
    : `<div class="st-meta" style="padding:8px 10px;">${t("Группы не найдены", "Guruhlar topilmadi")}</div>`;
}

function toggleEditTgGroup(groupName) {
  if ((editTgState.groups || []).includes(groupName)) {
    editTgState.groups = editTgState.groups.filter(g => g !== groupName);
  } else {
    editTgState.groups = [...(editTgState.groups || []), groupName];
  }
  renderEditTgGroupsSelect(true);
}

function renderEditTgTagsArea() {
  const wrap = document.getElementById("editTgTagsWrap");
  if (!wrap) return;
  const allTags = getAllKnownTags();
  wrap.innerHTML = allTags.map(tag => `
    <div class="tag-chip ${editTgState.tags.includes(tag) ? 'active' : ''}" onclick="toggleEditTgTag('${tag.replace(/'/g, "\\'")}')">${tag}</div>
  `).join("");
}

function toggleEditTgTag(tag) {
  if (editTgState.tags.includes(tag)) {
    editTgState.tags = editTgState.tags.filter(x => x !== tag);
  } else {
    editTgState.tags.push(tag);
  }
  renderEditTgTagsArea();
}

function saveEditedTgPost() {
  if (!hasAdminPrivileges()) return;
  const postId = document.getElementById("editTgPostId").value;
  const post = appState.tgPosts.find(p => p.id === postId);
  if (!post) return;

  const url = document.getElementById("editTgUrl").value.trim();
  const date = document.getElementById("editTgDate").value || post.date;
  const text = document.getElementById("editTgText").value.trim();

  if (!url) {
    showToast(t("Укажите ссылку на пост", "Post havolasini kiriting"));
    return;
  }

  const oldAuthorId = post.authorId;
  post.url = url;
  post.date = date;
  post.text = text;
  const prevGroupTags = new Set((post.groups || []).map(g => normalizeTagInput(g)));
  const cleanBaseTags = (editTgState.tags || []).filter(tg => !prevGroupTags.has(tg));
  const nextGroupTags = (editTgState.groups || []).map(g => normalizeTagInput(g)).filter(Boolean);

  post.authorId = editTgState.authorId || post.authorId;
  post.groups = [...(editTgState.groups || [])];
  post.collaborators = [...editTgState.collaborators];
  post.tags = [...new Set([...cleanBaseTags, ...nextGroupTags])];

  recordRecentTags(post.tags);
  saveState();
  syncSpecificTutorFolder(post.authorId);
  if (oldAuthorId && oldAuthorId !== post.authorId) {
    syncSpecificTutorFolder(oldAuthorId);
  }

  closeModal("editTgPostModal");
  renderTelegramSection();
  showToast(t("Пост обновлён", "Post yangilandi"));
}

function deleteTgPost(id, btnEl) {
  const checkTarget = appState.tgPosts.find(p => p.id === id);
  if (!checkTarget || !canDeleteData(checkTarget.authorId)) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uşun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    const target = appState.tgPosts.find(p => p.id === id);
    const ownerAuthorId = target ? target.authorId : null;
    appState.tgPosts = appState.tgPosts.filter(p => p.id !== id);
    saveState();
    if (ownerAuthorId) syncSpecificTutorFolder(ownerAuthorId);
    renderTelegramSection();
    showToast(t("Публикация удалена", "Post öçirildi"));
  });
}

function getFilteredReportPosts() {
  const from = document.getElementById("reportDateFrom").value;
  const to = document.getElementById("reportDateTo").value;
  let posts = isTutorOnly()
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
    ${t("Найдено публикаций за период", "Tanlangan davrda topilgan postlar")}: <strong>${matched.length}</strong><br/>
    <span class="st-meta">${t("Документ назначения", "Belgilangan hujjat")}: Google Doc (${currentUser.driveFolder})</span>
  `;
}

async function exportToGoogleDoc() {
  const matched = getFilteredReportPosts();
  if (!matched.length) {
    showToast(t("За выбранный период нет публикаций для отчета", "Tanlangan davrda hisobot uşun postlar yöq"));
    return;
  }

  const from = document.getElementById("reportDateFrom").value || "—";
  const to = document.getElementById("reportDateTo").value || "—";
  const periodStr = `${from} — ${to}`;

  const reportText = matched.map((p, idx) => {
    const tagsStr = Array.isArray(p.tags) && p.tags.length ? ` [${p.tags.join(", ")}]` : "";
    return `${idx + 1}. (${p.date})${tagsStr}\n${p.text}\n${t("Ссылка", "Havola")}: ${p.url}`;
  }).join("\n\n");

  if (typeof APPS_SCRIPT_URL === "undefined" || !APPS_SCRIPT_URL.includes("/exec")) {
    showToast("Не задан APPS_SCRIPT_URL в js/app.js");
    return;
  }

  showToast(t("Отправка отчета в Google Doc...", "Google Doc ga yuborilmoqda..."));

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
      showToast(t("Отчет добавлен в Google Doc тютора", "Hisobot Google Doc ga qöşildi"));
    } else {
      showToast(`${t("Ошибка Google Doc", "Google Doc xatosi")}: ` + (json.message || t("неизвестная ошибка", "noma’lum xato")));
    }
  } catch (err) {
    console.error("Ошибка экспорта в Google Doc:", err);
    showToast(t("Не удалось отправить отчет в Google Doc", "Hisobotni Google Doc ga yuborib bölmadi"));
  }
}

function openLightbox(src) {
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxModal").classList.remove("hidden");
}

// ==================== 4. ДНЕВНИКИ (МОНИТОРИНГ + РОДИТЕЛИ) ====================
let monListFilters = { search: "", tutors: [], groups: [], categories: [], dateFrom: "", dateTo: "" };
let pmListFilters = { search: "", tutors: [], groups: [], dateFrom: "", dateTo: "" };
let diaryMultiSearchMap = {};

function setDiarySubtab(sub) {
  activeDiarySubtab = sub;
  document.getElementById("diaryTabMonitoring").classList.toggle("active", sub === "monitoring");
  document.getElementById("diaryTabParents").classList.toggle("active", sub === "parents");
  renderDiariesSection();
}

function getDiaryMultiGroups(selectedTutorIds) {
  const invalid = new Set(["Все группы", "Не назначены", "Biriktirilmagan", "—", ""]);
  const parseG = (u) => {
    if (!u || !u.groups) return [];
    return String(u.groups).split(",").map(g => g.trim()).filter(g => g && !invalid.has(g));
  };
  if (isTutorOnly()) {
    return [...new Set(parseG(currentUser))];
  }
  let targetTutors = [];
  if (Array.isArray(selectedTutorIds) && selectedTutorIds.length > 0) {
    targetTutors = appState.users.filter(u => selectedTutorIds.includes(u.id));
  } else {
    targetTutors = appState.users.filter(u => u.role === "tutor");
  }
  const set = new Set();
  targetTutors.forEach(tr => parseG(tr).forEach(g => set.add(g)));
  return [...set].sort((a, b) => a.localeCompare(b));
}

function getAllMonitoringCategoriesForFilter() {
  const base = MONITORING_CATEGORIES.filter(c => c.value !== "Другое...");
  const baseVals = new Set(base.map(c => c.value));
  const opts = base.map(c => ({ value: c.value, label: currentLang === "oz" ? c.oz : c.ru }));
  (appState.monitoring || []).forEach(m => {
    if (m.category && !baseVals.has(m.category)) {
      baseVals.add(m.category);
      opts.push({ value: m.category, label: m.category });
    }
  });
  return opts;
}

function renderDiaryMultiSelect(containerId, placeholder, options, selectedArr, onToggle, keepOpen = false) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  wrap.classList.add("diary-multi-menu");
  const wasOpen = keepOpen || wrap.classList.contains("open");
  const searchKey = containerId;
  const searchVal = diaryMultiSearchMap[searchKey] || "";

  let triggerLabel = placeholder;
  if (selectedArr.length === 1) {
    const found = options.find(o => o.value === selectedArr[0]);
    triggerLabel = found ? found.label : selectedArr[0];
  } else if (selectedArr.length > 1) {
    triggerLabel = `${placeholder}: ${selectedArr.length}`;
  }

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('${containerId}'); setTimeout(() => { const i = document.getElementById('${containerId}_search'); if(i) i.focus(); }, 30);">
      <span>${triggerLabel}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()">
      <input type="text" id="${containerId}_search" class="tg-tag-search-input" placeholder="${t("Поиск...", "Qidiriş...")}" value="${searchVal.replace(/"/g, '&quot;')}" />
      <div id="${containerId}_list" class="tg-tag-search-list"></div>
    </div>
  `;

  const renderOpts = () => {
    const q = (diaryMultiSearchMap[searchKey] || "").trim().toLowerCase();
    const listEl = document.getElementById(`${containerId}_list`);
    if (!listEl) return;
    const matched = q ? options.filter(o => o.label.toLowerCase().includes(q)) : options;
    if (!matched.length) {
      listEl.innerHTML = `<div class="st-meta" style="padding:8px 10px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`;
      return;
    }
    listEl.innerHTML = matched.map(o => {
      const checked = selectedArr.includes(o.value);
      return `
        <label class="social-check-option">
          <input type="checkbox" ${checked ? "checked" : ""} data-val="${o.value.replace(/"/g, '&quot;')}" />
          <span>${o.label}</span>
        </label>
      `;
    }).join("");
    listEl.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.addEventListener("change", () => onToggle(cb.dataset.val));
    });
  };

  const inp = document.getElementById(`${containerId}_search`);
  if (inp) {
    inp.addEventListener("input", () => {
      diaryMultiSearchMap[searchKey] = inp.value;
      renderOpts();
    });
  }

  if (wasOpen) wrap.classList.add("open");
  renderOpts();
}

function renderDiariesSection() {
  const area = document.getElementById("diariesContentArea");
  if (activeDiarySubtab === "monitoring") {
    let list = isTutorOnly()
      ? appState.monitoring.filter(m => m.tutorId === currentUser.id)
      : appState.monitoring;

    area.innerHTML = `
      <div class="subtabs-row">
        <div class="subtabs-pills">
          <button type="button" class="subtab-btn ${activeMonitoringFilter === 'active' ? 'active' : ''}" onclick="activeMonitoringFilter='active'; renderDiariesSection()">${t("Активные на учете", "Hisobda turganlar")} (${list.filter(m => m.status === 'active').length})</button>
          <button type="button" class="subtab-btn ${activeMonitoringFilter === 'archived' ? 'active' : ''}" onclick="activeMonitoringFilter='archived'; renderDiariesSection()">${t("Снятые с учета / Архив", "Hisobdan çiqarilgan / Arxiv")} (${list.filter(m => m.status === 'archived').length})</button>
        </div>
        <button type="button" class="btn-orange" onclick="openMonitoringModal()">+ ${t("Поставить на мониторинг", "Monitoringga qöyiş")}</button>
      </div>

      <div class="diary-list-toolbar">
        <div class="st-search-box diary-list-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>
          <input type="text" id="monListSearchInput" placeholder="${t("Поиск по студенту, группе, тексту...", "Talaba, guruh, matn böyiça qidiriş...")}" value="${monListFilters.search.replace(/"/g, '&quot;')}" oninput="monListFilters.search=this.value; renderMonitoringCardsList()" />
        </div>
        <div class="diary-list-filters">
          <div class="custom-select ${isTutorOnly() ? 'hidden' : ''}" id="monListTutorFilterWrap"></div>
          <div class="custom-select" id="monListGroupFilterWrap"></div>
          <div class="custom-select" id="monListCatFilterWrap"></div>
          <input type="date" id="monListDateFrom" class="form-input diary-date-input" value="${monListFilters.dateFrom}" title="${t("Дата с", "Sana (dan)")}" onchange="monListFilters.dateFrom=this.value; renderMonitoringCardsList()" />
          <input type="date" id="monListDateTo" class="form-input diary-date-input" value="${monListFilters.dateTo}" title="${t("Дата по", "Sana (gaça)")}" onchange="monListFilters.dateTo=this.value; renderMonitoringCardsList()" />
          <button type="button" id="monListResetBtn" class="btn-export sm hidden" onclick="resetMonListFilters()">${t("Сбросить", "Tozalaş")}</button>
        </div>
      </div>

      <div id="monitoringCardsContainer"></div>
    `;

    renderMonListFilterControls();
    renderMonitoringCardsList();
    return;
  }

  // Вкладка: Работа с родителями
  area.innerHTML = `
    <div class="bento-card mb-16">
      <h3 class="card-title mb-12">${t("Зафиксировать встречу / беседу с родителями", "Ota-onalar bilan uçraşuv / suhbatni qayd etiş")}</h3>
      <div class="diary-st-filters ${isTutorOnly() ? 'tutor-only' : ''} mb-12">
        <div class="form-group" style="margin-bottom:0;">
          <input type="text" id="pmStudentSearchInput" class="form-input" placeholder="${t("Поиск студента...", "Talabani qidiriş...")}" value="${pmFilterState.search.replace(/"/g, '&quot;')}" oninput="onPmStudentFilterChange()" />
        </div>
        <div class="custom-select ${isTutorOnly() ? 'hidden' : ''}" id="pmFilterTutorWrap"></div>
        <div class="custom-select" id="pmFilterGroupWrap"></div>
      </div>
      <div class="pm-entry-grid">
        <div class="custom-select" id="pmStudentSelectWrap"></div>
        <input type="date" id="pmDateInput" class="form-input" value="${new Date().toISOString().slice(0, 10)}" />
        <div class="custom-select" id="pmParentWhoWrap"></div>
      </div>
      <div class="form-group hidden mt-10" id="pmParentCustomWrap" style="margin-bottom:0;">
        <input type="text" id="pmParentCustomInput" class="form-input" placeholder="${t("Укажите вручную (например: Дядя — Каримов Б.)", "Qölda kiriting (masalan: Toğasi — Karimov B.)")}" />
      </div>
      <textarea id="pmNotesInput" class="form-textarea mt-10" rows="2" placeholder="${t("Какие вопросы обсуждались и какое принято решение...", "Qanday masalalar muhokama qilindi va qanday qaror qabul qilindi...")}"></textarea>
      <button type="button" class="btn-orange mt-10" onclick="addParentMeeting()">${t("Сохранить запись встречи", "Uçraşuv qaydini saqlaş")}</button>
    </div>

    <div class="diary-list-toolbar">
      <div class="st-search-box diary-list-search">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>
        <input type="text" id="pmListSearchInput" placeholder="${t("Поиск по студенту, родителю, тексту...", "Talaba, ota-ona, matn böyiça qidiriş...")}" value="${pmListFilters.search.replace(/"/g, '&quot;')}" oninput="pmListFilters.search=this.value; renderParentMeetingsCardsList()" />
      </div>
      <div class="diary-list-filters">
        <div class="custom-select ${isTutorOnly() ? 'hidden' : ''}" id="pmListTutorFilterWrap"></div>
        <div class="custom-select" id="pmListGroupFilterWrap"></div>
        <input type="date" id="pmListDateFrom" class="form-input diary-date-input" value="${pmListFilters.dateFrom}" title="${t("Дата с", "Sana (dan)")}" onchange="pmListFilters.dateFrom=this.value; renderParentMeetingsCardsList()" />
        <input type="date" id="pmListDateTo" class="form-input diary-date-input" value="${pmListFilters.dateTo}" title="${t("Дата по", "Sana (gaça)")}" onchange="pmListFilters.dateTo=this.value; renderParentMeetingsCardsList()" />
        <button type="button" id="pmListResetBtn" class="btn-export sm hidden" onclick="resetPmListFilters()">${t("Сбросить", "Tozalaş")}</button>
      </div>
    </div>

    <div id="parentMeetingsCardsContainer"></div>
  `;

  renderPmStudentFiltersAndList();
  renderPmListFilterControls();
  renderParentMeetingsCardsList();
}

function renderMonListFilterControls(keepOpenId = null) {
  if (!isTutorOnly()) {
    const tutorOpts = appState.users.filter(u => u.role === "tutor").map(tr => ({ value: tr.id, label: tr.name }));
    renderDiaryMultiSelect("monListTutorFilterWrap", t("Тюторы", "Tyutorlar"), tutorOpts, monListFilters.tutors, (val) => {
      monListFilters.tutors = monListFilters.tutors.includes(val)
        ? monListFilters.tutors.filter(x => x !== val)
        : [...monListFilters.tutors, val];
      renderMonListFilterControls("monListTutorFilterWrap");
      renderMonitoringCardsList();
    }, keepOpenId === "monListTutorFilterWrap");
  }

  const availGroups = getDiaryMultiGroups(monListFilters.tutors);
  monListFilters.groups = monListFilters.groups.filter(g => availGroups.includes(g));
  const groupOpts = availGroups.map(g => ({ value: g, label: g }));
  renderDiaryMultiSelect("monListGroupFilterWrap", t("Группы", "Guruhlar"), groupOpts, monListFilters.groups, (val) => {
    monListFilters.groups = monListFilters.groups.includes(val)
      ? monListFilters.groups.filter(x => x !== val)
      : [...monListFilters.groups, val];
    renderMonListFilterControls("monListGroupFilterWrap");
    renderMonitoringCardsList();
  }, keepOpenId === "monListGroupFilterWrap");

  const catOpts = getAllMonitoringCategoriesForFilter();
  renderDiaryMultiSelect("monListCatFilterWrap", t("Категории", "Toifalar"), catOpts, monListFilters.categories, (val) => {
    monListFilters.categories = monListFilters.categories.includes(val)
      ? monListFilters.categories.filter(x => x !== val)
      : [...monListFilters.categories, val];
    renderMonListFilterControls("monListCatFilterWrap");
    renderMonitoringCardsList();
  }, keepOpenId === "monListCatFilterWrap");
}

function resetMonListFilters() {
  monListFilters = { search: "", tutors: [], groups: [], categories: [], dateFrom: "", dateTo: "" };
  const s = document.getElementById("monListSearchInput"); if (s) s.value = "";
  const df = document.getElementById("monListDateFrom"); if (df) df.value = "";
  const dt = document.getElementById("monListDateTo"); if (dt) dt.value = "";
  renderMonListFilterControls();
  renderMonitoringCardsList();
}

function renderMonitoringCardsList() {
  const container = document.getElementById("monitoringCardsContainer");
  const resetBtn = document.getElementById("monListResetBtn");
  if (!container) return;

  let list = isTutorOnly()
    ? appState.monitoring.filter(m => m.tutorId === currentUser.id)
    : appState.monitoring;

  list = list.filter(m => m.status === activeMonitoringFilter);

  if (!isTutorOnly() && monListFilters.tutors.length > 0) {
    list = list.filter(m => monListFilters.tutors.includes(m.tutorId));
  }
  if (monListFilters.groups.length > 0) {
    list = list.filter(m => {
      const st = appState.students.find(s => s.id === m.studentId);
      return st && monListFilters.groups.includes(st.group);
    });
  }
  if (monListFilters.categories.length > 0) {
    list = list.filter(m => monListFilters.categories.includes(m.category));
  }
  if (monListFilters.dateFrom || monListFilters.dateTo) {
    list = list.filter(m => (m.entries || []).some(ent => {
      const d = ent.date || "";
      if (monListFilters.dateFrom && d < monListFilters.dateFrom) return false;
      if (monListFilters.dateTo && d > monListFilters.dateTo) return false;
      return true;
    }));
  }
  const q = (monListFilters.search || "").trim().toLowerCase();
  if (q) {
    list = list.filter(m => {
      const st = appState.students.find(s => s.id === m.studentId);
      const stName = (st ? st.name : m.studentName || "").toLowerCase();
      const stGroup = (st ? st.group : "").toLowerCase();
      const cat = (m.category || "").toLowerCase();
      const notesMatch = (m.entries || []).some(ent => (ent.text || "").toLowerCase().includes(q));
      return stName.includes(q) || stGroup.includes(q) || cat.includes(q) || notesMatch;
    });
  }

  const hasFilter = Boolean(q || monListFilters.tutors.length || monListFilters.groups.length || monListFilters.categories.length || monListFilters.dateFrom || monListFilters.dateTo);
  if (resetBtn) resetBtn.classList.toggle("hidden", !hasFilter);

  if (!list.length) {
    container.innerHTML = `<div class="empty-state">${t("В данной вкладке записей мониторинга не найдено.", "Uşbu bölimda monitoring yozuvlari topilmadi.")}</div>`;
    return;
  }

  container.innerHTML = `
    <div class="diary-grid">
      ${list.map(rec => {
        const st = appState.students.find(s => s.id === rec.studentId);
        const tutor = appState.users.find(u => u.id === rec.tutorId);
        return `
          <div class="diary-card">
            <div class="st-card-top">
              <div>
                <div class="st-name">${st ? st.name : rec.studentName}</div>
                <div class="st-meta">${st ? st.group : ""} • ${t("Тютор", "Tyutor")}: ${tutor ? tutor.name : ""}</div>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="badge-pill rent">${getLabelFromDict(MONITORING_CATEGORIES, rec.category)}</span>
                ${canDeleteData(rec.tutorId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteMonitoringRecord('${rec.id}', this)" title="${t("Удалить карточку", "Kartani öçiriş")}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
                </button>` : ""}
              </div>
            </div>

            <div class="diary-entries">
              ${(rec.entries || []).map(ent => `
                <div class="diary-entry-item ${ent.type || ''}">
                  <div class="diary-entry-date">${ent.date} ${ent.type === 'positive' ? `• ${t("Положительный результат (снят с учета)", "Ijobiy natija (hisobdan çiqarildi)")}` : ''} ${ent.type === 'reopened' ? `• ${t("Повторная постановка на учет", "Qayta hisobga olindi")}` : ''}</div>
                  <div>${ent.text}</div>
                </div>
              `).join("")}
            </div>

            ${rec.status === "active" ? `
              <textarea id="noteInput_${rec.id}" class="form-textarea mt-10" rows="2" placeholder="${t("Запись о проведенной беседе...", "Ötkazilgan suhbat haqida qayd...")}"></textarea>
              <div class="st-card-actions">
                <label style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--emerald); font-weight:600; cursor:pointer;">
                  <input type="checkbox" id="posCheck_${rec.id}" /> ${t("Положительный результат (снять с учета)", "Ijobiy natija (hisobdan çiqariş)")}
                </label>
                <button type="button" class="btn-dark" onclick="addMonitoringEntry('${rec.id}')">${t("Добавить запись", "Qayd qöşiş")}</button>
              </div>
            ` : `
              <div class="st-card-actions">
                <span class="st-meta">${t("Все записи сохранены в БД", "Barça qaydlar bazada saqlangan")}</span>
                <button type="button" class="btn-orange sm" onclick="reopenMonitoringRecord('${rec.id}')">${t("Вернуть на учет повторно", "Qayta hisobga qaytariş")}</button>
              </div>
            `}
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderPmListFilterControls(keepOpenId = null) {
  if (!isTutorOnly()) {
    const tutorOpts = appState.users.filter(u => u.role === "tutor").map(tr => ({ value: tr.id, label: tr.name }));
    renderDiaryMultiSelect("pmListTutorFilterWrap", t("Тюторы", "Tyutorlar"), tutorOpts, pmListFilters.tutors, (val) => {
      pmListFilters.tutors = pmListFilters.tutors.includes(val)
        ? pmListFilters.tutors.filter(x => x !== val)
        : [...pmListFilters.tutors, val];
      renderPmListFilterControls("pmListTutorFilterWrap");
      renderParentMeetingsCardsList();
    }, keepOpenId === "pmListTutorFilterWrap");
  }

  const availGroups = getDiaryMultiGroups(pmListFilters.tutors);
  pmListFilters.groups = pmListFilters.groups.filter(g => availGroups.includes(g));
  const groupOpts = availGroups.map(g => ({ value: g, label: g }));
  renderDiaryMultiSelect("pmListGroupFilterWrap", t("Группы", "Guruhlar"), groupOpts, pmListFilters.groups, (val) => {
    pmListFilters.groups = pmListFilters.groups.includes(val)
      ? pmListFilters.groups.filter(x => x !== val)
      : [...pmListFilters.groups, val];
    renderPmListFilterControls("pmListGroupFilterWrap");
    renderParentMeetingsCardsList();
  }, keepOpenId === "pmListGroupFilterWrap");
}

function resetPmListFilters() {
  pmListFilters = { search: "", tutors: [], groups: [], dateFrom: "", dateTo: "" };
  const s = document.getElementById("pmListSearchInput"); if (s) s.value = "";
  const df = document.getElementById("pmListDateFrom"); if (df) df.value = "";
  const dt = document.getElementById("pmListDateTo"); if (dt) dt.value = "";
  renderPmListFilterControls();
  renderParentMeetingsCardsList();
}

function renderParentMeetingsCardsList() {
  const container = document.getElementById("parentMeetingsCardsContainer");
  const resetBtn = document.getElementById("pmListResetBtn");
  if (!container) return;

  let meetings = isTutorOnly()
    ? appState.parentMeetings.filter(m => m.tutorId === currentUser.id)
    : appState.parentMeetings;

  if (!isTutorOnly() && pmListFilters.tutors.length > 0) {
    meetings = meetings.filter(m => pmListFilters.tutors.includes(m.tutorId));
  }
  if (pmListFilters.groups.length > 0) {
    meetings = meetings.filter(m => {
      const st = appState.students.find(s => s.id === m.studentId);
      if (st && pmListFilters.groups.includes(st.group)) return true;
      return pmListFilters.groups.some(g => (m.studentName || "").includes(`(${g})`));
    });
  }
  if (pmListFilters.dateFrom) {
    meetings = meetings.filter(m => (m.date || "") >= pmListFilters.dateFrom);
  }
  if (pmListFilters.dateTo) {
    meetings = meetings.filter(m => (m.date || "") <= pmListFilters.dateTo);
  }
  const q = (pmListFilters.search || "").trim().toLowerCase();
  if (q) {
    meetings = meetings.filter(m =>
      (m.studentName || "").toLowerCase().includes(q) ||
      (m.who || "").toLowerCase().includes(q) ||
      (m.notes || "").toLowerCase().includes(q)
    );
  }

  const hasFilter = Boolean(q || pmListFilters.tutors.length || pmListFilters.groups.length || pmListFilters.dateFrom || pmListFilters.dateTo);
  if (resetBtn) resetBtn.classList.toggle("hidden", !hasFilter);

  if (!meetings.length) {
    container.innerHTML = `<div class="empty-state">${t("Записей о встречах с родителями не найдено.", "Ota-onalar bilan uçraşuv qaydları topilmadi.")}</div>`;
    return;
  }

  container.innerHTML = `
    <div class="diary-grid">
      ${meetings.map(m => `
        <div class="diary-card">
          <div class="st-card-top">
            <div>
              <div class="st-name">${m.studentName}</div>
              <div class="st-meta">${m.date} • ${m.who}</div>
            </div>
            ${canDeleteData(m.tutorId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteParentMeeting('${m.id}', this)" title="${t("Удалить", "Öçiriş")}">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
            </button>` : ""}
          </div>
          <p style="font-size:13px;">${m.notes}</p>
        </div>
      `).join("")}
    </div>
  `;
}

let monModalStudentId = "";
let monModalCategory = "Курение";
let monFilterState = { search: "", tutor: "all", group: "all" };
let pmFilterState = { search: "", tutor: "all", group: "all" };
let pmSelectedParentWho = "";

function getGroupsForDiaryFilter(tutorVal) {
  const invalid = new Set(["Все группы", "Не назначены", "Biriktirilmagan", "—", ""]);
  const parseG = (u) => {
    if (!u || !u.groups) return [];
    return String(u.groups).split(",").map(g => g.trim()).filter(g => g && !invalid.has(g));
  };
  if (isTutorOnly()) {
    return [...new Set(parseG(currentUser))];
  }
  if (tutorVal && tutorVal !== "all") {
    const tr = appState.users.find(u => u.id === tutorVal);
    return [...new Set(parseG(tr))];
  }
  const allSet = new Set();
  appState.users.filter(u => u.role === "tutor").forEach(tr => parseG(tr).forEach(g => allSet.add(g)));
  return [...allSet].sort((a, b) => a.localeCompare(b));
}

function getFilteredStudentsForDiary(stateObj) {
  let list = getRoleScopedStudents();
  if (!isTutorOnly() && stateObj.tutor !== "all") {
    list = list.filter(s => s.tutorId === stateObj.tutor);
  }
  if (stateObj.group !== "all") {
    list = list.filter(s => s.group === stateObj.group);
  }
  const q = (stateObj.search || "").trim().toLowerCase();
  if (q) {
    list = list.filter(s =>
      (s.name || "").toLowerCase().includes(q) ||
      (s.group || "").toLowerCase().includes(q) ||
      (s.phone || "").toLowerCase().includes(q)
    );
  }
  return list;
}

// --- Фильтры и выбор студента для «Работа с родителями» ---
function onPmStudentFilterChange() {
  const inp = document.getElementById("pmStudentSearchInput");
  pmFilterState.search = inp ? inp.value : "";
  renderPmStudentOptions();
}

function renderPmStudentFiltersAndList() {
  const tutors = appState.users.filter(u => u.role === "tutor");
  if (!isTutorOnly()) {
    const tutorOpts = [{ value: "all", label: t("Все тюторы", "Barça tyutorlar") }]
      .concat(tutors.map(tr => ({ value: tr.id, label: tr.name })));
    renderCustomSelect("pmFilterTutorWrap", tutorOpts, pmFilterState.tutor, (val) => {
      pmFilterState.tutor = val;
      pmFilterState.group = "all";
      renderPmStudentFiltersAndList();
    });
  }

  const groups = getGroupsForDiaryFilter(pmFilterState.tutor);
  if (pmFilterState.group !== "all" && !groups.includes(pmFilterState.group)) {
    pmFilterState.group = "all";
  }
  const groupOpts = [{ value: "all", label: t("Все группы", "Barça guruhlar") }]
    .concat(groups.map(g => ({ value: g, label: g })));
  renderCustomSelect("pmFilterGroupWrap", groupOpts, pmFilterState.group, (val) => {
    pmFilterState.group = val;
    renderPmStudentFiltersAndList();
  });

  renderPmStudentOptions();
}

function renderPmStudentOptions() {
  const filtered = getFilteredStudentsForDiary(pmFilterState);
  if (!filtered.some(s => s.id === window._selectedPmStudentId)) {
    window._selectedPmStudentId = filtered[0] ? filtered[0].id : "";
  }
  const stOpts = filtered.length
    ? filtered.map(s => ({ value: s.id, label: `${s.name} (${s.group})` }))
    : [{ value: "", label: t("Студенты не найдены", "Talabalar topilmadi") }];

  const onPmStudentChange = (val) => {
    window._selectedPmStudentId = val;
    renderCustomSelect("pmStudentSelectWrap", stOpts, val, onPmStudentChange);
    renderPmParentWhoSelect();
  };
  renderCustomSelect("pmStudentSelectWrap", stOpts, window._selectedPmStudentId, onPmStudentChange);
  renderPmParentWhoSelect();
}

function renderPmParentWhoSelect() {
  const st = appState.students.find(s => s.id === window._selectedPmStudentId);
  const family = (st && Array.isArray(st.family)) ? st.family : [];
  const opts = [];

  family.forEach(mem => {
    const relLabel = mem.relation === "Другое..."
      ? (mem.customRelation || t("Родственник", "Qarindoşi"))
      : getLabelFromDict(RELATIVE_TYPES, mem.relation);
    const namePart = (mem.name || "").trim();
    const phonePart = (mem.phone || "").trim();
    if (namePart || phonePart || mem.relation) {
      const fullLabel = namePart
        ? `${relLabel} — ${namePart}${phonePart ? ` (${phonePart})` : ""}`
        : `${relLabel}${phonePart ? ` (${phonePart})` : ""}`;
      if (!opts.some(o => o.value === fullLabel)) {
        opts.push({ value: fullLabel, label: fullLabel });
      }
    }
  });

  opts.push({ value: "__custom__", label: t("Другой (ввести вручную)...", "Boşqa (qölda kiritiş)...") });

  if (!opts.some(o => o.value === pmSelectedParentWho)) {
    pmSelectedParentWho = opts[0].value;
  }

  const customWrap = document.getElementById("pmParentCustomWrap");
  if (customWrap) {
    customWrap.classList.toggle("hidden", pmSelectedParentWho !== "__custom__");
  }

  const onWhoChange = (val) => {
    pmSelectedParentWho = val;
    renderCustomSelect("pmParentWhoWrap", opts, val, onWhoChange);
    if (customWrap) {
      customWrap.classList.toggle("hidden", val !== "__custom__");
      if (val === "__custom__") {
        const inp = document.getElementById("pmParentCustomInput");
        if (inp) inp.focus();
      }
    }
  };
  renderCustomSelect("pmParentWhoWrap", opts, pmSelectedParentWho, onWhoChange);
}

// --- Фильтры и выбор студента для модалки «Поставить на мониторинг» ---
function onMonStudentFilterChange() {
  const inp = document.getElementById("monStudentSearchInput");
  monFilterState.search = inp ? inp.value : "";
  renderMonStudentOptions();
}

function renderMonStudentFiltersAndList() {
  const wrap = document.getElementById("monStudentFiltersWrap");
  const tutorWrap = document.getElementById("monFilterTutorWrap");
  if (wrap) wrap.classList.toggle("tutor-only", isTutorOnly());
  if (tutorWrap) tutorWrap.classList.toggle("hidden", isTutorOnly());

  if (!isTutorOnly()) {
    const tutors = appState.users.filter(u => u.role === "tutor");
    const tutorOpts = [{ value: "all", label: t("Все тюторы", "Barça tyutorlar") }]
      .concat(tutors.map(tr => ({ value: tr.id, label: tr.name })));
    renderCustomSelect("monFilterTutorWrap", tutorOpts, monFilterState.tutor, (val) => {
      monFilterState.tutor = val;
      monFilterState.group = "all";
      renderMonStudentFiltersAndList();
    });
  }

  const groups = getGroupsForDiaryFilter(monFilterState.tutor);
  if (monFilterState.group !== "all" && !groups.includes(monFilterState.group)) {
    monFilterState.group = "all";
  }
  const groupOpts = [{ value: "all", label: t("Все группы", "Barça guruhlar") }]
    .concat(groups.map(g => ({ value: g, label: g })));
  renderCustomSelect("monFilterGroupWrap", groupOpts, monFilterState.group, (val) => {
    monFilterState.group = val;
    renderMonStudentFiltersAndList();
  });

  renderMonStudentOptions();
}

function renderMonStudentOptions() {
  const filtered = getFilteredStudentsForDiary(monFilterState);
  if (!filtered.some(s => s.id === monModalStudentId)) {
    monModalStudentId = filtered[0] ? filtered[0].id : "";
  }
  const stOpts = filtered.length
    ? filtered.map(s => ({ value: s.id, label: `${s.name} (${s.group})` }))
    : [{ value: "", label: t("Студенты не найдены", "Talabalar topilmadi") }];

  const onMonStChange = (v) => {
    monModalStudentId = v;
    renderCustomSelect("monStudentSelectWrap", stOpts, v, onMonStChange);
  };
  renderCustomSelect("monStudentSelectWrap", stOpts, monModalStudentId, onMonStChange);
}

function openMonitoringModal() {
  const students = getRoleScopedStudents();
  if (!students.length) {
    showToast(t("Сначала добавьте студентов в базу", "Avval bazaga talabalarni qöşing"));
    return;
  }
  monFilterState = { search: "", tutor: "all", group: "all" };
  monModalStudentId = students[0].id;
  monModalCategory = "Курение";

  const searchInp = document.getElementById("monStudentSearchInput");
  if (searchInp) searchInp.value = "";
  renderMonStudentFiltersAndList();

  const catOpts = MONITORING_CATEGORIES.map(c => ({ value: c.value, label: currentLang === "oz" ? c.oz : c.ru }));
  const onMonCatChange = (v) => {
    monModalCategory = v;
    document.getElementById("monCustomCatWrap").classList.toggle("hidden", v !== "Другое...");
    renderCustomSelect("monCategorySelectWrap", catOpts, v, onMonCatChange);
  };
  renderCustomSelect("monCategorySelectWrap", catOpts, monModalCategory, onMonCatChange);

  document.getElementById("monCustomCatWrap").classList.add("hidden");
  document.getElementById("monInitialNote").value = "";
  document.getElementById("monitoringModal").classList.remove("hidden");
}

function saveMonitoringRecord() {
  const st = appState.students.find(s => s.id === monModalStudentId);
  if (!st) return;

  const finalCat = monModalCategory === "Другое..."
    ? (document.getElementById("monCustomCategoryInput").value.trim() || t("Другое", "Boşqa"))
    : monModalCategory;
  const note = document.getElementById("monInitialNote").value.trim() || t("Поставлен(а) на индивидуальный мониторинг.", "Individual monitoringga qöyildi.");

  const existing = appState.monitoring.find(m => m.studentId === st.id && m.category === finalCat);
  if (existing) {
    existing.status = "active";
    existing.entries.push({
      date: new Date().toISOString().slice(0, 10),
      type: "reopened",
      text: `${t("Повторно возвращен(а) на учет", "Qayta hisobga olindi")}: ${note}`
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
  syncSpecificTutorFolder(st.tutorId);
  closeModal("monitoringModal");
  renderDiariesSection();
  showToast(t("Запись мониторинга сохранена", "Monitoring qaydi saqlandi"));
}

function addMonitoringEntry(recId) {
  const rec = appState.monitoring.find(m => m.id === recId);
  if (!rec) return;
  const input = document.getElementById(`noteInput_${recId}`);
  const check = document.getElementById(`posCheck_${recId}`);
  const text = input.value.trim();
  if (!text) {
    showToast(t("Введите текст заметки", "Qayd matnini kiriting"));
    return;
  }

  const autoPositive = /сбрил|сняла|бросил|устранен|oldirdi|yeçdi|taşladi/i.test(text);
  const isPositive = check.checked || autoPositive;

  rec.entries.push({
    date: new Date().toISOString().slice(0, 10),
    type: isPositive ? "positive" : "normal",
    text
  });

  if (isPositive) {
    rec.status = "archived";
    showToast(t("Положительный результат зафиксирован. Студент перенесен в архив.", "Ijobiy natija qayd etildi. Talaba arxivga ötkazildi."));
  } else {
    showToast(t("Запись добавлена в дневник", "Qayd kundalikka qöşildi"));
  }

  saveState();
  syncSpecificTutorFolder(rec.tutorId);
  renderDiariesSection();
}

function reopenMonitoringRecord(recId) {
  const rec = appState.monitoring.find(m => m.id === recId);
  if (!rec) return;
  rec.status = "active";
  rec.entries.push({
    date: new Date().toISOString().slice(0, 10),
    type: "reopened",
    text: t(
      "Студент(ка) повторно возвращен(а) на учет для продолжения индивидуального контроля.",
      "Individual nazoratni davom ettiriş maqsadida talaba qayta hisobga olindi."
    )
  });
  saveState();
  syncSpecificTutorFolder(rec.tutorId);
  activeMonitoringFilter = "active";
  renderDiariesSection();
  showToast(t("Студент возвращен на учет с сохранением истории", "Talaba tarixi saqlangan holda hisobga qaytarildi"));
}

function deleteMonitoringRecord(id, btnEl) {
  const checkTarget = appState.monitoring.find(m => m.id === id);
  if (!checkTarget || !canDeleteData(checkTarget.tutorId)) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uşun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    const target = appState.monitoring.find(m => m.id === id);
    const ownerTutorId = target ? target.tutorId : null;
    appState.monitoring = appState.monitoring.filter(m => m.id !== id);
    saveState();
    if (ownerTutorId) syncSpecificTutorFolder(ownerTutorId);
    renderDiariesSection();
    showToast(t("Карточка мониторинга удалена", "Monitoring kartasi öçirildi"));
  });
}

function addParentMeeting() {
  const st = appState.students.find(s => s.id === window._selectedPmStudentId);
  const notes = document.getElementById("pmNotesInput").value.trim();
  if (!st || !notes) {
    showToast(t("Выберите студента и опишите итоги встречи", "Talabani tanlang va uçraşuv natijasini yozing"));
    return;
  }
  const ownerId = st.tutorId || currentUser.id;
  appState.parentMeetings.unshift({
    id: `pm_${Date.now()}`,
    tutorId: ownerId,
    studentId: st.id,
    studentName: `${st.name} (${st.group})`,
    date: document.getElementById("pmDateInput").value,
    who: (pmSelectedParentWho === "__custom__"
      ? (document.getElementById("pmParentCustomInput") ? document.getElementById("pmParentCustomInput").value.trim() : "")
      : pmSelectedParentWho) || t("Родители", "Ota-onasi"),
    notes
  });
  saveState();
  syncSpecificTutorFolder(ownerId);
  renderDiariesSection();
  showToast(t("Встреча с родителями зафиксирована", "Ota-onalar bilan uçraşuv qayd etildi"));
}

function deleteParentMeeting(id, btnEl) {
  const checkTarget = appState.parentMeetings.find(m => m.id === id);
  if (!checkTarget || !canDeleteData(checkTarget.tutorId)) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uşun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    const target = appState.parentMeetings.find(m => m.id === id);
    const ownerTutorId = target ? target.tutorId : null;
    appState.parentMeetings = appState.parentMeetings.filter(m => m.id !== id);
    saveState();
    if (ownerTutorId) syncSpecificTutorFolder(ownerTutorId);
    renderDiariesSection();
    showToast(t("Запись удалена", "Qayd öçirildi"));
  });
}

// ==================== 5. ПРОФИЛЬ И АВТО-CV (ВКЛЮЧАЯ АВАТАР В ВЕРХНЕМ МЕНЮ) ====================
function loadProfileForm() {
  if (!currentUser) return;
  document.getElementById("profFullName").value = currentUser.name || "";
  document.getElementById("profPosition").value = currentUser.roleTitle || "";
  document.getElementById("profDepartment").value = currentUser.dept || "";
  document.getElementById("profPhone").value = currentUser.phone || "";
  document.getElementById("profEmail").value = currentUser.email || "";
  document.getElementById("profEducation").value = currentUser.edu || "";
  document.getElementById("profBio").value = currentUser.bio || "";
  syncProfileCV(true);
}

function compressAvatarDataUrl(dataUrl, callback) {
  const img = new Image();
  img.onload = () => {
    const maxSide = 256;
    const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    callback(canvas.toDataURL("image/jpeg", 0.85));
  };
  img.onerror = () => callback(dataUrl);
  img.src = dataUrl;
}

function handleProfilePhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    compressAvatarDataUrl(reader.result, (compressed) => {
      currentUser.photo = compressed;
      const idx = appState.users.findIndex(u => u.id === currentUser.id);
      if (idx !== -1) appState.users[idx].photo = compressed;

      saveState();
      syncUsersToGoogleDrive();
      updateHeaderAndGreeting();
      syncProfileCV(true);
      showToast(t("Фото обновлено в профиле, CV и верхнем меню", "Rasm profil, CV va yuqori menyuda yangilandi"));
    });
  };
  reader.readAsDataURL(file);
}

function syncProfileCV(skipSave = false) {
  if (!currentUser) return;
  currentUser.name = document.getElementById("profFullName").value;
  currentUser.roleTitle = document.getElementById("profPosition").value;
  currentUser.dept = document.getElementById("profDepartment").value;
  currentUser.phone = document.getElementById("profPhone").value;
  currentUser.email = document.getElementById("profEmail").value;
  currentUser.edu = document.getElementById("profEducation").value;
  currentUser.bio = document.getElementById("profBio").value;

  const idx = appState.users.findIndex(u => u.id === currentUser.id);
  if (idx !== -1) {
    appState.users[idx] = { ...appState.users[idx], ...currentUser };
  }

  updateHeaderAndGreeting();

  if (!skipSave) {
    saveState();
    clearTimeout(window._userProfileSyncTimer);
    window._userProfileSyncTimer = setTimeout(() => {
      syncUsersToGoogleDrive();
    }, 900);
  }

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
    <div class="mb-12"><strong>${t("Образование", "Ma’lumoti")}:</strong> ${currentUser.edu || "—"}</div>
    <div class="mb-12"><strong>${t("Закрепленные группы", "Biriktirilgan guruhlar")}:</strong> ${currentUser.groups} (${myStudents.length} ${t("студ.", "talaba")})</div>
    <div><strong>${t("Профессиональный профиль", "Kasbiy profil")}:</strong><p class="mt-6" style="font-size:13px; color:var(--text-muted);">${currentUser.bio || "—"}</p></div>
  `;
}

// ==================== 6. КАЛЕНДАРЬ, ЛИЧНЫЙ БЛОГ И TO-DO С ЧЕКБОКСАМИ ====================
let selectedEventColor = "#ff6b3d";

function setBlogMode(mode) {
  blogActiveMode = mode;
  const noteBtn = document.getElementById("blogModeNoteBtn");
  const todoBtn = document.getElementById("blogModeTodoBtn");
  const noteWrap = document.getElementById("blogNoteFormWrap");
  const todoWrap = document.getElementById("blogTodoFormWrap");

  if (noteBtn) noteBtn.classList.toggle("active", mode === "note");
  if (todoBtn) todoBtn.classList.toggle("active", mode === "todo");
  if (noteWrap) noteWrap.classList.toggle("hidden", mode !== "note");
  if (todoWrap) todoWrap.classList.toggle("hidden", mode !== "todo");

  renderTodoList();
}

function renderTodoList() {
  const listEl = document.getElementById("todoItemsList");
  if (!listEl || !currentUser) return;

  const myTodos = appState.todos.filter(td => td.userId === currentUser.id);
  if (!myTodos.length) {
    listEl.innerHTML = `<div class="st-meta">${t("Список задач пока пуст.", "Vazifalar röyxati hozirça böş.")}</div>`;
    return;
  }

  listEl.innerHTML = myTodos.map(td => `
    <div class="todo-item-row ${td.done ? "done" : ""}">
      <label class="todo-check-label">
        <input type="checkbox" ${td.done ? "checked" : ""} onchange="toggleTodoItem('${td.id}')" />
        <span class="todo-text">${td.text}</span>
      </label>
      ${canDeleteData(td.userId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteTodoItem('${td.id}', this)" title="${t("Удалить задачу", "Vazifani öçiriş")}">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
      </button>` : ""}
    </div>
  `).join("");
}

function addTodoItem() {
  const input = document.getElementById("todoTaskInput");
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  appState.todos.unshift({
    id: `todo_${Date.now()}_${Math.random().toString(36).slice(2, 5)}`,
    userId: currentUser.id,
    text,
    done: false,
    date: new Date().toLocaleDateString()
  });

  saveState();
  input.value = "";
  renderTodoList();
  showToast(t("Задача добавлена в список", "Vazifa röyxatga qöşildi"));
}

function toggleTodoItem(todoId) {
  const item = appState.todos.find(td => td.id === todoId);
  if (!item) return;
  item.done = !item.done;
  saveState();
  renderTodoList();
}

function deleteTodoItem(todoId, btnEl) {
  const checkItem = appState.todos.find(td => td.id === todoId);
  if (!checkItem || !canDeleteData(checkItem.userId)) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uşun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    appState.todos = appState.todos.filter(td => td.id !== todoId);
    saveState();
    renderTodoList();
    showToast(t("Задача удалена", "Vazifa öçirildi"));
  });
}

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
  document.getElementById("selectedDayLabel").textContent = `${selectedCalDate} • ${t("ЗАПЛАНИРОВАННЫЕ СОБЫТИЯ", "REJALASHTIRILGAN TADBIRLAR")} (${selectedEvents.length})`;

  const listEl = document.getElementById("selectedDayEventsList");
  listEl.innerHTML = selectedEvents.length
    ? selectedEvents.map(ev => `
        <div class="day-event-row">
          <div>
            <div style="font-weight:700; font-size:13px;"><span style="color:${ev.color}">●</span> ${ev.time} — ${ev.title}</div>
            <div class="st-meta">${ev.desc || ""}</div>
          </div>
          ${canDeleteData(ev.userId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteCalendarEvent('${ev.id}', this)" title="${t("Удалить событие", "Tadbirni öçiriş")}">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
          </button>` : ""}
        </div>
      `).join("")
    : `<div class="st-meta">${t("На выбранную дату событий пока не запланировано.", "Tanlangan sanaga tadbirlar hozirça rejalashtirilmagan.")}</div>`;

  renderTodoList();

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
          ${canDeleteData(b.userId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteBlogPost('${b.id}', this)" title="${t("Удалить запись", "Qaydni öçiriş")}">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
          </button>` : ""}
        </div>
      `).join("")
    : `<div class="st-meta">${t("Личный дневник пока пуст.", "Şaxsiy kundalik hozirça böş.")}</div>`;
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
    { value: "#ff6b3d", label: t("Оранжевый (Важно)", "Zarg‘aldoq (Muhim)") },
    { value: "#2563eb", label: t("Синий (Учебный процесс)", "Kök (Öquv jarayoni)") },
    { value: "#10b981", label: t("Зеленый (Мероприятие)", "Yaşil (Tadbir)") },
    { value: "#7c3aed", label: t("Фиолетовый (Личное)", "Binafşa (Şaxsiy)") }
  ];
  const onColorChange = (val) => {
    selectedEventColor = val;
    renderCustomSelect("evColorSelectWrap", colorOpts, val, onColorChange);
  };
  renderCustomSelect("evColorSelectWrap", colorOpts, selectedEventColor, onColorChange);
  document.getElementById("evTitle").value = "";
  document.getElementById("evDesc").value = "";
  document.getElementById("eventModal").classList.remove("hidden");
}

function saveCalendarEvent() {
  const title = document.getElementById("evTitle").value.trim();
  if (!title) {
    showToast(t("Введите название события", "Tadbir nomini kiriting"));
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
  showToast(t("Событие добавлено в календарь", "Tadbir taqvimga qöşildi"));
}

function deleteCalendarEvent(id, btnEl) {
  const checkEv = appState.calendarEvents.find(ev => ev.id === id);
  if (!checkEv || !canDeleteData(checkEv.userId)) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uşun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    appState.calendarEvents = appState.calendarEvents.filter(ev => ev.id !== id);
    saveState();
    renderCalendarAndBlog();
    showToast(t("Событие удалено", "Tadbir öçirildi"));
  });
}

function addBlogPost() {
  const title = document.getElementById("blogPostTitle").value.trim();
  const body = document.getElementById("blogPostBody").value.trim();
  if (!title && !body) return;
  appState.blogPosts.unshift({
    id: `blog_${Date.now()}`,
    userId: currentUser.id,
    title: title || t("Заметка", "Qayd"),
    body,
    date: new Date().toLocaleDateString()
  });
  saveState();
  document.getElementById("blogPostTitle").value = "";
  document.getElementById("blogPostBody").value = "";
  renderCalendarAndBlog();
  showToast(t("Запись сохранена", "Qayd saqlandi"));
}

function deleteBlogPost(id, btnEl) {
  const checkPost = appState.blogPosts.find(b => b.id === id);
  if (!checkPost || !canDeleteData(checkPost.userId)) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uşun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    appState.blogPosts = appState.blogPosts.filter(b => b.id !== id);
    saveState();
    renderCalendarAndBlog();
    showToast(t("Запись удалена", "Qayd öçirildi"));
  });
}

// ==================== 7. АДМИНИСТРИРОВАНИЕ ПРОФИЛЕЙ И ПАРОЛЕЙ ====================
let newUserRole = "tutor";
let newUserCourse = "1";
let editingUserId = null;
let editingUserRole = "tutor";
let editingUserCourse = "1";

function getCourseOptions() {
  return [
    { value: "1", label: `1 ${t("курс", "kurs")}` },
    { value: "2", label: `2 ${t("курс", "kurs")}` },
    { value: "3", label: `3 ${t("курс", "kurs")}` },
    { value: "4", label: `4 ${t("курс", "kurs")}` }
  ];
}

function syncUsersToGoogleDrive() {
  if (typeof APPS_SCRIPT_URL === "undefined" || !APPS_SCRIPT_URL.includes("/exec")) return;
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      action: "saveUsers",
      users: appState.users
    })
  }).catch(() => {});
}

function getUserRoleOptions() {
  return USER_ROLES.map(r => ({
    value: r.value,
    label: currentLang === "oz" ? r.oz : r.ru
  }));
}

function updateNewUserRoleVisibility() {
  const row = document.getElementById("nuRoleRow");
  const courseGroup = document.getElementById("nuCourseGroup");
  const groupsGroup = document.getElementById("nuGroupsGroup");
  const partialWrap = document.getElementById("nuPartialAdminWrap");
  const isTut = newUserRole === "tutor";
  if (row) row.classList.toggle("is-tutor", isTut);
  if (courseGroup) courseGroup.classList.toggle("hidden", !isTut);
  if (groupsGroup) groupsGroup.classList.toggle("hidden", !isTut);
  if (partialWrap) partialWrap.classList.toggle("hidden", newUserRole === "admin");
}

function updateEditUserRoleVisibility() {
  const row = document.getElementById("euRoleRow");
  const courseGroup = document.getElementById("euCourseGroup");
  const groupsGroup = document.getElementById("euGroupsGroup");
  const partialWrap = document.getElementById("euPartialAdminWrap");
  const isTut = editingUserRole === "tutor";
  if (row) row.classList.toggle("is-tutor", isTut);
  if (courseGroup) courseGroup.classList.toggle("hidden", !isTut);
  if (groupsGroup) groupsGroup.classList.toggle("hidden", !isTut);
  if (partialWrap) partialWrap.classList.toggle("hidden", editingUserRole === "admin");
}

function ensureEditUserModal() {
  const existing = document.getElementById("editUserModal");
  if (existing) existing.remove();

  const modalHtml = `
    <div id="editUserModal" class="modal-backdrop hidden">
      <div class="modal-box">
        <div class="modal-head">
          <h3 class="modal-title">${t("Редактирование профиля", "Profilni tahrirlaş")}</h3>
          <button type="button" class="icon-circle-btn sm" onclick="closeEditUserModal()" aria-label="${t("Закрыть", "Yopiş")}">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">${t("Ф.И.О. сотрудника", "Xodimning F.I.Ş.")}</label>
            <input type="text" id="euName" class="form-input" />
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">${t("Логин", "Login")}</label>
              <input type="text" id="euLogin" class="form-input" />
            </div>
            <div class="form-group">
              <label class="form-label">${t("Пароль", "Parol")}</label>
              <input type="text" id="euPass" class="form-input" />
            </div>
          </div>

          <div class="user-role-row is-tutor" id="euRoleRow">
            <div class="form-group">
              <label class="form-label">${t("Роль в системе", "Tizimdagi roli")}</label>
              <div class="custom-select drop-up" id="euRoleWrap"></div>
            </div>
            <div class="form-group" id="euCourseGroup">
              <label class="form-label">${t("Курс", "Kurs")}</label>
              <div class="custom-select drop-up" id="euCourseWrap"></div>
            </div>
            <div class="form-group" id="euGroupsGroup">
              <label class="form-label">${t("Закрепленные группы", "Biriktirilgan guruhlar")}</label>
              <input type="text" id="euGroups" class="form-input" placeholder="TR-401, TR-402" />
            </div>
          </div>

          <div class="form-group mt-6" id="euPartialAdminWrap">
            <label class="perm-checkbox-card">
              <input type="checkbox" id="euPartialAdmin" />
              <div>
                <div class="perm-title">${t("Частичные права администратора", "Qisman administrator huquqlari")}</div>
                <div class="perm-desc">${t("Полный доступ к управлению и удалению данных, но без вкладки «Пользователи»", "Ma’lumotlarni boşqariş va öçirişga töliq ruxsat, lekin «Foydalanuvçilar» bölimisiz")}</div>
              </div>
            </label>
          </div>
        </div>

        <div class="modal-foot">
          <button type="button" class="btn-ghost" onclick="closeEditUserModal()">${t("Отмена", "Bekor qiliş")}</button>
          <button type="button" class="btn-orange" onclick="saveEditedUser()">${t("Сохранить изменения", "Özgarishlarni saqlaş")}</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

function openEditUserModal(userId) {
  if (!isFullAdmin()) return;
  const u = appState.users.find(x => x.id === userId);
  if (!u) return;

  ensureEditUserModal();
  editingUserId = userId;
  editingUserRole = u.role || "tutor";
  editingUserCourse = u.course ? String(u.course) : "1";

  document.getElementById("euName").value = u.name || "";
  document.getElementById("euGroups").value = (u.role === "tutor" && u.groups !== "Все группы") ? (u.groups || "") : "";
  document.getElementById("euLogin").value = u.login || "";
  document.getElementById("euPass").value = u.pass || "";
  document.getElementById("euPartialAdmin").checked = !!u.partialAdmin;

  const roleOpts = getUserRoleOptions();
  const onEditRoleChange = (v) => {
    editingUserRole = v;
    renderCustomSelect("euRoleWrap", roleOpts, v, onEditRoleChange);
    updateEditUserRoleVisibility();
  };
  renderCustomSelect("euRoleWrap", roleOpts, editingUserRole, onEditRoleChange);

  const courseOpts = getCourseOptions();
  const onEditCourseChange = (v) => {
    editingUserCourse = v;
    renderCustomSelect("euCourseWrap", courseOpts, v, onEditCourseChange);
  };
  renderCustomSelect("euCourseWrap", courseOpts, editingUserCourse, onEditCourseChange);
  updateEditUserRoleVisibility();

  document.getElementById("editUserModal").classList.remove("hidden");
}

function closeEditUserModal() {
  editingUserId = null;
  const modal = document.getElementById("editUserModal");
  if (modal) modal.classList.add("hidden");
}

function saveEditedUser() {
  if (!isFullAdmin() || !editingUserId) return;
  const u = appState.users.find(x => x.id === editingUserId);
  if (!u) return;

  const name = document.getElementById("euName").value.trim();
  const role = editingUserRole;
  const groups = role === "tutor"
    ? (document.getElementById("euGroups").value.trim() || t("Не назначены", "Biriktirilmagan"))
    : "Все группы";
  const login = document.getElementById("euLogin").value.trim();
  const pass = document.getElementById("euPass").value.trim();
  const partialAdmin = role !== "admin" && !!document.getElementById("euPartialAdmin")?.checked;

  if (!name || !login || !pass) {
    showToast(t("Заполните Ф.И.О., логин и пароль", "F.I.Ş., login va parolni töldiring"));
    return;
  }

  const duplicateLogin = appState.users.some(item => item.id !== u.id && item.login === login);
  if (duplicateLogin) {
    showToast(t("Такой логин уже используется другим профилем", "Bu login boşqa profil tomonidan band qilingan"));
    return;
  }

  const foundRole = USER_ROLES.find(r => r.value === role);
  u.name = name;
  u.role = role;
  u.roleTitle = foundRole ? foundRole.ru : (u.roleTitle || "Тютор");
  u.course = role === "tutor" ? editingUserCourse : "";
  u.groups = groups;
  u.login = login;
  u.pass = pass;
  u.partialAdmin = partialAdmin;

  if (currentUser && currentUser.id === u.id) {
    currentUser = u;
    document.getElementById("navUsersBtn").classList.toggle("hidden", !isFullAdmin());
    updateHeaderAndGreeting();
  }

  saveState();
  syncUsersToGoogleDrive();
  closeEditUserModal();
  renderUsersAdminTable();
  showToast(`${t("Профиль обновлен и сохранен", "Profil yangilandi va saqlandi")}: ${u.name}`);
}

function renderUsersAdminTable() {
  const table = document.getElementById("usersAdminTable");
  table.innerHTML = `
    <thead>
      <tr>
        <th>${t("Сотрудник", "Xodim")}</th>
        <th>${t("Роль", "Roli")}</th>
        <th>${t("Группы", "Guruhlar")}</th>
        <th>${t("Логин", "Login")}</th>
        <th>${t("Пароль (изменить)", "Parol (özgartiriş)")}</th>
        <th>${t("Папка Google Drive", "Google Drive papkasi")}</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${appState.users.map(u => `
        <tr>
          <td><strong>${u.name}</strong></td>
          <td>
            <span>${localizeRoleTitle(u.role, u.roleTitle)}</span>
            ${u.partialAdmin && u.role !== "admin" ? `<span class="badge-pill partial-admin">${t("Част. админ", "Qisman admin")}</span>` : ""}
          </td>
          <td>${u.role === "tutor" ? `${u.course ? `<span class="badge-pill" style="margin-right:6px;">${u.course} ${t("курс", "kurs")}</span>` : ""}${u.groups || "—"}` : `<span class="st-meta">—</span>`}</td>
          <td><code>${u.login}</code></td>
          <td>
            <div style="display:flex; gap:6px; align-items:center;">
              <input type="text" id="passField_${u.id}" class="form-input" style="padding:6px 10px; width:130px;" value="${u.pass}" />
              <button type="button" class="btn-export sm" onclick="updateUserPassword('${u.id}')">${t("Обновить", "Yangilaş")}</button>
            </div>
          </td>
          <td><span class="st-meta">${u.driveFolder}</span></td>
          <td style="text-align:right; white-space:nowrap;">
            <button type="button" class="btn-export sm" onclick="openEditUserModal('${u.id}')" title="${t("Редактировать профиль", "Profilni tahrirlaş")}" style="display:inline-flex; align-items:center; gap:4px; margin-right:6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/><path d="M16 5l3 3"/></svg>
              <span>${t("Изменить", "Tahrirlaş")}</span>
            </button>
            ${u.id !== "admin" && isFullAdmin() ? `
              <button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteUserAccount('${u.id}', this)" title="${t("Удалить профиль", "Profilni öçiriş")}">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
              </button>
            ` : ""}
          </td>
        </tr>
      `).join("")}
    </tbody>
  `;
}

function updateUserPassword(userId) {
  if (!isFullAdmin()) return;
  const u = appState.users.find(x => x.id === userId);
  const newPass = document.getElementById(`passField_${userId}`).value.trim();
  if (!u || !newPass) return;
  u.pass = newPass;
  saveState();
  syncUsersToGoogleDrive();
  showToast(`${t("Новый пароль сохранен", "Yangi parol saqlandi")}: ${u.name}`);
}

function openNewUserModal() {
  if (!isFullAdmin()) return;
  newUserRole = "tutor";
  newUserCourse = "1";
  document.getElementById("nuName").value = "";
  document.getElementById("nuLogin").value = "";
  document.getElementById("nuPass").value = "";
  document.getElementById("nuGroups").value = "";
  const paCheck = document.getElementById("nuPartialAdmin");
  if (paCheck) paCheck.checked = false;

  const roleOpts = getUserRoleOptions();
  const onRoleChange = (v) => {
    newUserRole = v;
    renderCustomSelect("nuRoleWrap", roleOpts, v, onRoleChange);
    updateNewUserRoleVisibility();
  };
  renderCustomSelect("nuRoleWrap", roleOpts, newUserRole, onRoleChange);

  const courseOpts = getCourseOptions();
  const onCourseChange = (v) => {
    newUserCourse = v;
    renderCustomSelect("nuCourseWrap", courseOpts, v, onCourseChange);
  };
  renderCustomSelect("nuCourseWrap", courseOpts, newUserCourse, onCourseChange);
  updateNewUserRoleVisibility();
  document.getElementById("newUserModal").classList.remove("hidden");
}

function createNewUser() {
  if (!isFullAdmin()) return;
  const name = document.getElementById("nuName").value.trim();
  const login = document.getElementById("nuLogin").value.trim();
  const pass = document.getElementById("nuPass").value.trim();
  const groups = newUserRole === "tutor"
    ? (document.getElementById("nuGroups").value.trim() || t("Не назначены", "Biriktirilmagan"))
    : "Все группы";
  const partialAdmin = newUserRole !== "admin" && !!document.getElementById("nuPartialAdmin")?.checked;

  if (!name || !login || !pass) {
    showToast(t("Заполните Ф.И.О., логин и пароль", "F.I.Ş., login va parolni töldiring"));
    return;
  }
  if (appState.users.some(u => u.login === login)) {
    showToast(t("Такой логин уже существует", "Bunday login allaqaçon mavjud"));
    return;
  }

  const foundRole = USER_ROLES.find(r => r.value === newUserRole);
  appState.users.push({
    id: `user_${Date.now()}`,
    login,
    pass,
    name,
    role: newUserRole,
    roleTitle: foundRole ? foundRole.ru : "Тютор",
    course: newUserRole === "tutor" ? newUserCourse : "",
    partialAdmin,
    dept: "Университет туризма",
    groups,
    driveFolder: `MyTutors_Private_${login}`,
    phone: "", email: "", edu: "", bio: "", photo: ""
  });

  saveState();
  syncUsersToGoogleDrive();
  closeModal("newUserModal");
  renderUsersAdminTable();
  showToast(`${t("Кабинет успешно открыт", "Kabinet muvaffaqiyatli oçildi")}: ${name}`);
}

function deleteUserAccount(userId, btnEl) {
  if (!isFullAdmin()) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uşun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    appState.users = appState.users.filter(u => u.id !== userId);
    saveState();
    syncUsersToGoogleDrive();
    renderUsersAdminTable();
    showToast(t("Профиль удален", "Profil öçirildi"));
  });
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}


// ==================== КАСТОМНЫЕ НАПРАВЛЕНИЯ ВОЛОНТЕРСТВА (DROP-UP + МУЛЬТИВЫБОР + ПОИСК) ====================
let volSearchQuery = "";

function getAllVolunteerDirections() {
  const baseVals = VOLUNTEER_DIRECTIONS.map(v => v.value);
  const extras = new Set(appState.customVolunteers || []);
  (appState.students || []).forEach(s => {
    getStudentVolunteers(s).forEach(v => {
      if (!baseVals.includes(v)) extras.add(v);
    });
  });
  return [
    ...VOLUNTEER_DIRECTIONS.map(v => ({ value: v.value, label: currentLang === "oz" ? v.oz : v.ru })),
    ...[...extras].map(v => ({ value: v, label: v }))
  ];
}

function formatVolunteerTriggerLabel(selectedArr, allDirs) {
  if (!selectedArr || !selectedArr.length) {
    return t("Не состоит", "A’zo emas");
  }
  const labels = selectedArr.map(val => {
    const found = allDirs.find(d => d.value === val);
    return found ? found.label : val;
  });
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]}, ${labels[1]}`;
  return `${labels[0]}, ${labels[1]} (+${labels.length - 2})`;
}

function renderStudentVolunteerSelect(keepOpen = false) {
  const wrap = document.getElementById("stVolunteerWrap");
  if (!wrap) return;
  wrap.classList.add("drop-up");

  const wasOpen = keepOpen || wrap.classList.contains("open");
  const allDirs = getAllVolunteerDirections();
  const selected = modalStudentState.volunteers || [];
  const triggerText = formatVolunteerTriggerLabel(selected, allDirs);

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('stVolunteerWrap'); setTimeout(() => { const i = document.getElementById('volSearchInput'); if(i) i.focus(); }, 30);">
      <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${triggerText}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M6 15l6 -6l6 6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()">
      <input type="text" id="volSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск или новое направление...", "Qidiriş yoki yangi yönaliş...")}" value="${volSearchQuery}" oninput="renderVolunteerOptionsList()" onkeydown="if(event.key==='Enter'){event.preventDefault(); addOrSelectVolunteer(this.value);}" />
      <div id="volOptionsList" class="tg-tag-search-list"></div>
    </div>
  `;

  if (wasOpen) wrap.classList.add("open");
  renderVolunteerOptionsList();
}

function renderVolunteerOptionsList() {
  const listEl = document.getElementById("volOptionsList");
  const inp = document.getElementById("volSearchInput");
  if (!listEl) return;

  volSearchQuery = inp ? inp.value : "";
  const q = volSearchQuery.trim().toLowerCase();
  const allDirs = getAllVolunteerDirections();
  const selected = modalStudentState.volunteers || [];

  const matched = q
    ? allDirs.filter(d => d.label.toLowerCase().includes(q) || d.value.toLowerCase().includes(q))
    : allDirs;

  const exactExists = allDirs.some(d => d.label.toLowerCase() === q || d.value.toLowerCase() === q);

  let html = matched.map(d => {
    if (d.value === "Не состоит") {
      const isNone = selected.length === 0;
      return `
        <div class="cs-option ${isNone ? 'selected' : ''}" onclick="clearVolunteerDirections()">
          <span>${d.label}</span>
          ${isNone ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5l10 -10"/></svg>' : ''}
        </div>
      `;
    }
    const isChecked = selected.includes(d.value);
    return `
      <label class="social-check-option">
        <input type="checkbox" ${isChecked ? "checked" : ""} onchange="toggleVolunteerDirection('${d.value.replace(/'/g, "\\'")}')" />
        <span>${d.label}</span>
      </label>
    `;
  }).join("");

  if (volSearchQuery.trim() && !exactExists) {
    const cleanNew = volSearchQuery.trim();
    html += `
      <div class="tag-ac-item create-new" onclick="addOrSelectVolunteer('${cleanNew.replace(/'/g, "\\'")}')">
        <span>+ ${t("Добавить направление", "Yangi yönaliş qöşiş")}: <strong>${cleanNew}</strong></span>
      </div>
    `;
  }

  listEl.innerHTML = html || `<div class="st-meta" style="padding:8px 10px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`;
}

function clearVolunteerDirections() {
  modalStudentState.volunteers = [];
  volSearchQuery = "";
  const wrap = document.getElementById("stVolunteerWrap");
  if (wrap) wrap.classList.remove("open");
  renderStudentVolunteerSelect(false);
}

function toggleVolunteerDirection(val) {
  if (!val || val === "Не состоит") {
    clearVolunteerDirections();
    return;
  }
  const current = modalStudentState.volunteers || [];
  if (current.includes(val)) {
    modalStudentState.volunteers = current.filter(x => x !== val);
  } else {
    modalStudentState.volunteers = [...current, val];
  }
  renderStudentVolunteerSelect(true);
}

function addOrSelectVolunteer(rawVal) {
  const clean = convertUzbekLatinText(String(rawVal || "").trim());
  if (!clean) return;
  const allDirs = getAllVolunteerDirections();
  const existing = allDirs.find(d => d.label.toLowerCase() === clean.toLowerCase() || d.value.toLowerCase() === clean.toLowerCase());

  if (existing) {
    if (existing.value === "Не состоит") {
      clearVolunteerDirections();
      return;
    }
    if (!(modalStudentState.volunteers || []).includes(existing.value)) {
      modalStudentState.volunteers = [...(modalStudentState.volunteers || []), existing.value];
    }
    volSearchQuery = "";
    renderStudentVolunteerSelect(true);
    return;
  }

  appState.customVolunteers = [clean, ...(appState.customVolunteers || [])];
  if (!(modalStudentState.volunteers || []).includes(clean)) {
    modalStudentState.volunteers = [...(modalStudentState.volunteers || []), clean];
  }
  volSearchQuery = "";
  saveState();
  renderStudentVolunteerSelect(true);
  showToast(`${t("Добавлено направление волонтерства", "Yangi volontyorlik yönalişi qöşildi")}: ${clean}`);
}

// ==================== КАСТОМНЫЕ СОЦИАЛЬНЫЕ КАТЕГОРИИ (МУЛЬТИВЫБОР + «ДРУГИЕ КАТЕГОРИИ») ====================
let isCustomSocialInputOpen = false;
let socialOtherSearchQuery = "";

function getAllSocialCategories() {
  const baseVals = SOCIAL_CATEGORIES.map(c => c.value);
  const extras = new Set(appState.customSocialCategories || []);
  (appState.students || []).forEach(s => {
    (s.social || []).forEach(c => {
      if (c && !baseVals.includes(c)) extras.add(c);
    });
  });
  return [
    ...SOCIAL_CATEGORIES.map(c => ({ value: c.value, label: currentLang === "oz" ? c.oz : c.ru })),
    ...[...extras].map(c => ({ value: c, label: c }))
  ];
}

function toggleStudentSocialCategory(val) {
  const arr = modalStudentState.selectedSocial || [];
  if (arr.includes(val)) {
    modalStudentState.selectedSocial = arr.filter(x => x !== val);
  } else {
    modalStudentState.selectedSocial = [...arr, val];
  }
  renderStudentSocialArea();
}

function openCustomSocialInput() {
  isCustomSocialInputOpen = true;
  renderStudentSocialArea();
  const inp = document.getElementById("customSocialInput");
  if (inp) {
    inp.focus();
    updateCustomSocialAutocomplete();
  }
}

function closeCustomSocialInput() {
  isCustomSocialInputOpen = false;
  renderStudentSocialArea();
}

function addOrSelectCustomSocial(rawVal) {
  const clean = convertUzbekLatinText(String(rawVal || "").trim());
  if (!clean) return;

  const allCats = getAllSocialCategories();
  const existing = allCats.find(c => c.label.toLowerCase() === clean.toLowerCase() || c.value.toLowerCase() === clean.toLowerCase());
  const finalVal = existing ? existing.value : clean;

  if (!existing) {
    appState.customSocialCategories = [clean, ...(appState.customSocialCategories || [])];
    saveState();
  }

  if (!(modalStudentState.selectedSocial || []).includes(finalVal)) {
    modalStudentState.selectedSocial = [...(modalStudentState.selectedSocial || []), finalVal];
  }

  isCustomSocialInputOpen = false;
  renderStudentSocialArea();
}

function updateCustomSocialAutocomplete() {
  const inp = document.getElementById("customSocialInput");
  const menu = document.getElementById("customSocialAutocomplete");
  if (!inp || !menu) return;

  const q = inp.value.trim().toLowerCase();
  const allCats = getAllSocialCategories();
  const matches = q
    ? allCats.filter(c => c.label.toLowerCase().includes(q) || c.value.toLowerCase().includes(q))
    : allCats.slice(0, 6);

  const exactExists = allCats.some(c => c.label.toLowerCase() === q || c.value.toLowerCase() === q);

  let html = matches.slice(0, 6).map(c => `
    <div class="tag-ac-item" onmousedown="event.preventDefault(); addOrSelectCustomSocial('${c.value.replace(/'/g, "\\'")}')">
      <span>${c.label}</span>
      ${(modalStudentState.selectedSocial || []).includes(c.value) ? '<span style="color:var(--accent)">✓</span>' : ''}
    </div>
  `).join("");

  if (inp.value.trim() && !exactExists) {
    const cleanNew = inp.value.trim();
    html += `
      <div class="tag-ac-item create-new" onmousedown="event.preventDefault(); addOrSelectCustomSocial('${cleanNew.replace(/'/g, "\\'")}')">
        <span>+ ${t("Добавить категорию", "Yangi toifa qöşiş")}: <strong>${cleanNew}</strong></span>
      </div>
    `;
  }

  if (!html) {
    menu.classList.add("hidden");
  } else {
    menu.innerHTML = html;
    menu.classList.remove("hidden");
  }
}

function toggleOtherSocialDropdown(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById("socialOtherDropdown");
  if (!dd) return;
  const wasOpen = dd.classList.contains("open");
  document.querySelectorAll(".social-other-dropdown.open").forEach(el => el.classList.remove("open"));
  if (!wasOpen) {
    dd.classList.add("open");
    const inp = document.getElementById("socialOtherSearchInput");
    if (inp) {
      inp.value = socialOtherSearchQuery;
      inp.focus();
      renderOtherSocialList();
    }
  }
}

function renderOtherSocialList() {
  const listEl = document.getElementById("socialOtherList");
  const inp = document.getElementById("socialOtherSearchInput");
  if (!listEl) return;

  socialOtherSearchQuery = inp ? inp.value : "";
  const q = socialOtherSearchQuery.trim().toLowerCase();
  const allCats = getAllSocialCategories();
  const extraCats = allCats.slice(5);
  const filtered = q
    ? extraCats.filter(c => c.label.toLowerCase().includes(q) || c.value.toLowerCase().includes(q))
    : extraCats;

  if (!filtered.length) {
    listEl.innerHTML = `<div class="st-meta" style="padding:8px 10px;">${t("Категории не найдены", "Toifalar topilmadi")}</div>`;
    return;
  }

  listEl.innerHTML = filtered.map(c => {
    const checked = (modalStudentState.selectedSocial || []).includes(c.value);
    return `
      <label class="social-check-option">
        <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleStudentSocialCategory('${c.value.replace(/'/g, "\\'")}')" />
        <span>${c.label}</span>
      </label>
    `;
  }).join("");
}

function renderStudentSocialArea() {
  const wrap = document.getElementById("stSocialChips");
  if (!wrap) return;

  const allCats = getAllSocialCategories();
  const first5 = allCats.slice(0, 5);
  const extraCats = allCats.slice(5);
  const selected = modalStudentState.selectedSocial || [];
  const selectedExtraCount = extraCats.filter(c => selected.includes(c.value)).length;

  let html = first5.map(cat => `
    <div class="tag-chip ${selected.includes(cat.value) ? 'active' : ''}" data-val="${cat.value}" onclick="toggleStudentSocialCategory('${cat.value.replace(/'/g, "\\'")}')">${cat.label}</div>
  `).join("");

  if (extraCats.length > 0) {
    html += `
      <div class="social-other-dropdown drop-up" id="socialOtherDropdown">
        <button type="button" class="tg-all-tags-trigger" onclick="toggleOtherSocialDropdown(event)">
          <span>${t("Другие категории", "Boşqa toifalar")}${selectedExtraCount ? ` (${selectedExtraCount})` : ""}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 15l6 -6l6 6"/></svg>
        </button>
        <div class="tg-all-tags-menu" onclick="event.stopPropagation()">
          <input type="text" id="socialOtherSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск категории...", "Toifa qidiriş...")}" oninput="renderOtherSocialList()" />
          <div id="socialOtherList" class="tg-tag-search-list"></div>
        </div>
      </div>
    `;
  }

  html += isCustomSocialInputOpen
    ? `
      <div class="custom-tag-inline-wrap">
        <input type="text" id="customSocialInput" class="custom-tag-input" placeholder="${t("Новая категория...", "Yangi toifa...")}" oninput="updateCustomSocialAutocomplete()" onkeydown="if(event.key==='Enter'){event.preventDefault(); addOrSelectCustomSocial(this.value);} else if(event.key==='Escape'){closeCustomSocialInput();}" />
        <button type="button" class="tag-chip custom-tag-btn" onclick="addOrSelectCustomSocial(document.getElementById('customSocialInput').value)">+</button>
        <div id="customSocialAutocomplete" class="tag-autocomplete-menu hidden" style="top:auto; bottom:calc(100% + 6px);"></div>
      </div>
    `
    : `
      <button type="button" class="tag-chip custom-tag-btn" onclick="openCustomSocialInput()">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5l0 14"/><path d="M5 12l14 0"/></svg>
        <span>${t("Своя категория", "Öz toifam")}</span>
      </button>
    `;

  wrap.innerHTML = html;
}

// ==================== АВТОКОНВЕРТАЦИЯ НОВОГО УЗБЕКСКОГО ЛАТИНСКОГО АЛФАВИТА ====================
function formatPassportInput(el) {
  if (!el) return;
  const raw = String(el.value || "").toUpperCase();
  let letters = "";
  let digits = "";
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];
    if (letters.length < 2) {
      if (/[A-Z]/.test(ch)) letters += ch;
    } else {
      if (/[0-9]/.test(ch) && digits.length < 7) digits += ch;
    }
  }
  el.value = digits.length > 0 ? `${letters} ${digits}` : letters;
}

const UZ_CONVERTER_EXCLUDED_IDS = new Set([
  "stGroup", "euGroups", "nuGroups",
  "stPassport", "stPinfl", "stHemisId",
  "stEmpOrg",
  "loginUsername", "loginPassword",
  "euLogin", "euPass", "nuLogin", "nuPass",
  "stPhone", "stEmpBossPhone", "profPhone", "profEmail",
  "hemisUrlInput", "tgUrlInput", "editTgUrl", "dormRoomSearchInput"
]);

function convertUzbekLatinText(str) {
  if (!str || typeof str !== "string") return str;

  // 1. Временно защищаем имя Ishoq (и любые формы: Ishoqbek, Ishoqjon, Ishoqxon, Ishoqov и т.д.)
  const placeholders = [];
  let text = str.replace(/\b(ishoq[a-zA-Z'‘’`]*)/gi, (match) => {
    const token = `__ISHOQ_GUARD_${placeholders.length}__`;
    placeholders.push(match);
    return token;
  });

  // 2. Конвертация o'/o`/o‘/o’ и g'/g`/g‘/g’ -> ö / Ö и ğ / Ğ
  text = text.replace(/O['`‘’ʻʼ]/g, "Ö").replace(/o['`‘’ʻʼ]/g, "ö");
  text = text.replace(/G['`‘’ʻʼ]/g, "Ğ").replace(/g['`‘’ʻʼ]/g, "ğ");

  // 3. Конвертация sh/Sh/SH -> ş/Ş и ch/Ch/CH -> ç/Ç
  text = text.replace(/SH/g, "Ş").replace(/Sh/g, "Ş").replace(/sh/g, "ş");
  text = text.replace(/CH/g, "Ç").replace(/Ch/g, "Ç").replace(/ch/g, "ç");

  // 4. Возвращаем защищенные формы Ishoq обратно
  text = text.replace(/__ISHOQ_GUARD_(\d+)__/g, (_, idx) => placeholders[Number(idx)] || "");
  return text;
}

function shouldAutoConvertField(el) {
  if (!el) return false;
  const tag = (el.tagName || "").toUpperCase();
  if (tag !== "INPUT" && tag !== "TEXTAREA") return false;
  if (tag === "INPUT") {
    const type = (el.type || "text").toLowerCase();
    if (type !== "text" && type !== "search") return false;
  }
  if (el.id && UZ_CONVERTER_EXCLUDED_IDS.has(el.id)) return false;
  if (el.dataset && el.dataset.noUzConvert === "1") return false;
  return true;
}

document.addEventListener("input", (e) => {
  const el = e.target;
  if (!shouldAutoConvertField(el)) return;
  const oldVal = el.value;
  const newVal = convertUzbekLatinText(oldVal);
  if (newVal !== oldVal) {
    const start = el.selectionStart;
    const diff = oldVal.length - newVal.length;
    el.value = newVal;
    if (typeof start === "number") {
      const nextPos = Math.max(0, start - diff);
      el.setSelectionRange(nextPos, nextPos);
    }
  }
}, true);


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", restoreSession);
} else {
  restoreSession();
}
