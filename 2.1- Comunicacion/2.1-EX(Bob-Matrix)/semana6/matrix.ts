export class Matrix {
    private rows: number[][] = [];
    private columns: number[][] = [];
  
    constructor(private description: string) {
      this.parseMatrix();
    }
  
    private parseMatrix(): void {
      this.rows = this.description.split('\n').map(row => row.split(' ').map(Number));
      if (this.rows.length > 0) {
        const rowsLength = this.rows.length;
        const columnsLength = this.rows[0].length;
        for (let i = 0; i < columnsLength; i++) {
          this.columns.push([]);
          for (let j = 0; j < rowsLength; j++) {
            this.columns[i].push(this.rows[j][i]);
          }
        }
      }
    }
  
    getRows(): number[][] {
      return this.rows;
    }
  
    getColumns(): number[][] {
      return this.columns;
    }
  }
  