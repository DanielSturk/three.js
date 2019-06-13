/**
 * A ReflectionProbe is a source of indirect-specular light
 */
import { Object3D } from '../core/Object3D';

function ReflectionProbe( map, intensity ) {

  Object3D.call(this);

  this.map = map;
  this.intensity = ( intensity === undefined ) ? 1 : intensity;

}

ReflectionProbe.prototype = Object.assign( Object.create( Object3D.prototype ), {

	constructor: ReflectionProbe,

	isReflectionProbe: true,

	copy: function ( source ) {

    this.map = source.map;

		return this;

	},

	toJSON: function ( meta ) {

    // todo

		return data;

	}

} );

export { ReflectionProbe };
