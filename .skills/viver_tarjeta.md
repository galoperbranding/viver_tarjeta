# Skill: Proyecto Next.js "viver_tarjeta" (Luis Morales)

## Descripción General
Tarjeta digital profesional para Luis Morales, asesor de bienes raíces, desarrollada con Next.js 15, React 19, Tailwind CSS v4 y OGL para efecto Aurora. Incluye links sociales, efecto ripple, metadata SEO y Open Graph, y buenas prácticas de React/TypeScript.

## Estructura y convenciones
- **/src/app/layout.tsx**: Layout global, metadata personalizada, fuente Inter, Open Graph y Twitter meta, lang="es".
- **/src/app/page.tsx**: Página principal. Links sociales en array, efecto ripple con handleRipple, IntersectionObserver para animaciones, logo con <Image>, sin target="_blank" en mailto, mantiene Aurora, badge, avatar, footer y estilos.
- **/src/app/Aurora.tsx**: Componente Aurora con OGL, useEffect dependencias vacías y propsRef para props reactivos.
- **/public/assets/**: Imágenes y logos.
- **/tsconfig.json**: strict: true, strictNullChecks: true.
- **/package.json**: next: 15.3.0, react: 19.2.3, tailwindcss: ^4, ogl: ^1.0.11.
- **/globals.css**: No modificar estilos base.

## Buenas prácticas
- No manipulación directa del DOM salvo ripple (controlado en onClick)
- Todos los links sociales y principales en arrays y renderizados con .map()
- Metadata SEO y social completa
- Uso de <Image> de next/image para imágenes principales
- Sin target="_blank" en mailto
- Efectos visuales y clases CSS no se modifican desde el skill

## Restricciones
- No modificar estilos visuales ni clases CSS desde el skill
- Mantener href de los links exactamente igual
- El proyecto debe seguir funcionando igual visualmente tras cualquier refactor
- Usar TypeScript estricto

## Uso
Este skill sirve como referencia para migraciones, refactorizaciones o ampliaciones del proyecto "viver_tarjeta" sin perder la estructura, convenciones y buenas prácticas ya implementadas. Úsalo para evitar empezar de cero y mantener la calidad del código.