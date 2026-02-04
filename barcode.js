// ========================================
// BARCODE SCANNER VERWALTUNG
// ========================================
// Verhindert mehrfaches Springen zum gleichen Kapitel
// wenn der Scanner kontinuierlich scannt

let lastScannedChapter = null;  // Speichert die zuletzt gescannte Kapitelzahl

// ========================================
// IDLE TIMER
// ========================================
let lastActivityTime = 0;         // Zeitpunkt der letzten Aktivität
const IDLE_TIMEOUT = 5 * 60 * 1000; // 30 Sekunden in Millisekunden (Test-Modus)


/**
 * Verarbeitet gescannte Barcode-Eingaben
 * Springt nur zum Kapitel, wenn eine andere Zahl als zuvor gescannt wurde
 * @param {number} chapterNumber - Die gescannte Kapitelzahl (1-5)
 */
function handleBarcodeInput(chapterNumber) {
  // Aktivität registrieren
  updateActivity();
  
  // Prüfen ob die Eingabe gültig ist (1-5)
  if (chapterNumber < 1 || chapterNumber > 5) {
    console.warn("Ungültige Kapitelzahl:", chapterNumber);
    return;
  }

  // Nur zum Kapitel springen, wenn es eine ANDERE Zahl ist
  if (chapterNumber !== lastScannedChapter) {
    console.log(`📖 Barcode erkannt: Kapitel ${chapterNumber} (vorher: ${lastScannedChapter || 'keins'})`);
    
    lastScannedChapter = chapterNumber;
    goToChapter(chapterNumber);  // Funktion aus input.js
    
    // Medien entsperren falls noch nicht geschehen
    if (!mediaUnlocked) {
      mediaUnlocked = true;
      console.log("媒体解锁 ✅");
    }
  } else {
    // Gleiche Zahl wie vorher - ignorieren
    console.log(`🔄 Gleiche Kapitelzahl erneut gescannt (${chapterNumber}) - ignoriert`);
  }
}


/**
 * Reset der letzten gescannten Kapitelzahl
 * Nützlich wenn manuell navigiert wird
 */
function resetBarcodeTracking() {
  lastScannedChapter = null;
  console.log("🔓 Barcode-Tracking zurückgesetzt");
}


/**
 * Aktualisiert den Aktivitäts-Timer
 * Wird bei jeder Benutzerinteraktion aufgerufen
 */
function updateActivity() {
  lastActivityTime = millis();
  console.log("🔄 Aktivität registriert - Timer zurückgesetzt");
}


/**
 * Prüft ob 30 Sekunden Inaktivität vergangen sind
 * Springt automatisch zur Idle-Seite (erste Seite der App)
 */
function checkIdleTimeout() {
  if (lastActivityTime === 0) {
    // Initialisierung beim ersten Aufruf
    lastActivityTime = millis();
    console.log("⏱️ Idle-Timer initialisiert");
    return;
  }
  
  let timeSinceLastActivity = millis() - lastActivityTime;
  
  if (timeSinceLastActivity >= IDLE_TIMEOUT) {
    console.log(`⏱️ ${IDLE_TIMEOUT/1000} Sekunden Inaktivität - Springe zur Idle-Seite (Index 0)`);
    
    // Nur springen wenn wir nicht bereits auf der ersten Seite sind
    if (currentPage !== 0) {
      currentPage = 0;
      resetText();
      console.log("✅ Zurück zur Start-Seite");
    }
    
    lastActivityTime = millis();  // Timer zurücksetzen
  }
}


/**
 * Gibt die aktuelle zuletzt gescannte Kapitelzahl zurück
 * @returns {number|null}
 */
function getLastScannedChapter() {
  return lastScannedChapter;
}