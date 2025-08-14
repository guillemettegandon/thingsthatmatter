# What Matters To You — Static Site

A clean, minimal, newsroom-style website for independent journalism.
Built as pure HTML/CSS/JS so you can deploy on **GitHub Pages** easily.

## Local preview
Just open `index.html` in your browser, or use a tiny server:

```bash
python3 -m http.server -d . 8080
# then visit http://localhost:8080
```

## Add/Edit articles
Edit `articles.json` — each article has:
- `id`, `title`, `excerpt`, `author`, `date`, `category`, `hero`, `content` (HTML allowed), `tags`

## Deploy to GitHub Pages
1. Create a public repo on GitHub, e.g. `what-matters-to-you`.
2. Upload all files in this folder to the repo root (or push via Git).
3. In GitHub: **Settings → Pages → Source: Deploy from a branch**, select `main` and `/ (root)`.
4. Wait a minute; your site will be live at: `https://<your-username>.github.io/<repo>/`

### Git commands (optional)

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/what-matters-to-you.git
git push -u origin main
```

---

### Customization
- Colors: edit `styles.css` variables at the top to tweak the sage/blue palette.
- Fonts: using **Newsreader** (serif headlines) and **Inter** (body). Replace with your favorites if you prefer other sans serifs.
- Forms: `contact.html` uses Formspree endpoint as a placeholder — swap the action with your own.
