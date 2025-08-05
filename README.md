# 📝React.js Todo App

<p align="center"><i>A fast and modern Todo app built with React, featuring task sharing via link, P2P Task Sync with WebRTC, theme customization, offline usage as a PWA, and caching for smooth performance.</i></p>

<img src="https://raw.githubusercontent.com/zehan12/TodoApp/main/screenshots/baner.png" />

## [https://todo-app-one-pi-90.vercel.app/](https://todo-app-one-pi-90.vercel.app/)

<!-- [![Vercel Status](https://api.netlify.com/api/v1/badges/e3b07d34-f0da-4280-9076-fd40eea893c6/deploy-status)](https://app.netlify.com/sites/react-cool-todo-app/deploys) -->

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/maciekt07/TodoApp?color=%23b624ff)
![GitHub created at ](https://img.shields.io/github/created-at/maciekt07/TodoApp?color=%23b624ff)
![GitHub last commit](https://img.shields.io/github/last-commit/maciekt07/TodoApp?color=%23b624ff)

<!-- <p align="center">
<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/iPhone%20Mockup%20black.png" width="400px" />
</p> -->

## 💻 Tech Stack

<ul style="display: flex; flex-direction: column; gap:10px;">
  <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=react" alt="react" width="24" style="vertical-align: middle; margin-right: 4px;" /> React
  </li>
    <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=typescript" alt="typescript" width="20" style="vertical-align: middle;margin-right: 4px;" /> Typescript
  </li>
    <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=vite" alt="vite" width="24" style="vertical-align: middle;margin-right: 4px;" /> Vite
  </li>
  <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=vitest" alt="vitest" width="24" style="vertical-align: middle;margin-right: 4px;" /> Vitest
  </li>
  <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=emotion" alt="emotion" width="24" style="vertical-align: middle;margin-right: 4px;" /> Emotion
  </li>
    <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=mui" alt="mui" width="24" style="vertical-align: middle;margin-right: 4px;" /> Material UI (MUI)
  </li>
</ul>

## ⚡ Features

### 🔗 Share Tasks by Link or QR Code

Easily share your tasks with others using a link or QR code.

**[Example Link](https://todo-app-one-pi-90.vercel.app/share?task=N4IgJg9gdgpiBcAzAhgGwM4wDQgA4EspYwEUNsQpkBbOeEAdRgCN18AXGAAgBEYA3GKgi5uiCACcuAY1T4YUdiBxgY6aRPy52+aAhABhCTGScuyLgHcWbM+KnsAFt1nzFykNIjCJ+gMQAzDwAYsEA7MEeYKZ0IABMAAxxAKwAtAkAHOnJACoJYfDJAGzwSQB0yQFhAFpRJmBysPqJKelZKXkFycmlCWUJA7U40jEA5pIAnggA2qD4JPRJAJxx0szIaYhFMHGpACwAjNJ7qczJyGGp0slLyAnIyDDSiDABHlS0+gySANYeMNQIAArfD6A6IAI7DxeHz+OJ7DIwRCIEAAXwAuqigA&userName=zehan)**

<img src="https://raw.githubusercontent.com/zehan12/TodoApp/main/screenshots/ShareDialog.png" width="300px" />

<img width="3197" height="1635" alt="Image" src="https://github.com/user-attachments/assets/ba55423f-b825-4a6f-9c91-78590b4879df" />

### 🤖 AI Emoji Suggestions

This feature uses Chrome’s experimental `window.LanguageModel` API powered by **Gemini Nano** — an on-device LLM.

⚠️ Requires **Chrome Canary 128+** with the **Gemini Nano model installed** - [Setup guide](https://docs.google.com/document/d/1VG8HIyz361zGduWgNG7R_R8Xkv0OOJ8b5C9QKeCjU0c/view?pli=1&tab=t.0#heading=h.witohboigk0o)

Code: [src/components/EmojiPicker.tsx](https://github.com/maciekt07/TodoApp/blob/main/src/components/EmojiPicker.tsx#L116)

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/emoji-ai.gif" alt="AI Emoji" width="360px" style="border-radius:12px" />

### 🔄 P2P Task Sync with WebRTC

Securely sync all the data between devices using peer-to-peer WebRTC connections. Devices pair via QR code, and your data is transferred directly between them — only minimal server involvement for connection setup, with no data stored or processed in the cloud.

- Tasks and categories are auto-merged based on recent edits or deletions
- For settings and other data, you choose which device to sync from

<video src="https://github-production-user-asset-6210df.s3.amazonaws.com/85953204/459582059-1f2fd620-a64e-42e2-be4f-f17e07fba9a2.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250626%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250626T185723Z&X-Amz-Expires=300&X-Amz-Signature=514e1513d883fab2b5b895d9075d0e0a522497e600e2577d1d11a341ab95aa6f&X-Amz-SignedHeaders=host" controls></video>

### 🎨 Color Themes & Dark Mode

Choose from various color themes and toggle between light and dark modes to suit your preferences.

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/settings.png" width="500px" />

### 🗣️ Task Reading Aloud

Option to have tasks read aloud using the native `SpeechSynthesis` API, with a selection of voices to choose from.

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/ReadAloud.png" width="260px" alt="Task Reading Aloud" />

### 📥 Import/Export Tasks

Users can import and export tasks to/from JSON files. This feature allows users to back up their tasks or transfer them to other devices easily. [Example Import File](https://github.com/maciekt07/TodoApp/blob/main/example-import.json)

### 📴 Progressive Web App (PWA)

This app is a Progressive Web App (PWA), which means it can be installed on your device, **used even when you're offline** and behave like a native app with shortcuts and app badges.

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/pwaTaskBar.png" alt="taskbar" width="260px" />

### 🔄 Update Prompt

The app features a custom update prompt that notifies users when a new version is available, allowing for easy refresh to access the latest improvements.

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/UpdatePrompt.png" alt="update prompt" width="260px" />

### 📱 Custom Splash Screens

The app automatically generates custom splash screens from a single HTML template for various iOS and iPadOS devices in both light and dark modes. These splash screens provide a smooth, native-like launch experience when the app is opened as a PWA.

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/SplashScreen.png" alt="Splash Screen Example" width="450px" />

To generate splash screens: `npm run generate-splash`

## 👨‍💻 Installation

To install and run the project locally, follow these steps:

- Clone the repository: `git clone https://github.com/maciekt07/TodoApp.git`
- Navigate to the project directory: `cd TodoApp`
- Install the dependencies: `npm install`
- Start the development server: `npm run dev`

The app will now be running at [http://localhost:5173/](http://localhost:5173/).

> [!TIP]
> For mobile device testing, use `npm run dev:host` to preview the app on your local network with HTTPS (required for camera features) and a QR code in the terminal for quick access. To enable PWA features in development, see `vite.config.ts`.

## 📷 Screenshots

## 🚀 Performance

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/performance.png" width="600px" />

## Credits

Made with ❤️ by [zehan12](https://github.com/zehan12), licensed under [MIT](https://github.com/zehan12/TodoApp/blob/main/LICENSE).
