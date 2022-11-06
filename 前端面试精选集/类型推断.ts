/**
 * 一个 JavaScript 文件如下，请通过animalFactory的用法来推断其对应的TypeScript 声明文件
 *
 * createAnimal("dog");
 * createAnimal("giraffe", {name: "ronald"});
 * createAnimal("panda", {name: "bob", height: 400});
 * createAnimal("cat", {name: 'jack', weight: 32});
 */

declare namespace AnimalFactory {
	interface AnimalOptions {
		name: string;
		height?: number;
		weight?: number;
	}

	export type create = (name: string, animalOptions?: AnimalOptions) => void;
}

declare var createAnimal: AnimalFactory.create;
