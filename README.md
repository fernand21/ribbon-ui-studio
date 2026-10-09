# Ribbon UI Studio v4.0.0

**Visual Office add-in studio for RibbonX, VBA, classic UserForms and modern Office UI workflows.**

Ribbon UI Studio helps developers build and maintain Microsoft Office add-ins for Excel, Word and PowerPoint from one Windows desktop workspace.

Version 4 adds a visual Ribbon designer, a native VBA UserForm designer and a separate PRO-only Modern Forms system, while retaining the RibbonX/XML, VBA, callback, imageMso and diagnostics workflows from the v3 line.

## Website

Official site and downloads:

https://fernand21.github.io/ribbon-ui-studio/

## v4 highlights

- Ribbon Visual Designer with live preview, structure tree, toolbox and properties
- Native VBA UserForm Designer for classic MSForms/VBA forms
- RibbonX / customUI XML editing with Monaco
- VBA module editing and callback generation
- imageMso browser and custom icon workflow
- Ribbon diagnostics and XML validation
- Excel `.xlam`, Word `.dotm` and PowerPoint `.ppam` workflows
- Modern Forms Designer and runtime in PRO
- Modern VBA-compatible dialogs in PRO
- Add or remove licensing from Office add-ins in PRO
- InstallerLab-based Windows deployment workflow

## Community vs PRO

| Capability | Community | PRO |
|---|:---:|:---:|
| RibbonX / VBA editing | ✅ | ✅ |
| Ribbon Visual Designer | ✅ | ✅ |
| Native VBA UserForm Designer | ✅ | ✅ |
| imageMso / callback generation / diagnostics | ✅ | ✅ |
| Modern Forms Designer + runtime | — | ✅ |
| Modern VBA-compatible dialogs | — | ✅ |
| Add licensing to add-ins | — | ✅ |
| Remove add-in licensing | — | ✅ |
| Advanced packaging / protected distribution | — | ✅ |

Classic VBA UserForms and Modern Forms are two different systems. Community includes the visual designer for normal native VBA/MSForms UserForms. Modern Forms are exclusive to PRO.

## EXE / MSI / Bundle deployment requires InstallerLab

Ribbon UI Studio prepares the Office add-in and its deployment project, but **InstallerLab must be installed to convert/package the add-in as EXE, MSI or Bundle**.

InstallerLab:

https://installerlab.website/

This dependency is intentionally documented separately because Ribbon UI Studio is the add-in design environment while InstallerLab is the Windows packaging application.

## Real-world example

The v4 documentation includes a LittleAPI Excel add-in as a real-world example of what can be built with Ribbon UI Studio: Ribbon UI, VBA, modern forms/dialogs and an external REST API working together.

LittleAPI is shown as an example solution; it is not a required built-in dependency of Ribbon UI Studio.

## Releases

https://github.com/fernand21/ribbon-ui-studio/releases

The website reads release/version/download information from GitHub Releases.

## Documentation

https://fernand21.github.io/ribbon-ui-studio/docs/

## Source and distribution

Ribbon UI Studio is proprietary software. This repository contains the public website and release/distribution resources; the application source remains private.

## Local website development

```bash
npm run dev
```

## Production validation

```bash
npm run build
```

The website is deployed through GitHub Pages.
