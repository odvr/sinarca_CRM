/**
=========================================================
Sinarca
=========================================================

*/

import { forwardRef } from "react";

// prop-types es una biblioteca para la comprobación tipográfica de accesorios
import PropTypes from "prop-types";

// Estilos personalizados para MDAvatar
import MDAvatarRoot from "components/MDAvatar/MDAvatarRoot";

const MDAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <MDAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Establecer valores predeterminados para los accesorios de MDAvatar
MDAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

// Puntales de comprobación tipográfica para el MDAvatar
MDAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default MDAvatar;
