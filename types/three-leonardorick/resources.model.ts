import { Texture } from 'three';
// import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

export interface ResourcesModel {
  items: { [key: string]: any| Texture };
  loaded: Ref<boolean>;
}
