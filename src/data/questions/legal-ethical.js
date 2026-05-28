export const ethicsQuestions = [
  {
    "question": "¿Cuál es la clasificación de riesgo según el EU AI Act para un sistema de IA destinado a la puntuación social (social scoring) por parte de las autoridades públicas?",
    "options": [
      {
        "text": "Riesgo Limitado",
        "isCorrect": false
      },
      {
        "text": "Riesgo Inaceptable",
        "isCorrect": true
      },
      {
        "text": "Riesgo Sistémico",
        "isCorrect": false
      },
      {
        "text": "Alto Riesgo",
        "isCorrect": false
      }
    ],
    "explanation": "El EU AI Act prohíbe absolutamente los sistemas de puntuación social (social scoring) realizados por autoridades públicas, clasificándolos como Riesgo Inaceptable. Estos sistemas atentan contra la dignidad humana y los derechos fundamentales, por lo que no pueden comercializarse ni utilizarse en la UE bajo ninguna circunstancia."
  },
  {
    "question": "En el contexto de la protección de datos, ¿qué implica el principio de 'minimización de datos' aplicado a la Inteligencia Artificial?",
    "options": [
      {
        "text": "Usar solo datos que hayan sido recolectados en los últimos seis meses.",
        "isCorrect": false
      },
      {
        "text": "Eliminar todos los datos personales del conjunto de entrenamiento de forma permanente.",
        "isCorrect": false
      },
      {
        "text": "Tratar únicamente los datos estrictamente necesarios para el fin específico perseguido.",
        "isCorrect": true
      },
      {
        "text": "Reducir el tamaño del dataset mediante técnicas de compresión de archivos.",
        "isCorrect": false
      }
    ],
    "explanation": "El principio de minimización de datos (art. 5.1.c RGPD) establece que solo deben procesarse los datos personales adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados. En IA esto significa que el dataset de entrenamiento no debe incluir más información personal de la estrictamente requerida para el objetivo del modelo."
  },
  {
    "question": "¿Qué técnica permite entrenar un modelo de IA de forma distribuida sin que los datos sensibles abandonen los dispositivos originales de los usuarios?",
    "options": [
      {
        "text": "Generación de datos sintéticos",
        "isCorrect": false
      },
      {
        "text": "Privacidad Diferencial",
        "isCorrect": false
      },
      {
        "text": "Aprendizaje Federado (Federated Learning)",
        "isCorrect": true
      },
      {
        "text": "Cifrado Homomórfico",
        "isCorrect": false
      }
    ],
    "explanation": "El Aprendizaje Federado (Federated Learning) entrena el modelo localmente en cada dispositivo y solo envía al servidor central las actualizaciones de los pesos del modelo, nunca los datos en bruto. Esto preserva la privacidad porque la información sensible nunca abandona el dispositivo del usuario."
  },
  {
    "question": "Según el RGPD, ¿cuál es el requisito previo obligatorio para un sistema de IA que realiza un perfilado con efectos significativos para las personas?",
    "options": [
      {
        "text": "Registrar el sistema en la base de datos de la UNESCO.",
        "isCorrect": false
      },
      {
        "text": "Publicar el código fuente del algoritmo en un repositorio abierto.",
        "isCorrect": false
      },
      {
        "text": "Realizar una Evaluación de Impacto de Protección de Datos (DPIA/EIPD).",
        "isCorrect": true
      },
      {
        "text": "Obtener una certificación ISO 9001 de calidad de software.",
        "isCorrect": false
      }
    ],
    "explanation": "El artículo 35 del RGPD exige realizar una Evaluación de Impacto relativa a la Protección de Datos (DPIA/EIPD) antes de implementar tratamientos que, por su naturaleza, puedan entrañar un alto riesgo para los derechos de las personas. El perfilado automatizado con efectos significativos es uno de los casos expresamente contemplados."
  },
  {
    "question": "¿Qué tipo de ataque a la seguridad de la IA consiste en introducir perturbaciones imperceptibles en la entrada para engañar al modelo?",
    "options": [
      {
        "text": "Envenenamiento de datos (Data Poisoning)",
        "isCorrect": false
      },
      {
        "text": "Extracción de Modelo",
        "isCorrect": false
      },
      {
        "text": "Inyección de Prompts (Prompt Injection)",
        "isCorrect": false
      },
      {
        "text": "Ataques Adversariales (Adversarial Attacks)",
        "isCorrect": true
      }
    ],
    "explanation": "Los Ataques Adversariales consisten en añadir perturbaciones matemáticas mínimas (imperceptibles para el ojo humano) a las entradas del modelo con el objetivo de provocar predicciones erróneas. Son distintos del envenenamiento de datos (que afecta al entrenamiento) o la inyección de prompts (que manipula instrucciones de texto)."
  },
  {
    "question": "Dentro del marco STRIDE-AI, ¿cuál es el riesgo asociado a la categoría de 'Tampering'?",
    "options": [
      {
        "text": "Manipulación de los datos de entrenamiento para alterar el comportamiento del sistema.",
        "isCorrect": true
      },
      {
        "text": "Acceso no autorizado a la información confidencial de los pesos del modelo.",
        "isCorrect": false
      },
      {
        "text": "Sobrecarga del sistema para que deje de responder a los usuarios legítimos.",
        "isCorrect": false
      },
      {
        "text": "Suplantación de la identidad de un usuario autorizado.",
        "isCorrect": false
      }
    ],
    "explanation": "En el marco STRIDE, 'Tampering' (Manipulación) hace referencia a la alteración no autorizada de datos o componentes del sistema. Aplicado a IA, el riesgo principal es el envenenamiento de los datos de entrenamiento para introducir comportamientos maliciosos o sesgos deliberados en el modelo resultante."
  },
  {
    "question": "En la técnica de Inteligencia Artificial Explicable (XAI), ¿qué función cumple el método SHAP?",
    "options": [
      {
        "text": "Generar datos sintéticos para equilibrar la representación de género.",
        "isCorrect": false
      },
      {
        "text": "Verificar que el modelo no sufra ataques de inyección de prompts.",
        "isCorrect": false
      },
      {
        "text": "Añadir ruido a los datos para proteger la privacidad de los individuos del dataset.",
        "isCorrect": false
      },
      {
        "text": "Calcular la contribución de cada característica a una predicción específica basándose en la teoría de juegos.",
        "isCorrect": true
      }
    ],
    "explanation": "SHAP (SHapley Additive exPlanations) aplica los valores de Shapley de la teoría de juegos cooperativos para atribuir a cada característica del modelo su contribución marginal a una predicción concreta. Permite explicar de forma coherente y localmente fiel por qué el modelo ha tomado una decisión determinada."
  },
  {
    "question": "¿Qué establece el principio de 'Privacidad como configuración predeterminada' (Privacy by Default)?",
    "options": [
      {
        "text": "Que el usuario debe aceptar obligatoriamente todos los términos para poder usar la IA.",
        "isCorrect": false
      },
      {
        "text": "Que todos los datos deben cifrarse con una clave conocida únicamente por el desarrollador.",
        "isCorrect": false
      },
      {
        "text": "Que la privacidad solo se activa si el usuario lo solicita explícitamente en el menú de opciones.",
        "isCorrect": false
      },
      {
        "text": "Que el sistema debe ofrecer la máxima protección sin que el usuario tenga que realizar ajustes manuales.",
        "isCorrect": true
      }
    ],
    "explanation": "Privacy by Default (art. 25.2 RGPD) establece que, por defecto, solo se deben tratar los datos personales necesarios para cada finalidad específica, sin que el usuario tenga que hacer nada para proteger su privacidad. La configuración más restrictiva en cuanto a privacidad debe ser la opción predeterminada del sistema."
  },
  {
    "question": "¿Qué es una 'Model Card' (Ficha de Modelo) en el ciclo de vida de la IA?",
    "options": [
      {
        "text": "Una licencia comercial que autoriza la reventa de modelos de IA.",
        "isCorrect": false
      },
      {
        "text": "Una tarjeta física que permite el acceso a los servidores de entrenamiento de IA.",
        "isCorrect": false
      },
      {
        "text": "Un tipo de algoritmo para el reconocimiento de imágenes en tiempo real.",
        "isCorrect": false
      },
      {
        "text": "Un documento que describe las características, limitaciones y condiciones de uso ético de un modelo.",
        "isCorrect": true
      }
    ],
    "explanation": "Las Model Cards, propuestas por Google, son documentos de transparencia que acompañan a un modelo de IA y describen su propósito, datos de entrenamiento, métricas de rendimiento por subgrupos, limitaciones conocidas y consideraciones éticas. Facilitan que los usuarios y evaluadores entiendan en qué contextos es apropiado (o no) usar el modelo."
  },
  {
    "question": "¿Cómo se define el 'sesgo histórico' en un sistema de Inteligencia Artificial?",
    "options": [
      {
        "text": "Un error técnico que ocurre cuando el hardware de entrenamiento es demasiado antiguo.",
        "isCorrect": false
      },
      {
        "text": "Divergencias que reflejan desigualdades sociales preexistentes capturadas en los datos del pasado.",
        "isCorrect": true
      },
      {
        "text": "La pérdida de precisión del modelo a medida que pasa el tiempo desde su despliegue.",
        "isCorrect": false
      },
      {
        "text": "La falta de registros históricos sobre quién desarrolló el algoritmo original.",
        "isCorrect": false
      }
    ],
    "explanation": "El sesgo histórico surge cuando los datos de entrenamiento recogen decisiones o patrones del pasado que ya incorporan desigualdades sociales (discriminación por género, raza, clase social…). El modelo aprende y perpetúa esas injusticias aunque el desarrollador no lo haya pretendido."
  },
  {
    "question": "En relación con el caso documentado de Amazon, ¿por qué el sistema de selección de personal discriminaba a las mujeres?",
    "options": [
      {
        "text": "Porque el algoritmo tenía una regla explícita que prohibía contratar a mujeres.",
        "isCorrect": false
      },
      {
        "text": "Porque las candidatas no sabían utilizar las palabras clave adecuadas en sus perfiles.",
        "isCorrect": false
      },
      {
        "text": "Porque el sistema priorizaba CVs enviados durante la noche cuando los hombres suelen estar más activos.",
        "isCorrect": false
      },
      {
        "text": "Porque fue entrenado con CVs de una década donde predominaban las contrataciones masculinas.",
        "isCorrect": true
      }
    ],
    "explanation": "El sistema de Amazon fue entrenado con los CVs de personas contratadas durante los diez años anteriores, un período en que la industria tecnológica era mayoritariamente masculina. El modelo aprendió a penalizar términos asociados a mujeres (como haber estudiado en un colegio exclusivamente femenino) porque estadísticamente aparecían menos en los perfiles de contratados exitosos."
  },
  {
    "question": "¿Qué mide la métrica de equidad conocida como 'Paridad Demográfica'?",
    "options": [
      {
        "text": "Que el dataset contenga exactamente el mismo número de filas para cada género.",
        "isCorrect": false
      },
      {
        "text": "Que la precisión del modelo sea exactamente del 100% en todos los grupos.",
        "isCorrect": false
      },
      {
        "text": "Que la tasa de resultados positivos sea igual para todos los grupos protegidos.",
        "isCorrect": true
      },
      {
        "text": "Que el modelo tenga el mismo número de neuronas para procesar datos de hombres y mujeres.",
        "isCorrect": false
      }
    ],
    "explanation": "La Paridad Demográfica (o Paridad Estadística) exige que la proporción de predicciones positivas sea la misma independientemente del grupo protegido al que pertenezca el individuo. Por ejemplo, en un sistema de crédito, el porcentaje de aprobaciones debe ser igual para hombres y mujeres."
  },
  {
    "question": "Dentro de las técnicas de mitigación de sesgos, ¿en qué consiste el 'Resampling'?",
    "options": [
      {
        "text": "Aumentar la presencia del grupo subrepresentado o disminuir la del sobrerepresentado en el dataset.",
        "isCorrect": true
      },
      {
        "text": "Aplicar un algoritmo de regularización L2 durante el entrenamiento del modelo.",
        "isCorrect": false
      },
      {
        "text": "Pedir a los usuarios que vuelvan a enviar sus datos personales.",
        "isCorrect": false
      },
      {
        "text": "Cambiar las etiquetas de los datos de salida para que todos sean positivos.",
        "isCorrect": false
      }
    ],
    "explanation": "El Resampling es una técnica de preprocesado para corregir el desequilibrio entre grupos en el dataset. Puede aplicarse como oversampling (duplicar o generar instancias del grupo minoritario, p.ej. SMOTE) o undersampling (reducir instancias del grupo mayoritario), con el objetivo de que el modelo reciba una representación más equitativa durante el entrenamiento."
  },
  {
    "question": "¿Qué estándar internacional es la referencia principal para los Sistemas de Gestión de Inteligencia Artificial?",
    "options": [
      {
        "text": "ISO 9001",
        "isCorrect": false
      },
      {
        "text": "IEEE 802.11",
        "isCorrect": false
      },
      {
        "text": "ISO/IEC 42001",
        "isCorrect": true
      },
      {
        "text": "ISO 27001",
        "isCorrect": false
      }
    ],
    "explanation": "La norma ISO/IEC 42001:2023 es el primer estándar internacional específico para Sistemas de Gestión de la Inteligencia Artificial (AIMS). Proporciona un marco para que las organizaciones desarrollen, implementen y mejoren la IA de forma responsable, complementando la ISO 27001 (seguridad de la información) y la ISO 9001 (calidad)."
  },
  {
    "question": "¿Cuál es el plazo de aplicación establecido por el EU AI Act para la prohibición de los sistemas de riesgo inaceptable?",
    "options": [
      {
        "text": "36 meses después de su entrada en vigor.",
        "isCorrect": false
      },
      {
        "text": "6 meses después de su entrada en vigor.",
        "isCorrect": true
      },
      {
        "text": "12 meses después de su entrada en vigor.",
        "isCorrect": false
      },
      {
        "text": "24 meses después de su entrada en vigor.",
        "isCorrect": false
      }
    ],
    "explanation": "El EU AI Act establece un calendario de implementación escalonado. Las prohibiciones de los sistemas de riesgo inaceptable (Título II) son las primeras en aplicarse, con un plazo de solo 6 meses desde la entrada en vigor del reglamento, dada la gravedad de los riesgos que implican para los derechos fundamentales."
  },
  {
    "question": "¿Qué derecho otorga el Artículo 22 del RGPD en relación con la Inteligencia Artificial?",
    "options": [
      {
        "text": "El derecho a descargar el código fuente de cualquier modelo de IA comercial.",
        "isCorrect": false
      },
      {
        "text": "El derecho a que la IA sea entrenada con datos de alta calidad.",
        "isCorrect": false
      },
      {
        "text": "El derecho a recibir una compensación económica si un chatbot se equivoca.",
        "isCorrect": false
      },
      {
        "text": "El derecho a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado.",
        "isCorrect": true
      }
    ],
    "explanation": "El artículo 22 del RGPD reconoce el derecho de las personas a no ser objeto de decisiones que se basen exclusivamente en el tratamiento automatizado (incluida la elaboración de perfiles) cuando dichas decisiones produzcan efectos jurídicos o les afecten significativamente. Esto obliga a que exista supervisión humana en decisiones relevantes adoptadas por sistemas de IA."
  },
  {
    "question": "¿Qué es un ataque de 'Inferencia de Pertenencia' (Membership Inference) en IA?",
    "options": [
      {
        "text": "Adivinar la contraseña del administrador del sistema de IA.",
        "isCorrect": false
      },
      {
        "text": "Determinar si un registro de datos específico fue utilizado para entrenar a un modelo determinado.",
        "isCorrect": true
      },
      {
        "text": "Predecir qué género tendrá el próximo usuario del sistema.",
        "isCorrect": false
      },
      {
        "text": "Sustituir el modelo original por uno malicioso sin que se note.",
        "isCorrect": false
      }
    ],
    "explanation": "Los ataques de Inferencia de Pertenencia (Membership Inference) explotan el sobreajuste de los modelos de ML para determinar si una muestra concreta formó parte del conjunto de entrenamiento. Esto supone un grave riesgo de privacidad: si un atacante sabe que un dato está en el conjunto de entrenamiento puede inferir información sensible sobre esa persona."
  },
  {
    "question": "En el desarrollo ético de la IA, ¿qué significa el principio de 'Humans in the Loop'?",
    "options": [
      {
        "text": "Que los sistemas deben estar diseñados para permitir la supervisión e intervención humana efectiva.",
        "isCorrect": true
      },
      {
        "text": "Que los desarrolladores deben rotar de puesto cada seis meses para evitar sesgos.",
        "isCorrect": false
      },
      {
        "text": "Que el modelo de IA debe ser capaz de simular el comportamiento humano perfectamente.",
        "isCorrect": false
      },
      {
        "text": "Que los humanos deben realizar todas las tareas de limpieza de datos manualmente.",
        "isCorrect": false
      }
    ],
    "explanation": "'Humans in the Loop' (HITL) es el principio que exige mantener supervisión e intervención humana significativa en los sistemas de IA, especialmente para decisiones de alto impacto. No significa que los humanos hagan todo el trabajo, sino que tienen la capacidad real de revisar, corregir o anular las decisiones del sistema automatizado."
  },
  {
    "question": "Un chatbot que genera imágenes engañosas (deepfakes) se clasifica en el EU AI Act como:",
    "options": [
      {
        "text": "Riesgo de Infraestructura Crítica",
        "isCorrect": false
      },
      {
        "text": "Riesgo Inaceptable",
        "isCorrect": false
      },
      {
        "text": "Riesgo Limitado",
        "isCorrect": true
      },
      {
        "text": "Riesgo Mínimo",
        "isCorrect": false
      }
    ],
    "explanation": "Según el EU AI Act, los sistemas que generan contenido sintético (deepfakes, texto o imágenes generadas por IA) se clasifican como Riesgo Limitado, no inaceptable. Sin embargo, conllevan obligaciones de transparencia: el usuario debe ser informado de que está interactuando con contenido generado por IA mediante etiquetado obligatorio."
  },
  {
    "question": "¿Cuál es la función principal de la herramienta 'Google What-If Tool'?",
    "options": [
      {
        "text": "Detectar si el código de Python tiene errores de sintaxis antes de entrenar.",
        "isCorrect": false
      },
      {
        "text": "Cifrar el modelo de IA para que no pueda ser robado por competidores.",
        "isCorrect": false
      },
      {
        "text": "Eliminar automáticamente todos los sesgos de género del dataset.",
        "isCorrect": false
      },
      {
        "text": "Visualizar el comportamiento de los modelos en diferentes subgrupos y simular escenarios contrafactuales.",
        "isCorrect": true
      }
    ],
    "explanation": "Google What-If Tool es una herramienta de interpretabilidad y equidad que permite explorar visualmente cómo se comporta un modelo en distintos subgrupos de datos, comparar métricas de equidad entre grupos demográficos y simular escenarios contrafactuales (qué pasaría si cambiara un atributo concreto de una instancia). No corrige sesgos automáticamente, sino que los hace visibles."
  },
  {
    "question": "¿Qué métrica legal estadounidense se utiliza frecuentemente para detectar discriminación en procesos de contratación mediante el ratio de selección?",
    "options": [
      {
        "text": "Error Cuadrático Medio",
        "isCorrect": false
      },
      {
        "text": "Entropía Cruzada",
        "isCorrect": false
      },
      {
        "text": "Varianza de Género",
        "isCorrect": false
      },
      {
        "text": "Impacto Dispar (Disparate Impact)",
        "isCorrect": true
      }
    ],
    "explanation": "El Disparate Impact es una métrica de equidad con respaldo legal en EE. UU. (guías EEOC). Se calcula como el cociente entre la tasa de selección del grupo menos favorecido y la del grupo más favorecido. Si el resultado es inferior a 0,8 (regla del 80 %), se presume discriminación indirecta aunque no haya intención."
  },
  {
    "question": "¿Qué característica define a la técnica de 'Privacidad Diferencial'?",
    "options": [
      {
        "text": "La separación física de los servidores que contienen datos de hombres y mujeres.",
        "isCorrect": false
      },
      {
        "text": "La adición de ruido calibrado a los datos para que no se pueda inferir información de individuos concretos.",
        "isCorrect": true
      },
      {
        "text": "El uso de seudónimos en lugar de nombres reales en el conjunto de entrenamiento.",
        "isCorrect": false
      },
      {
        "text": "La prohibición de compartir el modelo de IA con terceras empresas.",
        "isCorrect": false
      }
    ],
    "explanation": "La Privacidad Diferencial es una garantía matemática formal que consiste en añadir ruido aleatorio cuidadosamente calibrado (ε, epsilon) a los datos o a los resultados de consultas. El ruido hace que sea estadísticamente imposible determinar si un individuo concreto participó o no en el dataset, protegiendo su privacidad mientras se mantiene la utilidad estadística del conjunto."
  },
  {
    "question": "¿Cuál es el objetivo principal de la Recomendación sobre la Ética de la IA de la UNESCO (2021)?",
    "options": [
      {
        "text": "Sustituir a los profesores humanos por sistemas de IA generativa.",
        "isCorrect": false
      },
      {
        "text": "Crear un ejército internacional de robots para misiones de paz.",
        "isCorrect": false
      },
      {
        "text": "Definir los estándares técnicos para la conexión de fibra óptica en escuelas.",
        "isCorrect": false
      },
      {
        "text": "Establecer el primer instrumento normativo global sobre IA basado en los derechos humanos.",
        "isCorrect": true
      }
    ],
    "explanation": "La Recomendación sobre la Ética de la IA adoptada por la UNESCO en noviembre de 2021, firmada por 193 Estados miembros, es el primer instrumento normativo global en materia de IA. Su objetivo es garantizar que el desarrollo y uso de la IA respete los derechos humanos, la dignidad, la equidad, la paz y el medioambiente a escala mundial."
  },
  {
    "question": "¿En qué fase del ciclo de vida de la IA se debe aplicar por primera vez el principio de 'Privacy by Design'?",
    "options": [
      {
        "text": "Solo cuando se detecte una brecha de seguridad real.",
        "isCorrect": false
      },
      {
        "text": "Justo antes de lanzar el producto al mercado.",
        "isCorrect": false
      },
      {
        "text": "En la definición de requisitos y diseño inicial.",
        "isCorrect": true
      },
      {
        "text": "Durante la fase de limpieza de datos del dataset de prueba.",
        "isCorrect": false
      }
    ],
    "explanation": "El principio de Privacy by Design (art. 25.1 RGPD) exige que la protección de datos se integre desde el inicio del proyecto, en la fase de definición de requisitos y diseño arquitectónico. No puede añadirse como capa posterior: las decisiones de diseño tempranas (qué datos recoger, cómo almacenarlos, quién accede) son las que mayor impacto tienen en la privacidad final del sistema."
  },
  {
    "question": "¿Qué figura profesional es responsable de supervisar horizontalmente todos los sistemas de IA y coordinar la gestión de riesgos en una organización?",
    "options": [
      {
        "text": "Scrum Master",
        "isCorrect": false
      },
      {
        "text": "AI Officer (Responsable de IA)",
        "isCorrect": true
      },
      {
        "text": "Administrador de Sistemas (SysAdmin)",
        "isCorrect": false
      },
      {
        "text": "Data Scientist Junior",
        "isCorrect": false
      }
    ],
    "explanation": "El AI Officer (o Responsable de IA) es la figura que el EU AI Act prevé para que las organizaciones que despliegan sistemas de Alto Riesgo supervisen de forma transversal el cumplimiento normativo, la gestión de riesgos y el gobierno ético de todos sus sistemas de IA. Es un rol análogo al DPO (Delegado de Protección de Datos) en el ámbito del RGPD."
  },
  {
    "question": "En el contexto de la ciberseguridad, ¿qué es un 'Backdoor' en un modelo de IA?",
    "options": [
      {
        "text": "Una copia de seguridad del modelo guardada en la nube.",
        "isCorrect": false
      },
      {
        "text": "Una puerta trasera física en el centro de datos del proveedor.",
        "isCorrect": false
      },
      {
        "text": "La capacidad de la IA para autoprogramarse sin intervención humana.",
        "isCorrect": false
      },
      {
        "text": "Un comportamiento malicioso oculto que se activa solo ante una entrada específica (disparador).",
        "isCorrect": true
      }
    ],
    "explanation": "Un Backdoor en IA (también llamado ataque Trojan) consiste en envenenar el proceso de entrenamiento para que el modelo se comporte normalmente en situaciones habituales pero realice acciones maliciosas cuando recibe una entrada específica (trigger). Es especialmente peligroso porque el modelo supera los test de evaluación estándar sin que el backdoor sea detectable."
  },
  {
    "question": "¿A qué se refiere el término 'Inversión de Modelo' (Model Inversion)?",
    "options": [
      {
        "text": "A entrenar el modelo al revés desde la salida hacia la entrada.",
        "isCorrect": false
      },
      {
        "text": "A cambiar todos los ceros por unos en la matriz de pesos del modelo.",
        "isCorrect": false
      },
      {
        "text": "A la capacidad de reconstruir datos de entrenamiento sensibles a partir de las salidas del modelo.",
        "isCorrect": true
      },
      {
        "text": "A gastar más presupuesto en hardware que en científicos de datos.",
        "isCorrect": false
      }
    ],
    "explanation": "Los ataques de Inversión de Modelo (Model Inversion) explotan las salidas o predicciones de un modelo para reconstruir información sensible sobre los datos de entrenamiento originales. Por ejemplo, a partir de las confianzas de clasificación de un modelo de reconocimiento facial se puede reconstruir una aproximación visual de los rostros con los que fue entrenado."
  }
];
