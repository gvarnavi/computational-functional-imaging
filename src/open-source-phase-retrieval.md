---
title: Open-Source Phase Retrieval
style: css/custom.css
toc: false
---

```js
const py4dstem_svg = FileAttachment(
  "data/py4dstem-phase-retrieval_updated.svg",
).image();

const img_Ti = FileAttachment("data/mat-sci-examples_Ti.png").href;
const img_hBN = FileAttachment("data/mat-sci-examples_hBN.png").href;
const img_cmos = FileAttachment("data/mat-sci-examples_cmos.png").href;
const img_STO_top = FileAttachment("data/mat-sci-examples_STO-top.png").href;
const img_STO_middle = FileAttachment(
  "data/mat-sci-examples_STO-middle.png",
).href;
const img_STO_bottom = FileAttachment(
  "data/mat-sci-examples_STO-bottom.png",
).href;
const img_style = "object-fit:cover;";

const img_VLP = FileAttachment("data/yues-vlps.svg").href;
const img_Apo = FileAttachment("data/berks-apo.svg").href;

import { return_resized_img } from "./components/ImageUtilities.js";
```

# Open-Source Phase Retrieval

<div id="py4dstem-container"> ${py4dstem_svg} </div>

- Suite of open-source STEM phase retrieval algorithms
- User-friendly and GPU-accelerated code
  - Check out our tutorial notebooks[^1] and methods paper[^2]

:::card

```python
ptycho = py4DSTEM.process.phase.SingleslicePtychography(
    datacube=dataset,
    energy = 80e3,
    semiangle_cutoff = 21.4,
    device = 'gpu', # GPU acceleration
    storage = 'cpu', # on-demand data streaming
).preprocess(
    plot_center_of_mass = False,
).reconstruct(
    num_iter = 8,
    step_size = 0.5,
    gaussian_filter_sigma = 0.2, # regularizations
).visualize(
)
```

:::

<style>
  summary h2 {
    display: inline;
  }
</style>

<details open>

  <summary>
    <h2> Example Materials-Science Reconstructions </h2>
  </summary>

- Reconstructions of a variety of materials classes[^3]
  - using a number of different detectors

<div class="grid grid-cols-3" style="grid-auto-rows: auto;">
  <div class="img-container" style="min-height:300px;">
    titanium islands on graphene
    ${resize((width)=> return_resized_img(img_Ti, width, 280, img_style))}
  </div>
  <div class="img-container" style="min-height:300px;">
    hexagonal boron nitride
    ${resize((width)=> return_resized_img(img_hBN, width, 280, img_style))}
  </div>
  <div class="img-container" style="min-height:300px;">
    low-voltage CMOS detector
    ${resize((width)=> return_resized_img(img_cmos, width, 280, img_style))}
  </div>
</div>
</details>

<details open>

  <summary>
    <h2> Example Life-Sciences Reconstructions </h2>
  </summary>

- Reconstructions of a variety of dose-sensitive samples[^4]
  - plunge-frozen in vitreous ice &rarr; single-particle analysis

<div class="img-container">
    Virus-like particles
    ${resize((width)=> return_resized_img(img_VLP,width,"auto;",img_style))}
</div>

</details>

[^1]: https://github.com/py4dstem/py4DSTEM_tutorials/tree/main/notebooks

[^2]: Iterative Phase Retrieval Algorithms for Scanning Transmission Electron Microscopy, [arXiv:2309.05250](https://arxiv.org/abs/2309.05250)

[^3]: Materials-science samples & imaging credit: K.Reidy, D. Byrne, F. Allen, B. Cohen, H. Shih, D. Kepaptsoglou, C. Ophus, S. Ribet

[^4]: Life-sciences samples & imaging credit: Y. Yu, K. Küçükoglu, S. Ribet
