function doPost(e) {
  try {
    // Sheet ID dari Google Sheets
    const SHEET_ID = '1XYiPYyFAF5duTfazTwSOqQdnEYgccMwO0LF0j-RnngI';
    const sheet = SpreadsheetApp.openById(SHEET_ID);
    const ws = sheet.getSheetByName('Responses');
    
    // Parse data dari POST request
    const data = JSON.parse(e.postData.contents);
    
    // Append data ke sheet
    ws.appendRow([
      new Date(),
      data.nama,
      data.wa,
      data.kehadiran,
      data.pesan
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error', 
      message: error.toString()
    }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}