const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ]
  const colorCode=(color: string): number => COLORS.indexOf(color)
  interface IUnits {
    name: string
    numberOfZeros: number
    representation: string
  }
  
  const UNITS: IUnits[] = [
    {
      name: 'giga',
      numberOfZeros: 9,
      representation: '000000000',
    },
    {
      name: 'mega',
      numberOfZeros: 6,
      representation: '000000',
    },
    {
      name: 'kilo',
      numberOfZeros: 3,
      representation: '000',
    },
  ]
  