export interface Work {
  id: string;
  number: number;
  titleFa: string;
  titleEn: string;
  opusFa: string;
  opusEn: string;
  year: number;
  isWorldPremiere: boolean;
  instrumentationFa: string;
  instrumentationEn: string;
  performersFa: { role: string; name: string }[];
  performersEn: { role: string; name: string }[];
  conductorFa?: string;
  conductorEn?: string;
  ensemblesFa: string[];
  ensemblesEn: string[];
  descriptionFa: string;
  descriptionEn: string;
}

export interface Artist {
  id: string;
  nameFa: string;
  nameEn: string;
  roleFa: string;
  roleEn: string;
  image: string;
  altFa: string;
  altEn: string;
  paragraphsFa: string[];
  paragraphsEn: string[];
  editorialNoteFa?: string;
  editorialNoteEn?: string;
  tagsFa?: string[];
  tagsEn?: string[];
}

export interface Ensemble {
  id: string;
  nameFa: string;
  nameEn: string;
  leaderFa?: string;
  leaderEn?: string;
  sectionsFa: { sectionName: string; members: string[] }[];
  sectionsEn: { sectionName: string; members: string[] }[];
}

export const brochureData = {
  event: {
    titleFa: 'موسیقی نو در ایران',
    titleEn: 'New Music in Iran',
    subtitleFa: 'اجرای آثاری از علیرضا مشایخی',
    subtitleEn: 'Performance of Works by Alireza Mashayekhi',
    organizerFa: 'گروه موسیقی تهران',
    organizerEn: 'Tehran Music Group',
    dateFa: 'پنج‌شنبه ۱۴ آبان‌ماه ۱۴۰۵',
    dateEn: 'Thursday, November 5, 2026',
    timeFa: 'ساعت ۲۱:۳۰',
    timeEn: '21:30 (9:30 PM)',
    venueFa: 'تالار وحدت تهران',
    venueEn: 'Vahdat Hall, Tehran',
    venueAddressFa: 'تهران، خیابان حافظ، خیابان استاد شهریار',
    venueAddressEn: 'Ostad Shahriar St., Hafez Ave., Tehran, Iran',
    descriptionFa: 'کنسرت آثار برجسته آهنگساز پیشگام علیرضا مشایخی با همراهی سولیست‌ها، کوارتت زهی نماد، آنسامبل کوبه‌ای کاروان و ارکستر زهی خلیج‌فارس به رهبری آرش امینی.',
    descriptionEn: 'A seminal concert featuring works by pioneer composer Alireza Mashayekhi, performed by distinguished soloists, Namad String Quartet, Karavan Percussion Ensemble, and the Persian Gulf String Orchestra under the baton of Arash Amini.',
  },

  essay: {
    titleFa: 'تداوم تفکر',
    titleEn: 'Continuity of Thought',
    subtitleFa: 'مقدمه‌ای بر زیبایی‌شناسی موسیقی نو',
    subtitleEn: 'An Introduction to the Aesthetics of New Music',
    authorFa: 'دکتر هانی اشرفی',
    authorEn: 'Dr. Hani Ashrafi',
    paragraphsFa: [
      'اگر برای موسیقی، فراتر از نقش‌های متداول آن در تفریح، سرگرمی، بازی عواطف، همراهی آیین‌ها و مناسک و مجالس، تراپی و مدیتیشن، احیای نوستالژی، آموزش‌های ملودیک و ... جایگاهی در نظر بگیریم، به گونه‌ای هنر جدی می‌رسیم که علیرضا مشایخی آن را «تداوم تفکر» نامیده است.',
      'اما هر یک از این دو واژه در اینجا چه معنایی دارد؟',
      'تداوم: پیوستگی تاریخی جریان موسیقی و درعین‌حال حرکت دیالکتیکی درونی آن است که چنین «تداوم»ی را رقم زده است؛ یعنی صیرورت یا «نو شدن» مدام را جایگزین رکود و تکرار مرداب‌گونۀ موسیقی تفننی کرده است و از سوی دیگر، به‌یک‌باره و دفعی از خلأ به وجود نیامده، بلکه بسط و گسترش منطقی سنت موسیقایی پیشینی است.',
      'تفکر: امروز در میان فرهیختگان، دیگر کمتر کسی جدایی مطلق میان موسیقی و تفکر را می‌پذیرد؛ بلکه موسیقی نوعی فکرکردن با زبان صوت است. تعامل ‌آمیختۀ میان اصوات، سکوت‌ها، زمان‌ها، مکان‌ها، تمبرها، کنش‌ها، مفاهیم و ... ازپیش‌تعیین‌شده و تصادفی، زبانی را شکل می‌دهد که موسیقی (ترکیب آهنگساز، نوازنده و شنونده) به‌واسطۀ آن می‌اندیشد.',
      'بدین معناست که موسیقی جدی زبان حقیقت تاریخی بشر است؛ صدای روح زمانه است؛ حرکت پیوستۀ آگاهی در جست‌وجوی رازآلودگی ناآگاه است؛ تداوم تفکر است. عنوان «موسیقی نو» نیز در واقع بیانگر همین تطور و دگردیسی حقیقت در بستر تاریخ است.',
      'مشایخی این تداوم و پیوستگی را نه‌فقط در راستای محور زمان، بلکه در عرصۀ جغرافیا نیز به آزمون می‌گذارد. آنچه تحت عنوان موسیقی «چندفرهنگی» از او می‌شنویم، در واقع حاصل گفت‌وگوی سنت‌های موسیقایی گوناگون در جهان است که زمینۀ متفاوت دیگری را برای تفکر تدارک می‌بیند. همچنین دستۀ آثار ایرانی مشایخی، در واقع جست‌وجوی امکان‌های جدید اندیشه در بستر نغمه‌های فولکلور و موسیقی آوازی ایران است که در تقابل با تکرار این‌همان و ایستای موسیقی ردیفی قاجار، روزنه‌ای از امید به شکل‌گیری یک سنت موسیقی جدی ایرانی را بر ما می‌گشاید.',
      'در همۀ محافل فرهنگی جهان این باور وجود دارد که فهم عمیق چنین آثاری نیازمند ممارست، درنگ و تکرار است. طعم شیرین تکراری یک موسیقی تفننی به‌سرعت در خودآگاه ما پخش می‌شود و بدون هیچ چالش اثرگذاری، به همان سرعت هم محو خواهد شد؛ اما بهره‌مندی از طعم گَس موسیقی تفکر، همان‌قدر که به‌جهت «نو» بودنش دیریاب است، اثرگذار و ماندگار نیز خواهد بود و انتظار می‌رود که فهم بنیادی ما از زندگی را تحت تأثیر قرار دهد. مشایخی برای این ویژگی از عنوان «نوییتی» بهره می‌برد. در نتیجه، می‌بایست خود را در برابر رخدادی چالش‌برانگیز بیابیم که فهم آن در گرو مشارکت فعال اندیشۀ ما، به‌عنوان مخاطب، است.',
    ],
    paragraphsEn: [
      'If we envision for music a standing beyond its conventional roles in leisure, entertainment, the play of sentiments, accompaniment of rituals and gatherings, therapy, meditation, the revival of nostalgia, and melodic pedagogy, we arrive at a mode of serious art that Alireza Mashayekhi has termed the "Continuity of Thought."',
      'Yet what do each of these two terms signify here?',
      'Continuity: It is the historical unbrokenness of the musical current coupled with its inner dialectical movement that generates such "continuity"; that is, replacing the stagnant, marsh-like repetition of divertissement with ceaseless becoming or "renewal." Concurrently, it has not emerged ex nihilo or precipitously, but rather represents the logical expansion and development of predecessor musical traditions.',
      'Thought: Today among intellectuals, scarcely anyone maintains an absolute bifurcation between music and thought; music is, in essence, a mode of thinking through the medium of sonic language. The intricate interplay of sounds, silences, temporalities, spatial dimensions, timbres, gestures, concepts—both predetermined and indeterminate—crystallizes a language whereby music (the triad of composer, performer, and listener) thinks.',
      'In this sense, serious music is the dialect of human historical truth; the voice of the Zeitgeist; the perpetual voyage of consciousness seeking the mysteries of the unconscious; it is the continuity of thought. The designation "New Music" is in truth the expression of this very evolution and metamorphosis of truth across historical horizons.',
      'Mashayekhi puts this continuity to the test not only along the temporal axis, but across the geographic plane as well. What we experience in his oeuvre under the mantle of "multicultural music" is the genuine product of dialogue among disparate musical traditions of the world, preparing a distinct matrix for contemplation. Moreover, his Iranian works explore nascent possibilities of thought rooted in Iranian folk melodies and vocal heritage, opening—in sharp contradistinction to the static tautology of Qajar Radif music—a window of hope toward the crystallization of an Iranian serious music tradition.',
      'Throughout global cultural circles, it is widely recognized that the profound apprehension of such works demands rigorous engagement, contemplation, and iteration. The repetitive sweetness of divertissement swiftly diffuses through our consciousness and fades with equal alacrity, leaving no imprint; but savoring the astringent, tart depth of contemplative music—as elusive as it is by virtue of its "newness"—proves enduring, transforming our foundational comprehension of existence. Mashayekhi employs the concept of "Newity" to designate this quality. Consequently, we must prepare ourselves before a challenging aesthetic event whose understanding hinges upon the active intellectual participation of us, the audience.',
    ],
  },

  works: [
    {
      id: 'work-1',
      number: 1,
      titleFa: 'کنسرتو شمارۀ ۲ برای ویولن و سازهای کوبه‌ای',
      titleEn: 'Violin Concerto No. 2 for Violin and Percussion',
      opusFa: 'اپوس ۲۱۲ (۲۰۱۲)',
      opusEn: 'Op. 212 (2012)',
      year: 2012,
      isWorldPremiere: false,
      instrumentationFa: 'ویولن سولو و سازهای کوبه‌ای',
      instrumentationEn: 'Solo Violin and Percussion',
      performersFa: [
        { role: 'سولیست ویولن', name: 'امین غفاری' },
        { role: 'آنسامبل کوبه‌ای', name: 'آنسامبل کوبه‌ای کاروان' },
      ],
      performersEn: [
        { role: 'Violin Soloist', name: 'Amin Ghaffari' },
        { role: 'Percussion Ensemble', name: 'Karavan Percussion Ensemble' },
      ],
      conductorFa: 'آرش امینی',
      conductorEn: 'Arash Amini',
      ensemblesFa: ['آنسامبل کوبه‌ای کاروان'],
      ensemblesEn: ['Karavan Percussion Ensemble'],
      descriptionFa: 'گفت‌وگویی دراماتیک میان طنین چابک ویولن معاصر و بافت‌های ریتمیک کوبه‌ای؛ تلاقی مدرنیسم ساختارگرا و تنوع تمبرهای پرکاشن در ساختاری منسجم و پویا.',
      descriptionEn: 'A dramatic dialogue between the agile virtuosity of the contemporary violin and intricate percussive textures, uniting structural modernism with rich timbral contrasts.',
    },
    {
      id: 'work-2',
      number: 2,
      titleFa: '«پیچک دوم» برای دو ریکوردر، ویولنسل و سازهای کوبه‌ای',
      titleEn: '"Pichak II" for Two Recorders, Cello, and Percussion',
      opusFa: 'اپوس ۲۹۳ (۲۰۱۹)',
      opusEn: 'Op. 293 (2019)',
      year: 2019,
      isWorldPremiere: true,
      instrumentationFa: 'دو ریکوردر، ویولنسل و سازهای کوبه‌ای',
      instrumentationEn: 'Two Recorders, Cello, and Percussion',
      performersFa: [
        { role: 'ریکوردر', name: 'فرهود بیگلربیگی، پگاه مصطفایی' },
        { role: 'ویولنسل', name: 'هامون قادری' },
        { role: 'آنسامبل کوبه‌ای', name: 'آنسامبل کوبه‌ای کاروان' },
      ],
      performersEn: [
        { role: 'Recorders', name: 'Farhood Biglarbeigi, Pegah Mostafaei' },
        { role: 'Cello', name: 'Hamoon Ghaderi' },
        { role: 'Percussion Ensemble', name: 'Karavan Percussion Ensemble' },
      ],
      ensemblesFa: ['آنسامبل کوبه‌ای کاروان'],
      ensemblesEn: ['Karavan Percussion Ensemble'],
      descriptionFa: 'نخستین اجرای جهانی اثر. حرکتی پیچک‌وار در چندصدایی نوین با ترکیب نامتعارف فلوت‌های ریکوردر، بم‌آوایی ویولنسل و ضرب‌آهنگ سازهای کوبه‌ای.',
      descriptionEn: 'World Premiere. An organic twisting polyphony intertwining ancient wind timbres of recorders with the resonance of the cello and exploratory percussion.',
    },
    {
      id: 'work-3',
      number: 3,
      titleFa: 'کوارتت زهی شمارۀ ۴',
      titleEn: 'String Quartet No. 4',
      opusFa: 'اپوس ۱۷۶ (۲۰۰۶)',
      opusEn: 'Op. 176 (2006)',
      year: 2006,
      isWorldPremiere: false,
      instrumentationFa: 'کوارتت زهی (دو ویولن، ویولا، ویولنسل)',
      instrumentationEn: 'String Quartet (Two Violins, Viola, Cello)',
      performersFa: [
        { role: 'اجرا', name: 'کوارتت زهی نماد' },
      ],
      performersEn: [
        { role: 'Performance', name: 'Namad String Quartet' },
      ],
      ensemblesFa: ['کوارتت زهی نماد'],
      ensemblesEn: ['Namad String Quartet'],
      descriptionFa: 'نمونه‌ای درخشان از رویکرد آهنگساز به فرم در کوارتت زهی معاصر؛ کاوش در فاصله‌ها، سکوت‌های پرمعنا و دیالوگ درونی میان چهار ساز زهی.',
      descriptionEn: 'A masterwork exploring contemporary string quartet architecture, investigating micro-intervals, profound silences, and chamber intimacy.',
    },
    {
      id: 'work-4',
      number: 4,
      titleFa: 'کوارتت زهی شمارۀ ۶ «حادثۀ معکوس» برای کوارتت زهی و سازهای کوبه‌ای',
      titleEn: 'String Quartet No. 6 "Inverted Event" for String Quartet and Percussion',
      opusFa: 'اپوس ۳۰۲ (۲۰۲۱)',
      opusEn: 'Op. 302 (2021)',
      year: 2021,
      isWorldPremiere: true,
      instrumentationFa: 'کوارتت زهی و سازهای کوبه‌ای',
      instrumentationEn: 'String Quartet and Percussion',
      performersFa: [
        { role: 'کوارتت زهی', name: 'کوارتت زهی نماد' },
        { role: 'آنسامبل کوبه‌ای', name: 'آنسامبل کوبه‌ای کاروان' },
      ],
      performersEn: [
        { role: 'String Quartet', name: 'Namad String Quartet' },
        { role: 'Percussion Ensemble', name: 'Karavan Percussion Ensemble' },
      ],
      conductorFa: 'آرش امینی',
      conductorEn: 'Arash Amini',
      ensemblesFa: ['کوارتت زهی نماد', 'آنسامبل کوبه‌ای کاروان'],
      ensemblesEn: ['Namad String Quartet', 'Karavan Percussion Ensemble'],
      descriptionFa: 'نخستین اجرای جهانی اثر. بازاندیشی مفهوم زمان و رویداد موسیقایی به شیوه معکوس؛ گسست و پیوست‌های دینامیک با هم‌نشینی کوارتت نماد و کوبه‌ای‌های کاروان.',
      descriptionEn: 'World Premiere. A philosophical deconstruction of musical event and temporality in reverse motion, merging chamber strings with resonant percussive forces.',
    },
    {
      id: 'work-5',
      number: 5,
      titleFa: '«دریا» یک سوئیت ایرانی برای ارکستر زهی',
      titleEn: '"Darya" (The Sea) – An Iranian Suite for String Orchestra',
      opusFa: 'اپوس ۱۳۷، شمارۀ ۱ (۱۹۹۸)',
      opusEn: 'Op. 137, No. 1 (1998)',
      year: 1998,
      isWorldPremiere: false,
      instrumentationFa: 'ارکستر زهی',
      instrumentationEn: 'String Orchestra',
      performersFa: [
        { role: 'ارکستر', name: 'ارکستر زهی خلیج‌فارس' },
      ],
      performersEn: [
        { role: 'Orchestra', name: 'Persian Gulf String Orchestra' },
      ],
      conductorFa: 'آرش امینی',
      conductorEn: 'Arash Amini',
      ensemblesFa: ['ارکستر زهی خلیج‌فارس'],
      ensemblesEn: ['Persian Gulf String Orchestra'],
      descriptionFa: 'اثری شاخص از دوره آثار ایرانی مشایخی؛ تداعی امواج و تلاطم دریا از طریق بافت‌های نوین زهی و پلی‌مدالیته‌های ریشه‌دار در هویت نغمه‌های ایرانی.',
      descriptionEn: 'A seminal work from Mashayekhi’s Iranian cycle, evoking oceanic turbulence and meditation through modern string polyphony rooted in Persian musical heritage.',
    },
    {
      id: 'work-6',
      number: 6,
      titleFa: 'کنسرتو برای ویولا، ارکستر زهی و سازهای کوبه‌ای',
      titleEn: 'Concerto for Viola, String Orchestra, and Percussion',
      opusFa: 'اپوس ۲۶۴ (۲۰۱۶)',
      opusEn: 'Op. 264 (2016)',
      year: 2016,
      isWorldPremiere: true,
      instrumentationFa: 'ویولا سولو، ارکستر زهی و سازهای کوبه‌ای',
      instrumentationEn: 'Solo Viola, String Orchestra, and Percussion',
      performersFa: [
        { role: 'سولیست ویولا', name: 'امین غفاری' },
        { role: 'ارکستر', name: 'ارکستر زهی خلیج‌فارس' },
        { role: 'آنسامبل کوبه‌ای', name: 'آنسامبل کوبه‌ای کاروان' },
      ],
      performersEn: [
        { role: 'Viola Soloist', name: 'Amin Ghaffari' },
        { role: 'Orchestra', name: 'Persian Gulf String Orchestra' },
        { role: 'Percussion Ensemble', name: 'Karavan Percussion Ensemble' },
      ],
      conductorFa: 'آرش امینی',
      conductorEn: 'Arash Amini',
      ensemblesFa: ['ارکستر زهی خلیج‌فارس', 'آنسامبل کوبه‌ای کاروان'],
      ensemblesEn: ['Persian Gulf String Orchestra', 'Karavan Percussion Ensemble'],
      descriptionFa: 'نخستین اجرای جهانی اثر. کنسرتویی فاخر با بهره‌گیری از وسعت بیانی و گرمای صوتی ویولا در تقابل با حجم ارکستر زهی و ضرب‌آهنگ کوبه‌ای.',
      descriptionEn: 'World Premiere. A majestic concerto exploring the expressive warmth and somber virtuosity of the solo viola against the vast sonic canvas of strings and percussion.',
    },
  ],

  intermission: {
    titleFa: 'تنفس',
    titleEn: 'Intermission',
    subtitleFa: 'پایان بخش اول کنسرت | پذیرایی و استراحت',
    subtitleEn: 'End of Part One | Intermission',
  },

  artists: [
    {
      id: 'alireza-mashayekhi',
      nameFa: 'علیرضا مشایخی',
      nameEn: 'Alireza Mashayekhi',
      roleFa: 'آهنگساز',
      roleEn: 'Composer',
      image: '/images/artists/alireza-mashayekhi.png',
      altFa: 'پرتره استاد علیرضا مشایخی آهنگساز',
      altEn: 'Portrait of composer Alireza Mashayekhi',
      tagsFa: ['پیشگام موسیقی معاصر', 'بنیان‌گذار گروه موسیقی تهران', 'استاد آهنگسازی'],
      tagsEn: ['Pioneer of Contemporary Music', 'Founder of Tehran Music Group', 'Master Composer'],
      paragraphsFa: [
        'علیرضا مشایخی در سال ۱۳۱۸ خورشیدی در تهران متولد شد. مبانی موسیقی ایرانی، موسیقی کلاسیک و نوازندگی پیانو را به‌ترتیب نزد لطف‌الله مفخم‌پایان، حسین ناصحی و افلیا کمباجیان آموخت و در سال ۱۳۳۶ خورشیدی، تحصیلات خود را در رشتۀ آهنگسازی در «آکادمی موسیقی و هنرهای نمایشی وین» پی گرفت. مهم‌ترین استادان او در آنجا هانس یلینک و کارل شیسکه بودند. در سال ۱۳۴۳ خورشیدی، تحصیلات خود را در زمینۀ موسیقی الکترونیک و کامپیوتر در اوترخت تکمیل کرد و به‌مدت پانزده سال به‌عنوان آهنگساز و پژوهشگر با «مؤسسۀ زونولوگی» دانشگاه اوترخت در هلند همکاری داشت.',
        'مشایخی در اثنای پژوهش‌های تجربی خود، صورت‌بندی نوینی از رویکرد چندفرهنگی ارائه داده و از پیشگامان موسیقی چندفرهنگی است. آثار او بیش از ۶۰ سال است که در ایران و خارج از ایران اجرا می‌شوند. برخورد او با موسیقی الکترونیک در آغاز فعالیتش در این زمینه، به اثری به نام «شور» انجامید؛ دیالوگی میان نویز و موسیقی ایرانی که در سال 1970 میلادی در مجموعۀ Electronic Panorama: Prospective 21e Siecle  «دورنمای موسیقی قرن بیست‌ویک» توسط مؤسسۀ فیلیپس منتشر شد.',
        'با توجه به ذات تاریخ‌مند موسیقی تفکر، می‌توان در سیر تحول رویکرد مشایخی به آهنگسازی، دوره‌های متمایزی را تشخیص داد.',
        'زنده‌یاد هوشنگ طاهری دورۀ نخست را «تمرکز گسترده» می‌نامید. در این دوره، تمرکز آهنگساز بر دو بُعد «صدا» و «سکوت» است که در سنتز دیالکتیکی «زمان» رفع می‌شوند.',
        'دورۀ دوم آثار او، به پیشنهاد برنارد مشایخی، «موسیقی نسبی» نامیده شده است. در این دوره، خودِ مقولۀ نسبیت، یا وابستگی معنا به چشم‌انداز، مورد توجه است.',
        'دورۀ سوم را مشایخی Meta-X می‌نامد. در این دوره، او با فراروی از تقید به پارادایم یا سبکی ثابت، خودِ معنای سبک یا پارادایم را در موسیقی به پرسش می‌کشد.',
        'پس از این دوره، آثار مشایخی بیشتر متوجه برساختگی فرهنگی‌ـ‌تاریخی حقیقت هستند و می‌کوشند با برقراری دیالوگ‌های فرهنگی، نوعی حقیقت بین‌الاذهانی تاریخی را شکل دهند.',
      ],
      paragraphsEn: [
        'Alireza Mashayekhi was born in 1939 in Tehran. He studied Persian music fundamentals, Western classical music, and piano under Lotfollah Mofakham-Payan, Hossein Nasehi, and Ophelia Kombajian, respectively. In 1957, he pursued composition studies at the Academy of Music and Performing Arts in Vienna under prominent professors Hans Jelinek and Karl Schiske. In 1964, he deepened his research in electronic and computer music in Utrecht, collaborating for fifteen years as a composer and researcher with the Institute of Sonology at Utrecht University in the Netherlands.',
        'Through empirical research, Mashayekhi articulated an innovative formulation of the multicultural approach, standing as a globally recognized pioneer of multicultural music. His works have been performed worldwide for over six decades. His early encounter with electronic music culminated in the pioneering work "Shur" (1970)—a dialogue between noise synthesis and Persian musical heritage, released by Philips in the landmark compilation "Electronic Panorama: Prospective 21e Siècle."',
        'Reflecting the historical nature of contemplative music, distinct stylistic periods emerge across Mashayekhi’s compositional trajectory:',
        'The late Houshang Taheri designated his first period as "Comprehensive Concentration," where focus centered on sound and silence, resolved in the dialectical synthesis of time.',
        'His second period was termed "Relative Music" upon Bernard Mashayekhi’s suggestion, wherein relativity and the perspectival dependence of meaning took center stage.',
        'The third period was named "Meta-X" by Mashayekhi himself, transcending fixed paradigms to interrogate the very notion of style in music.',
        'Subsequent works engage the cultural-historical construction of truth, striving through cross-cultural dialogues to forge an intersubjective, historicized truth.',
      ],
    },
    {
      id: 'amin-ghaffari',
      nameFa: 'امین غفاری',
      nameEn: 'Amin Ghaffari',
      roleFa: 'سولیست ویولن و ویولا',
      roleEn: 'Violin and Viola Soloist',
      image: '/images/artists/amin-ghaffari.png',
      altFa: 'پرتره امین غفاری سولیست ویولن و ویولا',
      altEn: 'Portrait of violin and viola soloist Amin Ghaffari',
      tagsFa: ['سولیست بین‌المللی', 'برگزیده مسابقات ژاپن و هنله', 'پژوهشگر و مدرس'],
      tagsEn: ['International Soloist', 'Japan World Winner & Henle Prize', 'Author & Educator'],
      paragraphsFa: [
        'امین غفاری در تهران متولد شد. او دانش‌آموختۀ رشتۀ نوازندگی ویولن در دانشگاه تهران است و تحصیلات کارشناسی ارشد خود را نیز در همین دانشگاه به پایان رسانده و هم‌اکنون دانشجوی مقطع دکتری در دانشگاه شاهد است. غفاری مهارت‌های نوازندگی خود را زیر نظر استادانی چون ستاره بهشتی، مازیار ظهیرالدینی و مرجان قنبری‌مهر در ایران، و نیز پروفسور ایگور پتروشفسکی ارتقا داده و در مسترکلاس‌های استادانی همچون بوریس کوشنیر، مایکل مارتین و آنا چوماچنکو شرکت کرده است.',
        'غفاری موفق به کسب مقام نخست در مسابقات جهانی ویولن در ژاپن شده و جایزۀ ویژۀ شرکت آلمانی هنله را نیز در کارنامۀ هنری خود دارد. او همچنین در جشنوارۀ بین‌المللی موسیقی فجر و مسابقات ویولن جوان در ایران رتبۀ نخست را کسب کرده است. اجراهای او از آثار فرانک، مندلسون و چایکوفسکی، و نیز آثاری از ایزایی، موتسارت، باخ و سن‌سانس مورد توجه اهل فن و مخاطبان قرار گرفته است.',
        'غفاری تجربه‌های متعددی در همکاری با ارکسترهای برجستۀ جهان دارد. او در سال ۲۰۲۴ به‌عنوان سولیست با ارکستر مارینسکی در سن‌پترزبورگ همکاری کرد و در سال ۲۰۲۳ کنسرتو ویولن خاچاطوریان را به همراه ارکستر فیلارمونیک چک شمالی در سالن اسمتانای پراگ روی صحنه برد. همچنین در سال ۲۰۲۱ کنسرتو ویولن چایکوفسکی را به همراه ارکستر سمفونیک کالینینگراد در سالن جمیرا زبیل امارات اجرا کرد.',
        'او سابقۀ حضور در جشنوارۀ کروملو را دارد؛ جشنواره‌ای که سولیست‌های برجسته‌ای چون ونگروف، مینتز و میشا مایسکی در آن به اجرای برنامه پرداخته‌اند. غفاری همچنین به همراه ارکستر مجلسی سوک در قلعۀ ماسکراد به تکنوازی پرداخته است. او در آکادمی آلگرو ویوو در اتریش و آکادمی کرونبرگ در آلمان نیز حضور داشته و گواهی‌نامه‌های معتبر این دوره‌ها را دریافت کرده است. اجرای او از قطعۀ «زیگونروایزن» در ژاپن نیز مورد توجه بسیاری از اهل فن در این کشور قرار گرفته است.',
        'در سال‌های ۲۰۲۴ و ۲۰۲۵، غفاری به دعوت مدیریت هنری جشنوارۀ کاسپین به روسیه سفر کرد و در کاخ کرملین، به همراه ارکستر کاسپین به تکنوازی پرداخت. همچنین در سال ۲۰۲۶، به دعوت رسمی مدیر هنری ارکستر سمفونیک تلویزیون بریکس، در سن‌پترزبورگ و در حضور چهار هزار نفر، به‌عنوان سولیست با این ارکستر به اجرای برنامه پرداخت.',
        'غفاری همچنین سابقۀ فعالیت به‌عنوان سولیست ویولن با ارکستر ملی ایران و ارکستر سمفونیک تهران را دارد. او در سال ۱۳۹۵ کنسرتو ویولن خاچاطوریان را برای نخستین بار به همراه ارکستر سمفونیک تهران، به رهبری شهرداد روحانی، روی صحنه برد. او همچنین سابقۀ همکاری با علی رهبری را دارد و در سال ۲۰۲۴ قطعۀ «نوحه‌خوان» اثر علی رهبری را در مارینسکی روسیه، به رهبری خود آهنگساز، اجرا کرد.',
        'اجرای آثار آهنگسازان معاصر ایران از دیگر فعالیت‌های هنری اوست. اجرای مستمر آثار علیرضا مشایخی طی سالیان متمادی، اجرای آثار فرهاد فخرالدینی به همراه ارکستر ملی ایران و ارکستر سمفونیک تهران به رهبری آرش امینی، و اجرای کنسرتو ویولن شاهین فرهت به رهبری شهرداد روحانی، از جملۀ این فعالیت‌ها به شمار می‌روند.',
        'غفاری در زمینۀ رهبری ارکستر نیز فعالیت داشته و سابقۀ رهبری ارکستر سمفونیک جوانان پارس‌زمین، ارکستر خلیج‌فارس و ارکستر دانشگاه فرهنگ و هنر را در کارنامۀ خود دارد. رهبری آثاری از بتهوون، گریگ، موتسارت، بریتن و شوستاکوویچ نیز از دیگر فعالیت‌های او در این زمینه است.',
        'او از سال ۲۰۱۷ برگزاری تورهای کنسرت و مسترکلاس‌های موسیقی را در سراسر ایران دنبال کرده است. همچنین ضبط‌هایی از پارتیتای شمارۀ ۲ برای ویولن سولو اثر باخ، کنسرتو ویولن چایکوفسکی، سونات شمارۀ ۳ ایزایی و کاپریس‌های شماره‌های ۷ و ۱۶ پاگانینی را در کارنامۀ هنری خود دارد.',
        'غفاری در سال ۲۰۱۷ کتابی با عنوان «بهترین روش‌های تمرین کنسرتو ویولن خاچاطوریان» منتشر کرد.',
      ],
      paragraphsEn: [
        'Amin Ghaffari was born in Tehran. He earned his Bachelor and Master of Music degrees in violin performance from the University of Tehran and is currently a doctoral candidate at Shahed University. He honed his violin technique under Setareh Beheshti, Maziar Zahireddini, and Marjan Ghanbarimehr in Iran, as well as Prof. Igor Petrushevski, participating in masterclasses by Boris Kuschnir, Michael Martin, and Ana Chumachenco.',
        'Ghaffari won first prize at the World Violin Competition in Japan and received a special prize from G. Henle Verlag. He also claimed first prize at the Fajr International Music Festival and Iran National Youth Violin Competition. His interpretations of Franck, Mendelssohn, Tchaikovsky, Ysaÿe, Mozart, Bach, and Saint-Saëns have garnered widespread critical acclaim.',
        'Ghaffari maintains extensive international orchestral collaborations. In 2024, he appeared as soloist with the Mariinsky Orchestra in St. Petersburg; in 2023, he performed Khachaturian’s Violin Concerto with the North Czech Philharmonic at Smetana Hall in Prague; and in 2021, he performed Tchaikovsky’s Violin Concerto with the Kaliningrad Symphony at Jumeirah Zabeel Hall, UAE.',
        'He has participated in the prestigious Krumlov Festival—where master soloists such as Vengerov, Mintz, and Maisky have performed—and soloed with the Suk Chamber Orchestra at the Masquerade Hall. He holds certifications from Allegro Vivo in Austria and the Kronberg Academy in Germany. His rendition of "Zigeunerweisen" in Japan earned special critical distinction.',
        'In 2024 and 2025, Ghaffari performed as soloist at the Kremlin Palace with the Caspian Orchestra. In 2026, by official invitation from the artistic director of the BRICS Television Symphony Orchestra, he soloed before an audience of four thousand in St. Petersburg.',
        'Domestically, he has appeared as violin soloist with the Tehran Symphony Orchestra and Iran National Orchestra. In 2016, he premiered Khachaturian’s Concerto with the Tehran Symphony under Shahrdad Rouhani. In 2024, he performed Ali Rahbari’s "Noheh-Khan" at the Mariinsky under the composer’s baton.',
        'Dedicated to contemporary Iranian repertoire, he has continuously championed the music of Alireza Mashayekhi, Farhad Fakhreddini (with the National and Tehran Symphony under Arash Amini), and Shahin Farhat’s Violin Concerto.',
        'In conducting, he has led the Pars Zamin Youth Symphony, Persian Gulf Orchestra, and the University of Culture and Art Orchestra, conducting masterworks by Beethoven, Grieg, Mozart, Britten, and Shostakovich.',
        'Since 2017, he has conducted nationwide concert tours and masterclasses across Iran. His recordings include Bach’s Partita No. 2, Tchaikovsky’s Concerto, Ysaÿe’s Sonata No. 3, and Paganini’s Caprices 7 & 16.',
        'In 2017, Ghaffari authored the treatise "The Best Practice Methods for Khachaturian’s Violin Concerto."',
      ],
    },
    {
      id: 'arash-amini',
      nameFa: 'آرش امینی',
      nameEn: 'Arash Amini',
      roleFa: 'رهبر ارکستر',
      roleEn: 'Conductor',
      image: '/images/artists/arash-amini.png',
      altFa: 'پرتره آرش امینی رهبر ارکستر',
      altEn: 'Portrait of conductor Arash Amini',
      tagsFa: ['رهبر ارکستر بین‌المللی', 'دانش‌آموخته فرانسه', 'عضو هیئت علمی'],
      tagsEn: ['International Conductor', 'French Conservatory Graduate', 'Academic & Faculty'],
      paragraphsFa: [
        'آرش امینی در تهران متولد شد. او فراگیری ویولن را از هفت‌سالگی در هنرستان موسیقی آغاز کرد و سپس نزد مینا نراقی ادامه داد. پس از آن، سال‌های متمادی در کلاس‌های ویولن حشمت سنجری و والودیا تارخانیان به تکمیل آموخته‌های خود پرداخت. او از نوزده‌سالگی به عضویت ارکستر سمفونیک تهران درآمد و از بدو تأسیس ارکستر ملی ایران، نوازندۀ ارشد ویولن این ارکستر بود. پس از دریافت مدرک کارشناسی موسیقی زیر نظر دکتر حسن ریاحی، برای ادامۀ تحصیل به فرانسه رفت و در دو رشتۀ مدیریت هنری با گرایش ارکستر سمفونیک و اپرا، و رهبری ارکستر، زیر نظر آدریان مک‌دانل فارغ‌التحصیل شد. او هم‌زمان با تحصیل، در آزمون ورودی ارکستر سمفونیک اورلئان فرانسه پذیرفته شد و به‌مدت شش سال با این ارکستر همکاری مستمر داشت.',
        'امینی همچنین دو سال پیاپی نوازندۀ ویولن ارکستر منتخب ملل بود و سپس فعالیت خود را به‌عنوان رهبر ارکستر آغاز کرد. او در مقام رهبر ارکستر، تاکنون با ارکسترهایی همچون ارکستر سمفونیک تهران، ارکستر ملی ایران در تهران، مسکو و سن‌پترزبورگ، ارکستر سمفونیک دولتی قزاقستان، ارکستر اپرای دولتی تاجیکستان (که نشان درجۀ یک هنری این کشور را دریافت کرد)، ارکستر اورلئان، ارکستر ملی باکو و ارکستر سمفونیک بغداد همکاری داشته است.',
        'آرش امینی همچنین عضو گروه تخصصی موسیقی فرهنگستان هنر و مدرس موسیقی در دانشگاه است.',
      ],
      paragraphsEn: [
        'Arash Amini was born in Tehran. He began violin studies at age seven at the Conservatory of Music, continuing under Mina Naraghi, and subsequently refining his mastery over years with Heshmat Sanjari and Valodia Tarkhanian. At age nineteen, he joined the Tehran Symphony Orchestra and served as senior violinist in the Iran National Orchestra since its inception. After earning his Bachelor of Music under Dr. Hassan Riahi, he relocated to France, graduating in Arts Administration (Symphony and Opera) and Orchestral Conducting under Adrian McDonnell. Concurrently, he won an audition for the Orchestre Symphonique d’Orléans, performing with them for six years.',
        'Amini served as violinist in the United Nations Orchestra for two consecutive years before embarking on his conducting career. As conductor, he has collaborated with the Tehran Symphony Orchestra, Iran National Orchestra (in Tehran, Moscow, and St. Petersburg), the Kazakhstan State Symphony Orchestra, Tajikistan State Opera Orchestra (receiving Tajikistan’s First-Class Artistic Medal), Orchestre d’Orléans, Baku National Orchestra, and the Baghdad Symphony Orchestra.',
        'Arash Amini is a member of the Specialized Music Department at the Iranian Academy of the Arts and a university music lecturer.',
      ],
    },
    {
      id: 'setareh-beheshti',
      nameFa: 'ستاره بهشتی',
      nameEn: 'Setareh Beheshti',
      roleFa: 'نوازندۀ ویولن، سرپرست کوارتت زهی نماد و عضو هیئت علمی دانشگاه تهران',
      roleEn: 'Violinist, Leader of Namad String Quartet, and Faculty Member at the University of Tehran',
      image: '/images/artists/setareh-beheshti.png',
      altFa: 'پرتره دکتر ستاره بهشتی نوازنده ویولن و سرپرست کوارتت نماد',
      altEn: 'Portrait of violinist and Namad Quartet leader Setareh Beheshti',
      tagsFa: ['سرپرست کوارتت زهی نماد', 'عضو هیئت علمی دانشگاه تهران', 'نوازندۀ ویولن'],
      tagsEn: ['Leader of Namad Quartet', 'University of Tehran Faculty', 'Violinist'],
      paragraphsFa: [
        'ستاره بهشتی از برجسته‌ترین نوازندگان و مدرسان ویولن در ایران، سرپرست و نوازنده ویولن اول کوارتت زهی نماد و دانشیار دانشکده هنرهای زیبای دانشگاه تهران است.',
      ],
      paragraphsEn: [
        'Setareh Beheshti is among Iran’s most distinguished violinists and pedagogues, leader and first violinist of the Namad String Quartet, and faculty member at the College of Fine Arts, University of Tehran.',
      ],
    },
    {
      id: 'farzan-farnea',
      nameFa: 'فرزان فرنیا',
      nameEn: 'Farzan Farnea',
      roleFa: 'نوازندۀ سازهای کوبه‌ای و سرپرست آنسامبل کاروان',
      roleEn: 'Percussionist and Director of Karavan Ensemble',
      image: '/images/artists/farzan-farnia.png',
      altFa: 'پرتره فرزان فرنیا نوازنده سازهای کوبه‌ای و سرپرست آنسامبل کاروان',
      altEn: 'Portrait of percussionist and Karavan Ensemble director Farzan Farnea',
      tagsFa: ['سرپرست آنسامبل کاروان', 'دانش‌آموخته موتسارته‌ئوم سالزبورگ', 'رئیس انجمن ارف ایران'],
      tagsEn: ['Director of Karavan Ensemble', 'Mozarteum Salzburg Alumnus', 'President of Orff Iran'],
      paragraphsFa: [
        'فرزان فرنیا نوازندۀ سازهای کوبه‌ای، آموزش‌شناس و مدرس موسیقی، فعالیت حرفه‌ای خود را در سال ۱۳۸۲ با نوازندگی سازهای کوبه‌ای آغاز کرد. او در دوران تحصیل در دانشگاه موتسارته‌ئوم در سالزبورگ اتریش، دوره‌های تخصصی نوازندگی سازهای کوبه‌ای را زیر نظر ماری هوندا گذراند و به‌عنوان نوازندۀ سازهای کوبه‌ای در اجرای چند اپرا با ارکستر موتسارته‌ئوم همکاری کرد. او همچنین در اجراهای ارکسترهای مختلف و ضبط آلبوم‌های موسیقی حضور داشته است. فرنیا در سال ۱۳۸۵ رتبۀ نخست بخش هم‌نوازی را در دومین دوسالانۀ نوازندگی پیانو موسیقی نو کسب کرد.',
        'فرنیا دانش‌آموختۀ مؤسسۀ کارل ارف دانشگاه موتسارته‌ئوم در حوزۀ آموزش موسیقی و حرکت با رویکرد ارف–شول‌ورک است. او نویسندۀ کتاب «گفتار، حرکت، موسیقی؛ آموزش بنیانی» است و فعالیت‌های آموزشی و پژوهشی‌اش بر پیوند موسیقی، حرکت، گفتار و فرهنگ ایرانی، و نیز بر رویکردهای کل‌نگر به یادگیری متمرکز است. او از اعضای گروه مؤسس انجمن ارف–شول‌ورک ایران (آدمک) بوده و از سال ۱۴۰۱ ریاست این انجمن را بر عهده دارد.',
        'فرنیا در سال ۱۳۹۵ آنسامبل کاروان را با محوریت سازهای کوبه‌ای و با هدف ایجاد گروهی با ترکیب‌سازی منعطف پایه‌گذاری کرد. این آنسامبل به‌صورت مستقل و نیز در همکاری با ارکسترهای دیگر به اجرای برنامه پرداخته است.',
      ],
      paragraphsEn: [
        'Farzan Farnea, percussionist, pedagogue, and music educator, began his professional career in 2003. During his studies at the Mozarteum University in Salzburg, Austria, he completed specialized percussion courses under Marie Honda, performing in opera productions with the Mozarteum Orchestra. He has participated in numerous orchestral concerts and recordings, and won first prize in ensemble performance at the Second Biennial of New Music Piano Competition in 2006.',
        'Farnea is a graduate of the Carl Orff Institute at the Mozarteum University in music and movement education (Orff-Schulwerk). He is the author of "Speech, Movement, Music: Fundamental Education," and his pedagogical research explores the synthesis of music, movement, speech, and Iranian cultural heritage. He co-founded the Orff-Schulwerk Association of Iran (Adamak) and has served as its president since 2022.',
        'In 2016, Farnea founded the Karavan Ensemble centered on percussion, with the objective of creating an ensemble with flexible instrumentation. The ensemble performs both independently and in collaboration with major orchestras.',
      ],
    },
  ],

  ensembles: [
    {
      id: 'karavan-ensemble',
      nameFa: 'آنسامبل کوبه‌ای کاروان',
      nameEn: 'Karavan Percussion Ensemble',
      leaderFa: 'فرزان فرنیا',
      leaderEn: 'Farzan Farnea',
      sectionsFa: [
        {
          sectionName: 'اعضا',
          members: ['مستانه حکیمی', 'فرزان فرنیا', 'ماهان ببری', 'یاسمین زند', 'رهام کرم‌آبی'],
        },
      ],
      sectionsEn: [
        {
          sectionName: 'Members',
          members: ['Mastaneh Hakimi', 'Farzan Farnea', 'Mahan Babri', 'Yasamin Zand', 'Roham Karam-Abi'],
        },
      ],
    },
    {
      id: 'namad-quartet',
      nameFa: 'کوارتت زهی نماد',
      nameEn: 'Namad String Quartet',
      leaderFa: 'ستاره بهشتی',
      leaderEn: 'Setareh Beheshti',
      sectionsFa: [
        { sectionName: 'ویولن اول', members: ['ستاره بهشتی'] },
        { sectionName: 'ویولن دوم', members: ['بابک کوهستانی'] },
        { sectionName: 'ویولا', members: ['حمیدرضا ساعتچی'] },
        { sectionName: 'ویولنسل', members: ['آنار اطاعتی'] },
      ],
      sectionsEn: [
        { sectionName: 'First Violin', members: ['Setareh Beheshti'] },
        { sectionName: 'Second Violin', members: ['Babak Kouhestani'] },
        { sectionName: 'Viola', members: ['Hamidreza Saatchi'] },
        { sectionName: 'Cello', members: ['Anar Etaati'] },
      ],
    },
    {
      id: 'persian-gulf-orchestra',
      nameFa: 'ارکستر زهی خلیج‌فارس',
      nameEn: 'Persian Gulf String Orchestra',
      leaderFa: 'آرش امینی (رهبر ارکستر)',
      leaderEn: 'Arash Amini (Conductor)',
      sectionsFa: [
        {
          sectionName: 'ویولن اول',
          members: ['حسن اکبریان', 'امیرعلی سرخانی', 'احمدرضا شربتی', 'مهیار خان محمدی', 'مهدی شاملو'],
        },
        {
          sectionName: 'ویولن دوم',
          members: ['فرداد صدقی', 'درسا رهبری', 'علی شادمهر', 'امین اسکندری', 'محبوبه مشهدی', 'میلاد پرویزی'],
        },
        {
          sectionName: 'ویولا',
          members: ['اسماعیل محمدی', 'بهنام آیتی', 'سام دینی', 'رادمهر فلاح', 'محمدرضا ترابیان'],
        },
        {
          sectionName: 'ویولنسل',
          members: ['ابراهیم قائدی', 'احمدرضا آرمین', 'مسیح مردیها', 'علیرضا طباطبایی'],
        },
        {
          sectionName: 'کنترباس',
          members: ['یونس نصری', 'حمیدرضا رزازی'],
        },
      ],
      sectionsEn: [
        {
          sectionName: 'First Violins',
          members: ['Hassan Akbarian', 'Amirali Sorkhani', 'Ahmadreza Sharbati', 'Mahyar Khan-Mohammadi', 'Mehdi Shamloo'],
        },
        {
          sectionName: 'Second Violins',
          members: ['Fardad Sedghi', 'Dorsa Rahbari', 'Ali Shadmehr', 'Amin Eskandari', 'Mahboobeh Mashhadi', 'Milad Parvizi'],
        },
        {
          sectionName: 'Violas',
          members: ['Esmaeil Mohammadi', 'Behnam Ayati', 'Sam Dini', 'Radmehr Fallah', 'Mohammadreza Torabian'],
        },
        {
          sectionName: 'Cellos',
          members: ['Ebrahim Ghaedi', 'Ahmadreza Armin', 'Masih Mardiha', 'Alireza Tabatabaei'],
        },
        {
          sectionName: 'Double Basses',
          members: ['Younes Nasri', 'Hamidreza Razazi'],
        },
      ],
    },
  ],

  credits: {
    eventTitleFa: 'موسیقی نو در ایران',
    eventTitleEn: 'New Music in Iran',
    subtitleFa: 'اجرای آثاری از علیرضا مشایخی',
    subtitleEn: 'Performance of Works by Alireza Mashayekhi',
    organizerFa: 'گروه موسیقی تهران',
    organizerEn: 'Tehran Music Group',
    itemsFa: [
      { role: 'مدیریت و هماهنگی اجرایی', name: 'سمیرا واثق‌نیا' },
      { role: 'طراحی پوستر', name: 'سهیل حسینی' },
    ],
    itemsEn: [
      { role: 'Executive Management & Coordination', name: 'Samira Vaseqnia' },
      { role: 'Poster Design', name: 'Soheil Hosseini' },
    ],
  },

  acknowledgements: {
    titleFa: 'سپاس و قدردانی',
    titleEn: 'Acknowledgements',
    introFa: 'گروه موسیقی تهران از همراهی و همکاری ارزشمند افراد زیر در برگزاری این کنسرت سپاسگزاری می‌کند:',
    introEn: 'Tehran Music Group expresses sincere gratitude to the following individuals for their invaluable support in realizing this concert:',
    listFa: [
      { name: 'بابک رضایی', title: 'مدیرکل دفتر امور موسیقی' },
      { name: 'محمد اللهیاری فومنی', title: 'مدیرعامل بنیاد فرهنگی‌ـ‌هنری رودکی' },
      { name: 'امیرعباس ستایشگر', title: 'مشاور ارشد و معاون آفرینش‌های فرهنگی‌ـ‌هنری بنیاد رودکی' },
      { name: 'اسحاق شکری', title: 'مدیرعامل انجمن موسیقی' },
    ],
    listEn: [
      { name: 'Babak Rezaei', title: 'Director General of the Music Office' },
      { name: 'Mohammad Allahyari Foumani', title: 'CEO of Roudaki Cultural and Artistic Foundation' },
      { name: 'Amirabbas Setayeshgar', title: 'Senior Advisor & Deputy for Cultural-Artistic Affairs, Roudaki Foundation' },
      { name: 'Eshaq Shokri', title: 'CEO of Iran Music Association' },
    ],
    emaratAyandeh: {
      titleFa: 'عمارت آینده',
      titleEn: 'Emarat Ayandeh',
      subtitleFa: 'اکوسیستم هوش مصنوعی',
      subtitleEn: 'AI Ecosystem',
      membersFa: [
        'سهراب حسینی',
        'شیوا عاشوری',
        'آرش برائی‌نژاد',
        'امیر محمد فتحی',
        'هلیا رضائی',
      ],
      membersEn: [
        'Sohrab Hosseini',
        'Shiva Ashouri',
        'Arash Baraeenezhad',
        'Amir Mohammad Fathi',
        'Helia Rezaei',
      ],
    },
  },

  links: {
    composerWebsite: 'https://www.alirezamashayekhi.com/',
    composerWebsiteLabelFa: 'وب‌سایت رسمی علیرضا مشایخی',
    composerWebsiteLabelEn: 'Official Website of Alireza Mashayekhi',
    instagram: 'https://www.instagram.com/tehran_music_group/',
    instagramLabelFa: 'اینستاگرام رسمی گروه موسیقی تهران',
    instagramLabelEn: 'Official Instagram of Tehran Music Group',
  },
};
