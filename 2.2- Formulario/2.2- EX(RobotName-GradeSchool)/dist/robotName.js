"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
const generateRandomName = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = alphabet[Math.floor(Math.random() * 26)] + alphabet[Math.floor(Math.random() * 26)];
    const digits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return letters + digits;
};
class NameManager {
    constructor() {
        this.usedNames = new Set();
    }
    getUniqueName() {
        let name;
        do {
            name = generateRandomName();
        } while (this.usedNames.has(name));
        this.usedNames.add(name);
        return name;
    }
    releaseAllNames() {
        this.usedNames.clear();
    }
}
const nameManager = new NameManager();
class Robot {
    constructor() {
        this._name = null;
    }
    get name() {
        if (!this._name) {
            this._name = nameManager.getUniqueName();
        }
        return this._name;
    }
    resetName() {
        this._name = null;
    }
    static releaseNames() {
        nameManager.releaseAllNames();
    }
}
exports.Robot = Robot;
