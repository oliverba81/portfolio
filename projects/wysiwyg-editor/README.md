# WYSIWYG-Editor *(Showcase – ohne Quellcode)*

**Vanilla-Editor-Klasse plus optionalem React-Wrapper für Next.js – controlled/uncontrolled, IME-sicher, sanitize.**

## Technologie

Framework-armer Editor-Core in TypeScript plus React-Wrapper mit Debounce, Ref-API und Next.js-tauglichem Import.

| | |
|---|---|
| Sprache | TypeScript |
| Runtime | Browser |
| Plattform | Library (Vanilla + React) |
| Frameworks | React 18, Next.js (optional) |
| Daten | HTML-Dokumentmodell im Editor |
| Integrationen | optionales Image-Upload |
| Konzepte | contentEditable-Core, controlled/uncontrolled, IME/Composition, Sanitize |
| Kategorie | Bibliothek |
| Produktiv-Repo | öffentlich (für Portfolio ggf. auf privat stellen) |

## Highlights

- Core ohne Framework-Zwang
- React-Wrapper mit Debounce, focusTrigger, ref-API
- Paste-Sanitize und optionales Image-Upload

## Architektur (grob)

```
Editor-Core → optional React-Wrapper → Host-App
```

## Was hier absichtlich fehlt

- Quellcode, Secrets, interne Details
- Kundendaten und Credentials

Walkthrough oder begrenzter Repo-Zugang auf Anfrage.
