# Shengpu Wang — personal website

A complete static portfolio. No package installation or build step is required. Edit `index.html` for content and `assets/css/styles.css` for design. Project figures and downloadable PDFs are in `assets/`.

## Preview locally

In Terminal:

```sh
cd /Users/spwang/Documents/website/site
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000 in a browser. Press Ctrl+C in Terminal to stop the server. You can also open `index.html` directly.

## Publish on GitHub Pages

These instructions assume your GitHub account is `ShengpuWang1`, as indicated by your project repositories.

1. Sign in to GitHub and create a **public** repository named **`shengpuwang1.github.io`**. For the commands below, create it empty: do not add a README, license, or .gitignore on GitHub.
2. Open Terminal and run the commands below. Only the contents of this `site` directory should be uploaded, with `index.html` at the repository root.

```sh
cd /Users/spwang/Documents/website/site
git init -b main
git add .
git commit -m "Add personal portfolio website"
git remote add origin https://github.com/ShengpuWang1/shengpuwang1.github.io.git
git push -u origin main
```

GitHub may ask you to authenticate. Use your configured GitHub credential manager, GitHub CLI, or a personal access token instead of an account password. If the repository already exists or this directory is already a Git checkout, inspect that state before rerunning initialization or adding a remote.

3. In the GitHub repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, select **main**, choose **/ (root)**, and click **Save**.
4. Wait for the Pages deployment to finish. GitHub says publishing can take up to 10 minutes. Visit **https://shengpuwang1.github.io/**. Check that the portrait, all seven project figures, paper links, and PDFs open correctly. The Actions tab shows deployment progress and errors.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

If using another account, replace the account and repository name throughout. The repository must be named `<username>.github.io`. Relative asset links already work without changing the page. Canonical URLs and a sitemap were deliberately omitted until the actual public destination is established; they can be added after publication.

## Update the live site

After making and previewing changes:

```sh
cd /Users/spwang/Documents/website/site
git add .
git commit -m "Update portfolio"
git push
```

Pages redeploys automatically. Refresh with the browser cache cleared if old content persists.

## Content to revisit

- Finance internship status is current as of November 2026 and says scheduled through December 2026. Update when the internship actually ends.
- The downloadable CV is the supplied Chinese CV and includes its original phone contact.
- The employer's Chinese legal name is retained because no official English name was supplied.
- New workflow figures are explanatory schematics, not measured data. Original reports and thesis remain linked.
- Public files are curated here. Do not upload the parent research workspace, feedback, signed declaration, or excluded pictures.
