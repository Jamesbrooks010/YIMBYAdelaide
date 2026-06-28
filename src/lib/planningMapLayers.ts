export interface PlanningMapLegendItem {
  value: number
  label: string
  colour: string
}

export interface PlanningMapLayer {
  id: string
  archive: string
  sourceLayer: string
  property: string
  legend: PlanningMapLegendItem[]
}

export const PLANNING_MAP_LAYERS: Record<string, PlanningMapLayer> = {
  minimumLot: {
    id: 'minimum-lot',
    archive: 'maps/adelaide-min-lot.pmtiles',
    sourceLayer: 'parcels',
    property: 'lot_class',
    legend: [
      {value: 1, label: '80–180 m²', colour: '#b12b37'},
      {value: 2, label: '181–250 m²', colour: '#e47435'},
      {value: 3, label: '251–350 m²', colour: '#f5b54d'},
      {value: 4, label: '351–450 m²', colour: '#f6dc71'},
      {value: 5, label: '451–600 m²', colour: '#9dcd7b'},
      {value: 6, label: '601–900 m²', colour: '#4ea8a0'},
      {value: 7, label: '900+ m²', colour: '#4869a5'},
      {value: 0, label: 'No minimum shown', colour: '#e0e2e1'}
    ]
  }
}
