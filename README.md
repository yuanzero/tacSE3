# TacSE3

**Constrained SE(3) Motion Estimation from Low-Texture Visuotactile Images for In-Gripper Tracking and Compensation**

IEEE Transactions on Automation Science and Engineering · Early Access · 2026

[Project page](https://yuanzero.github.io/tacSE3/) · [Paper PDF](assets/papers/TacSE3-TASE-2026.pdf) · [IEEE Xplore](https://doi.org/10.1109/TASE.2026.3754711) · [Public code](https://github.com/yuanzero/tacSE3_code)

TacSE3 estimates constrained incremental contact motion from paired visuotactile sensors. Contact-centroid motion provides planar translation, tangential surface deformation supports rotation estimation, and the two fingertip estimates are fused in the end-effector frame.

## Paper and code

- **Paper:** the included 12-page PDF is the IEEE accepted author version available at Early Access. It has not yet been fully edited for final publication.
- **Implementation:** [yuanzero/tacSE3_code](https://github.com/yuanzero/tacSE3_code) contains the tactile dashboard, per-sensor 3D feedback, capture and replay tools, and monitor interfaces.
- **Usage:** [Demo guide](https://github.com/yuanzero/tacSE3_code/blob/main/docs/ball-demo.md) · [Architecture](https://github.com/yuanzero/tacSE3_code/blob/main/docs/architecture.md) · [中文说明](https://github.com/yuanzero/tacSE3_code/blob/main/README.zh-CN.md).
- **Earlier version:** [arXiv:2605.17929](https://arxiv.org/abs/2605.17929), published under the earlier title using “Equivariant”.

This repository hosts the project website and publication assets. The implementation is maintained in its dedicated code repository.

## Project structure

```text
index.html          # Paper, code links, method, results and citation
style.css           # Responsive page layout
script.js           # Copy controls, navigation and video playback
assets/
  papers/           # IEEE Early Access PDF
  images/           # Method overview, evaluated objects and setup
  videos/           # Rotation, generalization and downstream demos
```

## Preview locally

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. GitHub Pages publishes from the root of `main`.

## Citation

```bibtex
@article{tacse3_2026,
  title   = {TacSE3: Constrained SE(3) Motion Estimation from Low-Texture
             Visuotactile Images for In-Gripper Tracking and Compensation},
  author  = {Liao, Zhongyuan and Wang, Junzhe and Liu, Qingyang and
             Huang, Zhenmin and Ma, Jun and Cai, Yi and
             Meng, Fei and Liang, Haobo and Wang, Michael Yu},
  journal = {IEEE Transactions on Automation Science and Engineering},
  year    = {2026},
  note    = {Early Access},
  doi     = {10.1109/TASE.2026.3754711},
  url     = {https://doi.org/10.1109/TASE.2026.3754711}
}
```

Website layout originally inspired by [TacSL](https://iakinola23.github.io/tacsl/) and [Nerfies](https://nerfies.github.io).
