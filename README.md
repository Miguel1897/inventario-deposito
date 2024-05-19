

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Claro, aquí tienes un resumen de las librerías y las funciones utilizadas en el código:

### Librerías Utilizadas:
1. **React:** Una biblioteca de JavaScript para construir interfaces de usuario.
2. **useState:** Un hook de React que permite agregar estado a componentes de función.
3. **useEffect:** Un hook de React que permite realizar efectos secundarios en componentes funcionales, como la ejecución de código después de que el componente ha sido renderizado.
4. **uuidv4:** Una función de la librería UUID que genera identificadores únicos universales (UUID) en formato versión 4.
   
### Funciones Definidas:
1. **App:** El componente principal que representa la aplicación.
2. **addProduct:** Una función que agrega un nuevo producto al estado `products`. Antes de agregar el producto, verifica si ya existe un producto con el mismo ID o nombre y muestra una alerta si es así.
3. **updateProduct:** Una función que actualiza un producto existente en el estado `products`.
4. **deleteProduct:** Una función que elimina un producto del estado `products`.
   
### Componentes Utilizados:
1. **ProductList:** Un componente que muestra una lista de productos. Recibe los productos del estado `products` y las funciones `updateProduct` y `deleteProduct` como props.
2. **ProductForm:** Un componente que muestra un formulario para agregar nuevos productos. Recibe la función `addProduct` como prop.

### Otras Características:
1. **Almacenamiento Local:** Utiliza el almacenamiento local del navegador para guardar y cargar la lista de productos. Se utiliza `localStorage` para almacenar la lista de productos en formato JSON.

