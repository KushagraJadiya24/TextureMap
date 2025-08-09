# 🧊 3D Cube with Drag-and-Drop Texture Swapping (Three.js)

An interactive **3D cube viewer** built with **Three.js** that lets you drag and drop textures from a sidebar to dynamically change the cube's surface in real time.

---

## 🚀 Features
- **3D Rotating Cube** rendered using [Three.js](https://threejs.org/).
- **Real-Time Texture Swapping** via drag-and-drop from a texture list.
- **Lighting Setup** using AmbientLight and DirectionalLight for realistic shading.
- **Responsive Texture Loader** with error handling and color space correction.

---

## 📂 Project Structure
```
/textures
  ├── texture1.jpg
  ├── texture2.jpg
  ├── texture3.jpg
  ├── texture4.jpg
index.html
script.js
style.css
```

---

## 📦 Installation & Setup
1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/threejs-texture-cube.git
   cd threejs-texture-cube
   ```

2. **Open `index.html` in your browser** using a local server:
   ```bash
   # Using VS Code Live Server extension
   # Or Python HTTP server
   python -m http.server
   ```

3. **Drag and drop** any texture from the left panel onto the cube.

---

## 🛠 Technologies Used
- **Three.js** — for rendering and 3D object handling
- **JavaScript (ES6)** — for logic and interactivity
- **HTML/CSS** — for layout and sidebar styling

---

## ✨ How It Works
1. A cube is created using `BoxGeometry` and `MeshStandardMaterial`.
2. `TextureLoader` loads a default texture from the `/textures` folder.
3. The sidebar displays all available textures.
4. Users drag a texture from the sidebar onto the cube to update it instantly.

---

## 📸 Demo
[Live Demo](https://YOUR_USERNAME.github.io/threejs-texture-cube/)

---

## 🧑‍💻 Author
**Your Name**  
📎 [LinkedIn](https://www.linkedin.com/in/kushagra-jadiya/) 
