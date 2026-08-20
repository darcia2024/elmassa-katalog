/**
 * Google Apps Script Backend (Optional)
 * Untuk sinkronisasi otomatis Galeri Paket El Massa dengan Google Sheets
 * 
 * Petunjuk Penggunaan:
 * 1. Buka Google Sheets baru, beri nama "Database El Massa Tour".
 * 2. Buat sheet/tab: "Packages", "Schedules", "Settings", "Admins".
 * 3. Buka Extensions > Apps Script, paste kode ini ke Code.gs.
 * 4. Deploy > New Deployment > Web App (Execute as: Me, Who has access: Anyone).
 */

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('El Massa Tour & Travel | Galeri Paket Umroh & Haji')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getAppData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Baca Packages
  const pkgSheet = ss.getSheetByName('Packages');
  let packages = [];
  if (pkgSheet && pkgSheet.getLastRow() > 1) {
    const data = pkgSheet.getDataRange().getValues();
    const headers = data[0];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      let pkg = {};
      headers.forEach((h, idx) => {
        pkg[h] = row[idx];
      });
      if (pkg.tags) {
        pkg.tags = String(pkg.tags).split(',').map(s => s.trim());
      }
      if (pkg.itinerary && typeof pkg.itinerary === 'string') {
        try { pkg.itinerary = JSON.parse(pkg.itinerary); } catch (e) { pkg.itinerary = []; }
      }
      if (pkg.customIncludes && typeof pkg.customIncludes === 'string') {
        try { pkg.customIncludes = JSON.parse(pkg.customIncludes); } catch (e) { pkg.customIncludes = []; }
      }
      if (pkg.customExcludes && typeof pkg.customExcludes === 'string') {
        try { pkg.customExcludes = JSON.parse(pkg.customExcludes); } catch (e) { pkg.customExcludes = []; }
      }
      packages.push(pkg);
    }
  }

  // Baca Schedules
  const schSheet = ss.getSheetByName('Schedules');
  let schedules = [];
  if (schSheet && schSheet.getLastRow() > 1) {
    const data = schSheet.getDataRange().getValues();
    const headers = data[0];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      let sch = {};
      headers.forEach((h, idx) => {
        sch[h] = row[idx];
      });
      schedules.push(sch);
    }
  }

  return {
    ok: true,
    data: {
      packages: packages,
      schedules: schedules,
      lastUpdate: new Date().toISOString()
    }
  };
}
