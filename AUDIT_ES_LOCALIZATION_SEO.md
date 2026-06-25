# Auditoria ES: localizacion, indexacion y plantillas

Fecha: 2026-06-25

## Resumen

El bloque espanol esta en buen estado tecnico: las paginas principales renderizan con `lang="es"`, canonical propio y sin overflow horizontal en desktop ni mobile. La cobertura de diccionarios de cartas es completa para las 78 cartas.

La calidad editorial antes de esta ronda era aproximadamente 7.5/10: usable para SEO, pero con huellas de traduccion literal. En esta ronda se limpiaron los elementos mas visibles: textos de share, nombres de cartas en grids, journal, keywords de palos, terminos tecnicos como `slug`/`pips` y un resto ingles en JSON (`rekindling`).

## Paginas verificadas en navegador local

Entorno: `http://localhost:3002`, desktop default y mobile `390x844`.

| URL | Indexacion esperada | Resultado visual | Observaciones |
| --- | --- | --- | --- |
| `/es` | index | OK | Sin overflow, sin ingles visible en el scan |
| `/es/cartas` | index | OK | Nombres y keywords ES |
| `/es/journal` | noindex, follow | OK | H1 aparece tras hidratacion; pagina privada/local |
| `/es/combinaciones` | index | OK | Hub indexable; textos visibles ES |
| `/es/combinaciones/the-fool-and-the-magician` | index si curated | OK | Slug ingles intencional por hreflang/canonical |
| `/es/carta-del-dia` | index | OK | Share localizado |
| `/es/palos-del-tarot/copas` | index | OK | Keywords ES, sin overflow |
| `/es/tiradas/como-se-sienten-conmigo` | index | OK | Grid de cartas usa nombres ES |
| `/es/tendencias` | index | OK | `slug` publico reemplazado por `identificador interno` |
| `/es/principios-eticos` | index | OK | `slug + orientacion` publico reemplazado |
| `/es/barajas-de-tarot` | index | OK | `cartas pip` reemplazado por `cartas numeradas` |

## Que se indexa

Indexables:

- Hubs ES: `/es`, `/es/cartas`, `/es/si-no`, `/es/tiradas`, `/es/combinaciones`, `/es/palos-del-tarot`, `/es/zodiaco`, `/es/tendencias`, etc.
- Paginas de cartas ES: `/es/cartas/[slug]`, `/invertida`, `/sentimientos`.
- Paginas si/no ES: `/es/si-no/[slug]`.
- Spreads ES y paginas editoriales ES.
- Combinaciones ES solo cuando el slug esta en `ENRICHED_COMBO_SLUGS` y aparece en sitemap.

No indexables:

- `/es/account`: `noindex, nofollow`.
- `/es/auth/signin` y `/es/auth/signup`: `noindex, nofollow`.
- `/es/journal`: `noindex, follow`.
- Combinaciones no curated: `noindex, follow` y no aparecen en sitemap.

## Paginas plantilla que conviene unique-izar

Prioridad alta:

1. Combinaciones curated ES: aunque indexables, muchas frases salen del motor procedural. Conviene dar 20-40 pares top con copy mas trabajado y ejemplos concretos.
2. Paginas zodiac ES: tienen estructura muy repetida por signo. Buenas para SEO, pero se beneficiarian de mas diferencias por signo en intro, FAQ y enlaces internos.
3. Spreads ES de nicho: varias paginas comparten arquitectura de hero + posiciones + FAQ. Mantener, pero variar mas el texto de utilidad practica.

Prioridad media:

1. `cards-love`, `cards-reversed`, `cards-feelings`: cobertura completa, pero hay mezcla de genero gramatical (`ti misma`, `soltero o soltera`, `consultante`, `lectora`). Conviene normalizar tono.
2. Hubs de aprendizaje (`como leer`, `barajas`, `metodologia`): estan correctos, pero algunos giros suenan traducidos.

Prioridad baja:

1. URL de combinaciones ES: ahora conservan slug ingles por estabilidad hreflang. Para SEO local seria mejor `/es/combinaciones/el-loco-y-el-mago`, pero requiere migracion con redirects y actualizacion de sitemap/hreflang.

## Cambios aplicados en esta ronda

- `components/ShareButton.tsx`: soporte `locale="es"`, copy y URL localizados.
- `/es/carta-del-dia` y `/es/carta-de-nacimiento`: share localizado.
- `/es/journal`: nombres de cartas en ES, compatibilidad con entradas antiguas EN, etiqueta `Inv.`.
- `/es/tiradas/como-se-sienten-conmigo`: grid con nombres ES.
- `/es/palos-del-tarot/*`: keywords ES desde `messages/es/cards.json`.
- `/es/combinaciones*`: `pips` reemplazado por `cartas numeradas`.
- `/es/tendencias` y `/es/principios-eticos`: terminos tecnicos publicos reemplazados.
- `messages/es/cards-love.json`: eliminado `rekindling`.

## Siguientes pasos recomendados

1. Commit/push de esta ronda de localizacion.
2. Decidir estrategia de slugs ES para combinaciones: mantener ingles por estabilidad o planificar migracion con redirects.
3. Unique-izar primero 20-40 combinaciones ES curated.
4. Normalizar genero/tono en `messages/es/*.json`.
5. Revisar hydration warnings de desarrollo por separado si aparecen tambien en produccion real; en build no bloquean.
