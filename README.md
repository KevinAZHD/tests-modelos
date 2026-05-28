# Cuestionarios sobre Modelos IA

Aplicación web interactiva diseñada para comprobar, practicar y evaluar conocimientos sobre Modelos de Inteligencia Artificial (Lógica Difusa, ANFIS y Principios Ético-Legales).

## Propósito del Proyecto

El objetivo principal de esta plataforma es servir como herramienta de autoevaluación para que los usuarios puedan medir su nivel de aprendizaje y preparar exámenes o certificaciones sobre IA mediante cuestionarios estructurados de opción múltiple con feedback inmediato, justificaciones detalladas y una interfaz moderna y fluida.

---

## Estructura Completa del Proyecto

A continuación se detalla la organización de los archivos y carpetas del proyecto adaptado:

```text
tests-bigdata/
├── public/                 # Recursos públicos estáticos (íconos, etc.)
├── src/                    # Código fuente de la aplicación
├── src/assets/             # Imágenes generadas para los cuestionarios (fuzzy.png, ethics.png)
├── src/components/         # Componentes modulares y reutilizables de React
│   ├── ConfirmModal.jsx    # Pop-up de confirmación al intentar salir o reiniciar
│   ├── GithubButton.jsx    # Botón flotante para acceder al repositorio en GitHub
│   ├── InfoModal.jsx       # Modal informativo con detalles sobre los temas cubiertos
│   ├── QuestionCard.jsx    # Tarjeta que muestra la pregunta, opciones y justificaciones
│   ├── QuestionMap.jsx     # Mapa inferior para navegación rápida entre preguntas
│   ├── QuizView.jsx        # Vista principal del flujo del cuestionario y resultados
│   └── ThemeToggle.jsx     # Selector flotante de modo claro y oscuro
├── src/data/               # Configuración y banco de preguntas
│   ├── questions/          # Banco de preguntas extraídas de los PDFs oficiales
│   │   ├── fuzzy-anfis.js      # Cuestionario de Lógica Difusa y ANFIS (55 preguntas)
│   │   └── legal-ethical.js    # Cuestionario de Principios Legales y Éticos en la IA (27 preguntas)
│   └── modulesConfig.js    # Configuración de los cuestionarios disponibles
├── src/utils/              # Funciones de utilidad
│   └── shuffle.js          # Algoritmo Fisher-Yates para mezclar preguntas y opciones
├── src/App.jsx             # Componente raíz con enrutamiento dinámico por hash
├── src/index.css           # Estilos globales y configuración de Tailwind CSS
├── src/main.jsx            # Punto de entrada de renderizado de React
├── eslint.config.js        # Reglas del linter ESLint
├── index.html              # Plantilla HTML principal
├── package.json            # Dependencias y scripts de ejecución
├── vite.config.js          # Configuración de compilación de Vite
└── README.md               # Documentación general del proyecto (este archivo)
```

---

## Características de Calidad de Vida (QoL)

La aplicación incluye diversas funcionalidades añadidas para mejorar la experiencia de usuario:

1. **Justificaciones Detalladas**: Una vez respondida cada pregunta en el bloque de principios legales y éticos, se revela una justificación explicativa detallada para afianzar el aprendizaje.
2. **Persistencia del Tema Oscuro**: Recuerda la selección del tema (Modo Claro u Oscuro) a través de `localStorage`.
3. **Fijado de Cuestionarios (Pin)**: Permite fijar cuestionarios importantes o favoritos en la parte superior para acceder a ellos rápidamente.
4. **Mezcla Inteligente (Randomización)**: Las preguntas y sus opciones de respuesta se mezclan aleatoriamente cada vez que inicias un test mediante el algoritmo Fisher-Yates, evitando que memorices el orden.
5. **Prevención de Pérdida de Progreso**: Si intentas recargar la página (`F5`), ir hacia atrás o reiniciar mientras estás a mitad de un cuestionario, la app te avisará para confirmar la acción y evitar que pierdas tus respuestas.
6. **Navegación por Teclado**: Puedes usar las flechas del teclado (`Flecha Izquierda` y `Flecha Derecha`) para navegar fácilmente entre las preguntas.
7. **Mapa de Navegación Rápida**: Un mapa visual en la parte inferior muestra qué preguntas has respondido, cuáles son correctas (verde) e incorrectas (rojo), y permite saltar directamente a cualquier pregunta.
8. **Formateo en Negritas**: Soporte automático para resaltar fragmentos de texto encerrados entre `**` para una lectura más clara y fluida.

---

## Cómo Ejecutar el Proyecto en Local

### Requisitos Previos

- Tener instalado **Node.js** (versión recomendada LTS).

### Instrucciones

1. **Instalar Dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

3. **Construir para Producción**:
   ```bash
   npm run build
   ```
