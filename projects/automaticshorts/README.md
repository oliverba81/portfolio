# AutomaticShorts *(Showcase – ohne Quellcode)*

**KI-Autopilot für Faceless-Shorts auf YouTube, TikTok und Instagram – mit Qualitätskontrolle und Freigabe vor dem Posten (DACH).**

## Technologie

Full-Stack-Webapp: UI + Studio in Next.js/TypeScript, Video-Rendering mit Remotion, Persistenz in Postgres, externe KI- und Social-APIs.

| | |
|---|---|
| Sprache | TypeScript |
| Runtime | Node.js 24 · Browser |
| Plattform | Web (Next.js App Router) |
| Frameworks | Next.js 16, React, Tailwind CSS 4, Remotion |
| Daten | Postgres, lokaler Datei-Store (Dev) |
| Integrationen | OpenAI, ElevenLabs, YouTube OAuth, TikTok OAuth, Instagram Graph API |
| Konzepte | Server Actions / API Routes, i18n, AES-GCM Key Storage, Video-Pipeline |
| Kategorie | Produkt |
| Produktiv-Repo | privat |

## Highlights

- Pipeline: Skript → TTS → Bilder → Remotion-Render → Publish
- Studio mit Serien, Kalender und Freigabe-Workflow
- Mehrsprachige UI und BYOK-Preislinie

## Architektur (grob)

```
Next.js App → Postgres → Video-Pipeline → YouTube/TikTok/Instagram
```

## Was hier absichtlich fehlt

- Quellcode, Secrets, interne Details
- Kundendaten und Credentials

Walkthrough oder begrenzter Repo-Zugang auf Anfrage.
