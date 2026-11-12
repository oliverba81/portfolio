# greyhound-archive-db-repair-tool *(Showcase – ohne Quellcode)*

**Repariert defekte GREYHOUND-archive.db3 und führt mehrere Archive verlustfrei zusammen. Windows-.exe mit Auto-Update.**

## Technologie

Python-Desktop-App: liest/repariert SQLite-Archive, baut FTS neu, merged Buckets verlustfrei; auslieferbar als Onefile-.exe.

| | |
|---|---|
| Sprache | Python 3.10+ |
| Runtime | CPython (Windows) |
| Plattform | Desktop (Windows) · Headless-CLI |
| Frameworks | customtkinter, PyInstaller |
| Daten | SQLite (archive.db3), FTS-Volltextindex, .eml-Dateien |
| Integrationen | GitHub Releases (Auto-Update) |
| Konzepte | DB-Recovery, Archive-Merge, Backup-first |
| Kategorie | Tools |
| Produktiv-Repo | öffentlich (für Portfolio ggf. auf privat stellen) |

## Highlights

- DB-Restore auch aus beschädigten SQLite-Dateien
- Merge mehrerer Archive inkl. ID-Kollisionsauflösung
- Backup vor jeder Aktion, Quellen unverändert

## Architektur (grob)

```
Python-GUI → SQLite/FTS → neues Archiv (Kopie)
```

## Was hier absichtlich fehlt

- Quellcode, Secrets, interne Details
- Kundendaten und Credentials

Walkthrough oder begrenzter Repo-Zugang auf Anfrage.
