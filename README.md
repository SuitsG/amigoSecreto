# 🎁 Amigo Secreto (Secret Santa)

Una aplicación web interactiva para organizar sorteos de Amigo Secreto de manera fácil y divertida.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Demo](#demo)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Contribución](#contribución)
- [Licencia](#licencia)

## 📖 Descripción

**Amigo Secreto** es una aplicación web moderna que permite organizar sorteos de intercambio de regalos de forma digital. Los participantes pueden agregarse a la lista y la aplicación se encarga de realizar el sorteo de manera aleatoria, asegurando que cada persona tenga asignado un amigo secreto único.

## ✨ Características

- 🎯 **Sorteo Aleatorio**: Algoritmo que garantiza asignaciones únicas y aleatorias
- 🔄 **Reintento Permitido**: Cada participante tiene una oportunidad de volver a sortear
- 👥 **Gestión de Participantes**: Agregar y eliminar participantes de forma dinámica
- 📱 **Responsive Design**: Interfaz adaptable a diferentes dispositivos
- 🎨 **UI Moderna**: Diseño limpio y atractivo con animaciones suaves
- 🚫 **Validación de Duplicados**: Previene la adición de nombres duplicados
- 💫 **Experiencia Interactiva**: Modal para mostrar resultados de forma elegante

## 🖼️ Demo

La aplicación cuenta con tres fases principales:

1. **Agregar Participantes**: Formulario para registrar a los participantes
2. **Proceso de Sorteo**: Sorteo individual con opción de reintento
3. **Finalización**: Mensaje de celebración al completar el sorteo

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS y Flexbox/Grid
- **JavaScript ES6+**: Lógica de la aplicación con programación orientada a objetos
- **Google Fonts**: Tipografía personalizada (Basic Sans)

## 🚀 Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/SuitsG/amigoSecreto.git
   ```

2. **Navega al directorio del proyecto**:
   ```bash
   cd amigoSecreto
   ```

3. **Abre el archivo `index.html` en tu navegador**:
   ```bash
   # En Windows
   start index.html
   
   # En macOS
   open index.html
   
   # En Linux
   xdg-open index.html
   ```

   O simplemente arrastra el archivo `index.html` a tu navegador web.

## 📖 Uso

### Paso 1: Agregar Participantes
1. Escribe el nombre de un participante en el campo de texto
2. Haz clic en "Agregar" o presiona Enter
3. Repite el proceso para todos los participantes
4. Puedes eliminar participantes haciendo clic en "Quitar"

### Paso 2: Iniciar el Juego
1. Cuando tengas todos los participantes, haz clic en "Iniciar Juego"
2. Se mostrará la pantalla de sorteo con las reglas

### Paso 3: Realizar el Sorteo
1. Haz clic en "Iniciar Sorteo"
2. Aparecerá un modal mostrando el amigo secreto asignado
3. Cada participante tiene la opción de "Volver a sortear" (solo una vez)
4. Haz clic en "Siguiente" para continuar con el próximo participante

### Paso 4: Finalización
1. Cuando todos los participantes hayan realizado su sorteo, aparecerá un mensaje de celebración
2. Puedes reiniciar el juego para realizar un nuevo sorteo

## 📁 Estructura del Proyecto

```
amigo-secreto/
│
├── index.html          # Página principal
├── styles.css          # Estilos de la aplicación
├── app.js             # Lógica de la aplicación
└── README.md          # Documentación del proyecto
```

## 🔧 Funcionalidades

### Clases Principales

#### `Participante`
- Representa a cada participante del juego
- Propiedades: `nombre`, `amigoSecreto`

#### `JuegoAmigoSecreto`
- Gestiona la lista de participantes
- Métodos principales:
  - `agregarParticipante(nombre)`: Agrega un nuevo participante
  - `eliminarParticipante(nombre)`: Elimina un participante
  - `extraerAleatorioYRemover(arr)`: Selecciona aleatoriamente y remueve elemento
  - `reiniciarJuego()`: Reinicia el estado del juego

#### `ControladorSorteo`
- Controla el flujo del sorteo
- Gestiona la interfaz de usuario y los modales
- Maneja los turnos y reintentos

### Características Técnicas

- **Prevención de Duplicados**: Utiliza `Set` para evitar nombres duplicados
- **Algoritmo de Sorteo**: Selección aleatoria sin reemplazo
- **Control de Estado**: Seguimiento de turnos y reintentos
- **Interfaz Reactiva**: Actualización dinámica de la UI

## 🎨 Personalización

### Colores
Los colores se pueden modificar en el archivo `styles.css` usando las variables CSS:

```css
:root {
    --color-1: rgba(242, 242, 242, 1); /* Texto principal */
    --color-2: rgba(191, 191, 191, 1); /* Texto secundario */
    --color-3: rgba(63, 63, 63, 1);    /* Fondo medio */
    --color-4: rgba(38, 38, 38, 1);    /* Fondo oscuro */
    --color-5: rgba(12, 12, 12, 1);    /* Fondo principal */
}
```

### Tipografía
La fuente se puede cambiar modificando:

```css
:root {
    --font-family: "basic-sans", sans-serif;
}
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Ideas para Mejoras

- [ ] Agregar animaciones CSS más elaboradas
- [ ] Implementar persistencia local (localStorage)
- [ ] Añadir tema claro/oscuro
- [ ] Exportar resultados en PDF
- [ ] Agregar sonidos de notificación
- [ ] Versión mobile-first mejorada
- [ ] Internacionalización (i18n)

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**SuitsG** - [GitHub](https://github.com/SuitsG)

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!

## 📞 Soporte

Si tienes preguntas o encuentras algún problema, por favor abre un [issue](https://github.com/SuitsG/amigoSecreto/issues) en GitHub.

---

*Hecho con ❤️ para hacer más divertidos los intercambios de regalos*