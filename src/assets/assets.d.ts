declare module '*.png'
// esse arquivo permite o ts entender q todo aquivo terminado em png é um arquivo que pode ser importado

declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}