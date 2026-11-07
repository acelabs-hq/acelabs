# ACE Labs website

Static site (plain HTML/CSS/JS, no build step) for GitHub Pages.

## Structure
```
index.html        Home
services.html     Services
systems.html      QMS / ERP / SaaS / healthcare systems
work.html         Project blueprints
about.html        About, team, bench, FAQ
contact.html      Contact form
404.html          Not-found page
.nojekyll         Tells GitHub Pages to skip Jekyll
blog/
  index.html      Notes list
  *.html          Posts
```

## Deploy
1. Copy these files into the root of your repo, commit and push to `main`.
2. GitHub → Settings → Pages → Source: "Deploy from a branch" → `main` / `/ (root)` → Save.
3. After a minute the site is live at `https://<username>.github.io/<repo>/`.

## Before going live
- Replace `YOUR_FORM_ID` in `contact.html` (create a free form at formspree.io).
- Replace `YOUR-USERNAME/ace-labs` GitHub links and the X link in each footer.
- Update the founder card in `about.html` and the LinkedIn link.
