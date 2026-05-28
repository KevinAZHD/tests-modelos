export const fuzzyQuestions = [
  {
    "question": "¿Qué significan las siglas ANFIS?",
    "options": [
      {
        "text": "Adaptive Neural Fuzzy Integrated System",
        "isCorrect": false
      },
      {
        "text": "Adaptive Neuro-Fuzzy Inference System",
        "isCorrect": true
      },
      {
        "text": "Artificial Neuro-Fuzzy Input System",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué tipo de sistema de inferencia difusa implementa ANFIS?",
    "options": [
      {
        "text": "Mamdani, con conjuntos difusos como consecuente",
        "isCorrect": false
      },
      {
        "text": "TSK, con funciones lineales como consecuente",
        "isCorrect": true
      },
      {
        "text": "Tsukamoto, con funciones monotónicas como consecuente",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuántas capas tiene la arquitectura ANFIS?",
    "options": [
      {
        "text": "3 capas (fuzzificación, inferencia, defuzzificación)",
        "isCorrect": false
      },
      {
        "text": "4 capas (entrada, premisa, regla, salida)",
        "isCorrect": false
      },
      {
        "text": "5 capas (fuzzificación, fuerza de disparo, normalización, consecuente, salida)",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué operador difuso implementa la unión y cuál la intersección en FIS Mamdani clásico?",
    "options": [
      {
        "text": "Unión = máximo, intersección = mínimo",
        "isCorrect": true
      },
      {
        "text": "Unión = suma probabilística, intersección = producto algebraico",
        "isCorrect": false
      },
      {
        "text": "Unión = mínimo, intersección = máximo",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué tipo de función de pertenencia usan los nodos de la Capa 1 en la implementación de ANFIS?",
    "options": [
      {
        "text": "Triangular (trimf)",
        "isCorrect": false
      },
      {
        "text": "Trapezoidal (trapmf)",
        "isCorrect": false
      },
      {
        "text": "Gaussiana: exp(-(x- μ)² / (2σ²))",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué calcula la Capa 2 de ANFIS?",
    "options": [
      {
        "text": "El grado de pertenencia de cada entrada a cada conjunto difuso",
        "isCorrect": false
      },
      {
        "text": "La fuerza de disparo de cada regla como producto de las membresías de todas sus entradas",
        "isCorrect": true
      },
      {
        "text": "La salida normalizada de cada regla",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "En Mamdani, el consecuente de cada regla es:",
    "options": [
      {
        "text": "Una función lineal de las entradas calculada en tiempo de inferencia",
        "isCorrect": false
      },
      {
        "text": "Un conjunto difuso sobre la variable de salida, recortado o escalado según la fuerza de disparo de la regla",
        "isCorrect": true
      },
      {
        "text": "Un valor singleton que representa el centro del conjunto lingüístico de salida",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué operación realiza la Capa 3 de ANFIS?",
    "options": [
      {
        "text": "Suma todas las fuerzas de disparo para obtener la salida total",
        "isCorrect": false
      },
      {
        "text": "Normaliza las fuerzas de disparo para que sumen 1",
        "isCorrect": true
      },
      {
        "text": "Aplica la función lineal del consecuente a cada regla",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué parámetros son entrenables en la Capa 1 (fuzzificación)?",
    "options": [
      {
        "text": "μ (centro) y σ (anchura) de las funciones Gaussianas",
        "isCorrect": true
      },
      {
        "text": "p, q, r de la función lineal del consecuente",
        "isCorrect": false
      },
      {
        "text": "Los pesos de la T-norma y el operador de agregación",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "En Mamdani con dos reglas activas cuyos consecuentes son los conjuntos C ₁ y C ₂ , ¿qué operación produce el conjunto difuso agregado?",
    "options": [
      {
        "text": "La intersección (mínimo) de los conjuntos recortados de cada regla",
        "isCorrect": false
      },
      {
        "text": "La unión (máximo punto a punto) de los conjuntos recortados o escalados de cada regla",
        "isCorrect": true
      },
      {
        "text": "La suma aritmética punto a punto de las membresías de cada regla",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué representa el consecuente en una regla TSK de orden 1?",
    "options": [
      {
        "text": "Un conjunto difuso definido por una función de pertenencia",
        "isCorrect": false
      },
      {
        "text": "Una función lineal de las entradas: y = p·x ₁ + q·x ₂ + r",
        "isCorrect": true
      },
      {
        "text": "Un valor constante (singleton) independiente de las entradas",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cuál es el método de defuzzificación centroide y qué calcula exactamente?",
    "options": [
      {
        "text": "Devuelve el valor x con mayor membresía en el conjunto agregado",
        "isCorrect": false
      },
      {
        "text": "Calcula la media aritmética de los soportes de todos los conjuntos activos",
        "isCorrect": false
      },
      {
        "text": "Calcula el centro de masa del conjunto difuso agregado mediante integración: x* = ∫x· μ( x)dx / ∫μ( x)dx",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué calcula la capa de salida final de ANFIS?",
    "options": [
      {
        "text": "El máximo de las contribuciones ponderadas de todas las reglas",
        "isCorrect": false
      },
      {
        "text": "La media aritmética de los consecuentes de todas las reglas",
        "isCorrect": false
      },
      {
        "text": "La suma ponderada de las salidas de todas las reglas: y = Σ w̄ᵢ · yᵢ",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "Un sistema Mamdani tiene la regla: \"SI velocidad ES alta ENTONCES freno ES fuerte\". La membresía de \"velocidad alta\" para la entrada actual es 0,4. ¿Qué se hace con el conjunto difuso \"freno fuerte\" usando implicación por recorte?",
    "options": [
      {
        "text": "Se desplaza horizontalmente 0,4 unidades hacia la derecha",
        "isCorrect": false
      },
      {
        "text": "Se recorta horizontalmente a altura 0,4, de modo que ningún punto del consecuente puede superar μ = 0,4",
        "isCorrect": true
      },
      {
        "text": "Se multiplica cada punto del conjunto por 0,4, reduciendo proporcionalmente su área",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Cómo se definen los parámetros entrenables en PyTorch para que el optimizador los actualice?",
    "options": [
      {
        "text": "Con torch.tensor(..., requires_grad=True) asignado como atributo de clase",
        "isCorrect": false
      },
      {
        "text": "Con nn.Parameter(...)",
        "isCorrect": true
      },
      {
        "text": "Con torch.autograd.Variable(...)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Para qué sirve añadir + 1e-8 en el denominador de la normalización (Capa 3)?",
    "options": [
      {
        "text": "Para escalar los pesos normalizados al intervalo [0, 1]",
        "isCorrect": false
      },
      {
        "text": "Para evitar una división por cero cuando todas las reglas tienen fuerza de disparo cero",
        "isCorrect": true
      },
      {
        "text": "Para regularizar los pesos y evitar que una sola regla domine",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué en Mamdani se necesita un paso de agregación antes de defuzzificar?",
    "options": [
      {
        "text": "Porque cada regla produce un valor numérico que debe convertirse en conjunto difuso antes de combinarse",
        "isCorrect": false
      },
      {
        "text": "Porque cada regla produce un conjunto difuso de salida independiente y es necesario combinarlos todos en un único conjunto difuso global sobre el que calcular el centroide",
        "isCorrect": true
      },
      {
        "text": "Porque la defuzzificación solo funciona sobre conjuntos normalizados y la agregación garantiza que el máximo sea 1",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué operación realiza x.unsqueeze(1) en el forward de ANFISLayer?",
    "options": [
      {
        "text": "Elimina la dimensión del batch para procesar muestra a muestra",
        "isCorrect": false
      },
      {
        "text": "Añade una dimensión en la posición 1 para permitir el broadcasting con self.mu de forma (rules, inputs)",
        "isCorrect": true
      },
      {
        "text": "Transpone el tensor x para que las columnas sean las reglas",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "En TSK de orden 0, el consecuente de cada regla es:",
    "options": [
      {
        "text": "Una función lineal de todas las variables de entrada",
        "isCorrect": false
      },
      {
        "text": "Una constante numérica, independiente del valor concreto de las entradas",
        "isCorrect": true
      },
      {
        "text": "Un conjunto difuso singleton centrado en un valor fijo",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Con qué función de pérdida se entrena ANFIS para tareas de regresión?",
    "options": [
      {
        "text": "nn.CrossEntropyLoss",
        "isCorrect": false
      },
      {
        "text": "nn.BCEWithLogitsLoss",
        "isCorrect": false
      },
      {
        "text": "nn.MSELoss",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "Un sistema TSK tiene 3 reglas con fuerzas de disparo w ₁ =0,5, w ₂ =0,3, w ₃ =0,2 y consecuentes y ₁ =20, y ₂ =40, y ₃ =10. ¿Cuál es la salida final del sistema?",
    "options": [
      {
        "text": "23,3 (media aritmética de los tres consecuentes)",
        "isCorrect": false
      },
      {
        "text": "24 (media ponderada: (0,5·20 + 0,3·40 + 0,2·10) / (0,5+0,3+0,2) = 24)",
        "isCorrect": true
      },
      {
        "text": "20 (domina la regla con mayor fuerza de disparo)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué optimizador se recomienda como \"buena elección por defecto\" para entrenar ANFIS?",
    "options": [
      {
        "text": "SGD (gradiente descendente estocástico puro)",
        "isCorrect": false
      },
      {
        "text": "Adam",
        "isCorrect": true
      },
      {
        "text": "RMSProp",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué ventaja aporta la lógica difusa a ANFIS respecto a una red neuronal pura?",
    "options": [
      {
        "text": "Mayor velocidad de entrenamiento al reducir el número de parámetros",
        "isCorrect": false
      },
      {
        "text": "Interpretabilidad: las reglas siguen siendo legibles y explicables en lenguaje natural",
        "isCorrect": true
      },
      {
        "text": "Mayor precisión en todos los problemas de clasificación",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "En un sistema TSK con antecedentes que no se solapan entre sí, ¿qué comportamiento presenta el sistema?",
    "options": [
      {
        "text": "En cada punto del espacio de entrada solo una regla está activa; el sistema actúa como una función a trozos sin interpolación entre regiones",
        "isCorrect": true
      },
      {
        "text": "El sistema es incapaz de producir salida en las zonas sin solapamiento",
        "isCorrect": false
      },
      {
        "text": "Las fuerzas de disparo normalizadas de todas las reglas activas suman más de 1 en las zonas sin solapamiento",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué ventaja aporta la red neuronal a ANFIS respecto a un sistema fuzzy clásico?",
    "options": [
      {
        "text": "Permite usar funciones de pertenencia no paramétricas",
        "isCorrect": false
      },
      {
        "text": "Los parámetros (μ, σ, p) se aprenden automáticamente de los datos sin intervención manual",
        "isCorrect": true
      },
      {
        "text": "Elimina la necesidad de definir reglas IF-THEN en la base de conocimiento",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué método de PyTorch se llama para calcular los gradientes en el bucle de entrenamiento?",
    "options": [
      {
        "text": "optimizer.step()",
        "isCorrect": false
      },
      {
        "text": "optimizer.zero_grad()",
        "isCorrect": false
      },
      {
        "text": "loss.backward()",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Qué ventaja tiene usar la T-norma producto frente al mínimo para calcular la fuerza de disparo en TSK, desde el punto de vista del entrenamiento?",
    "options": [
      {
        "text": "El producto siempre produce fuerzas de disparo mayores, acelerando la convergencia",
        "isCorrect": false
      },
      {
        "text": "El producto es diferenciable en todo su dominio, lo que permite calcular gradientes y ajustar los parámetros de premisa mediante backpropagation; el mínimo no es diferenciable en el punto donde ambas membresías son iguales",
        "isCorrect": true
      },
      {
        "text": "El producto reduce el número de reglas necesarias para cubrir el espacio de entrada",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué hace optimizer.zero_grad() al inicio de cada iteración?",
    "options": [
      {
        "text": "Reinicia los parámetros del modelo a sus valores iniciales",
        "isCorrect": false
      },
      {
        "text": "Limpia los gradientes acumulados del paso anterior para evitar que se sumen",
        "isCorrect": true
      },
      {
        "text": "Pone a cero la función de pérdida antes de calcularla",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Se necesita un controlador difuso donde el operario valide cada decisión en lenguaje natural (\"aplicar freno suave\", \"aumentar temperatura moderadamente\"). ¿Qué sistema es más adecuado?",
    "options": [
      {
        "text": "Mamdani, porque los consecuentes son conjuntos lingüísticos que el operario puede asociar directamente a acciones comprensibles del dominio",
        "isCorrect": true
      },
      {
        "text": "TSK, porque sus consecuentes numéricos son más precisos y fáciles de validar",
        "isCorrect": false
      },
      {
        "text": "Ambos son equivalentes para este propósito ya que comparten la misma estructura de antecedentes",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué permite inspeccionar ANFIS que una red neuronal pura no permite?",
    "options": [
      {
        "text": "El error de predicción desagregado por hora del día",
        "isCorrect": false
      },
      {
        "text": "Los parámetros μ y σ aprendidos, que indican a qué zonas del espacio de entrada se ha especializado cada regla",
        "isCorrect": true
      },
      {
        "text": "La precisión del modelo en datos no vistos durante el entrenamiento",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿En qué situación TSK es claramente preferible a Mamdani?",
    "options": [
      {
        "text": "Cuando la base de reglas es pequeña y el experto puede definir todos los consecuentes manualmente",
        "isCorrect": false
      },
      {
        "text": "Cuando se requiere integración con técnicas de optimización o aprendizaje automático, ya que la salida diferenciable de TSK facilita el ajuste de parámetros por gradiente descendente",
        "isCorrect": true
      },
      {
        "text": "Cuando el universo de discurso de la salida es discreto y acotado",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué ANFIS implementa la T-norma producto en lugar del mínimo para calcular la fuerza de disparo?",
    "options": [
      {
        "text": "Porque el mínimo no es diferenciable en todos los puntos y no permite backpropagation",
        "isCorrect": false
      },
      {
        "text": "Porque el producto es diferenciable en todo su dominio, lo que permite calcular gradientes para actualizar los parámetros de premisa mediante backpropagation",
        "isCorrect": true
      },
      {
        "text": "Porque el producto algebraico siempre produce fuerzas de disparo mayores que el mínimo, mejorando la precisión",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Tanto Mamdani como TSK usan funciones de pertenencia en los antecedentes. ¿En qué parte de la arquitectura difieren estructuralmente?",
    "options": [
      {
        "text": "En el método de fuzzificación de las entradas",
        "isCorrect": false
      },
      {
        "text": "En el tipo de T-norma utilizada para calcular la fuerza de disparo",
        "isCorrect": false
      },
      {
        "text": "Solo en el consecuente",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Cuál es la diferencia entre los \"parámetros de premisa\" y los \"parámetros de consecuente\" en ANFIS?",
    "options": [
      {
        "text": "Los de premisa (μ, σ) controlan la forma de los conjuntos difusos en la Capa 1; los de consecuente (p, q, r) controlan cómo cada regla combina linealmente las entradas en la Capa 4",
        "isCorrect": true
      },
      {
        "text": "Los de premisa se aprenden con mínimos cuadrados; los de consecuente se aprenden con gradiente descendente",
        "isCorrect": false
      },
      {
        "text": "Los de premisa son fijos (definidos por el experto); solo los de consecuente son entrenables en ANFIS",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Un sistema Mamdani y uno TSK tienen exactamente las mismas reglas y funciones de pertenencia en los antecedentes. Para una misma entrada, ¿pueden producir salidas numéricas diferentes?",
    "options": [
      {
        "text": "Sí, porque la naturaleza de sus consecuentes y el proceso de obtención del valor final son distintos: Mamdani integra sobre un conjunto difuso, TSK calcula una media ponderada de números",
        "isCorrect": true
      },
      {
        "text": "No, porque al compartir los mismos antecedentes las fuerzas de disparo son iguales y eso determina completamente la salida",
        "isCorrect": false
      },
      {
        "text": "Solo producen salidas diferentes cuando la fuerza de disparo de alguna regla supera 0,5",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué la inicialización con K-means de los centros μ mejora la convergencia?",
    "options": [
      {
        "text": "Porque K-means garantiza que los centros sean ortogonales entre sí, evitando redundancia de reglas",
        "isCorrect": false
      },
      {
        "text": "Porque coloca los centros de las Gaussianas cerca de las agrupaciones naturales de los datos, haciendo que las reglas ya sean relevantes desde el inicio del entrenamiento",
        "isCorrect": true
      },
      {
        "text": "Porque K-means inicializa también los parámetros σ y p, no solo μ, reduciendo el espacio de búsqueda",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Se tiene la regla TSK: \"SI x ₁ ES A Y x ₂ ES B ENTONCES y = 3x ₁ − 2x ₂ + 5\". Para x ₁ =4, x ₂ =1, con peso normalizado w̄=1 (única regla activ",
    "options": [
      {
        "text": ", ¿cuál es la salida del sistema?",
        "isCorrect": false
      },
      {
        "text": "5 (solo el término independiente, porque los coeficientes se ignoran al normalizar)",
        "isCorrect": false
      },
      {
        "text": "15, porque y = 3·4 − 2·1 + 5 = 12 − 2 + 5 = 15, y al ser la única regla activa w̄=1 no modifica el resultado",
        "isCorrect": true
      },
      {
        "text": "9, porque w̄ ·y = 0,6·15 (se asume un peso arbitrario de 0,6)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué información concreta proporciona el valor de σ aprendido de una regla?",
    "options": [
      {
        "text": "La importancia relativa de esa variable para la predicción final del sistema",
        "isCorrect": false
      },
      {
        "text": "La selectividad de la regla: un σ pequeño indica que la regla solo se activa en una zona muy estrecha del dominio; un σ grande indica que la regla es indiferente a esa variable",
        "isCorrect": true
      },
      {
        "text": "El rango de valores para los que la regla produce predicciones correctas",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué representa el parámetro r en el consecuente lineal y = p·x ₁ + q·x ₂ + r de Takagi-Sugeno?",
    "options": [
      {
        "text": "La tasa de aprendizaje específica de esa regla durante el entrenamiento",
        "isCorrect": false
      },
      {
        "text": "El peso de normalización de la regla respecto al total de reglas activas",
        "isCorrect": false
      },
      {
        "text": "El término independiente (bias) que permite a la función lineal no pasar por cero",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Por qué se recomienda reducir n_rules a 2-3 cuando N < 100 muestras?",
    "options": [
      {
        "text": "Porque con pocas reglas el modelo es más rápido de entrenar y desplegar",
        "isCorrect": false
      },
      {
        "text": "Para evitar sobreajuste: con pocas muestras y muchas reglas, el modelo tiene más parámetros que datos y aprende el ruido en lugar del patrón",
        "isCorrect": true
      },
      {
        "text": "Por una restricción de PyTorch que no soporta más de 3 reglas cuando el batch size es menor que 100",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué representa cada regla difusa en ANFIS desde el punto de vista del espacio de entrada?",
    "options": [
      {
        "text": "Una clase discreta independiente del resto de reglas",
        "isCorrect": false
      },
      {
        "text": "Una región local del espacio de entrada donde la regla tiene alta activación",
        "isCorrect": true
      },
      {
        "text": "Un único punto exacto de entrenamiento memorizado por el modelo",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué ventaja tienen las funciones de pertenencia Gaussianas frente a las triangulares en ANFIS entrenado con backpropagation?",
    "options": [
      {
        "text": "Son suaves y diferenciables en todo el dominio",
        "isCorrect": true
      },
      {
        "text": "Requieren menos parámetros entrenables",
        "isCorrect": false
      },
      {
        "text": "Garantizan siempre menor error de validación",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué sucede con una regla si una de sus membresías de entrada es muy pequeña y se utiliza T-norma producto?",
    "options": [
      {
        "text": "La regla mantiene prácticamente la misma activación",
        "isCorrect": false
      },
      {
        "text": "La fuerza de disparo total disminuye significativamente",
        "isCorrect": true
      },
      {
        "text": "La regla se convierte automáticamente en dominante",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Qué representa el valor normalizado w̄ᵢ de una regla en ANFIS?",
    "options": [
      {
        "text": "El error local asociado a esa regla",
        "isCorrect": false
      },
      {
        "text": "La tasa de aprendizaje específica de la regla",
        "isCorrect": false
      },
      {
        "text": "La contribución relativa de la regla respecto al total de reglas activas",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Por qué ANFIS puede considerarse un modelo híbrido?",
    "options": [
      {
        "text": "Porque combina aprendizaje supervisado y no supervisado simultáneamente",
        "isCorrect": false
      },
      {
        "text": "Porque mezcla variables continuas y categóricas en el mismo modelo",
        "isCorrect": false
      },
      {
        "text": "Porque combina lógica difusa interpretable con aprendizaje automático neuronal",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "Si se usa la T-norma producto en lugar del mínimo para calcular el antecedente de una regla con tres entradas cuyos grados de pertenencia son 0,9 · 0,8 · 0,1, ¿qué implicación práctica tiene el resultado frente al mínimo?",
    "options": [
      {
        "text": "El producto (0,072) es mucho menor que el mínimo (0,1), por lo que la regla queda prácticamente inhibida aunque dos de las tres condiciones se cumplan bien, haciendo el sistema más exigente",
        "isCorrect": true
      },
      {
        "text": "El producto siempre es mayor que el mínimo, por lo que la regla tiene más influencia en la salida",
        "isCorrect": false
      },
      {
        "text": "Ambas T-normas producen el mismo resultado cuando una de las membresías es muy pequeña",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Un sistema TSK tiene funciones de pertenencia en las entradas bien ajustadas, pero sus parámetros lineales de consecuente (p, q, r) se inicializaron todos a cero. ¿Qué salida producirá el sistema antes de entrenar?",
    "options": [
      {
        "text": "Siempre cero, independientemente de la entrada, porque todos los consecuentes yᵢ = 0·x ₁ + 0·x ₂ + 0 = 0 y la media ponderada de ceros es cero",
        "isCorrect": true
      },
      {
        "text": "Una salida aleatoria porque las fuerzas de disparo varían según la entrada aunque los consecuentes sean cero",
        "isCorrect": false
      },
      {
        "text": "La media aritmética de todos los valores de entrenamiento, porque los pesos normalizados suman 1",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Un conjunto difuso tiene μ( x) = 0,6 para x = 25. ¿Qué afirmación es correcta desde el punto de vista de la lógica difusa?",
    "options": [
      {
        "text": "x = 25 pertenece al conjunto con un 60% de probabilidad",
        "isCorrect": false
      },
      {
        "text": "x = 25 está en el conjunto si y solo si el umbral de corte es inferior a 0,6",
        "isCorrect": false
      },
      {
        "text": "x = 25 pertenece simultáneamente al conjunto y a su complemento, con grados 0,6 y 0,4 respectivamente, sin contradicción",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "¿Cuál es la principal ventaja computacional de TSK frente a Mamdani en aplicaciones de control en tiempo real?",
    "options": [
      {
        "text": "TSK permite usar T-normas más complejas que aceleran el cálculo del antecedente",
        "isCorrect": false
      },
      {
        "text": "TSK evita la integración numérica sobre el conjunto difuso de salida que requiere Mamdani para defuzzificar, reduciendo significativamente el coste computacional",
        "isCorrect": true
      },
      {
        "text": "TSK no necesita evaluar las funciones de pertenencia de las entradas, ahorrando cálculo en la fuzzificación",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "En un sistema difuso con dos variables de entrada y tres conjuntos difusos por variable, ¿cuántas reglas como máximo tendría una base de reglas completa?",
    "options": [
      {
        "text": "6 reglas",
        "isCorrect": false
      },
      {
        "text": "3 reglas",
        "isCorrect": false
      },
      {
        "text": "9 reglas",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "Un sistema difuso tiene funciones de pertenencia muy solapadas entre conjuntos adyacentes. ¿Qué efecto tiene esto sobre el comportamiento del sistema?",
    "options": [
      {
        "text": "Produce discontinuidades en la salida porque varias reglas se activan simultáneamente con fuerza máxima",
        "isCorrect": false
      },
      {
        "text": "Genera transiciones suaves en la salida porque múltiples reglas contribuyen de forma gradual en las zonas de solapamiento",
        "isCorrect": true
      },
      {
        "text": "Hace el sistema más preciso porque cada valor de entrada activa exactamente una regla",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "En un sistema TSK, aumentar el número de reglas manteniendo el número de datos de entrenamiento constante, ¿qué riesgo principal introduce?",
    "options": [
      {
        "text": "Que el sistema tarde más en fuzzificar las entradas al tener más conjuntos difusos",
        "isCorrect": false
      },
      {
        "text": "Sobreajuste: cada regla cubre una región más pequeña del espacio de entrada con sus propios parámetros lineales, pudiendo memorizar el ruido de los datos en lugar de generalizar el patrón",
        "isCorrect": true
      },
      {
        "text": "Que las fuerzas de disparo normalizadas superen el valor 1 al sumar más términos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Se tienen dos reglas TSK con fuerzas de disparo w ₁ = 0,8 y w ₂ = 0,2, y consecuentes y ₁ = 10 e y ₂ = 50. ¿Cuál es la salida final del sistema?",
    "options": [
      {
        "text": "30 (media aritmética de 10 y 50)",
        "isCorrect": false
      },
      {
        "text": "18 (media ponderada: (0,8·10 + 0,2·50) / (0,8 + 0,2))",
        "isCorrect": true
      },
      {
        "text": "10 (la regla con mayor fuerza de disparo domina completamente)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué Mamdani es preferible a TSK cuando el objetivo es que un experto humano valide e interprete la salida del sistema?",
    "options": [
      {
        "text": "Porque Mamdani produce salidas numéricas directamente sin necesidad de defuzzificación",
        "isCorrect": false
      },
      {
        "text": "Porque el consecuente difuso de Mamdani es un conjunto lingüístico (ej. \"temperatura alta\") que un experto puede asociar directamente a conceptos del dominio, mientras que el consecuente TSK es una función matemática menos intuitiva",
        "isCorrect": true
      },
      {
        "text": "Porque Mamdani permite usar más reglas que TSK para el mismo número de variables de entrada",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "¿Por qué TSK no necesita defuzzificación en sentido estricto, a diferencia de Mamdani?",
    "options": [
      {
        "text": "Porque TSK usa siempre funciones de pertenencia triangulares que tienen centroide analítico exacto",
        "isCorrect": false
      },
      {
        "text": "Porque la salida de cada regla en TSK ya es un número (no un conjunto difuso), y la salida final es simplemente la media ponderada de esos números por los pesos normalizados, sin necesidad de integrar sobre un conjunto difuso",
        "isCorrect": true
      },
      {
        "text": "Porque en TSK todas las reglas producen siempre la misma salida numérica, haciendo innecesaria la agregación",
        "isCorrect": false
      }
    ]
  }
];
