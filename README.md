# 🖼️ Safe Image Converter Extension

> A powerful Chrome extension that revolutionizes how you save and convert images on the web

<div align="center">
  <img src="baker.png" alt="screenshot" width="800px">
</div>



# 🔒 Secure Image Format Converter (Chrome Extension)

> A privacy-first, open-source Chrome extension to convert and save images — **without tracking, hidden scripts, or external calls**

---

## ⚠️ Important Clarification

This project is **NOT affiliated** with the Chrome Web Store extension "Save Image As Type".

Recent reports flagged a similarly named extension as malware.

👉 This repository is an independent implementation and:

* has never been published on the Chrome Web Store
* contains no tracking or monetization logic
* is fully open-source for verification

---

## 🧠 Why this project matters

Modern browser extensions are a **major security risk**:

* Hundreds of extensions have been found leaking user data ([SecurityWeek][1])
* Some inject scripts and hijack affiliate links ([The Hacker News][2])
* Even trusted extensions can become malicious after updates

👉 This project exists as a **safe, transparent alternative**

---

## 🔐 Security-First Design

### ✅ What this extension DOES

* Convert images using browser Canvas API
* Save as JPG / PNG / WebP
* Process everything locally

### ❌ What this extension NEVER does

* No external API calls
* No analytics / tracking
* No affiliate injection
* No remote scripts
* No data collection

---

## 🔍 How it works

```
User Right Click → Image URL → Canvas Processing → Download
```

✔ 100% local
✔ No network requests
✔ No hidden behavior

---

## 🚀 Features

* Right-click → Save image as:

  * JPG (adjustable quality)
  * PNG (lossless)
  * WebP (optimized)
* Fast and lightweight
* Works completely offline

---

## 🛠️ Tech Stack

* Chrome Extension Manifest V3
* JavaScript (Vanilla)
* Canvas API

---

## 📦 Installation

1. Clone repo
2. Open `chrome://extensions`
3. Enable Developer Mode
4. Load unpacked

---

## 🔎 Transparency

This project is intentionally:

* small
* readable
* easy to audit

👉 You can verify the entire logic in minutes.

---

## 🤝 Contributions

Security improvements are highly welcome.

---

## ⭐ If you care about privacy-first tools, consider starring this repo.
