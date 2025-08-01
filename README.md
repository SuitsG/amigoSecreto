# 🎁 Amigo Secreto

Una aplicación web simple y elegante para organizar sorteos de amigo secreto. Permite agregar participantes, mantener la lista guardada en el navegador y realizar sorteos de manera fácil y divertida.

## ✨ Características

- **Agregar participantes**: Añade nombres de participantes de forma sencilla
- **Validación de datos**: Evita nombres duplicados y campos vacíos
- **Persistencia de datos**: Los participantes se guardan en el navegador usando localStorage
- **Interfaz intuitiva**: Diseño limpio y fácil de usar
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Mensajes de error**: Feedback visual cuando hay errores
- **Soporte para teclado**: Agrega participantes presionando Enter

## 🚀 Demo

![Amigo Secreto Preview](https://via.placeholder.com/600x400/0D0D0D/F2F2F2?text=Amigo+Secreto+App)

## 📋 Cómo usar

1. **Agregar participantes**: 
   - Escribe el nombre en el campo de texto
   - Presiona "Agregar Participante" o Enter
   - El nombre aparecerá en la lista

2. **Gestionar la lista**:
   - Los participantes se guardan automáticamente
   - Usa "Limpiar Lista" para empezar de nuevo
   - La lista se mantiene aunque recargues la página

3. **Realizar sorteo**:
   - *(Funcionalidad próximamente)*

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño responsive
- **JavaScript ES6**: Lógica de la aplicación
- **localStorage**: Persistencia de datos
- **Fuentes**: P22 Morris (Golden, Troy, Ornaments)

## 📁 Estructura del proyecto

```
amigo-secreto/
│
├── index.html          # Página principal
├── styles.css          # Estilos de la aplicación
├── app.js             # Lógica JavaScript
└── README.md          # Documentación
```

## 🎨 Paleta de colores

- **Fondo**: `#0D0D0D` (Negro oscuro)
- **Texto principal**: `#F2F2F2` (Blanco hueso)
- **Texto secundario**: `#A6A6A6` (Gris claro)
- **Secciones**: `#F0F0F0` (Gris muy claro)
- **Errores**: `#FF0000` (Rojo)

## 🚀 Instalación y uso

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/SuitsG/amigoSecreto.git
   ```

2. **Navega al directorio**:
   ```bash
   cd amigoSecreto
   ```

3. **Abre en tu navegador**:
   - Abre `index.html` directamente en tu navegador
   - O usa un servidor local como Live Server

## 🌟 Características técnicas

- **Validación en tiempo real**: Los errores se limpian mientras escribes
- **Manejo de eventos**: Soporte para click y teclado
- **Almacenamiento local**: Los datos persisten entre sesiones
- **Código limpio**: Funciones modulares y bien documentadas
- **Responsive design**: Se adapta a móviles y desktop

## 🔧 Funcionalidades

### Implementadas ✅
- [x] Agregar participantes
- [x] Validación de nombres duplicados
- [x] Validación de campos vacíos
- [x] Persistencia con localStorage
- [x] Limpiar lista completa
- [x] Mensajes de error visuales
- [x] Soporte para Enter

### Por implementar 🚧
- [ ] Función de sorteo
- [ ] Mostrar resultados del sorteo
- [ ] Exportar lista de participantes
- [ ] Eliminar participantes individuales
- [ ] Configuración de sorteo (restricciones)

## 👨‍💻 Autor

**SuitsG** - [GitHub Profile](https://github.com/SuitsG)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Changelog

### v1.0.0 (2025-01-25)
- ✨ Funcionalidad básica de agregar participantes
- ✨ Validación de datos y mensajes de error
- ✨ Persistencia con localStorage
- 🎨 Diseño inicial con paleta de colores oscura
- 📱 Diseño responsive básico

---

⭐ ¡Dale una estrella si te gusta el proyecto!