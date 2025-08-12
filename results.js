// Shared translation data and renderer for result pages
function detectLang() {
  const l = (navigator.language || 'en').toLowerCase();
  if (l.startsWith('zh')) {
    return /tw|hk|mo|hant/.test(l) ? 'zh-Hant' : 'zh';
  }
  if (l.startsWith('ja')) return 'ja';
  if (l.startsWith('ko')) return 'ko';
  if (l.startsWith('fr')) return 'fr';
  if (l.startsWith('de')) return 'de';
  if (l.startsWith('ar')) return 'ar';
  if (l.startsWith('ru')) return 'ru';
  if (l.startsWith('it')) return 'it';
  if (l.startsWith('es')) return 'es';
  if (l.startsWith('tr')) return 'tr';
  if (l.startsWith('hi')) return 'hi';
  return 'en';
}

const LANG = detectLang();
document.documentElement.lang = LANG;
document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';

const RES_UI = {
  zh: {
    header: '你的结果',
    strengthsTitle: '你的优势',
    tipsTitle: '给你的建议',
    scoresTitle: '本次测评维度分数',
    loading: '载入中…',
    again: '再测一次',
    copy: '复制结果链接',
    footer: '© 2025 Psychotest · <a href="../privacy.html">隐私政策</a>｜<a href="../terms.html">服务条款</a> · 本测试仅供娱乐与自我反思。',
    copySuccess: '已复制当前结果链接',
    copyFail: '复制失败，请手动复制地址栏链接',
    labels: { connector: '连接者', explorer: '探索者', organizer: '组织者', analyst: '分析者' },
    sep: ' ｜ ',
    colon: '：',
    totalLabel: '总分：',
  },
  'zh-Hant': {
    header: '你的結果',
    strengthsTitle: '你的優勢',
    tipsTitle: '給你的建議',
    scoresTitle: '本次測評維度分數',
    loading: '載入中…',
    again: '再測一次',
    copy: '複製結果連結',
    footer: '© 2025 Psychotest · <a href="../privacy.html">隱私政策</a>｜<a href="../terms.html">服務條款</a> · 本測試僅供娛樂與自我反思。',
    copySuccess: '已複製當前結果連結',
    copyFail: '複製失敗，請手動複製地址欄連結',
    labels: { connector: '連結者', explorer: '探索者', organizer: '組織者', analyst: '分析者' },
    sep: ' ｜ ',
    colon: '：',
    totalLabel: '總分：',
  },
  en: {
    header: 'Your Result',
    strengthsTitle: 'Your Strengths',
    tipsTitle: 'Tips for You',
    scoresTitle: 'Scores in Each Dimension',
    loading: 'Loading...',
    again: 'Take Again',
    copy: 'Copy Result Link',
    footer: '© 2025 Psychotest · <a href="../privacy.html">Privacy Policy</a> · <a href="../terms.html">Terms of Service</a> · This test is for entertainment and self-reflection.',
    copySuccess: 'Link copied.',
    copyFail: 'Copy failed, please copy link manually',
    labels: { connector: 'Connector', explorer: 'Explorer', organizer: 'Organizer', analyst: 'Analyst' },
    sep: ' | ',
    colon: ': ',
    totalLabel: 'Total: ',
  },
  ja: {
    header: '結果',
    strengthsTitle: 'あなたの強み',
    tipsTitle: 'アドバイス',
    scoresTitle: '各指標のスコア',
    loading: '読み込み中…',
    again: 'もう一度受ける',
    copy: '結果リンクをコピー',
    footer: '© 2025 Psychotest · <a href="../privacy.html">プライバシーポリシー</a>｜<a href="../terms.html">利用規約</a> · 本テストは娯楽と自己省察のためのものです。',
    copySuccess: 'リンクをコピーしました。',
    copyFail: 'コピーに失敗しました。手動でリンクをコピーしてください',
    labels: { connector: '連結者', explorer: '探索者', organizer: '組織者', analyst: '分析者' },
    sep: '｜',
    colon: '：',
    totalLabel: '合計：',
  },
  ko: {
    header: '결과',
    strengthsTitle: '당신의 강점',
    tipsTitle: '조언',
    scoresTitle: '각 차원의 점수',
    loading: '로딩 중…',
    again: '다시 테스트',
    copy: '결과 링크 복사',
    footer: '© 2025 Psychotest · <a href="../privacy.html">개인정보 처리방침</a>｜<a href="../terms.html">서비스 약관</a> · 본 테스트는 오락과 자기 성찰을 위한 것입니다.',
    copySuccess: '링크가 복사되었습니다.',
    copyFail: '복사 실패, 링크를 직접 복사하세요',
    labels: { connector: '연결자', explorer: '탐험가', organizer: '조직가', analyst: '분석가' },
    sep: ' ｜ ',
    colon: ' : ',
    totalLabel: '총점 : ',
  },
  fr: {
    header: 'Votre résultat',
    strengthsTitle: 'Vos points forts',
    tipsTitle: 'Conseils pour vous',
    scoresTitle: 'Scores par dimension',
    loading: 'Chargement…',
    again: 'Reprendre',
    copy: 'Copier le lien du résultat',
    footer: '© 2025 Psychotest · <a href="../privacy.html">Politique de confidentialité</a> · <a href="../terms.html">Conditions d\'utilisation</a> · Ce test est uniquement pour le divertissement et l’auto-réflexion.',
    copySuccess: 'Lien copié.',
    copyFail: 'Échec de la copie, veuillez copier le lien manuellement',
    labels: { connector: 'Connecteur', explorer: 'Explorateur', organizer: 'Organisateur', analyst: 'Analyste' },
    sep: ' | ',
    colon: ' : ',
    totalLabel: 'Total : ',
  },
  de: {
    header: 'Dein Ergebnis',
    strengthsTitle: 'Deine Stärken',
    tipsTitle: 'Tipps für dich',
    scoresTitle: 'Punkte je Dimension',
    loading: 'Wird geladen…',
    again: 'Erneut testen',
    copy: 'Ergebnislink kopieren',
    footer: '© 2025 Psychotest · <a href="../privacy.html">Datenschutzerklärung</a> · <a href="../terms.html">Nutzungsbedingungen</a> · Dieser Test dient nur zur Unterhaltung und Selbstreflexion.',
    copySuccess: 'Link kopiert.',
    copyFail: 'Kopieren fehlgeschlagen, bitte Link manuell kopieren',
    labels: { connector: 'Vernetzer', explorer: 'Entdecker', organizer: 'Organisator', analyst: 'Analyst' },
    sep: ' | ',
    colon: ' : ',
    totalLabel: 'Gesamt: ',
  },
  ar: {
    header: 'نتيجتك',
    strengthsTitle: 'نقاط قوتك',
    tipsTitle: 'نصائح لك',
    scoresTitle: 'النتائج في كل بُعد',
    loading: 'جارٍ التحميل…',
    again: 'أعد الاختبار',
    copy: 'انسخ رابط النتيجة',
    footer: '© 2025 Psychotest · <a href="../privacy.html">سياسة الخصوصية</a> · <a href="../terms.html">شروط الخدمة</a> · هذا الاختبار مخصص للترفيه والتأمل الذاتي فقط.',
    copySuccess: 'تم نسخ الرابط.',
    copyFail: 'فشل النسخ، يرجى نسخ الرابط يدويًا',
    labels: { connector: 'الموصِل', explorer: 'المستكشف', organizer: 'المنظِّم', analyst: 'المحلل' },
    sep: ' | ',
    colon: ': ',
    totalLabel: 'المجموع: ',
  },
  ru: {
    header: 'Ваш результат',
    strengthsTitle: 'Ваши сильные стороны',
    tipsTitle: 'Советы вам',
    scoresTitle: 'Баллы по каждой шкале',
    loading: 'Загрузка…',
    again: 'Пройти снова',
    copy: 'Скопировать ссылку',
    footer: '© 2025 Psychotest · <a href="../privacy.html">Политика конфиденциальности</a> · <a href="../terms.html">Условия использования</a> · Этот тест предназначен лишь для развлечения и самоанализа.',
    copySuccess: 'Ссылка скопирована.',
    copyFail: 'Не удалось скопировать, скопируйте ссылку вручную',
    labels: { connector: 'Коммуникатор', explorer: 'Исследователь', organizer: 'Организатор', analyst: 'Аналитик' },
    sep: ' | ',
    colon: ': ',
    totalLabel: 'Итого: ',
  },
  es: {
    header: 'Tu resultado',
    strengthsTitle: 'Tus fortalezas',
    tipsTitle: 'Consejos para ti',
    scoresTitle: 'Puntuaciones por dimensión',
    loading: 'Cargando…',
    again: 'Volver a probar',
    copy: 'Copiar enlace del resultado',
    footer: '© 2025 Psychotest · <a href="../privacy.html">Política de privacidad</a> · <a href="../terms.html">Términos del servicio</a> · Esta prueba es solo para entretenimiento y auto-reflexión.',
    copySuccess: 'Enlace copiado.',
    copyFail: 'Error al copiar, por favor copia el enlace manualmente',
    labels: { connector: 'Conector', explorer: 'Explorador', organizer: 'Organizador', analyst: 'Analista' },
    sep: ' | ',
    colon: ': ',
    totalLabel: 'Total: ',
  },
  it: {
    header: 'Il tuo risultato',
    strengthsTitle: 'I tuoi punti di forza',
    tipsTitle: 'Suggerimenti per te',
    scoresTitle: 'Punteggi per ogni dimensione',
    loading: 'Caricamento...',
    again: 'Ripeti il test',
    copy: 'Copia il link del risultato',
    footer: '© 2025 Psychotest · <a href="../privacy.html">Informativa sulla privacy</a> · <a href="../terms.html">Termini di servizio</a> · Questo test è solo per intrattenimento e auto-riflessione.',
    copySuccess: 'Link copiato.',
    copyFail: 'Copia non riuscita, per favore copia manualmente il link',
    labels: { connector: 'Connettore', explorer: 'Esploratore', organizer: 'Organizzatore', analyst: 'Analista' },
    sep: ' | ',
    colon: ': ',
    totalLabel: 'Totale: ',
  },
  tr: {
    header: 'Sonucun',
    strengthsTitle: 'Güçlü Yönlerin',
    tipsTitle: 'Sana Tavsiyeler',
    scoresTitle: 'Bu Testteki Boyut Puanları',
    loading: 'Yükleniyor...',
    again: 'Tekrar Dene',
    copy: 'Sonuç Bağlantısını Kopyala',
    footer: '© 2025 Psychotest · <a href="../privacy.html">Gizlilik Politikası</a>｜<a href="../terms.html">Hizmet Şartları</a> · Bu test yalnızca eğlence ve öz değerlendirme içindir.',
    copySuccess: 'Bağlantı kopyalandı.',
    copyFail: 'Kopyalama başarısız, lütfen bağlantıyı elle kopyalayın',
    labels: { connector: 'Bağlayıcı', explorer: 'Kaşif', organizer: 'Organizatör', analyst: 'Analist' },
    sep: ' | ',
    colon: ': ',
    totalLabel: 'Toplam: ',
  },
  hi: {
    header: 'आपका परिणाम',
    strengthsTitle: 'आपकी ताकतें',
    tipsTitle: 'आपके लिए सुझाव',
    scoresTitle: 'इस परीक्षण के आयामों के स्कोर',
    loading: 'लोड हो रहा है...',
    again: 'फिर से करें',
    copy: 'परिणाम लिंक कॉपी करें',
    footer: '© 2025 Psychotest · <a href="../privacy.html">गोपनीयता नीति</a>｜<a href="../terms.html">सेवा की शर्तें</a> · यह परीक्षण केवल मनोरंजन और आत्म-चिंतन के लिए है।',
    copySuccess: 'लिंक कॉपी हो गया।',
    copyFail: 'कॉपी विफल, कृपया लिंक मैन्युअली कॉपी करें',
    labels: { connector: 'संबंधक', explorer: 'अन्वेषक', organizer: 'संगठक', analyst: 'विश्लेषक' },
    sep: ' | ',
    colon: ': ',
    totalLabel: 'कुल: ',
  },
};

const RES_CONTENT = {
  connector: {
    title: {
      zh: '连接者（社交驱动）｜测试结果',
      'zh-Hant': '連結者（社交驅動）｜測試結果',
      en: 'Connector (Social-Driven) | Test Result',
      ja: '連結者（社交型）｜結果',
      ko: '연결자(사회성 중심) | 결과',
      fr: 'Connecteur (Orienté social) | Résultat du test',
      de: 'Vernetzer (Sozial getrieben) | Testergebnis',
      ar: 'الموصِل (مدفوع اجتماعيًا) | نتيجة الاختبار',
      ru: 'Коммуникатор (социально ориентированный) | Результат теста',
      es: 'Conector (Impulsado por lo social) | Resultado del test',
      it: 'Connettore (orientato al sociale) | Risultato del test',
      tr: 'Bağlayıcı (Sosyal Odaklı) | Test Sonucu',
      hi: 'संबंधक (सामाजिक प्रेरित) | परीक्षण परिणाम',
    },
    resultType: {
      zh: '连接者（社交驱动）<span class="badge">非临床 · 娱乐向</span>',
      'zh-Hant': '連結者（社交驅動）<span class="badge">非臨床 · 娛樂向</span>',
      en: 'Connector (Social-Driven)<span class="badge">Non-clinical · For fun</span>',
      ja: '連結者（社交型）<span class="badge">非臨床・娯楽向け</span>',
      ko: '연결자(사회성 중심)<span class="badge">비임상 · 재미용</span>',
      fr: 'Connecteur (Orienté social)<span class="badge">Non clinique · Ludique</span>',
      de: 'Vernetzer (Sozial getrieben)<span class="badge">Nicht klinisch · Zur Unterhaltung</span>',
      ar: 'الموصِل (مدفوع اجتماعيًا)<span class="badge">غير سريري · للمتعة</span>',
      ru: 'Коммуникатор (социально ориентированный)<span class="badge">Неклинический · Для развлечения</span>',
      es: 'Conector (Impulsado por lo social)<span class="badge">No clínico · Con fines recreativos</span>',
      it: 'Connettore (orientato al sociale)<span class="badge">Non clinico · Per divertimento</span>',
      tr: 'Bağlayıcı (Sosyal Odaklı)<span class="badge">Klinik dışı · Eğlence amaçlı</span>',
      hi: 'संबंधक (सामाजिक प्रेरित)<span class="badge">गैर-चिकित्सीय · मनोरंजन हेतु</span>',
    },
    kv: {
      zh: '类型代号：<code>connector</code>',
      'zh-Hant': '類型代號：<code>connector</code>',
      en: 'Type code: <code>connector</code>',
      ja: 'タイプコード：<code>connector</code>',
      ko: '유형 코드: <code>connector</code>',
      fr: 'Code de type : <code>connector</code>',
      de: 'Typcode: <code>connector</code>',
      ar: 'رمز النوع: <code>connector</code>',
      ru: 'Код типа: <code>connector</code>',
      es: 'Código de tipo: <code>connector</code>',
      it: 'Codice tipo: <code>connector</code>',
      tr: 'Tür kodu: <code>connector</code>',
      hi: 'प्रकार कोड: <code>connector</code>',
    },
    strengths: {
      zh: [
        '善于沟通与协作，能快速建立信任与默契。',
        '在团队中为他人赋能，拉动信息流通与共识达成。',
        '擅长资源整合，推动项目跨部门落地。',
      ],
      'zh-Hant': [
        '善於溝通與協作，能快速建立信任與默契。',
        '在團隊中為他人賦能，拉動資訊流通與共識達成。',
        '擅長資源整合，推動項目跨部門落地。',
      ],
      en: [
        'Great at communication and collaboration, quickly building trust and rapport.',
        'Empowers others in the team, facilitating information flow and consensus.',
        'Skilled at integrating resources and driving cross-department projects.',
      ],
      ja: [
        'コミュニケーションと協力が得意で、すばやく信頼と一体感を築ける。',
        'チームで他者を支援し、情報の流れと合意形成を促進する。',
        'リソースの統合が得意で、部門横断のプロジェクトを推進する。',
      ],
      ko: [
        '소통과 협업에 능숙하여 빠르게 신뢰와 공감대를 형성한다.',
        '팀에서 다른 사람에게 힘을 실어주고 정보 흐름과 합의를 이끈다.',
        '자원을 통합하여 부서 간 프로젝트를 추진하는 데 능하다.',
      ],
      fr: [
        'Excellente communication et collaboration, établissant rapidement la confiance et la complicité.',
        'Donne du pouvoir aux autres dans l’équipe, favorisant la circulation de l’information et le consensus.',
        'Expert dans l’intégration des ressources et la mise en œuvre inter-départementale des projets.',
      ],
      de: [
        'Gut in Kommunikation und Zusammenarbeit, baut schnell Vertrauen und Harmonie auf.',
        'Stärkt andere im Team und fördert Informationsfluss sowie Konsensbildung.',
        'Geschickt in der Ressourcenintegration und treibt bereichsübergreifende Projekte voran.',
      ],
      ar: [
        'بارع في التواصل والتعاون، ويكوّن الثقة والتفاهم بسرعة.',
        'يمكّن الآخرين في الفريق، ويسهّل تدفق المعلومات والتوصل إلى توافق.',
        'بارع في دمج الموارد ودفع المشاريع عبر الأقسام.',
      ],
      ru: [
        'Отлично общается и сотрудничает, быстро строя доверие и взаимопонимание.',
        'Расширяет возможности других в команде, способствует обмену информацией и достижению консенсуса.',
        'Умеет объединять ресурсы и реализовывать проекты между подразделениями.',
      ],
      es: [
        'Destacas en la comunicación y la colaboración, construyendo rápidamente confianza y empatía.',
        'Potencia a los demás en el equipo, facilitando el flujo de información y el consenso.',
        'Hábil en integrar recursos e impulsar proyectos entre departamentos.',
      ],
      it: [
        'Abile nella comunicazione e collaborazione, costruisce rapidamente fiducia e intesa.',
        'Nel team potenzia gli altri facilitando il flusso di informazioni e il raggiungimento del consenso.',
        'Bravo a integrare risorse e a far avanzare progetti trasversali ai reparti.',
      ],
      tr: [
        'İletişim ve işbirliğinde iyidir, hızlıca güven ve uyum kurar.',
        'Takımda başkalarını güçlendirir, bilgi akışını ve uzlaşıyı kolaylaştırır.',
        'Kaynakları entegre etmede ve departmanlar arası projeleri yürütmede ustadır.',
      ],
      hi: [
        'संचार और सहयोग में माहिर, जल्दी ही भरोसा और तालमेल बना लेते हैं।',
        'टीम में दूसरों को सशक्त करते हैं, सूचना प्रवाह और सहमति को सुगम बनाते हैं।',
        'संसाधनों को एकीकृत करने और विभागों के बीच परियोजनाओं को आगे बढ़ाने में कुशल।',
      ],
    },
    tips: {
      zh: [
        '为复杂任务建立清单与节奏板，避免“说得多做得少”。',
        '学会对低优先级请求礼貌拒绝，保护深度工作时间。',
        '与“分析者”搭档，用数据证明方案，提升说服力。',
      ],
      'zh-Hant': [
        '為複雜任務建立清單與節奏板，避免「說得多做得少」。',
        '學會對低優先級請求禮貌拒絕，保護深度工作時間。',
        '與「分析者」搭檔，用數據證明方案，提升說服力。',
      ],
      en: [
        'Use checklists and rhythms for complex tasks to avoid “talking more, doing less.”',
        'Learn to politely decline low-priority requests to protect deep work time.',
        'Partner with “Analysts” to support ideas with data and increase persuasiveness.',
      ],
      ja: [
        '複雑なタスクにはチェックリストと進行表を作り、「口だけで行動が伴わない」ことを避けよう。',
        '優先度の低い依頼は丁寧に断り、集中作業の時間を守ろう。',
        '「分析者」と組み、データで提案を裏付けて説得力を高めよう。',
      ],
      ko: [
        '복잡한 업무에는 체크리스트와 리듬표를 만들어 “말만 많고 실행은 적은” 상황을 피하라.',
        '우선순위가 낮은 요청은 정중히 거절하여 몰입 작업 시간을 지켜라.',
        '“분석가”와 협력하여 데이터를 통해 아이디어를 뒷받침하고 설득력을 높여라.',
      ],
      fr: [
        'Créez des listes et des plannings pour les tâches complexes afin d’éviter de « beaucoup parler, peu agir ».',
        'Apprenez à refuser poliment les demandes de faible priorité pour préserver votre temps de travail profond.',
        'Collaborez avec des « Analystes » pour étayer les idées par des données et accroître la persuasion.',
      ],
      de: [
        'Erstelle Checklisten und Zeitpläne für komplexe Aufgaben, um “viel reden, wenig tun” zu vermeiden.',
        'Lerne höflich, Anfragen niedriger Priorität abzulehnen, um Fokuszeit zu schützen.',
        'Arbeite mit „Analysten“ zusammen, um Ideen mit Daten zu untermauern und die Überzeugungskraft zu steigern.',
      ],
      ar: [
        'أنشئ قوائم ولوحات إيقاع للمهام المعقدة لتجنب «الكلام الكثير والعمل القليل».',
        'تعلّم رفض الطلبات ذات الأولوية المنخفضة بأدب لحماية وقت العمل العميق.',
        'تعاون مع «المحللين» لدعم الأفكار بالبيانات وزيادة الإقناع.',
      ],
      ru: [
        'Для сложных задач создавайте списки и планы, чтобы избегать «много говорить, мало делать».',
        'Научитесь вежливо отклонять запросы низкого приоритета, чтобы защитить время для глубокого труда.',
        'Сотрудничайте с «аналитиками», чтобы подкреплять идеи данными и повышать убедительность.',
      ],
      es: [
        'Crea listas y cronogramas para las tareas complejas para evitar «hablar mucho y hacer poco».',
        'Aprende a rechazar educadamente las solicitudes de baja prioridad para proteger tu tiempo de trabajo profundo.',
        'Colabora con «Analistas» para respaldar tus ideas con datos y aumentar la persuasión.',
      ],
      it: [
        'Per i compiti complessi crea checklist e tabelle di ritmo per evitare di “parlare molto e fare poco”.',
        'Impara a rifiutare cortesemente le richieste a bassa priorità per proteggere il tempo di lavoro profondo.',
        'Collabora con gli “Analisti” per supportare le idee con dati e aumentarne la forza persuasiva.',
      ],
      tr: [
        'Karmaşık görevler için kontrol listeleri ve tempo planları oluştur; “çok konuşup az yapmak”tan kaçın.',
        'Derin çalışma zamanını korumak için düşük öncelikli istekleri nazikçe reddetmeyi öğren.',
        'Fikirlerini verilerle desteklemek ve ikna gücünü artırmak için “Analistler”le işbirliği yap.',
      ],
      hi: [
        'जटिल कार्यों के लिए चेकलिस्ट और तालिका बनाएं ताकि “ज्यादा बोलना, कम करना” से बच सकें।',
        'गहरे काम के समय की रक्षा हेतु कम प्राथमिकता वाले अनुरोधों को विनम्रता से मना करना सीखें।',
        'डेटा के साथ विचारों का समर्थन करने और प्रभावशीलता बढ़ाने के लिए “विश्लेषकों” के साथ साझेदारी करें।',
      ],
    },
  },

  explorer: {
    title: {
      zh: '探索者（好奇创新）｜测试结果',
      'zh-Hant': '探索者（好奇創新）｜測試結果',
      en: 'Explorer (Curious Innovator) | Test Result',
      ja: '探索者（好奇心型）｜結果',
      ko: '탐험가(호기심 혁신) | 결과',
      fr: 'Explorateur (Curieux et innovant) | Résultat du test',
      de: 'Entdecker (Neugierig und innovativ) | Testergebnis',
      ar: 'المستكشف (فضولي ومبتكر) | نتيجة الاختبار',
      ru: 'Исследователь (любопытный новатор) | Результат теста',
      es: 'Explorador (Curioso e innovador) | Resultado del test',
      it: 'Esploratore (curioso e innovatore) | Risultato del test',
      tr: 'Kaşif (Meraklı Yenilikçi) | Test Sonucu',
      hi: 'अन्वेषक (जिज्ञासु नवाचारी) | परीक्षण परिणाम',
    },
    resultType: {
      zh: '探索者（好奇创新）<span class="badge">非临床 · 娱乐向</span>',
      'zh-Hant': '探索者（好奇創新）<span class="badge">非臨床 · 娛樂向</span>',
      en: 'Explorer (Curious Innovator)<span class="badge">Non-clinical · For fun</span>',
      ja: '探索者（好奇心型）<span class="badge">非臨床・娯楽向け</span>',
      ko: '탐험가(호기심 혁신)<span class="badge">비임상 · 재미용</span>',
      fr: 'Explorateur (Curieux et innovant)<span class="badge">Non clinique · Ludique</span>',
      de: 'Entdecker (Neugierig und innovativ)<span class="badge">Nicht klinisch · Zur Unterhaltung</span>',
      ar: 'المستكشف (فضولي ومبتكر)<span class="badge">غير سريري · للمتعة</span>',
      ru: 'Исследователь (любопытный новатор)<span class="badge">Неклинический · Для развлечения</span>',
      es: 'Explorador (Curioso e innovador)<span class="badge">No clínico · Con fines recreativos</span>',
      it: 'Esploratore (curioso e innovatore)<span class="badge">Non clinico · Per divertimento</span>',
      tr: 'Kaşif (Meraklı Yenilikçi)<span class="badge">Klinik dışı · Eğlence amaçlı</span>',
      hi: 'अन्वेषक (जिज्ञासु नवाचारी)<span class="badge">गैर-चिकित्सीय · मनोरंजन हेतु</span>',
    },
    kv: {
      zh: '类型代号：<code>explorer</code>',
      'zh-Hant': '類型代號：<code>explorer</code>',
      en: 'Type code: <code>explorer</code>',
      ja: 'タイプコード：<code>explorer</code>',
      ko: '유형 코드: <code>explorer</code>',
      fr: 'Code de type : <code>explorer</code>',
      de: 'Typcode: <code>explorer</code>',
      ar: 'رمز النوع: <code>explorer</code>',
      ru: 'Код типа: <code>explorer</code>',
      es: 'Código de tipo: <code>explorer</code>',
      it: 'Codice tipo: <code>explorer</code>',
      tr: 'Tür kodu: <code>explorer</code>',
      hi: 'प्रकार कोड: <code>explorer</code>',
    },
    strengths: {
      zh: [
        '对新事物敏感，能快速试错并找到突破口。',
        '具备创意产出能力，善于提出不同视角的问题。',
        '适应变化快，愿意拥抱不确定性。',
      ],
      'zh-Hant': [
        '對新事物敏感，能快速試錯並找到突破口。',
        '具備創意產出能力，善於提出不同視角的問題。',
        '適應變化快，願意擁抱不確定性。',
      ],
      en: [
        'Sensitive to new things and quick at trial-and-error to find breakthroughs.',
        'Creative and good at asking questions from different perspectives.',
        'Adapts quickly to change and embraces uncertainty.',
      ],
      ja: [
        '新しい物事に敏感で、迅速に試行錯誤して突破口を見つける。',
        '創造的な発想力があり、さまざまな視点から質問を投げかけるのが得意。',
        '変化への適応が早く、不確実性を受け入れることをいとわない。',
      ],
      ko: [
        '새로운 것에 민감하고 빠르게 시행착오를 거쳐 돌파구를 찾는다.',
        '창의적으로 다양한 관점에서 질문을 던지는 능력이 있다.',
        '변화에 빠르게 적응하고 불확실성을 기꺼이 받아들인다.',
      ],
      fr: [
        'Sensible aux nouveautés et rapide dans l’essai-erreur pour trouver des percées.',
        'Créatif et apte à poser des questions sous différents angles.',
        'S’adapte rapidement au changement et accepte l’incertitude.',
      ],
      de: [
        'Sensibel für Neues und schnell im Ausprobieren, um Durchbrüche zu finden.',
        'Kreativ und gut darin, Fragen aus verschiedenen Blickwinkeln zu stellen.',
        'Passt sich schnell Veränderungen an und nimmt Unsicherheit an.',
      ],
      ar: [
        'حسّاس للأشياء الجديدة وسريع في التجربة والخطأ لإيجاد اختراقات.',
        'مبدع وماهر في طرح الأسئلة من زوايا مختلفة.',
        'يتكيف بسرعة مع التغيير ويحتضن عدم اليقين.',
      ],
      ru: [
        'Чувствителен к новому и быстро методом проб и ошибок находит прорывы.',
        'Креативен и умеет задавать вопросы с разных точек зрения.',
        'Быстро адаптируется к изменениям и охотно принимает неопределенность.',
      ],
      es: [
        'Sensibilizado a lo nuevo y rápido en el ensayo y error para encontrar soluciones innovadoras.',
        'Creativo y hábil para plantear preguntas desde diferentes perspectivas.',
        'Se adapta rápidamente al cambio y acepta la incertidumbre.',
      ],
      it: [
        'Sensibile alle novità e rapido nel provare e sbagliare per trovare punti di svolta.',
        'Creativo e bravo a porre domande da prospettive diverse.',
        'Si adatta velocemente ai cambiamenti e abbraccia l\'incertezza.',
      ],
      tr: [
        'Yeniliklere duyarlıdır, hızlı deneme-yanılma ile atılım bulur.',
        'Yaratıcıdır, farklı açılardan sorular sormakta iyidir.',
        'Değişime hızla uyum sağlar ve belirsizliği kucaklar.',
      ],
      hi: [
        'नई चीज़ों के प्रति संवेदनशील हैं और प्रयोग-त्रुटि से जल्दी समाधान खोज लेते हैं।',
        'रचनात्मक हैं और विभिन्न दृष्टिकोणों से प्रश्न पूछने में सक्षम।',
        'परिवर्तन के प्रति जल्दी अनुकूलन करते हैं और अनिश्चितता को स्वीकारते हैं।',
      ],
    },
    tips: {
      zh: [
        '为每次实验设定边界：目标、时间盒、评价指标与退出条件。',
        '把灵感沉淀为可复用的模板或 S.O.P.。',
        '与“组织者”搭档，将想法转化为可执行计划。',
      ],
      'zh-Hant': [
        '為每次實驗設定邊界：目標、時間盒、評估指標與退出條件。',
        '把靈感沉澱為可複用的模板或 S.O.P.。',
        '與「組織者」搭檔，將想法轉化為可執行計畫。',
      ],
      en: [
        'Set boundaries for each experiment: goals, time box, metrics, and exit criteria.',
        'Turn inspirations into reusable templates or SOPs.',
        'Partner with “Organizers” to turn ideas into actionable plans.',
      ],
      ja: [
        '各実験には目標・タイムボックス・評価指標・退出条件といった境界を設定しよう。',
        'ひらめきを再利用できるテンプレートや標準作業手順（SOP）に落とし込もう。',
        '「組織者」と組んで、アイデアを実行可能な計画に変えよう。',
      ],
      ko: [
        '각 실험마다 목표, 시간 제한, 평가 지표, 종료 조건 등 경계를 설정하라.',
        '영감을 재사용 가능한 템플릿이나 표준 작업 절차(SOP)로 정리하라.',
        '“조직가”와 협력하여 아이디어를 실행 가능한 계획으로 전환하라.',
      ],
      fr: [
        'Définissez des limites pour chaque expérimentation : objectifs, durée, indicateurs et critères de sortie.',
        'Transformez vos inspirations en modèles ou procédures opérationnelles standard réutilisables.',
        'Collaborez avec des « Organisateurs » pour transformer les idées en plans réalisables.',
      ],
      de: [
        'Setze für jedes Experiment Grenzen: Ziele, Zeitrahmen, Kennzahlen und Ausstiegskriterien.',
        'Verwandle Einfälle in wiederverwendbare Vorlagen oder SOPs.',
        'Arbeite mit „Organisatoren“ zusammen, um Ideen in umsetzbare Pläne zu verwandeln.',
      ],
      ar: [
        'حدّد حدود كل تجربة: الأهداف، الإطار الزمني، مؤشرات التقييم ومعايير الخروج.',
        'حوّل الإلهام إلى قوالب أو إجراءات تشغيل معيارية قابلة لإعادة الاستخدام.',
        'تعاون مع «المنظمين» لتحويل الأفكار إلى خطط قابلة للتنفيذ.',
      ],
      ru: [
        'Устанавливайте рамки для каждого эксперимента: цели, временные рамки, метрики и критерии выхода.',
        'Превращайте вдохновение в повторно используемые шаблоны или стандартные процедуры (SOP).',
        'Сотрудничайте с «организаторами», чтобы превращать идеи в реализуемые планы.',
      ],
      es: [
        'Define límites para cada experimento: objetivos, tiempo, indicadores y criterios de salida.',
        'Convierte las inspiraciones en plantillas reutilizables o procedimientos estándar (SOP).',
        'Colabora con «Organizadores» para convertir ideas en planes ejecutables.',
      ],
      it: [
        'Definisci i confini di ogni esperimento: obiettivi, tempo, metriche e criteri di uscita.',
        'Trasforma le ispirazioni in modelli o procedure operative standard riutilizzabili.',
        'Collabora con gli “Organizzatori” per trasformare le idee in piani attuabili.',
      ],
      tr: [
        'Her deney için hedef, zaman kutusu, metrikler ve çıkış kriterleri gibi sınırlar koy.',
        'İlhamlarını yeniden kullanılabilir şablonlara veya SOP’lere dönüştür.',
        'Fikirleri uygulanabilir planlara dönüştürmek için “Organizatörler”le işbirliği yap.',
      ],
      hi: [
        'प्रत्येक प्रयोग के लिए लक्ष्य, समय सीमा, मापदंड और बाहर निकलने की शर्तें तय करें।',
        'प्रेरणाओं को पुन: उपयोग योग्य टेम्पलेट या SOP में बदलें।',
        'विचारों को क्रियाशील योजनाओं में बदलने के लिए “संगठकों” के साथ साझेदारी करें।',
      ],
    },
  },

  organizer: {
    title: {
      zh: '组织者（有序执行）｜测试结果',
      'zh-Hant': '組織者（有序執行）｜測試結果',
      en: 'Organizer (Orderly Executor) | Test Result',
      ja: '組織者（秩序実行）｜結果',
      ko: '조직가(체계 실행) | 결과',
      fr: 'Organisateur (Exécution ordonnée) | Résultat du test',
      de: 'Organisator (Ordnungsgemäß ausführend) | Testergebnis',
      ar: 'المنظِّم (تنفيذ منظم) | نتيجة الاختبار',
      ru: 'Организатор (упорядоченный исполнитель) | Результат теста',
      es: 'Organizador (Ejecución ordenada) | Resultado del test',
      it: 'Organizzatore (esecutore ordinato) | Risultato del test',
      tr: 'Organizatör (Düzenli Uygulayıcı) | Test Sonucu',
      hi: 'संगठक (सुव्यवस्थित कार्यकर्ता) | परीक्षण परिणाम',
    },
    resultType: {
      zh: '组织者（有序执行）<span class="badge">非临床 · 娱乐向</span>',
      'zh-Hant': '組織者（有序執行）<span class="badge">非臨床 · 娛樂向</span>',
      en: 'Organizer (Orderly Executor)<span class="badge">Non-clinical · For fun</span>',
      ja: '組織者（秩序実行）<span class="badge">非臨床・娯楽向け</span>',
      ko: '조직가(체계 실행)<span class="badge">비임상 · 재미용</span>',
      fr: 'Organisateur (Exécution ordonnée)<span class="badge">Non clinique · Ludique</span>',
      de: 'Organisator (Ordnungsgemäß ausführend)<span class="badge">Nicht klinisch · Zur Unterhaltung</span>',
      ar: 'المنظِّم (تنفيذ منظم)<span class="badge">غير سريري · للمتعة</span>',
      ru: 'Организатор (упорядоченный исполнитель)<span class="badge">Неклинический · Для развлечения</span>',
      es: 'Organizador (Ejecución ordenada)<span class="badge">No clínico · Con fines recreativos</span>',
      it: 'Organizzatore (esecutore ordinato)<span class="badge">Non clinico · Per divertimento</span>',
      tr: 'Organizatör (Düzenli Uygulayıcı)<span class="badge">Klinik dışı · Eğlence amaçlı</span>',
      hi: 'संगठक (सुव्यवस्थित कार्यकर्ता)<span class="badge">गैर-चिकित्सीय · मनोरंजन हेतु</span>',
    },
    kv: {
      zh: '类型代号：<code>organizer</code>',
      'zh-Hant': '類型代號：<code>organizer</code>',
      en: 'Type code: <code>organizer</code>',
      ja: 'タイプコード：<code>organizer</code>',
      ko: '유형 코드: <code>organizer</code>',
      fr: 'Code de type : <code>organizer</code>',
      de: 'Typcode: <code>organizer</code>',
      ar: 'رمز النوع: <code>organizer</code>',
      ru: 'Код типа: <code>organizer</code>',
      es: 'Código de tipo: <code>organizer</code>',
      it: 'Codice tipo: <code>organizer</code>',
      tr: 'Tür kodu: <code>organizer</code>',
      hi: 'प्रकार कोड: <code>organizer</code>',
    },
    strengths: {
      zh: [
        '擅长目标拆解、节奏管理与进度跟踪。',
        '稳定可靠，能把复杂项目落地成形。',
        '注重规范与质量，细节把控到位。',
      ],
      'zh-Hant': [
        '擅長目標拆解、節奏管理與進度追蹤。',
        '穩定可靠，能把複雜項目落地成形。',
        '注重規範與品質，細節把控到位。',
      ],
      en: [
        'Skilled at goal breakdown, pacing, and progress tracking.',
        'Stable and reliable, able to deliver complex projects.',
        'Focuses on standards and quality with attention to detail.',
      ],
      ja: [
        '目標の分解、ペース管理、進捗トラッキングが得意。',
        '安定して信頼でき、複雑なプロジェクトを形にできる。',
        '規範と品質を重視し、細部まで目が行き届いている。',
      ],
      ko: [
        '목표 세분화, 페이스 관리, 진척 추적에 능하다.',
        '안정적이고 신뢰할 수 있으며 복잡한 프로젝트를 완성할 수 있다.',
        '규범과 품질을 중시하며 세부 사항까지 철저히 관리한다.',
      ],
      fr: [
        'Compétent en décomposition d’objectifs, gestion du rythme et suivi des progrès.',
        'Stable et fiable, capable de concrétiser des projets complexes.',
        'Souci des normes et de la qualité, avec un contrôle précis des détails.',
      ],
      de: [
        'Gut in Zielzerlegung, Rhythmusmanagement und Fortschrittsverfolgung.',
        'Stabil und zuverlässig, kann komplexe Projekte verwirklichen.',
        'Legt Wert auf Standards und Qualität, achtet genau auf Details.',
      ],
      ar: [
        'بارع في تفكيك الأهداف، وإدارة الوتيرة، وتتبع التقدم.',
        'مستقر وموثوق، قادر على تنفيذ المشاريع المعقدة.',
        'يولي أهمية للمعايير والجودة مع السيطرة الدقيقة على التفاصيل.',
      ],
      ru: [
        'Хорошо разбивает цели, управляет темпом и отслеживает прогресс.',
        'Стабилен и надежен, способен воплощать сложные проекты.',
        'Уделяет внимание стандартам и качеству, тщательно контролируя детали.',
      ],
      es: [
        'Hábil en descomponer objetivos, gestionar el ritmo y hacer seguimiento del progreso.',
        'Estable y confiable, capaz de llevar a cabo proyectos complejos.',
        'Se enfoca en las normas y la calidad, cuidando los detalles.',
      ],
      it: [
        'Abile nella scomposizione degli obiettivi, nella gestione del ritmo e nel monitoraggio dei progressi.',
        'Stabile e affidabile, capace di concretizzare progetti complessi.',
        'Attento alle norme e alla qualità, con grande cura per i dettagli.',
      ],
      tr: [
        'Hedefleri parçalara ayırma, tempo yönetimi ve ilerleme takibinde ustadır.',
        'Stabil ve güvenilirdir, karmaşık projeleri hayata geçirebilir.',
        'Standartlara ve kaliteye odaklanır, ayrıntılara dikkat eder.',
      ],
      hi: [
        'लक्ष्यों को भागों में बाँटना, गति प्रबंधन और प्रगति ट्रैक करने में माहिर।',
        'स्थिर और भरोसेमंद, जटिल परियोजनाओं को पूरा करने में सक्षम।',
        'मानकों और गुणवत्ता पर ध्यान, बारीकियों पर पकड़।',
      ],
    },
    tips: {
      zh: [
        '避免过度追求完美，给计划预留灵活缓冲区。',
        '定期回顾是否“为做而做”，聚焦影响最大的 20%。',
        '与“探索者”合作，为流程注入创新活力。',
      ],
      'zh-Hant': [
        '避免過度追求完美，給計畫預留靈活緩衝區。',
        '定期回顧是否「為做而做」，聚焦影響最大的 20%。',
        '與「探索者」合作，為流程注入創新活力。',
      ],
      en: [
        'Avoid over-pursuing perfection; leave flexible buffers in plans.',
        'Review periodically to ensure you focus on the most impactful 20%.',
        'Work with “Explorers” to infuse innovation into processes.',
      ],
      ja: [
        '完璧を求めすぎず、計画には柔軟なバッファーを設けよう。',
        '定期的に振り返り、最も影響の大きい20%に集中できているか確認しよう。',
        '「探索者」と協力し、プロセスに革新的な活力を注入しよう。',
      ],
      ko: [
        '완벽을 과도하게 추구하지 말고 계획에 유연한 완충 구간을 남겨라.',
        '정기적으로 돌아보며 가장 영향력 있는 20%에 집중하고 있는지 확인하라.',
        '“탐험가”와 협력하여 프로세스에 혁신적 활력을 주입하라.',
      ],
      fr: [
        'Évitez de chercher la perfection excessive; prévoyez des marges de manœuvre dans vos plans.',
        'Reconsidérez régulièrement pour vous assurer de vous concentrer sur les 20% les plus impactants.',
        'Collaborez avec des « Explorateurs » pour insuffler de l’innovation dans les processus.',
      ],
      de: [
        'Vermeide übermäßigen Perfektionismus und lasse flexible Puffer im Plan.',
        'Überprüfe regelmäßig, ob du dich auf die wirkungsvollsten 20 % konzentrierst.',
        'Arbeite mit „Entdeckern“ zusammen, um Prozessen innovative Energie zu verleihen.',
      ],
      ar: [
        'تجنب السعي المفرط نحو الكمال واترك هوامش مرنة في الخطط.',
        'راجع دوريًا للتأكد من أنك تركز على أهم 20٪ من التأثير.',
        'تعاون مع «المستكشفين» لضخ الابتكار في العمليات.',
      ],
      ru: [
        'Избегайте чрезмерного стремления к совершенству; оставляйте гибкие буферы в планах.',
        'Регулярно анализируйте, чтобы сосредоточиться на наиболее значимых 20 %.',
        'Сотрудничайте с «исследователями», чтобы привносить инновации в процессы.',
      ],
      es: [
        'Evita perseguir demasiado la perfección; deja márgenes flexibles en los planes.',
        'Revisa periódicamente para asegurarte de centrarte en el 20 % con mayor impacto.',
        'Colabora con «Exploradores» para inyectar innovación en los procesos.',
      ],
      it: [
        'Evita di perseguire troppo la perfezione; lascia margini flessibili nei piani.',
        'Rivedi regolarmente per assicurarti di concentrarti sul 20% con il maggiore impatto.',
        'Collabora con gli “Esploratori” per infondere innovazione nei processi.',
      ],
      tr: [
        'Mükemmelliği aşırı kovalamaktan kaçın; planlarda esnek tamponlar bırak.',
        'Düzenli olarak gözden geçir; en etkili %20’ye odaklandığından emin ol.',
        'Süreçlere yenilik katmak için “Kaşifler”le çalış.',
      ],
      hi: [
        'अत्यधिक पूर्णता की तलाश से बचें; योजनाओं में लचीला बफर छोड़ें।',
        'नियमित रूप से समीक्षा करें ताकि सबसे प्रभावशाली 20% पर ध्यान केंद्रित रहे।',
        'प्रक्रियाओं में नवाचार लाने के लिए “अन्वेषकों” के साथ काम करें।',
      ],
    },
  },

  analyst: {
    title: {
      zh: '分析者（数据理性）｜测试结果',
      'zh-Hant': '分析者（數據理性）｜測試結果',
      en: 'Analyst (Data-Driven) | Test Result',
      ja: '分析者（データ志向）｜結果',
      ko: '분석가(데이터 중심) | 결과',
      fr: 'Analyste (Axé sur les données) | Résultat du test',
      de: 'Analyst (Datenorientiert) | Testergebnis',
      ar: 'المحلل (مدفوع بالبيانات) | نتيجة الاختبار',
      ru: 'Аналитик (ориентированный на данные) | Результат теста',
      es: 'Analista (Orientado a los datos) | Resultado del test',
      it: 'Analista (guidato dai dati) | Risultato del test',
      tr: 'Analist (Veri Odaklı) | Test Sonucu',
      hi: 'विश्लेषक (डेटा संचालित) | परीक्षण परिणाम',
    },
    resultType: {
      zh: '分析者（数据理性）<span class="badge">非临床 · 娱乐向</span>',
      'zh-Hant': '分析者（數據理性）<span class="badge">非臨床 · 娛樂向</span>',
      en: 'Analyst (Data-Driven)<span class="badge">Non-clinical · For fun</span>',
      ja: '分析者（データ志向）<span class="badge">非臨床・娯楽向け</span>',
      ko: '분석가(데이터 중심)<span class="badge">비임상 · 재미용</span>',
      fr: 'Analyste (Axé sur les données)<span class="badge">Non clinique · Ludique</span>',
      de: 'Analyst (Datenorientiert)<span class="badge">Nicht klinisch · Zur Unterhaltung</span>',
      ar: 'المحلل (مدفوع بالبيانات)<span class="badge">غير سريري · للمتعة</span>',
      ru: 'Аналитик (ориентированный на данные)<span class="badge">Неклинический · Для развлечения</span>',
      es: 'Analista (Orientado a los datos)<span class="badge">No clínico · Con fines recreativos</span>',
      it: 'Analista (guidato dai dati)<span class="badge">Non clinico · Per divertimento</span>',
      tr: 'Analist (Veri Odaklı)<span class="badge">Klinik dışı · Eğlence amaçlı</span>',
      hi: 'विश्लेषक (डेटा संचालित)<span class="badge">गैर-चिकित्सीय · मनोरंजन हेतु</span>',
    },
    kv: {
      zh: '类型代号：<code>analyst</code>',
      'zh-Hant': '類型代號：<code>analyst</code>',
      en: 'Type code: <code>analyst</code>',
      ja: 'タイプコード：<code>analyst</code>',
      ko: '유형 코드: <code>analyst</code>',
      fr: 'Code de type : <code>analyst</code>',
      de: 'Typcode: <code>analyst</code>',
      ar: 'رمز النوع: <code>analyst</code>',
      ru: 'Код типа: <code>analyst</code>',
      es: 'Código de tipo: <code>analyst</code>',
      it: 'Codice tipo: <code>analyst</code>',
      tr: 'Tür kodu: <code>analyst</code>',
      hi: 'प्रकार कोड: <code>analyst</code>',
    },
    strengths: {
      zh: [
        '以证据为导向，推理严谨、判断稳健。',
        '善用模型和数据揭示本质问题。',
        '擅长构建评估体系，持续优化。',
      ],
      'zh-Hant': [
        '以證據為導向，推理嚴謹、判斷穩健。',
        '善用模型和數據揭示本質問題。',
        '擅長構建評估體系，持續優化。',
      ],
      en: [
        'Evidence-oriented, with rigorous reasoning and sound judgment.',
        'Skilled at using models and data to reveal core issues.',
        'Good at building evaluation systems and optimizing continuously.',
      ],
      ja: [
        '証拠重視で、推論が緻密かつ判断が確か。',
        'モデルやデータを活用して本質的な問題を明らかにするのが得意。',
        '評価システムの構築が得意で、継続的な最適化を行う。',
      ],
      ko: [
        '증거 중심으로 사고하며, 추리가 치밀하고 판단이 안정적이다.',
        '모델과 데이터를 활용해 본질적인 문제를 드러내는 데 능숙하다.',
        '평가 체계를 구축하고 지속적으로 최적화하는 데 능하다.',
      ],
      fr: [
        'Orienté vers les preuves, avec un raisonnement rigoureux et un jugement solide.',
        'Sait utiliser modèles et données pour révéler les problèmes essentiels.',
        'Doué pour construire des systèmes d’évaluation et les optimiser en continu.',
      ],
      de: [
        'Beweisorientiert, mit strenger Argumentation und fundiertem Urteilsvermögen.',
        'Setzt Modelle und Daten geschickt ein, um Kernprobleme aufzudecken.',
        'Gut im Aufbau von Bewertungssystemen und deren kontinuierlicher Optimierung.',
      ],
      ar: [
        'موجّه بالأدلة مع منطق صارم وحكم متين.',
        'ماهر في استخدام النماذج والبيانات للكشف عن القضايا الجوهرية.',
        'بارع في بناء أنظمة التقييم وتحسينها باستمرار.',
      ],
      ru: [
        'Ориентируется на доказательства, с строгой логикой и надежными суждениями.',
        'Умеет использовать модели и данные для выявления ключевых проблем.',
        'Хорошо строит системы оценки и постоянно их улучшает.',
      ],
      es: [
        'Orientado a la evidencia, con razonamiento riguroso y juicio sólido.',
        'Hábil en utilizar modelos y datos para revelar los problemas esenciales.',
        'Bueno construyendo sistemas de evaluación y optimizándolos continuamente.',
      ],
      it: [
        'Orientato alle prove, con ragionamenti rigorosi e giudizio solido.',
        "Abile nell'usare modelli e dati per rivelare i problemi fondamentali.",
        'Capace di costruire sistemi di valutazione e di ottimizzarli continuamente.',
      ],
      tr: [
        'Kanıta odaklıdır, titiz mantık yürütür ve sağlam hüküm verir.',
        'Modelleri ve verileri kullanarak temel sorunları ortaya çıkarmada ustadır.',
        'Değerlendirme sistemleri kurmada ve bunları sürekli geliştirmede iyidir.',
      ],
      hi: [
        'साक्ष्य-उन्मुख, तर्क में कठोर और निर्णय में दृढ़।',
        'मॉडल और डेटा का उपयोग कर मूल समस्याओं को उजागर करने में कुशल।',
        'मूल्यांकन प्रणालियाँ बनाने और उन्हें निरंतर बेहतर करने में सक्षम।',
      ],
    },
    tips: {
      zh: [
        '警惕“分析瘫痪”，给研究设定明确的决策节点。',
        '与业务伙伴共创，避免报告“只看不改”。',
        '与“连接者”协作，把洞见翻译为通俗可执行的话术。',
      ],
      'zh-Hant': [
        '警惕「分析癱瘓」，給研究設定明確的決策節點。',
        '與業務夥伴共創，避免報告「只看不改」。',
        '與「連結者」協作，把洞見翻譯為通俗可執行的話術。',
      ],
      en: [
        'Beware of “analysis paralysis”; set clear decision points.',
        'Co-create with business partners to ensure reports lead to action.',
        'Collaborate with “Connectors” to translate insights into accessible, actionable language.',
      ],
      ja: [
        '「分析麻痺」に注意し、明確な意思決定ポイントを設けよう。',
        'ビジネスパートナーと共創し、報告が「見るだけで終わる」ことを防ごう。',
        '「連結者」と協力し、洞察をわかりやすく実行可能な言葉に落とし込もう。',
      ],
      ko: [
        '“분석 마비”를 경계하고 명확한 의사 결정 지점을 설정하라.',
        '비즈니스 파트너와 함께 만들어 보고서가 “보기만 하고 바뀌지 않는” 일을 막아라.',
        '“연결자”와 협업하여 통찰을 이해하기 쉽고 실행 가능한 언어로 옮겨라.',
      ],
      fr: [
        'Attention à la « paralysie par l’analyse »; définissez des points de décision clairs.',
        'Co-créez avec les partenaires métiers pour que les rapports conduisent à l’action.',
        'Collaborez avec des « Connecteurs » pour traduire les idées en langage accessible et actionnable.',
      ],
      de: [
        'Hüte dich vor „Analyse-Paralyse“ und setze klare Entscheidungspunkte.',
        'Arbeite mit Geschäftspartnern zusammen, damit Berichte zu Taten führen.',
        'Arbeite mit „Vernetzer:innen“ zusammen, um Erkenntnisse in verständliche, umsetzbare Sprache zu übersetzen.',
      ],
      ar: [
        'احذر «شلل التحليل» وحدّد نقاط قرار واضحة.',
        'تعاون مع شركاء الأعمال لضمان أن تؤدي التقارير إلى إجراءات.',
        'تعاون مع «الروابط» لتحويل الرؤى إلى لغة مفهومة وقابلة للتنفيذ.',
      ],
      ru: [
        'Остерегайтесь «аналитического паралича»; устанавливайте четкие точки принятия решений.',
        'Сотрудничайте с бизнес-партнёрами, чтобы отчёты приводили к действиям.',
        'Сотрудничайте с «коммуникаторами», чтобы переводить инсайты на понятный и прикладной язык.',
      ],
      es: [
        'Cuidado con la «parálisis por análisis»; establece puntos claros de decisión.',
        'Co-crea con socios de negocio para que los informes conduzcan a acciones.',
        'Colabora con «Conectores» para traducir las ideas en un lenguaje comprensible y accionable.',
      ],
      it: [
        'Attenzione alla “paralisi da analisi”; stabilisci punti decisionali chiari.',
        'Cocrea con i partner di business per fare in modo che i report portino ad azioni.',
        'Collabora con i “Connettori” per tradurre gli insight in un linguaggio comprensibile e attuabile.',
      ],
      tr: [
        '“Analiz felci”ne dikkat et; araştırmalara net karar noktaları koy.',
        'Raporların eyleme dönüşmesi için iş ortaklarıyla birlikte çalış.',
        'İçgörüleri anlaşılır ve uygulanabilir dile çevirmek için “Bağlayıcılar”la işbirliği yap.',
      ],
      hi: [
        '“विश्लेषण पक्षाघात” से सावधान रहें; शोध के लिए स्पष्ट निर्णय बिंदु निर्धारित करें।',
        'रिपोर्टों को कार्रवाई में बदलने के लिए व्यापार साझेदारों के साथ सह-निर्माण करें।',
        'अंतर्दृष्टियों को सरल और क्रियान्वयन योग्य भाषा में बदलने के लिए “संबंधकों” के साथ सहयोग करें।',
      ],
    },
  },
};

function initResult(type) {
  const ui = RES_UI[LANG];
  // use descriptive variable name to avoid confusion with connector score later
  const content = RES_CONTENT[type];

  document.title = content.title[LANG];
  document.querySelector('h1').textContent = ui.header;
  document.querySelector('.result-type').innerHTML = content.resultType[LANG];
  document.querySelector('.kv').innerHTML = content.kv[LANG];
  document.querySelectorAll('h3')[0].textContent = ui.strengthsTitle;
  document.querySelectorAll('ul')[0].innerHTML = content.strengths[LANG].map(li => `<li>${li}</li>`).join('');
  document.querySelectorAll('h3')[1].textContent = ui.tipsTitle;
  document.querySelectorAll('ul')[1].innerHTML = content.tips[LANG].map(li => `<li>${li}</li>`).join('');
  document.querySelectorAll('h3')[2].textContent = ui.scoresTitle;
  document.getElementById('scores').textContent = ui.loading;
  document.querySelector('.btns a').textContent = ui.again;
  document.getElementById('copyBtn').textContent = ui.copy;
  document.querySelector('footer p').innerHTML = ui.footer;

  (function () {
    const p = new URLSearchParams(location.search);
    const a = Number(p.get('analyst') || 0);
    const e = Number(p.get('explorer') || 0);
    const o = Number(p.get('organizer') || 0);
    const cScore = Number(p.get('connector') || 0);
    const labels = ui.labels;
    const scores = [
      [labels.connector, cScore],
      [labels.explorer, e],
      [labels.organizer, o],
      [labels.analyst, a],
    ];
    const total = a + e + o + cScore;
    const parts = scores.map(([k, v]) => k + ui.colon + v).join(ui.sep);
    document.getElementById('scores').textContent = parts + (total ? ui.sep + ui.totalLabel + total : '');
  })();

  document.getElementById('copyBtn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      alert(ui.copySuccess);
    } catch (err) {
      alert(ui.copyFail);
    }
  });
}

