/*
  Deutsch Resource
 */

const resourceDE = {
  // Views --------

  // Login
  loginButton: 'Anmeldung',
  registerButton: 'Anmelden',
  forgotPassword: 'Passwort vergessen?',
  emailAddress: 'E-MAIL-ADRESSE',
  emailPH: 'Ihre E-Mail-Adresse',
  password: 'PASSWORT',
  passwordPH: 'Ihr Passwort',

  // RegisterLoginCard
  haveAccount: 'Haben Sie schon ein TraFinScout-Konto?',
  haveNotAccount: 'Haben Sie noch kein TraFinScout-Konto?',
  registerNow: 'Jetzt anmelden',
  createAccount: 'Konto erstellen',

  // Home
  editCustomerProfile: 'Kundenprofil ergänzen',
  customerProfileMessage: 'Um Anfragen zu senden, vervollständigen Sie bitte Ihr Kundenprofil.',
  customProfileMessage: 'Um Anfragen zu senden, vervollständigen Sie bitte Ihr Kundenprofil.',
  welcomeUserArea: 'Willkommen in Ihrem persönlichen Nutzerbereich!',
  createNewRequest: 'Neue Anfrage erstellen',
  productOverview: 'Weitere TraFinScout Produkte im Überblick',
  searchLetterInfo: 'Akkreditivbestätigung suchen',
  searchLetterDescription: 'Akkreditive und Zahlungsgarantien sind häufig genutzte, gute Instrumente zur Absicherung von Zahlungsrisiken.',
  createRequest: 'Anfrage erstellen',
  lookForBuyer: 'Bestellerkredite ab 5 Mio. Euro suchen',
  lookForBuyerDescription: 'Bestellerkredite sind eine attraktive Möglichkeit für Ihre Kunden in Schwellen- und Entwicklungsländern, Investitionsgüter mittel- bis langfristig zu finanzieren.',
  searchForfaiting: 'Forfaitierung ab 5 Mio. Euro suchen',
  searchForfaitingDescription: 'Manchmal ist der Lieferantenkredit der schnellere und einfachere Weg, Ihre Kunden zu finanzieren. Damit die Liquidität trotzdem stimmt verkaufen Sie einfach Ihre Forderungen gegenüber Ihrem Kunden (Forfaitierung).',
  findCreditInsurance: 'Kreditversicherungen suchen',
  findCreditInsuranceDescription: 'Lieferungen an und die Finanzierung von Kunden im Ausland ist immer Risiken verbunden. Stellen Sie sicher, dass vereinbarten Zahlungen tatsächlich eingehen. Dabei helfen staatliche Exportkreditgarantien (Hermesdeckung) und private Kreditversicherungen.',
  exportTicket: 'Small Ticket Exportfinanzierung',
  exportTicketDescription: 'Finanzieren Sie Ihre Exportaufträge zwischen 250.000 und 5.000.000 Euro schnell und einfach mit uns.',
  addedAt: 'Hinzugefügt am: {{ date }}',
  admin: 'Administrator: {{ firstName }} {{ lastName }}',
  editor: 'Bearbeiter',
  salesPartnerCounter: 'Betreuender Vertriebspartner',
  changeCompany: 'Firma wechseln',
  affiliates: 'Verbundene Unternehmen',
  goParent: 'Go Parent',
  successInvitation: 'Ihre Einladung wurde erfolgreich',
  exporterCounter: 'Betreute Exporteure',

  // RequestTable
  ongoingInquiries: 'Laufende Anfragen',
  inquiryTitle: 'Anfragetitel',
  art: 'Art',
  status: 'Status',
  finished: 'fertig',
  lastChange: 'Letzte Bearbeitung',
  processRequest: 'Anfrage bearbeiten',

  // NEW REQUEST
  createRequestNow: 'Jetzt Anfrage erstellen',
  nextSteps: 'Nächste Schritte',
  overview: 'Übersicht',
  productSelection: 'Produktauswahl',
  requestTitle: 'Titel der Anfrage',
  requestTitlePH: 'z.B. Kundenname oder Vorgangsnummer',

  // PasswordReset
  emailAddressLabel: 'E-Mail-Adresse',
  resetPassword: 'Passwort zurücksetzen',
  successReset: 'Bitte überprüfen Sie Ihr Postfach, und klicken Sie in der TraFinScout E-Mail auf den Link zum Zurücksetzen des Passworts.',
  resetPasswordTitle: 'Ihr Passwort zurücksetzten',
  sendEmailText: 'Wir haben Ihnen eine E-Mail geschickt.',
  backToLogin: 'Zurück zur Anmeldung',

  // Password
  passwordRule1: 'mindestens acht Zeichen lang sein.',
  passwordRule2: 'mindestens einen Kleinbuchstaben und einen Großbuchstaben enthalten.',
  passwordRule3: 'mindestens eine Zahl enthalten.',
  passwordRule4: 'mindestens ein Sonderzeichen.',
  enterNewPassword: 'Geben Sie Ihr neues Passwort ein.',
  saveNewPassword: 'Neues Passwort speichern',
  backToHome: 'Zurück zu Home',
  validatePassword: 'Das Passwort sollte:',
  passwordResetFailed: 'Password reset failed',
  yourNewPassword: 'Ihr neues Passwort',

  // ProfileUpdate
  successProfileUpdate: 'Aktualisierung erfolgreich',
  personalInfo: 'Persönliche Informationen',
  changePassword: 'Passwort verändern',
  exporterInfo: 'Exporteur Informationen',
  saveProfile: 'Profil speichern',
  editProfile: 'Profil bearbeiten',
  yes: 'Ja',
  no: 'Nein',
  updateExporterProfile: 'Kunden anlegen',
  updateExporterProfileMessage: 'Um Anfragen zu senden, legen Sie bitte ein Kundenprofil an.',

  // personalForm
  salute: 'Anrede',
  firstName: 'Vorname',
  firstNamePH: 'Ihre Vorname',
  lastName: 'Nachname',
  lastNamePH: 'Ihre Nachname',
  company: 'Unternehmen',
  companyPH: 'z.B. Firmenname GmbH',
  phoneNumber: 'Telefonnummer (Optional)',
  phoneNumberPH: 'z.B. +49187625375',
  phoneNumberFormat: 'Bitte geben Sie Ihre Telefonnummer im Format +49187625375 oder 0187625375 ein.',
  email: 'GESCHÄFTLICHE E-MAIL-ADRESSE',
  saluteExporter: 'Name des Ansprechpartners beim Kunden',
  exporterFunction: 'Funktion im Unternehmen',
  exporterFunctionPH: 'Funktion',

  // exporterForm
  nameCompany: 'Firmenname',
  nameCompanyPH: 'Ihr Firmenname',
  street: 'Straße / Nr.',
  streetPH: 'z.B. Goethestr. 23, 3.Etage',
  place: 'Ort',
  placePH: 'Frankfurt a.M.',
  plz: 'PLZ',
  plzPH: '60353',
  land: 'Land',
  landPH: 'Deutschland',
  industry: 'Branche',
  industryPH: 'Wählen Sie eine Branche',
  hasCompanyGroup: 'Gehört Ihr Unternehmen zu einer Unternehmensgruppe (Konzern)?',
  groupName: 'Name Ihrer Unternehmensgruppe oder Muttergesellschaft',
  groupNamePH: 'z.B. Fincite Group AG',
  coverageNumber: 'Geben Sie bitte Ihre Deckungsnehmer Nr. bei Euler Hermes an (wenn bekannt).',
  coverageNumberPH: 'z.B. Deckungsnehmer Nr.',
  employees: 'Anzahl der Mitarbeiter',
  employeesPH: '0 - 50 Personen',
  revenue: 'Umsatz im letzten vollen Geschäftsjahr',
  revenuePH: '< 10 Mio.€',
  exportQuote: 'Wie hoch ist Ihre Exportquote',
  exportQuotePH: '< 25%',
  exportOrder: 'Summe eines durchschnittlichen Exportauftrages',
  exportOrderPH: '250.000 - 500.000',
  rateExperience: 'Wie schätzen Sie Ihre Erfahrung mit Exportfinanzierungen und Deckungsinstrumenten ein?',

  // Register
  successRegister: 'Vielen Dank für Ihre Registrierung!',
  checkEmailToActive: 'Bitte checken Sie Ihre Email und aktivieren Sie Ihr Konto.',
  passwordValidation: 'Das Passwort sollte',
  woman: 'Frau',
  mr: 'Herr',
  clientType: 'Sie registrieren sich als',
  clientTypePH: 'Wählen Sie Ihr Profil',
  termsCondition: 'Bitte akzeptieren Sie die Einwilligungserklärung und Datenschutzerklärung um fortzufahren.',
  agreeTC1: 'Ich bin mit der Verarbeitung und Nutzung meiner',
  agreeTC2: 'Daten gemäß',
  termsOfUse: 'Nutzungsbedingungen',
  dataProtection: 'Datenschutzerklärung',
  agreeTC3: 'einverstanden',
  and: 'und',
  companyNotExists: 'Dieses Unternehmen ist bereits registriert. Für weitere Informationen, bitte kontaktieren Sie uns: +49 69 153259345',
  jobTitle: 'Job title (Optional)',
  jobTitlePH: 'Job Title',

  // Sales partner types
  freelancerCompany: 'Selbstständig',
  partnershipCompany: 'Personengesellschaft',
  corporationCompany: 'Kapitalgesellschaft',
  salesUpdateProfile: 'Unternehmensprofil Partner ergänzen',
  addExporterToInquiry: 'Um Anfragen zu erstellen, fügen Sie bitte Exporteure hinzu.',
  addExporter: 'Exporteur hinzufügen',

  // RequestForm

  // Control
  dealBtn: 'Dokumentenliste zum Exporteur senden',

  // Header
  sendRequestQuestion: 'Möchten Sie Ihre Anfrage absenden?',
  sendRequestExporter: 'Möchten Sie Ihre Anfrage zu Ihre Exporteur senden?',
  successSendExporterRequest: 'Ihr Anfrage wurde erfolgreich zu Ihre Exporteur gesendet.',
  successSendRequest: 'Ihr Anfrage wurde erfolgreich gesendet.',
  followRequestStatus: 'Sie können den Status Ihrer Anfrage jederzeit unter “Deal Tracking” verfolgen.',
  abort: 'Abbrechen',
  submit: 'Absenden',
  submitExporter: 'Zum Exporteur senden',
  goToDeal: 'Zu Deal Tracking',
  lastSave: 'Zuletzt gespeichert um',
  of: 'von',
  the: 'Die',
  continueLater: 'Später forsetzen',
  saveContinueLater: 'Speichern & später forsetzen',

  // Overview
  downloadPDF: 'PDF herunterladen',
  finishedRequest: 'Fertig',
  inProgressRequest: 'In Bearbeitung',
  toEdit: 'Bearbeiten',
  preview: 'Vorschau',

  // ReceivedDocuments
  documentsAvailableForExporters: 'Hier finden Sie alle Dokumente, die wir für Exporteur bereitgestellt haben',
  documentsAvailableForYou: 'Hier finden Sie alle Dokumente, die wir für Sie bereitgestellt haben',
  documentsExporterProvidesForYou: 'Hier finden Sie alle Dokumente, die Exporteur für uns bereitgestellt haben',
  documentsYouProvides: 'Hier finden Sie alle Dokumente, die Sie für uns bereitgestellt haben',

  // ReceivedDocuments
  fileName: 'Dateiname',
  step: 'Schritt',
  date: 'Datum',

  // StepForm
  incompleteFormMessage: 'Bitte beantworten Sie die markierten Fragen um Ihre Anfrage fertigzustellen und zu senden',
  toNextStep: 'Zum nächsten Schritt',
  saveGoNextStep: 'Speichern & zum nächsten Schritt',

  // StepsSidebar
  documentsReceived: 'Erhaltene Unterlagen',
  uploadDocuments: 'Hochgeladene Dokumente',
  dealStatusControl: 'Deal Status Control',

  // UploadDocument
  toUploadDocument: 'Dokumente hochladen',
  dealNumber: 'Deal-Nummer',
  projectName: 'Projektbezeichnung',
  lastUpdateOn: 'Letzte Aktualisierung am',
  requiredDocuments: 'Benötigte Dokumente',
  uploadCoverApplication: 'Bitte laden Sie Ihren Deckungsantrag hier hoch',
  otherDocuments: 'Sonstige Unterlagen',

  // UploadModalButton
  upload: 'Hochladen',

  // Authentication
  wrongPassword: 'Falsches Passwort',
  basicAuthentication: 'Basisauthentifizierung',
  authorize: 'Autorisieren',

  // Contact
  subject: 'Bitte teilen Sie uns Ihr Thema mit',
  subjectPH: 'Bitte schreiben Sie hier',
  contactYou: 'Wann können wir Sie kontaktieren?',
  contactAnytime: 'Ich bin flexibel, kontaktieren Sie mich jederzeit',
  howContactYou: 'Wie sollen wir Sie kontaktieren?',
  contactByEmail: 'Über die in meinem Konto hinterlegte Email',
  willContactYouByEmail: 'Wir kontaktieren Sie über die Email, mit der Sie sich bei TraFinScout angemeldet haben.',
  viaAnotherEmail: 'Über eine andere Email',
  yourEmailAddress: 'Ihre Email Adresse',
  callMeAtNumber: 'Rufen Sie mich unter folgender Nummer an',
  callMeAtNumberPH: 'z.B. +49187625375',
  thanksForContactUs: 'Danke, dass sie uns kontaktiert haben. Wir werden uns kurzfristig bei Ihnen melden.',
  makeAnAppointment: 'Vereinbaren Sie einen Termin mit uns',
  appointmentDescription: 'Sie möchten mit uns sprechen? Gerne. Lassen Sie uns nachfolgend einfach wissen,\n'
    + 'wann wir Sie am besten erreichen. Sie können uns auch\n'
    + 'jederzeit gerne über die E-Mail und Telefonnummer rechts direkt kontaktieren.',
  agreementText: 'Mit dem Klicken auf “Absenden” stimme ich zu, dass mich die TraFinScout GmbH per\n'
    + 'E-Mail oder ggf. telefonisch (bei Angabe meiner Telefonnummer) zur Bearbeitung\n'
    + 'meiner Anfrage kontaktieren darf. Dies erfolgt in Übereinstimmung mit unserer\n'
    + 'Datenschutzerklärung.',
  sendAppointmentRequest: 'Terminanfrage absenden',
  howToFindUs: 'So finden Sie uns',
  address: 'Adresse',
  addressExample: 'Solmsstr. 4, 60486 Frankfurt',
  scheduleExample: '(Montag – Freitag 9:00 – 18:00)',
  contact: 'Kontakt',
  contactExample: '+49 (0)69 153 249 345',
  emailExample: 'kundenservice@trafinscout.com',

  // Teams Management
  teamsManagement: 'Teamverwaltung',
  editCompanyProfile: 'Firmenprofil bearbeiten',
  added: 'Hinzugefügt',
  companyType: 'Unternehmen Typ',
  administrator: 'Administrator',
  editorTab: 'Bearbeiter',
  partner: 'Verbundene Unternehmen',
  supervisor: 'Betreuende Vertriebspartner',
  companies: 'Unternehmen',
  function: 'Funktion',
  registeredOn: 'Angemeldet am',
  addSalesPartner: 'Vertriebspartner hinzufügen',
  addSingleMember: 'Bearbeiter einladen',
  addGroupMember: 'Tochterunternehmen hinzufügen',
  addSalesPartnerFooter: 'Wenn die Rechte eines Vertriebspartners verändert werden sollen, kontaktieren sie uns bitte.',
  addSingleMemberFooter: 'Wenn die Rechte eines Bearbeiters verändert werden sollen, kontaktieren sie uns bitte.',
  addGroupMemberFooter: 'Wenn die Rechte eines Bearbeiters verändert werden sollen, kontaktieren sie uns bitte.',
  searchPH: 'Alle Vertriebspartner',
  remove: 'Löschen',
  editorRightsModal: 'Rechte der',
  individual: 'Bearbeiter',
  group: 'Tochterunternehmen',
  salesGroup: 'Vertriebspartner',
  sendInvitation: 'Einladung senden',
  removeUser: 'Möchten Sie {{ userName }} LÖSCHEN?',
  removeUserConfirm: '{{ userName }} wurde erfolgreich gelöscht.',
  exporterTeam: 'Exporteure',

  // DealTracking
  product: 'Produkt',
  statusUpdateOn: 'Status aktualisiert am',
  importer: 'Importeur',
  viewRequest: 'Anfrage ansehen',
  dealTracking: 'Deal Tracking',

  // Deal Filter
  filter: 'Filter',
  dealNumberLabel: 'Deal Number',
  dealNumberPlaceholder: 'Deal Number',
  productLabel: 'Produkt',
  productPlaceholder: 'Produkt',
  statusLabel: 'Status',
  statusPlaceholder: 'Status',
  importerLabel: 'Importeur',
  importerPlaceholder: 'Importeur',
  clear: 'Clear',
  clearAllFilters: 'Clear all filters',

  // InvitationRegister
  exporter: 'Exporteur',
  salesPartner: 'VertriebsPartner',
  teamMember: 'Bearbeiter',

  // Components -------

  // UserProfile
  successProfileSaved: 'Danke! Ihr Kundenprofil wurde erfolgreich gespeichert.',
  clientProfile: 'Kundenprofil',
  stepCounter: 'Schritte <1>{{ step }}</1>/{{ maxStep }}',
  next: 'Fortfahren',
  additionalEntryDescription: 'Sie können weitere Bearbeiter und verbundene Unternehmen auch jederzeit in der Teamverwaltung hinzufügen.',
  inviteEditor: 'Weitere Bearbeiter einladen',
  editorRights: 'Rechte der Bearbeiter',
  addEmail: 'E-MAIL-ADRESSE HINZUFÜGEN',
  addCompanyTitle: 'Verbundene Unternehmen hinzufügen',
  companyNameLabel: 'NAMEN DES UNTERNEHMENS',
  singleCompany: 'Einzelnes Unternehmen',
  groupCompany: 'Obergesellschaft (Gruppe/Konzern)',
  parentCompany: 'Tochterunternehmen (Gruppe/Konzern)',
  companyTypeLabel: 'Art des Unternehmens',
  parentCompanyLabel: 'Name Ihrer Unternehmensgruppe oder Muttergesellschaft',
  emailError: 'Ungültiges Format "{{ errorValue }}"',
  commonEmailError: 'Ungültiges Format',
  successEmails: 'The members were added to this company succesfully.',
  add: 'ADD',
  emailBackendError: 'Diese E-Mail {{ errorValue }} ist nicht erlaubt.',

  // Rights Editor
  dashboardAccess: 'Zugriff auf das Dashboard',
  addAccess: 'Neu Anfragen erstellen',
  sendAccess: 'Anfragen absenden',
  documentAccess: 'Documente hochladen',
  singleCompanyType: 'Bearbeiter können',
  dashboardAccessDescriptionSingle: 'Bearbeiter können auf das Dashboard zugreifen und alle Informationen ansehen.',
  addAccessDescriptionSingle: 'Bearbeiter können eine neue Anfrage erstellen.',
  sendAccessDescriptionSingle: 'Bearbeiter können eine Anfrage an TraFinScout senden.',
  documentAccessDescriptionSingle: 'Bearbeiter können Dokumente hochladen.',
  dashboardAccessDescriptionGroup: 'Das Vertriebspartner kann auf das Dashboard zugreifen und alle Informationen ansehen.',
  addAccessDescriptionGroup: 'Das Vertriebspartner kann eine neue Anfrage erstellen.',
  sendAccessDescriptionGroup: 'Das Vertriebspartner kann eine Anfrage an TraFinScout senden.',
  documentAccessDescriptionGroup: 'Das Vertriebspartner kann Dokumente hochladen.',
  dashboardAccessDescriptionParent: 'Bearbeiter können auf das Dashboard zugreifen und alle Informationen ansehen.',
  addAccessDescriptionParent: 'Bearbeiter können kann eine neue Anfrage erstellen.',
  sendAccessDescriptionParent: 'Bearbeiter können kann eine Anfrage an TraFinScout senden.',
  documentAccessDescriptionParent: 'Bearbeiter können kann Dokumente hochladen.',

  logout: 'Abmelden',
  user: 'Benutzer',

  // StepPanel -> finalStep
  hasBeenConfirmed: 'wurde von Ihnen bestätigt',

  // Sider
  // constants
  contactHelp: 'Kontakt & Hilfe',

  // SiderDrawer
  weAreHereForYou: 'WIR SIND FÜR SIE DA',
  weAreHereForYouExample: '+49 (0) 69 153249345',

  // Components --------

  // CompanySelector
  companySelectorName: 'Mein Unternehmen:',

  // DashboardCardSimple
  viewTracking: 'Tracking ansehen',

  // DocumentDownloadModal
  pdfTitle: 'Herunterladen',

  // DocumentUploadForm
  sendedDocumentFeedback: 'Das Dokument wurde gesendet.',
  declineDocumentFeedback: 'Das Angebot wurde abgelehnt.',
  requestDocumentFeedback: 'Die Dokumentenliste wurde mit dem Exporteur geteilt',
  fileFeedback: 'Gesendete Dokumente:',
  requestFileFeedback: 'Dokumentenliste',
  fileNameRequired: 'Beschreibung der Eingabedatei',
  uploadDocumentText: 'Dokumente hochladen',
  addDocumentText: 'Hinzufügen',
  documentRequestButton: 'Dokumentenliste senden',
  documentPlaceholder: 'Dokumente auswählen',
  documentDefaultOption: '--',
  fileRequired: 'Diese Datei wird benötigt',
  dragFile: 'Ziehen Sie diese Datei hierhin oder laden diese hoch',
  uploadFileButton: 'Datei hochladen',
  uploadedDocuments: 'Hochgeladene Dokumente',
  uploadFileTitle: 'Dokumente hochladen',
  dateText: 'Datum : ',
  uploadedFiles: 'Hochgeladene Dateien',
  fileUploaded: 'Datei hochgeladen',

  // Footer
  privacy: 'Datenschutz',
  imprint: 'Impressum',

  // Header
  backToTracking: 'Zurück zu Trackingübersicht',
  requestHelp: 'Hilfe anfordern an',
  headerPhone: '+49 (0) 69 153249345',

  // Horizontal Time Line
  timeLineTooltip: 'Bitte laden Sie die fehlenden Unterlagen hoch',
  timeLineDeal: 'Deal Tracking',
  goUploadDocument: 'Zum Dokumente hochladen',

  // Item Table
  downloadDocument: 'Dokumente herunterladen',

  // Mini Progress Bar
  uploadText: 'Hochgeladen',
  uploadTextPercentage: '% hochgeladen',

  // Constants ---------
  pleaseFillField: 'Bitte füllen Sie dieses Feld aus',
  wrongEmailPassword: 'Falsche E-Mail-Adresse oder falsches Passwort!',
  onlyNumber: 'Nur Zahlen',
  onlyLetterAndCharacter: 'Nur Buchstaben und Sonderzeichen',
  fileType: 'Laden Sie ein korrektes Dateiformat hoch',
  notAllowed: 'Something went wrong.',
};

export default resourceDE;
