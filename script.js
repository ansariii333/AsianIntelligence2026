const profileOptions = [
  {
    id: "mobility-support",
    label: "Поддержка мобильности",
    search: "Отдавать приоритет пандусам, лифтам, входам без ступенек и ровным покрытиям.",
    route: "Избегать лестниц, крутых уклонов и перекрытых тротуаров.",
  },
  {
    id: "blind-support",
    label: "Незрячий / слабовидящий",
    search: "Отдавать приоритет тактильным маршрутам, шрифту Брайля и понятным входам.",
    route: "Предпочитать тактильные линии, заметные ориентиры и предсказуемые переходы.",
  },
  {
    id: "deaf-support",
    label: "Глухой / слабослышащий",
    search: "Отдавать приоритет визуальным предупреждениям, текстовой помощи и жестовой поддержке.",
    route: "Предпочитать понятные дисплеи и точки обслуживания с текстовой коммуникацией.",
  },
  {
    id: "sensory-friendly",
    label: "Сенсорно комфортно",
    search: "Отдавать приоритет тихим местам и зонам с небольшим количеством людей.",
    route: "Избегать шума, большого трафика и стройки.",
  },
  {
    id: "elderly",
    label: "Пожилой человек",
    search: "Отдавать приоритет местам с сиденьями, коротким пешим маршрутам и безопасным покрытиям.",
    route: "Избегать запутанных подходов и нестабильных покрытий.",
  },
  {
    id: "temporary-injury",
    label: "Временная травма",
    search: "Отдавать приоритет маршрутам с меньшей нагрузкой и удобной высадкой.",
    route: "Предпочитать лифты и близкие точки высадки.",
  },
];

const audienceLabels = {
  "mobility-support": "Поддержка мобильности",
  "blind-support": "Незрячий / слабовидящий",
  "deaf-support": "Глухой / слабослышащий",
  "sensory-friendly": "Сенсорно комфортно",
  elderly: "Пожилой человек",
  "temporary-injury": "Временная травма",
};

const mapAudienceOptions = [
  { id: "all", label: "Все места" },
  { id: "mobility-support", label: "Мобильность" },
  { id: "blind-support", label: "Незрячий / слабовидящий" },
  { id: "deaf-support", label: "Глухой / слух" },
];

const filterLabels = {
  quiet: "Тихое место",
  clinic: "Клиника",
  library: "Библиотека",
  cafe: "Кафе",
  "mobility-support": "Поддержка мобильности",
  "blind-support": "Поддержка незрячих",
  "deaf-support": "Поддержка глухих",
};

const places = [
  {
    id: "cafe-orbit",
    name: "Кафе Орбит",
    category: "Тихое кафе",
    address: "Район Алатау, квартал рядом с транзитной аркадой",
    distance: "420 m",
    x: "66%",
    y: "23%",
    lat: 43.2386,
    lng: 76.9211,
    confidence: 94,
    tags: ["mobility-support", "deaf-support", "sensory-friendly", "elderly"],
    description:
      "Спокойное кафе со входом без ступенек, заказом через текст и удобными местами рядом с транзитной зоной.",
    attributes: [
      "Вход без ступенек",
      "Доступный туалет",
      "Визуальное меню",
      "Тихая зона",
      "Небольшой поток людей",
      "Ровное покрытие",
    ],
    optional: ["Доступная высота стойки", "Широкий дверной проём"],
    lastMeters: [
      "Используйте восточный съезд с бордюра рядом с бирюзовым навесом.",
      "Дверь открывается автоматически с правой стороны.",
      "Доступная стойка находится прямо впереди.",
    ],
    routeNote: "Сегодня лучше идти через внутреннюю аркаду, потому что часть тротуара рядом сужена ограждением.",
    trust: ["Подтверждено местом", "Недавно обновлено", "Подтверждено сообществом"],
  },
  {
    id: "clinic-sunrise",
    name: "Клиника Санрайз",
    category: "Клиника",
    address: "Северный медицинский коридор Алатау",
    distance: "780 m",
    x: "24%",
    y: "68%",
    lat: 43.2296,
    lng: 76.9098,
    confidence: 91,
    tags: ["mobility-support", "blind-support", "elderly", "temporary-injury"],
    description:
      "Клиника с лифтом, тактильной навигацией от бордюра и спокойной зоной регистрации.",
    attributes: [
      "Вход без ступенек",
      "Лифт",
      "Таблички Брайлем",
      "Тактильная навигация",
      "Визуальная и аудио очередь",
      "Доступные сиденья",
    ],
    optional: ["Точка высадки рядом", "Хорошее освещение"],
    lastMeters: [
      "Подходите со стороны северной точки высадки.",
      "Следуйте по тактильной полосе до главного входа.",
      "Холл с лифтом находится сразу слева от стойки регистрации.",
    ],
    routeNote: "Используйте северный вход, пока основной пандус находится на ремонте.",
    trust: ["Подтверждено местом", "Недавно обновлено"],
  },
  {
    id: "tactile-library",
    name: "Тактильная библиотека",
    category: "Библиотека",
    address: "Центральная общественная площадь Алатау",
    distance: "640 m",
    x: "33%",
    y: "18%",
    lat: 43.2422,
    lng: 76.9146,
    confidence: 90,
    tags: ["blind-support", "deaf-support", "sensory-friendly"],
    description:
      "Библиотека с надписями Брайлем на полках, тактильной навигацией и стойками помощи с текстовой коммуникацией.",
    attributes: [
      "Тактильная навигация",
      "Подписи Брайлем на полках",
      "Аудиомаяк у входа",
      "Киоск жестовой помощи",
      "Тихая зона",
      "Визуальное табло экстренной информации",
    ],
    optional: ["Есть станции со скринридером", "Небольшой поток людей"],
    lastMeters: [
      "Следуйте по тактильной линии от перехода на площади.",
      "Маяк у входа указывает нужную дверь.",
      "На стойке помощи есть текстовый терминал.",
    ],
    routeNote: "Это один из лучших вариантов для незрячих и глухих пользователей, потому что здесь есть и тактильная, и визуальная навигация.",
    trust: ["Подтверждено сообществом", "Недавно обновлено"],
  },
  {
    id: "civic-service-center",
    name: "Городской сервисный центр",
    category: "Центр поддержки",
    address: "Сервисный проспект Алатау",
    distance: "910 m",
    x: "52%",
    y: "55%",
    lat: 43.2334,
    lng: 76.9182,
    confidence: 88,
    tags: ["mobility-support", "deaf-support", "temporary-injury"],
    description:
      "Центр услуг с доступным входом, жестовой поддержкой, визуальными предупреждениями и текстовым терминалом помощи.",
    attributes: [
      "Вход без ступенек",
      "Лифт",
      "Поддержка жестовым языком",
      "Визуальные предупреждения",
      "Текстовый терминал",
      "Доступная высота стойки",
    ],
    optional: ["Есть зона высадки"],
    lastMeters: [
      "Используйте пандус со стороны площади.",
      "Номера очереди показываются на большом цифровом табло.",
      "Стойка 3 поддерживает текстовое обслуживание.",
    ],
    routeNote: "Подходит, если общение должно происходить через текст или жестовую поддержку.",
    trust: ["Подтверждено местом", "Подтверждено сообществом"],
  },
];

const safeZone = {
  id: "transit-hub-safe-zone",
  name: "Безопасная зона у транзитного узла",
  x: "18%",
  y: "16%",
  lat: 43.2408,
  lng: 76.9052,
  detail:
    "Вход без ступенек со стороны восточной аркады, тактильная линия от перехода, визуальные табло и помощь волонтёров у входа B.",
  route:
    "Следуйте по зелёному коридору от площади. Стойка безопасной зоны находится в 25 метрах после главного входа.",
};

const initialHazards = [
  {
    id: "hazard-1",
    title: "Тротуар перекрыт",
    detail: "Строительное ограждение сужает подход к бордюру возле Кафе Орбит.",
    source: "Подтверждено сообществом",
    placeId: "cafe-orbit",
    x: "47%",
    y: "40%",
    lat: 43.2369,
    lng: 76.9186,
    alternative: "Используйте вход через внутреннюю аркаду.",
  },
  {
    id: "hazard-2",
    title: "Пандус на ремонте",
    detail: "Основной пандус клиники сегодня закрыт.",
    source: "Подтверждено местом",
    placeId: "clinic-sunrise",
    x: "60%",
    y: "78%",
    lat: 43.2287,
    lng: 76.9114,
    alternative: "Используйте северный вход и тактильную полосу.",
  },
  {
    id: "hazard-3",
    title: "Обслуживание маяка",
    detail: "Входной аудиомаяк библиотеки сегодня работает тише обычного.",
    source: "Обновление от сотрудников",
    placeId: "tactile-library",
    x: "22%",
    y: "31%",
    lat: 43.2412,
    lng: 76.9131,
    alternative: "Используйте тактильную линию и крупные указатели.",
  },
];

const DEFAULT_PLACES = JSON.parse(JSON.stringify(places));
const DEFAULT_HAZARDS = JSON.parse(JSON.stringify(initialHazards));
const DB_NAME = "alatau-accessibility-db";
const DB_VERSION = 1;
const DB_STORES = {
  places: "places",
  hazards: "hazards",
};
const ALATAU_CENTER = [43.2388, 76.9162];
const AUTH_STORAGE_KEY = "alatau-users";
const CURRENT_USER_KEY = "alatau-current-user";
const API_BASE =
  window.location.protocol.startsWith("http") ? "backend/api.php" : "http://127.0.0.1:8080/backend/api.php";

const state = {
  selectedTags: loadSelectedTags(),
  currentQuery: "",
  currentFilters: [],
  selectedPlaceId: "cafe-orbit",
  emergencyMode: false,
  hazards: [...initialHazards],
  mapAudience: "all",
  mapFocus: { type: "place", id: "cafe-orbit" },
  userLocation: null,
  dbReady: false,
  currentUser: loadCurrentUser(),
  route: null,
  chatMessages: [],
  backendAvailable: false,
};

const mapRuntime = {
  map: null,
  tileLayer: null,
  placeLayer: null,
  hazardLayer: null,
  safeLayer: null,
  userLayer: null,
  routeLayer: null,
};

function loadSelectedTags() {
  try {
    const saved = JSON.parse(localStorage.getItem("alatau-profile-tags") || "[]");
    return Array.isArray(saved) && saved.length > 0 ? saved : ["mobility-support", "blind-support"];
  } catch {
    return ["mobility-support", "blind-support"];
  }
}

function saveSelectedTags() {
  localStorage.setItem("alatau-profile-tags", JSON.stringify(state.selectedTags));
}

function loadUsers() {
  try {
    const saved = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
}

function loadCurrentUser() {
  try {
    const saved = JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || "null");
    return saved && typeof saved === "object" ? saved : null;
  } catch {
    return null;
  }
}

function saveCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

async function apiRequest(action, options = {}) {
  const method = options.method || "GET";
  const requestOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  };

  if (options.body !== undefined) {
    requestOptions.body = JSON.stringify(options.body);
  }

  const response = await fetch(`${API_BASE}?action=${encodeURIComponent(action)}`, requestOptions);
  const payload = await response.json();
  if (!response.ok || payload.ok === false) {
    throw new Error(payload.error || `Ошибка API: ${action}`);
  }
  return payload;
}

async function detectBackend() {
  try {
    await apiRequest("health");
    state.backendAvailable = true;
    return true;
  } catch {
    state.backendAvailable = false;
    return false;
  }
}

function setStatus(elementId, message, isError) {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.textContent = message;
  element.className = `field-note ${isError ? "danger-note" : "success-note"}`;
}

function collectCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value);
}

function applyCurrentUserToState() {
  if (!state.currentUser) {
    return;
  }
  if (Array.isArray(state.currentUser.tags) && state.currentUser.tags.length > 0) {
    state.selectedTags = [...new Set(state.currentUser.tags)];
    saveSelectedTags();
  }
}

function renderAuthState() {
  const overlay = document.getElementById("auth-overlay");
  const userPill = document.getElementById("current-user-pill");
  const logoutButton = document.getElementById("logout-button");

  if (state.currentUser) {
    overlay.classList.remove("is-open");
    userPill.textContent = state.currentUser.name || state.currentUser.email || "Пользователь";
    logoutButton.hidden = false;
  } else {
    overlay.classList.add("is-open");
    userPill.textContent = "Гость";
    logoutButton.hidden = true;
  }
}

function closeAuthOverlay() {
  const overlay = document.getElementById("auth-overlay");
  if (overlay) {
    overlay.classList.remove("is-open");
  }
}

function openAuthOverlay() {
  const overlay = document.getElementById("auth-overlay");
  if (overlay) {
    overlay.classList.add("is-open");
  }
}

function renderUserProfilePanel() {
  const panel = document.getElementById("user-profile-panel");
  if (!panel) return;

  if (!state.currentUser) {
    panel.innerHTML = `
      <div class="route-summary">
        <strong>Сессия пользователя не найдена</strong>
        <span>Зарегистрируйтесь или войдите, чтобы сохранить личные потребности и использовать их в ответах ассистента.</span>
      </div>
    `;
    return;
  }

  panel.innerHTML = `
    <div class="detail-list">
      <div><strong>Имя</strong><span>${state.currentUser.name || "Не указано"}</span></div>
      <div><strong>Эл. почта</strong><span>${state.currentUser.email || "Не указано"}</span></div>
      <div><strong>Потребности</strong><span>${(state.currentUser.tags || []).map((tag) => audienceLabels[tag] || tag).join(", ") || "Не указано"}</span></div>
      <div><strong>О себе</strong><span>${state.currentUser.about || "Пока нет заметки профиля."}</span></div>
    </div>
  `;
}

function handleLogout() {
  state.currentUser = null;
  localStorage.removeItem(CURRENT_USER_KEY);
  openAuthOverlay();
  renderAuthState();
  renderUserProfilePanel();
  setStatus("auth-status", "Вы вышли из аккаунта.", false);
}

function validateAuthDraft() {
  const name = document.getElementById("auth-name").value.trim();
  const email = document.getElementById("auth-email").value.trim().toLowerCase();
  const password = document.getElementById("auth-password").value.trim();
  const about = document.getElementById("auth-about").value.trim();
  const tags = collectCheckedValues("auth-tag");

  if (!name || !email || !password) {
    throw new Error("Имя, электронная почта и пароль обязательны.");
  }

  return {
    name,
    email,
    password,
    about,
    tags: tags.length > 0 ? tags : ["mobility-support"],
  };
}

async function handleDemoUser() {
  try {
    const users = state.backendAvailable ? (await apiRequest("users")).users : loadUsers();
    if (users.length === 0) {
      setStatus("auth-status", "Сохранённый аккаунт не найден. Сначала зарегистрируйтесь.", true);
      return;
    }
    finishAuthSuccess(users[0], state.backendAvailable ? "из SQLite" : "локально");
  } catch (error) {
    setStatus("auth-status", `Не удалось загрузить сохранённый аккаунт: ${error.message}`, true);
  }
}

function handleConfirmAuth() {
  submitAuthFlow();
}

function saveUserLocally(draft) {
  const users = loadUsers();
  const existing = users.find((user) => user.email === draft.email);

  if (existing && existing.password !== draft.password) {
        throw new Error("Неверный пароль для этого сохранённого аккаунта.");
  }

  const nextUser = existing
    ? { ...existing, name: draft.name, about: draft.about, tags: draft.tags, password: draft.password }
    : {
        id: `user-${Date.now()}`,
        ...draft,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

  const nextUsers = existing
    ? users.map((user) => (user.email === draft.email ? nextUser : user))
    : [...users, nextUser];
  saveUsers(nextUsers);
  return nextUser;
}

function finishAuthSuccess(nextUser, sourceLabel) {
  state.currentUser = nextUser;
  saveCurrentUser(nextUser);
  applyCurrentUserToState();
  closeAuthOverlay();
  document.getElementById("auth-form").reset();
  try {
    render();
  } catch {
    renderAuthState();
    renderUserProfilePanel();
  }
  setStatus("auth-status", `Добро пожаловать, ${nextUser.name}. Ваш профиль сохранён ${sourceLabel}.`, false);
}

async function submitAuthFlow() {
  try {
    const draft = validateAuthDraft();
    let nextUser = null;

    if (state.backendAvailable) {
      try {
        nextUser = (await apiRequest("auth", { method: "POST", body: draft })).user;
      } catch (error) {
        state.backendAvailable = false;
        setStatus("db-status", `Сервер авторизации недоступен, профиль сохранён локально: ${error.message}`, true);
      }
    }

    if (!nextUser) {
      nextUser = saveUserLocally(draft);
      finishAuthSuccess(nextUser, "локально");
      return;
    }

    finishAuthSuccess(nextUser, "в SQLite");
  } catch (error) {
    setStatus("auth-status", error.message, true);
  }
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  await submitAuthFlow();
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB не поддерживается в этом браузере."));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_STORES.places)) {
        db.createObjectStore(DB_STORES.places, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(DB_STORES.hazards)) {
        db.createObjectStore(DB_STORES.hazards, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Не удалось открыть базу данных."));
  });
}

function runStore(storeName, mode, callback) {
  return openDatabase().then(
    (db) =>
      new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, mode);
        const store = transaction.objectStore(storeName);
        const request = callback(store);
        if (request) {
          request.onsuccess = () => resolve(request.result);
          request.onerror = () => reject(request.error || new Error(`Ошибка запроса к хранилищу: ${storeName}`));
        } else {
          transaction.oncomplete = () => resolve();
        }
        transaction.onerror = () => reject(transaction.error || new Error(`Ошибка транзакции: ${storeName}`));
      }),
  );
}

function getAllFromStore(storeName) {
  return runStore(storeName, "readonly", (store) => store.getAll());
}

function putToStore(storeName, value) {
  return runStore(storeName, "readwrite", (store) => store.put(value));
}

function clearStore(storeName) {
  return runStore(storeName, "readwrite", (store) => store.clear());
}

async function seedDatabaseIfNeeded() {
  const storedPlaces = await getAllFromStore(DB_STORES.places);
  if (storedPlaces.length === 0) {
    await Promise.all(DEFAULT_PLACES.map((place) => putToStore(DB_STORES.places, place)));
  }

  const storedHazards = await getAllFromStore(DB_STORES.hazards);
  if (storedHazards.length === 0) {
    await Promise.all(DEFAULT_HAZARDS.map((hazard) => putToStore(DB_STORES.hazards, hazard)));
  }
}

async function syncBackendToIndexedDb() {
  if (!state.backendAvailable) {
    return;
  }

  const [backendPlaces, backendHazards] = await Promise.all([
    apiRequest("places").then((result) => result.places),
    apiRequest("hazards").then((result) => result.hazards),
  ]);

  if (backendPlaces.length > 0) {
    await clearStore(DB_STORES.places);
    await Promise.all(backendPlaces.map((place) => putToStore(DB_STORES.places, place)));
  }

  if (backendHazards.length > 0) {
    await clearStore(DB_STORES.hazards);
    await Promise.all(backendHazards.map((hazard) => putToStore(DB_STORES.hazards, hazard)));
  }
}

async function loadDatabaseData() {
  const [storedPlaces, storedHazards] = await Promise.all([
    getAllFromStore(DB_STORES.places),
    getAllFromStore(DB_STORES.hazards),
  ]);

  places.length = 0;
  storedPlaces.forEach((place) => places.push(place));
  state.hazards = storedHazards;
  state.dbReady = true;
  ensureSelection();
}

async function initializeDatabase() {
  try {
    await detectBackend();
    await seedDatabaseIfNeeded();
    await syncBackendToIndexedDb();
    await loadDatabaseData();
    setStatus(
      "db-status",
      `База данных подключена. ${state.backendAvailable ? "Бэкенд SQLite онлайн." : "Приложение работает только локально."}`,
      false,
    );
  } catch (error) {
    state.dbReady = false;
    setStatus("db-status", `Ошибка базы данных: ${error.message}`, true);
  }
}

async function savePlaceToDatabase(place) {
  await putToStore(DB_STORES.places, place);
  if (state.backendAvailable) {
    await apiRequest("place", { method: "POST", body: place });
  }
  await loadDatabaseData();
}

async function saveHazardToDatabase(hazard) {
  await putToStore(DB_STORES.hazards, hazard);
  if (state.backendAvailable) {
    await apiRequest("hazard", { method: "POST", body: hazard });
  }
  await loadDatabaseData();
}

async function reloadDatabaseData() {
  await loadDatabaseData();
  render();
  setStatus("db-status", "База данных обновлена из IndexedDB.", false);
}

async function resetDatabaseData() {
  await clearStore(DB_STORES.places);
  await clearStore(DB_STORES.hazards);
  await seedDatabaseIfNeeded();
  await loadDatabaseData();
  render();
  setStatus("db-status", "База данных сброшена к стандартному набору Alatau.", false);
}

function normalizeText(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function buildSearchBlob(place) {
  return normalizeText(
    [place.name, place.category, place.description, place.routeNote, ...place.attributes, ...place.optional].join(" "),
  );
}

function formatDistanceKm(distanceKm) {
  return distanceKm < 1 ? `${Math.round(distanceKm * 1000)} m` : `${distanceKm.toFixed(1)} km`;
}

function haversineDistance(lat1, lng1, lat2, lng2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getDistanceLabel(place) {
  if (!state.userLocation || typeof place.lat !== "number" || typeof place.lng !== "number") {
    return place.distance;
  }
  return formatDistanceKm(haversineDistance(state.userLocation.lat, state.userLocation.lng, place.lat, place.lng));
}

function getEstimatedWalkingSpeedKmh() {
  if (state.selectedTags.includes("mobility-support")) return 3.2;
  if (state.selectedTags.includes("temporary-injury")) return 2.8;
  if (state.selectedTags.includes("elderly")) return 3.0;
  return 4.5;
}

function getRouteOrigin() {
  if (state.userLocation) {
    return state.userLocation;
  }
  const map = mapRuntime.map;
  if (map) {
    const center = map.getCenter();
    return { lat: center.lat, lng: center.lng };
  }
  return { lat: ALATAU_CENTER[0], lng: ALATAU_CENTER[1] };
}

function getPlaceById(placeId) {
  return places.find((place) => place.id === placeId) || places[0];
}

function getHazardById(hazardId) {
  return state.hazards.find((hazard) => hazard.id === hazardId) || state.hazards[0];
}

function parseQuery(query) {
  const text = normalizeText(query);
  const filters = [];

  if (!text) return filters;
  if (text.includes("blind") || text.includes("braille") || text.includes("такт") || text.includes("слеп")) filters.push("blind-support");
  if (text.includes("deaf") || text.includes("sign") || text.includes("глух") || text.includes("жест")) filters.push("deaf-support");
  if (text.includes("step-free") || text.includes("ramp") || text.includes("wheelchair") || text.includes("пандус") || text.includes("опорно")) filters.push("mobility-support");
  if (text.includes("quiet") || text.includes("тихий")) filters.push("quiet");
  if (text.includes("clinic") || text.includes("клиник")) filters.push("clinic");
  if (text.includes("library") || text.includes("библиот")) filters.push("library");
  if (text.includes("cafe") || text.includes("кафе")) filters.push("cafe");

  return [...new Set(filters)];
}

function scorePlace(place) {
  const blob = buildSearchBlob(place);
  let score = place.confidence;

  state.selectedTags.forEach((tag) => {
    if (place.tags.includes(tag)) score += 9;
  });

  state.currentFilters.forEach((filter) => {
    if (filter === "quiet" && blob.includes("quiet")) score += 10;
    if (filter === "clinic" && blob.includes("clinic")) score += 10;
    if (filter === "library" && blob.includes("library")) score += 10;
    if (filter === "cafe" && blob.includes("cafe")) score += 10;
    if (place.tags.includes(filter)) score += 12;
  });

  return score;
}

function getRankedPlaces() {
  return [...places].sort((a, b) => scorePlace(b) - scorePlace(a));
}

function getVisiblePlaces() {
  const ranked = getRankedPlaces();
  if (state.mapAudience === "all") return ranked;
  return ranked.filter((place) => place.tags.includes(state.mapAudience));
}

function getVisibleHazards() {
  if (state.mapAudience === "all") return state.hazards;
  const visibleIds = new Set(getVisiblePlaces().map((place) => place.id));
  return state.hazards.filter((hazard) => visibleIds.has(hazard.placeId));
}

function ensureSelection() {
  const visiblePlaces = getVisiblePlaces();
  if (visiblePlaces.length === 0) {
    state.mapFocus = { type: "safe-zone", id: safeZone.id };
    return;
  }
  if (!visiblePlaces.some((place) => place.id === state.selectedPlaceId)) {
    state.selectedPlaceId = visiblePlaces[0].id;
  }
  if (state.mapFocus.type === "place" && !visiblePlaces.some((place) => place.id === state.mapFocus.id)) {
    state.mapFocus = { type: "place", id: state.selectedPlaceId };
  }
  if (state.mapFocus.type === "hazard" && !getVisibleHazards().some((hazard) => hazard.id === state.mapFocus.id)) {
    state.mapFocus = { type: "place", id: state.selectedPlaceId };
  }
}

function resetRouteIfPlaceChanged(nextPlaceId) {
  if (state.route && state.route.placeId !== nextPlaceId) {
    state.route = null;
    if (mapRuntime.routeLayer) {
      mapRuntime.routeLayer.clearLayers();
    }
  }
}

function setQuery(query) {
  state.currentQuery = query.trim();
  state.currentFilters = parseQuery(state.currentQuery);
  render();
}

function toggleTag(tagId) {
  if (state.selectedTags.includes(tagId)) {
    state.selectedTags = state.selectedTags.filter((tag) => tag !== tagId);
  } else {
    state.selectedTags = [...state.selectedTags, tagId];
  }
  render();
}

function selectPlace(placeId, scrollToPlaceCard) {
  resetRouteIfPlaceChanged(placeId);
  state.selectedPlaceId = placeId;
  state.mapFocus = { type: "place", id: placeId };
  render();
  if (scrollToPlaceCard) {
    document.querySelector("#place").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setMapAudience(audienceId) {
  state.mapAudience = audienceId;
  ensureSelection();
  render();
}

function setMapFocus(type, id) {
  if (type === "place") {
    resetRouteIfPlaceChanged(id);
  }
  state.mapFocus = { type, id };
  if (type === "place") {
    state.selectedPlaceId = id;
  }
  render();
}

function handleEmergencyToggle(forceState) {
  state.emergencyMode = typeof forceState === "boolean" ? forceState : !state.emergencyMode;
  document.body.classList.toggle("emergency-mode", state.emergencyMode);
  if (state.emergencyMode) {
    state.mapFocus = { type: "safe-zone", id: safeZone.id };
  } else {
    state.mapFocus = { type: "place", id: state.selectedPlaceId };
  }
  render();
}

function renderProfileTags() {
  const container = document.getElementById("profile-tags");
  container.innerHTML = "";

  profileOptions.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tag-button${state.selectedTags.includes(option.id) ? " is-active" : ""}`;
    button.textContent = option.label;
    button.setAttribute("aria-pressed", state.selectedTags.includes(option.id) ? "true" : "false");
    button.addEventListener("click", () => toggleTag(option.id));
    container.appendChild(button);
  });
}

function renderProfileSummary() {
  const summary = document.getElementById("profile-summary");
  const searchBehavior = document.getElementById("search-behavior-copy");
  const routeBehavior = document.getElementById("route-behavior-copy");
  const chosen = profileOptions.filter((option) => state.selectedTags.includes(option.id));

  summary.innerHTML = "";
  if (chosen.length === 0) {
    summary.innerHTML = "<li>No profile tags selected yet.</li>";
    searchBehavior.textContent = "Results are not personalized yet.";
    routeBehavior.textContent = "Routing uses the default safest route.";
    return;
  }

  chosen.forEach((option) => {
    const item = document.createElement("li");
    item.textContent = option.label;
    summary.appendChild(item);
  });

  searchBehavior.textContent = chosen.map((option) => option.search).join(" ");
  routeBehavior.textContent = chosen.map((option) => option.route).join(" ");
}

function renderMapFilters() {
  const row = document.getElementById("map-filter-row");
  row.innerHTML = "";

  mapAudienceOptions.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `map-filter-button${state.mapAudience === option.id ? " is-active" : ""}`;
    button.textContent = option.label;
    button.setAttribute("aria-pressed", state.mapAudience === option.id ? "true" : "false");
    button.addEventListener("click", () => setMapAudience(option.id));
    row.appendChild(button);
  });
}

function createPin(className, left, top, title, subtitle, selected, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `map-pin ${className}${selected ? " is-selected" : ""}`;
  button.style.left = left;
  button.style.top = top;
  button.innerHTML = `${title}${subtitle ? `<small>${subtitle}</small>` : ""}`;
  button.addEventListener("click", onClick);
  return button;
}

function createLeafletIcon(color, label) {
  return window.L.divIcon({
    className: "",
    html: `<div style="display:grid;place-items:center;width:18px;height:18px;border-radius:999px;border:3px solid #fff;background:${color};box-shadow:0 8px 18px rgba(0,0,0,0.18);"></div><span style="display:none;">${label}</span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -8],
  });
}

function ensureLeafletMap() {
  if (!window.L) {
    return null;
  }

  if (!mapRuntime.map) {
    const frame = document.getElementById("map-frame");
    frame.innerHTML = "";
    mapRuntime.map = window.L.map("map-frame", {
      scrollWheelZoom: true,
      zoomControl: true,
    }).setView(ALATAU_CENTER, 14);

    mapRuntime.tileLayer = window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapRuntime.map);

    mapRuntime.placeLayer = window.L.layerGroup().addTo(mapRuntime.map);
    mapRuntime.hazardLayer = window.L.layerGroup().addTo(mapRuntime.map);
    mapRuntime.safeLayer = window.L.layerGroup().addTo(mapRuntime.map);
    mapRuntime.userLayer = window.L.layerGroup().addTo(mapRuntime.map);
  }

  return mapRuntime.map;
}

function renderRouteSummary() {
  const summary = document.getElementById("route-summary");
  if (!summary) return;

  if (!state.route) {
    summary.innerHTML = `
      <strong>Маршрут ещё не построен</strong>
      <span>Выберите место и нажмите «Построить маршрут». Если геолокация разрешена, приложение покажет расстояние и время.</span>
    `;
    return;
  }

  summary.innerHTML = `
    <strong>Маршрут до ${state.route.placeName}</strong>
    <span>${state.route.distanceText} · ${state.route.durationText} · источник: ${state.route.sourceLabel}</span>
    <p class="field-note">${state.route.note}</p>
  `;
}

function clearRoute() {
  state.route = null;
  if (mapRuntime.routeLayer) {
    mapRuntime.routeLayer.clearLayers();
  }
  renderRouteSummary();
  setStatus("db-status", "Маршрут удалён с карты.", false);
}

async function buildRouteToSelectedPlace() {
  const place = getPlaceById(state.selectedPlaceId);
  const origin = getRouteOrigin();
  const map = ensureLeafletMap();

  if (mapRuntime.routeLayer) {
    mapRuntime.routeLayer.clearLayers();
  } else if (map) {
    mapRuntime.routeLayer = window.L.layerGroup().addTo(map);
  }

  try {
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/walking/${origin.lng},${origin.lat};${place.lng},${place.lat}?overview=full&geometries=geojson`,
    );
    const data = await response.json();
    if (!response.ok || !data.routes || data.routes.length === 0) {
      throw new Error("Сервис маршрутизации не вернул маршрут.");
    }

    const route = data.routes[0];
    const latLngs = route.geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    if (mapRuntime.routeLayer) {
      window.L.polyline(latLngs, {
        color: "#0d8c7f",
        weight: 5,
        opacity: 0.9,
      }).addTo(mapRuntime.routeLayer);
      map.fitBounds(window.L.latLngBounds(latLngs), { padding: [40, 40] });
    }

    state.route = {
      placeId: place.id,
      placeName: place.name,
      distanceText: formatDistanceKm(route.distance / 1000),
      durationText: `${Math.max(1, Math.round(route.duration / 60))} мин`,
      sourceLabel: "OSRM, живой маршрут",
      note: "Пешеходный маршрут построен по живому картографическому сервису для выбранного места.",
    };
    renderRouteSummary();
    setStatus("db-status", `Маршрут до места «${place.name}» построен.`, false);
  } catch (error) {
    const distanceKm = haversineDistance(origin.lat, origin.lng, place.lat, place.lng);
    const durationMin = Math.max(1, Math.round((distanceKm / getEstimatedWalkingSpeedKmh()) * 60));
    if (mapRuntime.routeLayer && map) {
      window.L.polyline(
        [
          [origin.lat, origin.lng],
          [place.lat, place.lng],
        ],
        {
          color: "#d98324",
          weight: 4,
          opacity: 0.8,
          dashArray: "10 8",
        },
      ).addTo(mapRuntime.routeLayer);
      map.fitBounds(
        window.L.latLngBounds([
          [origin.lat, origin.lng],
          [place.lat, place.lng],
        ]),
        { padding: [40, 40] },
      );
    }

    state.route = {
      placeId: place.id,
      placeName: place.name,
      distanceText: formatDistanceKm(distanceKm),
      durationText: `${durationMin} мин`,
      sourceLabel: "Локальная оценка",
      note: `Живой сервис маршрутов недоступен, поэтому приложение показывает примерный прямой маршрут. ${error.message}`,
    };
    renderRouteSummary();
    setStatus("db-status", `Для места «${place.name}» построен примерный маршрут.`, false);
  }
}

function renderLeafletMap(visiblePlaces, visibleHazards) {
  const map = ensureLeafletMap();
  if (!map) {
    return false;
  }

  mapRuntime.placeLayer.clearLayers();
  mapRuntime.hazardLayer.clearLayers();
  mapRuntime.safeLayer.clearLayers();
  mapRuntime.userLayer.clearLayers();

  window.L.marker([safeZone.lat, safeZone.lng], {
    icon: createLeafletIcon("#24835b", safeZone.name),
  })
    .bindPopup(`<strong>${safeZone.name}</strong><br>${safeZone.detail}`)
    .addTo(mapRuntime.safeLayer)
    .on("click", () => setMapFocus("safe-zone", safeZone.id));

  visiblePlaces.forEach((place) => {
    const marker = window.L.marker([place.lat, place.lng], {
      icon: createLeafletIcon(place.id === state.selectedPlaceId ? "#0d8c7f" : "#ffae42", place.name),
    })
      .bindPopup(
        `<strong>${place.name}</strong><br>${place.category}<br>${place.address || ""}<br>${getDistanceLabel(place)}`,
      )
      .addTo(mapRuntime.placeLayer);

    marker.on("click", () => setMapFocus("place", place.id));
  });

  visibleHazards.forEach((hazard) => {
    if (typeof hazard.lat !== "number" || typeof hazard.lng !== "number") {
      return;
    }
    const marker = window.L.marker([hazard.lat, hazard.lng], {
      icon: createLeafletIcon("#d1472f", hazard.title),
    })
      .bindPopup(`<strong>${hazard.title}</strong><br>${hazard.detail}`)
      .addTo(mapRuntime.hazardLayer);

    marker.on("click", () => setMapFocus("hazard", hazard.id));
  });

  if (state.userLocation) {
    window.L.circleMarker([state.userLocation.lat, state.userLocation.lng], {
      radius: 8,
      color: "#085d55",
      weight: 3,
      fillColor: "#0d8c7f",
      fillOpacity: 0.9,
    })
      .bindPopup("Ваше текущее местоположение")
      .addTo(mapRuntime.userLayer);
  }

  if (state.mapFocus.type === "place") {
    const selectedPlace = getPlaceById(state.mapFocus.id);
    map.flyTo([selectedPlace.lat, selectedPlace.lng], Math.max(map.getZoom(), 15), { duration: 0.6 });
  } else if (state.mapFocus.type === "hazard") {
    const selectedHazard = getHazardById(state.mapFocus.id);
    if (typeof selectedHazard.lat === "number" && typeof selectedHazard.lng === "number") {
      map.flyTo([selectedHazard.lat, selectedHazard.lng], Math.max(map.getZoom(), 15), { duration: 0.6 });
    }
  } else if (state.mapFocus.type === "safe-zone") {
    map.flyTo([safeZone.lat, safeZone.lng], Math.max(map.getZoom(), 15), { duration: 0.6 });
  }

  document.getElementById("map-summary-status").textContent =
    `На живой карте Алатау показано ${visiblePlaces.length} мест и ${visibleHazards.length} активных препятствий.`;
  return true;
}

function renderStaticMap(visiblePlaces, visibleHazards) {
  const frame = document.getElementById("map-frame");
  frame.innerHTML = "";

  if (visiblePlaces.length === 0) {
    frame.innerHTML = `<div class="map-empty"><div><strong>Для этого фильтра мест не найдено.</strong><p>Выберите другой фильтр аудитории или включите безопасный режим.</p></div></div>`;
    document.getElementById("map-summary-status").textContent = "На карте показано 0 мест.";
    return;
  }

  const primaryRoute = document.createElement("div");
  primaryRoute.className = "map-route route-primary";
  primaryRoute.textContent = state.emergencyMode ? "Маршрут к безопасной зоне" : "Предпочтительный маршрут";

  const secondaryRoute = document.createElement("div");
  secondaryRoute.className = "map-route route-secondary";
  secondaryRoute.textContent = state.emergencyMode ? "Поддерживающий маршрут" : "Альтернативный маршрут";

  frame.append(primaryRoute, secondaryRoute);

  frame.appendChild(
    createPin(
      "safe-pin",
      safeZone.x,
      safeZone.y,
      safeZone.name,
      state.emergencyMode ? "Экстренный фокус" : "Безопасная зона",
      state.mapFocus.type === "safe-zone",
      () => setMapFocus("safe-zone", safeZone.id),
    ),
  );

  visiblePlaces.forEach((place) => {
    frame.appendChild(
      createPin(
        "place-pin",
        place.x,
        place.y,
        place.name,
        place.category,
        state.mapFocus.type === "place" && state.mapFocus.id === place.id,
        () => setMapFocus("place", place.id),
      ),
    );
  });

  visibleHazards.forEach((hazard) => {
    frame.appendChild(
      createPin(
        "hazard-pin",
        hazard.x,
        hazard.y,
        hazard.title,
        "Препятствие",
        state.mapFocus.type === "hazard" && state.mapFocus.id === hazard.id,
        () => setMapFocus("hazard", hazard.id),
      ),
    );
  });

  document.getElementById("map-summary-status").textContent =
    `На резервной карте показано ${visiblePlaces.length} мест и ${visibleHazards.length} активных препятствий.`;
}

function renderMap() {
  ensureSelection();
  const visiblePlaces = getVisiblePlaces();
  const visibleHazards = getVisibleHazards();
  if (!renderLeafletMap(visiblePlaces, visibleHazards)) {
    renderStaticMap(visiblePlaces, visibleHazards);
  }
}

function renderMapInspector() {
  const inspector = document.getElementById("map-inspector");

  if (state.mapFocus.type === "safe-zone") {
    inspector.innerHTML = `
      <span class="mini-label">Безопасная зона</span>
      <h3>${safeZone.name}</h3>
      <p>${safeZone.detail}</p>
      <div class="detail-list">
        <div><strong>Безопасный маршрут</strong><span>${safeZone.route}</span></div>
      </div>
      <div class="button-row">
        <button class="primary-button" id="safe-zone-support-button" type="button">Открыть помощь</button>
        <button class="ghost-button" id="safe-zone-back-button" type="button">Вернуться к месту</button>
      </div>
    `;

    document.getElementById("safe-zone-support-button").addEventListener("click", () => {
      document.querySelector("#support").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.getElementById("safe-zone-back-button").addEventListener("click", () => {
      setMapFocus("place", state.selectedPlaceId);
    });
    return;
  }

  if (state.mapFocus.type === "hazard") {
    const hazard = getHazardById(state.mapFocus.id);
    const place = getPlaceById(hazard.placeId);
    inspector.innerHTML = `
      <span class="mini-label">Препятствие</span>
      <h3>${hazard.title}</h3>
      <p>${hazard.detail}</p>
      <div class="detail-list">
        <div><strong>Источник</strong><span>${hazard.source}</span></div>
        <div><strong>Безопасная альтернатива</strong><span>${hazard.alternative}</span></div>
        <div><strong>Связанное место</strong><span>${place.name}</span></div>
      </div>
      <div class="button-row">
        <button class="primary-button" id="hazard-place-button" type="button">Открыть связанное место</button>
      </div>
    `;

    document.getElementById("hazard-place-button").addEventListener("click", () => {
      selectPlace(place.id, true);
    });
    return;
  }

  const place = getPlaceById(state.mapFocus.id);
  const nearbyHazards = state.hazards.filter((hazard) => hazard.placeId === place.id);

  inspector.innerHTML = `
    <span class="mini-label">Фокус карты</span>
    <h3>${place.name}</h3>
    <p>${place.description}</p>
    <div class="audience-badge-row">
      ${place.tags.map((tag) => `<span class="audience-badge">${audienceLabels[tag] || tag}</span>`).join("")}
    </div>
    <div class="detail-list">
      <div><strong>Лучший подход</strong><span>${place.lastMeters[0]}</span></div>
      <div><strong>Подсказка по маршруту</strong><span>${place.routeNote}</span></div>
      <div><strong>Ближайшие препятствия</strong><span>${nearbyHazards.length > 0 ? nearbyHazards.map((hazard) => hazard.title).join(", ") : "Рядом нет активных препятствий."}</span></div>
    </div>
    <div class="button-row">
      <button class="primary-button" id="inspector-place-button" type="button">Открыть карточку места</button>
      <button class="ghost-button" id="inspector-safe-button" type="button">Показать безопасную зону</button>
    </div>
  `;

  document.getElementById("inspector-place-button").addEventListener("click", () => {
    document.querySelector("#place").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("inspector-safe-button").addEventListener("click", () => {
    setMapFocus("safe-zone", safeZone.id);
  });
}

function renderResults() {
  const results = document.getElementById("results-list");
  const status = document.getElementById("results-status");
  const filters = document.getElementById("active-filters");
  const ranked = getVisiblePlaces();

  filters.textContent =
    state.currentFilters.length > 0
      ? `${state.currentFilters.map((filter) => filterLabels[filter] || filter).join(", ")}. Personalized by ${state.selectedTags.map((tag) => audienceLabels[tag] || tag).join(", ")}.`
      : "Явные фильтры поиска не заданы. Результаты отсортированы по выбранным потребностям и уровню доверия.";

  results.innerHTML = "";

  if (ranked.length === 0) {
    results.innerHTML = `<article class="result-card"><strong>Нет мест, подходящих под этот фильтр аудитории.</strong></article>`;
    status.textContent = "Показано 0 мест.";
    return;
  }

  status.textContent = `Отсортировано ${ranked.length} мест. Лучшее совпадение: ${ranked[0].name}.`;

  ranked.forEach((place) => {
    const card = document.createElement("article");
    card.className = `result-card${place.id === state.selectedPlaceId ? " is-selected" : ""}`;
    card.innerHTML = `
      <div class="result-topline">
        <div>
          <strong>${place.name}</strong>
          <p>${place.category} · ${place.distance}</p>
        </div>
        <span class="score-pill">${scorePlace(place)} match</span>
      </div>
      <p>${place.description}</p>
      <div class="attribute-list">
        ${place.attributes.slice(0, 4).map((item) => `<span class="mini-pill">${item}</span>`).join("")}
      </div>
    `;

    const actions = document.createElement("div");
    actions.className = "button-row";

    const showMap = document.createElement("button");
    showMap.type = "button";
    showMap.className = "primary-button";
    showMap.textContent = "Показать на карте";
    showMap.addEventListener("click", () => {
      selectPlace(place.id, false);
      document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const openCard = document.createElement("button");
    openCard.type = "button";
    openCard.className = "ghost-button";
    openCard.textContent = "Открыть карточку";
    openCard.addEventListener("click", () => selectPlace(place.id, true));

    actions.append(showMap, openCard);
    card.appendChild(actions);
    results.appendChild(card);
  });
}

function renderPlaceCard() {
  const place = getPlaceById(state.selectedPlaceId);
  const container = document.getElementById("place-card");

  container.innerHTML = `
    <header>
      <div class="place-meta">
        <span class="mini-label">${place.category}</span>
        <span class="score-pill">${scorePlace(place)} match</span>
      </div>
      <h3>${place.name}</h3>
      <p>${place.description}</p>
      <div class="audience-badge-row">
        ${place.tags.map((tag) => `<span class="audience-badge">${audienceLabels[tag] || tag}</span>`).join("")}
      </div>
      <div class="place-card-photo" role="img" aria-label="Representative place photo for ${place.name}"></div>
      <div class="confidence-row">
        ${place.trust
          .map((label) => {
            const className =
              label === "Подтверждено местом"
                ? "trust-venue"
                : label === "Подтверждено сообществом"
                  ? "trust-community"
                  : "trust-recent";
            return `<span class="trust-label ${className}">${label}</span>`;
          })
          .join("")}
      </div>
    </header>
    <section>
      <h4>Параметры доступности</h4>
      <div class="attribute-list">
        ${place.attributes.map((item) => `<span class="mini-pill">${item}</span>`).join("")}
        ${place.optional.map((item) => `<span class="mini-pill">${item}</span>`).join("")}
      </div>
    </section>
    <section class="last-meters-card">
      <span class="mini-label">Последние 20 метров</span>
      <ul class="summary-list">
        ${place.lastMeters.map((step) => `<li>${step}</li>`).join("")}
      </ul>
    </section>
    <section class="route-note">
      <span class="mini-label">Подсказка по маршруту</span>
      <p>${place.routeNote}</p>
    </section>
  `;
}

function renderHazards() {
  const count = document.getElementById("hazard-count");
  const feed = document.getElementById("hazard-feed");
  count.textContent = `${state.hazards.length} активных сообщений`;
  feed.innerHTML = "";

  state.hazards.forEach((hazard) => {
    const item = document.createElement("article");
    item.className = "hazard-item";
    item.innerHTML = `
      <strong>${hazard.title}</strong>
      <p>${hazard.detail}</p>
      <span class="mini-label">${hazard.source}</span>
    `;

    const actions = document.createElement("div");
    actions.className = "button-row";

    const mapButton = document.createElement("button");
    mapButton.type = "button";
    mapButton.className = "ghost-button";
    mapButton.textContent = "Показать на карте";
    mapButton.addEventListener("click", () => {
      setMapFocus("hazard", hazard.id);
      document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const placeButton = document.createElement("button");
    placeButton.type = "button";
    placeButton.className = "primary-button";
    placeButton.textContent = "Открыть связанное место";
    placeButton.addEventListener("click", () => selectPlace(hazard.placeId, true));

    actions.append(mapButton, placeButton);
    item.appendChild(actions);
    feed.appendChild(item);
  });
}

function renderEmergencyState() {
  const status = document.getElementById("emergency-status");
  const safeZoneCopy = document.getElementById("safe-zone-copy");
  const supportCopy = document.getElementById("support-copy");
  const smogCard = document.getElementById("smog-alert-card");
  const toggle = document.getElementById("emergency-toggle");

  toggle.setAttribute("aria-pressed", state.emergencyMode ? "true" : "false");

  if (state.emergencyMode) {
    status.innerHTML = `<span class="status-pill">Emergency</span><p>High-contrast mode is active. The safe zone and simplest route are prioritized.</p>`;
    safeZoneCopy.textContent = "Proceed to the Transit Hub Safe Zone using the east arcade. The route avoids barriers and stairs.";
    supportCopy.textContent = "Emergency mode reduces visual noise and surfaces volunteer help first.";
    smogCard.querySelector("strong").textContent = "Earthquake mode active";
    smogCard.querySelector("p").textContent = "The interface now highlights the safe zone and emergency support actions.";
    toggle.textContent = "Exit Safe Mode";
    return;
  }

  status.innerHTML = `<span class="status-pill">Normal</span><p>Safe zones and alerts are visible, but the interface stays in standard browsing mode.</p>`;
  safeZoneCopy.textContent = safeZone.detail;
  supportCopy.textContent = "Request a volunteer escort, switch to text-first help, or trigger emergency mode for a simplified interface.";
  smogCard.querySelector("strong").textContent = "Smog-aware routing active";
  smogCard.querySelector("p").textContent = "Air quality is elevated today. The default route favors calmer passages and lower traffic streets.";
  toggle.textContent = "Earthquake Safe Mode";
}

function getHazardPosition(placeId) {
  const place = getPlaceById(placeId);
  const count = state.hazards.filter((hazard) => hazard.placeId === placeId).length;
  const offsetX = [-8, 7, -5, 9][count % 4];
  const offsetY = [9, -7, 6, -9][count % 4];
  const latOffset = [0.0012, -0.0008, 0.0009, -0.0011][count % 4];
  const lngOffset = [-0.0011, 0.0009, -0.0007, 0.001][count % 4];
  return {
    x: `${Math.min(88, Math.max(12, Number.parseFloat(place.x) + offsetX))}%`,
    y: `${Math.min(84, Math.max(14, Number.parseFloat(place.y) + offsetY))}%`,
    lat: Number((place.lat + latOffset).toFixed(6)),
    lng: Number((place.lng + lngOffset).toFixed(6)),
  };
}

function handleSearchSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("search-input");
  setQuery(input.value);
  document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleSaveProfile() {
  saveSelectedTags();
  document.getElementById("save-status").textContent =
    "Профиль сохранён. Сортировка, точки на карте и маршруты теперь учитывают ваши потребности.";
}

async function handleHazardSubmit(event) {
  event.preventDefault();
  const title = document.getElementById("hazard-title");
  const detail = document.getElementById("hazard-detail");
  const status = document.getElementById("hazard-form-status");

  if (!title.value.trim() || !detail.value.trim()) {
    status.textContent = "Пожалуйста, заполните и название проблемы, и подробности.";
    status.className = "field-note danger-note";
    return;
  }

  const place = getPlaceById(state.selectedPlaceId);
  const position = getHazardPosition(place.id);

  const hazard = {
    id: `hazard-${Date.now()}`,
    title: title.value.trim(),
    detail: detail.value.trim(),
    source: `Сообщение сообщества для места «${place.name}»`,
    placeId: place.id,
    x: position.x,
    y: position.y,
    lat: position.lat,
    lng: position.lng,
    alternative: `Откройте «${place.name}», чтобы увидеть актуальные подсказки по безопасному подходу.`,
  };

  try {
    await saveHazardToDatabase(hazard);
    title.value = "";
    detail.value = "";
    status.textContent = `Сообщение о препятствии сохранено для места «${place.name}».`;
    status.className = "field-note success-note";
    render();
    setStatus("db-status", `Препятствие для места «${place.name}» сохранено в базу данных.`, false);
  } catch (error) {
    status.textContent = "Не удалось сохранить препятствие.";
    status.className = "field-note danger-note";
    setStatus("db-status", `Ошибка сохранения препятствия: ${error.message}`, true);
  }
}

function collectPlaceTags() {
  return Array.from(document.querySelectorAll('input[name="place-tag"]:checked')).map((input) => input.value);
}

function buildAttributesFromFeatures(features) {
  return features
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

async function handlePlaceSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("place-name").value.trim();
  const category = document.getElementById("place-category").value.trim();
  const address = document.getElementById("place-address").value.trim();
  const lat = Number.parseFloat(document.getElementById("place-lat").value);
  const lng = Number.parseFloat(document.getElementById("place-lng").value);
  const features = document.getElementById("place-features").value.trim();
  const tags = collectPlaceTags();

  if (!name || !category || !Number.isFinite(lat) || !Number.isFinite(lng)) {
    setStatus("place-form-status", "Нужно указать название, категорию, широту и долготу.", true);
    return;
  }

  const attributes = buildAttributesFromFeatures(features);
  const place = {
    id: `place-${Date.now()}`,
    name,
    category,
    address: address || "Место, добавленное пользователем в Алатау",
    distance: "Онлайн",
    x: "50%",
    y: "50%",
    lat,
    lng,
    confidence: 84,
    tags: tags.length > 0 ? tags : ["mobility-support"],
    description: `${category} добавлено через живую карту Алатау.`,
    attributes: attributes.length > 0 ? attributes : ["Информация о доступности уточняется"],
    optional: ["Добавлено через базу сообщества"],
    lastMeters: [
      "Откройте живую карту и проверьте точную сторону входа перед прибытием.",
      "Используйте всплывающее окно маркера для самых свежих обновлений от сообщества.",
    ],
    routeNote: "Это место добавлено из локальной базы и может быть уточнено новыми сообщениями.",
    trust: ["Подтверждено сообществом"],
  };

  try {
    await savePlaceToDatabase(place);
    setStatus("place-form-status", `Место «${name}» сохранено в базу данных.`, false);
    setStatus("db-status", `Место «${name}» добавлено на живую карту Алатау.`, false);
    state.selectedPlaceId = place.id;
    state.mapFocus = { type: "place", id: place.id };
    event.target.reset();
    render();
  } catch (error) {
    setStatus("place-form-status", `Ошибка сохранения места: ${error.message}`, true);
  }
}

function captureMapCenter() {
  const map = ensureLeafletMap();
  if (!map) {
    setStatus("place-form-status", "Leaflet недоступен, поэтому центр карты не удалось получить.", true);
    return;
  }

  const center = map.getCenter();
  document.getElementById("place-lat").value = center.lat.toFixed(6);
  document.getElementById("place-lng").value = center.lng.toFixed(6);
  setStatus("place-form-status", "Центр карты скопирован в поля широты и долготы.", false);
}

function findNearestAccessiblePlace() {
  if (!state.userLocation) {
    setStatus("db-status", "Сначала нажмите «Найти меня», чтобы рассчитать ближайшее доступное место.", true);
    return;
  }

  const visiblePlaces = getVisiblePlaces().filter((place) => typeof place.lat === "number" && typeof place.lng === "number");
  if (visiblePlaces.length === 0) {
    setStatus("db-status", "Для поиска ближайшего места сейчас нет доступных видимых точек.", true);
    return;
  }

  const nearest = [...visiblePlaces]
    .map((place) => ({
      place,
      distanceKm: haversineDistance(state.userLocation.lat, state.userLocation.lng, place.lat, place.lng),
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)[0];

  selectPlace(nearest.place.id, false);
  setStatus("db-status", `Ближайшее место: ${nearest.place.name} (${formatDistanceKm(nearest.distanceKm)}).`, false);
  document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
}

function locateUser() {
  if (!navigator.geolocation) {
    setStatus("db-status", "Геолокация не поддерживается в этом браузере.", true);
    return;
  }

  setStatus("db-status", "Определяем ваше местоположение...", false);
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      render();
      const map = ensureLeafletMap();
      if (map) {
        map.flyTo([state.userLocation.lat, state.userLocation.lng], 15, { duration: 0.7 });
      }
      setStatus("db-status", "Текущее местоположение найдено и добавлено на карту.", false);
    },
    (error) => {
      setStatus("db-status", `Ошибка геолокации: ${error.message}`, true);
    },
    { enableHighAccuracy: true, timeout: 10000 },
  );
}

async function exportDatabase() {
  try {
    const [storedPlaces, storedHazards] = await Promise.all([
      getAllFromStore(DB_STORES.places),
      getAllFromStore(DB_STORES.hazards),
    ]);
    const payload = {
      exportedAt: new Date().toISOString(),
      places: storedPlaces,
      hazards: storedHazards,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "alatau-accessibility-data.json";
    link.click();
    URL.revokeObjectURL(url);
    setStatus("db-status", "База данных экспортирована в JSON.", false);
  } catch (error) {
    setStatus("db-status", `Ошибка экспорта: ${error.message}`, true);
  }
}

function addAssistantMessage(role, text) {
  state.chatMessages.push({ role, text });
}

function getAssistantGreeting() {
  const place = getPlaceById(state.selectedPlaceId);
  const userName = state.currentUser ? state.currentUser.name : "guest";
  return `Hello, ${userName}. I can help with routes, accessible places, barriers, and profile-based advice. Current focus: ${place.name}.`;
}

async function buildAssistantReply(question) {
  const text = normalizeText(question);
  const place = getPlaceById(state.selectedPlaceId);
  const visiblePlaces = getVisiblePlaces();
  const topPlace = visiblePlaces[0];
  const nearbyHazards = state.hazards.filter((hazard) => hazard.placeId === place.id);

  if (text.includes("route") || text.includes("добрат") || text.includes("маршрут")) {
    await buildRouteToSelectedPlace();
    if (!state.route) {
      return "I could not build a route yet. Please allow location access or try again.";
    }
    return `Route to ${state.route.placeName}: ${state.route.distanceText}, about ${state.route.durationText}. ${state.route.note}`;
  }

  if (text.includes("nearest") || text.includes("closest") || text.includes("ближай")) {
    if (!state.userLocation) {
      return "Turn on Find my location first, then I can calculate the nearest accessible place.";
    }
    const nearest = [...visiblePlaces]
      .map((candidate) => ({
        candidate,
        distanceKm: haversineDistance(state.userLocation.lat, state.userLocation.lng, candidate.lat, candidate.lng),
      }))
      .sort((a, b) => a.distanceKm - b.distanceKm)[0];
    return `The nearest visible place is ${nearest.candidate.name}, about ${formatDistanceKm(nearest.distanceKm)} away.`;
  }

  if (text.includes("profile") || text.includes("о себе") || text.includes("my data")) {
    if (!state.currentUser) {
      return "You are not signed in yet. Register in the welcome card to save your name, needs, and profile notes.";
    }
    return `${state.currentUser.name}, your saved needs are ${(state.currentUser.tags || []).map((tag) => audienceLabels[tag] || tag).join(", ")}. Note: ${state.currentUser.about || "No note saved."}`;
  }

  if (text.includes("hazard") || text.includes("problem") || text.includes("препят") || text.includes("опас")) {
    return nearbyHazards.length > 0
      ? `There are ${nearbyHazards.length} active hazards near ${place.name}: ${nearbyHazards.map((hazard) => hazard.title).join(", ")}.`
      : `There are no active hazards linked to ${place.name} right now.`;
  }

  if (text.includes("best") || text.includes("recommend") || text.includes("луч")) {
    return topPlace
      ? `Best current match is ${topPlace.name}. It fits your selected needs and has a score of ${scorePlace(topPlace)}.`
      : "I do not see a matching place right now.";
  }

  if (text.includes("ramp") || text.includes("elevator") || text.includes("пандус") || text.includes("лифт")) {
    const accessibility = place.attributes.filter((attribute) =>
      normalizeText(attribute).includes("ramp") ||
      normalizeText(attribute).includes("elevator") ||
      normalizeText(attribute).includes("step-free"),
    );
    return accessibility.length > 0
      ? `${place.name} accessibility notes: ${accessibility.join(", ")}.`
      : `${place.name} does not currently list ramp or elevator details in the saved data.`;
  }

  return `Current focus is ${place.name}. I can help with route, nearest place, hazards, your profile, or recommend the best place for your needs.`;
}

function renderAssistant() {
  const thread = document.getElementById("assistant-thread");
  if (!thread) return;

  if (state.chatMessages.length === 0) {
    addAssistantMessage("assistant", getAssistantGreeting());
  }

  thread.innerHTML = state.chatMessages
    .map(
      (message) => `
        <article class="assistant-message ${message.role}">
          <strong>${message.role === "user" ? "You" : "Assistant"}</strong>
          <p>${message.text}</p>
        </article>
      `,
    )
    .join("");

  thread.scrollTop = thread.scrollHeight;
}

async function handleAssistantSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("assistant-input");
  const question = input.value.trim();
  if (!question) {
    return;
  }

  addAssistantMessage("user", question);
  input.value = "";
  renderAssistant();

  const reply = await buildAssistantReply(question);
  addAssistantMessage("assistant", reply);
  renderAssistant();
}

function bindAdminButtons() {
  const approve = document.getElementById("approve-claim-button");
  const proof = document.getElementById("request-proof-button");
  const status = document.getElementById("admin-status");

  approve.addEventListener("click", () => {
    approve.disabled = true;
    proof.disabled = true;
    status.textContent = "Venue claim approved.";
  });

  proof.addEventListener("click", () => {
    proof.disabled = true;
    status.textContent = "Proof request sent to the venue.";
  });
}

function scheduleMapResize() {
  if (!mapRuntime.map) return;

  if (mapRuntime.resizeTimer) {
    window.clearTimeout(mapRuntime.resizeTimer);
  }

  mapRuntime.resizeTimer = window.setTimeout(() => {
    if (mapRuntime.map) {
      mapRuntime.map.invalidateSize({ pan: false });
    }
  }, 140);
}

function ensureLeafletMap() {
  if (!window.L) {
    return null;
  }

  const frame = document.getElementById("map-frame");
  if (!frame) {
    return null;
  }

  if (!mapRuntime.map) {
    frame.innerHTML = "";
    mapRuntime.map = window.L.map("map-frame", {
      scrollWheelZoom: true,
      zoomControl: true,
    }).setView(ALATAU_CENTER, 14);

    mapRuntime.tileLayer = window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapRuntime.map);

    mapRuntime.placeLayer = window.L.layerGroup().addTo(mapRuntime.map);
    mapRuntime.hazardLayer = window.L.layerGroup().addTo(mapRuntime.map);
    mapRuntime.safeLayer = window.L.layerGroup().addTo(mapRuntime.map);
    mapRuntime.userLayer = window.L.layerGroup().addTo(mapRuntime.map);
    mapRuntime.routeLayer = window.L.layerGroup().addTo(mapRuntime.map);
  }

  if (!mapRuntime.resizeBound) {
    window.addEventListener("resize", scheduleMapResize);
    mapRuntime.resizeBound = true;
  }

  scheduleMapResize();
  return mapRuntime.map;
}

function focusAlatauCenter() {
  const map = ensureLeafletMap();
  if (!map) {
    setStatus("db-status", "Живая карта сейчас недоступна. Откройте страницу через браузер с интернетом.", true);
    return;
  }

  map.flyTo(ALATAU_CENTER, 14, { duration: 0.7 });
  scheduleMapResize();
  setStatus("db-status", "Карта перемещена в центр Алатау.", false);

  const interaction = document.getElementById("interaction-status");
  if (interaction) {
    interaction.textContent = "Показан общий обзор района Алатау. Можно выбрать место, построить маршрут или показать все точки.";
  }
}

function fitVisiblePoints() {
  const map = ensureLeafletMap();
  if (!map) {
    setStatus("db-status", "Живая карта сейчас недоступна. Масштабировать точки не удалось.", true);
    return;
  }

  const points = [
    ...getVisiblePlaces()
      .filter((place) => typeof place.lat === "number" && typeof place.lng === "number")
      .map((place) => [place.lat, place.lng]),
    ...getVisibleHazards()
      .filter((hazard) => typeof hazard.lat === "number" && typeof hazard.lng === "number")
      .map((hazard) => [hazard.lat, hazard.lng]),
    [safeZone.lat, safeZone.lng],
  ];

  if (state.userLocation) {
    points.push([state.userLocation.lat, state.userLocation.lng]);
  }

  if (points.length === 0) {
    setStatus("db-status", "Сейчас нет точек, которые можно показать на карте.", true);
    return;
  }

  map.fitBounds(window.L.latLngBounds(points), { padding: [42, 42] });
  scheduleMapResize();
  setStatus("db-status", `Показаны все доступные точки: ${points.length} объектов на карте.`, false);
}

function renderDistrictInsights() {
  const container = document.getElementById("district-insights");
  if (!container) return;

  const visiblePlaces = getVisiblePlaces();
  const visibleHazards = getVisibleHazards();
  const averageMatch =
    visiblePlaces.length > 0
      ? Math.round(visiblePlaces.reduce((sum, place) => sum + scorePlace(place), 0) / visiblePlaces.length)
      : 0;
  const coverageScore = Math.min(100, visiblePlaces.length * 14 + state.selectedTags.length * 8);
  const riskScore = Math.max(8, 100 - visibleHazards.length * 12);
  const readinessScore = Math.max(
    24,
    Math.min(99, Math.round(averageMatch * 0.45 + coverageScore * 0.35 + riskScore * 0.2)),
  );

  const bestPlace = visiblePlaces[0];
  const summary = bestPlace
    ? `Лучший сценарий сейчас ведёт к месту «${bestPlace.name}». Система видит ${visiblePlaces.length} подходящих точек и ${visibleHazards.length} активных препятствий.`
    : "Подходящие точки пока не найдены. Попробуйте изменить фильтры или добавить место в базу.";

  container.innerHTML = `
    <h4>Умная оценка района</h4>
    <p>${summary}</p>
    <div class="insight-metrics">
      <div class="insight-metric">
        <span class="mini-label">Готовность</span>
        <strong>${readinessScore}/100</strong>
      </div>
      <div class="insight-metric">
        <span class="mini-label">Покрытие</span>
        <strong>${coverageScore}/100</strong>
      </div>
      <div class="insight-metric">
        <span class="mini-label">Риск</span>
        <strong>${riskScore}/100</strong>
      </div>
    </div>
  `;
}

async function generateJourneyPlan() {
  const container = document.getElementById("journey-plan");
  if (!container) return;

  if (!state.route) {
    await buildRouteToSelectedPlace();
  }

  const place = getPlaceById(state.selectedPlaceId);
  const nearbyHazards = state.hazards.filter((hazard) => hazard.placeId === place.id).slice(0, 2);
  const audienceCopy = state.selectedTags.map((tag) => audienceLabels[tag] || tag).join(", ") || "базовый профиль";
  const routeText = state.route
    ? `${state.route.distanceText}, ${state.route.durationText}`
    : "маршрут ещё не построен";

  container.innerHTML = `
    <h4>Персональный план</h4>
    <p>Готовый сценарий для пользователя с профилем: ${audienceCopy}.</p>
    <ul class="summary-list">
      <li>Цель: добраться до места «${place.name}».</li>
      <li>Маршрут: ${routeText}.</li>
      <li>Последний отрезок: ${place.lastMeters[0]}</li>
      <li>Рекомендация: ${place.routeNote}</li>
      <li>Резерв: безопасная зона — ${safeZone.name}.</li>
      <li>Препятствия рядом: ${nearbyHazards.length > 0 ? nearbyHazards.map((hazard) => hazard.title).join(", ") : "активных препятствий рядом не найдено"}.</li>
    </ul>
  `;

  setStatus("db-status", `Экспресс-план для места «${place.name}» готов.`, false);
}

async function shareRouteSummary() {
  const place = getPlaceById(state.selectedPlaceId);

  if (!state.route) {
    await buildRouteToSelectedPlace();
  }

  const summary = [
    `Алатау Smart — маршрут до места «${place.name}».`,
    state.route ? `Дистанция: ${state.route.distanceText}. Время: ${state.route.durationText}.` : "Маршрут пока не построен.",
    `Подсказка: ${place.routeNote}`,
    `Безопасная зона: ${safeZone.name}.`,
  ].join(" ");

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(summary);
      setStatus("db-status", "Краткое описание маршрута скопировано в буфер обмена.", false);
      return;
    }
  } catch (error) {
    setStatus("db-status", `Не удалось скопировать маршрут автоматически: ${error.message}`, true);
    return;
  }

  setStatus("db-status", summary, false);
}

function renderMap() {
  ensureSelection();
  const visiblePlaces = getVisiblePlaces();
  const visibleHazards = getVisibleHazards();
  if (!renderLeafletMap(visiblePlaces, visibleHazards)) {
    renderStaticMap(visiblePlaces, visibleHazards);
    return;
  }

  scheduleMapResize();
}

function render() {
  renderAuthState();
  renderProfileTags();
  renderProfileSummary();
  renderMapFilters();
  renderMap();
  renderRouteSummary();
  renderMapInspector();
  renderResults();
  renderPlaceCard();
  renderHazards();
  renderEmergencyState();
  renderUserProfilePanel();
  renderAssistant();
}

function bindEvents() {
  document.getElementById("auth-form").addEventListener("submit", handleAuthSubmit);
  document.getElementById("confirm-auth-button").addEventListener("click", handleConfirmAuth);
  document.getElementById("demo-user-button").addEventListener("click", handleDemoUser);
  document.getElementById("logout-button").addEventListener("click", handleLogout);
  document.getElementById("search-form").addEventListener("submit", handleSearchSubmit);
  document.getElementById("save-profile").addEventListener("click", handleSaveProfile);
  document.getElementById("hazard-form").addEventListener("submit", handleHazardSubmit);
  document.getElementById("place-form").addEventListener("submit", handlePlaceSubmit);
  document.getElementById("assistant-form").addEventListener("submit", handleAssistantSubmit);
  document.getElementById("emergency-toggle").addEventListener("click", () => handleEmergencyToggle());
  document.getElementById("locate-me").addEventListener("click", locateUser);
  document.getElementById("nearest-place").addEventListener("click", findNearestAccessiblePlace);
  document.getElementById("focus-alatau-center").addEventListener("click", focusAlatauCenter);
  document.getElementById("fit-visible-points").addEventListener("click", fitVisiblePoints);
  document.getElementById("generate-journey-plan").addEventListener("click", () => {
    generateJourneyPlan().catch((error) => setStatus("db-status", `Ошибка генерации плана: ${error.message}`, true));
  });
  document.getElementById("share-route").addEventListener("click", () => {
    shareRouteSummary().catch((error) => setStatus("db-status", `Ошибка отправки маршрута: ${error.message}`, true));
  });
  document.getElementById("focus-alatau-center").addEventListener("click", focusAlatauCenter);
  document.getElementById("fit-visible-points").addEventListener("click", fitVisiblePoints);
  document.getElementById("build-route").addEventListener("click", () => {
    buildRouteToSelectedPlace().catch((error) => setStatus("db-status", `Route failed: ${error.message}`, true));
  });
  document.getElementById("clear-route").addEventListener("click", clearRoute);
  document.getElementById("export-db").addEventListener("click", exportDatabase);
  document.getElementById("capture-map-center").addEventListener("click", captureMapCenter);
  document.getElementById("reload-db").addEventListener("click", () => {
    reloadDatabaseData().catch((error) => setStatus("db-status", `Reload failed: ${error.message}`, true));
  });

  document.getElementById("replay-demo").addEventListener("click", () => {
    document.getElementById("search-input").value = "blind-friendly library with tactile guidance";
    state.selectedTags = ["blind-support", "deaf-support"];
    state.mapAudience = "blind-support";
    saveSelectedTags();
    setQuery("blind-friendly library with tactile guidance");
    selectPlace("tactile-library", false);
  });

  document.getElementById("start-demo").addEventListener("click", () => {
    document.getElementById("search-input").value = "accessible clinic with elevator and braille signage";
    state.selectedTags = ["mobility-support", "blind-support"];
    state.mapAudience = "all";
    saveSelectedTags();
    setQuery("accessible clinic with elevator and braille signage");
    selectPlace("clinic-sunrise", false);
    document.querySelector("#profile").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("escalate-button").addEventListener("click", () => {
    if (!state.emergencyMode) handleEmergencyToggle(true);
    document.querySelector("#support").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  bindAdminButtons();
}

function localizeStaticUi() {
  document.title = "Алатау Smart: Доступный город";

  const heroEyebrow = document.querySelector("#home .eyebrow");
  if (heroEyebrow) {
    heroEyebrow.textContent = "MVP Алатау Smart City";
  }

  const searchInput = document.getElementById("search-input");
  if (searchInput && !state.currentQuery) {
    searchInput.value = "тихое кафе с входом без ступенек";
  }

  const mapFilterRow = document.getElementById("map-filter-row");
  if (mapFilterRow) {
    mapFilterRow.setAttribute("aria-label", "Фильтры аудитории на карте");
  }

  const mapFrame = document.getElementById("map-frame");
  if (mapFrame) {
    mapFrame.setAttribute("aria-label", "Демонстрационная карта города");
  }

  const supportCopy = document.getElementById("support-copy");
  if (supportCopy) {
    supportCopy.textContent =
      "Запросите сопровождение волонтёра, включите помощь с упором на текст или активируйте безопасный режим, чтобы упростить интерфейс и быстрее получить маршрут к безопасной зоне.";
  }

  const volunteerLink = document.querySelector('#support a.primary-button[href*="wa.me"]');
  if (volunteerLink) {
    volunteerLink.href =
      "https://wa.me/?text=%D0%9C%D0%BD%D0%B5%20%D0%BD%D1%83%D0%B6%D0%BD%D0%B0%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%20%D0%BF%D0%BE%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D1%80%D1%8F%D0%B4%D0%BE%D0%BC%20%D1%81%20%D0%BC%D0%B5%D1%81%D1%82%D0%BE%D0%BC%20%D0%B2%20%D0%90%D0%BB%D0%B0%D1%82%D0%B0%D1%83";
  }

  const safeZoneName = document.getElementById("safe-zone-name");
  if (safeZoneName) {
    safeZoneName.textContent = "Безопасная зона у транзитного узла";
  }

  const safeZoneCopy = document.getElementById("safe-zone-copy");
  if (safeZoneCopy && !state.emergencyMode) {
    safeZoneCopy.textContent =
      "Вход без ступенек с восточной стороны, тактильная линия от перехода на площади, стойка волонтёров рядом с выходом B.";
  }

  const interactionStatus = document.getElementById("interaction-status");
  if (interactionStatus && !interactionStatus.textContent.trim()) {
    interactionStatus.textContent =
      "Выберите место на карте или в списке, чтобы увидеть подробности и построить маршрут.";
  }

  const resultsStatus = document.getElementById("results-status");
  if (resultsStatus && !resultsStatus.textContent.trim()) {
    resultsStatus.textContent = "Результаты будут показаны после загрузки карты и фильтров.";
  }

  const adminStatus = document.getElementById("admin-status");
  if (adminStatus && !adminStatus.textContent.trim()) {
    adminStatus.textContent = "Выберите действие для проверки заявки или запроса дополнительных материалов.";
  }

  const adminClaimTitle = document.querySelector("#admin .admin-card p strong");
  if (adminClaimTitle) {
    adminClaimTitle.textContent = "Кафе Орбит";
  }
}

function parseQuery(query) {
  const text = normalizeText(query);
  const filters = [];

  if (!text) return filters;
  if (text.includes("blind") || text.includes("braille") || text.includes("такт") || text.includes("слеп")) filters.push("blind-support");
  if (text.includes("deaf") || text.includes("sign") || text.includes("глух") || text.includes("жест")) filters.push("deaf-support");
  if (text.includes("step-free") || text.includes("ramp") || text.includes("wheelchair") || text.includes("пандус") || text.includes("опорно")) filters.push("mobility-support");
  if (text.includes("quiet") || text.includes("тихий")) filters.push("quiet");
  if (text.includes("clinic") || text.includes("клиник")) filters.push("clinic");
  if (text.includes("library") || text.includes("библиот")) filters.push("library");
  if (text.includes("cafe") || text.includes("кафе")) filters.push("cafe");

  return [...new Set(filters)];
}

function renderMapInspector() {
  const inspector = document.getElementById("map-inspector");

  if (state.mapFocus.type === "safe-zone") {
    inspector.innerHTML = `
      <span class="mini-label">Безопасная зона</span>
      <h3>${safeZone.name}</h3>
      <p>${safeZone.detail}</p>
      <div class="detail-list">
        <div><strong>Безопасный маршрут</strong><span>${safeZone.route}</span></div>
      </div>
      <div class="button-row">
        <button class="primary-button" id="safe-zone-place-button" type="button">Вернуться к выбранному месту</button>
        <button class="ghost-button" id="safe-zone-route-button" type="button">Построить маршрут</button>
      </div>
    `;

    document.getElementById("safe-zone-place-button").addEventListener("click", () => {
      setMapFocus("place", state.selectedPlaceId);
    });
    document.getElementById("safe-zone-route-button").addEventListener("click", () => {
      buildRouteToSelectedPlace().catch((error) => setStatus("db-status", `Ошибка построения маршрута: ${error.message}`, true));
    });
    return;
  }

  if (state.mapFocus.type === "hazard") {
    const hazard = getHazardById(state.mapFocus.id);
    const linkedPlace = getPlaceById(hazard.placeId);

    inspector.innerHTML = `
      <span class="mini-label">Препятствие</span>
      <h3>${hazard.title}</h3>
      <p>${hazard.detail}</p>
      <div class="detail-list">
        <div><strong>Альтернативный путь</strong><span>${hazard.alternative}</span></div>
        <div><strong>Связанное место</strong><span>${linkedPlace.name}</span></div>
        <div><strong>Источник</strong><span>${hazard.source}</span></div>
      </div>
      <div class="button-row">
        <button class="primary-button" id="hazard-place-button" type="button">Открыть связанное место</button>
        <button class="ghost-button" id="hazard-safe-button" type="button">Показать безопасную зону</button>
      </div>
    `;

    document.getElementById("hazard-place-button").addEventListener("click", () => selectPlace(hazard.placeId, true));
    document.getElementById("hazard-safe-button").addEventListener("click", () => setMapFocus("safe-zone", safeZone.id));
    return;
  }

  const place = getPlaceById(state.mapFocus.id);
  const nearbyHazards = state.hazards.filter((hazard) => hazard.placeId === place.id);

  inspector.innerHTML = `
    <span class="mini-label">Фокус карты</span>
    <h3>${place.name}</h3>
    <p>${place.description}</p>
    <div class="audience-badge-row">
      ${place.tags.map((tag) => `<span class="audience-badge">${audienceLabels[tag] || tag}</span>`).join("")}
    </div>
    <div class="detail-list">
      <div><strong>Лучший подход</strong><span>${place.lastMeters[0]}</span></div>
      <div><strong>Подсказка по маршруту</strong><span>${place.routeNote}</span></div>
      <div><strong>Ближайшие препятствия</strong><span>${nearbyHazards.length > 0 ? nearbyHazards.map((hazard) => hazard.title).join(", ") : "Рядом нет активных препятствий."}</span></div>
    </div>
    <div class="button-row">
      <button class="primary-button" id="inspector-place-button" type="button">Открыть карточку места</button>
      <button class="ghost-button" id="inspector-safe-button" type="button">Показать безопасную зону</button>
    </div>
  `;

  document.getElementById("inspector-place-button").addEventListener("click", () => {
    document.querySelector("#place").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("inspector-safe-button").addEventListener("click", () => {
    setMapFocus("safe-zone", safeZone.id);
  });
}

function renderResults() {
  const results = document.getElementById("results-list");
  const status = document.getElementById("results-status");
  const filters = document.getElementById("active-filters");
  const ranked = getVisiblePlaces();

  filters.textContent =
    state.currentFilters.length > 0
      ? `${state.currentFilters.map((filter) => filterLabels[filter] || filter).join(", ")}. Персонализация учитывает ваши потребности: ${state.selectedTags.map((tag) => audienceLabels[tag] || tag).join(", ")}.`
      : "Явные фильтры поиска не заданы. Результаты отсортированы по выбранным потребностям и уровню доверия.";

  results.innerHTML = "";

  if (ranked.length === 0) {
    results.innerHTML = `<article class="result-card"><strong>Под этот фильтр аудитории подходящих мест пока нет.</strong></article>`;
    status.textContent = "Показано 0 мест.";
    return;
  }

  status.textContent = `Отсортировано ${ranked.length} мест. Лучшее совпадение: ${ranked[0].name}.`;

  ranked.forEach((place) => {
    const card = document.createElement("article");
    card.className = `result-card${place.id === state.selectedPlaceId ? " is-selected" : ""}`;
    card.innerHTML = `
      <div class="result-topline">
        <div>
          <strong>${place.name}</strong>
          <p>${place.category} • ${getDistanceLabel(place)}</p>
        </div>
        <span class="score-pill">${scorePlace(place)} баллов</span>
      </div>
      <p>${place.description}</p>
      <div class="attribute-list">
        ${place.attributes.slice(0, 4).map((item) => `<span class="mini-pill">${item}</span>`).join("")}
      </div>
    `;

    const actions = document.createElement("div");
    actions.className = "button-row";

    const showMap = document.createElement("button");
    showMap.type = "button";
    showMap.className = "primary-button";
    showMap.textContent = "Показать на карте";
    showMap.addEventListener("click", () => {
      selectPlace(place.id, false);
      document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const openCard = document.createElement("button");
    openCard.type = "button";
    openCard.className = "ghost-button";
    openCard.textContent = "Открыть карточку";
    openCard.addEventListener("click", () => selectPlace(place.id, true));

    actions.append(showMap, openCard);
    card.appendChild(actions);
    results.appendChild(card);
  });
}

function renderPlaceCard() {
  const place = getPlaceById(state.selectedPlaceId);
  const container = document.getElementById("place-card");

  container.innerHTML = `
    <header>
      <div class="place-meta">
        <span class="mini-label">${place.category}</span>
        <span class="score-pill">${scorePlace(place)} баллов</span>
      </div>
      <h3>${place.name}</h3>
      <p>${place.description}</p>
      <div class="audience-badge-row">
        ${place.tags.map((tag) => `<span class="audience-badge">${audienceLabels[tag] || tag}</span>`).join("")}
      </div>
      <div class="place-card-photo" role="img" aria-label="Фото места ${place.name}"></div>
      <div class="confidence-row">
        ${place.trust
          .map((label) => {
            const className =
              label === "Подтверждено местом"
                ? "trust-venue"
                : label === "Подтверждено сообществом"
                  ? "trust-community"
                  : "trust-recent";
            return `<span class="trust-label ${className}">${label}</span>`;
          })
          .join("")}
      </div>
    </header>
    <section>
      <h4>Параметры доступности</h4>
      <div class="attribute-list">
        ${place.attributes.map((item) => `<span class="mini-pill">${item}</span>`).join("")}
        ${place.optional.map((item) => `<span class="mini-pill">${item}</span>`).join("")}
      </div>
    </section>
    <section class="last-meters-card">
      <span class="mini-label">Последние 20 метров</span>
      <ul class="summary-list">
        ${place.lastMeters.map((step) => `<li>${step}</li>`).join("")}
      </ul>
    </section>
    <section class="route-note">
      <span class="mini-label">Подсказка по маршруту</span>
      <p>${place.routeNote}</p>
    </section>
  `;
}

function renderHazards() {
  const count = document.getElementById("hazard-count");
  const feed = document.getElementById("hazard-feed");
  count.textContent = `${state.hazards.length} активных сообщений`;
  feed.innerHTML = "";

  state.hazards.forEach((hazard) => {
    const item = document.createElement("article");
    item.className = "hazard-item";
    item.innerHTML = `
      <strong>${hazard.title}</strong>
      <p>${hazard.detail}</p>
      <span class="mini-label">${hazard.source}</span>
    `;

    const actions = document.createElement("div");
    actions.className = "button-row";

    const mapButton = document.createElement("button");
    mapButton.type = "button";
    mapButton.className = "ghost-button";
    mapButton.textContent = "Показать на карте";
    mapButton.addEventListener("click", () => {
      setMapFocus("hazard", hazard.id);
      document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const placeButton = document.createElement("button");
    placeButton.type = "button";
    placeButton.className = "primary-button";
    placeButton.textContent = "Открыть связанное место";
    placeButton.addEventListener("click", () => selectPlace(hazard.placeId, true));

    actions.append(mapButton, placeButton);
    item.appendChild(actions);
    feed.appendChild(item);
  });
}

function renderEmergencyState() {
  const status = document.getElementById("emergency-status");
  const safeZoneCopy = document.getElementById("safe-zone-copy");
  const supportCopy = document.getElementById("support-copy");
  const smogCard = document.getElementById("smog-alert-card");
  const toggle = document.getElementById("emergency-toggle");

  toggle.setAttribute("aria-pressed", state.emergencyMode ? "true" : "false");

  if (state.emergencyMode) {
    status.innerHTML = `<span class="status-pill">Экстренный</span><p>Включён высококонтрастный режим. Безопасная зона и самый простой маршрут теперь в приоритете.</p>`;
    safeZoneCopy.textContent = "Двигайтесь к безопасной зоне у транзитного узла через восточную аркаду. Маршрут избегает лестниц и барьеров.";
    supportCopy.textContent = "Экстренный режим уменьшает визуальный шум и выводит помощь волонтёров на первый план.";
    smogCard.querySelector("strong").textContent = "Режим безопасности при землетрясении активен";
    smogCard.querySelector("p").textContent = "Интерфейс делает акцент на безопасной зоне, экстренных действиях и простом маршруте.";
    toggle.textContent = "Выйти из безопасного режима";
    return;
  }

  status.innerHTML = `<span class="status-pill">Обычный</span><p>Безопасные зоны и предупреждения видны, но интерфейс работает в стандартном режиме.</p>`;
  safeZoneCopy.textContent = safeZone.detail;
  supportCopy.textContent = "Запросите сопровождение волонтёра, включите текстовый формат помощи или активируйте безопасный режим для упрощённого интерфейса.";
  smogCard.querySelector("strong").textContent = "Маршрутизация с учётом смога активна";
  smogCard.querySelector("p").textContent = "Сегодня качество воздуха хуже обычного. Маршрут по умолчанию предпочитает более спокойные и менее загруженные улицы.";
  toggle.textContent = "Безопасный режим при землетрясении";
}

function handleSaveProfile() {
  saveSelectedTags();
  document.getElementById("save-status").textContent =
    "Профиль сохранён. Сортировка, точки на карте и маршруты теперь учитывают ваши потребности.";
}

function getAssistantGreeting() {
  const place = getPlaceById(state.selectedPlaceId);
  const userName = state.currentUser ? state.currentUser.name : "гость";
  return `Здравствуйте, ${userName}. Я помогу с маршрутами, доступными местами, препятствиями и советами с учётом вашего профиля. Сейчас в фокусе: ${place.name}.`;
}

async function buildAssistantReply(question) {
  const text = normalizeText(question);
  const place = getPlaceById(state.selectedPlaceId);
  const visiblePlaces = getVisiblePlaces();
  const topPlace = visiblePlaces[0];
  const nearbyHazards = state.hazards.filter((hazard) => hazard.placeId === place.id);

  if (text.includes("route") || text.includes("добрат") || text.includes("маршрут")) {
    await buildRouteToSelectedPlace();
    if (!state.route) {
      return "Пока не удалось построить маршрут. Разрешите доступ к геолокации или попробуйте ещё раз.";
    }
    return `Маршрут до места «${state.route.placeName}»: ${state.route.distanceText}, примерно ${state.route.durationText}. ${state.route.note}`;
  }

  if (text.includes("nearest") || text.includes("closest") || text.includes("ближай")) {
    if (!state.userLocation) {
      return "Сначала нажмите «Найти меня», и я смогу рассчитать ближайшее доступное место.";
    }
    const nearest = [...visiblePlaces]
      .map((candidate) => ({
        candidate,
        distanceKm: haversineDistance(state.userLocation.lat, state.userLocation.lng, candidate.lat, candidate.lng),
      }))
      .sort((a, b) => a.distanceKm - b.distanceKm)[0];
    return `Ближайшее видимое место: ${nearest.candidate.name}, расстояние примерно ${formatDistanceKm(nearest.distanceKm)}.`;
  }

  if (text.includes("profile") || text.includes("о себе") || text.includes("my data")) {
    if (!state.currentUser) {
      return "Вы ещё не вошли в систему. Зарегистрируйтесь в приветственном окне, чтобы сохранить имя, потребности и заметки профиля.";
    }
    return `${state.currentUser.name}, ваши сохранённые потребности: ${(state.currentUser.tags || []).map((tag) => audienceLabels[tag] || tag).join(", ")}. Заметка профиля: ${state.currentUser.about || "Пока ничего не указано."}`;
  }

  if (text.includes("hazard") || text.includes("problem") || text.includes("препят") || text.includes("опас")) {
    return nearbyHazards.length > 0
      ? `Рядом с местом «${place.name}» сейчас ${nearbyHazards.length} активных препятствий: ${nearbyHazards.map((hazard) => hazard.title).join(", ")}.`
      : `Сейчас рядом с местом «${place.name}» активных препятствий не найдено.`;
  }

  if (text.includes("best") || text.includes("recommend") || text.includes("луч")) {
    return topPlace
      ? `Лучший текущий вариант: ${topPlace.name}. Он подходит под выбранные потребности и набирает ${scorePlace(topPlace)} баллов.`
      : "Сейчас я не вижу подходящего места по выбранным фильтрам.";
  }

  if (text.includes("ramp") || text.includes("elevator") || text.includes("пандус") || text.includes("лифт")) {
    const accessibility = place.attributes.filter((attribute) =>
      normalizeText(attribute).includes("ramp") ||
      normalizeText(attribute).includes("elevator") ||
      normalizeText(attribute).includes("step-free") ||
      normalizeText(attribute).includes("пандус") ||
      normalizeText(attribute).includes("лифт"),
    );
    return accessibility.length > 0
      ? `По месту «${place.name}» есть такие данные о доступности: ${accessibility.join(", ")}.`
      : `Для места «${place.name}» в сохранённых данных пока нет подробностей о пандусе или лифте.`;
  }

  return `Сейчас в фокусе место «${place.name}». Я могу помочь с маршрутом, ближайшим местом, препятствиями, вашим профилем или подобрать лучший вариант под ваши потребности.`;
}

function renderAssistant() {
  const thread = document.getElementById("assistant-thread");
  if (!thread) return;

  if (state.chatMessages.length === 0) {
    addAssistantMessage("assistant", getAssistantGreeting());
  }

  thread.innerHTML = state.chatMessages
    .map(
      (message) => `
        <article class="assistant-message ${message.role}">
          <strong>${message.role === "user" ? "Вы" : "Ассистент"}</strong>
          <p>${message.text}</p>
        </article>
      `,
    )
    .join("");

  thread.scrollTop = thread.scrollHeight;
}

function bindAdminButtons() {
  const approve = document.getElementById("approve-claim-button");
  const proof = document.getElementById("request-proof-button");
  const status = document.getElementById("admin-status");

  approve.addEventListener("click", () => {
    approve.disabled = true;
    proof.disabled = true;
    status.textContent = "Заявка на подтверждение места одобрена.";
  });

  proof.addEventListener("click", () => {
    proof.disabled = true;
    status.textContent = "Запрос дополнительных доказательств отправлен владельцу места.";
  });
}

function renderInteractionStatus() {
  const status = document.getElementById("interaction-status");
  if (!status) return;

  if (state.mapFocus.type === "safe-zone") {
    status.textContent = "Открыта безопасная зона. Вы можете построить маршрут или вернуться к выбранному месту.";
    return;
  }

  if (state.mapFocus.type === "hazard") {
    const hazard = getHazardById(state.mapFocus.id);
    status.textContent = `В фокусе препятствие: ${hazard.title}. Откройте связанное место, чтобы увидеть обход и детали.`;
    return;
  }

  const place = getPlaceById(state.selectedPlaceId);
  status.textContent = `Сейчас выбрано место «${place.name}». Можно построить маршрут, открыть карточку и посмотреть препятствия рядом.`;
}

function render() {
  localizeStaticUi();
  renderAuthState();
  renderProfileTags();
  renderProfileSummary();
  renderMapFilters();
  renderMap();
  renderRouteSummary();
  renderMapInspector();
  renderInteractionStatus();
  renderDistrictInsights();
  renderResults();
  renderPlaceCard();
  renderHazards();
  renderEmergencyState();
  renderUserProfilePanel();
  renderAssistant();
}

function bindEvents() {
  document.getElementById("auth-form").addEventListener("submit", handleAuthSubmit);
  document.getElementById("confirm-auth-button").addEventListener("click", handleConfirmAuth);
  document.getElementById("demo-user-button").addEventListener("click", handleDemoUser);
  document.getElementById("logout-button").addEventListener("click", handleLogout);
  document.getElementById("search-form").addEventListener("submit", handleSearchSubmit);
  document.getElementById("save-profile").addEventListener("click", handleSaveProfile);
  document.getElementById("hazard-form").addEventListener("submit", handleHazardSubmit);
  document.getElementById("place-form").addEventListener("submit", handlePlaceSubmit);
  document.getElementById("assistant-form").addEventListener("submit", handleAssistantSubmit);
  document.getElementById("emergency-toggle").addEventListener("click", () => handleEmergencyToggle());
  document.getElementById("locate-me").addEventListener("click", locateUser);
  document.getElementById("nearest-place").addEventListener("click", findNearestAccessiblePlace);
  document.getElementById("build-route").addEventListener("click", () => {
    buildRouteToSelectedPlace().catch((error) => setStatus("db-status", `Ошибка построения маршрута: ${error.message}`, true));
  });
  document.getElementById("clear-route").addEventListener("click", clearRoute);
  document.getElementById("export-db").addEventListener("click", exportDatabase);
  document.getElementById("capture-map-center").addEventListener("click", captureMapCenter);
  document.getElementById("reload-db").addEventListener("click", () => {
    reloadDatabaseData().catch((error) => setStatus("db-status", `Ошибка обновления базы: ${error.message}`, true));
  });

  document.getElementById("replay-demo").addEventListener("click", () => {
    document.getElementById("search-input").value = "библиотека для незрячих с тактильной навигацией";
    state.selectedTags = ["blind-support", "deaf-support"];
    state.mapAudience = "blind-support";
    saveSelectedTags();
    setQuery("библиотека для незрячих с тактильной навигацией");
    selectPlace("tactile-library", false);
  });

  document.getElementById("start-demo").addEventListener("click", () => {
    document.getElementById("search-input").value = "доступная клиника с лифтом и табличками Брайля";
    state.selectedTags = ["mobility-support", "blind-support"];
    state.mapAudience = "all";
    saveSelectedTags();
    setQuery("доступная клиника с лифтом и табличками Брайля");
    selectPlace("clinic-sunrise", false);
    document.querySelector("#profile").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("escalate-button").addEventListener("click", () => {
    if (!state.emergencyMode) handleEmergencyToggle(true);
    document.querySelector("#support").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  bindAdminButtons();
}

async function bootstrapApp() {
  localizeStaticUi();
  bindEvents();
  await initializeDatabase();
  applyCurrentUserToState();
  setQuery(document.getElementById("search-input").value);
  render();
  window.setTimeout(scheduleMapResize, 220);
}

bootstrapApp();

function bindEvents() {
  document.getElementById("auth-form").addEventListener("submit", handleAuthSubmit);
  document.getElementById("confirm-auth-button").addEventListener("click", handleConfirmAuth);
  document.getElementById("demo-user-button").addEventListener("click", handleDemoUser);
  document.getElementById("logout-button").addEventListener("click", handleLogout);
  document.getElementById("search-form").addEventListener("submit", handleSearchSubmit);
  document.getElementById("save-profile").addEventListener("click", handleSaveProfile);
  document.getElementById("hazard-form").addEventListener("submit", handleHazardSubmit);
  document.getElementById("place-form").addEventListener("submit", handlePlaceSubmit);
  document.getElementById("assistant-form").addEventListener("submit", handleAssistantSubmit);
  document.getElementById("emergency-toggle").addEventListener("click", () => handleEmergencyToggle());
  document.getElementById("locate-me").addEventListener("click", locateUser);
  document.getElementById("nearest-place").addEventListener("click", findNearestAccessiblePlace);
  document.getElementById("focus-alatau-center").addEventListener("click", focusAlatauCenter);
  document.getElementById("fit-visible-points").addEventListener("click", fitVisiblePoints);
  document.getElementById("generate-journey-plan").addEventListener("click", () => {
    generateJourneyPlan().catch((error) => setStatus("db-status", `Ошибка генерации плана: ${error.message}`, true));
  });
  document.getElementById("share-route").addEventListener("click", () => {
    shareRouteSummary().catch((error) => setStatus("db-status", `Ошибка отправки маршрута: ${error.message}`, true));
  });
  document.getElementById("build-route").addEventListener("click", () => {
    buildRouteToSelectedPlace().catch((error) => setStatus("db-status", `Ошибка построения маршрута: ${error.message}`, true));
  });
  document.getElementById("clear-route").addEventListener("click", clearRoute);
  document.getElementById("export-db").addEventListener("click", exportDatabase);
  document.getElementById("capture-map-center").addEventListener("click", captureMapCenter);
  document.getElementById("reload-db").addEventListener("click", () => {
    reloadDatabaseData().catch((error) => setStatus("db-status", `Ошибка обновления базы: ${error.message}`, true));
  });

  document.getElementById("replay-demo").addEventListener("click", () => {
    document.getElementById("search-input").value = "библиотека для незрячих с тактильной навигацией";
    state.selectedTags = ["blind-support", "deaf-support"];
    state.mapAudience = "blind-support";
    saveSelectedTags();
    setQuery("библиотека для незрячих с тактильной навигацией");
    selectPlace("tactile-library", false);
  });

  document.getElementById("start-demo").addEventListener("click", () => {
    document.getElementById("search-input").value = "доступная клиника с лифтом и табличками Брайля";
    state.selectedTags = ["mobility-support", "blind-support"];
    state.mapAudience = "all";
    saveSelectedTags();
    setQuery("доступная клиника с лифтом и табличками Брайля");
    selectPlace("clinic-sunrise", false);
    document.querySelector("#profile").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("escalate-button").addEventListener("click", () => {
    if (!state.emergencyMode) handleEmergencyToggle(true);
    document.querySelector("#support").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  bindAdminButtons();
}
