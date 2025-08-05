# 📝React.js Todo App

<p align="center"><i>A fast and modern Todo app built with React, featuring task sharing via link, P2P Task Sync with WebRTC, theme customization, offline usage as a PWA, and caching for smooth performance.</i></p>

<img width="2466" height="1121" alt="Image" src="https://github.com/user-attachments/assets/918cb300-3a80-46f4-9416-5ade3f1560e7" />

## [https://todo-app-one-pi-90.vercel.app/](https://todo-app-one-pi-90.vercel.app/)

<!-- [![Vercel Status](https://api.netlify.com/api/v1/badges/e3b07d34-f0da-4280-9076-fd40eea893c6/deploy-status)](https://app.netlify.com/sites/react-cool-todo-app/deploys) -->

![Static Badge](https://img.shields.io/badge/vercel_deploy-success-success?label=Vercel-Deploy)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/maciekt07/TodoApp?color=%23b624ff)
![GitHub created at ](https://img.shields.io/github/created-at/maciekt07/TodoApp?color=%23b624ff)
![GitHub last commit](https://img.shields.io/github/last-commit/maciekt07/TodoApp?color=%23b624ff)

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

<img width="3197" height="1635" alt="Image" src="https://github.com/user-attachments/assets/ba55423f-b825-4a6f-9c91-78590b4879df" />

### 🤖 AI Emoji Suggestions

This feature uses Chrome’s experimental `window.LanguageModel` API powered by **Gemini Nano** — an on-device LLM.

⚠️ Requires **Chrome Canary 128+** with the **Gemini Nano model installed** - [Setup guide](https://docs.google.com/document/d/1VG8HIyz361zGduWgNG7R_R8Xkv0OOJ8b5C9QKeCjU0c/view?pli=1&tab=t.0#heading=h.witohboigk0o)

Code: [src/components/EmojiPicker.tsx](https://github.com/zehan12/TodoApp/blob/main/src/components/EmojiPicker.tsx#L116)

<img src="https://github.com/user-attachments/assets/c1a12df9-4317-4ec7-90aa-203d9f86c61b" alt="AI Emoji" width="360px" style="border-radius:12px" />

### 🔄 P2P Task Sync with WebRTC

Securely sync all the data between devices using peer-to-peer WebRTC connections. Devices pair via QR code, and your data is transferred directly between them — only minimal server involvement for connection setup, with no data stored or processed in the cloud.

- Tasks and categories are auto-merged based on recent edits or deletions
- For settings and other data, you choose which device to sync from

<video src="https://github-production-user-asset-6210df.s3.amazonaws.com/85953204/459582059-1f2fd620-a64e-42e2-be4f-f17e07fba9a2.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250626%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250626T185723Z&X-Amz-Expires=300&X-Amz-Signature=514e1513d883fab2b5b895d9075d0e0a522497e600e2577d1d11a341ab95aa6f&X-Amz-SignedHeaders=host" controls></video>

### 🎨 Color Themes & Dark Mode

Choose from various color themes and toggle between light and dark modes to suit your preferences.

<img width="924" height="524" alt="Image" src="https://github.com/user-attachments/assets/90a9f373-91c3-450d-8f67-cdf65f241093" />

### 🗣️ Task Reading Aloud

Option to have tasks read aloud using the native `SpeechSynthesis` API, with a selection of voices to choose from.

<img width="408" height="206" alt="Image" src="https://github.com/user-attachments/assets/81dc14cf-900b-42e0-a57e-11f9ac12d38c" />

### 📥 Import/Export Tasks

Users can import and export tasks to/from JSON files. This feature allows users to back up their tasks or transfer them to other devices easily. [Example Import File](https://github.com/zehan12/TodoApp/blob/main/example-import.json)

### 📴 Progressive Web App (PWA)

This app is a Progressive Web App (PWA), which means it can be installed on your device, **used even when you're offline** and behave like a native app with shortcuts and app badges.

<img width="256" height="320" alt="Image" src="https://github.com/user-attachments/assets/1d4e515b-0351-4e14-aa13-254427d71a7a" />

### 🔄 Update Prompt

The app features a custom update prompt that notifies users when a new version is available, allowing for easy refresh to access the latest improvements.

<img alt="Image" src="https://github.com/user-attachments/assets/6a1279c4-4b00-4897-85b2-e5ad52fc9ff7" />

### 📱 Custom Splash Screens

The app automatically generates custom splash screens from a single HTML template for various iOS and iPadOS devices in both light and dark modes. These splash screens provide a smooth, native-like launch experience when the app is opened as a PWA.

<img alt="Image" src="https://github.com/user-attachments/assets/cda15514-285f-4cd4-a8ed-a1abcc80c411" />

To generate splash screens: `npm run generate-splash`

## 👨‍💻 Installation

To install and run the project locally, follow these steps:

- Clone the repository: `git clone https://github.com/zehan12/TodoApp.git`
- Navigate to the project directory: `cd TodoApp`
- Install the dependencies: `npm install`
- Start the development server: `npm run dev`

The app will now be running at [http://localhost:5173/](http://localhost:5173/).

> [!TIP]
> For mobile device testing, use `npm run dev:host` to preview the app on your local network with HTTPS (required for camera features) and a QR code in the terminal for quick access. To enable PWA features in development, see `vite.config.ts`.

## 📷 Screenshots

<img  height="600" alt="Image" src="https://github.com/user-attachments/assets/51765d0f-3e73-477d-bcda-df2772ccda73" />

<img  height="600" alt="Image" src="https://github.com/user-attachments/assets/b172d720-39c4-41cd-8208-b6bc679831c5" />

<img  height="600" alt="Image" src="https://github.com/user-attachments/assets/9f466f7f-6ecc-4b38-b274-441e65e02295" />

## 🚀 Performance

<img width="2014" height="1657" alt="Image" src="https://github.com/user-attachments/assets/e6ea082b-f766-458a-8857-2acff7384661" />

## PWA Support

<img width="3197" height="1635" alt="Image" src="https://github.com/user-attachments/assets/67617f01-f3fb-4436-9d81-4ff272640da4" />

## Credits

Made with ❤️ by [zehan12](https://github.com/zehan12), licensed under [MIT](https://github.com/zehan12/TodoApp/blob/main/LICENSE).
