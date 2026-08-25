# Sai Krishna — Professional Portfolio

A responsive static professional portfolio for GitHub Pages. It highlights production reliability, SRE, observability, automation, cloud/DevOps skills, Platform Watch Tower / SREAgent, Grafana monitoring automation, and release assurance.

## Local preview

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Publish with GitHub Pages

### Option 1: Deploy from the main branch

1. Create a new GitHub repository named exactly `sai-krishna`.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. For the GitHub username `skrish2030`, the site will publish at `https://skrish2030.github.io/sai-krishna/`.

### Option 2: Use the included GitHub Actions workflow

The file `.github/workflows/pages.yml` can publish the static site through GitHub Actions. In **Settings → Pages**, choose **GitHub Actions** as the source.

## Personalize before publishing

- Confirm the email address in all pages.
- Confirm the GitHub profile URL (`https://github.com/skrish2030`).
- Add a verified LinkedIn URL only after replacing the placeholder yourself.
- Add public repository links only for projects that are safe to share.
- Add a current, truthful resume PDF only after all dates and employers are verified.
- Confirm certification names and add credential-verification links when available.
- Review the current-role start date and all public wording for consistency.

## Confidentiality and security

Do not publish proprietary code, internal URLs, credentials, API keys, customer data, production screenshots, account identifiers, database connection details, webhook secrets, or private architecture diagrams. The included SREAgent case study is intentionally high-level.

## Structure

- `index.html` — main portfolio
- `projects/sreagent.html` — detailed SREAgent case study
- `projects/grafana-monitoring.html` — monitoring automation case study
- `projects/release-assurance.html` — release reliability practice
- `styles.css` — responsive styling
- `script.js` — navigation and reveal behavior
- `assets/diagrams/` — accessible SVG diagrams
- `.github/workflows/pages.yml` — optional GitHub Pages deployment


## Repository and public link

Use the repository name `sai-krishna` so the public link remains clean:

```text
https://skrish2030.github.io/sai-krishna/
```
# SaiKrishna
