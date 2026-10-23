---
title: Bunduq Restaurant & Cafe
tagline: Bilingual QR menu and owner dashboard
summary: A fast Arabic/English QR menu for a Bethlehem restaurant and cafe, with a dashboard the owner uses to update prices, dishes, photos and offers himself.
role: Freelance, end to end. Requirements with the owner, plan and quote, stack choice, design based on the restaurant's brand, development, hosting, testing on real phones, print files, documentation and training.
context: Freelance client project · Bethlehem, Palestine
stack: [Next.js, React, TypeScript, Tailwind CSS, Sanity CMS, Cloudflare Pages, Vitest, GitHub Actions]
cover: ../../assets/projects/bunduq-cover.jpg
coverAlt: Three phone screens of the Bunduq menu in Arabic, the "Not sure?" suggestions, the home page and a pasta item with its choices
gallery:
  - src: ../../assets/projects/bunduq-menu-ar.png
    alt: Arabic menu with the Food and Drinks switch, section tabs and the salads list with prices
  - src: ../../assets/projects/bunduq-home-en.png
    alt: English version of the Bunduq home page with the open-now status and the offers strip
  - src: ../../assets/projects/bunduq-qr-cards.png
    alt: Print-ready table QR card and QR sticker in the restaurant's brand colors
live: https://bunduq.ps
order: 1
---

## The problem

- The menu existed only on paper: 117 items, in two languages for local guests and tourists, with prices that change often.
- The owner wanted to update everything himself, without a developer and without a monthly subscription to a menu service.
- Guests at the table needed help choosing, and waiters needed complete orders: sizes, milk, sauces and flavours.

## What I delivered

- **Website and menu** at bunduq.ps in Arabic (right-to-left) and English, mobile-first, installable as an app (PWA) and usable on a weak connection.
- **Owner dashboard** built on Sanity Studio with Arabic labels: sections, items, prices and sizes, photos, offers, "sold out today", featured items, opening hours, Wi-Fi and feature switches.
- **Ordering helpers for guests:** an order list to show the waiter, paid extras (milk, flavours, proteins), required choices such as pasta type and sauce, and a **"Not sure?"** button with ready-made combinations the owner writes.
- **Table QR cards** as print-ready files, pointing to a tracked entry page, with analytics that separate table, Instagram and search visits.
- **Handover:** an Arabic owner guide, an accounts and renewals sheet, a README with a deployment checklist, CI and weekly content backups.

## Key features

- Live **"Open now / Opens at 7:30 AM"** status, calculated in Palestine time.
- Food and Drinks switch, sticky section tabs that follow the scroll, and bilingual search.
- An item sheet with sizes and extras as compact chips and a live price.
- Rules per item: hide extras that don't apply, item-only extras, single or multiple choice, and required choices.
- "Not sure?" suggestions are added to the order in one tap; sold-out items are skipped.
- Every publish in the dashboard rebuilds the site automatically, in about one to two minutes.

## How it works

The owner edits the menu in **Sanity Studio**. Each publish triggers a webhook that rebuilds the **Next.js static export** on **Cloudflare Pages**, so guests get fast static pages with nothing to run or patch on a server.

The code is a monorepo with npm workspaces: the website, the dashboard, and a shared package with the types, menu model, and the price and opening-hours logic, covered by unit tests. Content changes go through targeted migration scripts that patch only the affected fields, so the owner's own edits are never overwritten.

**Quality and security:** GitHub Actions run a secret scan, type checking, linting, tests and builds on every change. The site sends a strict Content Security Policy and security headers, the repository holds no secrets, and every account belongs to the client with two-step verification.

## Results

- Live on [bunduq.ps](https://bunduq.ps), with QR cards ready for the restaurant's 19 tables.
- The owner updates prices, items and photos from the dashboard, and a publish reaches guests' phones in about a minute.
- Running cost for the client: the domain only, about $39 a year. Hosting, dashboard and analytics run on free plans.
