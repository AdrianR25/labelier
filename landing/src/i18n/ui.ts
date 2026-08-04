export const ui = {
  en: {
    'layout.title': 'Labelier: Label Images for AI Training | Free & Local Browser Tool',
    'layout.description': 'Labelier is a free, browser-based tool to manually label large sets of images for AI training. Fast, private, and works entirely offline. No signup required. Try it now.',
    'hero.title': 'Labelier - Free image labeling tool for AI training',
    'hero.description': 'Label images fast, right in your browser. No signup required.',
    'hero.cta': 'Start labeling',
    'features.title': 'Features',
    'features.free.title': 'Free to use',
    'features.free.description': 'Access all features for free, no purchase or subscription neccessary. Forever.',
    'features.local.title': 'Fully local',
    'features.local.description': 'Runs entirely in your browser, without reaching to any external servers. This protects your data and your privacy.',
    'features.hotkeys.title': 'Hotkeys',
    'features.hotkeys.description': 'Leverage a predefined set of keyboard shortcuts and other quality of life features.',
    'features.export.title': 'Export file with labels',
    'features.export.description': "Save a text file with the list of key-value pairs of each image name and it's corresponding label.",
    'instructions.title': 'How it works',
    'instructions.load.title': 'Load a directory.',
    'instructions.load.description': 'Select a local directory from your computer and it will automatically load all images inside it.',
    'instructions.label.title': 'Label the images.',
    'instructions.label.description': "The images will appear one by one and in alphabetical order by file name. Just type the label that you want to set for that image and click save. The tool will automatically advance to the next image. If you make a mistake or don't want to label the image shown yet, you can use the «previous» and «next» buttons.",
    'instructions.export.title': 'Export the results.',
    'instructions.export.description': "One you've finished labeling all images, click the export button and you will be prompted to save a text (.txt) file. This file will contain one row per labeled image with the format",
    'instructions.export.description.format': 'image-name.abc<tab>label<lf>',
    'faq.title': 'FAQ',
    'faqs': [
      {
        'question': 'What is Labelier and what is it for?',
        'answer': 'Labelier is a free and 100% local web tool designed for manually labeling large quantities of images intended for AI training. It works directly in your browser without the need to install software or connect to external servers. With a simple interface and keyboard shortcuts, it significantly accelerates the process of creating datasets for machine learning projects.'
      },
      {
        'question': 'Is Labelier really free?',
        'answer': 'Yes, Labelier is completely free forever. It requires no registration, monthly subscription, or hidden fees. All features, including the ability to process any number of images, are available at no cost. This philosophy stems from the conviction that basic tools for AI research and development should be accessible to everyone, regardless of budget.'
      },
      {
        'question': 'Do I need to register or create an account?',
        'answer': 'No. One of the main advantages of Labelier is that it works without authentication. No email or user account is needed and no data is stored from you. Simply open the application in your browser, select a folder, and start working immediately. If you are looking for privacy and simplicity, this is an ideal solution.'
      },
      {
        'question': 'Are my images uploaded to any a server?',
        'answer': 'No. Labelier works 100% locally in your browser using modern web technologies. No image leaves your device, there is no communication with external servers at any time. This guarantees that your data remains private and secure, even if you work with sensitive or confidential information.'
      },
      {
        'question': 'Can I use Labelier with confidential or private images?',
        'answer': 'Yes, precisely its local design makes it the perfect option for working with sensitive data. Since all processing occurs on your own device without sending anything to the cloud, you can label private, medical, corporate, or personal images without any concern about information leaks or security violations.'
      },
      {
        'question': 'How do I export the labels I create in Labelier?',
        'answer': 'Once you have finished labeling all images, simply press the «Export Labels File» button. A text file (.txt) with all your labels organized in key-value format will be automatically generated: image-name.abc<tab>label<lf>. This file can be directly imported into any AI model training pipeline.'
      },
      {
        'question': 'What image file formats does Labelier support?',
        'answer': 'Labelier supports all standard image formats compatible with modern web browsers: JPEG, PNG, WEBP, GIF, BMP, and SVG. If your browser can display it, Labelier can process it.'
      },
      {
        'question': 'Can I correct errors if I label an image incorrectly?',
        'answer': 'Yes, Labelier includes full navigation controls. You can use the «Previous» and «Next» buttons or keyboard shortcuts to go back and review images you have already labeled. You can also skip temporary images using these controls if you decide not to label them for now.'
      },
      {
        'question': 'How do keyboard shortcuts work in Labelier?',
        'answer': 'The application includes a set of default shortcuts designed to maximize labeling efficiency. Navigating between images, saving labels, and accessing functions can be done without touching the mouse, drastically reducing the time required to process hundreds or thousands of images. Check the help panel inside the app to see all available shortcuts.'
      },
      {
        'question': 'Where can I use the labels that I create?',
        'answer': 'Datasets labeled with Labelier are ideal for training computer vision models, image classification, object detection, semantic segmentation, facial recognition, visual content analysis, and any task that requires supervised learning with manually annotated visual data.'
      },
      {
        'question': 'How many images can I process with Labelier?',
        'answer': 'You can load complete folders with hundreds or thousands of images. The tool processes images sequentially, showing one by one in alphabetical order. The practical limit depends on your browser and computer memory capacity, but it is designed to label significant volumes of data.'
      },
      {
        'question': 'Is it compatible with Mac, Windows and Linux?',
        'answer': 'Yes, Labelier works on any operating system that has a modern web browser installed. This includes macOS, Windows, Linux, ChromeOS, and any Unix-like distribution.'
      },
      {
        'question': 'Do I need programming knowledge to use Labelier?',
        'answer': 'No, Labelier is designed for ease of use. The interface is intuitive: load a folder, label images by writing descriptive names, export results. It is designed for researchers, data scientists, students, and anyone who needs to create datasets without advanced technical knowledge.'
      },
      {
        'question': 'What happens if I close the browser before finishing?',
        'answer': 'Progress is saved in browser storage, so as long as you do not use incognito mode or similar, you can reopen the tool, load the saved folder, and continue where you left off.'
      },
      {
        'question': 'Why choose Labelier over CVAT or Label Studio?',
        'answer': 'Labelier stands out for three differential advantages: (1) 100% local without the need to configure servers or backend, (2) completely free without limits or premium versions, and (3) extremely simple for basic labeling tasks. While tools like CVAT require complex infrastructure, Labelier is ready to use in seconds.'
      },
      {
        'question': 'Is there a mobile or desktop downloadable version?',
        'answer': 'Currently Labelier is available only as a web application accessible from any browser. It requires no download or installation, allowing immediate access from any device. We are exploring offline options and native applications for future versions.'
      },
      {
        'question': 'Are there plans to add automatic recognition or collaboration?',
        'answer': 'The current focus is on maintaining a local, fast, and private solution for efficient manual labeling. Any new feature in the future will be carefully evaluated to not compromise these fundamental principles. You can follow official updates on GitHub.'
      },
      {
        'question': 'How does this affect my computer performance?',
        'answer': 'By working in the browser, Labelier uses limited CPU and RAM resources compared to traditional desktop applications. However, loading folders with thousands of heavy images can consume memory.'
      }
    ],
    'footer.contact.1': 'If you have any issues, questions or suggestions, feel free to ',
    'footer.contact.cta': 'reach out',
    'footer.contact.2': ' so I can improve the app.',
    'footer.donate': 'If you are using Labelier in your company, consider supporting the app by becoming a Sponsor on GitHub.',
    'footer.credit': 'Made by ',
  },
  es: {
    'layout.title': 'Labelier: Etiqueta Imágenes para Entrenamiento de IA | Gratis y Local',
    'layout.description': 'Labelier es una herramienta gratuita para etiquetar grandes colecciones de imágenes para entrenamiento de IA. Rápida, privada y funciona 100% en el navegador. Sin registro. Prúebala ahora.',
    'hero.title': 'Labelier - Herramienta gratuita de etiquetado de imágenes para entrenamiento de IA',
    'hero.description': 'Etiqueta imágenes rápidamente, directamente en el navegador. Sin registro.',
    'hero.cta': 'Empieza a etiquetar',
    'features.title': 'Características',
    'features.free.title': 'Gratis',
    'features.free.description': 'Accede a todas las características de forma gratuita, sin necesidad de compra ni suscripción. Para siempre.',
    'features.local.title': '100% local',
    'features.local.description': 'Funciona exclusivamente en tu navegador, sin comunicarse con servidores externos. Esto protege tus datos y tu privacidad.',
    'features.hotkeys.title': 'Atajos de teclado',
    'features.hotkeys.description': 'Aprovecha un conjunto predeterminado de atajos de teclado y otras características para mejorar la experiencia.',
    'features.export.title': 'Exportar archivo con etiquetas',
    'features.export.description': 'Guarda un archivo de texto con la lista de pares clave-valor de cada nombre de imagen y su etiqueta correspondiente.',
    'instructions.title': 'Cómo funciona',
    'instructions.load.title': 'Carga una carpeta',
    'instructions.load.description': 'Selecciona una carpeta de tu ordenador y se cargarán automáticamente todas las imágenes que contenga.',
    'instructions.label.title': 'Etiqueta las imágenes',
    'instructions.label.description': 'Las imágenes aparecerán una por una y en orden alfabético por nombre de archivo. Simplemente escribe la etiqueta que quieras poner para esa imagen y pulsa guardar. La herramienta avanzará automáticamente a la siguiente imagen. Si cometes un error o no quieres etiquetar la imagen mostrada aún, puedes usar los botones «anterior» y «siguiente».',
    'instructions.export.title': 'Exporta los resultados',
    'instructions.export.description': 'Una vez hayas terminado de etiquetar todas las imágenes, pulsa el botón «exportar» y se te guardará un archivo de texto (.txt). Este archivo contendrá una fila por cada imagen etiquetada con el formato',
    'instructions.export.description.format': 'nombre-imagen.abc<tab>etiqueta<lf>',
    'faq.title': 'Preguntas frecuentes',
    'faqs': [
      {
        'question': '¿Qué es Labelier y para qué sirve?',
        'answer': 'Labelier es una herramienta web gratuita y 100% local diseñada para etiquetar manualmente grandes cantidades de imágenes destinadas al entrenamiento de inteligencia artificial. Funciona directamente en tu navegador sin necesidad de instalar software ni conectarte a servidores externos. Con una interfaz sencilla y atajos de teclado, acelera significativamente el proceso de creación de datasets para proyectos de machine learning.'
      },
      {
        'question': '¿Es realmente gratuito Labelier?',
        'answer': 'Sí, Labelier es completamente gratuito para siempre. No requiere registro, suscripción mensual ni pagos ocultos. Todas las funcionalidades, incluida la capacidad de procesar cualquier cantidad de imágenes, están disponibles sin coste alguno. Esta filosofía nace de la convicción de que las herramientas básicas para investigación y desarrollo de IA deben ser accesibles para todos, independientemente del presupuesto.'
      },
      {
        'question': '¿Necesito registrarme o crear una cuenta?',
        'answer': 'No. Una de las ventajas principales de Labelier es que funciona sin necesidad de autenticación. No se necesita correo electrónico ni cuenta de usuario y no se almacena ningún dato tuyo. Simplemente abre la aplicación en tu navegador, selecciona una carpeta y empieza a trabajar inmediatamente. Si buscas privacidad y simplicidad, esta es una solución ideal.'
      },
      {
        'question': '¿Se suben mis imágenes a algún servidor?',
        'answer': 'No. Labelier funciona 100% local en tu navegador utilizando tecnologías web modernas. Ninguna imagen sale de tu dispositivo, no hay comunicación con servidores externos en ningún momento. Esto garantiza que tus datos permanezcan privados y seguros, incluso si trabajas con información sensible o confidencial.'
      },
      {
        'question': '¿Puedo usar Labelier con imágenes confidenciales o privadas?',
        'answer': 'Sí, precisamente su diseño local lo convierte en la opción perfecta para trabajar con datos sensibles. Como todo el procesamiento ocurre en tu propio dispositivo sin enviar nada a la nube, puedes etiquetar imágenes privadas, médicas, corporativas o personales sin ninguna preocupación sobre fugas de información o violaciones de seguridad.'
      },
      {
        'question': '¿Cómo exporto las etiquetas que creo en Labelier?',
        'answer': 'Una vez termines de etiquetar todas las imágenes, simplemente pulsa el botón «Exportar archivo de etiquetas». Se generará automáticamente un archivo de texto (.txt) con todas tus etiquetas organizadas en formato clave-valor: nombre-imagen.abc<tab>etiqueta<lf>. Este archivo puede importarse directamente en cualquier pipeline de entrenamiento de modelos de IA.'
      },
      {
        'question': '¿Qué tipos de archivos de imagen admite Labelier?',
        'answer': 'Labelier soporta todos los formatos de imagen estándar compatibles con navegadores web modernos: JPEG, PNG, WEBP, GIF, BMP y SVG. Si tu navegador puede visualizarlo, Labelier puede procesarlo.'
      },
      {
        'question': '¿Puedo corregir errores si etiqueto mal una imagen?',
        'answer': 'Sí, Labelier incluye controles de navegación completos. Puedes usar los botones «Anterior» y «Siguiente» o los atajos de teclado para retroceder y revisar imágenes que ya etiquetaste. También puedes saltar imágenes temporales usando estos controles si decides no etiquetarlas por ahora.'
      },
      {
        'question': '¿Cómo funcionan los atajos de teclado en Labelier?',
        'answer': 'La aplicación incluye un conjunto predeterminado de atajos diseñados para maximizar la eficiencia del etiquetado. Navegar entre imágenes, guardar etiquetas y acceder a funciones se puede hacer sin tocar el ratón, reduciendo drásticamente el tiempo requerido para procesar cientos o miles de imágenes. Consulta el panel de ayuda dentro de la app para ver todos los atajos disponibles.'
      },
      {
        'question': '¿Para qué proyectos de IA puedo usar las etiquetas creadas?',
        'answer': 'Los datasets etiquetados con Labelier son ideales para entrenar modelos de computer vision, clasificación de imágenes, detección de objetos, segmentación semántica, reconocimiento facial, análisis de contenido visual y cualquier tarea que requiera aprendizaje supervisado con datos visuales anotados manualmente.'
      },
      {
        'question': '¿Cuántas imágenes puedo procesar con Labelier?',
        'answer': 'Puedes cargar carpetas completas con cientos o miles de imágenes. La herramienta procesa las imágenes secuencialmente mostrando una por una en orden alfabético. El límite práctico depende de la capacidad de memoria de tu navegador y ordenador, pero está diseñado para etiquetar volúmenes significativos de datos.'
      },
      {
        'question': '¿Es compatible con Mac, Windows y Linux?',
        'answer': 'Sí, Labelier funciona en cualquier sistema operativo que tenga un navegador web moderno instalado. Esto incluye macOS, Windows, Linux, ChromeOS y cualquier distribución Unix-like.'
      },
      {
        'question': '¿Necesito conocimientos de programación para usar Labelier?',
        'answer': 'No, Labelier está diseñado pensando en la facilidad de uso. La interfaz es intuitiva: carga una carpeta, etiqueta imágenes escribiendo nombres descriptivos, exporta resultados. Está pensado para investigadores, científicos de datos, estudiantes y cualquiera que necesite crear datasets sin conocimientos técnicos avanzados.'
      },
      {
        'question': '¿Qué pasa si cierro el navegador antes de terminar?',
        'answer': 'El progreso se guarda en el almacenamiento del navegador por lo tanto, siempre que no uses modo incógnito o similar podrás volver a abrir la herrmienta, cargar la carpeta guardada y continuar donde lo dejaste.'
      },
      {
        'question': '¿Por qué elegir Labelier frente a CVAT o Label Studio?',
        'answer': 'Labelier destaca por tres ventajas diferenciales: (1) 100% local sin necesidad de configurar servidores ni backend, (2) completamente gratuito sin límites ni versiones premium, y (3) extremadamente sencillo para tareas básicas de etiquetado rápido. Mientras herramientas como CVAT requieren infraestructura compleja, Labelier está listo para usar en segundos.'
      },
      {
        'question': '¿Existe versión móvil o desktop descargable?',
        'answer': 'Actualmente Labelier está disponible únicamente como aplicación web accesible desde cualquier navegador. No requiere descarga ni instalación, lo que permite acceso inmediato desde cualquier dispositivo. Estamos explorando opciones offline y aplicaciones nativas para futuras versiones.'
      },
      {
        'question': '¿Hay planes de añadir reconocimiento automático o colaboración?',
        'answer': 'El enfoque actual está en mantener una solución local, rápida y privada para etiquetado manual eficiente. Cualquier nueva característica futura será evaluada cuidadosamente para no comprometer estos principios fundamentales. Puedes seguir las actualizaciones oficiales en GitHub.'
      },
      {
        'question': '¿Cómo afecta esto al rendimiento de mi ordenador?',
        'answer': 'Al funcionar en el navegador, Labelier utiliza recursos limitados de CPU y RAM comparado con aplicaciones de escritorio tradicionales. Sin embargo, cargar carpetas con miles de imágenes muy pesadas puede consumir memoria.'
      }
    ],
    'footer.contact.1': 'Si encuentras algún problema o tienes alguna pregunta o sugerencia, no dudes en ',
    'footer.contact.cta': 'contactar conmigo',
    'footer.contact.2': ' para que pueda mejorar la aplicación.',
    'footer.donate': 'Si estás usando Labelier en tu empresa, considera apoyar la aplicación convirtiéndote en Sponsor en GitHub.',
    'footer.credit': 'Hecho por ',
  },
} as const;
