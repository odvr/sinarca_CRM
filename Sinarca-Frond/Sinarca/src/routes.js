/**
=========================================================
*Sinarca
=========================================================

*/

/** 
  Todas las rutas para Material Dashboard 2 React se agregan aquí,
  Puede agregar una nueva ruta, personalizar las rutas y eliminar las rutas aquí.

  Una vez que agregue una nueva ruta en este archivo, será visible automáticamente en
  el Sidenav.

  Para agregar una nueva ruta, puede seguir las rutas existentes en la matriz de rutas.
  1. La clave `type` con el valor `collapse` se usa para una ruta.
  2. La tecla `tipo` con el valor `título` se utiliza para un título dentro de Sidenav.
  3. La tecla `tipo` con el valor `divider` se usa para dividir entre elementos de Sidenav.
  4. La tecla `nombre` se utiliza para el nombre de la ruta en Sidenav.
  5. La tecla `key` se utiliza para la clave de la ruta (te ayudará con la clave de apoyo dentro de un bucle).
  6. La tecla `icon` se utiliza para el icono de la ruta en el Sidenav, hay que añadir un nodo.
  7. La tecla `collapse` se utiliza para crear un elemento plegable en el Sidenav que tiene otras rutas
  inside (rutas anidadas), debe pasar las rutas anidadas dentro de una matriz como un valor para la clave `collapse`.
  8. La tecla `ruta` se usa para almacenar la ubicación de la ruta que se usa para el enrutador de reacción.
  9. La clave `href` se usa para almacenar la ubicación de los enlaces externos.
  10. La tecla 'título' es solo para el elemento con el tipo de 'título' y se usa para el texto del título en Sidenav.
  10. La clave `componente` se utiliza para almacenar el componente de su ruta.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tablas",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Facturación",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  /*
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: <RTL />,
  },
  */
  {
    type: "collapse",
    name: "Notificaciones",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Perfil",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  /*
  {
    type: "collapse",
    name: "Registrarse",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Ingresar",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  */
];

export default routes;
