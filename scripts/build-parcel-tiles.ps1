param(
  [Parameter(Mandatory = $true)]
  [string]$Source,
  [string]$Output = (Join-Path $PSScriptRoot '..\public\maps\adelaide-min-lot.pmtiles'),
  [string]$Ogr2Ogr = 'C:\Program Files\QGIS 3.40.8\bin\ogr2ogr.exe'
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path -LiteralPath $Source)) {
  throw "Parcel GeoPackage not found: $Source"
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
    WHEN min_lot IS NULL THEN 0
    WHEN min_lot <= 180 THEN 1
    WHEN min_lot <= 250 THEN 2
    WHEN min_lot <= 350 THEN 3
    WHEN min_lot <= 450 THEN 4
    WHEN min_lot <= 600 THEN 5
    WHEN min_lot <= 900 THEN 6
    ELSE 7
  END AS lot_class
FROM "sa-parcels"
'@

& $Ogr2Ogr `
  -overwrite `
  -f PMTiles $outputPath $Source `
  -nln parcels `
  -t_srs EPSG:3857 `
  -dialect SQLite `
  -sql $sql `
  -dsco 'NAME=Adelaide minimum lot sizes' `
  -dsco 'DESCRIPTION=Parcel geometry classified by minimum subdivision lot size' `
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
  throw "Tile generation failed with exit code $LASTEXITCODE"
}

Get-Item -LiteralPath $outputPath | Select-Object FullName, Length, LastWriteTime
