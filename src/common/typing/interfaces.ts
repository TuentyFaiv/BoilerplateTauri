export interface PositionDto {
  position: string;
  name: string;
  amount: string;
}

export interface TopDto extends PositionDto {
  fullName: string;
}

export interface Tops {
  first: TopDto[];
  second: PositionDto[];
  third: PositionDto[];
  week: PositionDto[];
  month: PositionDto[];
}

export interface Position {
  num: string;
  crmAgente: string;
  transactions: string;
}

export interface Positions {
  top10: Position[];
  topM: Position[];
  topW: Position[];
}

export interface RankingUpdated {
  data: {
    agent: string;
    top10: Position[];
    topM: Position[];
    topW: Position[];
    ammount: string;
    action: string;
  }
}