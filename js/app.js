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
    dist_marital: "Семейный статус",
    upload_st_photo: "Загрузить фото студента",
    remove_photo: "Удалить фото",
    st_photo_hint: "JPG / PNG • Сохраняется в карточке студента",
    sec_marital: "СЕМЕЙНЫЙ СТАТУС",
    lbl_marital_status: "Семейное положение",
    lbl_spouse_name: "Ф.И.О. супруга(и)",
    lbl_spouse_birth: "Дата рождения супруга(и)",
    lbl_children_count: "Количество детей",
    lbl_mon_partner: "Поиск второй половинки (студент)",
    ph_mon_partner_search: "Введите Ф.И.О. или группу студента...",
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
    tab_dorm_logs: "Записи по общежитию",
    tab_rent_logs: "Заметки по съемным квартирам",
    rent_modal_title: "Фиксация изучения съемной квартиры",
    lbl_rent_student: "Студент (съемное жилье) *",
    lbl_rent_address: "Адрес съемной квартиры",
    lbl_rent_landlord: "Владелец квартиры (Ф.И.О., тел.)",
    lbl_rent_relocation: "Комментарий по переселению",
    ph_rent_relocation: "Новый адрес или причина переселения...",
    lbl_rent_conflict: "Конфликт с... (свободный ввод)",
    ph_rent_conflict: "Укажите с кем возник конфликт (владелец, сосед и т.д.)...",
    lbl_mon_debt: "Сумма долга по контракту (UZS)",
    dorm_modal_title: "Фиксация изучения комнаты общежития",
    lbl_dorm_room: "Комната общежития *",
    lbl_dorm_date: "Дата проверки",
    lbl_dorm_cat: "Категория проверки *",
    lbl_dorm_problem_res: "Выберите жильцов (мультивыбор)",
    lbl_dorm_relocation: "Желаемая комната / комментарий по переселению",
    ph_dorm_relocation: "Например: Комната 305 или причина переселения...",
    lbl_dorm_collab: "Совместная работа (участники беседы)",
    lbl_dorm_conflict: "Конфликт со студентом (поиск по всей базе)",
    lbl_dorm_notes: "Текст дневника проверки *",
    ph_dorm_notes: "Опишите результаты проверки, замечания и принятые меры...",
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
    desc_partial_admin: "Полный доступ к управлению и удалению данных",
    chat_btn_label: "Чат и Задания",
    chat_att_photo: "Фото / Изображение",
    chat_att_file: "Документ / Файл",
    chat_att_poll: "Создать опрос",
    chat_ph_msg: "Сообщение...",
    chat_new_modal_title: "Новый чат или группа",
    chat_mode_direct: "Личный чат",
    chat_mode_group: "Создать группу",
    chat_lbl_group_name: "Название группы",
    chat_lbl_members: "Выберите собеседников",
    chat_btn_create: "Создать",
    task_modal_title: "Новое задание",
    task_lbl_title: "Наименование задачи *",
    task_lbl_deadline: "Дедлайн",
    task_lbl_priority: "Важность (цвет)",
    task_lbl_assignees: "Исполнители (мультивыбор) *",
    task_lbl_todos: "Пункты задачи (To-Do)",
    task_btn_assign: "Назначить задание",
    poll_modal_title: "Создать опрос",
    poll_lbl_question: "Вопрос *",
    poll_lbl_options: "Варианты ответа",
    poll_btn_add_opt: "Добавить вариант",
    poll_lbl_multi: "Несколько вариантов ответа",
    poll_desc_multi: "Участники смогут выбрать сразу несколько пунктов",
    poll_btn_send: "Отправить опрос",
    ph_st_fio: "Иванов Иван Иванович",
    ph_fio: "Ф.И.О.",
    ph_mon_custom: "Например: Систематические опоздания...",
    ph_mon_debt: "Например: 3500000",
    ph_mon_note: "Опишите ситуацию и проведенную беседу...",
    ph_auto_student: "Автоматически из карточки студента...",
    ph_hemis_bulk: "Азизбек Тошпулатов | TR-101 | 1 | М | +998 90 411 22 01\nНилуфар Бобоева | MH-202 | 2 | Ж | +998 90 911 77 07",
    ph_ev_title: "Кураторский час в группе TR-101",
    ph_ev_desc: "Аудитория 204, главный корпус...",
    ph_nu_name: "А. Каримов",
    ph_chat_group_name: "Например: Тюторы 1 курса",
    ph_chat_member_search: "Поиск пользователя...",
    ph_task_title: "Например: Проверить посещаемость в общежитии",
    ph_task_todo: "Добавить пункт...",
    ph_poll_q: "Задайте вопрос...",
    ttl_theme: "Сменить тему",
    ttl_new_chat: "Новый чат / Группа",
    ttl_notifs: "Уведомления",
    ttl_close: "Закрыть",
    ttl_attach: "Прикрепить",
    ttl_emoji: "Эмодзи",
    ttl_send: "Отправить"
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
    kpi_gdoc_ready: "Google Doc uçun tayyor",
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
    dist_marital: "Oilaviy holati",
    upload_st_photo: "Talaba rasmini yuklaş",
    remove_photo: "Rasmni öçiriş",
    st_photo_hint: "JPG / PNG • Talaba kartasida saqlanadi",
    sec_marital: "OILAVIY HOLATI",
    lbl_marital_status: "Oilaviy holati",
    lbl_spouse_name: "Turmuş örtoğining F.I.Ş.",
    lbl_spouse_birth: "Turmuş örtoğining tuğilgan sanasi",
    lbl_children_count: "Farzandlar soni",
    lbl_mon_partner: "Ikkinçi yarmini qidiriş (talaba)",
    ph_mon_partner_search: "Talabaning F.I.Ş. yoki guruhini kiriting...",
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
    tab_dorm_logs: "Yotoqxona qaydlari",
    tab_rent_logs: "Ijara xonadon qaydlari",
    rent_modal_title: "Ijara xonadonni örganişni qayd etiş",
    lbl_rent_student: "Talaba (ijara xonadon) *",
    lbl_rent_address: "Ijara xonadon manzili",
    lbl_rent_landlord: "Uy egasi (F.I.Ş., telefon)",
    lbl_rent_relocation: "Köçiş böyiça izoh",
    ph_rent_relocation: "Yangi manzil yoki köçiş sababi...",
    lbl_rent_conflict: "... bilan nizo (erkin matn)",
    ph_rent_conflict: "Kim bilan nizo çiqqanini yozing (uy egasi, qöşni va h.k.)...",
    lbl_mon_debt: "Kontrakt qarzi summasi (UZS)",
    dorm_modal_title: "Yotoqxona xonasini örganişni qayd etiş",
    lbl_dorm_room: "Yotoqxona xonasi *",
    lbl_dorm_date: "Tekşiruv sanasi",
    lbl_dorm_cat: "Tekşiruv toifasi *",
    lbl_dorm_problem_res: "Xonadoşlarni tanlang (bir neçta)",
    lbl_dorm_relocation: "Köçiş xonasi / izoh",
    ph_dorm_relocation: "Masalan: 305-xona yoki köçiş sababi...",
    lbl_dorm_collab: "Hamkorlikda (suhbat iştirokçilari)",
    lbl_dorm_conflict: "Talaba bilan nizo (baza böyiça qidiriş)",
    lbl_dorm_notes: "Tekşiruv kundaligi matni *",
    ph_dorm_notes: "Tekşiruv natijalari, kamçiliklar va körilgan çoralarni yozing...",
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
    cal_sub: "Tadbirlarni rejalaştiriş, eslatmalar va tyutorning erkin qaydlari",
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
    lbl_emp_salary: "Oylik maoş (UZS)",
    sec_family: "OTA-ONALAR VA QARINDOŞLAR MA’LUMOTLARI",
    btn_add_short: "Qöşiş",
    lbl_soc_cats: "Ijtimoiy toifalar",
    lbl_vol_dir: "Volontyorlik yönalişi",
    btn_cancel: "Bekor qiliş",
    btn_save_changes: "Özgarişlarni saqlaş",
    btn_save: "Saqlaş",
    mon_modal_title: "Talabani monitoringga qöyiş",
    lbl_student: "Talaba",
    lbl_mon_cat: "Monitoring toifasi",
    lbl_mon_custom: "Toifani qölda kiriting",
    lbl_mon_note: "Kundalikdagi dastlabki qayd",
    hemis_desc: "HEMIS tizimidan talabalar röyxatini joylaştiring (har bir qatorda: F.I.Ş. | Guruh | Kurs | Jinsi (E/A) | Telefon) yoki HEMIS API tokenini ulang.",
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
    desc_partial_admin: "Ma’lumotlarni boşqariş va öçirişga töliq ruxsat",
    chat_btn_label: "Çat va Vazifalar",
    chat_att_photo: "Rasm / Foto",
    chat_att_file: "Hujjat / Fayl",
    chat_att_poll: "Sörovnoma yaratiş",
    chat_ph_msg: "Xabar...",
    chat_new_modal_title: "Yangi çat yoki guruh",
    chat_mode_direct: "Şaxsiy çat",
    chat_mode_group: "Guruh yaratiş",
    chat_lbl_group_name: "Guruh nomi",
    chat_lbl_members: "Suhbatdoşlarni tanlang",
    chat_btn_create: "Yaratiş",
    task_modal_title: "Yangi vazifa",
    task_lbl_title: "Vazifa nomi *",
    task_lbl_deadline: "Muddat (dedlayn)",
    task_lbl_priority: "Muhimlik darajasi (rang)",
    task_lbl_assignees: "Ijroçilar (bir neçta tanlaş) *",
    task_lbl_todos: "Vazifa bandlari (To-Do)",
    task_btn_assign: "Vazifa biriktiriş",
    poll_modal_title: "Sörovnoma yaratiş",
    poll_lbl_question: "Savol *",
    poll_lbl_options: "Javob variantlari",
    poll_btn_add_opt: "Variant qöşiş",
    poll_lbl_multi: "Bir neçta javob tanlaş",
    poll_desc_multi: "Iştirokçilar bir vaqtda bir neçta bandni tanlaşi mumkin",
    poll_btn_send: "Sörovnomani yuboriş",
    ph_st_fio: "Karimov Alişer Botiroviç",
    ph_fio: "F.I.Ş.",
    ph_mon_custom: "Masalan: Muntazam keçikişlar...",
    ph_mon_debt: "Masalan: 3500000",
    ph_mon_note: "Vaziyat va ötkazilgan suhbatni yozing...",
    ph_auto_student: "Talaba kartasidan avtomatik olinadi...",
    ph_hemis_bulk: "Azizbek Toşpölatov | TR-101 | 1 | E | +998 90 411 22 01\nNilufar Boboyeva | MH-202 | 2 | A | +998 90 911 77 07",
    ph_ev_title: "TR-101 guruhida tyutorlik soati",
    ph_ev_desc: "204-auditoriya, asosiy bino...",
    ph_nu_name: "A. Karimov",
    ph_chat_group_name: "Masalan: 1-kurs tyutorlari",
    ph_chat_member_search: "Foydalanuvçini qidiriş...",
    ph_task_title: "Masalan: Yotoqxonada davomatni tekşiriş",
    ph_task_todo: "Band qöşiş...",
    ph_poll_q: "Savol kiriting...",
    ttl_theme: "Mavzuni özgartiriş",
    ttl_new_chat: "Yangi çat / Guruh",
    ttl_notifs: "Bildirişnomalar",
    ttl_close: "Yopiş",
    ttl_attach: "Fayl biriktiriş",
    ttl_emoji: "Emozi",
    ttl_send: "Yuboriş"
  }
};

function t(ruText, ozText) {
  return currentLang === "oz" ? ozText : ruText;
}

const STORAGE_KEY = "mytutors_uz_state_v3";
const SESSION_USER_KEY = "mytutors_uz_session_user_v1";
const SESSION_TOKEN_KEY = "mytutors_uz_session_token_v1";
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyTLIm6lvnKEE2Ol1JlylHM3QCuhJu_-7Cz0eB_8xBhsFdOhBUQmQ8FrZR4b2hPUq4y/exec";
let sessionToken = localStorage.getItem(SESSION_TOKEN_KEY) || "";

// Учетные записи хранятся исключительно на сервере (users.json в Google Drive)
const DEFAULT_USERS = [];

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
  { value: "Долг по контракту", ru: "Долг по контракту", oz: "Kontrakt qarzi" },
  { value: "В отношениях с...", ru: "В отношениях с...", oz: "Munosabatda...", adminOnly: true },
  { value: "Другое...", ru: "Другое...", oz: "Boşqa..." }
];

const DORM_CHECK_CATEGORIES = [
  { value: "Санитарно-гигиеническая ситуация", ru: "Санитарно-гигиеническая ситуация", oz: "Sanitariya-gigiyena holati" },
  { value: "Коммунальные проблемы", ru: "Коммунальные проблемы", oz: "Kommunal muammolar" },
  { value: "Проблема с конкретными жильцами", ru: "Проблема с конкретным(и) жильцами", oz: "Ayrim xonadoşlar bilan muammo" },
  { value: "Неуплата за жильё", ru: "Неуплата за жильё", oz: "Turar joy tölovi qarzi" },
  { value: "Запрос о переселении", ru: "Запрос о переселении", oz: "Köçiriş sörovi" },
  { value: "Профилактическая беседа", ru: "Профилактическая беседа", oz: "Profilaktik suhbat" },
  { value: "Конфликт с...", ru: "Конфликт с...", oz: "... bilan nizo", adminOnly: true },
  { value: "Свободный текст", ru: "Свободный текст", oz: "Erkin matn" }
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



// ==================== ПАГИНАЦИЯ (СТРАНИЦЫ ДЛЯ ТАБЛИЦ И ЛЕНТ) ====================
const PAGE_LIMITS = {
  students: 30,
  telegram: 10,
  monitoring: 10,
  users: 20
};

const paginationState = {
  students: 1,
  telegram: 1,
  monitoring: 1,
  users: 1
};

function paginateList(list, key) {
  const limit = PAGE_LIMITS[key] || 20;
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  let page = Number(paginationState[key]) || 1;
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;
  paginationState[key] = page;
  const start = (page - 1) * limit;
  const items = list.slice(start, start + limit);
  return { items, page, totalPages, total, start, limit };
}

function renderPaginationBar(key, pageInfo, onPageFnName) {
  if (!pageInfo || pageInfo.totalPages <= 1) return "";
  const { page, totalPages, total, start, items } = pageInfo;
  const fromNum = start + 1;
  const toNum = start + items.length;

  const pages = [];
  for (let p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || Math.abs(p - page) <= 1) {
      pages.push(p);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return `
    <div class="pagination-bar">
      <div class="pagination-info">${t("Показано", "Körsatilmoqda")}: ${fromNum}–${toNum} ${t("из", "dan")} ${total}</div>
      <div class="pagination-btns">
        <button type="button" class="page-btn" ${page <= 1 ? "disabled" : ""} onclick="${onPageFnName}(${page - 1})" title="${t("Предыдущая страница", "Oldingi sahifa")}">←</button>
        ${pages.map(p => p === "..."
          ? `<span class="page-ellipsis">…</span>`
          : `<button type="button" class="page-btn ${p === page ? 'active' : ''}" onclick="${onPageFnName}(${p})">${p}</button>`
        ).join("")}
        <button type="button" class="page-btn" ${page >= totalPages ? "disabled" : ""} onclick="${onPageFnName}(${page + 1})" title="${t("Следующая страница", "Keyingi sahifa")}">→</button>
      </div>
    </div>
  `;
}

function goToStudentsPage(p) {
  paginationState.students = p;
  renderStudentsAllTable();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToTelegramPage(p) {
  paginationState.telegram = p;
  renderTelegramSection();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToMonitoringPage(p) {
  paginationState.monitoring = p;
  renderMonitoringCardsList();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToUsersPage(p) {
  paginationState.users = p;
  renderUsersAdminTableRows();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==================== МОБИЛЬНОЕ ГАМБУРГЕР-МЕНЮ ====================
let mobileMenuOpen = false;

function toggleMobileMenu(forceState) {
  const drawer = document.getElementById("mobileDrawer");
  const backdrop = document.getElementById("mobileDrawerBackdrop");
  const iconOpen = document.getElementById("mobileMenuIconOpen");
  const iconClose = document.getElementById("mobileMenuIconClose");
  if (!drawer || !backdrop) return;

  mobileMenuOpen = typeof forceState === "boolean" ? forceState : !mobileMenuOpen;
  drawer.classList.toggle("open", mobileMenuOpen);
  backdrop.classList.toggle("hidden", !mobileMenuOpen);
  drawer.setAttribute("aria-hidden", mobileMenuOpen ? "false" : "true");
  if (iconOpen) iconOpen.classList.toggle("hidden", mobileMenuOpen);
  if (iconClose) iconClose.classList.toggle("hidden", !mobileMenuOpen);
}

function mobileNavAction(tabName) {
  toggleMobileMenu(false);
  switchTab(tabName);
}

function toggleMobileProfileSubmenu() {
  const block = document.getElementById("mobileProfileBlock");
  const sub = document.getElementById("mobileProfileSubmenu");
  if (!block || !sub) return;
  const isHidden = sub.classList.toggle("hidden");
  block.classList.toggle("open", !isHidden);
}

// ==================== КАСТОМНЫЙ ПЛАВНЫЙ ТУЛТИП (СЛЕДУЕТ ЗА КУРСОРОМ) ====================
(function initSmartTooltip() {
  let activeEl = null;
  let lastX = 0;
  let lastY = 0;

  function getTipEl() {
    return document.getElementById("smartTooltip");
  }

  function positionTip(x, y) {
    const tip = getTipEl();
    if (!tip || tip.classList.contains("hidden")) return;
    const pad = 12;
    const offset = 14;
    const rect = tip.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let left = x + offset;
    let top = y + offset;

    if (left + rect.width + pad > vw) {
      left = x - rect.width - offset;
    }
    if (left < pad) left = pad;

    if (top + rect.height + pad > vh) {
      top = y - rect.height - offset;
    }
    if (top < pad) top = pad;

    tip.style.transform = `translate3d(${Math.round(left)}px, ${Math.round(top)}px, 0) scale(1)`;
  }

  function showTip(el, text, x, y) {
    const tip = getTipEl();
    if (!tip || !text) return;
    activeEl = el;
    tip.textContent = text;
    tip.classList.remove("hidden");
    positionTip(x, y);
    requestAnimationFrame(() => tip.classList.add("visible"));
  }

  function hideTip() {
    const tip = getTipEl();
    activeEl = null;
    if (!tip) return;
    tip.classList.remove("visible");
    tip.classList.add("hidden");
  }

  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest("[title], [data-smart-title]");
    if (!target) {
      if (activeEl) hideTip();
      return;
    }
    const nativeTitle = target.getAttribute("title");
    if (nativeTitle) {
      target.setAttribute("data-smart-title", nativeTitle);
      target.removeAttribute("title");
    }
    const text = target.getAttribute("data-smart-title");
    if (!text) return;
    lastX = e.clientX;
    lastY = e.clientY;
    showTip(target, text, lastX, lastY);
  }, true);

  document.addEventListener("mousemove", (e) => {
    if (!activeEl) return;
    lastX = e.clientX;
    lastY = e.clientY;
    positionTip(lastX, lastY);
  }, true);

  document.addEventListener("mouseout", (e) => {
    if (!activeEl) return;
    const related = e.relatedTarget;
    if (!related || !activeEl.contains(related)) {
      hideTip();
    }
  }, true);

  window.addEventListener("scroll", hideTip, true);
  document.addEventListener("mousedown", hideTip, true);
  document.addEventListener("touchstart", hideTip, true);
})();

// ==================== ОНЛАЙН-СТАТУС И РОЛЕВЫЕ ПЛАШКИ ПОЛЬЗОВАТЕЛЕЙ ====================
let onlineUserIds = new Set();

function isUserOnline(userId) {
  if (!userId) return false;
  if (currentUser && userId === currentUser.id) return true;
  return onlineUserIds.has(userId);
}

function renderOnlineDotHtml(userId) {
  return isUserOnline(userId) ? '<span class="online-pulse-dot" title="Online"></span>' : '';
}

function renderUserBadgeHtml(userOrId, opts = {}) {
  const user = typeof userOrId === "string"
    ? (appState.users || []).find(u => u.id === userOrId)
    : userOrId;
  if (!user) {
    const fallback = opts.fallback || "—";
    return `<span class="st-meta">${fallback}</span>`;
  }
  const role = user.role || "tutor";
  const dot = renderOnlineDotHtml(user.id);
  const extraCls = [
    "user-role-pill",
    `role-${role}`,
    opts.clickable ? "clickable" : "",
    opts.active ? "active" : "",
    opts.extraClass || ""
  ].filter(Boolean).join(" ");
  const label = opts.prefix ? `${opts.prefix}${user.name}` : user.name;
  const titleAttr = opts.title ? ` title="${String(opts.title).replace(/"/g, '&quot;')}"` : "";
  if (opts.onclick) {
    return `<button type="button" class="${extraCls}" onclick="${opts.onclick}"${titleAttr}>${dot}<span>${label}</span></button>`;
  }
  return `<span class="${extraCls}"${titleAttr}>${dot}<span>${label}</span></span>`;
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
    dormLogs: deduplicateById(base.dormLogs || []),
    rentLogs: deduplicateById(base.rentLogs || []),
    schedule: deduplicateById(base.schedule || []),
    calendarEvents: deduplicateById(base.calendarEvents || []),
    blogPosts: deduplicateById(base.blogPosts || []),
    todos: deduplicateById(base.todos || []),
    customTags: Array.isArray(base.customTags) ? [...new Set(base.customTags.filter(Boolean))] : [],
    recentTags: Array.isArray(base.recentTags) ? [...new Set(base.recentTags.filter(Boolean))] : [],
    customVolunteers: Array.isArray(base.customVolunteers) ? [...new Set(base.customVolunteers.filter(Boolean))] : [],
    customSocialCategories: Array.isArray(base.customSocialCategories) ? [...new Set(base.customSocialCategories.filter(Boolean))] : [],
    chats: deduplicateById(base.chats || []),
    tasks: deduplicateById(base.tasks || []),
    notifications: deduplicateById(base.notifications || [])
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
      dormLogs: appState.dormLogs.filter(d => d.tutorId === currentUser.id),
      rentLogs: appState.rentLogs.filter(r => r.tutorId === currentUser.id),
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
    dormLogs: appState.dormLogs.filter(d => d.tutorId === currentUser.id),
    rentLogs: appState.rentLogs.filter(r => r.tutorId === currentUser.id),
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
        token: sessionToken,
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
    dormLogs: appState.dormLogs.filter(d => d.tutorId === tutorId),
    rentLogs: appState.rentLogs.filter(r => r.tutorId === tutorId),
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
      token: sessionToken,
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
  if (!e.target.closest("#chatAttachWrap")) {
    const am = document.getElementById("chatAttachMenu"); if (am) am.classList.add("hidden");
  }
  if (!e.target.closest("#chatEmojiWrap")) {
    const ep = document.getElementById("chatEmojiPopover"); if (ep) ep.classList.add("hidden");
  }
  if (!e.target.closest("#chatNotifWrap")) {
    const nd = document.getElementById("chatNotifDropdown"); if (nd) nd.classList.add("hidden");
  }
  if (!e.target.closest(".chat-dd-wrap")) {
    document.querySelectorAll(".chat-dd-menu").forEach(m => m.classList.add("hidden"));
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
  const mSlider = document.getElementById("mobileLangSlider");
  if (mSlider) mSlider.style.transform = lang === "oz" ? "translateX(38px)" : "translateX(0)";
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

  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.dataset.i18nTitle;
    if (I18N[lang] && I18N[lang][key]) {
      const txt = I18N[lang][key];
      if (el.hasAttribute("data-smart-title")) {
        el.setAttribute("data-smart-title", txt);
      } else {
        el.setAttribute("title", txt);
      }
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
  const mMoon = document.getElementById("mobileThemeIconMoon");
  const mSun = document.getElementById("mobileThemeIconSun");
  if (mMoon) mMoon.classList.toggle("hidden", isDark);
  if (mSun) mSun.classList.toggle("hidden", !isDark);
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
function handleSessionExpired() {
  if (!currentUser) return;
  logout();
  showToast(t("Сессия истекла. Войдите снова.", "Sessiya muddati tugadi. Qayta kiring."));
}

async function loadFromGoogleDrive() {
  if (!currentUser || !sessionToken || typeof APPS_SCRIPT_URL === "undefined" || !APPS_SCRIPT_URL.includes("/exec")) return;
  showToast(t("Загрузка базы из Google Drive...", "Google Drive dan ma’lumotlar yuklanmoqda..."));
  try {
    const url = `${APPS_SCRIPT_URL}?token=${encodeURIComponent(sessionToken)}&t=${Date.now()}`;
    const res = await fetch(url, { method: "GET", redirect: "follow" });
    const json = await res.json();
    if (json && json.status === "unauthorized") {
      handleSessionExpired();
      return;
    }

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
          dormLogs: (incoming.dormLogs || []).filter(d => d.tutorId === currentUser.id),
          rentLogs: (incoming.rentLogs || []).filter(r => r.tutorId === currentUser.id),
          schedule: incoming.schedule || [],
          calendarEvents: (incoming.calendarEvents || []).filter(ev => ev.userId === currentUser.id),
          blogPosts: (incoming.blogPosts || []).filter(b => b.userId === currentUser.id),
          todos: (incoming.todos || []).filter(td => td.userId === currentUser.id),
          customTags: incoming.customTags || appState.customTags || [],
          recentTags: incoming.recentTags || appState.recentTags || [],
          customVolunteers: incoming.customVolunteers || appState.customVolunteers || [],
          customSocialCategories: incoming.customSocialCategories || appState.customSocialCategories || [],
          chats: appState.chats || [],
          tasks: appState.tasks || [],
          notifications: appState.notifications || []
        });
      } else {
        // Админ/руководство получает объединенный и дедуплицированный реестр по всем папкам
        appState = sanitizeAppState({
          users: (Array.isArray(incoming.users) && incoming.users.length) ? incoming.users : savedUsers,
          students: incoming.students || [],
          tgPosts: incoming.tgPosts || [],
          monitoring: incoming.monitoring || [],
          parentMeetings: incoming.parentMeetings || [],
          dormLogs: incoming.dormLogs || [],
          rentLogs: incoming.rentLogs || [],
          schedule: incoming.schedule || [],
          calendarEvents: (incoming.calendarEvents || []).filter(ev => ev.userId === currentUser.id),
          blogPosts: (incoming.blogPosts || []).filter(b => b.userId === currentUser.id),
          todos: (incoming.todos || []).filter(td => td.userId === currentUser.id),
          customTags: incoming.customTags || appState.customTags || [],
          recentTags: incoming.recentTags || appState.recentTags || [],
          customVolunteers: incoming.customVolunteers || appState.customVolunteers || [],
          customSocialCategories: incoming.customSocialCategories || appState.customSocialCategories || [],
          chats: appState.chats || [],
          tasks: appState.tasks || [],
          notifications: appState.notifications || []
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
    showToast(t("Работаем с локальной копией данных", "Lokal keşdan foydalanilmoqda"));
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
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        action: "login",
        login,
        pass
      })
    });
    const json = await res.json();

    if (!json || json.status !== "ok" || !json.token || !json.user) {
      errEl.textContent = t("Неверный логин или пароль профиля.", "Login yoki parol notöğri kiritildi.");
      errEl.classList.remove("hidden");
      return;
    }

    sessionToken = json.token;
    localStorage.setItem(SESSION_TOKEN_KEY, sessionToken);
    currentUser = json.user;
    if (Array.isArray(json.users) && json.users.length) {
      appState.users = deduplicateById(json.users);
    } else {
      appState.users = [json.user];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));

    selectedPostAuthorId = currentUser.id;
    localStorage.setItem(SESSION_USER_KEY, currentUser.id);
    document.getElementById("authScreen").classList.add("hidden");
    document.getElementById("appShell").classList.remove("hidden");
    const chatLaunch = document.getElementById("floatingChatLauncher"); if (chatLaunch) chatLaunch.classList.remove("hidden");
    document.getElementById("navUsersBtn").classList.toggle("hidden", currentUser.role !== "admin");
    const mUsersBtn = document.getElementById("mobileNavUsersBtn"); if (mUsersBtn) mUsersBtn.classList.toggle("hidden", currentUser.role !== "admin");

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
    startChatHubPolling();
  } catch (err) {
    errEl.textContent = t("Ошибка соединения с сервером авторизации.", "Avtorizatsiya serveri bilan ulanişda xatolik.");
    errEl.classList.remove("hidden");
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

function logout() {
  const tokenToRevoke = sessionToken;
  if (tokenToRevoke && typeof APPS_SCRIPT_URL !== "undefined" && APPS_SCRIPT_URL.includes("/exec")) {
    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action: "logout", token: tokenToRevoke })
    }).catch(() => {});
  }
  currentUser = null;
  sessionToken = "";
  localStorage.removeItem(SESSION_TOKEN_KEY);
  localStorage.removeItem(SESSION_USER_KEY);
  localStorage.removeItem(STORAGE_KEY);
  appState = sanitizeAppState(null);

  document.getElementById("appShell").classList.add("hidden");
  const chatLaunch = document.getElementById("floatingChatLauncher"); if (chatLaunch) chatLaunch.classList.add("hidden");
  stopChatHubPolling();
  toggleChatDrawer(false);
  document.getElementById("authScreen").classList.remove("hidden");
  document.getElementById("loginPassword").value = "";
}

function restoreSession() {
  const savedLang = localStorage.getItem("mytutors_lang_v1");
  if (savedLang === "oz" || savedLang === "ru") {
    setLanguage(savedLang);
  }

  sessionToken = localStorage.getItem(SESSION_TOKEN_KEY) || "";
  const savedId = localStorage.getItem(SESSION_USER_KEY);
  if (!savedId || !sessionToken || !Array.isArray(appState.users)) return;

  const found = appState.users.find(u => u.id === savedId);
  if (!found) return;

  currentUser = found;
  selectedPostAuthorId = found.id;
  document.getElementById("authScreen").classList.add("hidden");
  document.getElementById("appShell").classList.remove("hidden");
  const chatLaunch = document.getElementById("floatingChatLauncher"); if (chatLaunch) chatLaunch.classList.remove("hidden");
  document.getElementById("navUsersBtn").classList.toggle("hidden", currentUser.role !== "admin");
    const mUsersBtn = document.getElementById("mobileNavUsersBtn"); if (mUsersBtn) mUsersBtn.classList.toggle("hidden", currentUser.role !== "admin");

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
  startChatHubPolling();
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
  document.getElementById("headerUserName").innerHTML = `${renderOnlineDotHtml(currentUser.id)} ${currentUser.name}`;
  document.getElementById("headerUserRole").textContent = localizeRoleTitle(currentUser.role, currentUser.roleTitle);
  document.getElementById("driveTooltip").textContent = `Google Drive: ${currentUser.driveFolder}`;
  const mAv = document.getElementById("mobileUserAvatar");
  if (mAv) mAv.innerHTML = currentUser.photo ? `<img src="${currentUser.photo}" alt="Avatar" />` : initials;
  const mName = document.getElementById("mobileUserName");
  if (mName) mName.innerHTML = `${renderOnlineDotHtml(currentUser.id)} ${currentUser.name}`;
  const mRole = document.getElementById("mobileUserRole");
  if (mRole) mRole.textContent = localizeRoleTitle(currentUser.role, currentUser.roleTitle);
  const mDrive = document.getElementById("mobileDriveTooltip");
  if (mDrive) mDrive.textContent = `Google Drive: ${currentUser.driveFolder}`;

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
  document.querySelectorAll(".nav-item, .mobile-nav-item").forEach(btn => {
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
  if (typeof updateChatIndicators === "function") updateChatIndicators();
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

  renderDistModeSelect();
  renderCharts();
}

function renderDistModeSelect() {
  const opts = [
    { value: "housing", label: t("По жилью", "Turar joy böyiça") },
    { value: "social", label: t("По соцреестру", "Ijtimoiy reestr") },
    { value: "employment", label: t("По работе", "Iş bilan bandlik") },
    { value: "studyForm", label: t("По форме обучения", "Ta’lim şakli böyiça") },
    { value: "volunteers", label: t("По волонтерству", "Volontyorlik böyiça") },
    { value: "region", label: t("По регионам", "Hududlar böyiça") },
    { value: "marital", label: t("Семейный статус", "Oilaviy holati") }
  ];
  renderCustomSelect("distModeSelectWrap", opts, distChartMode, (val) => {
    setDistMode(val);
  });
}

function setDistMode(mode) {
  distChartMode = mode;
  distSelectedGroup = "all";
  renderDistModeSelect();
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
  } else if (distChartMode === "marital") {
    const nonDivorced = students.filter(s => s.maritalStatus !== "divorced");
    const marriedCount = nonDivorced.filter(s => s.maritalStatus === "married").length;
    const singleCount = nonDivorced.filter(s => s.maritalStatus !== "married").length;

    if (dashFilters.gender === "М") {
      labels = currentLang === "oz"
        ? ["Uylanganlar", "Böydoqlar"]
        : ["Женаты", "Холосты"];
    } else if (dashFilters.gender === "Ж") {
      labels = currentLang === "oz"
        ? ["Turmuşga çiqqanlar", "Turmuşga çiqmaganlar"]
        : ["Замужем", "Не замужем"];
    } else {
      labels = currentLang === "oz"
        ? ["Oilalilar", "Turmuş qurmaganlar"]
        : ["Семейные", "Холостые"];
    }
    series = [marriedCount, singleCount];
    colors = ["#ff6b3d", "#2563eb"];
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
              <div><strong>${t("Зарплата", "Maoş")}:</strong> ${formatSalaryUZS(s.empSalary)}</div>
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
            ${(() => {
              const pg = paginateList(list, "students");
              window._lastStPg = pg;
              return pg.items;
            })().map(s => {
              const tutor = appState.users.find(u => u.id === s.tutorId);
              const empBadge = s.employed
                ? `<span class="badge-pill work">${t("Трудоустроен", "Işlaydi")}${s.empOrg ? ` • ${s.empOrg}` : ""}</span>`
                : `<span class="badge-pill unemployed">${t("Не трудоустроен", "Işlamaydi")}</span>`;
              const isTutorActive = studentListFilters.tutors.includes(s.tutorId);
              const tutorCellHtml = tutor
                ? (isTutorOnly()
                    ? renderUserBadgeHtml(tutor)
                    : renderUserBadgeHtml(tutor, { clickable: true, active: isTutorActive, onclick: `filterStudentsByTutorClick('${tutor.id}')`, title: t("Фильтровать по этому тютору", "Uşbu tyutor böyiça filtrlaş") }))
                : "—";
              return `
                <tr>
                  <td>
                    <div class="st-name-with-thumb">
                      ${renderStudentThumbHtml(s)}
                      <strong>${s.name}</strong>
                    </div>
                  </td>
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
    ${renderPaginationBar("students", window._lastStPg, "goToStudentsPage")}
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
  employed: "no",
  maritalStatus: "single",
  photo: ""
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
    employed: st && st.employed ? "yes" : "no",
    maritalStatus: st && st.maritalStatus ? st.maritalStatus : "single",
    photo: st && st.photo ? st.photo : ""
  };
  renderStudentPhotoPreview();

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
    renderMaritalStatusSelector();
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
  renderMaritalStatusSelector(st);

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


function renderStudentPhotoPreview() {
  const prev = document.getElementById("stPhotoPreview");
  const removeBtn = document.getElementById("stPhotoRemoveBtn");
  if (!prev) return;
  const nameVal = (document.getElementById("stFullName") ? document.getElementById("stFullName").value.trim() : "") || "ST";
  const initials = nameVal.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase() || "ST";
  if (modalStudentState.photo) {
    prev.innerHTML = `<img src="${modalStudentState.photo}" alt="Student" style="cursor:zoom-in;" onclick="openLightbox('${modalStudentState.photo}')" />`;
    if (removeBtn) removeBtn.classList.remove("hidden");
  } else {
    prev.innerHTML = initials;
    if (removeBtn) removeBtn.classList.add("hidden");
  }
}

function handleStudentPhotoUpload(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    compressAvatarDataUrl(reader.result, (compressed) => {
      modalStudentState.photo = compressed;
      renderStudentPhotoPreview();
      showToast(t("Фото студента загружено", "Talaba rasmi yuklandi"));
    });
  };
  reader.readAsDataURL(file);
  e.target.value = "";
}

function removeStudentPhoto() {
  modalStudentState.photo = "";
  renderStudentPhotoPreview();
}

function getMaritalStatusOptions(gender) {
  if (gender === "Ж") {
    return [
      { value: "single", label: t("Не замужем", "Turmuşga çiqmagan") },
      { value: "married", label: t("Замужем", "Turmuşga çiqqan") },
      { value: "divorced", label: t("Разведена", "Ajraşgan") }
    ];
  }
  return [
    { value: "single", label: t("Холост", "Böydoq") },
    { value: "married", label: t("Женат", "Uylangan") },
    { value: "divorced", label: t("Разведен", "Ajraşgan") }
  ];
}

function renderMaritalStatusSelector(st = null) {
  const opts = getMaritalStatusOptions(modalStudentState.gender);
  renderCustomSelect("stMaritalStatusWrap", opts, modalStudentState.maritalStatus || "single", (val) => {
    modalStudentState.maritalStatus = val;
    renderMaritalStatusSelector(st);
  });

  const extraBox = document.getElementById("maritalExtraFields");
  if (!extraBox) return;
  const isMarried = modalStudentState.maritalStatus === "married";
  extraBox.classList.toggle("hidden", !isMarried);

  if (st) {
    const spName = document.getElementById("stSpouseName");
    const spBirth = document.getElementById("stSpouseBirth");
    const chCount = document.getElementById("stChildrenCount");
    if (spName) spName.value = st.spouseName || "";
    if (spBirth) spBirth.value = st.spouseBirth || "";
    if (chCount) chCount.value = st.childrenCount !== undefined && st.childrenCount !== "" ? st.childrenCount : "";
  } else if (!isMarried) {
    const spName = document.getElementById("stSpouseName");
    const spBirth = document.getElementById("stSpouseBirth");
    const chCount = document.getElementById("stChildrenCount");
    if (spName && !spName.value) spName.value = "";
    if (spBirth && !spBirth.value) spBirth.value = "";
    if (chCount && !chCount.value) chCount.value = "";
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
    photo: modalStudentState.photo || "",
    maritalStatus: modalStudentState.maritalStatus || "single",
    spouseName: modalStudentState.maritalStatus === "married" && document.getElementById("stSpouseName") ? document.getElementById("stSpouseName").value.trim() : "",
    spouseBirth: modalStudentState.maritalStatus === "married" && document.getElementById("stSpouseBirth") ? document.getElementById("stSpouseBirth").value : "",
    childrenCount: modalStudentState.maritalStatus === "married" && document.getElementById("stChildrenCount") ? document.getElementById("stChildrenCount").value : "",
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
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
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
    html += `<div class="cs-divider-label">${t("Внешние партнёры (для этого поста)", "Taşqi hamkorlar (uşbu post uçun)")}</div>`;
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
      <button type="button" class="btn-export sm" onclick="resetTgAuthorFilter()">${t("Сбросить фильтр", "Filtrni tozalaş")}</button>
    </div>
  ` : "";

  const listEl = document.getElementById("tgPostsList");
  if (!posts.length) {
    listEl.innerHTML = authorFilterBannerHtml + `<div class="empty-state">${t(
      "Загруженных постов из Telegram пока нет. Вставьте ссылку формата https://t.me/studlifeuniv/12028 выше.",
      "Telegram dan yuklangan postlar hozirça yöq. Yuqorida https://t.me/studlifeuniv/12028 şaklidagi havolani kiriting."
    )}</div>`;
  } else {
    const tgPg = paginateList(posts, "telegram");
    listEl.innerHTML = authorFilterBannerHtml + tgPg.items.map(p => {
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
            return uObj
              ? renderUserBadgeHtml(uObj, { clickable: true, active: activeTgAuthorFilter === c.id, onclick: `setTgAuthorFilter('${c.id}')` })
              : `<button type="button" class="collab-pill clickable ${activeTgAuthorFilter === c.id ? 'active' : ''}" onclick="setTgAuthorFilter('${c.id}')">${displayName}</button>`;
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
            <div class="post-images" data-post-id="${p.id}">
              ${cleanImages.map(img => `<img src="${img}" alt="TG" loading="lazy" onclick="openLightbox('${img}')" onerror="refreshExpiredTgPostImages('${p.id}', this)" />`).join("")}
            </div>
          ` : ""}
          <div class="post-collab-bar">
            <span>${t("Автор:", "Muallif:")}</span>
            ${authorUser
              ? renderUserBadgeHtml(authorUser, { clickable: true, active: activeTgAuthorFilter === authorUser.id, onclick: `setTgAuthorFilter('${authorUser.id}')` })
              : `<span class="collab-pill custom-static">${authorName}</span>`}
            ${collabsHtml}
          </div>
        </div>
      `;
    }).join("") + renderPaginationBar("telegram", tgPg, "goToTelegramPage");
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


const tgRefreshingPosts = new Set();
const tgRefreshedPosts = new Set();

async function refreshExpiredTgPostImages(postId, imgEl) {
  if (imgEl) imgEl.onerror = null;
  if (!postId || tgRefreshingPosts.has(postId) || tgRefreshedPosts.has(postId)) return;

  const post = (appState.tgPosts || []).find(p => p.id === postId);
  if (!post || !post.url) return;

  tgRefreshingPosts.add(postId);
  try {
    const endpoint = `${TELEGRAM_WORKER_URL.replace(/\/+$/, "")}/tg?url=${encodeURIComponent(post.url)}`;
    const res = await fetch(endpoint, { method: "GET", redirect: "follow" });
    const data = await res.json();

    if (data && data.ok && Array.isArray(data.images)) {
      const freshImages = data.images.filter(isRealPostPhoto);
      if (freshImages.length) {
        post.images = freshImages;
        saveState();
        if (post.authorId) syncSpecificTutorFolder(post.authorId);

        const wrap = document.querySelector(`.post-images[data-post-id="${postId}"]`);
        if (wrap) {
          wrap.innerHTML = freshImages
            .map(img => `<img src="${img}" alt="TG" loading="lazy" onclick="openLightbox('${img}')" />`)
            .join("");
        }
      }
    }
  } catch (err) {
    console.warn("Не удалось обновить изображения Telegram-поста:", err);
  } finally {
    tgRefreshingPosts.delete(postId);
    tgRefreshedPosts.add(postId);
  }
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
    showToast(t("Недостаточно прав для редактирования", "Tahrirlaş uçun ruxsat yetarli emas"));
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
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
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
    showToast(t("За выбранный период нет публикаций для отчета", "Tanlangan davrda hisobot uçun postlar yöq"));
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
    showToast(t("Не задан APPS_SCRIPT_URL в js/app.js", "js/app.js faylida APPS_SCRIPT_URL kiritilmagan"));
    return;
  }

  showToast(t("Отправка отчета в Google Doc...", "Google Doc ga yuborilmoqda..."));

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        action: "appendReportToDoc",
        token: sessionToken,
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

function openLightbox(src, captionHtml = "") {
  document.getElementById("lightboxImg").src = src;
  const capEl = document.getElementById("lightboxCaption");
  if (capEl) {
    if (captionHtml) {
      capEl.innerHTML = captionHtml;
      capEl.classList.remove("hidden");
    } else {
      capEl.innerHTML = "";
      capEl.classList.add("hidden");
    }
  }
  document.getElementById("lightboxModal").classList.remove("hidden");
}

function openStudentPhotoLightbox(studentId) {
  const s = (appState.students || []).find(x => x.id === studentId);
  if (!s || !s.photo) return;
  const tutor = appState.users.find(u => u.id === s.tutorId);
  const caption = `
    <div class="lb-cap-name">${s.name}</div>
    <div class="lb-cap-meta">${s.course} ${t("курс", "kurs")} • ${s.group} • ${t("Тютор", "Tyutor")}: ${tutor ? tutor.name : "—"}</div>
  `;
  openLightbox(s.photo, caption);
}

function renderStudentThumbHtml(s) {
  if (s && s.photo) {
    return `
      <button type="button" class="st-thumb-box has-photo" onclick="openStudentPhotoLightbox('${s.id}')" title="${t("Открыть фото", "Rasmni oçiş")}">
        <img src="${s.photo}" alt="${(s.name || "").replace(/"/g, '&quot;')}" />
      </button>
    `;
  }
  return `
    <span class="st-thumb-box no-photo" title="${t("Фото не загружено", "Rasm yuklanmagan")}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>
    </span>
  `;
}

// ==================== 4. ДНЕВНИКИ (МОНИТОРИНГ + РОДИТЕЛИ) ====================
let monListFilters = { search: "", tutors: [], groups: [], categories: [], dateFrom: "", dateTo: "" };
let pmListFilters = { search: "", tutors: [], groups: [], dateFrom: "", dateTo: "" };
let diaryMultiSearchMap = {};

function setDiarySubtab(sub) {
  activeDiarySubtab = sub;
  document.getElementById("diaryTabMonitoring").classList.toggle("active", sub === "monitoring");
  document.getElementById("diaryTabParents").classList.toggle("active", sub === "parents");
  const dormBtn = document.getElementById("diaryTabDorm");
  if (dormBtn) dormBtn.classList.toggle("active", sub === "dorm");
  const rentBtn = document.getElementById("diaryTabRent");
  if (rentBtn) rentBtn.classList.toggle("active", sub === "rent");
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

  if (activeDiarySubtab === "dorm") {
    area.innerHTML = `
      <div class="subtabs-row">
        <div>
          <h3 class="card-title">${t("Дневник проверок общежития", "Yotoqxona tekşiruvlari kundaligi")}</h3>
          <p class="card-sub">${t("Учет состояния комнат, жильцов, коммунальных и воспитательных вопросов", "Xonalar holati, yotoqxona aholisi, kommunal va tarbiyaviy masalalar hisobi")}</p>
        </div>
        <button type="button" class="btn-orange" onclick="openDormLogModal()">+ ${t("Зафиксировать изучение", "Örganişni qayd etiş")}</button>
      </div>

      <div class="diary-list-toolbar">
        <div class="st-search-box diary-list-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>
          <input type="text" id="dormListSearchInput" placeholder="${t("Поиск по комнате, студенту, тексту...", "Xona, talaba, matn böyiça qidiriş...")}" value="${dormListFilters.search.replace(/"/g, '&quot;')}" oninput="dormListFilters.search=this.value; renderDormLogsList()" />
        </div>
        <div class="diary-list-filters">
          <div class="custom-select ${isTutorOnly() ? 'hidden' : ''}" id="dormListTutorFilterWrap"></div>
          <div class="custom-select" id="dormListRoomFilterWrap"></div>
          <div class="custom-select" id="dormListCatFilterWrap"></div>
          <input type="date" id="dormListDateFrom" class="form-input diary-date-input" value="${dormListFilters.dateFrom}" title="${t("Дата с", "Sana (dan)")}" onchange="dormListFilters.dateFrom=this.value; renderDormLogsList()" />
          <input type="date" id="dormListDateTo" class="form-input diary-date-input" value="${dormListFilters.dateTo}" title="${t("Дата по", "Sana (gaça)")}" onchange="dormListFilters.dateTo=this.value; renderDormLogsList()" />
          <button type="button" id="dormListResetBtn" class="btn-export sm hidden" onclick="resetDormListFilters()">${t("Сбросить", "Tozalaş")}</button>
        </div>
      </div>

      <div id="dormLogsCardsContainer"></div>
    `;

    renderDormListFilterControls();
    renderDormLogsList();
    return;
  }

  if (activeDiarySubtab === "rent") {
    area.innerHTML = `
      <div class="subtabs-row">
        <div>
          <h3 class="card-title">${t("Дневник проверок съемных квартир", "Ijara xonadonlarni tekşiriş kundaligi")}</h3>
          <p class="card-sub">${t("Учет условий проживания, владельцев, коммунальных и воспитательных вопросов", "Yaşaş şaroitlari, uy egalari, kommunal va tarbiyaviy masalalar hisobi")}</p>
        </div>
        <button type="button" class="btn-orange" onclick="openRentLogModal()">+ ${t("Зафиксировать изучение", "Örganişni qayd etiş")}</button>
      </div>

      <div class="diary-list-toolbar">
        <div class="st-search-box diary-list-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>
          <input type="text" id="rentListSearchInput" placeholder="${t("Поиск по студенту, адресу, владельцу, тексту...", "Talaba, manzil, uy egasi, matn böyiça qidiriş...")}" value="${rentListFilters.search.replace(/"/g, '&quot;')}" oninput="rentListFilters.search=this.value; renderRentLogsList()" />
        </div>
        <div class="diary-list-filters">
          <div class="custom-select ${isTutorOnly() ? 'hidden' : ''}" id="rentListTutorFilterWrap"></div>
          <div class="custom-select" id="rentListCatFilterWrap"></div>
          <input type="date" id="rentListDateFrom" class="form-input diary-date-input" value="${rentListFilters.dateFrom}" title="${t("Дата с", "Sana (dan)")}" onchange="rentListFilters.dateFrom=this.value; renderRentLogsList()" />
          <input type="date" id="rentListDateTo" class="form-input diary-date-input" value="${rentListFilters.dateTo}" title="${t("Дата по", "Sana (gaça)")}" onchange="rentListFilters.dateTo=this.value; renderRentLogsList()" />
          <button type="button" id="rentListResetBtn" class="btn-export sm hidden" onclick="resetRentListFilters()">${t("Сбросить", "Tozalaş")}</button>
        </div>
      </div>

      <div id="rentLogsCardsContainer"></div>
    `;

    renderRentListFilterControls();
    renderRentLogsList();
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

  const monPg = paginateList(list, "monitoring");
  container.innerHTML = `
    <div class="diary-grid">
      ${monPg.items.map(rec => {
        const st = appState.students.find(s => s.id === rec.studentId);
        const tutor = appState.users.find(u => u.id === rec.tutorId);
        return `
          <div class="diary-card">
            <div class="st-card-top">
              <div>
                <div class="st-name">${st ? st.name : rec.studentName}</div>
                <div class="st-meta">${st ? st.group : ""} • ${t("Тютор", "Tyutor")}: ${renderUserBadgeHtml(tutor)}</div>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="badge-pill rent">${getLabelFromDict(MONITORING_CATEGORIES, rec.category)}</span>
                ${canDeleteData(rec.tutorId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteMonitoringRecord('${rec.id}', this)" title="${t("Удалить карточку", "Kartani öçiriş")}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
                </button>` : ""}
              </div>
            </div>

            ${rec.partnerName ? `
              <div class="mon-partner-card mt-10">
                <div class="mon-partner-card-title">${t("Вторая половинка", "Ikkinçi yarmi")}: ${rec.partnerName}</div>
                <div class="st-meta">${t("Курс", "Kurs")}: <strong>${rec.partnerCourse || "—"}</strong> • ${t("Группа", "Guruh")}: <strong>${rec.partnerGroup || "—"}</strong> • ${t("Тютор", "Tyutor")}: <strong>${rec.partnerTutorName || "—"}</strong></div>
              </div>
            ` : ""}
            ${rec.debtAmount ? `
              <div class="mon-debt-badge mt-10">
                <span>${t("Сумма долга по контракту", "Kontrakt qarzi")}:</span>
                <strong>${formatSalaryUZS(rec.debtAmount)}</strong>
              </div>
            ` : ""}

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
    ${renderPaginationBar("monitoring", monPg, "goToMonitoringPage")}
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
    container.innerHTML = `<div class="empty-state">${t("Записей о встречах с родителями не найдено.", "Ota-onalar bilan uçraşuv qaydlari topilmadi.")}</div>`;
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
let monSelectedPartnerId = "";
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

  monSelectedPartnerId = "";
  const availableMonCats = MONITORING_CATEGORIES.filter(c => !c.adminOnly || hasAdminPrivileges());
  const catOpts = availableMonCats.map(c => ({ value: c.value, label: currentLang === "oz" ? c.oz : c.ru }));
  const onMonCatChange = (v) => {
    monModalCategory = v;
    document.getElementById("monCustomCatWrap").classList.toggle("hidden", v !== "Другое...");
    const partnerWrap = document.getElementById("monPartnerWrap");
    if (partnerWrap) {
      partnerWrap.classList.toggle("hidden", v !== "В отношениях с...");
      if (v === "В отношениях с...") {
        renderMonPartnerSearchResults();
      }
    }
    const debtWrap = document.getElementById("monDebtWrap");
    if (debtWrap) {
      debtWrap.classList.toggle("hidden", v !== "Долг по контракту");
    }
    renderCustomSelect("monCategorySelectWrap", catOpts, v, onMonCatChange);
  };
  renderCustomSelect("monCategorySelectWrap", catOpts, monModalCategory, onMonCatChange);

  document.getElementById("monCustomCatWrap").classList.add("hidden");
  const partnerWrap = document.getElementById("monPartnerWrap");
  if (partnerWrap) partnerWrap.classList.add("hidden");
  const debtWrap = document.getElementById("monDebtWrap");
  if (debtWrap) debtWrap.classList.add("hidden");
  const debtInp = document.getElementById("monDebtAmountInput");
  if (debtInp) debtInp.value = "";
  const pSearch = document.getElementById("monPartnerSearchInput");
  if (pSearch) pSearch.value = "";
  const pRes = document.getElementById("monPartnerResultsList");
  if (pRes) { pRes.innerHTML = ""; pRes.classList.add("hidden"); }
  const pCard = document.getElementById("monPartnerInfoCard");
  if (pCard) { pCard.innerHTML = ""; pCard.classList.add("hidden"); }

  document.getElementById("monInitialNote").value = "";
  document.getElementById("monitoringModal").classList.remove("hidden");
}

function renderMonPartnerSearchResults() {
  const inp = document.getElementById("monPartnerSearchInput");
  const listEl = document.getElementById("monPartnerResultsList");
  if (!inp || !listEl) return;

  const q = inp.value.trim().toLowerCase();
  if (!q) {
    listEl.innerHTML = "";
    listEl.classList.add("hidden");
    return;
  }

  const matches = (appState.students || [])
    .filter(s => s.id !== monModalStudentId && (
      (s.name || "").toLowerCase().includes(q) ||
      (s.group || "").toLowerCase().includes(q)
    ))
    .slice(0, 8);

  listEl.classList.remove("hidden");
  if (!matches.length) {
    listEl.innerHTML = `<div class="st-meta" style="padding:8px 10px;">${t("Студент не найден", "Talaba topilmadi")}</div>`;
    return;
  }

  listEl.innerHTML = matches.map(s => {
    const tr = appState.users.find(u => u.id === s.tutorId);
    return `
      <div class="mon-partner-opt" onclick="selectMonPartner('${s.id}')">
        <div style="font-weight:700; font-size:13px;">${s.name}</div>
        <div class="st-meta">${s.course} ${t("курс", "kurs")} • ${s.group} • ${t("Тютор", "Tyutor")}: ${tr ? tr.name : "—"}</div>
      </div>
    `;
  }).join("");
}

function selectMonPartner(partnerId) {
  const partner = (appState.students || []).find(s => s.id === partnerId);
  if (!partner) return;
  monSelectedPartnerId = partner.id;
  const tr = appState.users.find(u => u.id === partner.tutorId);

  const inp = document.getElementById("monPartnerSearchInput");
  if (inp) inp.value = partner.name;
  const listEl = document.getElementById("monPartnerResultsList");
  if (listEl) listEl.classList.add("hidden");

  const card = document.getElementById("monPartnerInfoCard");
  if (card) {
    card.classList.remove("hidden");
    card.innerHTML = `
      <div class="mon-partner-card-title">${partner.name}</div>
      <div class="st-meta">${t("Курс", "Kurs")}: <strong>${partner.course}</strong> • ${t("Группа", "Guruh")}: <strong>${partner.group}</strong></div>
      <div class="st-meta">${t("Прикрепленный тютор", "Biriktirilgan tyutor")}: <strong>${tr ? tr.name : "—"}</strong></div>
    `;
  }
}

function saveMonitoringRecord() {
  const st = appState.students.find(s => s.id === monModalStudentId);
  if (!st) return;

  const finalCat = monModalCategory === "Другое..."
    ? (document.getElementById("monCustomCategoryInput").value.trim() || t("Другое", "Boşqa"))
    : monModalCategory;
  const note = document.getElementById("monInitialNote").value.trim() || t("Поставлен(а) на индивидуальный мониторинг.", "Individual monitoringga qöyildi.");

  const debtAmountVal = finalCat === "Долг по контракту" && document.getElementById("monDebtAmountInput")
    ? document.getElementById("monDebtAmountInput").value.trim()
    : "";

  let partnerPayload = {};
  if (debtAmountVal) partnerPayload.debtAmount = debtAmountVal;
  if (finalCat === "В отношениях с..." && monSelectedPartnerId) {
    const partner = (appState.students || []).find(s => s.id === monSelectedPartnerId);
    if (partner) {
      const pTutor = appState.users.find(u => u.id === partner.tutorId);
      partnerPayload = {
        partnerId: partner.id,
        partnerName: partner.name,
        partnerCourse: partner.course,
        partnerGroup: partner.group,
        partnerTutorName: pTutor ? pTutor.name : "—"
      };
    }
  }

  const existing = appState.monitoring.find(m => m.studentId === st.id && m.category === finalCat);
  if (existing) {
    existing.status = "active";
    if (partnerPayload.partnerId || partnerPayload.debtAmount) Object.assign(existing, partnerPayload);
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
      ...partnerPayload,
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
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
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
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
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


// ==================== ЗАПИСИ ПО ОБЩЕЖИТИЮ (ДНЕВНИК КОМНАТ) ====================
let dormListFilters = { search: "", tutors: [], rooms: [], categories: [], dateFrom: "", dateTo: "" };
let dormModalState = {
  room: "",
  roomSearch: "",
  roomTutorFilter: "all",
  category: "Санитарно-гигиеническая ситуация",
  problemResidents: [],
  collaborators: [],
  collabSearch: "",
  conflictStudentId: ""
};

function getAvailableDormRoomsForCurrentUser(tutorFilterId = "all") {
  let scoped = getRoleScopedStudents();
  if (!isTutorOnly() && tutorFilterId && tutorFilterId !== "all") {
    scoped = scoped.filter(s => s.tutorId === tutorFilterId);
  }
  const roomSet = new Set();
  scoped.forEach(s => {
    if (s.housingType === "dorm" && s.room && String(s.room).trim()) {
      roomSet.add(String(s.room).trim());
    }
  });
  return [...roomSet].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function renderDormRoomSelect(keepOpen = false) {
  const wrap = document.getElementById("dormRoomSelectWrap");
  if (!wrap) return;
  const wasOpen = keepOpen || wrap.classList.contains("open");
  const currentLabel = dormModalState.room
    ? `${t("Комната №", "Xona №")} ${dormModalState.room}`
    : t("Выберите комнату...", "Xonani tanlang...");

  const tutors = (appState.users || []).filter(u => u.role === "tutor");
  const tutorSelectHtml = hasAdminPrivileges() ? `
    <select id="dormRoomTutorFilterSelect" class="tg-tag-search-input" style="cursor:pointer;" onchange="onDormRoomTutorFilterChange(this.value)">
      <option value="all" ${dormModalState.roomTutorFilter === "all" ? "selected" : ""}>${t("Все тюторы", "Barça tyutorlar")}</option>
      ${tutors.map(tr => `<option value="${tr.id}" ${dormModalState.roomTutorFilter === tr.id ? "selected" : ""}>${tr.name}</option>`).join("")}
    </select>
  ` : "";

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('dormRoomSelectWrap'); setTimeout(() => { const i = document.getElementById('dormRoomSearchInputDropdown'); if(i) i.focus(); }, 30);">
      <span>${currentLabel}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" style="max-height:none; overflow:visible; min-width:100%; width:max-content; max-width:340px; padding:8px;" onclick="event.stopPropagation()">
      <input type="text" id="dormRoomSearchInputDropdown" class="tg-tag-search-input" placeholder="${t("Номер комнаты или Ф.И.О. студента...", "Xona raqami yoki talaba F.I.Ş....")}" value="${(dormModalState.roomSearch || "").replace(/"/g, '&quot;')}" oninput="onDormRoomDropdownSearch(this.value)" />
      ${tutorSelectHtml}
      <div id="dormRoomOptionsList" class="tg-tag-search-list"></div>
    </div>
  `;

  if (wasOpen) wrap.classList.add("open");
  renderDormRoomOptionsList();
}

function onDormRoomDropdownSearch(val) {
  dormModalState.roomSearch = val || "";
  renderDormRoomOptionsList();
}

function onDormRoomTutorFilterChange(tutorId) {
  dormModalState.roomTutorFilter = tutorId || "all";
  renderDormRoomOptionsList();
}

function renderDormRoomOptionsList() {
  const listEl = document.getElementById("dormRoomOptionsList");
  if (!listEl) return;

  const rooms = getAvailableDormRoomsForCurrentUser(dormModalState.roomTutorFilter);
  const q = (dormModalState.roomSearch || "").trim().toLowerCase();
  const checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="flex-shrink:0;"><path d="M5 12l5 5l10 -10"/></svg>';

  const filtered = rooms.filter(r => {
    if (!q) return true;
    if (String(r).toLowerCase().includes(q)) return true;
    const split = getDormRoomResidentsSplit(r);
    const studentsToSearch = isTutorOnly() ? split.mine : split.all;
    return studentsToSearch.some(s => (s.name || "").toLowerCase().includes(q));
  });

  if (!filtered.length) {
    listEl.innerHTML = `<div class="st-meta" style="padding:8px 10px;">${t("Комнаты не найдены", "Xonalar topilmadi")}</div>`;
    return;
  }

  listEl.innerHTML = filtered.map(r => {
    const split = getDormRoomResidentsSplit(r);
    const previewStudents = isTutorOnly() ? split.mine : split.all;
    const namesShort = previewStudents.map(s => s.name).slice(0, 2).join(", ") + (previewStudents.length > 2 ? ` (+${previewStudents.length - 2})` : "");
    return `
      <div class="cs-option ${String(dormModalState.room) === String(r) ? 'selected' : ''}" style="align-items:flex-start;" onclick="selectDormModalRoom('${String(r).replace(/'/g, "\'")}')">
        <div style="min-width:0; flex:1;">
          <div style="font-weight:700;">${t("Комната №", "Xona №")} ${r}</div>
          ${namesShort ? `<div class="st-meta" style="white-space:normal; font-size:11px; line-height:1.25;">${namesShort}</div>` : ""}
        </div>
        ${String(dormModalState.room) === String(r) ? checkSvg : ''}
      </div>
    `;
  }).join("");
}

function selectDormModalRoom(roomNum) {
  dormModalState.room = roomNum;
  dormModalState.roomSearch = "";
  dormModalState.problemResidents = [];
  const wrap = document.getElementById("dormRoomSelectWrap");
  if (wrap) wrap.classList.remove("open");
  renderDormRoomSelect(false);
  renderDormModalResidentsPreview();
  renderDormProblemResidentsCheckboxes();
}

function getDormRoomResidentsSplit(roomNum) {
  const rStr = String(roomNum || "").trim();
  if (!rStr) return { mine: [], others: [], all: [] };
  const all = (appState.students || []).filter(s => s.housingType === "dorm" && String(s.room || "").trim() === rStr);
  if (isTutorOnly()) {
    return {
      mine: all.filter(s => s.tutorId === currentUser.id),
      others: all.filter(s => s.tutorId !== currentUser.id),
      all
    };
  }
  return { mine: all, others: [], all };
}

function openDormLogModal() {
  const rooms = getAvailableDormRoomsForCurrentUser();
  if (!rooms.length) {
    showToast(t("Нет студентов, проживающих в общежитии с указанным номером комнаты", "Yotoqxona xonasi kiritilgan talabalar topilmadi"));
    return;
  }

  dormModalState = {
    room: "",
    roomSearch: "",
    roomTutorFilter: "all",
    category: DORM_CHECK_CATEGORIES[0].value,
    problemResidents: [],
    collaborators: [],
    collabSearch: "",
    conflictStudentId: ""
  };

  document.getElementById("dormDateInput").value = new Date().toISOString().slice(0, 10);
  document.getElementById("dormRelocationInput").value = "";
  document.getElementById("dormNotesInput").value = "";
  document.getElementById("dormConflictSearchInput").value = "";
  const cRes = document.getElementById("dormConflictResultsList");
  if (cRes) { cRes.innerHTML = ""; cRes.classList.add("hidden"); }
  const cCard = document.getElementById("dormConflictInfoCard");
  if (cCard) { cCard.innerHTML = ""; cCard.classList.add("hidden"); }

  renderDormRoomSelect(false);

  const availCats = DORM_CHECK_CATEGORIES.filter(c => !c.adminOnly || hasAdminPrivileges());
  const catOpts = availCats.map(c => ({ value: c.value, label: currentLang === "oz" ? c.oz : c.ru }));
  const onCatChange = (v) => {
    dormModalState.category = v;
    renderCustomSelect("dormCategorySelectWrap", catOpts, v, onCatChange);
    updateDormCategoryFieldsVisibility();
  };
  renderCustomSelect("dormCategorySelectWrap", catOpts, dormModalState.category, onCatChange);

  renderDormModalResidentsPreview();
  renderDormProblemResidentsCheckboxes();
  renderDormCollabSelect();
  updateDormCategoryFieldsVisibility();

  document.getElementById("dormDiaryModal").classList.remove("hidden");
}

function renderDormModalResidentsPreview() {
  const box = document.getElementById("dormResidentsPreview");
  if (!box) return;
  const split = getDormRoomResidentsSplit(dormModalState.room);
  if (!split.all.length) {
    box.classList.add("hidden");
    return;
  }
  box.classList.remove("hidden");

  const renderRow = (s, showTutor) => {
    const tr = appState.users.find(u => u.id === s.tutorId);
    return `<div class="dorm-res-line">• <strong>${s.name}</strong> (${s.group}, ${s.course} ${t("курс", "kurs")})${showTutor ? ` — <span class="st-meta">${t("Тютор", "Tyutor")}: ${tr ? tr.name : "—"}</span>` : ""}</div>`;
  };

  let html = `<div class="sub-panel-title">${t("ЖИЛЬЦЫ КОМНАТЫ №", "XONA AHOLISI №")} ${dormModalState.room}</div>`;
  if (isTutorOnly()) {
    html += `<div class="dorm-res-group-label">${t("Ваши студенты", "Sizning talabalaringiz")}:</div>`;
    html += split.mine.length
      ? split.mine.map(s => renderRow(s, false)).join("")
      : `<div class="st-meta">—</div>`;
    if (split.others.length) {
      html += `<div class="dorm-res-group-label mt-10">${t("Соседи (закреплены за другими тюторами)", "Xonadoşlar (boşqa tyutorlarga biriktirilgan)")}:</div>`;
      html += split.others.map(s => renderRow(s, true)).join("");
    }
  } else {
    html += split.all.map(s => renderRow(s, true)).join("");
  }
  box.innerHTML = html;
}

function renderDormProblemResidentsCheckboxes() {
  const wrap = document.getElementById("dormProblemResidentsList");
  if (!wrap) return;
  const split = getDormRoomResidentsSplit(dormModalState.room);
  if (!split.all.length) {
    wrap.innerHTML = `<div class="st-meta">${t("В комнате нет жильцов", "Xonada talabalar yöq")}</div>`;
    return;
  }
  wrap.innerHTML = split.all.map(s => {
    const checked = dormModalState.problemResidents.includes(s.id);
    return `
      <label class="social-check-option">
        <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleDormProblemResident('${s.id}')" />
        <span>${s.name} <span class="st-meta">(${s.group})</span></span>
      </label>
    `;
  }).join("");
}

function toggleDormProblemResident(stId) {
  if (dormModalState.problemResidents.includes(stId)) {
    dormModalState.problemResidents = dormModalState.problemResidents.filter(x => x !== stId);
  } else {
    dormModalState.problemResidents.push(stId);
  }
}

function updateDormCategoryFieldsVisibility() {
  const cat = dormModalState.category;
  const pWrap = document.getElementById("dormProblemResidentsWrap");
  const rWrap = document.getElementById("dormRelocationWrap");
  const cWrap = document.getElementById("dormCollabWrap");
  const cfWrap = document.getElementById("dormConflictWrap");

  if (pWrap) pWrap.classList.toggle("hidden", cat !== "Проблема с конкретными жильцами");
  if (rWrap) rWrap.classList.toggle("hidden", cat !== "Запрос о переселении");
  if (cWrap) cWrap.classList.toggle("hidden", cat !== "Профилактическая беседа");
  if (cfWrap) cfWrap.classList.toggle("hidden", cat !== "Конфликт с...");
}

function formatDormCollabTrigger() {
  if (!dormModalState.collaborators.length) {
    return t("Выберите сотрудников или введите вручную...", "Xodimlarni tanlang yoki qölda kiriting...");
  }
  const names = dormModalState.collaborators.map(c => c.name);
  if (names.length <= 2) return names.join(", ");
  return `${names[0]}, ${names[1]} (+${names.length - 2})`;
}

function renderDormCollabSelect(keepOpen = false) {
  const wrap = document.getElementById("dormCollabSelectWrap");
  if (!wrap) return;
  const wasOpen = keepOpen || wrap.classList.contains("open");

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('dormCollabSelectWrap'); setTimeout(() => { const i = document.getElementById('dormCollabSearchInput'); if(i) i.focus(); }, 30);">
      <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${formatDormCollabTrigger()}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()" style="max-height:none; overflow:visible; width:100%; max-width:none; padding:8px;">
      <input type="text" id="dormCollabSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск сотрудника или введите участника...", "Xodimni qidiriş yoki qölda kiritiş...")}" value="${dormModalState.collabSearch}" oninput="renderDormCollabOptions()" onkeydown="if(event.key==='Enter'){event.preventDefault(); addDormCustomCollab(this.value);}" />
      <div id="dormCollabOptionsList" class="tg-tag-search-list"></div>
    </div>
  `;
  if (wasOpen) wrap.classList.add("open");
  renderDormCollabOptions();
}

function renderDormCollabOptions() {
  const listEl = document.getElementById("dormCollabOptionsList");
  const inp = document.getElementById("dormCollabSearchInput");
  if (!listEl) return;

  dormModalState.collabSearch = inp ? inp.value : "";
  const q = dormModalState.collabSearch.trim().toLowerCase();
  const users = (appState.users || []).filter(u => u.id !== currentUser.id);
  const matchedUsers = q ? users.filter(u => (u.name || "").toLowerCase().includes(q)) : users;
  const exactUserMatch = users.some(u => (u.name || "").toLowerCase() === q);
  const customSelected = dormModalState.collaborators.filter(c => c.type === "custom");

  let html = "";
  if (customSelected.length && !q) {
    html += `<div class="cs-divider-label">${t("Введенные вручную", "Qölda kiritilganlar")}</div>`;
    html += customSelected.map(c => `
      <label class="social-check-option">
        <input type="checkbox" checked onchange="removeDormCustomCollab('${c.name.replace(/'/g, "\'")}')" />
        <span>${c.name}</span>
      </label>
    `).join("");
  }

  if (matchedUsers.length) {
    html += `<div class="cs-divider-label">${t("Пользователи системы", "Tizim foydalanuvçilari")}</div>`;
    html += matchedUsers.map(u => {
      const checked = dormModalState.collaborators.some(c => c.type === "user" && c.id === u.id);
      return `
        <label class="social-check-option">
          <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleDormCollabUser('${u.id}')" />
          <span>${u.name} <span class="st-meta">(${localizeRoleTitle(u.role, u.roleTitle)})</span></span>
        </label>
      `;
    }).join("");
  }

  const cleanQ = dormModalState.collabSearch.trim();
  if (cleanQ && !exactUserMatch) {
    html += `
      <div class="tag-ac-item create-new" onclick="addDormCustomCollab('${cleanQ.replace(/'/g, "\'")}')">
        <span>+ ${t("Добавить участника", "Iştirokçi qöşiş")}: <strong>${cleanQ}</strong></span>
      </div>
    `;
  }

  listEl.innerHTML = html || `<div class="st-meta" style="padding:8px 10px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`;
}

function toggleDormCollabUser(uid) {
  const user = appState.users.find(u => u.id === uid);
  if (!user) return;
  const exists = dormModalState.collaborators.some(c => c.type === "user" && c.id === uid);
  if (exists) {
    dormModalState.collaborators = dormModalState.collaborators.filter(c => !(c.type === "user" && c.id === uid));
  } else {
    dormModalState.collaborators.push({ type: "user", id: user.id, name: user.name });
  }
  renderDormCollabSelect(true);
}

function addDormCustomCollab(rawName) {
  const clean = convertUzbekLatinText(String(rawName || "").trim());
  if (!clean) return;
  if (!dormModalState.collaborators.some(c => c.type === "custom" && c.name.toLowerCase() === clean.toLowerCase())) {
    dormModalState.collaborators.push({ type: "custom", name: clean });
  }
  dormModalState.collabSearch = "";
  renderDormCollabSelect(true);
}

function removeDormCustomCollab(name) {
  dormModalState.collaborators = dormModalState.collaborators.filter(c => !(c.type === "custom" && c.name === name));
  renderDormCollabSelect(true);
}

function renderDormConflictSearchResults() {
  const inp = document.getElementById("dormConflictSearchInput");
  const listEl = document.getElementById("dormConflictResultsList");
  if (!inp || !listEl) return;

  const q = inp.value.trim().toLowerCase();
  if (!q) {
    listEl.innerHTML = "";
    listEl.classList.add("hidden");
    return;
  }

  const matches = (appState.students || [])
    .filter(s => (s.name || "").toLowerCase().includes(q) || (s.group || "").toLowerCase().includes(q))
    .slice(0, 8);

  listEl.classList.remove("hidden");
  if (!matches.length) {
    listEl.innerHTML = `<div class="st-meta" style="padding:8px 10px;">${t("Студент не найден", "Talaba topilmadi")}</div>`;
    return;
  }

  listEl.innerHTML = matches.map(s => {
    const tr = appState.users.find(u => u.id === s.tutorId);
    return `
      <div class="mon-partner-opt" onclick="selectDormConflictStudent('${s.id}')">
        <div style="font-weight:700; font-size:13px;">${s.name}</div>
        <div class="st-meta">${s.course} ${t("курс", "kurs")} • ${s.group} • ${t("Тютор", "Tyutor")}: ${tr ? tr.name : "—"}</div>
      </div>
    `;
  }).join("");
}

function selectDormConflictStudent(stId) {
  const st = (appState.students || []).find(s => s.id === stId);
  if (!st) return;
  dormModalState.conflictStudentId = st.id;
  const tr = appState.users.find(u => u.id === st.tutorId);

  const inp = document.getElementById("dormConflictSearchInput");
  if (inp) inp.value = st.name;
  const listEl = document.getElementById("dormConflictResultsList");
  if (listEl) listEl.classList.add("hidden");

  const card = document.getElementById("dormConflictInfoCard");
  if (card) {
    card.classList.remove("hidden");
    card.innerHTML = `
      <div class="mon-partner-card-title">${st.name}</div>
      <div class="st-meta">${t("Курс", "Kurs")}: <strong>${st.course}</strong> • ${t("Группа", "Guruh")}: <strong>${st.group}</strong></div>
      <div class="st-meta">${t("Прикрепленный тютор", "Biriktirilgan tyutor")}: <strong>${tr ? tr.name : "—"}</strong></div>
    `;
  }
}

function getDormLogEntries(d) {
  if (Array.isArray(d.entries) && d.entries.length) return d.entries;
  return [{
    date: d.date || "",
    time: d.time || "",
    authorId: d.tutorId,
    category: d.category || "",
    problemResidents: d.problemResidents || [],
    relocationNote: d.relocationNote || "",
    collaborators: d.collaborators || [],
    conflictStudent: d.conflictStudent || null,
    notes: d.notes || ""
  }];
}

function saveDormLog() {
  const room = String(dormModalState.room || "").trim();
  const notes = document.getElementById("dormNotesInput").value.trim();
  if (!room || !notes) {
    showToast(t("Выберите комнату и введите текст дневника", "Xonani tanlang va kundalik matnini kiriting"));
    return;
  }

  const split = getDormRoomResidentsSplit(room);
  const problemNames = dormModalState.category === "Проблема с конкретными жильцами"
    ? dormModalState.problemResidents.map(id => {
        const s = appState.students.find(x => x.id === id);
        return s ? `${s.name} (${s.group})` : id;
      })
    : [];

  let conflictObj = null;
  if (dormModalState.category === "Конфликт с..." && dormModalState.conflictStudentId) {
    const cs = appState.students.find(s => s.id === dormModalState.conflictStudentId);
    if (cs) {
      const ctr = appState.users.find(u => u.id === cs.tutorId);
      conflictObj = {
        id: cs.id,
        name: cs.name,
        course: cs.course,
        group: cs.group,
        tutorName: ctr ? ctr.name : "—"
      };
    }
  }

  const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const entryDate = document.getElementById("dormDateInput").value || new Date().toISOString().slice(0, 10);
  const newEntry = {
    date: entryDate,
    time: nowTime,
    authorId: currentUser.id,
    category: dormModalState.category,
    problemResidents: problemNames,
    relocationNote: dormModalState.category === "Запрос о переселении" ? document.getElementById("dormRelocationInput").value.trim() : "",
    collaborators: dormModalState.category === "Профилактическая беседа" ? [...dormModalState.collaborators] : [],
    conflictStudent: conflictObj,
    notes
  };

  // Если карточка по этой комнате уже существует — продолжаем дневник в ней
  const existing = (appState.dormLogs || []).find(d => String(d.room || "").trim() === room);
  if (existing) {
    if (!Array.isArray(existing.entries)) existing.entries = getDormLogEntries(existing);
    existing.entries.push(newEntry);
    existing.date = entryDate;
    existing.category = dormModalState.category;
    existing.residents = split.all.map(s => ({ id: s.id, name: s.name, group: s.group, tutorId: s.tutorId }));
    saveState();
    syncSpecificTutorFolder(existing.tutorId);
  } else {
    const rec = {
      id: `dorm_${Date.now()}_${Math.random().toString(36).slice(2, 5)}`,
      tutorId: currentUser.id,
      room,
      date: entryDate,
      category: dormModalState.category,
      residents: split.all.map(s => ({ id: s.id, name: s.name, group: s.group, tutorId: s.tutorId })),
      entries: [newEntry]
    };
    appState.dormLogs.unshift(rec);
    saveState();
    syncSpecificTutorFolder(rec.tutorId);
  }

  closeModal("dormDiaryModal");
  renderDiariesSection();
  showToast(t("Запись добавлена в дневник комнаты", "Qayd xona kundaligiga qöşildi"));
}

function addDormQuickEntry(logId) {
  const rec = (appState.dormLogs || []).find(d => d.id === logId);
  if (!rec) return;
  const catSel = document.getElementById(`dormQuickCat_${logId}`);
  const inp = document.getElementById(`dormQuickNote_${logId}`);
  const text = inp ? inp.value.trim() : "";
  if (!text) {
    showToast(t("Введите текст новой записи", "Yangi qayd matnini kiriting"));
    return;
  }
  const cat = catSel ? catSel.value : DORM_CHECK_CATEGORIES[0].value;
  const nowDate = new Date().toISOString().slice(0, 10);
  const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  if (!Array.isArray(rec.entries)) rec.entries = getDormLogEntries(rec);
  rec.entries.push({
    date: nowDate,
    time: nowTime,
    authorId: currentUser.id,
    category: cat,
    notes: text
  });
  rec.date = nowDate;
  rec.category = cat;

  saveState();
  syncSpecificTutorFolder(rec.tutorId);
  renderDormLogsList();
  showToast(t("Запись добавлена в дневник комнаты", "Qayd xona kundaligiga qöşildi"));
}

function deleteDormLog(id, btnEl) {
  const target = (appState.dormLogs || []).find(d => d.id === id);
  if (!target || !canDeleteData(target.tutorId)) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    const ownerId = target.tutorId;
    appState.dormLogs = (appState.dormLogs || []).filter(d => d.id !== id);
    saveState();
    if (ownerId) syncSpecificTutorFolder(ownerId);
    renderDormLogsList();
    showToast(t("Запись удалена", "Qayd öçirildi"));
  });
}

function renderDormListFilterControls(keepOpenId = null) {
  if (!isTutorOnly()) {
    const tutorOpts = appState.users.filter(u => u.role === "tutor" || hasAdminPrivileges(u)).map(tr => ({ value: tr.id, label: tr.name }));
    renderDiaryMultiSelect("dormListTutorFilterWrap", t("Тюторы", "Tyutorlar"), tutorOpts, dormListFilters.tutors, (val) => {
      dormListFilters.tutors = dormListFilters.tutors.includes(val)
        ? dormListFilters.tutors.filter(x => x !== val)
        : [...dormListFilters.tutors, val];
      renderDormListFilterControls("dormListTutorFilterWrap");
      renderDormLogsList();
    }, keepOpenId === "dormListTutorFilterWrap");
  }

  const allRooms = [...new Set([
    ...getAvailableDormRoomsForCurrentUser(),
    ...(appState.dormLogs || []).map(d => String(d.room || "").trim()).filter(Boolean)
  ])].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const roomOpts = allRooms.map(r => ({ value: r, label: `${t("Комн.", "Xona")} ${r}` }));
  renderDiaryMultiSelect("dormListRoomFilterWrap", t("Комнаты", "Xonalar"), roomOpts, dormListFilters.rooms, (val) => {
    dormListFilters.rooms = dormListFilters.rooms.includes(val)
      ? dormListFilters.rooms.filter(x => x !== val)
      : [...dormListFilters.rooms, val];
    renderDormListFilterControls("dormListRoomFilterWrap");
    renderDormLogsList();
  }, keepOpenId === "dormListRoomFilterWrap");

  const availCats = DORM_CHECK_CATEGORIES.filter(c => !c.adminOnly || hasAdminPrivileges());
  const catOpts = availCats.map(c => ({ value: c.value, label: currentLang === "oz" ? c.oz : c.ru }));
  renderDiaryMultiSelect("dormListCatFilterWrap", t("Категории", "Toifalar"), catOpts, dormListFilters.categories, (val) => {
    dormListFilters.categories = dormListFilters.categories.includes(val)
      ? dormListFilters.categories.filter(x => x !== val)
      : [...dormListFilters.categories, val];
    renderDormListFilterControls("dormListCatFilterWrap");
    renderDormLogsList();
  }, keepOpenId === "dormListCatFilterWrap");
}

function resetDormListFilters() {
  dormListFilters = { search: "", tutors: [], rooms: [], categories: [], dateFrom: "", dateTo: "" };
  const s = document.getElementById("dormListSearchInput"); if (s) s.value = "";
  const df = document.getElementById("dormListDateFrom"); if (df) df.value = "";
  const dt = document.getElementById("dormListDateTo"); if (dt) dt.value = "";
  renderDormListFilterControls();
  renderDormLogsList();
}

function renderDormLogsList() {
  const container = document.getElementById("dormLogsCardsContainer");
  const resetBtn = document.getElementById("dormListResetBtn");
  if (!container) return;

  let list = isTutorOnly()
    ? (appState.dormLogs || []).filter(d => d.tutorId === currentUser.id)
    : (appState.dormLogs || []);

  if (!isTutorOnly() && dormListFilters.tutors.length > 0) {
    list = list.filter(d => dormListFilters.tutors.includes(d.tutorId));
  }
  if (dormListFilters.rooms.length > 0) {
    list = list.filter(d => dormListFilters.rooms.includes(String(d.room || "").trim()));
  }
  if (dormListFilters.categories.length > 0) {
    list = list.filter(d => getDormLogEntries(d).some(e => dormListFilters.categories.includes(e.category)));
  }
  if (dormListFilters.dateFrom || dormListFilters.dateTo) {
    list = list.filter(d => getDormLogEntries(d).some(e => {
      const dt = e.date || "";
      if (dormListFilters.dateFrom && dt < dormListFilters.dateFrom) return false;
      if (dormListFilters.dateTo && dt > dormListFilters.dateTo) return false;
      return true;
    }));
  }
  const q = (dormListFilters.search || "").trim().toLowerCase();
  if (q) {
    list = list.filter(d => {
      const roomMatch = String(d.room || "").toLowerCase().includes(q);
      const resMatch = (d.residents || []).some(r => (r.name || "").toLowerCase().includes(q));
      const entriesMatch = getDormLogEntries(d).some(e =>
        (e.notes || "").toLowerCase().includes(q) ||
        (e.category || "").toLowerCase().includes(q) ||
        (e.conflictStudent && (e.conflictStudent.name || "").toLowerCase().includes(q))
      );
      return roomMatch || resMatch || entriesMatch;
    });
  }

  const hasFilter = Boolean(q || dormListFilters.tutors.length || dormListFilters.rooms.length || dormListFilters.categories.length || dormListFilters.dateFrom || dormListFilters.dateTo);
  if (resetBtn) resetBtn.classList.toggle("hidden", !hasFilter);

  if (!list.length) {
    container.innerHTML = `<div class="empty-state">${t("Записей по общежитию пока нет.", "Yotoqxona böyiça qaydlar hozirça yöq.")}</div>`;
    return;
  }

  const availCats = DORM_CHECK_CATEGORIES.filter(c => !c.adminOnly || hasAdminPrivileges());

  container.innerHTML = `
    <div class="diary-grid">
      ${list.map(d => {
        const entries = getDormLogEntries(d);
        const resNames = (d.residents || []).map(r => `${r.name} (${r.group})`).join(", ");
        return `
          <div class="diary-card">
            <div class="st-card-top">
              <div>
                <div class="st-name">${t("Комната №", "Xona №")} ${d.room}</div>
                <div class="st-meta">${t("Записей в дневнике", "Kundalik qaydlari")}: ${entries.length}</div>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                ${canDeleteData(d.tutorId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteDormLog('${d.id}', this)" title="${t("Удалить дневник комнаты", "Xona kundaligini öçiriş")}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
                </button>` : ""}
              </div>
            </div>

            ${resNames ? `<div class="st-meta mb-8"><strong>${t("Жильцы", "Xonadoşlar")}:</strong> ${resNames}</div>` : ""}

            <div class="diary-entries">
              ${entries.map(ent => {
                const entAuthor = appState.users.find(u => u.id === ent.authorId);
                return `
                  <div class="diary-entry-item">
                    <div class="diary-entry-date" style="display:flex; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:4px;">
                      <span>${ent.date}${ent.time ? ` ${ent.time}` : ""}</span>
                      <span class="badge-pill" style="font-size:10px; padding:2px 8px;">${getLabelFromDict(DORM_CHECK_CATEGORIES, ent.category)}</span>
                      ${entAuthor ? renderUserBadgeHtml(entAuthor) : ""}
                    </div>
                    ${(ent.problemResidents || []).length ? `<div class="mon-debt-badge mb-8"><span>${t("Жильцы по вопросу", "Muammoli xonadoşlar")}:</span> <strong>${ent.problemResidents.join(", ")}</strong></div>` : ""}
                    ${ent.relocationNote ? `<div class="mon-debt-badge mb-8"><span>${t("Переселение", "Köçiriş")}:</span> <strong>${ent.relocationNote}</strong></div>` : ""}
                    ${(ent.collaborators || []).length ? `<div class="st-meta mb-8"><strong>${t("Совместно с", "Hamkorlikda")}:</strong> ${ent.collaborators.map(c => c.name).join(", ")}</div>` : ""}
                    ${ent.conflictStudent ? `
                      <div class="mon-partner-card mb-8">
                        <div class="mon-partner-card-title">${t("Конфликт со студентом", "Nizo iştirokçisi")}: ${ent.conflictStudent.name}</div>
                        <div class="st-meta">${t("Курс", "Kurs")}: <strong>${ent.conflictStudent.course}</strong> • ${t("Группа", "Guruh")}: <strong>${ent.conflictStudent.group}</strong> • ${t("Тютор", "Tyutor")}: <strong>${ent.conflictStudent.tutorName}</strong></div>
                      </div>
                    ` : ""}
                    <div style="white-space:pre-line;">${ent.notes}</div>
                  </div>
                `;
              }).join("")}
            </div>

            <div class="mt-10" style="padding-top:10px; border-top:1px solid var(--border);">
              <select id="dormQuickCat_${d.id}" class="form-input mb-8" style="padding:7px 10px; font-size:12px;">
                ${availCats.map(c => `<option value="${c.value}">${currentLang === "oz" ? c.oz : c.ru}</option>`).join("")}
              </select>
              <textarea id="dormQuickNote_${d.id}" class="form-textarea" rows="2" style="min-height:66px;" placeholder="${t("Продолжить дневник проверки комнаты...", "Xona tekşiruvi kundaligini davom ettiriş...")}"></textarea>
              <div style="display:flex; justify-content:flex-end; margin-top:8px;">
                <button type="button" class="btn-dark" onclick="addDormQuickEntry('${d.id}')">${t("Добавить запись", "Qayd qöşiş")}</button>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// ==================== ЗАМЕТКИ ПО СЪЕМНЫМ КВАРТИРАМ ====================
let rentListFilters = { search: "", tutors: [], categories: [], dateFrom: "", dateTo: "" };
let rentModalState = {
  studentId: "",
  studentSearch: "",
  studentTutorFilter: "all",
  category: "Санитарно-гигиеническая ситуация",
  collaborators: [],
  collabSearch: ""
};

function getRentCheckCategories() {
  return DORM_CHECK_CATEGORIES
    .filter(c => c.value !== "Проблема с конкретными жильцами")
    .map(c => ({ value: c.value, label: currentLang === "oz" ? c.oz : c.ru }));
}

function getAvailableRentStudents(tutorFilterId = "all") {
  let scoped = getRoleScopedStudents().filter(s => s.housingType === "rent");
  if (!isTutorOnly() && tutorFilterId && tutorFilterId !== "all") {
    scoped = scoped.filter(s => s.tutorId === tutorFilterId);
  }
  return scoped;
}

function openRentLogModal() {
  const rentStudents = getAvailableRentStudents();
  if (!rentStudents.length) {
    showToast(t("Нет студентов, проживающих на съемной квартире", "Ijara xonadonda yaşovçi talabalar topilmadi"));
    return;
  }

  rentModalState = {
    studentId: "",
    studentSearch: "",
    studentTutorFilter: "all",
    category: DORM_CHECK_CATEGORIES[0].value,
    collaborators: [],
    collabSearch: ""
  };

  document.getElementById("rentDateInput").value = new Date().toISOString().slice(0, 10);
  document.getElementById("rentAddressInput").value = "";
  document.getElementById("rentLandlordInput").value = "";
  document.getElementById("rentRelocationInput").value = "";
  document.getElementById("rentConflictTextInput").value = "";
  document.getElementById("rentNotesInput").value = "";

  renderRentStudentSelect(false);

  const catOpts = getRentCheckCategories();
  const onCatChange = (v) => {
    rentModalState.category = v;
    renderCustomSelect("rentCategorySelectWrap", catOpts, v, onCatChange);
    updateRentCategoryFieldsVisibility();
  };
  renderCustomSelect("rentCategorySelectWrap", catOpts, rentModalState.category, onCatChange);

  renderRentCollabSelect(false);
  updateRentCategoryFieldsVisibility();
  document.getElementById("rentDiaryModal").classList.remove("hidden");
}

function renderRentStudentSelect(keepOpen = false) {
  const wrap = document.getElementById("rentStudentSelectWrap");
  if (!wrap) return;
  const wasOpen = keepOpen || wrap.classList.contains("open");
  const picked = (appState.students || []).find(s => s.id === rentModalState.studentId);
  const currentLabel = picked
    ? `${picked.name} (${picked.group})`
    : t("Выберите студента...", "Talabani tanlang...");

  const tutors = (appState.users || []).filter(u => u.role === "tutor");
  const tutorSelectHtml = hasAdminPrivileges() ? `
    <select id="rentStudentTutorFilterSelect" class="tg-tag-search-input" style="cursor:pointer;" onchange="onRentStudentTutorFilterChange(this.value)">
      <option value="all" ${rentModalState.studentTutorFilter === "all" ? "selected" : ""}>${t("Все тюторы", "Barça tyutorlar")}</option>
      ${tutors.map(tr => `<option value="${tr.id}" ${rentModalState.studentTutorFilter === tr.id ? "selected" : ""}>${tr.name}</option>`).join("")}
    </select>
  ` : "";

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('rentStudentSelectWrap'); setTimeout(() => { const i = document.getElementById('rentStudentSearchDropdown'); if(i) i.focus(); }, 30);">
      <span>${currentLabel}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" style="max-height:none; overflow:visible; min-width:100%; width:max-content; max-width:340px; padding:8px;" onclick="event.stopPropagation()">
      <input type="text" id="rentStudentSearchDropdown" class="tg-tag-search-input" placeholder="${t("Поиск по Ф.И.О., группе или адресу...", "F.I.Ş., guruh yoki manzil böyiça qidiriş...")}" value="${(rentModalState.studentSearch || "").replace(/"/g, '&quot;')}" oninput="onRentStudentDropdownSearch(this.value)" />
      ${tutorSelectHtml}
      <div id="rentStudentOptionsList" class="tg-tag-search-list"></div>
    </div>
  `;

  if (wasOpen) wrap.classList.add("open");
  renderRentStudentOptionsList();
}

function onRentStudentDropdownSearch(val) {
  rentModalState.studentSearch = val || "";
  renderRentStudentOptionsList();
}

function onRentStudentTutorFilterChange(tutorId) {
  rentModalState.studentTutorFilter = tutorId || "all";
  renderRentStudentOptionsList();
}

function renderRentStudentOptionsList() {
  const listEl = document.getElementById("rentStudentOptionsList");
  if (!listEl) return;

  const list = getAvailableRentStudents(rentModalState.studentTutorFilter);
  const q = (rentModalState.studentSearch || "").trim().toLowerCase();
  const checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="flex-shrink:0;"><path d="M5 12l5 5l10 -10"/></svg>';

  const filtered = list.filter(s => {
    if (!q) return true;
    return (
      (s.name || "").toLowerCase().includes(q) ||
      (s.group || "").toLowerCase().includes(q) ||
      (s.address || "").toLowerCase().includes(q)
    );
  });

  if (!filtered.length) {
    listEl.innerHTML = `<div class="st-meta" style="padding:8px 10px;">${t("Студенты не найдены", "Talabalar topilmadi")}</div>`;
    return;
  }

  listEl.innerHTML = filtered.map(s => `
    <div class="cs-option ${rentModalState.studentId === s.id ? 'selected' : ''}" style="align-items:flex-start;" onclick="selectRentModalStudent('${s.id}')">
      <div style="min-width:0; flex:1;">
        <div style="font-weight:700;">${s.name}</div>
        <div class="st-meta" style="white-space:normal; font-size:11px; line-height:1.25;">${s.group} • ${s.address || t("Адрес не указан", "Manzil kiritilmagan")}</div>
      </div>
      ${rentModalState.studentId === s.id ? checkSvg : ''}
    </div>
  `).join("");
}

function selectRentModalStudent(stId) {
  const st = (appState.students || []).find(s => s.id === stId);
  if (!st) return;
  rentModalState.studentId = st.id;
  rentModalState.studentSearch = "";
  const wrap = document.getElementById("rentStudentSelectWrap");
  if (wrap) wrap.classList.remove("open");

  // Автоматический парсинг адреса и владельца из карточки выбранного студента
  document.getElementById("rentAddressInput").value = st.address || "";
  document.getElementById("rentLandlordInput").value = st.landlord || "";
  renderRentStudentSelect(false);
}

function updateRentCategoryFieldsVisibility() {
  const cat = rentModalState.category;
  const rWrap = document.getElementById("rentRelocationWrap");
  const cWrap = document.getElementById("rentCollabWrap");
  const cfWrap = document.getElementById("rentConflictWrap");

  if (rWrap) rWrap.classList.toggle("hidden", cat !== "Запрос о переселении");
  if (cWrap) cWrap.classList.toggle("hidden", cat !== "Профилактическая беседа");
  if (cfWrap) cfWrap.classList.toggle("hidden", cat !== "Конфликт с...");
}

function formatRentCollabTrigger() {
  if (!rentModalState.collaborators.length) {
    return t("Выберите сотрудников или введите вручную...", "Xodimlarni tanlang yoki qölda kiriting...");
  }
  const names = rentModalState.collaborators.map(c => c.name);
  if (names.length <= 2) return names.join(", ");
  return `${names[0]}, ${names[1]} (+${names.length - 2})`;
}

function renderRentCollabSelect(keepOpen = false) {
  const wrap = document.getElementById("rentCollabSelectWrap");
  if (!wrap) return;
  const wasOpen = keepOpen || wrap.classList.contains("open");

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('rentCollabSelectWrap'); setTimeout(() => { const i = document.getElementById('rentCollabSearchInput'); if(i) i.focus(); }, 30);">
      <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${formatRentCollabTrigger()}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()" style="max-height:none; overflow:visible; width:100%; max-width:none; padding:8px;">
      <input type="text" id="rentCollabSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск сотрудника или введите участника...", "Xodimni qidiriş yoki qölda kiritiş...")}" value="${rentModalState.collabSearch}" oninput="renderRentCollabOptions()" onkeydown="if(event.key==='Enter'){event.preventDefault(); addRentCustomCollab(this.value);}" />
      <div id="rentCollabOptionsList" class="tg-tag-search-list"></div>
    </div>
  `;
  if (wasOpen) wrap.classList.add("open");
  renderRentCollabOptions();
}

function renderRentCollabOptions() {
  const listEl = document.getElementById("rentCollabOptionsList");
  const inp = document.getElementById("rentCollabSearchInput");
  if (!listEl) return;

  rentModalState.collabSearch = inp ? inp.value : "";
  const q = rentModalState.collabSearch.trim().toLowerCase();
  const users = (appState.users || []).filter(u => u.id !== currentUser.id);
  const matchedUsers = q ? users.filter(u => (u.name || "").toLowerCase().includes(q)) : users;
  const exactUserMatch = users.some(u => (u.name || "").toLowerCase() === q);
  const customSelected = rentModalState.collaborators.filter(c => c.type === "custom");

  let html = "";
  if (customSelected.length && !q) {
    html += `<div class="cs-divider-label">${t("Введенные вручную", "Qölda kiritilganlar")}</div>`;
    html += customSelected.map(c => `
      <label class="social-check-option">
        <input type="checkbox" checked onchange="removeRentCustomCollab('${c.name.replace(/'/g, "\'")}')" />
        <span>${c.name}</span>
      </label>
    `).join("");
  }

  if (matchedUsers.length) {
    html += `<div class="cs-divider-label">${t("Пользователи системы", "Tizim foydalanuvçilari")}</div>`;
    html += matchedUsers.map(u => {
      const checked = rentModalState.collaborators.some(c => c.type === "user" && c.id === u.id);
      return `
        <label class="social-check-option">
          <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleRentCollabUser('${u.id}')" />
          <span>${u.name} <span class="st-meta">(${localizeRoleTitle(u.role, u.roleTitle)})</span></span>
        </label>
      `;
    }).join("");
  }

  const cleanQ = rentModalState.collabSearch.trim();
  if (cleanQ && !exactUserMatch) {
    html += `
      <div class="tag-ac-item create-new" onclick="addRentCustomCollab('${cleanQ.replace(/'/g, "\'")}')">
        <span>+ ${t("Добавить участника", "Iştirokçi qöşiş")}: <strong>${cleanQ}</strong></span>
      </div>
    `;
  }

  listEl.innerHTML = html || `<div class="st-meta" style="padding:8px 10px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`;
}

function toggleRentCollabUser(uid) {
  const user = appState.users.find(u => u.id === uid);
  if (!user) return;
  const exists = rentModalState.collaborators.some(c => c.type === "user" && c.id === uid);
  if (exists) {
    rentModalState.collaborators = rentModalState.collaborators.filter(c => !(c.type === "user" && c.id === uid));
  } else {
    rentModalState.collaborators.push({ type: "user", id: user.id, name: user.name });
  }
  renderRentCollabSelect(true);
}

function addRentCustomCollab(rawName) {
  const clean = convertUzbekLatinText(String(rawName || "").trim());
  if (!clean) return;
  if (!rentModalState.collaborators.some(c => c.type === "custom" && c.name.toLowerCase() === clean.toLowerCase())) {
    rentModalState.collaborators.push({ type: "custom", name: clean });
  }
  rentModalState.collabSearch = "";
  renderRentCollabSelect(true);
}

function removeRentCustomCollab(name) {
  rentModalState.collaborators = rentModalState.collaborators.filter(c => !(c.type === "custom" && c.name === name));
  renderRentCollabSelect(true);
}

function getRentLogEntries(r) {
  if (Array.isArray(r.entries) && r.entries.length) return r.entries;
  return [{
    date: r.date || "",
    time: r.time || "",
    authorId: r.tutorId,
    category: r.category || "",
    relocationNote: r.relocationNote || "",
    collaborators: r.collaborators || [],
    conflictText: r.conflictText || "",
    notes: r.notes || ""
  }];
}

function saveRentLog() {
  const st = (appState.students || []).find(s => s.id === rentModalState.studentId);
  const notes = document.getElementById("rentNotesInput").value.trim();
  if (!st || !notes) {
    showToast(t("Выберите студента и введите текст дневника", "Talabani tanlang va kundalik matnini kiriting"));
    return;
  }

  const address = document.getElementById("rentAddressInput").value.trim() || st.address || "";
  const landlord = document.getElementById("rentLandlordInput").value.trim() || st.landlord || "";
  const entryDate = document.getElementById("rentDateInput").value || new Date().toISOString().slice(0, 10);
  const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const newEntry = {
    date: entryDate,
    time: nowTime,
    authorId: currentUser.id,
    category: rentModalState.category,
    relocationNote: rentModalState.category === "Запрос о переселении" ? document.getElementById("rentRelocationInput").value.trim() : "",
    collaborators: rentModalState.category === "Профилактическая беседа" ? [...rentModalState.collaborators] : [],
    conflictText: rentModalState.category === "Конфликт с..." ? document.getElementById("rentConflictTextInput").value.trim() : "",
    notes
  };

  // Если карточка по этой квартире/студенту уже существует — продолжаем дневник в ней
  const existing = (appState.rentLogs || []).find(r => r.studentId === st.id);
  if (existing) {
    if (!Array.isArray(existing.entries)) existing.entries = getRentLogEntries(existing);
    existing.entries.push(newEntry);
    existing.date = entryDate;
    existing.category = rentModalState.category;
    if (address) existing.address = address;
    if (landlord) existing.landlord = landlord;
    saveState();
    syncSpecificTutorFolder(existing.tutorId);
  } else {
    const rec = {
      id: `rent_${Date.now()}_${Math.random().toString(36).slice(2, 5)}`,
      tutorId: st.tutorId || currentUser.id,
      studentId: st.id,
      studentName: st.name,
      studentGroup: st.group,
      address,
      landlord,
      date: entryDate,
      category: rentModalState.category,
      entries: [newEntry]
    };
    appState.rentLogs.unshift(rec);
    saveState();
    syncSpecificTutorFolder(rec.tutorId);
  }

  closeModal("rentDiaryModal");
  renderDiariesSection();
  showToast(t("Запись добавлена в дневник съемной квартиры", "Qayd ijara xonadon kundaligiga qöşildi"));
}

function addRentQuickEntry(logId) {
  const rec = (appState.rentLogs || []).find(r => r.id === logId);
  if (!rec) return;
  const catSel = document.getElementById(`rentQuickCat_${logId}`);
  const inp = document.getElementById(`rentQuickNote_${logId}`);
  const text = inp ? inp.value.trim() : "";
  if (!text) {
    showToast(t("Введите текст новой записи", "Yangi qayd matnini kiriting"));
    return;
  }
  const cat = catSel ? catSel.value : DORM_CHECK_CATEGORIES[0].value;
  const nowDate = new Date().toISOString().slice(0, 10);
  const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  if (!Array.isArray(rec.entries)) rec.entries = getRentLogEntries(rec);
  rec.entries.push({
    date: nowDate,
    time: nowTime,
    authorId: currentUser.id,
    category: cat,
    notes: text
  });
  rec.date = nowDate;
  rec.category = cat;

  saveState();
  syncSpecificTutorFolder(rec.tutorId);
  renderRentLogsList();
  showToast(t("Запись добавлена в дневник съемной квартиры", "Qayd ijara xonadon kundaligiga qöşildi"));
}

function deleteRentLog(id, btnEl) {
  const target = (appState.rentLogs || []).find(r => r.id === id);
  if (!target || !canDeleteData(target.tutorId)) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    const ownerId = target.tutorId;
    appState.rentLogs = (appState.rentLogs || []).filter(r => r.id !== id);
    saveState();
    if (ownerId) syncSpecificTutorFolder(ownerId);
    renderRentLogsList();
    showToast(t("Запись удалена", "Qayd öçirildi"));
  });
}

function renderRentListFilterControls(keepOpenId = null) {
  if (!isTutorOnly()) {
    const tutorOpts = appState.users.filter(u => u.role === "tutor" || hasAdminPrivileges(u)).map(tr => ({ value: tr.id, label: tr.name }));
    renderDiaryMultiSelect("rentListTutorFilterWrap", t("Тюторы", "Tyutorlar"), tutorOpts, rentListFilters.tutors, (val) => {
      rentListFilters.tutors = rentListFilters.tutors.includes(val)
        ? rentListFilters.tutors.filter(x => x !== val)
        : [...rentListFilters.tutors, val];
      renderRentListFilterControls("rentListTutorFilterWrap");
      renderRentLogsList();
    }, keepOpenId === "rentListTutorFilterWrap");
  }

  const catOpts = getRentCheckCategories();
  renderDiaryMultiSelect("rentListCatFilterWrap", t("Категории", "Toifalar"), catOpts, rentListFilters.categories, (val) => {
    rentListFilters.categories = rentListFilters.categories.includes(val)
      ? rentListFilters.categories.filter(x => x !== val)
      : [...rentListFilters.categories, val];
    renderRentListFilterControls("rentListCatFilterWrap");
    renderRentLogsList();
  }, keepOpenId === "rentListCatFilterWrap");
}

function resetRentListFilters() {
  rentListFilters = { search: "", tutors: [], categories: [], dateFrom: "", dateTo: "" };
  const s = document.getElementById("rentListSearchInput"); if (s) s.value = "";
  const df = document.getElementById("rentListDateFrom"); if (df) df.value = "";
  const dt = document.getElementById("rentListDateTo"); if (dt) dt.value = "";
  renderRentListFilterControls();
  renderRentLogsList();
}

function renderRentLogsList() {
  const container = document.getElementById("rentLogsCardsContainer");
  const resetBtn = document.getElementById("rentListResetBtn");
  if (!container) return;

  let list = isTutorOnly()
    ? (appState.rentLogs || []).filter(r => r.tutorId === currentUser.id)
    : (appState.rentLogs || []);

  if (!isTutorOnly() && rentListFilters.tutors.length > 0) {
    list = list.filter(r => rentListFilters.tutors.includes(r.tutorId));
  }
  if (rentListFilters.categories.length > 0) {
    list = list.filter(r => getRentLogEntries(r).some(e => rentListFilters.categories.includes(e.category)));
  }
  if (rentListFilters.dateFrom || rentListFilters.dateTo) {
    list = list.filter(r => getRentLogEntries(r).some(e => {
      const dt = e.date || "";
      if (rentListFilters.dateFrom && dt < rentListFilters.dateFrom) return false;
      if (rentListFilters.dateTo && dt > rentListFilters.dateTo) return false;
      return true;
    }));
  }
  const q = (rentListFilters.search || "").trim().toLowerCase();
  if (q) {
    list = list.filter(r => {
      const baseMatch =
        (r.studentName || "").toLowerCase().includes(q) ||
        (r.studentGroup || "").toLowerCase().includes(q) ||
        (r.address || "").toLowerCase().includes(q) ||
        (r.landlord || "").toLowerCase().includes(q);
      const entriesMatch = getRentLogEntries(r).some(e =>
        (e.notes || "").toLowerCase().includes(q) ||
        (e.category || "").toLowerCase().includes(q) ||
        (e.conflictText || "").toLowerCase().includes(q)
      );
      return baseMatch || entriesMatch;
    });
  }

  const hasFilter = Boolean(q || rentListFilters.tutors.length || rentListFilters.categories.length || rentListFilters.dateFrom || rentListFilters.dateTo);
  if (resetBtn) resetBtn.classList.toggle("hidden", !hasFilter);

  if (!list.length) {
    container.innerHTML = `<div class="empty-state">${t("Заметок по съемным квартирам пока нет.", "Ijara xonadonlar böyiça qaydlar hozirça yöq.")}</div>`;
    return;
  }

  const catOpts = getRentCheckCategories();

  container.innerHTML = `
    <div class="diary-grid">
      ${list.map(r => {
        const entries = getRentLogEntries(r);
        const tutor = appState.users.find(u => u.id === r.tutorId);
        return `
          <div class="diary-card">
            <div class="st-card-top">
              <div>
                <div class="st-name">${r.studentName} <span class="st-meta" style="font-weight:500;">(${r.studentGroup || ""})</span></div>
                <div class="st-meta">${t("Тютор", "Tyutor")}: ${renderUserBadgeHtml(tutor)} • ${t("Записей", "Qaydlar")}: ${entries.length}</div>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                ${canDeleteData(r.tutorId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteRentLog('${r.id}', this)" title="${t("Удалить дневник", "Kundalikni öçiriş")}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
                </button>` : ""}
              </div>
            </div>

            <div class="roommates-panel mb-10">
              <div><strong>${t("Адрес", "Manzil")}:</strong> ${r.address || t("Не указан", "Kiritilmagan")}</div>
              <div><strong>${t("Владелец", "Uy egasi")}:</strong> ${r.landlord || t("Не указан", "Kiritilmagan")}</div>
            </div>

            <div class="diary-entries">
              ${entries.map(ent => {
                const entAuthor = appState.users.find(u => u.id === ent.authorId);
                return `
                  <div class="diary-entry-item">
                    <div class="diary-entry-date" style="display:flex; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:4px;">
                      <span>${ent.date}${ent.time ? ` ${ent.time}` : ""}</span>
                      <span class="badge-pill rent" style="font-size:10px; padding:2px 8px;">${getLabelFromDict(DORM_CHECK_CATEGORIES, ent.category)}</span>
                      ${entAuthor ? renderUserBadgeHtml(entAuthor) : ""}
                    </div>
                    ${ent.relocationNote ? `<div class="mon-debt-badge mb-8"><span>${t("Переселение", "Köçiriş")}:</span> <strong>${ent.relocationNote}</strong></div>` : ""}
                    ${(ent.collaborators || []).length ? `<div class="st-meta mb-8"><strong>${t("Совместно с", "Hamkorlikda")}:</strong> ${ent.collaborators.map(c => c.name).join(", ")}</div>` : ""}
                    ${ent.conflictText ? `<div class="mon-debt-badge mb-8"><span>${t("Конфликт с", "Nizo")}:</span> <strong>${ent.conflictText}</strong></div>` : ""}
                    <div style="white-space:pre-line;">${ent.notes}</div>
                  </div>
                `;
              }).join("")}
            </div>

            <div class="mt-10" style="padding-top:10px; border-top:1px solid var(--border);">
              <select id="rentQuickCat_${r.id}" class="form-input mb-8" style="padding:7px 10px; font-size:12px;">
                ${catOpts.map(c => `<option value="${c.value}">${c.label}</option>`).join("")}
              </select>
              <textarea id="rentQuickNote_${r.id}" class="form-textarea" rows="2" style="min-height:66px;" placeholder="${t("Продолжить дневник проверки квартиры...", "Xonadon tekşiruvi kundaligini davom ettiriş...")}"></textarea>
              <div style="display:flex; justify-content:flex-end; margin-top:8px;">
                <button type="button" class="btn-dark" onclick="addRentQuickEntry('${r.id}')">${t("Добавить запись", "Qayd qöşiş")}</button>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
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
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    appState.todos = appState.todos.filter(td => td.id !== todoId);
    saveState();
    renderTodoList();
    showToast(t("Задача удалена", "Vazifa öçirildi"));
  });
}

function getCalendarSyncedTasks() {
  if (!currentUser) return [];
  return (appState.tasks || [])
    .filter(tk =>
      tk &&
      tk.deadline &&
      (
        (Array.isArray(tk.assignees) && tk.assignees.includes(currentUser.id)) ||
        tk.authorId === currentUser.id
      )
    )
    .map(tk => {
      const parts = String(tk.deadline).split("T");
      const dateStr = parts[0] || "";
      const timeStr = (parts[1] || "").slice(0, 5);
      const isDone = tk.status === "completed";
      return {
        id: `caltask_${tk.id}`,
        taskId: tk.id,
        isTask: true,
        status: tk.status || "active",
        date: dateStr,
        time: timeStr,
        color: isDone ? "#10b981" : (tk.color || "#ff6b3d"),
        title: tk.title || "",
        authorId: tk.authorId,
        assignees: tk.assignees || []
      };
    })
    .filter(item => item.date);
}

function openTaskFromCalendar(taskId) {
  const task = (appState.tasks || []).find(tk => tk.id === taskId);
  if (!task) {
    showToast(t("Задание не найдено или было удалено", "Vazifa topilmadi yoki öçirilgan"));
    return;
  }
  activeChatTabId = "tasks";
  activeTasksSubtab = task.status === "completed" ? "completed" : "active";
  activeTaskDiscussionId = task.id;
  toggleChatDrawer(true);
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
  const myTaskEvents = getCalendarSyncedTasks();
  const allCalendarItems = [...myEvents, ...myTaskEvents];

  let cells = "";
  for (let i = 0; i < offset; i++) cells += `<div></div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const dayEvs = allCalendarItems.filter(ev => ev.date === dateStr);
    const isSelected = dateStr === selectedCalDate;

    cells += `
      <div class="cal-day-cell ${isSelected ? 'selected' : ''}" onclick="selectCalDate('${dateStr}')">
        <div class="cal-day-num">${d}</div>
        <div class="cal-dots">
          ${dayEvs.map(ev => `<span class="cal-dot ${ev.isTask && ev.status === 'completed' ? 'done-task' : ''}" style="background:${ev.color}"></span>`).join("")}
        </div>
      </div>
    `;
  }
  document.getElementById("calDaysGrid").innerHTML = cells;

  // Список событий и заданий выбранного дня
  const selectedEvents = allCalendarItems
    .filter(ev => ev.date === selectedCalDate)
    .sort((a, b) => String(a.time || "").localeCompare(String(b.time || "")));
  document.getElementById("selectedDayLabel").textContent = `${selectedCalDate} • ${t("ЗАПЛАНИРОВАННЫЕ СОБЫТИЯ", "REJALAŞTIRILGAN TADBIRLAR")} (${selectedEvents.length})`;

  const listEl = document.getElementById("selectedDayEventsList");
  listEl.innerHTML = selectedEvents.length
    ? selectedEvents.map(ev => {
        if (ev.isTask) {
          const isDone = ev.status === "completed";
          const author = appState.users.find(u => u.id === ev.authorId);
          const assigneeNames = (ev.assignees || []).map(id => {
            const u = appState.users.find(x => x.id === id);
            return u ? u.name : id;
          }).join(", ");
          const statusIcon = isDone
            ? `<span class="cal-task-done-icon" title="${t("Выполнено", "Bajarildi")}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg></span>`
            : `<span style="color:${ev.color}; font-size:14px; line-height:1;">●</span>`;
          return `
            <div class="day-event-row cal-task-row ${isDone ? 'completed' : ''}" style="border-left: 3.5px solid ${ev.color};">
              <div style="min-width:0; flex:1;">
                <div class="cal-task-head-line">
                  ${statusIcon}
                  <button type="button" class="cal-task-title-btn ${isDone ? 'done' : ''}" onclick="openTaskFromCalendar('${ev.taskId}')">
                    ${ev.time ? `${ev.time} — ` : ""}${ev.title}
                  </button>
                  ${isDone ? `<span class="cal-task-status-badge">${t("Выполнено", "Bajarildi")}</span>` : ""}
                </div>
                <div class="st-meta">${t("Задание от", "Vazifa muallifi")}: ${author ? author.name : "—"}${assigneeNames ? ` • ${t("Исполнители", "Ijroçilar")}: ${assigneeNames}` : ""}</div>
              </div>
              <button type="button" class="cal-task-open-btn ${isDone ? 'completed' : ''}" onclick="openTaskFromCalendar('${ev.taskId}')" title="${t("Открыть чат задачи", "Vazifa çatini oçiş")}">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"/><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"/></svg>
                <span>${t("Чат задачи", "Vazifa çati")}</span>
              </button>
            </div>
          `;
        }
        return `
          <div class="day-event-row">
            <div>
              <div style="font-weight:700; font-size:13px;"><span style="color:${ev.color}">●</span> ${ev.time} — ${ev.title}</div>
              <div class="st-meta">${ev.desc || ""}</div>
            </div>
            ${canDeleteData(ev.userId) ? `<button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteCalendarEvent('${ev.id}', this)" title="${t("Удалить событие", "Tadbirni öçiriş")}">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
            </button>` : ""}
          </div>
        `;
      }).join("")
    : `<div class="st-meta">${t("На выбранную дату событий пока не запланировано.", "Tanlangan sanaga tadbirlar hozirça rejalaştirilmagan.")}</div>`;

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
    { value: "#ff6b3d", label: t("Оранжевый (Важно)", "Zarğaldoq (Muhim)") },
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
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
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
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
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
let newUserGroupsList = [];
let editingUserId = null;
let editingUserRole = "tutor";
let editingUserCourse = "1";
let editingUserGroupsList = [];

function parseTutorGroupsArray(rawStr) {
  const invalid = new Set(["Все группы", "Не назначены", "Biriktirilmagan", "—", ""]);
  return [...new Set(
    String(rawStr || "")
      .split(",")
      .map(g => g.trim())
      .filter(g => g && !invalid.has(g))
  )];
}

function renderTutorGroupsTableCell(u) {
  if (u.role !== "tutor") return '<span class="st-meta">—</span>';
  const courseBadge = u.course ? `<span class="badge-pill">${u.course} ${t("курс", "kurs")}</span>` : "";
  const groups = parseTutorGroupsArray(u.groups);
  if (!groups.length) {
    return `<div class="tutor-groups-cell">${courseBadge}<span class="st-meta">${t("Не назначены", "Biriktirilmagan")}</span></div>`;
  }
  const ddId = `tblTutorGroupsDd_${u.id}`;
  return `
    <div class="tutor-groups-cell">
      ${courseBadge}
      <div class="custom-select tutor-groups-dd" id="${ddId}">
        <div class="cs-trigger" onclick="toggleCustomSelect('${ddId}')">
          <span>${t("Группы", "Guruhlar")} (${groups.length})</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
        </div>
        <div class="cs-menu" onclick="event.stopPropagation()">
          ${groups.map(g => `<div class="tutor-groups-dd-item"><span>${g}</span></div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

let editingGroupInline = { mode: null, index: -1 };

function renderUserGroupsEditor(mode, keepOpen = false) {
  const isNew = mode === "new";
  const wrapId = isNew ? "nuGroupsControlWrap" : "euGroupsControlWrap";
  const ddId = isNew ? "nuGroupsDdWrap" : "euGroupsDdWrap";
  const inpId = isNew ? "nuGroupsInlineInput" : "euGroupsInlineInput";
  const list = isNew ? newUserGroupsList : editingUserGroupsList;
  const wrap = document.getElementById(wrapId);
  if (!wrap) return;

  // Если групп пока нет — обычное текстовое поле; при добавлении первой сразу превращается в выпадающий список
  if (!list.length) {
    editingGroupInline = { mode: null, index: -1 };
    wrap.innerHTML = `
      <div class="user-groups-empty-row">
        <input type="text" id="${inpId}" class="form-input" data-no-uz-convert="1" placeholder="TR-401, TR-402" onkeydown="if(event.key==='Enter'){event.preventDefault(); addGroupToUserEditor('${mode}');}" />
        <button type="button" class="user-groups-add-btn" onclick="addGroupToUserEditor('${mode}')" title="${t("Добавить группу", "Guruh qöşiş")}">+</button>
      </div>
    `;
    return;
  }

  const label = list.length <= 2
    ? list.join(", ")
    : `${list[0]}, ${list[1]} (+${list.length - 2})`;

  const existingDd = document.getElementById(ddId);
  const wasOpen = keepOpen || (existingDd && existingDd.classList.contains("open"));

  const editIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/><path d="M16 5l3 3"/></svg>';
  const checkIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg>';

  wrap.innerHTML = `
    <div class="custom-select drop-up user-groups-editor-dd ${wasOpen ? 'open' : ''}" id="${ddId}">
      <div class="cs-trigger" onclick="toggleCustomSelect('${ddId}'); setTimeout(() => { const i = document.getElementById('${inpId}'); if(i) i.focus(); }, 30);">
        <span>${label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6 -6l6 6"/></svg>
      </div>
      <div class="cs-menu" onclick="event.stopPropagation()">
        <div class="user-groups-inline-add">
          <input type="text" id="${inpId}" class="tg-tag-search-input" data-no-uz-convert="1" placeholder="${t("Новая группа (напр. TH-125)...", "Yangi guruh (masalan: TH-125)...")}" onkeydown="if(event.key==='Enter'){event.preventDefault(); addGroupToUserEditor('${mode}');}" />
          <button type="button" class="user-groups-add-btn" onclick="addGroupToUserEditor('${mode}')" title="${t("Добавить группу", "Guruh qöşiş")}">+</button>
        </div>
        <div class="tg-tag-search-list">
          ${list.map((g, idx) => {
            const isEditing = editingGroupInline.mode === mode && editingGroupInline.index === idx;
            if (isEditing) {
              const editInpId = `editGroupInp_${mode}_${idx}`;
              return `
                <div class="tutor-groups-dd-item editing">
                  <input type="text" id="${editInpId}" class="user-group-inline-edit-input" data-no-uz-convert="1" value="${g.replace(/"/g, '&quot;')}" onkeydown="if(event.key==='Enter'){event.preventDefault(); saveEditedGroupInEditor('${mode}', ${idx});} else if(event.key==='Escape'){cancelEditGroupInEditor('${mode}');}" />
                  <div class="user-group-item-actions">
                    <button type="button" class="user-group-save-btn" onclick="saveEditedGroupInEditor('${mode}', ${idx})" title="${t("Сохранить", "Saqlaş")}">${checkIconSvg}</button>
                    <button type="button" class="user-group-del-btn" onclick="cancelEditGroupInEditor('${mode}')" title="${t("Отмена", "Bekor qiliş")}">×</button>
                  </div>
                </div>
              `;
            }
            return `
              <div class="tutor-groups-dd-item">
                <span>${g}</span>
                <div class="user-group-item-actions">
                  <button type="button" class="user-group-edit-btn" onclick="startEditGroupInEditor('${mode}', ${idx})" title="${t("Редактировать", "Tahrirlaş")}">${editIconSvg}</button>
                  <button type="button" class="user-group-del-btn" onclick="removeGroupFromUserEditor('${mode}', '${g.replace(/'/g, "\'")}')" title="${t("Удалить", "Öçiriş")}">×</button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

function startEditGroupInEditor(mode, idx) {
  editingGroupInline = { mode, index: idx };
  renderUserGroupsEditor(mode, true);
  setTimeout(() => {
    const inp = document.getElementById(`editGroupInp_${mode}_${idx}`);
    if (inp) {
      inp.focus();
      inp.select();
    }
  }, 20);
}

function cancelEditGroupInEditor(mode) {
  editingGroupInline = { mode: null, index: -1 };
  renderUserGroupsEditor(mode, true);
}

function saveEditedGroupInEditor(mode, idx) {
  const inp = document.getElementById(`editGroupInp_${mode}_${idx}`);
  if (!inp) return;
  const newName = inp.value.trim();
  if (!newName) {
    cancelEditGroupInEditor(mode);
    return;
  }
  const list = mode === "new" ? newUserGroupsList : editingUserGroupsList;
  const duplicate = list.some((g, i) => i !== idx && g.toLowerCase() === newName.toLowerCase());
  if (duplicate) {
    showToast(t("Такая группа уже есть в списке", "Bu guruh röyxatda allaqaçon bor"));
    return;
  }
  list[idx] = newName;
  editingGroupInline = { mode: null, index: -1 };
  renderUserGroupsEditor(mode, true);
}

function addGroupToUserEditor(mode) {
  const isNew = mode === "new";
  const inpId = isNew ? "nuGroupsInlineInput" : "euGroupsInlineInput";
  const inp = document.getElementById(inpId);
  if (!inp) return;
  const parts = parseTutorGroupsArray(inp.value);
  if (!parts.length) return;

  const list = isNew ? newUserGroupsList : editingUserGroupsList;
  parts.forEach(g => {
    if (!list.includes(g)) list.push(g);
  });

  renderUserGroupsEditor(mode, true);
  setTimeout(() => {
    const nextInp = document.getElementById(inpId);
    if (nextInp) nextInp.focus();
  }, 20);
}

function removeGroupFromUserEditor(mode, groupName) {
  editingGroupInline = { mode: null, index: -1 };
  if (mode === "new") {
    newUserGroupsList = newUserGroupsList.filter(g => g !== groupName);
  } else {
    editingUserGroupsList = editingUserGroupsList.filter(g => g !== groupName);
  }
  const list = mode === "new" ? newUserGroupsList : editingUserGroupsList;
  renderUserGroupsEditor(mode, list.length > 0);
}

function getCourseOptions() {
  return [
    { value: "1", label: `1 ${t("курс", "kurs")}` },
    { value: "2", label: `2 ${t("курс", "kurs")}` },
    { value: "3", label: `3 ${t("курс", "kurs")}` },
    { value: "4", label: `4 ${t("курс", "kurs")}` }
  ];
}

function syncUsersToGoogleDrive() {
  if (!currentUser || !sessionToken || typeof APPS_SCRIPT_URL === "undefined" || !APPS_SCRIPT_URL.includes("/exec")) return;
  const bodyObj = isFullAdmin()
    ? { action: "saveUsers", token: sessionToken, users: appState.users }
    : {
        action: "updateOwnProfile",
        token: sessionToken,
        profile: {
          name: currentUser.name,
          roleTitle: currentUser.roleTitle,
          dept: currentUser.dept,
          phone: currentUser.phone,
          email: currentUser.email,
          edu: currentUser.edu,
          bio: currentUser.bio,
          photo: currentUser.photo
        }
      };
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(bodyObj)
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
              <div id="euGroupsControlWrap"></div>
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
          <button type="button" class="btn-orange" onclick="saveEditedUser()">${t("Сохранить изменения", "Özgarişlarni saqlaş")}</button>
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
  editingUserGroupsList = u.role === "tutor" ? parseTutorGroupsArray(u.groups) : [];
  renderUserGroupsEditor("edit", false);
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
  const pendingEuInp = document.getElementById("euGroupsInlineInput");
  if (pendingEuInp && pendingEuInp.value.trim()) {
    parseTutorGroupsArray(pendingEuInp.value).forEach(g => {
      if (!editingUserGroupsList.includes(g)) editingUserGroupsList.push(g);
    });
  }
  const groups = role === "tutor"
    ? (editingUserGroupsList.length ? editingUserGroupsList.join(", ") : t("Не назначены", "Biriktirilmagan"))
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

let userAdminFilters = { search: "", role: "all", course: "all", group: "all" };
let revealedUserPassIds = new Set();

function ensureUsersAdminToolbar() {
  const section = document.getElementById("view-users");
  if (!section) return;
  let toolbar = document.getElementById("usersAdminToolbar");
  if (!toolbar) {
    const card = section.querySelector(".bento-card");
    toolbar = document.createElement("div");
    toolbar.id = "usersAdminToolbar";
    toolbar.className = "st-all-toolbar";
    if (card) section.insertBefore(toolbar, card);
    else section.appendChild(toolbar);
  }

  const isTutorFilter = userAdminFilters.role === "tutor";
  toolbar.innerHTML = `
    <div class="st-search-group">
      <div class="st-search-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>
        <input type="text" id="usersAdminSearchInput" placeholder="${t("Поиск по Ф.И.О., логину, группам...", "F.I.Ş., login, guruhlar böyiça qidiriş...")}" value="${(userAdminFilters.search || "").replace(/"/g, '&quot;')}" oninput="onUsersAdminSearchInput(this.value)" />
      </div>
    </div>
    <div class="st-all-filters">
      <div class="custom-select" id="usersFilterRoleWrap"></div>
      <div class="custom-select ${isTutorFilter ? '' : 'hidden'}" id="usersFilterCourseWrap"></div>
      <div class="custom-select ${isTutorFilter ? '' : 'hidden'}" id="usersFilterGroupWrap"></div>
      <button type="button" id="usersFilterResetBtn" class="btn-export sm hidden" onclick="resetUsersAdminFilters()">${t("Сбросить", "Tozalaş")}</button>
    </div>
  `;

  const roleOpts = [{ value: "all", label: t("Все роли", "Barça rollar") }].concat(getUserRoleOptions());
  renderCustomSelect("usersFilterRoleWrap", roleOpts, userAdminFilters.role, (val) => {
    userAdminFilters.role = val;
    if (val !== "tutor") {
      userAdminFilters.course = "all";
      userAdminFilters.group = "all";
    }
    ensureUsersAdminToolbar();
    renderUsersAdminTableRows();
  });

  if (isTutorFilter) {
    const courseOpts = [{ value: "all", label: t("Все курсы", "Barça kurslar") }].concat(getCourseOptions());
    renderCustomSelect("usersFilterCourseWrap", courseOpts, userAdminFilters.course, (val) => {
      userAdminFilters.course = val;
      userAdminFilters.group = "all";
      ensureUsersAdminToolbar();
      renderUsersAdminTableRows();
    });

    const invalidGroupLabels = new Set(["Все группы", "Не назначены", "Biriktirilmagan", "—", ""]);
    const tutorsForGroups = appState.users.filter(u =>
      u.role === "tutor" &&
      (userAdminFilters.course === "all" || String(u.course || "") === String(userAdminFilters.course))
    );
    const groupSet = new Set();
    tutorsForGroups.forEach(tr => {
      String(tr.groups || "")
        .split(",")
        .map(g => g.trim())
        .filter(g => g && !invalidGroupLabels.has(g))
        .forEach(g => groupSet.add(g));
    });
    const uniqueGroups = [...groupSet].sort((a, b) => a.localeCompare(b));
    if (userAdminFilters.group !== "all" && !uniqueGroups.includes(userAdminFilters.group)) {
      userAdminFilters.group = "all";
    }
    const groupOpts = [{ value: "all", label: t("Все группы", "Barça guruhlar") }]
      .concat(uniqueGroups.map(g => ({ value: g, label: g })));
    renderCustomSelect("usersFilterGroupWrap", groupOpts, userAdminFilters.group, (val) => {
      userAdminFilters.group = val;
      renderUsersAdminTableRows();
    });
  }
}

function onUsersAdminSearchInput(val) {
  userAdminFilters.search = val || "";
  renderUsersAdminTableRows();
}

function resetUsersAdminFilters() {
  userAdminFilters = { search: "", role: "all", course: "all", group: "all" };
  ensureUsersAdminToolbar();
  renderUsersAdminTableRows();
}

function toggleUserPassVisibility(userId) {
  if (revealedUserPassIds.has(userId)) {
    revealedUserPassIds.delete(userId);
  } else {
    revealedUserPassIds.add(userId);
  }
  renderUsersAdminTableRows();
}

function renderUsersAdminTable() {
  ensureUsersAdminToolbar();
  renderUsersAdminTableRows();
}

function renderUsersAdminTableRows() {
  const table = document.getElementById("usersAdminTable");
  const resetBtn = document.getElementById("usersFilterResetBtn");
  if (!table) return;

  const q = (userAdminFilters.search || "").trim().toLowerCase();
  let list = [...(appState.users || [])];

  if (userAdminFilters.role !== "all") {
    list = list.filter(u => u.role === userAdminFilters.role);
  }
  if (userAdminFilters.role === "tutor") {
    if (userAdminFilters.course !== "all") {
      list = list.filter(u => String(u.course || "") === String(userAdminFilters.course));
    }
    if (userAdminFilters.group !== "all") {
      list = list.filter(u =>
        String(u.groups || "")
          .split(",")
          .map(g => g.trim())
          .includes(userAdminFilters.group)
      );
    }
  }
  if (q) {
    list = list.filter(u =>
      (u.name || "").toLowerCase().includes(q) ||
      (u.login || "").toLowerCase().includes(q) ||
      (u.groups || "").toLowerCase().includes(q) ||
      (u.driveFolder || "").toLowerCase().includes(q) ||
      localizeRoleTitle(u.role, u.roleTitle).toLowerCase().includes(q)
    );
  }

  const hasFilter = Boolean(
    q ||
    userAdminFilters.role !== "all" ||
    userAdminFilters.course !== "all" ||
    userAdminFilters.group !== "all"
  );
  if (resetBtn) resetBtn.classList.toggle("hidden", !hasFilter);

  const eyeSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>';
  const eyeOffSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>';

  table.innerHTML = `
    <thead>
      <tr>
        <th>${t("Сотрудник", "Xodim")}</th>
        <th>${t("Роль", "Roli")}</th>
        <th>${t("Группы", "Guruhlar")}</th>
        <th>${t("Логин", "Login")}</th>
        <th>${t("Пароль", "Parol")}</th>
        <th>${t("Папка Google Drive", "Google Drive papkasi")}</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${(() => {
        const uPg = paginateList(list, "users");
        window._lastUsersPg = uPg;
        return uPg.items.length ? uPg.items.map(u => {
        const isRevealed = revealedUserPassIds.has(u.id);
        const safePass = String(u.pass || "").replace(/"/g, '&quot;');
        return `
        <tr>
          <td>${renderUserBadgeHtml(u)}</td>
          <td>
            <span>${localizeRoleTitle(u.role, u.roleTitle)}</span>
            ${u.partialAdmin && u.role !== "admin" ? `<span class="badge-pill partial-admin">${t("Част. админ", "Qisman admin")}</span>` : ""}
          </td>
          <td>${renderTutorGroupsTableCell(u)}</td>
          <td><code>${u.login}</code></td>
          <td>
            <div class="pass-mask-wrap">
              <input type="${isRevealed ? 'text' : 'password'}" id="passField_${u.id}" class="form-input pass-mask-input" value="${safePass}" readonly />
              <button type="button" class="pass-eye-btn" onclick="toggleUserPassVisibility('${u.id}')" title="${isRevealed ? t("Скрыть пароль", "Parolni yaşiriş") : t("Показать пароль", "Parolni körsatiş")}">
                ${isRevealed ? eyeOffSvg : eyeSvg}
              </button>
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
      `;
      }).join("") : `
        <tr>
          <td colspan="7" style="text-align:center; padding:28px; color:var(--text-muted);">
            ${t("Пользователи по выбранным фильтрам не найдены.", "Tanlangan filtrlar böyiça foydalanuvçilar topilmadi.")}
          </td>
        </tr>
      `;
      })()}
    </tbody>
  `;
  let uPgBar = document.getElementById("usersPaginationWrap");
  if (!uPgBar && table.parentElement && table.parentElement.parentElement) {
    uPgBar = document.createElement("div");
    uPgBar.id = "usersPaginationWrap";
    table.parentElement.parentElement.appendChild(uPgBar);
  }
  if (uPgBar) {
    uPgBar.innerHTML = renderPaginationBar("users", window._lastUsersPg, "goToUsersPage");
  }
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
  newUserGroupsList = [];
  renderUserGroupsEditor("new", false);
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
  const pendingNuInp = document.getElementById("nuGroupsInlineInput");
  if (pendingNuInp && pendingNuInp.value.trim()) {
    parseTutorGroupsArray(pendingNuInp.value).forEach(g => {
      if (!newUserGroupsList.includes(g)) newUserGroupsList.push(g);
    });
  }
  const groups = newUserRole === "tutor"
    ? (newUserGroupsList.length ? newUserGroupsList.join(", ") : t("Не назначены", "Biriktirilmagan"))
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
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
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


// ==================== 8. ЧАТ, ГРУППЫ, ЗАДАНИЯ, ОПРОСЫ И УВЕДОМЛЕНИЯ ====================
let chatDrawerOpen = false;
let activeChatTabId = "tasks"; // "tasks" или ID чата
let activeTasksSubtab = "active"; // "active" | "completed"
let activeTaskDiscussionId = null; // ID задачи, если открыт чат обсуждения конкретной задачи
let chatCreateMode = "direct";
let chatCreateSelectedIds = [];
let chatPendingAttachments = { images: [], files: [] };
let chatReplyTarget = null; // { id, senderId, senderName, text }
let chatEditTarget = null;  // { scopeType, scopeId, msgId }
let chatPendingMentions = []; // array of userIds
let chatMentionPopoverOpen = false;
let chatMentionSearch = "";

let editingTaskId = null;
let taskDraftColor = "#ef4444";
let taskDraftAssignees = [];
let taskDraftTodos = [];
let taskAssigneeSearch = "";

const CHAT_EMOJIS = [
  "😀","😊","👍","👏","🔥","✅","❤️","🎉","🙏","👌","🤝","💡",
  "📌","📎","📝","📅","⏰","⚠️","🚀","⭐","😅","🤔","👀","💪"
];

function addSystemNotification(targetUserIds, text, refType = "chat", refId = "tasks") {
  if (!Array.isArray(targetUserIds) || !targetUserIds.length) return;
  const nowStr = new Date().toLocaleString();
  targetUserIds.forEach(uid => {
    if (!uid || (currentUser && uid === currentUser.id)) return;
    appState.notifications.unshift({
      id: `notif_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      userId: uid,
      text,
      refType,
      refId,
      read: false,
      time: nowStr
    });
  });
}

function getMyActiveAssignedTasks() {
  if (!currentUser) return [];
  return (appState.tasks || []).filter(tk =>
    tk.status === "active" &&
    Array.isArray(tk.assignees) &&
    tk.assignees.includes(currentUser.id)
  );
}

function updateChatIndicators() {
  if (!currentUser) return;
  const myActiveTasks = getMyActiveAssignedTasks();
  const unreadNotifs = (appState.notifications || []).filter(n => n.userId === currentUser.id && !n.read);

  const pulseEl = document.getElementById("chatLauncherPulse");
  const badgeEl = document.getElementById("chatLauncherBadge");
  const notifCountEl = document.getElementById("chatNotifCount");

  if (pulseEl) pulseEl.classList.toggle("hidden", myActiveTasks.length === 0);
  const totalCount = unreadNotifs.length + myActiveTasks.length;
  if (badgeEl) {
    badgeEl.textContent = totalCount;
    badgeEl.classList.toggle("hidden", totalCount === 0);
  }
  const mPulse = document.getElementById("mobileChatPulse");
  if (mPulse) mPulse.classList.toggle("hidden", myActiveTasks.length === 0);
  const mBadge = document.getElementById("mobileChatBadge");
  if (mBadge) {
    mBadge.textContent = totalCount;
    mBadge.classList.toggle("hidden", totalCount === 0);
  }
  if (notifCountEl) {
    notifCountEl.textContent = unreadNotifs.length;
    notifCountEl.classList.toggle("hidden", unreadNotifs.length === 0);
  }
}

function toggleChatDrawer(forceState) {
  const drawer = document.getElementById("chatDrawer");
  const backdrop = document.getElementById("chatDrawerBackdrop");
  if (!drawer || !backdrop) return;

  chatDrawerOpen = typeof forceState === "boolean" ? forceState : !chatDrawerOpen;
  drawer.classList.toggle("open", chatDrawerOpen);
  backdrop.classList.toggle("hidden", !chatDrawerOpen);
  drawer.setAttribute("aria-hidden", chatDrawerOpen ? "false" : "true");

  if (chatDrawerOpen) {
    renderChatDrawer();
  }
}

function renderChatDrawer() {
  if (!currentUser) return;
  updateChatIndicators();
  renderChatTabsBar();
  renderChatDrawerBody();
}

function getVisibleChatsForMe() {
  if (!currentUser) return [];
  return (appState.chats || []).filter(c =>
    Array.isArray(c.members) && c.members.includes(currentUser.id)
  );
}

function getChatDisplayName(chat) {
  if (!chat) return "";
  if (chat.type === "group") return chat.title || t("Группа", "Guruh");
  const otherId = (chat.members || []).find(id => id !== currentUser.id);
  const otherUser = appState.users.find(u => u.id === otherId);
  return otherUser ? otherUser.name : (chat.title || t("Чат", "Çat"));
}

function toggleChatHeaderDropdown(menuId, e) {
  if (e) e.stopPropagation();
  const target = document.getElementById(menuId);
  if (!target) return;
  const willOpen = target.classList.contains("hidden");
  document.querySelectorAll(".chat-dd-menu").forEach(m => m.classList.add("hidden"));
  if (willOpen) target.classList.remove("hidden");
}

function getChatLastActivity(chat) {
  if (!chat) return 0;
  if (chat.lastActivity) return Number(chat.lastActivity) || 0;
  if (Array.isArray(chat.messages) && chat.messages.length) {
    const last = chat.messages[chat.messages.length - 1];
    if (last && last.ts) return Number(last.ts) || 0;
  }
  const numFromId = Number(String(chat.id || "").replace(/\D/g, "")) || 0;
  return numFromId;
}

function renderChatTabsBar() {
  const bar = document.getElementById("chatTabsBar");
  if (!bar) return;

  const myActiveTasks = getMyActiveAssignedTasks();
  const chats = getVisibleChatsForMe();
  const directChats = chats
    .filter(c => c.type !== "group")
    .sort((a, b) => getChatLastActivity(b) - getChatLastActivity(a));
  const groupChats = chats
    .filter(c => c.type === "group")
    .sort((a, b) => getChatLastActivity(b) - getChatLastActivity(a));

  const activeChat = chats.find(c => c.id === activeChatTabId);
  const isDirectActive = Boolean(activeChat && activeChat.type !== "group");
  const isGroupActive = Boolean(activeChat && activeChat.type === "group");

  const directLabel = isDirectActive
    ? getChatDisplayName(activeChat)
    : `${t("Личные", "Şaxsiy")}${directChats.length ? ` (${directChats.length})` : ""}`;
  const groupLabel = isGroupActive
    ? getChatDisplayName(activeChat)
    : `${t("Группы", "Guruhlar")}${groupChats.length ? ` (${groupChats.length})` : ""}`;

  const renderMenuItems = (list, emptyText) => {
    if (!list.length) {
      return `<div class="st-meta" style="padding:8px 10px; text-align:center;">${emptyText}</div>`;
    }
    return list.map(c => {
      const otherId = c.type !== "group" ? (c.members || []).find(id => id !== currentUser.id) : null;
      const otherUser = otherId ? appState.users.find(u => u.id === otherId) : null;
      const labelHtml = otherUser
        ? renderUserBadgeHtml(otherUser)
        : `<span class="chat-dd-item-name">${getChatDisplayName(c)}</span>`;
      return `
      <div class="chat-dd-item ${activeChatTabId === c.id ? 'active' : ''}" onclick="selectChatTab('${c.id}')">
        ${labelHtml}
        <button type="button" class="chat-tab-del" data-del-trigger="1" onclick="event.stopPropagation(); deleteChatById('${c.id}', this)" title="${t("Удалить чат", "Çatni öçiriş")}">×</button>
      </div>
    `;
    }).join("");
  };

  bar.innerHTML = `
    <div class="chat-tab-pill tasks-tab ${activeChatTabId === 'tasks' ? 'active' : ''}" onclick="selectChatTab('tasks')">
      ${myActiveTasks.length > 0 ? '<span class="chat-pulse-dot"></span>' : ''}
      <span>${t("Задания", "Vazifalar")}</span>
    </div>

    <div class="chat-dd-wrap">
      <button type="button" class="chat-tab-pill ${isDirectActive ? 'active' : ''}" onclick="toggleChatHeaderDropdown('chatDirectDdMenu', event)">
        <span style="max-width:110px; overflow:hidden; text-overflow:ellipsis;">${directLabel}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6l6 -6"/></svg>
      </button>
      <div class="chat-dd-menu hidden" id="chatDirectDdMenu" onclick="event.stopPropagation()">
        ${renderMenuItems(directChats, t("Нет личных чатов", "Şaxsiy çatlar yöq"))}
      </div>
    </div>

    <div class="chat-dd-wrap">
      <button type="button" class="chat-tab-pill ${isGroupActive ? 'active' : ''}" onclick="toggleChatHeaderDropdown('chatGroupDdMenu', event)">
        <span style="max-width:110px; overflow:hidden; text-overflow:ellipsis;">${groupLabel}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6l6 -6"/></svg>
      </button>
      <div class="chat-dd-menu hidden" id="chatGroupDdMenu" onclick="event.stopPropagation()">
        ${renderMenuItems(groupChats, t("Нет групп", "Guruhlar yöq"))}
      </div>
    </div>
  `;
}

function selectChatTab(tabId) {
  document.querySelectorAll(".chat-dd-menu").forEach(m => m.classList.add("hidden"));
  activeChatTabId = tabId;
  activeTaskDiscussionId = null;
  chatPendingAttachments = { images: [], files: [] };
  renderPendingAttachBar();
  renderChatDrawer();
}

function renderChatDrawerBody() {
  const body = document.getElementById("chatDrawerBody");
  const composer = document.getElementById("chatComposer");
  if (!body || !composer) return;

  // 1. Вкладка «Задания»
  if (activeChatTabId === "tasks") {
    if (activeTaskDiscussionId) {
      const task = (appState.tasks || []).find(tk => tk.id === activeTaskDiscussionId);
      if (!task) {
        activeTaskDiscussionId = null;
        renderChatDrawerBody();
        return;
      }
      composer.classList.remove("hidden");
      const author = appState.users.find(u => u.id === task.authorId);
      const msgs = task.messages || [];
      body.innerHTML = `
        <div class="task-card" style="border-left-color:${task.color || '#ff6b3d'}; flex-shrink:0;">
          <div class="task-card-head">
            <div>
              <button type="button" class="btn-export sm mb-8" onclick="activeTaskDiscussionId=null; renderChatDrawerBody();">← ${t("К списку заданий", "Vazifalar röyxatiga")}</button>
              <div class="task-title">${task.title}</div>
              <div class="st-meta">${t("Автор", "Muallif")}: ${author ? author.name : "—"} ${task.deadline ? `• ${t("Дедлайн", "Muddat")}: ${task.deadline.replace('T', ' ')}` : ""}</div>
            </div>
            ${task.status === "active" && task.authorId === currentUser.id ? `
              <button type="button" class="btn-orange sm" onclick="markTaskCompleted('${task.id}')">${t("Выполнено", "Bajarildi")}</button>
            ` : ""}
          </div>
          ${(task.todos || []).length ? `
            <div class="task-todos-mini">
              ${task.todos.map((td, idx) => `
                <label class="todo-check-label" style="font-size:12px;">
                  <input type="checkbox" ${td.done ? "checked" : ""} onchange="toggleTaskTodoItem('${task.id}', ${idx})" />
                  <span style="${td.done ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">${td.text}</span>
                </label>
              `).join("")}
            </div>
          ` : ""}
        </div>
        ${msgs.length ? msgs.map(m => renderChatMessageBubble(m, "task", task.id)).join("") : `<div class="st-meta" style="text-align:center; padding:16px;">${t("Напишите комментарий или прикрепите отчет по заданию.", "Vazifa böyiça izoh yozing yoki hisobot biriktiring.")}</div>`}
      `;
      body.scrollTop = body.scrollHeight;
      return;
    }

    composer.classList.add("hidden");
    const visibleTasks = (appState.tasks || []).filter(tk =>
      hasAdminPrivileges() ||
      tk.authorId === currentUser.id ||
      (Array.isArray(tk.assignees) && tk.assignees.includes(currentUser.id))
    );
    const activeCount = visibleTasks.filter(tk => tk.status === "active").length;
    const doneCount = visibleTasks.filter(tk => tk.status === "completed").length;
    const filtered = visibleTasks.filter(tk => tk.status === activeTasksSubtab);

    body.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
        <div class="subtabs-pills" style="padding-bottom:0;">
          <button type="button" class="subtab-btn ${activeTasksSubtab === 'active' ? 'active' : ''}" onclick="activeTasksSubtab='active'; renderChatDrawerBody()">${t("Активные задачи", "Faol vazifalar")} (${activeCount})</button>
          <button type="button" class="subtab-btn ${activeTasksSubtab === 'completed' ? 'active' : ''}" onclick="activeTasksSubtab='completed'; renderChatDrawerBody()">${t("Выполненные", "Bajarilgan")} (${doneCount})</button>
        </div>
        ${hasAdminPrivileges() ? `<button type="button" class="btn-orange sm" onclick="openChatTaskModal()">+ ${t("Задание", "Vazifa")}</button>` : ""}
      </div>

      ${!filtered.length ? `<div class="empty-state" style="padding:28px 16px;">${t("Задач в этой вкладке пока нет.", "Uşbu bölimda vazifalar hozirça yöq.")}</div>` : filtered.map(tk => {
        const author = appState.users.find(u => u.id === tk.authorId);
        const assigneeNames = (tk.assignees || []).map(id => {
          const u = appState.users.find(x => x.id === id);
          return u ? u.name : id;
        }).join(", ");
        const isAssignedToMe = (tk.assignees || []).includes(currentUser.id);
        return `
          <div class="task-card" style="border-left-color:${tk.color || '#ff6b3d'};">
            <div class="task-card-head">
              <div>
                <div class="task-title" style="display:flex; align-items:center; gap:6px;">
                  ${tk.status === 'active' && isAssignedToMe ? '<span class="chat-pulse-dot"></span>' : ''}
                  <span>${tk.title}</span>
                </div>
                <div class="st-meta">${t("От", "Kimdan")}: ${author ? author.name : "—"} • ${t("Исполнители", "Ijroçilar")}: ${assigneeNames || "—"}</div>
                ${tk.deadline ? `<div class="st-meta" style="color:var(--accent); font-weight:600;">${t("Дедлайн", "Muddat")}: ${tk.deadline.replace('T', ' ')}</div>` : ""}
              </div>
              ${hasAdminPrivileges() || tk.authorId === currentUser.id ? `
                <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
                  <button type="button" class="icon-circle-btn sm" onclick="openChatTaskModal('${tk.id}')" title="${t("Редактировать задание", "Vazifani tahrirlaş")}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/><path d="M16 5l3 3"/></svg>
                  </button>
                  <button type="button" class="btn-del-icon" data-del-trigger="1" onclick="deleteTaskById('${tk.id}', this)" title="${t("Удалить задание", "Vazifani öçiriş")}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
                  </button>
                </div>
              ` : ""}
            </div>
            ${(tk.todos || []).length ? `
              <div class="task-todos-mini">
                ${tk.todos.map((td, idx) => `
                  <label class="todo-check-label" style="font-size:12px;">
                    <input type="checkbox" ${td.done ? "checked" : ""} onchange="toggleTaskTodoItem('${tk.id}', ${idx})" />
                    <span style="${td.done ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">${td.text}</span>
                  </label>
                `).join("")}
              </div>
            ` : ""}
            <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:4px;">
              <button type="button" class="btn-export sm" onclick="activeTaskDiscussionId='${tk.id}'; renderChatDrawerBody()">
                ${t("Чат задачи", "Vazifa çati")} (${(tk.messages || []).length})
              </button>
              ${tk.status === "active" && tk.authorId === currentUser.id ? `
                <button type="button" class="btn-orange sm" onclick="markTaskCompleted('${tk.id}')">${t("Отметить выполненным", "Bajarildi")}</button>
              ` : ""}
            </div>
          </div>
        `;
      }).join("")}
    `;
    return;
  }

  // 2. Обычный или групповой чат
  const chat = (appState.chats || []).find(c => c.id === activeChatTabId);
  if (!chat) {
    activeChatTabId = "tasks";
    renderChatDrawer();
    return;
  }

  composer.classList.remove("hidden");
  const msgs = chat.messages || [];
  body.innerHTML = msgs.length
    ? msgs.map(m => renderChatMessageBubble(m, "chat", chat.id)).join("")
    : `<div class="empty-state" style="padding:30px 16px;">${t("История чата пуста. Напишите первое сообщение!", "Çat tarixi böş. Birinçi xabarni yozing!")}</div>`;
  body.scrollTop = body.scrollHeight;
}

function formatChatTextWithMentions(text, mentionIds) {
  let safe = String(text || "");
  const ids = Array.isArray(mentionIds) ? [...new Set(mentionIds)] : [];
  const usedIds = new Set();

  ids.forEach(uid => {
    const u = (appState.users || []).find(x => x.id === uid);
    if (!u || !u.name) return;
    const token = "@" + u.name;
    if (safe.includes(token)) {
      usedIds.add(uid);
      const pill = renderUserBadgeHtml(u, {
        clickable: true,
        prefix: "@",
        onclick: `event.stopPropagation(); insertMentionIntoChatInput('${u.id}')`,
        title: t("Нажмите, чтобы отметить в ответе", "Javobda belgilaş uçun bosing")
      });
      safe = safe.split(token).join(pill);
    }
  });

  const extraPills = ids
    .filter(uid => !usedIds.has(uid))
    .map(uid => {
      const u = (appState.users || []).find(x => x.id === uid);
      if (!u) return "";
      return renderUserBadgeHtml(u, {
        clickable: true,
        prefix: "@",
        onclick: `event.stopPropagation(); insertMentionIntoChatInput('${u.id}')`
      });
    })
    .filter(Boolean)
    .join(" ");

  return `${extraPills ? `<div style="margin-bottom:4px; display:flex; flex-wrap:wrap; gap:4px;">${extraPills}</div>` : ""}${safe ? `<div>${safe}</div>` : ""}`;
}

function renderChatMessageBubble(m, scopeType, scopeId) {
  const isMine = m.senderId === currentUser.id;
  const sender = appState.users.find(u => u.id === m.senderId);
  const senderHtml = sender ? renderUserBadgeHtml(sender) : `<span>${t("Пользователь", "Foydalanuvçi")}</span>`;

  let contentHtml = "";

  if (m.replyTo) {
    const hasRefId = Boolean(m.replyTo.id);
    const safeRefId = hasRefId ? String(m.replyTo.id).replace(/'/g, "\'") : "";
    const clickAttr = hasRefId
      ? `onclick="event.stopPropagation(); scrollToChatMessage('${safeRefId}')" title="${t("Перейти к сообщению", "Xabarga ötiş")}"`
      : "";
    contentHtml += `
      <div class="chat-reply-quote ${hasRefId ? 'clickable' : ''}" ${clickAttr}>
        <div class="chat-reply-quote-author">${m.replyTo.senderName || ""}</div>
        <div class="chat-reply-quote-text">${m.replyTo.text || t("Вложение", "Fayl")}</div>
      </div>
    `;
  }

  contentHtml += formatChatTextWithMentions(m.text, m.mentions);

  const imgs = Array.isArray(m.images) ? [...m.images] : [];
  const files = Array.isArray(m.files) ? [...m.files] : [];
  if (m.attachment) {
    if (m.attachment.type === "image") imgs.push(m.attachment);
    else if (m.attachment.type === "file") files.push(m.attachment);
  }

  if (imgs.length) {
    const colClass = imgs.length === 1 ? "cols-1" : (imgs.length >= 3 ? "cols-3" : "");
    contentHtml += `
      <div class="chat-img-collage ${colClass}">
        ${imgs.map(im => `<img src="${im.dataUrl}" alt="${im.name || 'img'}" onclick="openLightbox('${im.dataUrl}')" />`).join("")}
      </div>
    `;
  }

  if (files.length) {
    contentHtml += `
      <div class="chat-files-stack">
        ${files.map(fl => `<a href="${fl.dataUrl}" download="${fl.name}" class="chat-msg-file">📄 ${fl.name}</a>`).join("")}
      </div>
    `;
  }

  if (m.poll) {
    const totalVotes = (m.poll.options || []).reduce((acc, o) => acc + (o.votes || []).length, 0);
    contentHtml += `
      <div class="chat-poll-box">
        <div style="font-weight:700; font-size:13px;">📊 ${m.poll.question}</div>
        <div style="font-size:11px; opacity:0.75;">${m.poll.multiple ? t("Можно выбрать несколько", "Bir neçta tanlaş mumkin") : t("Один вариант ответа", "Bitta javob")}</div>
        ${(m.poll.options || []).map((opt, idx) => {
          const votes = opt.votes || [];
          const votedByMe = votes.includes(currentUser.id);
          const pct = totalVotes ? Math.round((votes.length / totalVotes) * 100) : 0;
          return `
            <button type="button" class="chat-poll-opt ${votedByMe ? 'voted' : ''}" onclick="voteInChatPoll('${scopeType}', '${scopeId}', '${m.id}', ${idx})">
              <span>${opt.text}</span>
              <span>${votes.length} (${pct}%)</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  const editBtn = `
    <button type="button" class="chat-msg-act-btn" onclick="startEditChatMessage('${scopeType}', '${scopeId}', '${m.id}')" title="${t("Редактировать", "Tahrirlaş")}">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/><path d="M16 5l3 3"/></svg>
    </button>
  `;
  const delBtn = `
    <button type="button" class="chat-msg-act-btn danger" data-del-trigger="1" onclick="deleteChatMessage('${scopeType}', '${scopeId}', '${m.id}', this)" title="${t("Удалить", "Öçiriş")}">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>
    </button>
  `;
  const replyBtn = `
    <button type="button" class="chat-msg-act-btn" onclick="startReplyChatMessage('${scopeType}', '${scopeId}', '${m.id}')" title="${t("Ответить", "Javob beriş")}">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14l-4 -4l4 -4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/></svg>
    </button>
  `;

  const hoverActions = isMine
    ? `<div class="chat-msg-hover-actions">${replyBtn}${editBtn}${delBtn}</div>`
    : `<div class="chat-msg-hover-actions">${replyBtn}</div>`;

  const bubbleHtml = `
    <div class="chat-msg-bubble ${isMine ? 'mine' : ''}">
      <div class="chat-msg-meta" style="align-items:center;">
        <span>${senderHtml}</span>
        <span>${m.time || ""}${m.edited ? `<span class="chat-edited-tag">(${t("изм.", "tahrir.")})</span>` : ""}</span>
      </div>
      ${contentHtml}
    </div>
  `;

  return `
    <div class="chat-msg-row ${isMine ? 'mine' : 'theirs'}" data-msg-id="${m.id}">
      ${isMine ? hoverActions + bubbleHtml : bubbleHtml + hoverActions}
    </div>
  `;
}

function scrollToChatMessage(msgId) {
  if (!msgId) return;
  const body = document.getElementById("chatDrawerBody");
  if (!body) return;
  const escapedId = (window.CSS && typeof CSS.escape === "function") ? CSS.escape(msgId) : String(msgId).replace(/"/g, '\"');
  const target = body.querySelector(`.chat-msg-row[data-msg-id="${escapedId}"]`);
  if (!target) {
    showToast(t("Исходное сообщение не найдено или было удалено", "Asl xabar topilmadi yoki öçirilgan"));
    return;
  }
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  target.classList.remove("chat-msg-highlight");
  void target.offsetWidth;
  target.classList.add("chat-msg-highlight");
  clearTimeout(target._hlTimer);
  target._hlTimer = setTimeout(() => {
    target.classList.remove("chat-msg-highlight");
  }, 1700);
}

function getChatMessagesContainer(scopeType, scopeId) {
  return scopeType === "task"
    ? (appState.tasks || []).find(tk => tk.id === scopeId)
    : (appState.chats || []).find(c => c.id === scopeId);
}

function startReplyChatMessage(scopeType, scopeId, msgId) {
  const container = getChatMessagesContainer(scopeType, scopeId);
  if (!container) return;
  const msg = (container.messages || []).find(m => m.id === msgId);
  if (!msg) return;
  const sender = appState.users.find(u => u.id === msg.senderId);
  chatEditTarget = null;
  chatReplyTarget = {
    id: msg.id,
    senderId: msg.senderId,
    senderName: sender ? sender.name : t("Пользователь", "Foydalanuvçi"),
    text: msg.text || (msg.poll ? msg.poll.question : t("Вложение", "Fayl"))
  };
  renderChatContextBar();
  const inp = document.getElementById("chatMessageInput");
  if (inp) inp.focus();
}

function startEditChatMessage(scopeType, scopeId, msgId) {
  const container = getChatMessagesContainer(scopeType, scopeId);
  if (!container) return;
  const msg = (container.messages || []).find(m => m.id === msgId);
  if (!msg || msg.senderId !== currentUser.id) return;
  chatReplyTarget = null;
  chatEditTarget = { scopeType, scopeId, msgId };
  renderChatContextBar();
  const inp = document.getElementById("chatMessageInput");
  if (inp) {
    inp.value = msg.text || "";
    inp.focus();
  }
}

function cancelChatContextMode() {
  chatReplyTarget = null;
  chatEditTarget = null;
  renderChatContextBar();
}

function renderChatContextBar() {
  const bar = document.getElementById("chatContextBar");
  if (!bar) return;
  if (!chatReplyTarget && !chatEditTarget) {
    bar.classList.add("hidden");
    bar.innerHTML = "";
    return;
  }
  bar.classList.remove("hidden");
  if (chatEditTarget) {
    bar.innerHTML = `
      <div class="chat-context-bar-text">
        <div class="chat-context-bar-title">${t("Редактирование сообщения", "Xabarni tahrirlaş")}</div>
        <div class="chat-context-bar-sub">${t("Измените текст и нажмите Enter", "Matnni özgartiring va Enter bosing")}</div>
      </div>
      <button type="button" class="icon-circle-btn sm" onclick="cancelChatContextMode()">×</button>
    `;
  } else if (chatReplyTarget) {
    bar.innerHTML = `
      <div class="chat-context-bar-text">
        <div class="chat-context-bar-title">${t("Ответ для", "Javob")}: ${chatReplyTarget.senderName}</div>
        <div class="chat-context-bar-sub">${chatReplyTarget.text}</div>
      </div>
      <button type="button" class="icon-circle-btn sm" onclick="cancelChatContextMode()">×</button>
    `;
  }
}

function deleteChatMessage(scopeType, scopeId, msgId, btnEl) {
  const container = getChatMessagesContainer(scopeType, scopeId);
  if (!container) return;
  const msg = (container.messages || []).find(m => m.id === msgId);
  if (!msg || msg.senderId !== currentUser.id) return;
  askConfirmDelete(btnEl, () => {
    container.messages = (container.messages || []).filter(m => m.id !== msgId);
    saveState(true);
    syncChatHubToCloud();
    renderChatDrawerBody();
    showToast(t("Сообщение удалено", "Xabar öçirildi"));
  });
}

// --- @-Упоминания в групповых чатах и чатах заданий ---
function isMentionAllowedInActiveChat() {
  if (activeChatTabId === "tasks" && activeTaskDiscussionId) return true;
  const chat = (appState.chats || []).find(c => c.id === activeChatTabId);
  return Boolean(chat && chat.type === "group");
}

function handleChatMessageInput(e) {
  if (!isMentionAllowedInActiveChat()) {
    closeChatMentionPopover();
    return;
  }
  const val = e.target.value || "";
  if (/(^|\s)@$/.test(val)) {
    openChatMentionPopover();
  }
}

function handleChatMessageKeydown(e) {
  if (e.key === "Escape" && chatMentionPopoverOpen) {
    closeChatMentionPopover();
    return;
  }
  if (e.key === "Enter") {
    e.preventDefault();
    if (chatMentionPopoverOpen) {
      applySelectedChatMentions();
    } else {
      sendChatMessage();
    }
  }
}

function openChatMentionPopover() {
  chatMentionPopoverOpen = true;
  chatMentionSearch = "";
  renderChatMentionPopover();
}

function closeChatMentionPopover() {
  chatMentionPopoverOpen = false;
  const pop = document.getElementById("chatMentionPopover");
  if (pop) {
    pop.classList.add("hidden");
    pop.innerHTML = "";
  }
}

function renderChatMentionPopover() {
  const pop = document.getElementById("chatMentionPopover");
  if (!pop || !chatMentionPopoverOpen) return;
  pop.classList.remove("hidden");

  const q = (chatMentionSearch || "").trim().toLowerCase();
  const users = (appState.users || []).filter(u =>
    !q || (u.name || "").toLowerCase().includes(q) || localizeRoleTitle(u.role, u.roleTitle).toLowerCase().includes(q)
  );

  pop.innerHTML = `
    <input type="text" id="chatMentionSearchInput" class="tg-tag-search-input" placeholder="${t("Поиск пользователя для отметки...", "Belgilaş uçun foydalanuvçini qidiriş...")}" value="${chatMentionSearch.replace(/"/g, '&quot;')}" oninput="chatMentionSearch=this.value; renderChatMentionPopover()" />
    <div class="chat-mention-list">
      ${users.length ? users.map(u => {
        const checked = chatPendingMentions.includes(u.id);
        return `
          <label class="social-check-option">
            <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleChatPendingMention('${u.id}')" />
            <span>${renderUserBadgeHtml(u)}</span>
          </label>
        `;
      }).join("") : `<div class="st-meta" style="padding:6px;">${t("Ничего не найдено", "Heç narsa topilmadi")}</div>`}
    </div>
    <div class="chat-mention-foot">
      <span class="st-meta">${t("Выбрано", "Tanlandi")}: ${chatPendingMentions.length}</span>
      <div style="display:flex; gap:6px;">
        <button type="button" class="btn-ghost-sm" onclick="closeChatMentionPopover()">${t("Отмена", "Bekor")}</button>
        <button type="button" class="btn-orange sm" onclick="applySelectedChatMentions()">${t("Отметить", "Belgilaş")}</button>
      </div>
    </div>
  `;
  const sInp = document.getElementById("chatMentionSearchInput");
  if (sInp) {
    sInp.focus();
    sInp.setSelectionRange(sInp.value.length, sInp.value.length);
  }
}

function toggleChatPendingMention(uid) {
  if (chatPendingMentions.includes(uid)) {
    chatPendingMentions = chatPendingMentions.filter(x => x !== uid);
  } else {
    chatPendingMentions.push(uid);
  }
  renderChatMentionPopover();
}

function applySelectedChatMentions() {
  const inp = document.getElementById("chatMessageInput");
  if (inp) {
    let text = inp.value || "";
    text = text.replace(/(^|\s)@$/, "$1");
    const tokens = chatPendingMentions.map(uid => {
      const u = (appState.users || []).find(x => x.id === uid);
      return u ? `@${u.name}` : "";
    }).filter(Boolean);
    const toAdd = tokens.filter(tok => !text.includes(tok));
    if (toAdd.length) {
      text = (text.trim() ? text.trim() + " " : "") + toAdd.join(" ") + " ";
    }
    inp.value = text;
    inp.focus();
  }
  closeChatMentionPopover();
}

function insertMentionIntoChatInput(userId) {
  const u = (appState.users || []).find(x => x.id === userId);
  if (!u) return;
  if (!chatPendingMentions.includes(userId)) {
    chatPendingMentions.push(userId);
  }
  const inp = document.getElementById("chatMessageInput");
  if (inp) {
    const tok = `@${u.name}`;
    if (!inp.value.includes(tok)) {
      inp.value = (inp.value.trim() ? inp.value.trim() + " " : "") + tok + " ";
    }
    inp.focus();
  }
}

// --- Создание чата / группы ---
function openChatCreateModal() {
  chatCreateMode = "direct";
  chatCreateSelectedIds = [];
  document.getElementById("chatNewGroupName").value = "";
  document.getElementById("chatMemberSearch").value = "";
  setChatCreateMode("direct");
  document.getElementById("chatCreateModal").classList.remove("hidden");
}

function setChatCreateMode(mode) {
  chatCreateMode = mode;
  chatCreateSelectedIds = [];
  document.getElementById("chatCreateDirectBtn").classList.toggle("active", mode === "direct");
  document.getElementById("chatCreateGroupBtn").classList.toggle("active", mode === "group");
  document.getElementById("chatGroupNameWrap").classList.toggle("hidden", mode !== "group");
  renderChatCreateMembersList();
}

function renderChatCreateMembersList() {
  const listEl = document.getElementById("chatCreateMembersList");
  if (!listEl) return;
  const q = (document.getElementById("chatMemberSearch").value || "").trim().toLowerCase();
  let others = (appState.users || []).filter(u => u.id !== currentUser.id);

  // В личном чате скрываем пользователей, с которыми уже есть активный диалог
  if (chatCreateMode === "direct") {
    const existingDirectPartnerIds = new Set();
    (appState.chats || []).forEach(c => {
      if (c.type === "direct" && Array.isArray(c.members) && c.members.includes(currentUser.id)) {
        c.members.forEach(id => { if (id !== currentUser.id) existingDirectPartnerIds.add(id); });
      }
    });
    others = others.filter(u => !existingDirectPartnerIds.has(u.id));
  }

  const matched = q ? others.filter(u => (u.name || "").toLowerCase().includes(q)) : others;

  listEl.innerHTML = matched.map(u => {
    const checked = chatCreateSelectedIds.includes(u.id);
    return `
      <label class="social-check-option">
        <input type="${chatCreateMode === 'direct' ? 'radio' : 'checkbox'}" name="chatMemberPick" ${checked ? "checked" : ""} onchange="toggleChatCreateMember('${u.id}')" />
        <span>${renderUserBadgeHtml(u)} <span class="st-meta">(${localizeRoleTitle(u.role, u.roleTitle)})</span></span>
      </label>
    `;
  }).join("") || `<div class="st-meta" style="padding:8px;">${t("Нет доступных собеседников", "Mavjud suhbatdoşlar yöq")}</div>`;
}

function toggleChatCreateMember(uid) {
  if (chatCreateMode === "direct") {
    chatCreateSelectedIds = [uid];
  } else {
    if (chatCreateSelectedIds.includes(uid)) {
      chatCreateSelectedIds = chatCreateSelectedIds.filter(x => x !== uid);
    } else {
      chatCreateSelectedIds.push(uid);
    }
  }
}

function confirmCreateChat() {
  if (!chatCreateSelectedIds.length) {
    showToast(t("Выберите хотя бы одного собеседника", "Kamida bitta suhbatdoş tanlang"));
    return;
  }

  if (chatCreateMode === "direct") {
    const targetId = chatCreateSelectedIds[0];
    const existing = (appState.chats || []).find(c =>
      c.type === "direct" && c.members.includes(currentUser.id) && c.members.includes(targetId)
    );
    if (existing) {
      activeChatTabId = existing.id;
      closeModal("chatCreateModal");
      renderChatDrawer();
      return;
    }
    const newChat = {
      id: `chat_${Date.now()}`,
      type: "direct",
      title: "",
      members: [currentUser.id, targetId],
      lastActivity: Date.now(),
      messages: []
    };
    appState.chats.push(newChat);
    addSystemNotification([targetId], `${currentUser.name} ${t("начал(а) с вами чат", "siz bilan çat boşladi")}`, "chat", newChat.id);
    activeChatTabId = newChat.id;
  } else {
    const title = document.getElementById("chatNewGroupName").value.trim() || t("Новая группа", "Yangi guruh");
    const members = [...new Set([currentUser.id, ...chatCreateSelectedIds])].sort();
    const existingGroup = (appState.chats || []).find(c => {
      if (c.type !== "group") return false;
      const cMembers = [...(c.members || [])].sort();
      return cMembers.length === members.length && cMembers.every((v, i) => v === members[i]) &&
        (c.title || "").trim().toLowerCase() === title.toLowerCase();
    });
    if (existingGroup) {
      activeChatTabId = existingGroup.id;
      closeModal("chatCreateModal");
      renderChatDrawer();
      showToast(t("Такая группа уже существует — открыт существующий чат", "Bunday guruh allaqaçon mavjud"));
      return;
    }
    const newGroup = {
      id: `grp_${Date.now()}`,
      type: "group",
      title,
      members,
      lastActivity: Date.now(),
      messages: []
    };
    appState.chats.push(newGroup);
    addSystemNotification(chatCreateSelectedIds, `${currentUser.name} ${t("добавил(а) вас в группу", "sizni guruhga qöşdi")}: «${title}»`, "chat", newGroup.id);
    activeChatTabId = newGroup.id;
  }

  saveState(true);
  syncChatHubToCloud();
  closeModal("chatCreateModal");
  renderChatDrawer();
}

function deleteChatById(chatId, btnEl) {
  askConfirmDelete(btnEl, () => {
    appState.chats = (appState.chats || []).filter(c => c.id !== chatId);
    if (activeChatTabId === chatId) activeChatTabId = "tasks";
    saveState(true);
  syncChatHubToCloud();
    renderChatDrawer();
    showToast(t("Чат удален", "Çat öçirildi"));
  });
}

// --- Задания (только админ / частичный админ) ---
function openChatTaskModal(taskId = null) {
  const existing = taskId ? (appState.tasks || []).find(tk => tk.id === taskId) : null;
  if (!existing && !hasAdminPrivileges()) return;
  if (existing && !hasAdminPrivileges() && existing.authorId !== currentUser.id) return;

  editingTaskId = existing ? existing.id : null;
  taskDraftColor = existing && existing.color ? existing.color : "#ef4444";
  taskDraftAssignees = existing && Array.isArray(existing.assignees) ? [...existing.assignees] : [];
  taskDraftTodos = existing && Array.isArray(existing.todos) ? JSON.parse(JSON.stringify(existing.todos)) : [];
  taskAssigneeSearch = "";

  const modalEl = document.getElementById("chatTaskModal");
  const titleEl = modalEl ? modalEl.querySelector(".modal-title") : null;
  const submitBtn = modalEl ? modalEl.querySelector(".modal-foot .btn-orange") : null;
  if (titleEl) {
    titleEl.textContent = existing
      ? t("Редактирование задания", "Vazifani tahrirlaş")
      : t("Новое задание", "Yangi vazifa");
  }
  if (submitBtn) {
    submitBtn.textContent = existing
      ? t("Сохранить изменения", "Özgarişlarni saqlaş")
      : t("Назначить задание", "Vazifa biriktiriş");
  }

  document.getElementById("taskTitleInput").value = existing ? (existing.title || "") : "";
  document.getElementById("taskDeadlineInput").value = existing ? (existing.deadline || "") : "";
  document.getElementById("taskTodoDraftInput").value = "";

  const colorOpts = [
    { value: "#ef4444", label: t("Красный (Срочно)", "Qizil (Şoşilinç)") },
    { value: "#ff6b3d", label: t("Оранжевый (Важно)", "Zarğaldoq (Muhim)") },
    { value: "#2563eb", label: t("Синий (Обычная)", "Kök (Oddiy)") },
    { value: "#10b981", label: t("Зеленый (Низкая)", "Yaşil (Past)") }
  ];
  const onColor = (v) => {
    taskDraftColor = v;
    renderCustomSelect("taskColorSelectWrap", colorOpts, v, onColor);
  };
  renderCustomSelect("taskColorSelectWrap", colorOpts, taskDraftColor, onColor);

  renderTaskAssigneesMultiSelect();
  renderDraftTaskTodos();
  document.getElementById("chatTaskModal").classList.remove("hidden");
}

function renderTaskAssigneesMultiSelect(keepOpen = false) {
  const wrap = document.getElementById("taskAssigneesWrap");
  if (!wrap) return;
  const wasOpen = keepOpen || wrap.classList.contains("open");
  const label = !taskDraftAssignees.length
    ? t("Выберите исполнителей...", "Ijroçilarni tanlang...")
    : `${t("Выбрано", "Tanlandi")}: ${taskDraftAssignees.length}`;

  wrap.innerHTML = `
    <div class="cs-trigger" onclick="toggleCustomSelect('taskAssigneesWrap')">
      <span>${label}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6l6 -6"/></svg>
    </div>
    <div class="cs-menu" onclick="event.stopPropagation()">
      <input type="text" id="taskAssSearch" class="tg-tag-search-input" placeholder="${t("Поиск...", "Qidiriş...")}" value="${taskAssigneeSearch}" oninput="taskAssigneeSearch=this.value; renderTaskAssigneesMultiSelect(true)" />
      <div class="tg-tag-search-list">
        ${(appState.users || []).filter(u => u.id !== currentUser.id && (u.name || "").toLowerCase().includes(taskAssigneeSearch.trim().toLowerCase())).map(u => `
          <label class="social-check-option">
            <input type="checkbox" ${taskDraftAssignees.includes(u.id) ? "checked" : ""} onchange="toggleTaskDraftAssignee('${u.id}')" />
            <span>${u.name}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `;
  if (wasOpen) wrap.classList.add("open");
}

function toggleTaskDraftAssignee(uid) {
  if (taskDraftAssignees.includes(uid)) {
    taskDraftAssignees = taskDraftAssignees.filter(x => x !== uid);
  } else {
    taskDraftAssignees.push(uid);
  }
  renderTaskAssigneesMultiSelect(true);
}

function addDraftTaskTodo() {
  const inp = document.getElementById("taskTodoDraftInput");
  if (!inp) return;
  const val = inp.value.trim();
  if (!val) return;
  taskDraftTodos.push({ text: val, done: false });
  inp.value = "";
  renderDraftTaskTodos();
}

function renderDraftTaskTodos() {
  const el = document.getElementById("taskDraftTodosList");
  if (!el) return;
  el.innerHTML = taskDraftTodos.map((td, idx) => `
    <div class="todo-item-row">
      <span style="font-size:12px;">${td.text}</span>
      <button type="button" class="btn-del-icon" onclick="taskDraftTodos.splice(${idx},1); renderDraftTaskTodos();">×</button>
    </div>
  `).join("");
}

function saveNewTask() {
  const title = document.getElementById("taskTitleInput").value.trim();
  if (!title || !taskDraftAssignees.length) {
    showToast(t("Укажите название задачи и исполнителей", "Vazifa nomi va ijroçilarni tanlang"));
    return;
  }

  const deadlineVal = document.getElementById("taskDeadlineInput").value || "";

  if (editingTaskId) {
    const existing = (appState.tasks || []).find(tk => tk.id === editingTaskId);
    if (existing) {
      existing.title = title;
      existing.assignees = [...taskDraftAssignees];
      existing.deadline = deadlineVal;
      existing.color = taskDraftColor;
      existing.todos = JSON.parse(JSON.stringify(taskDraftTodos));
      addSystemNotification(taskDraftAssignees, `${currentUser.name} ${t("обновил(а) задание", "vazifani yangiladi")}: «${title}»`, "task", existing.id);
    }
    editingTaskId = null;
    saveState(true);
    syncChatHubToCloud();
    closeModal("chatTaskModal");
    renderChatDrawer();
    if (activeTab === "calendar") renderCalendarAndBlog();
    showToast(t("Задание обновлено", "Vazifa yangilandi"));
    return;
  }

  const newTask = {
    id: `task_${Date.now()}`,
    title,
    authorId: currentUser.id,
    assignees: [...taskDraftAssignees],
    deadline: deadlineVal,
    color: taskDraftColor,
    todos: JSON.parse(JSON.stringify(taskDraftTodos)),
    status: "active",
    messages: []
  };

  appState.tasks.unshift(newTask);
  addSystemNotification(taskDraftAssignees, `${currentUser.name} ${t("назначил(а) новое задание", "yangi vazifa biriktirdi")}: «${title}»`, "task", newTask.id);
  saveState(true);
  syncChatHubToCloud();
  closeModal("chatTaskModal");
  activeChatTabId = "tasks";
  activeTasksSubtab = "active";
  renderChatDrawer();
  if (activeTab === "calendar") renderCalendarAndBlog();
  showToast(t("Задание назначено", "Vazifa biriktirildi"));
}

function toggleTaskTodoItem(taskId, todoIdx) {
  const task = (appState.tasks || []).find(tk => tk.id === taskId);
  if (!task || !task.todos || !task.todos[todoIdx]) return;
  task.todos[todoIdx].done = !task.todos[todoIdx].done;
  saveState(true);
  syncChatHubToCloud();
  renderChatDrawerBody();
}

function markTaskCompleted(taskId) {
  const task = (appState.tasks || []).find(tk => tk.id === taskId);
  if (!task || task.authorId !== currentUser.id) return;
  task.status = "completed";
  addSystemNotification(task.assignees, `${currentUser.name} ${t("отметил(а) задание выполненным", "vazifani bajarildi deb belgiladi")}: «${task.title}»`, "task", task.id);
  saveState(true);
  syncChatHubToCloud();
  activeTaskDiscussionId = null;
  activeTasksSubtab = "completed";
  renderChatDrawer();
  if (activeTab === "calendar") renderCalendarAndBlog();
  showToast(t("Задача перенесена в выполненные", "Vazifa bajarilganlarga ötkazildi"));
}

function deleteTaskById(taskId, btnEl) {
  const task = (appState.tasks || []).find(tk => tk.id === taskId);
  if (!task) return;
  if (!hasAdminPrivileges() && task.authorId !== currentUser.id) {
    showToast(t("Недостаточно прав для удаления", "Öçiriş uçun ruxsat yetarli emas"));
    return;
  }
  askConfirmDelete(btnEl, () => {
    appState.tasks = (appState.tasks || []).filter(tk => tk.id !== taskId);
    if (activeTaskDiscussionId === taskId) activeTaskDiscussionId = null;
    saveState(true);
    syncChatHubToCloud();
    renderChatDrawer();
    if (activeTab === "calendar") renderCalendarAndBlog();
    showToast(t("Задание удалено", "Vazifa öçirildi"));
  });
}

// --- Прикрепления (скрепка), Эмодзи, Опросы и Отправка ---
function toggleChatAttachMenu(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById("chatAttachMenu");
  if (menu) menu.classList.toggle("hidden");
}

function triggerChatFilePicker(kind) {
  const menu = document.getElementById("chatAttachMenu");
  if (menu) menu.classList.add("hidden");
  const inp = document.getElementById(kind === "image" ? "chatImageInput" : "chatDocInput");
  if (inp) {
    inp.value = "";
    inp.click();
  }
}

function handleChatFileSelected(e, kind) {
  const picked = Array.from(e.target.files || []);
  if (!picked.length) return;

  const bucket = kind === "image" ? chatPendingAttachments.images : chatPendingAttachments.files;
  const remaining = 10 - bucket.length;
  if (remaining <= 0) {
    showToast(t("Можно прикрепить не более 10 файлов этого типа", "Bu turdan köpi bilan 10 ta fayl biriktiriş mumkin"));
    return;
  }

  const toRead = picked.slice(0, remaining);
  if (picked.length > remaining) {
    showToast(t("Добавлены первые 10 вложений (лимит)", "Faqat birinçi 10 ta fayl qöşildi (limit)"));
  }

  toRead.forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      bucket.push({
        type: kind,
        name: file.name,
        dataUrl: reader.result
      });
      renderPendingAttachBar();
    };
    reader.readAsDataURL(file);
  });
}

function removePendingChatAttachment(kind, idx) {
  if (kind === "image") chatPendingAttachments.images.splice(idx, 1);
  else chatPendingAttachments.files.splice(idx, 1);
  renderPendingAttachBar();
}

function renderPendingAttachBar() {
  const bar = document.getElementById("chatPendingAttach");
  if (!bar) return;
  const imgs = chatPendingAttachments.images || [];
  const files = chatPendingAttachments.files || [];
  if (!imgs.length && !files.length) {
    bar.classList.add("hidden");
    bar.innerHTML = "";
    return;
  }
  bar.classList.remove("hidden");
  bar.innerHTML = [
    ...imgs.map((im, i) => `<div class="chat-pending-chip"><span>🖼️ ${im.name}</span><button type="button" onclick="removePendingChatAttachment('image', ${i})">×</button></div>`),
    ...files.map((fl, i) => `<div class="chat-pending-chip"><span>📄 ${fl.name}</span><button type="button" onclick="removePendingChatAttachment('file', ${i})">×</button></div>`)
  ].join("");
}

function toggleChatEmojiPicker(e) {
  if (e) e.stopPropagation();
  const pop = document.getElementById("chatEmojiPopover");
  if (!pop) return;
  if (!pop.innerHTML) {
    pop.innerHTML = CHAT_EMOJIS.map(em => `<button type="button" class="chat-emoji-btn" onclick="insertChatEmoji('${em}')">${em}</button>`).join("");
  }
  pop.classList.toggle("hidden");
}

function insertChatEmoji(em) {
  const inp = document.getElementById("chatMessageInput");
  if (inp) {
    inp.value += em;
    inp.focus();
  }
}

function openChatPollModal() {
  const menu = document.getElementById("chatAttachMenu");
  if (menu) menu.classList.add("hidden");
  document.getElementById("pollQuestionInput").value = "";
  document.getElementById("pollMultipleCheck").checked = false;
  document.getElementById("pollOptionsInputs").innerHTML = `
    <input type="text" class="form-input mb-8 poll-opt-inp" placeholder="${t("Вариант 1", "1-variant")}" />
    <input type="text" class="form-input mb-8 poll-opt-inp" placeholder="${t("Вариант 2", "2-variant")}" />
  `;
  document.getElementById("chatPollModal").classList.remove("hidden");
}

function addPollOptionInput() {
  const wrap = document.getElementById("pollOptionsInputs");
  const count = wrap.querySelectorAll(".poll-opt-inp").length + 1;
  wrap.insertAdjacentHTML("beforeend", `<input type="text" class="form-input mb-8 poll-opt-inp" placeholder="${t("Вариант", "Variant")} ${count}" />`);
}

function submitChatPoll() {
  const question = document.getElementById("pollQuestionInput").value.trim();
  const opts = [...document.querySelectorAll(".poll-opt-inp")].map(i => i.value.trim()).filter(Boolean);
  if (!question || opts.length < 2) {
    showToast(t("Введите вопрос и минимум 2 варианта ответа", "Savol va kamida 2 ta variant kiriting"));
    return;
  }
  const pollObj = {
    question,
    multiple: document.getElementById("pollMultipleCheck").checked,
    options: opts.map(text => ({ text, votes: [] }))
  };
  closeModal("chatPollModal");
  sendChatMessage(pollObj);
}

function voteInChatPoll(scopeType, scopeId, msgId, optIdx) {
  const container = scopeType === "task"
    ? (appState.tasks || []).find(tk => tk.id === scopeId)
    : (appState.chats || []).find(c => c.id === scopeId);
  if (!container) return;
  const msg = (container.messages || []).find(m => m.id === msgId);
  if (!msg || !msg.poll) return;

  const opt = msg.poll.options[optIdx];
  if (!opt) return;
  if (!Array.isArray(opt.votes)) opt.votes = [];

  if (msg.poll.multiple) {
    if (opt.votes.includes(currentUser.id)) {
      opt.votes = opt.votes.filter(x => x !== currentUser.id);
    } else {
      opt.votes.push(currentUser.id);
    }
  } else {
    msg.poll.options.forEach(o => {
      o.votes = (o.votes || []).filter(x => x !== currentUser.id);
    });
    opt.votes.push(currentUser.id);
  }
  saveState(true);
  syncChatHubToCloud();
  renderChatDrawerBody();
}

function sendChatMessage(pollObj = null) {
  const inp = document.getElementById("chatMessageInput");
  const text = inp ? inp.value.trim() : "";

  // Режим редактирования собственного сообщения
  if (chatEditTarget && !pollObj) {
    if (!text) return;
    const container = getChatMessagesContainer(chatEditTarget.scopeType, chatEditTarget.scopeId);
    if (container) {
      const targetMsg = (container.messages || []).find(m => m.id === chatEditTarget.msgId);
      if (targetMsg && targetMsg.senderId === currentUser.id) {
        targetMsg.text = text;
        targetMsg.edited = true;
      }
    }
    if (inp) inp.value = "";
    cancelChatContextMode();
    saveState(true);
    syncChatHubToCloud();
    renderChatDrawerBody();
    return;
  }

  const imgs = (chatPendingAttachments.images || []).slice(0, 10);
  const files = (chatPendingAttachments.files || []).slice(0, 10);
  if (!text && !imgs.length && !files.length && !pollObj) return;

  // Определяем реальные упоминания в тексте
  const mentionedIds = [...new Set(chatPendingMentions.filter(uid => {
    const u = (appState.users || []).find(x => x.id === uid);
    return u && text.includes("@" + u.name);
  }))];

  const nowTs = Date.now();
  const msg = {
    id: `msg_${nowTs}_${Math.random().toString(36).slice(2, 5)}`,
    ts: nowTs,
    senderId: currentUser.id,
    text,
    images: imgs,
    files: files,
    poll: pollObj || null,
    replyTo: chatReplyTarget ? { ...chatReplyTarget } : null,
    mentions: mentionedIds,
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  };

  let refType = "chat";
  let refId = activeChatTabId;
  let chatTitle = "";

  if (activeChatTabId === "tasks" && activeTaskDiscussionId) {
    const task = (appState.tasks || []).find(tk => tk.id === activeTaskDiscussionId);
    if (!task) return;
    if (!Array.isArray(task.messages)) task.messages = [];
    task.messages.push(msg);
    refType = "task";
    refId = task.id;
    chatTitle = task.title;
  } else {
    const chat = (appState.chats || []).find(c => c.id === activeChatTabId);
    if (!chat) return;
    if (!Array.isArray(chat.messages)) chat.messages = [];
    chat.messages.push(msg);
    chat.lastActivity = nowTs;
    chatTitle = getChatDisplayName(chat);
  }

  // Уведомление об ответе на сообщение
  if (msg.replyTo && msg.replyTo.senderId && msg.replyTo.senderId !== currentUser.id) {
    addSystemNotification(
      [msg.replyTo.senderId],
      `${currentUser.name} ${t("ответил(а) на ваше сообщение в", "xabaringizga javob berdi")}: «${chatTitle}»`,
      refType,
      refId
    );
  }

  // Уведомления об @-упоминаниях
  if (mentionedIds.length) {
    addSystemNotification(
      mentionedIds,
      `${currentUser.name} ${t("отметил(а) вас в чате", "sizni çatda belgiladi")}: «${chatTitle}»`,
      refType,
      refId
    );
  }

  if (inp) inp.value = "";
  chatPendingAttachments = { images: [], files: [] };
  chatPendingMentions = [];
  cancelChatContextMode();
  closeChatMentionPopover();
  renderPendingAttachBar();
  saveState(true);
  syncChatHubToCloud();
  renderChatTabsBar();
  renderChatDrawerBody();
}

// --- Колокольчик уведомлений ---
function toggleChatNotifications(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById("chatNotifDropdown");
  if (!dd) return;
  const willOpen = dd.classList.contains("hidden");
  dd.classList.toggle("hidden", !willOpen);

  if (willOpen) {
    const myNotifs = (appState.notifications || []).filter(n => n.userId === currentUser.id);
    dd.innerHTML = myNotifs.length
      ? myNotifs.slice(0, 20).map(n => `
          <div class="chat-notif-item ${n.read ? '' : 'unread'}" onclick="openNotificationTarget('${n.id}')">
            <div>${n.text}</div>
            <div class="st-meta">${n.time}</div>
          </div>
        `).join("")
      : `<div class="st-meta" style="padding:10px; text-align:center;">${t("Уведомлений пока нет", "Bildirişnomalar hozirça yöq")}</div>`;
  }
}

function openNotificationTarget(notifId) {
  const n = (appState.notifications || []).find(x => x.id === notifId);
  if (!n) return;
  n.read = true;
  saveState(true);
  syncChatHubToCloud();
  const dd = document.getElementById("chatNotifDropdown");
  if (dd) dd.classList.add("hidden");

  if (n.refType === "task") {
    activeChatTabId = "tasks";
    activeTaskDiscussionId = n.refId;
  } else if (n.refType === "chat") {
    activeChatTabId = n.refId;
    activeTaskDiscussionId = null;
  }
  renderChatDrawer();
}


// ==================== ОБЩАЯ СИНХРОНИЗАЦИЯ ЧАТОВ, ЗАДАНИЙ И УВЕДОМЛЕНИЙ (GOOGLE DRIVE) ====================
let chatHubPollTimer = null;
let chatHubLastHash = "";
let chatHubSyncInFlight = false;
let chatHubSaveInFlight = 0;
let chatHubSyncVersion = 0;

function syncChatHubToCloud() {
  if (!currentUser || typeof APPS_SCRIPT_URL === "undefined" || !APPS_SCRIPT_URL.includes("/exec")) return;
  const hubPayload = {
    chats: appState.chats || [],
    tasks: appState.tasks || [],
    notifications: appState.notifications || []
  };
  chatHubLastHash = JSON.stringify(hubPayload);
  chatHubSyncVersion++;
  chatHubSaveInFlight++;

  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      action: "saveChatHub",
      token: sessionToken,
      hub: hubPayload
    })
  })
    .catch(() => {})
    .finally(() => {
      chatHubSaveInFlight = Math.max(0, chatHubSaveInFlight - 1);
    });
}

async function loadChatHubFromCloud() {
  if (
    !currentUser ||
    chatHubSyncInFlight ||
    chatHubSaveInFlight > 0 ||
    typeof APPS_SCRIPT_URL === "undefined" ||
    !APPS_SCRIPT_URL.includes("/exec")
  ) return;

  chatHubSyncInFlight = true;
  const reqVersion = chatHubSyncVersion;

  try {
    if (!sessionToken) return;
    const res = await fetch(`${APPS_SCRIPT_URL}?action=getChatHub&token=${encodeURIComponent(sessionToken)}&t=${Date.now()}`, {
      method: "GET",
      redirect: "follow"
    });
    const json = await res.json();
    if (json && json.status === "unauthorized") {
      handleSessionExpired();
      return;
    }

    // Если во время загрузки пользователь отправил новое сообщение — игнорируем устаревший ответ
    if (reqVersion !== chatHubSyncVersion || chatHubSaveInFlight > 0) return;

    if (json && json.status === "ok") {
      if (Array.isArray(json.onlineUserIds)) {
        const nextSet = new Set(json.onlineUserIds);
        if (currentUser && currentUser.id) nextSet.add(currentUser.id);
        const prevKey = [...onlineUserIds].sort().join(",");
        const nextKey = [...nextSet].sort().join(",");
        if (prevKey !== nextKey) {
          onlineUserIds = nextSet;
          if (chatDrawerOpen) {
            renderChatTabsBar();
            renderChatDrawerBody();
          }
          const activeEl = document.activeElement;
          const isTyping = activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA");
          if (!isTyping) renderAllViews();
        }
      }
    }
    if (json && json.status === "ok" && json.hub) {
      const incomingHub = {
        chats: deduplicateById(json.hub.chats || []),
        tasks: deduplicateById(json.hub.tasks || []),
        notifications: deduplicateById(json.hub.notifications || [])
      };
      const nextHash = JSON.stringify(incomingHub);
      if (nextHash !== chatHubLastHash) {
        chatHubLastHash = nextHash;
        appState.chats = incomingHub.chats;
        appState.tasks = incomingHub.tasks;
        appState.notifications = incomingHub.notifications;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));

        updateChatIndicators();
        if (chatDrawerOpen) {
          renderChatTabsBar();
          renderChatDrawerBody();
        }
        if (activeTab === "calendar") {
          renderCalendarAndBlog();
        }
      }
    }
  } catch (err) {
    // Тихо игнорируем временные сетевые сбои при фоновом опросе
  } finally {
    chatHubSyncInFlight = false;
  }
}

function startChatHubPolling() {
  stopChatHubPolling();
  loadChatHubFromCloud();
  chatHubPollTimer = setInterval(() => {
    if (currentUser && !document.hidden && chatHubSaveInFlight === 0) {
      loadChatHubFromCloud();
    }
  }, 10000);
}

function stopChatHubPolling() {
  if (chatHubPollTimer) {
    clearInterval(chatHubPollTimer);
    chatHubPollTimer = null;
  }
}
