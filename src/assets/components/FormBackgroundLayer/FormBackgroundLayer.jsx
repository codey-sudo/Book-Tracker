// import React from "react";
// import styles from "./FormBackgroundLayer.module.css";
// import FieldSet from "../FieldSet/FieldSet";
// function FormBackgroundLayer() {
//   return (
//     <div className={styles.formBackground}>
//       <FieldSet />
//     </div>
//   );
// }

// export default FormBackgroundLayer;

import React from "react";

import Styles from "./FormBackgroundLayer.module.css";

function FormBackgroundLayer({ children }) {
  return <div className={Styles.formBackground}>{children}</div>;
}

export default FormBackgroundLayer;
