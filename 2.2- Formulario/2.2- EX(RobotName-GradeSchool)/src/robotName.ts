const generateRandomName = (): string => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letters = alphabet[Math.floor(Math.random() * 26)] + alphabet[Math.floor(Math.random() * 26)];
  const digits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return letters + digits;
};

class NameManager {
  private usedNames: Set<string> = new Set();

  public getUniqueName(): string {
    let name;
    do {
      name = generateRandomName();
    } while (this.usedNames.has(name));
    this.usedNames.add(name);
    return name;
  }

  public releaseAllNames(): void {
    this.usedNames.clear();
  }
}

const nameManager = new NameManager();

export class Robot {
  private _name: string | null = null;

  public get name(): string {
    if (!this._name) {
      this._name = nameManager.getUniqueName();
    }
    return this._name;
  }

  public resetName(): void {
    this._name = null;
  }

  public static releaseNames(): void {
    nameManager.releaseAllNames();
  }
}
