---
title: Palestine Job Finder
tagline: Automated job search and email reports
summary: A Python automation that collects new IT jobs in Palestine and remote roles, scores each one against my skills, and emails a ranked report every 3 days.
role: Designed and built the whole project on my own.
context: Personal project · Open source
stack: [Python, GitHub Actions, JSearch API, Windows Task Scheduler]
highlights:
  - Built a Python automation that collects new IT jobs from Palestinian sources (Jobs.ps, Foras, company career pages) and remote jobs from LinkedIn and Indeed via the JSearch API, then emails a ranked report every 3 days.
  - Designed a keyword-based scoring model (English and Arabic) that rates each job 0–100 against my skills and filters out expired, senior and US-only roles.
  - Scheduled with GitHub Actions and Windows Task Scheduler, with deduplication, fault-tolerant sources and API keys stored in GitHub Secrets.
cover: ../../assets/projects/job-finder-report.png
coverAlt: Example email report listing software jobs in Palestine and remote jobs, each with a match score out of 100
repo: https://github.com/aabood17/palestine-job-finder
order: 2
---

## The problem

Job hunting as a fresh graduate means checking the same sites every day: local boards, company career pages, and international listings. Most postings don't fit, and good ones close quickly.

## What I built

- **Collectors** for Palestinian sources (Jobs.ps, Foras and company career pages) and for remote jobs from LinkedIn and Indeed through the JSearch API.
- **A keyword-based scoring model** in English and Arabic that rates each job from 0 to 100 against my skills, and filters out expired, senior and US-only roles.
- **A ranked HTML email report** sent every 3 days, split into jobs in Palestine and remote jobs.

## Engineering details

- Scheduled with **GitHub Actions** and Windows Task Scheduler.
- **Deduplication** so the same job is never reported twice.
- **Fault-tolerant sources:** one failing site doesn't stop the run.
- API keys stored in **GitHub Secrets**, never in the code.
