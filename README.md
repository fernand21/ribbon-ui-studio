# Ribbon UI Studio 5 — Microsoft Office Add-in IDE

Ribbon UI Studio is a Windows desktop **integrated development environment for Microsoft Office add-ins**, combining a project explorer, visual RibbonX designer, Monaco-powered XML and VBA editing, callback diagnostics, resource management, classic VBA UserForms and additional PRO workflows.

> Documentation for the v5 product line is in preparation. **Check GitHub Releases for the version actually published.** The documentation and marketing may describe the upcoming v5 scope before the stable binary is released.

## Guides

- **[Ribbon UI Studio 5 IDE documentation — Español / English](https://fernand21.github.io/ribbon-ui-studio/docs/v5/)** — practical step-by-step workflows and examples
- [Documentation archive (v4)](https://fernand21.github.io/ribbon-ui-studio/docs/)
- [Releases](https://github.com/fernand21/ribbon-ui-studio/releases)

## IDE workflow

1. Open an Office file or create a project for Excel, Word, or PowerPoint.
2. Navigate modules, Ribbon, resources, classic UserForms, Modern Forms, Build and licensing in the project explorer.
3. Design RibbonX visually or edit `customUI` / `customUI14` in Monaco.
4. Write and check VBA callbacks; use editor assistance to inspect references and signatures.
5. Manage imageMso/custom icons and visual forms.
6. Validate the Office package, build a supported XLAM/DOTM/PPAM add-in, and test in Office.
7. For Windows EXE/MSI/Bundle distribution, use **[InstallerLab](https://installerlab.website/)** separately.

## Community and PRO

| Capability | Community | PRO |
|---|:---:|:---:|
| RibbonX and VBA editing | ✓ | ✓ |
| Visual Ribbon Designer | ✓ | ✓ |
| Native VBA/MSForms UserForms | ✓ | ✓ |
| imageMso, callback analysis and diagnostics | ✓ | ✓ |
| Modern Forms designer and runtime | — | ✓ |
| Modern VBA-compatible dialogs | — | ✓ |
| Add-in licensing tools | — | ✓ |
| Advanced protection and distribution workflows | — | ✓ |

Classic VBA UserForms and PRO Modern Forms are **different systems**. InstallerLab is a separate dependency for building Windows installer artifacts. The IDE is not a drop-in replacement for Visual Studio or for every feature of the Microsoft VBA editor.

## Development and support

Website: https://fernand21.github.io/ribbon-ui-studio/

Repository: https://github.com/fernand21/ribbon-ui-studio

The website may read current release/version/download information dynamically from GitHub Releases. Software source is proprietary; this repository contains the public website and distribution resources.

```bash
npm run dev
npm run build
```
