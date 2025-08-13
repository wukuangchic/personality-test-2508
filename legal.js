// Language detection and translations for legal pages
const LANG = (() => {
  const params = new URLSearchParams(window.location.search);
  const override = params.get('lang');
  const supported = ['zh','zh-Hant','en','ja','ko','fr','de','ar','ru','es','it','tr','hi'];
  if (override && supported.includes(override)) {
    return override;
  }
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
})();

const LEGAL = {
  links: {
    privacy: {
      zh: '隐私政策',
      'zh-Hant': '隱私政策',
      en: 'Privacy Policy',
      ja: 'プライバシーポリシー',
      ko: '개인정보 처리방침',
      fr: 'Politique de confidentialité',
      de: 'Datenschutzerklärung',
      ar: 'سياسة الخصوصية',
      ru: 'Политика конфиденциальности',
      es: 'Política de privacidad',
      it: 'Informativa sulla privacy',
      tr: 'Gizlilik Politikası',
      hi: 'गोपनीयता नीति',
    },
    terms: {
      zh: '服务条款',
      'zh-Hant': '服務條款',
      en: 'Terms of Service',
      ja: '利用規約',
      ko: '서비스 약관',
      fr: "Conditions d'utilisation",
      de: 'Nutzungsbedingungen',
      ar: 'شروط الخدمة',
      ru: 'Условия использования',
      es: 'Términos del servicio',
      it: 'Termini di servizio',
      tr: 'Hizmet Şartları',
      hi: 'सेवा की शर्तें',
    },
  },
  copyright: {
    zh: '© 2025 Psychotest',
    'zh-Hant': '© 2025 Psychotest',
    en: '© 2025 Psychotest',
    ja: '© 2025 Psychotest',
    ko: '© 2025 Psychotest',
    fr: '© 2025 Psychotest',
    de: '© 2025 Psychotest',
    ar: '© 2025 Psychotest',
    ru: '© 2025 Psychotest',
    es: '© 2025 Psychotest',
    it: '© 2025 Psychotest',
    tr: '© 2025 Psychotest',
    hi: '© 2025 Psychotest',
  },
  privacy: {
    title: {
      zh: '隐私政策',
      'zh-Hant': '隱私政策',
      en: 'Privacy Policy',
      ja: 'プライバシーポリシー',
      ko: '개인정보 처리방침',
      fr: 'Politique de confidentialité',
      de: 'Datenschutzerklärung',
      ar: 'سياسة الخصوصية',
      ru: 'Политика конфиденциальности',
      es: 'Política de privacidad',
      it: 'Informativa sulla privacy',
      tr: 'Gizlilik Politikası',
      hi: 'गोपनीयता नीति',
    },
    content: {
      zh: '<p>我们尊重您的隐私。本网站不收集可识别个人身份的信息。广告和分析可能会使用 Cookie。</p><p>使用本网站即表示您同意谷歌及其他第三方按照其政策处理数据。</p>',
      'zh-Hant': '<p>我們尊重您的隱私。本網站不收集可辨識個人身分的資訊。廣告與分析可能會使用 Cookie。</p><p>使用本網站即表示您同意 Google 及其他第三方依其政策處理資料。</p>',
      en: '<p>We respect your privacy. This site does not collect personally identifiable information. Ads and analytics may use cookies.</p><p>By using this site, you agree to the data practices of Google and other third parties.</p>',
      ja: '<p>私たちはあなたのプライバシーを尊重します。本サイトは個人を特定できる情報を収集しません。広告や解析でクッキーを使用する場合があります。</p><p>本サイトを利用することで、Google など第三者のデータ取扱いに同意したものとみなされます。</p>',
      ko: '<p>우리는 사용자의 프라이버시를 존중합니다. 본 사이트는 개인을 식별할 수 있는 정보를 수집하지 않습니다. 광고 및 분석 도구가 쿠키를 사용할 수 있습니다.</p><p>본 사이트를 이용함으로써 Google 및 기타 제3자의 데이터 처리 방식에 동의하는 것입니다.</p>',
      fr: '<p>Nous respectons votre vie privée. Ce site ne collecte aucune information personnellement identifiable. Les publicités et l’analyse peuvent utiliser des cookies.</p><p>En utilisant ce site, vous acceptez les pratiques de données de Google et d’autres tiers.</p>',
      de: '<p>Wir respektieren Ihre Privatsphäre. Diese Website sammelt keine personenbezogenen Daten. Werbung und Analysen können Cookies verwenden.</p><p>Durch die Nutzung dieser Website stimmen Sie den Datenpraktiken von Google und anderen Dritten zu.</p>',
      ar: '<p>نحن نحترم خصوصيتك. هذا الموقع لا يجمع معلومات شخصية يمكن التعرف عليها. قد تستخدم الإعلانات والتحليلات ملفات تعريف الارتباط.</p><p>باستخدامك لهذا الموقع فإنك توافق على ممارسات البيانات لدى Google والجهات الأخرى.</p>',
      ru: '<p>Мы уважаем вашу конфиденциальность. Этот сайт не собирает персональные данные. Реклама и аналитика могут использовать cookies.</p><p>Используя сайт, вы соглашаетесь с правилами обработки данных Google и других сторон.</p>',
      es: '<p>Respetamos tu privacidad. Este sitio no recopila información personal identificable. Los anuncios y la analítica pueden usar cookies.</p><p>Al usar este sitio, aceptas las prácticas de datos de Google y otros terceros.</p>',
      it: '<p>Rispettiamo la tua privacy. Questo sito non raccoglie informazioni personali identificabili. Gli annunci e le analisi possono utilizzare cookie.</p><p>Utilizzando questo sito, accetti le pratiche sui dati di Google e di altre terze parti.</p>',
      tr: '<p>Gizliliğinize saygı duyuyoruz. Bu site kişisel olarak tanımlanabilir bilgi toplamaz. Reklamlar ve analizler çerez kullanabilir.</p><p>Bu siteyi kullanarak Google ve diğer üçüncü tarafların veri uygulamalarını kabul etmiş olursunuz.</p>',
      hi: '<p>हम आपकी गोपनीयता का सम्मान करते हैं। यह साइट व्यक्तिगत रूप से पहचान योग्य जानकारी एकत्र नहीं करती। विज्ञापन और विश्लेषण के लिए कुकीज़ का उपयोग किया जा सकता है।</p><p>इस साइट का उपयोग करने पर, आप Google और अन्य तृतीय पक्षों की डेटा नीतियों से सहमत होते हैं।</p>',
    },
  },
  terms: {
    title: {
      zh: '服务条款',
      'zh-Hant': '服務條款',
      en: 'Terms of Service',
      ja: '利用規約',
      ko: '서비스 약관',
      fr: "Conditions d'utilisation",
      de: 'Nutzungsbedingungen',
      ar: 'شروط الخدمة',
      ru: 'Условия использования',
      es: 'Términos del servicio',
      it: 'Termini di servizio',
      tr: 'Hizmet Şartları',
      hi: 'सेवा की शर्तें',
    },
    content: {
      zh: '<p>使用本网站即表示您同意这些条款。本测试仅供娱乐，不构成专业建议。</p><p>我们不对因使用本网站而产生的任何损失负责。</p>',
      'zh-Hant': '<p>使用本網站即表示您同意這些條款。本測試僅供娛樂，不構成專業建議。</p><p>對因使用本網站而產生的任何損失，我們概不負責。</p>',
      en: '<p>By using this site, you agree to these terms. The test is for entertainment only and not professional advice.</p><p>We are not liable for any damages arising from the use of this site.</p>',
      ja: '<p>本サイトを利用することで、あなたはこれらの利用規約に同意したことになります。本テストは娯楽目的であり、専門的な助言ではありません。</p><p>本サイトの利用によって生じる損害について、当方は責任を負いません。</p>',
      ko: '<p>본 사이트를 이용하면 이 약관에 동의하는 것으로 간주됩니다. 이 테스트는 오락 목적이며 전문적인 조언이 아닙니다.</p><p>본 사이트 사용으로 발생하는 어떠한 손해에 대해서도 당사는 책임을 지지 않습니다.</p>',
      fr: '<p>En utilisant ce site, vous acceptez ces conditions. Ce test est uniquement destiné au divertissement et ne constitue pas un conseil professionnel.</p><p>Nous ne sommes pas responsables des dommages résultant de l’utilisation de ce site.</p>',
      de: '<p>Durch die Nutzung dieser Website stimmen Sie diesen Bedingungen zu. Der Test dient nur der Unterhaltung und ist keine professionelle Beratung.</p><p>Wir haften nicht für Schäden, die aus der Nutzung dieser Website entstehen.</p>',
      ar: '<p>باستخدامك لهذا الموقع فإنك توافق على هذه الشروط. هذا الاختبار للترفيه فقط وليس نصيحة مهنية.</p><p>نحن غير مسؤولين عن أي أضرار ناتجة عن استخدام هذا الموقع.</p>',
      ru: '<p>Используя сайт, вы соглашаетесь с этими условиями. Тест предназначен только для развлечения и не является профессиональным советом.</p><p>Мы не несем ответственности за какой-либо ущерб, возникший из-за использования сайта.</p>',
      es: '<p>Al usar este sitio, aceptas estos términos. La prueba es solo para entretenimiento y no constituye asesoramiento profesional.</p><p>No somos responsables de los daños derivados del uso de este sitio.</p>',
      it: '<p>Utilizzando questo sito accetti questi termini. Il test è solo a scopo di intrattenimento e non costituisce consulenza professionale.</p><p>Non siamo responsabili per eventuali danni derivanti dall\'uso di questo sito.</p>',
      tr: '<p>Bu siteyi kullanarak bu şartları kabul etmiş olursunuz. Test yalnızca eğlence amaçlıdır ve profesyonel tavsiye değildir.</p><p>Bu siteyi kullanmaktan doğabilecek zararlardan sorumlu değiliz.</p>',
      hi: '<p>इस साइट का उपयोग करके आप इन शर्तों से सहमत होते हैं। यह परीक्षण केवल मनोरंजन के लिए है और कोई पेशेवर सलाह नहीं है।</p><p>इस साइट के उपयोग से होने वाले किसी भी नुकसान के लिए हम जिम्मेदार नहीं हैं।</p>',
    },
  },
};

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  const page = document.body.dataset.page;
  const data = LEGAL[page];
  document.title = data.title[LANG] + '｜Psychotest';
  document.getElementById('title').textContent = data.title[LANG];
  document.getElementById('content').innerHTML = data.content[LANG];
  document.getElementById('privacyLink').textContent = LEGAL.links.privacy[LANG];
  document.getElementById('termsLink').textContent = LEGAL.links.terms[LANG];
  document.getElementById('copyright').textContent = LEGAL.copyright[LANG];
});
