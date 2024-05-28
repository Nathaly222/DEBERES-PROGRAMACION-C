export function isPangram(value: string): boolean {
    const alphabetSet = new Set<string>('abcdefghijklmnopqrstuvwxyz');
  
    for (const char of value.toLowerCase()) {
      alphabetSet.delete(char);
      if (alphabetSet.size === 0) {
        return true; 
      }
    }
  
    return false; 
  }
