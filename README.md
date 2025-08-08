# 🎁 Amigo Secreto (Secret Santa)

Una aplicación web interactiva para organizar sorteos de Amigo Secreto de manera fácil y divertida.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Demo](#demo)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Persistencia (localStorage)](#persistencia-localstorage)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Notas de Privacidad](#notas-de-privacidad)
- [Contribución](#contribución)
- [Licencia](#licencia)

## 📖 Descripción

**Amigo Secreto** es una aplicación web moderna que permite organizar sorteos de intercambio de regalos de forma digital. Los participantes pueden agregarse a la lista y la aplicación se encarga de realizar el sorteo de manera aleatoria, asegurando que cada persona tenga asignado un amigo secreto único.

## ✨ Características

- 🎯 **Sorteo Aleatorio**: Asignaciones únicas y aleatorias sin reemplazo
- 🔄 **Reintento Controlado**: Cada participante puede volver a sortear solo una vez en su turno
- 👥 **Gestión de Participantes**: Agregar y eliminar dinámicamente
- 💾 **Persistencia Local (localStorage)**: Se guarda la lista, asignaciones, turno y pendientes
- 🚫 **Validación de Duplicados**: No permite nombres repetidos
- 🧠 **Reanudación del Juego**: Tras recargar, continúa donde quedó
- 📱 **Responsive Design**: Adaptable a móviles y escritorio
- 🎨 **UI Moderna**: Diseño limpio con modal de resultado
- ♻️ **Reinicio Seguro**: Limpia estado y almacenamiento

## 🖼️ Demo

Fases:
1. Agregar Participantes
2. Sorteo secuencial (con opción de reintento por turno)
3. Mensaje final de cierre

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (ES6+ / POO)
- Google Fonts (Inter)
- localStorage (persistencia)

## 🌐 Enlace al Proyecto

https://suitsg.github.io/amigoSecreto/

## 🚀 Instalación

1. Clonar:
```bash
git clone https://github.com/SuitsG/amigoSecreto.git
cd amigoSecreto
```
2. Abrir:
```bash
start index.html   # Windows
open index.html    # macOS
xdg-open index.html # Linux
```

## 📖 Uso

1. Agregar nombres (no se permiten duplicados ni vacíos)
2. Iniciar Juego
3. Presionar "Iniciar Sorteo" por participante
4. (Opcional) Reintentar una vez
5. Avanzar con "Siguiente"
6. Al finalizar, puedes reiniciar

## 💾 Persistencia (localStorage)

La aplicación guarda automáticamente:
- Lista de participantes
- Asignaciones realizadas
- Turno actual
- Participantes restantes por asignar

Al recargar la página:
- Se reconstruye la lista
- Se restauran las asignaciones previas
- Continúa el turno donde estaba
- Si el sorteo terminó, se deshabilita el botón

Para limpiar manualmente:
```js
localStorage.removeItem('amigoSecreto_participantes');
localStorage.removeItem('amigoSecreto_estado');
```

El botón "Reiniciar Juego" también elimina estos datos.

## 📁 Estructura del Proyecto

```
amigo-secreto/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## 🔧 Funcionalidades

### Clases

#### Participante
Propiedades: nombre, amigoSecreto

#### JuegoAmigoSecreto
- agregarParticipante(nombre)
- eliminarParticipante(nombre)
- reiniciarJuego()
- guardarEnStorage() / cargarDeStorage()
- extraerAleatorioYRemover(arr)

#### ControladorSorteo
- sortear()
- reintentar()
- siguiente()
- guardarEstado() / cargarEstado()
- reiniciarSorteo()

### Persistencia Técnica
- Claves: `amigoSecreto_participantes`, `amigoSecreto_estado`
- Estado serializado: turno, restantes, asignaciones
- Invalidación automática al modificar la lista

## 🛡️ Notas de Privacidad

- Las asignaciones quedan visibles en `localStorage` del navegador
- No se envían datos a servidores
- Para ocultar resultados tras el sorteo, limpiar almacenamiento

## 🤝 Contribución

1. Fork
2. Rama: `feature/NuevaFeature`
3. Commit
4. Push
5. Pull Request

### Ideas Futuras

- [ ] Tema claro/oscuro
- [ ] Exportar resultados (PDF / CSV)
- [ ] Animaciones avanzadas
- [ ] Sonidos opcionales
- [ ] Mejor experiencia mobile-first
- [ ] Internacionalización (i18n)
- [ ] Evitar auto-asignación (regla configurable)

## 📜 Licencia

MIT

## 👨‍💻 Autor

**SuitsG** - https://github.com/SuitsG

⭐ Si te gusta, deja una estrella.

## 📞 Soporte

Abre un issue: https://github.com/SuitsG/amigoSecreto/issues

---

Hecho con ❤️ para hacer más divertidos los intercambios de regalos.

## 🚧
![En desarrollo](./en-desarrollo.png)