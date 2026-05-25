# Tres en Raya con React

Un juego clásico de Tres en Raya (Tic Tac Toe) desarrollado con React, incluyendo funcionalidades como:

- Edición de nombres de jugadores
- Historial completo de movimientos
- Detección automática del ganador
- Reinicio de partida
- Interfaz dinámica basada en componentes

---

## Tecnologías utilizadas

- React
- JavaScript (ES6+)
- CSS
- Vite / Create React App

---

## Funcionalidades

### Edición de nombres
Los jugadores pueden personalizar sus nombres antes o durante la partida.

### Historial de movimientos
Cada movimiento queda registrado mostrando:

- Qué jugador realizó la jugada
- Posición elegida
- Orden cronológico de movimientos

### Identificación automática del ganador
El juego detecta automáticamente:

- Ganador de la partida
- Empate
- Fin del juego

### Reinicio de partida
Posibilidad de reiniciar la partida sin recargar la página.

---

## Vista general

```txt id="8vw9lt"
Jugador X: Carlos
Jugador O: Ana

Turno actual: Carlos

 X | O | X
-----------
 O | X | 
-----------
 O |   | X

Ganador: Carlos
```

---

## Instalación

Clona el repositorio:

```bash id="2k9vce"
git clone https://github.com/tuusuario/tres-en-raya-react.git
```

Entra en la carpeta del proyecto:

```bash id="h3u0re"
cd tres-en-raya-react
```

Instala las dependencias:

```bash id="k3x8mp"
npm install
```

Inicia el servidor de desarrollo:

```bash id="2vqg5j"
npm run dev
```

o si usas Create React App:

```bash id="v6ixs8"
npm start
```

---

## Estructura del proyecto

```txt id="3q8wop"
src/
│
├── components/
│   ├── GameBoard.jsx
│   ├── Player.jsx
│   ├── Log.jsx
│   └── GameOver.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## Lógica del juego

El proyecto utiliza:

- `useState` para gestionar el estado del tablero y jugadores
- Renderizado dinámico de turnos
- Funciones para:
  - comprobar combinaciones ganadoras
  - detectar empates
  - almacenar historial de movimientos

---

## Ejemplo de historial de movimientos

```txt id="1h8trz"
1. Carlos → fila 1, columna 1
2. Ana → fila 2, columna 2
3. Carlos → fila 1, columna 2
4. Ana → fila 3, columna 1
```

---

## Posibles mejoras futuras

- Modo contra IA
- Multijugador online
- Animaciones y efectos visuales
- Guardado de partidas
- Diseño responsive para dispositivos móviles

---

## Licencia

Este proyecto es de código abierto y puede utilizarse libremente para aprendizaje y práctica.

---

## Autor

Desarrollado con React como proyecto de práctica para aprender:

- Manejo de estado
- Componentes
- Props
- Renderizado dinámico
- Lógica de juegos en React