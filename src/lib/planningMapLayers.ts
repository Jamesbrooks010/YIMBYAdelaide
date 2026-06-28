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
  switchLabel: string
  legendTitle: string
  legendSubtitle: string
  popupTitle: string
  legend: PlanningMapLegendItem[]
}

export const PLANNING_MAP_LAYERS: Record<string, PlanningMapLayer> = {
  minimumLot: {
    id: 'minimum-lot',
    archive: 'maps/adelaide-min-lot.pmtiles',
    sourceLayer: 'parcels',
    property: 'lot_class',
    switchLabel: 'Subdivision',
    legendTitle: 'Minimum lot size',
    legendSubtitle: 'Subdivision rule',
    popupTitle: 'Minimum lot size',
    legend: [
      {value: 1, label: '80–180 m²', colour: '#b12b37'},
      {value: 2, label: '181–250 m²', colour: '#e47435'},
      {value: 3, label: '251–350 m²', colour: '#f5b54d'},
      {value: 4, label: '351–450 m²', colour: '#f6dc71'},
      {value: 5, label: '451–600 m²', colour: '#9dcd7b'},
      {value: 6, label: '601–900 m²', colour: '#4ea8a0'},
      {value: 7, label: '900+ m²', colour: '#4869a5'},
      {value: 0, label: 'No designated minimum', colour: '#e2a9a9'}
    ]
  },
  maximumHeight: {
    id: 'maximum-height',
    archive: 'maps/adelaide-max-height.pmtiles',
    sourceLayer: 'parcels',
    property: 'height_class',
    switchLabel: 'Building height',
    legendTitle: 'Maximum building height',
    legendSubtitle: 'Planning rule',
    popupTitle: 'Maximum building height',
    legend: [
      {value: 1, label: '1 storey', colour: '#9e2a2b'},
      {value: 2, label: '2 storeys', colour: '#d95f3b'},
      {value: 3, label: '3 storeys', colour: '#e9b949'},
      {value: 4, label: '4–6 storeys', colour: '#36a269'},
      {value: 5, label: '7–12 storeys', colour: '#008c95'},
      {value: 6, label: '13+ storeys', colour: '#2856a6'},
      {value: 7, label: 'CBD / special height control', colour: '#6e3fa3'},
      {value: 0, label: 'No designated maximum', colour: '#e2a9a9'}
    ]
  }
}
