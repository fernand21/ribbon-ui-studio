# Ribbon UI Studio v4.0.0

Ribbon UI Studio v4.0.0 expands the project from a RibbonX/VBA editor into a broader visual Office add-in studio.

The release keeps the existing RibbonX, VBA, callback, imageMso, validation and Office add-in workflows from v3, while adding new visual designers, a modern forms runtime and new PRO capabilities for protected add-in distribution.

## Highlights

- **Ribbon Visual Designer** with live preview, structure tree, toolbox and properties.
- **Native VBA UserForm Designer** for classic MSForms-based Office forms.
- **Modern Forms Designer (PRO)** with a separate JSON-based runtime and modern controls.
- **Modern VBA-compatible dialogs (PRO)** through the Modern Forms runtime.
- **Add-in licensing management (PRO)** to add or remove licensing from Office add-ins.
- **InstallerLab integration** for Office add-in packaging and deployment.
- Improved editor/session workflow around Ribbon XML, VBA modules and active Office documents.

## Ribbon Visual Designer

Version 4 adds a dedicated visual Ribbon designer for supported Excel, Word and PowerPoint projects.

The designer works with the current Ribbon XML and lets you:

- create and edit custom tabs;
- add groups and supported Ribbon controls;
- select elements from the visual preview or Structure tree;
- edit IDs, labels, callbacks, state and display properties;
- assign Office imageMso icons or supported custom images;
- hide supported Ribbon nodes;
- disable supported controls;
- position elements with Place Before / Place After;
- anchor custom tabs relative to Office-native tabs where supported;
- apply the resulting Ribbon XML back to the Office file.

The Ribbon designer is structural rather than a freeform drag-and-drop canvas. Ordering is controlled through the available placement options so the generated Ribbon remains consistent with RibbonX structure.

## Native VBA UserForm Designer

The classic VBA UserForm designer is available in the Community edition and works with native MSForms/VBA UserForms.

It provides a visual design surface for supported native controls, including labels, text inputs, buttons, check boxes, combo/list controls, frames, images, calendars and related controls.

Supported forms can be imported, moved, resized and edited through the properties panel. When an existing form is edited, Ribbon UI Studio preserves the existing VBA event module and binary resources where supported by the Office integration.

Image controls can embed PNG, JPEG, GIF or BMP content into the form design instead of depending on developer-machine absolute paths.

## Modern Forms (PRO)

Modern Forms are a separate form system and are exclusive to Ribbon UI Studio PRO.

They are not native MSForms UserForms. Definitions are stored as JSON and rendered by the installed Modern Forms runtime.

The visual designer includes:

- form list and form management;
- drag and resize canvas;
- multi-selection;
- properties editor;
- runtime Preview;
- Save to project;
- delete workflow;
- themes and accent colors;
- width, height, scale and elevation settings.

Supported Modern Forms controls include:

- TextBox;
- ComboBox;
- CheckBox;
- Date picker;
- Calendar with single-date or range selection;
- File or folder picker;
- Label;
- Image;
- Button with accept/cancel actions.

Modern Forms can return values to VBA by control ID and expose whether the form was accepted and which button action closed it.

## Modern MessageBox (PRO)

Version 4 also includes a VBA-compatible modern message workflow through `OER_ModernMsgBox`.

It supports the standard button groups used by the compatibility wrapper, including OK, OK/Cancel, Abort/Retry/Ignore, Yes/No/Cancel, Yes/No and Retry/Cancel, together with standard information, question, warning and critical message types.

If the modern runtime cannot be used, the compatibility wrapper can fall back to the native VBA MsgBox behavior.

The shared message form can be customized in the Modern Forms designer so multiple dialogs can reuse one visual design.

## Add-in licensing management (PRO)

Ribbon UI Studio PRO can manage licensing for Office add-ins before distribution.

PRO users can:

- add licensing protection to an add-in;
- remove licensing when it is no longer required;
- keep the application's own Ribbon UI Studio license separate from the license embedded into distributed add-ins.

This gives developers a direct path from add-in creation to controlled distribution without mixing the editor's own activation with the licensing of generated Office solutions.

## InstallerLab packaging integration

Ribbon UI Studio v4 integrates with InstallerLab as the primary Office add-in packaging path when InstallerLab is available.

The packaging workflow can prepare a temporary InstallerLab OfficeAddin project, validate it through InstallerLab CLI and build the deployment output while keeping the original add-in unchanged when staging or protection is required.

For Modern Forms add-ins, the packaging workflow includes the required Modern Forms runtime/bridge components. Modern Forms are intended for installed deployments rather than a manually copied loose add-in.

## Community and PRO

| Capability | Community | PRO |
|---|:---:|:---:|
| RibbonX / VBA editing | ✅ | ✅ |
| Ribbon Visual Designer | ✅ | ✅ |
| Native VBA UserForm Designer | ✅ | ✅ |
| imageMso and icon workflow | ✅ | ✅ |
| Callback generation and diagnostics | ✅ | ✅ |
| Modern Forms Designer | — | ✅ |
| Modern Forms runtime | — | ✅ |
| Modern VBA-compatible dialogs | — | ✅ |
| Add licensing to add-ins | — | ✅ |
| Remove add-in licensing | — | ✅ |
| Advanced protected distribution workflows | — | ✅ |

## Existing v3 capabilities retained

Version 4 keeps the major capabilities introduced in the v3 line, including:

- Windows Explorer integration;
- Office 2007 and Office 2010+ RibbonX support;
- Excel `.xlam`, Word `.dotm` and PowerPoint `.ppam` add-in workflows;
- RibbonX callback generation;
- callback signature diagnostics;
- duplicate ID and Ribbon structure validation;
- VBA module editing;
- Monaco multi-document editing;
- imageMso browsing;
- Office-aware previews;
- installer and portable distribution of Ribbon UI Studio itself.

## Modern Forms deployment notes

- Modern Forms require the installed runtime/bridge used by the v4 packaging workflow.
- The current runtime targets Windows 64-bit with .NET Framework 4.8; Office may be 32-bit or 64-bit.
- Runtime form definitions are stored inside the Office package.
- Preview validates rendering of a form definition; final Office/VBA integration should still be verified in the installed add-in.

## Release status

This GitHub release is intentionally being prepared as a **draft**.

**Binary assets are not attached yet.** The maintainer will upload the final v4.0.0 installer and portable binaries after the corresponding builds have been compiled and verified.

Do not publish this draft until the binary assets have been uploaded and checked.
