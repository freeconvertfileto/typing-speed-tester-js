(function() {

    // Passages: keyed by [lang][difficulty] = array of {text, len}
    // len: 's'=short, 'm'=medium, 'l'=long
    var PASSAGES = {
        en: {
            easy: [
                { t: 'The sun rises in the east and sets in the west.', l: 's' },
                { t: 'Cats and dogs are popular pets around the world.', l: 's' },
                { t: 'Reading books is a great way to learn new things.', l: 's' },
                { t: 'The quick brown fox jumps over the lazy dog near the river bank.', l: 'm' },
                { t: 'Fresh air and exercise are good for the body and the mind. Take a walk outside and enjoy nature.', l: 'm' },
                { t: 'Every day brings new light and new hope to the world. Small steps lead to great achievements over time.', l: 'm' },
                { t: 'The morning sun cast long golden shadows across the quiet meadow. Birds sang softly in the tall oak trees nearby. A gentle breeze carried the scent of wildflowers through the warm summer air, and the day felt full of promise.', l: 'l' },
                { t: 'Learning to cook at home is one of the most rewarding skills you can develop. It saves money, encourages creativity, and allows you to eat healthier meals every single day of the week.', l: 'l' }
            ],
            medium: [
                { t: 'Technology has changed how we communicate and work daily.', l: 's' },
                { t: 'Success is not final, and failure is not fatal in life.', l: 's' },
                { t: 'Technology has transformed the way we communicate, work, and entertain ourselves. The internet connects billions of people across the globe in real time every day.', l: 'm' },
                { t: 'The only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle for less than your potential.', l: 'm' },
                { t: 'Artificial intelligence is rapidly changing industries from healthcare to finance. Machines can now recognize images, translate languages, and generate creative content with remarkable accuracy. This shift demands new skills from the workforce and raises important ethical questions about automation, privacy, and the future of human labor.', l: 'l' },
                { t: 'Climate change poses one of the greatest challenges of the twenty-first century. Rising temperatures, melting ice caps, and increasingly severe weather events are already affecting communities worldwide. Addressing this crisis requires coordinated global action, investment in renewable energy, and fundamental changes to how we produce and consume goods.', l: 'l' }
            ],
            hard: [
                { t: 'Photosynthesis converts carbon dioxide and water into glucose using sunlight.', l: 's' },
                { t: 'Quantum entanglement correlates particle states instantaneously across distances.', l: 's' },
                { t: 'Photosynthesis is the process by which green plants and some organisms use sunlight to synthesize nutrients from carbon dioxide and water, generating oxygen as a byproduct critical for aerobic life.', l: 'm' },
                { t: 'The mitochondria are membrane-bound organelles found in eukaryotic cells. They generate the cell\'s supply of adenosine triphosphate, used as a source of chemical energy for biochemical reactions throughout the organism.', l: 'm' },
                { t: 'Neuroplasticity refers to the brain\'s ability to reorganize itself by forming new neural connections throughout life. This phenomenon allows neurons to compensate for injury and disease, and to adjust their activity in response to novel situations or environmental changes that require cognitive adaptation and learning.', l: 'l' },
                { t: 'Byzantine fault tolerance describes the resilience of a distributed computing system when components may fail and there is imperfect information about whether a failure has occurred. The term derives from the Byzantine Generals Problem, a logical dilemma concerning coordinated action among parties who cannot fully trust each other.', l: 'l' }
            ],
            code: [
                { t: 'const x = arr.filter(n => n > 0);', l: 's' },
                { t: 'function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }', l: 'm' },
                { t: 'const arr = [3, 1, 4, 1, 5, 9]; arr.sort((a, b) => a - b); console.log(arr);', l: 'm' },
                { t: 'const fetchData = async (url) => { const res = await fetch(url); return res.json(); };', l: 'm' },
                { t: 'SELECT users.name, COUNT(orders.id) AS total FROM users LEFT JOIN orders ON users.id = orders.user_id GROUP BY users.name ORDER BY total DESC;', l: 'l' },
                { t: 'class Stack { constructor() { this.items = []; } push(el) { this.items.push(el); } pop() { return this.items.pop(); } peek() { return this.items[this.items.length - 1]; } }', l: 'l' }
            ]
        },
        es: {
            easy: [
                { t: 'El sol sale por el este y se pone por el oeste cada dia.', l: 's' },
                { t: 'Los gatos y los perros son mascotas muy populares en todo el mundo.', l: 's' },
                { t: 'Leer libros es una de las mejores formas de aprender cosas nuevas y ampliar el horizonte.', l: 'm' },
                { t: 'El aire fresco y el ejercicio diario son muy buenos para el cuerpo y la mente. Sal a caminar y disfruta la naturaleza a tu alrededor.', l: 'm' },
                { t: 'Cada manana trae consigo nuevas oportunidades y posibilidades. Con esfuerzo y dedicacion, cualquier sueno puede convertirse en realidad si trabajamos con constancia y perseverancia todos los dias de nuestra vida.', l: 'l' }
            ],
            medium: [
                { t: 'La tecnologia ha cambiado la forma en que nos comunicamos hoy.', l: 's' },
                { t: 'La tecnologia ha transformado la manera en que nos comunicamos, trabajamos y nos entretenemos. Internet conecta a miles de millones de personas en todo el mundo en tiempo real cada dia.', l: 'm' },
                { t: 'El cambio climatico es uno de los mayores desafios del siglo veintiuno. Las temperaturas en aumento, el derretimiento de los glaciares y los fenomenos meteorologicos extremos ya afectan a comunidades de todo el planeta y requieren accion urgente e inmediata.', l: 'l' }
            ],
            hard: [
                { t: 'La fotosintesis convierte el dioxido de carbono y el agua en glucosa.', l: 's' },
                { t: 'La neuroplasticidad es la capacidad del cerebro para reorganizarse formando nuevas conexiones neuronales a lo largo de la vida del individuo, permitiendo la adaptacion cognitiva y la recuperacion tras lesiones cerebrales graves.', l: 'l' }
            ],
            code: [
                { t: 'const x = arr.filter(n => n > 0);', l: 's' },
                { t: 'function sumar(a, b) { return a + b; } console.log(sumar(3, 4));', l: 'm' }
            ]
        },
        fr: {
            easy: [
                { t: 'Le soleil se leve a l\'est et se couche a l\'ouest chaque jour.', l: 's' },
                { t: 'Les chats et les chiens sont des animaux de compagnie tres populaires partout dans le monde.', l: 'm' },
                { t: 'Lire des livres est l\'un des meilleurs moyens d\'apprendre de nouvelles choses et d\'elargir ses connaissances. Chaque livre ouvre une nouvelle fenetre sur le monde et nourrit l\'imagination et la curiosite intellectuelle.', l: 'l' }
            ],
            medium: [
                { t: 'La technologie a change notre facon de communiquer et de travailler.', l: 's' },
                { t: 'La technologie a transforme la facon dont nous communiquons, travaillons et nous divertissons. Internet relie des milliards de personnes a travers le monde en temps reel, modifiant profondement les relations humaines et professionnelles.', l: 'l' }
            ],
            hard: [
                { t: 'La photosynthese convertit le dioxyde de carbone et l\'eau en glucose grace a la lumiere du soleil.', l: 'm' },
                { t: 'La neuroplasticite designe la capacite du cerveau a se reorganiser en formant de nouvelles connexions neuronales tout au long de la vie, permettant l\'adaptation cognitive et la recuperation apres des lesions cerebrales.', l: 'l' }
            ],
            code: [
                { t: 'const x = arr.filter(n => n > 0);', l: 's' },
                { t: 'function factorielle(n) { return n <= 1 ? 1 : n * factorielle(n - 1); }', l: 'm' }
            ]
        },
        de: {
            easy: [
                { t: 'Die Sonne geht im Osten auf und im Westen unter jeden Tag.', l: 's' },
                { t: 'Katzen und Hunde sind sehr beliebte Haustiere in vielen Haushalten auf der ganzen Welt.', l: 'm' },
                { t: 'Das Lesen von Buchern ist eine der besten Moglichkeiten, neue Dinge zu lernen und den eigenen Horizont zu erweitern. Jedes Buch eroffnet neue Perspektiven und bereichert das Denken und die Kreativitat nachhaltig.', l: 'l' }
            ],
            medium: [
                { t: 'Die Technologie hat unsere Art zu kommunizieren verandert grundlegend.', l: 's' },
                { t: 'Die Technologie hat die Art und Weise, wie wir kommunizieren, arbeiten und uns unterhalten, grundlegend verandert. Das Internet verbindet Milliarden von Menschen weltweit in Echtzeit und schafft neue Moglichkeiten der Zusammenarbeit und des Wissensaustauschs.', l: 'l' }
            ],
            hard: [
                { t: 'Die Photosynthese wandelt Kohlendioxid und Wasser mithilfe von Sonnenlicht in Glukose um.', l: 'm' },
                { t: 'Die Neuroplastizitat beschreibt die Fahigkeit des Gehirns, sich durch die Bildung neuer neuronaler Verbindungen lebenslang zu reorganisieren und sich an veranderte Bedingungen, Verletzungen oder neue Lernanforderungen anzupassen.', l: 'l' }
            ],
            code: [
                { t: 'const x = arr.filter(n => n > 0);', l: 's' },
                { t: 'function fakultaet(n) { return n <= 1 ? 1 : n * fakultaet(n - 1); }', l: 'm' }
            ]
        },
        tr: {
            easy: [
                { t: 'Gunes doguda dogar ve batar batida her gun.', l: 's' },
                { t: 'Kediler ve kopekler dunyanin her yerinde sevilen hayvanlardir.', l: 's' },
                { t: 'Kitap okumak yeni seyler ogrenmenin en iyi yollarindan biridir.', l: 's' },
                { t: 'Temiz hava ve egzersiz beden ve zihin icin cok faydalidir. Her gun disari cikip dogayi kesfetmek iyi gelir.', l: 'm' },
                { t: 'Her sabah yeni bir firsat getirir. Kucuk adimlar zamanla buyuk basarilara donusur. Sabir ve azimle her hedefe ulasmak mumkundur.', l: 'm' },
                { t: 'Sonbahar geldiginde yapraklar sariyi ve kirmiziya boyaniyor. Serinlayan hava ile insanlar sicak iceceklere yoneliyor. Doga bu mevsimde eşsiz bir guzellık sergiliyor ve parklar yuruyus yapanlarla doluyor.', l: 'l' }
            ],
            medium: [
                { t: 'Teknoloji iletisim sekillrimizi kokensel olarak degistirdi.', l: 's' },
                { t: 'Teknoloji, iletisim kurma, calisma ve eglence bicimlerimizi kokten degistirdi. Internet, milyarlarca insani gercek zamanli olarak birbirine bagliyor ve dunya giderek kuculuyor.', l: 'm' },
                { t: 'Yapay zeka sagliktan finansa kadar pek cok sektoru donusturuyor. Makineler artik goruntuleri taniyabiliyor, dilleri cevirebiliyor ve yaratici icerik uretebiliyor. Bu gelisme is gucunden yeni beceriler istiyor ve onemli etik sorular ortaya cikariyor.', l: 'l' }
            ],
            hard: [
                { t: 'Fotossentez, bitkilerin guneş isigini kullanarak besin uretmesidir.', l: 's' },
                { t: 'Noropiastisite, beynin yeni noronsal baglantilar olusturarak kendini yeniden duzenleyebilme yetenegi olarak tanimlanir. Bu ozellik, beynin yaralanmalardan iyilesmesine ve yeni ogrenme taleplerine uyum saglamasina olanak tanir.', l: 'l' }
            ],
            code: [
                { t: 'const x = arr.filter(n => n > 0);', l: 's' },
                { t: 'function faktoriyel(n) { return n <= 1 ? 1 : n * faktoriyel(n - 1); }', l: 'm' },
                { t: 'const veriGetir = async (url) => { const yanit = await fetch(url); return yanit.json(); };', l: 'm' }
            ]
        },
        ar: {
            easy: [
                { t: 'تشرق الشمس من الشرق وتغرب في الغرب كل يوم.', l: 's' },
                { t: 'القطط والكلاب من أكثر الحيوانات الأليفة شعبية في العالم.', l: 's' },
                { t: 'قراءة الكتب من أفضل الطرق لاكتساب المعرفة وتوسيع الآفاق.', l: 's' },
                { t: 'الهواء النقي والرياضة مفيدان للجسم والعقل. اخرج للمشي يومياً واستمتع بجمال الطبيعة من حولك.', l: 'm' },
                { t: 'كل صباح يحمل فرصة جديدة للنجاح والتقدم. الخطوات الصغيرة تقود إلى إنجازات كبيرة مع مرور الوقت والجهد المتواصل.', l: 'm' },
                { t: 'التعلم المستمر هو مفتاح النجاح في عصرنا الحديث. يجب على كل شخص أن يسعى لاكتساب مهارات جديدة بشكل دائم. التطور التكنولوجي يتطلب منا التكيف والتعلم باستمرار لمواكبة متطلبات سوق العمل.', l: 'l' }
            ],
            medium: [
                { t: 'غيّرت التكنولوجيا طريقة تواصلنا وعملنا بشكل جذري.', l: 's' },
                { t: 'غيّرت التكنولوجيا الطريقة التي نتواصل بها ونعمل ونترفه. يربط الإنترنت مليارات البشر في جميع أنحاء العالم في الوقت الفعلي، مما يجعل العالم أصغر وأكثر ترابطاً من أي وقت مضى.', l: 'l' }
            ],
            hard: [
                { t: 'عملية التمثيل الضوئي تحول ثاني أكسيد الكربون والماء إلى جلوكوز.', l: 's' },
                { t: 'اللدونة العصبية هي قدرة الدماغ على إعادة تنظيم نفسه من خلال تكوين وصلات عصبية جديدة طوال الحياة، مما يسمح بالتكيف المعرفي والتعافي من الإصابات الدماغية الخطيرة.', l: 'l' }
            ],
            code: [
                { t: 'const x = arr.filter(n => n > 0);', l: 's' },
                { t: 'function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }', l: 'm' }
            ]
        },
        zh: {
            easy: [
                { t: '太阳从东方升起，从西方落下。', l: 's' },
                { t: '猫和狗是世界上最受欢迎的宠物。', l: 's' },
                { t: '读书是学习新知识、开阔眼界的最好方法之一。', l: 's' },
                { t: '新鲜空气和运动对身心都有益处。每天出门散步，享受大自然的美丽。', l: 'm' },
                { t: '每个早晨都带来新的机会和可能性。只要努力坚持，任何梦想都可以实现。小步骤积累起来，终将成就伟大的事业。', l: 'm' },
                { t: '秋天来临时，树叶变成金黄色和红色。凉爽的空气让人想喝热饮。大自然在这个季节展现出无与伦比的美丽，公园里挤满了散步的人们，享受这短暂而珍贵的季节。', l: 'l' }
            ],
            medium: [
                { t: '科技从根本上改变了我们的沟通和工作方式。', l: 's' },
                { t: '科技彻底改变了我们沟通、工作和娱乐的方式。互联网将全球数十亿人实时连接在一起，使世界变得更加紧密，信息传递更加迅速和便捷。', l: 'm' },
                { t: '人工智能正在迅速改变从医疗保健到金融的各个行业。机器现在可以识别图像、翻译语言并生成创意内容。这一转变要求劳动力掌握新技能，并引发了关于自动化、隐私和人类劳动未来的重要伦理问题。', l: 'l' }
            ],
            hard: [
                { t: '光合作用将二氧化碳和水转化为葡萄糖，利用太阳光能。', l: 's' },
                { t: '神经可塑性是指大脑通过形成新的神经连接在整个生命过程中不断重组自身的能力。这一现象使神经元能够补偿损伤，并根据新情况调整其活动，从而实现认知适应和学习。', l: 'l' }
            ],
            code: [
                { t: 'const x = arr.filter(n => n > 0);', l: 's' },
                { t: 'function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }', l: 'm' },
                { t: 'const fetchData = async (url) => { const res = await fetch(url); return res.json(); };', l: 'm' }
            ]
        },
        id: {
            easy: [
                { t: 'Matahari terbit di timur dan terbenam di barat setiap hari.', l: 's' },
                { t: 'Kucing dan anjing adalah hewan peliharaan yang paling populer di dunia.', l: 's' },
                { t: 'Membaca buku adalah salah satu cara terbaik untuk memperluas pengetahuan.', l: 's' },
                { t: 'Udara segar dan olahraga sangat baik untuk kesehatan tubuh dan pikiran. Keluarlah setiap hari dan nikmati keindahan alam sekitar.', l: 'm' },
                { t: 'Setiap pagi membawa kesempatan baru untuk berkembang dan berprestasi. Dengan kerja keras dan tekad yang kuat, setiap impian dapat terwujud menjadi kenyataan yang indah.', l: 'm' },
                { t: 'Indonesia adalah negara kepulauan terbesar di dunia dengan lebih dari tujuh belas ribu pulau. Keberagaman budaya, bahasa, dan tradisi menjadi kekayaan yang tak ternilai. Setiap daerah memiliki keunikannya sendiri yang menarik untuk dijelajahi dan dipelajari oleh generasi muda.', l: 'l' }
            ],
            medium: [
                { t: 'Teknologi telah mengubah cara kita berkomunikasi dan bekerja secara mendasar.', l: 's' },
                { t: 'Teknologi telah mengubah cara kita berkomunikasi, bekerja, dan menghibur diri. Internet menghubungkan miliaran orang di seluruh dunia secara real time, membuat dunia semakin kecil dan informasi semakin mudah diakses oleh siapa pun.', l: 'm' },
                { t: 'Kecerdasan buatan sedang mengubah berbagai industri mulai dari kesehatan hingga keuangan. Mesin kini dapat mengenali gambar, menerjemahkan bahasa, dan menghasilkan konten kreatif. Perubahan ini menuntut keterampilan baru dari tenaga kerja dan menimbulkan pertanyaan etis penting tentang otomasi dan masa depan pekerjaan manusia.', l: 'l' }
            ],
            hard: [
                { t: 'Fotosintesis mengubah karbon dioksida dan air menjadi glukosa menggunakan cahaya matahari.', l: 's' },
                { t: 'Neuroplastisitas mengacu pada kemampuan otak untuk mengatur ulang dirinya sendiri dengan membentuk koneksi saraf baru sepanjang hidup. Fenomena ini memungkinkan neuron untuk mengompensasi cedera dan menyesuaikan aktivitas mereka terhadap situasi baru yang memerlukan adaptasi kognitif.', l: 'l' }
            ],
            code: [
                { t: 'const x = arr.filter(n => n > 0);', l: 's' },
                { t: 'function faktorial(n) { return n <= 1 ? 1 : n * faktorial(n - 1); }', l: 'm' },
                { t: 'const ambilData = async (url) => { const res = await fetch(url); return res.json(); };', l: 'm' }
            ]
        },
        ru: {
            easy: [
                { t: 'Солнце восходит на востоке и заходит на западе каждый день.', l: 's' },
                { t: 'Кошки и собаки — самые популярные домашние животные в мире.', l: 's' },
                { t: 'Чтение книг — один из лучших способов узнавать новое и расширять кругозор.', l: 's' },
                { t: 'Свежий воздух и физические упражнения полезны для тела и разума. Выходите на прогулку каждый день и наслаждайтесь красотой природы.', l: 'm' },
                { t: 'Каждое утро приносит новые возможности для роста и достижений. Маленькие шаги со временем приводят к большим результатам, если двигаться вперёд с упорством и целеустремлённостью.', l: 'm' },
                { t: 'Осенью листья окрашиваются в золотой и багряный цвета. Прохладный воздух наполняется запахом опавших листьев. Природа в это время года демонстрирует удивительную красоту, а парки заполняются людьми, наслаждающимися последними тёплыми деньками перед зимой.', l: 'l' }
            ],
            medium: [
                { t: 'Технологии коренным образом изменили способы общения и работы.', l: 's' },
                { t: 'Технологии коренным образом изменили то, как мы общаемся, работаем и развлекаемся. Интернет соединяет миллиарды людей по всему миру в режиме реального времени, делая мир меньше и более взаимосвязанным, чем когда-либо прежде.', l: 'm' },
                { t: 'Искусственный интеллект стремительно меняет отрасли от здравоохранения до финансов. Машины теперь могут распознавать изображения, переводить языки и генерировать творческий контент. Этот сдвиг требует новых навыков от рабочей силы и поднимает важные этические вопросы об автоматизации и будущем труда.', l: 'l' }
            ],
            hard: [
                { t: 'Фотосинтез преобразует углекислый газ и воду в глюкозу с помощью солнечного света.', l: 's' },
                { t: 'Нейропластичность — это способность мозга реорганизовываться путём формирования новых нейронных связей на протяжении всей жизни. Это явление позволяет нейронам компенсировать повреждения и адаптировать свою активность к новым ситуациям, требующим когнитивной перестройки.', l: 'l' }
            ],
            code: [
                { t: 'const x = arr.filter(n => n > 0);', l: 's' },
                { t: 'function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }', l: 'm' },
                { t: 'const fetchData = async (url) => { const res = await fetch(url); return res.json(); };', l: 'm' }
            ]
        },
        hi: {
            easy: [
                { t: 'सूरज पूर्व में उगता है और पश्चिम में डूबता है।', l: 's' },
                { t: 'बिल्लियाँ और कुत्ते दुनिया भर में सबसे लोकप्रिय पालतू जानवर हैं।', l: 's' },
                { t: 'किताबें पढ़ना नई चीज़ें सीखने और ज्ञान बढ़ाने का सबसे अच्छा तरीका है।', l: 's' },
                { t: 'ताज़ी हवा और व्यायाम शरीर और मन दोनों के लिए फायदेमंद हैं। हर दिन बाहर टहलें और प्रकृति की सुंदरता का आनंद लें।', l: 'm' },
                { t: 'हर सुबह एक नया अवसर लेकर आती है। छोटे-छोटे कदम समय के साथ बड़ी उपलब्धियों की ओर ले जाते हैं। मेहनत और लगन से हर सपना साकार हो सकता है।', l: 'm' },
                { t: 'भारत एक विविधताओं से भरा देश है जहाँ अनेक भाषाएँ, संस्कृतियाँ और परंपराएँ एक साथ फलती-फूलती हैं। यहाँ की समृद्ध विरासत और ऐतिहासिक धरोहर इसे विश्व में एक अनोखा स्थान दिलाती है जो हर यात्री को मंत्रमुग्ध कर देती है।', l: 'l' }
            ],
            medium: [
                { t: 'तकनीक ने हमारे संवाद और काम करने के तरीके को बदल दिया है।', l: 's' },
                { t: 'तकनीक ने हमारे संवाद, काम और मनोरंजन के तरीकों को मौलिक रूप से बदल दिया है। इंटरनेट ने दुनिया भर के अरबों लोगों को वास्तविक समय में जोड़ा है, जिससे दुनिया पहले से कहीं अधिक जुड़ी हुई लगती है।', l: 'm' },
                { t: 'कृत्रिम बुद्धिमत्ता स्वास्थ्य सेवा से लेकर वित्त तक के उद्योगों को तेजी से बदल रही है। मशीनें अब छवियों को पहचान सकती हैं, भाषाओं का अनुवाद कर सकती हैं और रचनात्मक सामग्री तैयार कर सकती हैं। इस बदलाव के लिए कार्यबल से नए कौशल की आवश्यकता है।', l: 'l' }
            ],
            hard: [
                { t: 'प्रकाश संश्लेषण सूर्य के प्रकाश का उपयोग करके कार्बन डाइऑक्साइड और पानी को ग्लूकोज में बदलता है।', l: 's' },
                { t: 'तंत्रिका प्लास्टिसिटी मस्तिष्क की उस क्षमता को संदर्भित करती है जिसके द्वारा वह जीवन भर नए तंत्रिका संबंध बनाकर खुद को पुनर्गठित करता है। यह घटना न्यूरॉन्स को चोट की भरपाई करने और नई परिस्थितियों के अनुकूल होने में सक्षम बनाती है।', l: 'l' }
            ],
            code: [
                { t: 'const x = arr.filter(n => n > 0);', l: 's' },
                { t: 'function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }', l: 'm' },
                { t: 'const fetchData = async (url) => { const res = await fetch(url); return res.json(); };', l: 'm' }
            ]
        }
    };

    var passageEl    = document.getElementById('typingPassage');
    var inputEl      = document.getElementById('typingInput');
    var wpmEl        = document.getElementById('typingWpm');
    var accEl        = document.getElementById('typingAcc');
    var timeEl       = document.getElementById('typingTime');
    var errorsEl     = document.getElementById('typingErrors');
    var progressEl   = document.getElementById('typingProgress');
    var resultEl     = document.getElementById('typingResult');
    var resultWpm    = document.getElementById('resultWpm');
    var resultAcc    = document.getElementById('resultAcc');
    var resultTime   = document.getElementById('resultTime');
    var resultErrors = document.getElementById('resultErrors');
    var gradeEl      = document.getElementById('typingGrade');
    var resetBtn     = document.getElementById('typingReset');

    var diffTabs = document.querySelectorAll('#diffTabs .typing-pill');
    var langTabs = document.querySelectorAll('#langTabs .typing-pill');
    var lenTabs  = document.querySelectorAll('#lenTabs .typing-pill');

    // Inject progress bar into passage wrap
    var passageWrap = passageEl ? passageEl.parentElement : null;
    var progressBar = null;
    if (passageWrap) {
        var pbWrap = document.createElement('div');
        pbWrap.className = 'typing-progress-bar-wrap';
        progressBar = document.createElement('div');
        progressBar.className = 'typing-progress-bar';
        pbWrap.appendChild(progressBar);
        passageWrap.insertBefore(pbWrap, passageEl);
    }

    var startTime = null;
    var timerInterval = null;
    var currentPassage = '';
    var currentDiff = 'easy';
    var currentLang = 'en';
    var currentLen  = 'short'; // short | medium | long
    var done = false;

    var LEN_MAP = { short: 's', medium: 'm', long: 'l' };

    function getPool() {
        var langData = PASSAGES[currentLang] || PASSAGES.en;
        var pool = langData[currentDiff] || langData.easy || [];
        var lenKey = LEN_MAP[currentLen];
        var filtered = pool.filter(function(p) { return p.l === lenKey; });
        return filtered.length > 0 ? filtered : pool;
    }

    function renderPassage(typed) {
        if (!passageEl) return;
        var html = '';
        for (var i = 0; i < currentPassage.length; i++) {
            var ch = currentPassage[i];
            var escaped = ch === ' ' ? '&nbsp;' : ch.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
            if (i < typed.length) {
                html += typed[i] === ch
                    ? '<span class="char-correct">' + escaped + '</span>'
                    : '<span class="char-wrong">' + escaped + '</span>';
            } else if (i === typed.length) {
                html += '<span class="char-current">' + escaped + '</span>';
            } else {
                html += '<span class="char-pending">' + escaped + '</span>';
            }
        }
        passageEl.innerHTML = html;
    }

    function calcStats(typed) {
        var elapsed = startTime ? (Date.now() - startTime) / 1000 / 60 : 0;
        var words = typed.trim().split(/\s+/).filter(function(w) { return w.length > 0; }).length;
        var wpm = elapsed > 0 ? Math.round(words / elapsed) : 0;
        var errors = 0;
        for (var i = 0; i < typed.length; i++) {
            if (typed[i] !== currentPassage[i]) errors++;
        }
        var accuracy = typed.length > 0 ? Math.round(((typed.length - errors) / typed.length) * 100) : 100;
        if (accuracy < 0) accuracy = 0;
        return { wpm: wpm, accuracy: accuracy, errors: errors };
    }

    function updateDisplay(typed) {
        var stats = calcStats(typed);
        if (wpmEl) wpmEl.textContent = stats.wpm;
        if (accEl) accEl.textContent = stats.accuracy + '%';
        if (errorsEl) errorsEl.textContent = stats.errors;
        var elapsed = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;
        if (timeEl) timeEl.textContent = elapsed + 's';
        var pct = currentPassage.length > 0 ? Math.min(100, Math.round((typed.length / currentPassage.length) * 100)) : 0;
        if (progressEl) progressEl.textContent = pct + '%';
        if (progressBar) progressBar.style.width = pct + '%';
    }

    function getGrade(wpm, accuracy) {
        if (accuracy < 80) return 'Keep practicing!';
        if (wpm >= 80 && accuracy >= 95) return 'Expert Typist';
        if (wpm >= 60 && accuracy >= 90) return 'Advanced';
        if (wpm >= 40 && accuracy >= 85) return 'Intermediate';
        if (wpm >= 20) return 'Beginner';
        return 'Keep practicing!';
    }

    function showResult(typed) {
        var stats = calcStats(typed);
        var elapsed = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;
        if (resultEl) resultEl.style.display = 'block';
        if (resultWpm) resultWpm.textContent = stats.wpm;
        if (resultAcc) resultAcc.textContent = stats.accuracy + '%';
        if (resultTime) resultTime.textContent = elapsed + 's';
        if (resultErrors) resultErrors.textContent = stats.errors;
        if (gradeEl) gradeEl.textContent = getGrade(stats.wpm, stats.accuracy);
    }

    function loadPassage() {
        var pool = getPool();
        var item = pool[Math.floor(Math.random() * pool.length)];
        currentPassage = item ? item.t : '';
        renderPassage('');
    }

    function reset() {
        done = false;
        clearInterval(timerInterval);
        startTime = null;
        if (inputEl) { inputEl.value = ''; inputEl.disabled = false; }
        if (wpmEl) wpmEl.textContent = '0';
        if (accEl) accEl.textContent = '100%';
        if (timeEl) timeEl.textContent = '0s';
        if (errorsEl) errorsEl.textContent = '0';
        if (progressEl) progressEl.textContent = '0%';
        if (progressBar) progressBar.style.width = '0%';
        if (resultEl) resultEl.style.display = 'none';
        loadPassage();
        if (inputEl) inputEl.focus();
    }

    function activatePill(tabs, selected) {
        tabs.forEach(function(b) { b.classList.remove('active'); });
        selected.classList.add('active');
    }

    if (inputEl) {
        inputEl.addEventListener('input', function() {
            if (done) return;
            var typed = inputEl.value;
            if (!startTime && typed.length > 0) {
                startTime = Date.now();
                timerInterval = setInterval(function() {
                    if (timeEl) timeEl.textContent = Math.round((Date.now() - startTime) / 1000) + 's';
                }, 500);
            }
            renderPassage(typed);
            updateDisplay(typed);
            if (typed === currentPassage) {
                done = true;
                clearInterval(timerInterval);
                updateDisplay(typed);
                inputEl.disabled = true;
                showResult(typed);
            }
        });

        inputEl.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') { e.preventDefault(); reset(); }
        });
    }

    diffTabs.forEach(function(btn) {
        btn.addEventListener('click', function() {
            activatePill(diffTabs, btn);
            currentDiff = btn.getAttribute('data-diff');
            reset();
        });
    });

    langTabs.forEach(function(btn) {
        btn.addEventListener('click', function() {
            activatePill(langTabs, btn);
            currentLang = btn.getAttribute('data-lang');
            reset();
        });
    });

    lenTabs.forEach(function(btn) {
        btn.addEventListener('click', function() {
            activatePill(lenTabs, btn);
            currentLen = btn.getAttribute('data-len');
            reset();
        });
    });

    if (resetBtn) resetBtn.addEventListener('click', reset);

    loadPassage();
})();
