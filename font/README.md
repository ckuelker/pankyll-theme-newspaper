---
title:  font/README.md
author: Christian Külker
date:   2020-03-27

---

# Abstract

This document briefly describes the contents of the font directory of
`pankyll-theme-newspaper`.  The goal is not to copy and maintain font files,
but to provide a place for the theme to look for font files.

# History of this File

| Version | Date       | Notes                                                |
| ------- | ---------- | ---------------------------------------------------- |
| 0.1.1   | 2023-03-15 | Improve writing, remove author and copyright         |
| 0.1.0   | 2020-03-27 | Initial release                                      |

# Fonts

So far, the newspaper theme has used the Alegreya font, designed by Huerta
Tipográfica, a collaborative Argentinian type foundry with a deep respect for
design and typography. Founded in 2009. The font is available under the SIL
OPEN FONT LICENSE version 1.1 at
[github](https://github.com/huertatipografica/Alegreya)

## Alegreya

From the root of `pankyll-theme-newspaper`:

```bash
export URL=https://github.com/huertatipografica/Alegreya.git
git submodule add -b master $URL static/font/alegreya
git submodule init
```
