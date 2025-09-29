# How to Setup and Operate the CogTwins Lab Website

```
(c) Copyright
Created by: Ayub Ali Emon
For: Cognitive Industrial Digital Twins Lab
Email: emon@sdust.edu.cn
GitHub: github.com/alfa-echo-niner-ait
```

This guide will help new members of the **Cognitive Industrial Digital Twins Lab** team get started with developing, editing, and maintaining our lab website.

* Website: [cogtwins.github.io](https://cogtwins.github.io)
* Repository: [github.com/cogtwins/cogtwins.github.io](https://github.com/cogtwins/cogtwins.github.io)


## 1. Prerequisites

Before you start, install the following tools on your computer:

* **Git** (for cloning and pushing code)
  [Download Git](https://git-scm.com/downloads)

* **Ruby** (needed for Jekyll)
  [Install Ruby](https://www.ruby-lang.org/en/downloads/)
  (On macOS and Linux, Ruby is often pre-installed.)

* **Bundler** and **Jekyll** gems
  These will be installed later using `bundle install`.

* **A text editor**
  Recommended: [Visual Studio Code](https://code.visualstudio.com/)


## 2. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/cogtwins/cogtwins.github.io.git
cd cogtwins.github.io
```

## 3. Install Dependencies

Inside the project directory:

```bash
# Install bundler if not installed
gem install bundler

# Install all required Ruby gems (from Gemfile)
bundle install
```


## 4. Run the Website Locally

To serve the website on your computer:

```bash
bundle exec jekyll serve
```

or, if a `composer.json` is set up:

```bash
composer run jekyll serve
```

Now open your browser and visit:

👉 [http://localhost:4000](http://localhost:4000)

You will see the local version of the site. Any changes you make will be reflected here after refresh.


## 5. Project Structure

The repository is organized as follows:

```
├── _data                # Team and exchange data
│   ├── lab_members.yml
│   ├── phd_members.yml
│   ├── graduate_members.yml
│   ├── undergraduate_members.yml
│   └── exchage_2024.yml
├── _includes            # Shared HTML components
├── _layouts             # Page layouts (default, post, profile, etc.)
├── _posts               # Blog posts (YYYY-MM-DD-title.markdown)
├── _profiles            # Member profile pages (.md files)
├── assets               # Images, CSS, JS, post files
│   ├── imgs             # Member photos
│   ├── postimg          # Blog cover images
│   └── postfiles        # Files attached to posts
├── index.html           # Homepage
├── about.md             # About page
├── academic_exchange.md # Exchange page
├── team_publication.md  # Publications page
└── _config.yml          # Jekyll site config
```


## 6. Website Functionalities

* **Members pages**

  * Members are listed from YAML files in `_data/`
  * Photos stored in `assets/imgs`
  * Profiles stored in `_profiles/`

* **Blog posts**

  * Written in Markdown under `_posts/`
  * Each has a cover image in `assets/postimg/`
  * Additional files go in `assets/postfiles/`

* **Exchange programs**

  * Stored in `_data/exchage_2024.yml`
  * Used for announcements and notices


## 7. Adding New Members

### Step 1: Add profile image

Save the member’s photo in `assets/imgs/`.
Name it using the permalink style (e.g., `jiehan_zhou.jpg`).

### Step 2: Create profile page

Inside `_profiles/`, create a file like:

**`jiehan_zhou.md`**

```yaml
---
layout: default
title: Jiehan Zhou
permalink: /jiehan_zhou/
---
Bio and details in Markdown or HTML.
```

### Step 3: Update `_data` file

For example, in `_data/lab_members.yml`:

```yaml
- name: "Jiehan Zhou"
  profile: "/jiehan_zhou"
  photo: "/assets/imgs/jiehan_zhou.jpg"
  title: "Team Leader | Professor"
```

## 8. Adding a Blog Post

### Step 1: Create post file

Inside `_posts/`, add a new file named like:

**`2024-10-31-cogtwins-lab-start.markdown`**

```yaml
---
layout: post
title: "Cognitive Industrial Digital Twins Lab Starts Its Journey"
author: "Ayub Ali Emon"
date: 2024-10-31
tags: team news
cover: "/assets/postimg/2024-10-31-cogtwins-lab-start.png"
published: true
---
Write the blog content here in Markdown.
```

### Step 2: Add cover image

Place in `assets/postimg/` with matching name:
`2024-10-31-cogtwins-lab-start.png`

### Step 3: Add supporting files (optional)

If needed, store files in `assets/postfiles/`.


## 9. Adding Exchange Notices

Update `_data/exchage_2024.yml` with entries like:

```yaml
- serial: 5
  name: "SDUST International Exchange Programs 2025 Fall"
  date: "2025-09-24"
  file_url: "SDUST_International_Exchange_Programs_2025_Fall.pdf"
  relative_file: true
  notice: false
```

If `notice: true`, it will appear as a page, use this only to view as page like blog post.


## 10. Testing & Deployment

1. Run locally:

   ```bash
   bundle exec jekyll serve
   ```

2. Check your changes at: [http://localhost:4000](http://localhost:4000)

3. Commit and push to GitHub:

   ```bash
   git add .
   git commit -m "Added new member/blog post"
   git push origin main
   ```

4. GitHub Pages will automatically rebuild and deploy.
   After a few minutes, changes will appear at [cogtwins.github.io](https://cogtwins.github.io).


## 11. Tips

* Always **check locally** before pushing.
* Follow **consistent file naming** (`firstname_lastname.md`, `YYYY-MM-DD-title.markdown`).
* Keep images **optimized** for web (compressed JPEG/PNG).
* If something breaks, check `_config.yml`, frontmatter (`---` sections), and YAML indentation.
* Follow the existing contents to implement new content.
