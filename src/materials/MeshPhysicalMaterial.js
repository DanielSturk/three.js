import { MeshStandardMaterial } from './MeshStandardMaterial.js';

/**
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *  reflectivity: <float>
 *  clearCoat: <float>
 *  clearCoatRoughness: <float>
 * }
 */

function MeshPhysicalMaterial( parameters ) {

	MeshStandardMaterial.call( this );

	this.defines = { 'PHYSICAL': '' };

	this.type = 'MeshPhysicalMaterial';

	this.reflectivity = 0.5; // maps to F0 = 0.04

	this.clearCoat = 0.0;
	this.clearCoatRoughness = 0.0;

	this.anisotropy = 0.0; // valid range is [-1,1]. -1 is max vertical elongation, 0 is normal, +1 is max horizontal elongation
	this.anisotropyMap = null; // Maps to [0, 1] (horizontal) anisotropy. Only R is read and considered to be anisotropy
	this.anisotropyRotation = 0.0; // [0, 1] maps to a full 360 degree rotation
	this.anisotropyRotationMap = null;  // only R is read and considered to be anisotropyRotation

	this.setValues( parameters );

}

MeshPhysicalMaterial.prototype = Object.create( MeshStandardMaterial.prototype );
MeshPhysicalMaterial.prototype.constructor = MeshPhysicalMaterial;

MeshPhysicalMaterial.prototype.isMeshPhysicalMaterial = true;

MeshPhysicalMaterial.prototype.copy = function ( source ) {

	MeshStandardMaterial.prototype.copy.call( this, source );

	this.defines = { 'PHYSICAL': '' };

	this.reflectivity = source.reflectivity;

	this.clearCoat = source.clearCoat;
	this.clearCoatRoughness = source.clearCoatRoughness;

	this.anisotropy = source.anisotropy;
	this.anisotropyMap = source.anisotropyMap;
	this.anisotropyRotation = source.anisotropyRotation;
	this.anisotropyRotationMap = source.anisotropyRotationMap;

	return this;

};


export { MeshPhysicalMaterial };
