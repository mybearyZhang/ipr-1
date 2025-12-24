# IPR-1: Interactive Physical Reasoner

This repository contains the official implementation and project page for **IPR-1: Interactive Physical Reasoner**.

**Paper:** [arXiv:2511.15407](https://arxiv.org/abs/2511.15407)  
**Project Page:** [https://mybearyZhang.github.io/ipr-1/](https://mybearyZhang.github.io/ipr-1/)

## Open Source Plan

We are preparing to release the full codebase in the `src/` directory. The release will be structured as follows:

### 1. Baseline Training (`src/baselines/`)
We will provide training scripts and configurations for the baseline models compared in our paper, including:
- **VLM Agents:** GPT-4o, GPT-5 (via API wrappers), and open-source VLMs.
- **World Models:** DreamerV3, Genie adaptation.
- **Imitation Learning:** ACT and Diffusion Policy implementations adapted for our G2U benchmark.

### 2. Game GUI Scaffold (`src/gui/`)
A comprehensive scaffold for interacting with the 1,000+ heterogeneous games in our benchmark.
- **Universal Interface:** A unified Python API to control diverse game environments (NES, SNES, Genesis, etc.).
- **Web-based Visualizer:** Tools to stream game states to a browser for human-in-the-loop debugging and data collection (similar to the demo on our project page).
- **Recorder:** High-performance frame and action recording for dataset generation.

### 3. IPR Training Code (`src/ipr/`)
The core implementation of our Interactive Physical Reasoner:
- **PhysCode Pre-training:** Code to train the VQ-VAE based action tokenizer on our large-scale gameplay dataset.
- **World Model:** Implementation of the latent-conditioned world model that predicts future states and rewards based on PhysCodes.
- **Policy Training:** The VLM reinforcement learning loop, including the look-ahead planning mechanism and policy updates.

---

*Stay tuned! We are cleaning up the code and documentation for the initial release.*
