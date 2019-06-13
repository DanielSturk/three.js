/**
 * A ReflectionProbe is a source of indirect-specular light
 */
import { Object3D } from './../core/Object3D';
import { Texture } from './../Textures/Texture';

export class ReflectionProbe extends Object3D {
  constructor(
    map: Texture,
    intensity: number
  );

  map: Texture;
  intensity: number;

}
