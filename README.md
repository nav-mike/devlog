# Devlog

```sh
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![devlog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/devlog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ▶️ Running End-to-End Tests

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

1.  **Install Browsers:**
    Before running the tests for the first time, or after a Playwright version update, you need to install the necessary browser binaries:
    ```sh
    npx playwright install
    ```

2.  **Run Tests:**
    To execute the end-to-end tests, run the following command:
    ```sh
    npm run test:e2e
    ```
    This will run all tests defined in the `tests` directory. Test results, including an HTML report, will be available after the run. By default, reports are saved in `playwright-report`. These tests are also automatically executed via GitHub Actions on every push and pull request to the `main` branch.

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).


☽ Упрощённая Версия: “Sproutbound” ☾
Жанр: Cozy RPG / Farming-lite
Формат: 2D (топ-даун), Unity
Продолжительность разработки: ~6 недель при 5 ч/нед

⚙️ Суть игры:
Ты прибываешь на маленький, заброшенный участок земли на новой планете. Цель — возродить его, выращивая экзотические растения и выполняя простые поручения от пары NPC.

Без боёв, без сложной автоматизации, без JRPG-логики.
Вся механика строится вокруг простых циклов: сажай → поливай → собирай → дари → улучшай.

📦 Основные механики (в порядке приоритета):
Фарминг:

Простая сетка 5x5 клеток

Сажать 3-5 видов растений

У растений 3 стадии роста (спрайты можно нарисовать или взять с Asset Store)

Инвентарь:

Слот на 6-8 предметов

Используется для хранения урожая и даров NPC

NPC и "отношения":

2-3 NPC, каждый принимает разные подарки

Простой счётчик “дружбы”

На 3 уровне дружбы — дают косметическое улучшение фермы (фонарь, скамеечку, кота, и т.п.)

Апгрейды:

Потрать X урожая = получи апгрейд (увеличение скорости роста, больше урожая и т.д.)

🧱 Почему это УДОБНО ДЛЯ СТАРТА:
Компонент	Почему лёгок в реализации
Фарминг	Всего 5-10 тайлов, упрощённая логика роста
Инвентарь	Простая List<> + UI-панель
NPC	2-3 JSON файла с диалогами и логикой дружбы
Арт	Можно использовать бесплатные ресурсы с Kenney, itch.io или OpenGameArt
Сюжет	Не обязателен — просто создаёшь настроение

📅 Примерный график (6 недель):
Неделя	Цель
1	Сцена, передвижение персонажа, грядки
2	Посадка/рост растений
3	Интерфейс + инвентарь
4	1 NPC + система подарков
5	Добавление ещё 2 NPC, визуальные улучшения
6	Финал: сборка, музыка, уют, полировка, билд 🛠️

🔧 Возможные расширения позже (если захочешь):
Коты. Потому что коты.

Погода (туман, дождик, снежок)

Редкие растения с уникальными эффектами

День/ночь

Журнал игрока (записи о растениях, NPC)

📜 Подходящий слоган:
"Уходи от шума. Сей. Люби. Свети."
Sproutbound — мини-оазис в мире шумного кода.

⚠️ Если хочешь — могу прямо сейчас накидать основную архитектуру в Unity (C#):

Классы: Crop, Tile, InventoryItem, NPC, GiftSystem

Простая FSM для роста растений

UI-управление через Canvas и EventSystem

Желаешь сего? Или начнем с прототипа-грядки?
Во имя Священного Простоты и Доступности — да начнётся первый билд!
