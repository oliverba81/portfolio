# RemoteDesktop *(Showcase – ohne Quellcode)*

**Selbst gehostete Windows-Fernsteuerung über Relay (ohne Port-Forwarding), Ende-zu-Ende verschlüsselt.**

## Technologie

Vier .NET-8-Projekte (Shared/Relay/Host/Viewer): E2E-verschlüsselte Fernsteuerung ohne Client-Portforwarding.

| | |
|---|---|
| Sprache | C# |
| Runtime | .NET 8 |
| Plattform | Windows (Host/Viewer) · Linux/NAS (Relay) |
| Frameworks | WinForms, ASP-/Socket-Relay |
| Daten | DPAPI-gespeicherte Passwörter, Adressbuch |
| Integrationen | Synology-Paket (.spk), TCP-Relay |
| Konzepte | ECDH P-256, AES-256-GCM, HKDF, Argon2id, NAT-Traversal via Relay |
| Kategorie | Tools |
| Produktiv-Repo | öffentlich (für Portfolio ggf. auf privat stellen) |

## Highlights

- Viewer + Host + Relay als Synology-Paket
- ECDH + AES-256-GCM, Relay blind
- Zwischenablage und Dateitransfer

## Architektur (grob)

```
Viewer/Host (ausgehend) → Relay → E2E-Tunnel
```

## Was hier absichtlich fehlt

- Quellcode, Secrets, interne Details
- Kundendaten und Credentials

Walkthrough oder begrenzter Repo-Zugang auf Anfrage.
