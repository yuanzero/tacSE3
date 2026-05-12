# TacSE3 — Project Page

Project page for the paper:

> **TacSE3: Equivariant SE(3) Motion Estimation from Low-Texture Visuotactile Images for In-Gripper Tracking and Compensation**
> Zhongyuan Liao, Junzhe Wang, Qingyang Liu, Zhenmin Huang, Jun Ma, Yi Cai, Fei Meng\*, Haobo Liang\*, Michael Yu Wang\*
> *Under Review, 2026*

Live page: <https://yuanzero.github.io/tacSE3/> *(once GitHub Pages is enabled)*

---

## TL;DR

TacSE3 is a tactile-motion-estimation pipeline that maps low-texture visuotactile
measurements (from dense-pattern VBTS like DM-Tac) to a decoupled 3D force field
and estimates incremental rigid-body motion on **SE(3)** through a least-squares
rigid-body model with manifold-consistent integration.

- **Contact-first sensing** — identify the active contact region first.
- **Force-field decoupling** — separate normal and tangential responses via Helmholtz–Hodge decomposition.
- **Rigid-body consistency** — planar translation from contact-centroid motion; rotation from the shear field.

The resulting rotation estimate works as a post-processing signal on top of an
ACT base policy and improves disturbance tolerance on Drawing, Gear Insertion
and Peg-in-Hole tasks.

---

## Repository layout

```text
tacSE3/
├── index.html              # Single-page project site
├── style.css               # All styles (vanilla CSS, no framework)
├── script.js               # BibTeX copy + nav scroll-spy
├── README.md               # You are here
├── assets/
│   ├── images/             # Figures used by index.html
│   │   ├── overview.png
│   │   ├── diffobj.png
│   │   └── setup.png
│   └── videos/
│       ├── demo.mp4                       # Hero teaser
│       ├── drawing_demo_{fail,successful}.mp4
│       ├── gear_demo_{fail,successful}.mp4
│       ├── peg_demo_{fail,successful}.mp4
│       ├── rotation_demo/                 # rotationX/Y/Z.mp4
│       └── generalization_demo/           # rotation_<object>.mp4 (×8)
└── paper_fig/              # Paper LaTeX source + high-res figures
    ├── main.tex
    └── *.png
```

> `paper_fig/` is the LaTeX source of the paper and is **not** referenced by the
> website. Keep it out of any production deployment if size matters.

---

## Run locally

The site is fully static — no build step.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or any equivalent static server (`npx serve`, `php -S`, etc.).

---

## Deploy to GitHub Pages

1. Push to `main`.
2. In **Settings → Pages**, choose **Branch: `main` / `/ (root)`**.
3. The page will be served at `https://<user>.github.io/tacSE3/`.

For a slimmer deploy, exclude `paper_fig/` (e.g. via a `.nojekyll` + Pages action
that ignores it, or simply move it to a separate branch).

---

## Editing guide

| Want to change…                | Edit…                                                            |
| ------------------------------ | ---------------------------------------------------------------- |
| Title / authors / affiliations | `index.html` → `#hero`                                           |
| Abstract / motivation          | `index.html` → `#abstract`, `#motivation`                        |
| Method figure                  | replace `assets/images/overview.png`                             |
| Rotation demo videos           | `assets/videos/rotation_demo/rotation{X,Y,Z}.mp4`                |
| Generalization videos          | `assets/videos/generalization_demo/rotation_<object>.mp4`        |
| Downstream task videos         | `assets/videos/{drawing,gear,peg}_demo_{fail,successful}.mp4`    |
| Styles / colors                | `style.css` (CSS variables in `:root`)                           |
| BibTeX block                   | `index.html` → `#bibtex`                                         |

**Adding a generalization video:** drop the MP4 into
`assets/videos/generalization_demo/`, use lowercase ASCII names like
`rotation_<object>.mp4`, then add a `<div class="video-card">` block in
`index.html`.

---

## Known TODO

- [ ] Replace placeholder Code link (`https://github.com/Junzhe/tacse3`) with the real repo URL.
- [ ] Replace placeholder arXiv link (`#`) once the paper is on arXiv.
- [ ] Consider hosting large MP4s on a CDN / git-lfs to keep the repo small.

---

## Citation

```bibtex
@article{tacse3_2026,
  title   = {TacSE3: Equivariant SE(3) Motion Estimation from Low-Texture
             Visuotactile Images for In-Gripper Tracking and Compensation},
  author  = {Liao, Zhongyuan and Wang, Junzhe and Liu, Qingyang and
             Huang, Zhenmin and Ma, Jun and Cai, Yi and
             Meng, Fei and Liang, Haobo and Wang, Michael Yu},
  journal = {arXiv preprint},
  year    = {2026}
}
```

---

## Acknowledgements

The page template is inspired by [TacSL](https://iakinola23.github.io/tacsl/)
and [Nerfies](https://nerfies.github.io).
