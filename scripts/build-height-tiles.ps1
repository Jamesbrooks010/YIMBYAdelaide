param(
  [Parameter(Mandatory = $true)]
  [string]$Source,
  [string]$Output = (Join-Path $PSScriptRoot '..\public\maps\adelaide-max-height.pmtiles'),
  [string]$Ogr2Ogr = 'C:\Program Files\QGIS 3.40.8\bin\ogr2ogr.exe'
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path -LiteralPath $Source)) {
  throw "Height GeoPackage not found: $Source"
}

if (-not (Test-Path -LiteralPath $Ogr2Ogr)) {
  throw "ogr2ogr not found: $Ogr2Ogr"
}

$outputPath = [IO.Path]::GetFullPath($Output)
New-Item -ItemType Directory -Force ([IO.Path]::GetDirectoryName($outputPath)) | Out-Null

$env:GDAL_DATA = Join-Path (Split-Path (Split-Path $Ogr2Ogr)) 'apps\gdal\share\gdal'
$sql = @'
SELECT geom,
  CASE
    WHEN storeys IS NULL THEN 0
    WHEN storeys = 1 THEN 1
    WHEN storeys = 2 THEN 2
    WHEN storeys = 3 THEN 3
    WHEN storeys >= 4 AND storeys <= 6 THEN 4
    WHEN storeys >= 7 AND storeys <= 12 THEN 5
    WHEN storeys >= 13 AND storeys < 100 THEN 6
    WHEN storeys = 3225 THEN 7
    ELSE 0
  END AS height_class
FROM "maximum_building_height"
'@

& $Ogr2Ogr `
  -overwrite `
  -f PMTiles $outputPath $Source `
  -nln parcels `
  -t_srs EPSG:3857 `
  -dialect SQLite `
  -sql $sql `
  -dsco 'NAME=Adelaide maximum building heights' `
  -dsco 'DESCRIPTION=Parcel geometry classified by designated maximum building height' `
  -dsco MINZOOM=10 `
  -dsco MAXZOOM=15 `
  -dsco MAX_SIZE=2000000 `
  -dsco MAX_FEATURES=250000 `
  -dsco SIMPLIFICATION=0.8 `
  -dsco SIMPLIFICATION_MAX_ZOOM=0.15 `
  -lco NAME=parcels `
  -lco MINZOOM=10 `
  -lco MAXZOOM=15

if ($LASTEXITCODE -ne 0) {
  throw "Height tile generation failed with exit code $LASTEXITCODE"
}

Get-Item -LiteralPath $outputPath | Select-Object FullName, Length, LastWriteTime
