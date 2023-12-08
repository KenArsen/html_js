function mainData()
{
    document.getElementById('content').innerHTML =
        "<div class=\"row\">\n" +
        "                <div class=\"col-md-5 mb-3\">\n" +
        "                    <img src=\"arsen.jpg\" alt=\"\" class=\"img-fluid\">\n" +
        "                </div>\n" +
        "                <div class=\"col-md-7\">\n" +
        "                    <ul class=\"list-group list-group-flush\">\n" +
        "                        <li class=\"list-group-item\">NUMARA: 2004.01033</li>\n" +
        "                        <li class=\"list-group-item\">ADI: ARSEN</li>\n" +
        "                        <li class=\"list-group-item\">SOYADI: KENZHEGULOV</li>\n" +
        "                        <li class=\"list-group-item\">FAKULTE: MUHENDISLIK</li>\n" +
        "                        <li class=\"list-group-item\">BOLUMU: BILGISAYAR</li>\n" +
        "                        <li class=\"list-group-item\">SINIF: 3</li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "            </div>"
    document.getElementById('header').innerHTML = 'HOME'
}


function ip_protocol()
{
    document.getElementById('content').innerHTML =
        "<p>\n" +
        "        Бир subnet ичинде максимум 30 хост адреси боло тургандай кылып subnet mask\n" +
        "        белгилегиле. Кандайдыр бир subnet address атап, хосттор үчүн IP адрестердин диапазонун\n" +
        "        аныктап бергиле. Чыгаруу жолун толук жазып, жообуңузду түшүндүрүңүз.\n" +
        "\n" +
        "    <div class=\"container\">\n" +
        "        <p>\n" +
        "            <a>1.</a> subnet mask: 255.255.255.224<br>\n" +
        "            <a>2.</a> subnet address: 192.168.1.0<br>\n" +
        "            <a>3.</a> host1 address: 192.168.1.1<br>\n" +
        "            <a>4.</a> host30 address: 192.168.1.30<br>\n" +
        "        </p>\n" +
        "    </div>\n" +
        "    </p>\n" +
        "    <p>\n" +
        "        subnet mask табуу учун биринчи хочттордун санын эсептеп алалы n = 30 + 2 = 32. Демек 2 ^ 5 = 32\n" +
        "        ушунун негизинде subnet mask тын экилик системасында(11111111.11111111.11111111.11100000) эн акыркы 5\n" +
        "        символ 0 болушу керек. Бул 10дук системада 255.255.255.224 Эми Subnet addres учун бир адрес алалы 192.168.1.0\n" +
        "        Эми биз бул хосттор үчүн IP даректеринин диапазонун аныктай алабыз. Бизде (2^5 - 2) = 32 - 2 = 30 даректер\n" +
        "        болот, анткени эки дарек сакталат: бири subnet address үчүн (192.168.1.0) жана бири broadcast үчүн.\n" +
        "        Ощентип 1-хост 192.168.1.1 жана акыркы хост 192.168.1.30 болот\n" +
        "    </p>"

    document.getElementById('header').innerHTML = 'IP PROTOCOL'
}


function osi_model()
{
    document.getElementById('content').innerHTML =
        "<p>\n" +
        "            Data Link катмары - бул бир эле локалдык тармак сегментинде жайгашкан түйүндөргө маалыматтарды берүү үчүн\n" +
        "          иштелип чыккан OSI тармак моделинин катмары. Аны физикалык деңгээлдеги каталарды аныктоо жана мүмкүн болсо\n" +
        "          оңдоо үчүн колдонсо болот. Берилиштер шилтемеси катмарында иштеген протоколдордун мисалдары локалдык тармактар\n" +
        "          үчүн Ethernet , Point-to-Point Protocol (PPP), HDLC жана чекиттен чекитке туташуулар\n" +
        "          үчүн ADCCP.\n" +
        "        </p>\n" +
        "        <p>\n" +
        "          Транспорттук катмардын протоколдорунун көптөгөн класстары бар,\n" +
        "          алар негизги транспорттук функцияларды гана камсыз кылган протоколдордон, мисалы,\n" +
        "          таанылбаган маалыматтарды өткөрүп берүү функцияларынан баштап,\n" +
        "          бир нече маалымат пакеттеринин көздөгөн жерине туура ырааттуулукта келишин,\n" +
        "          бир нече маалымат агымдарын мультиплекстүү камсыздоону камсыз кылган протоколдорго чейин бар.\n" +
        "          Mеханизми маалымат агымын башкаруу жана алынган маалыматтардын ишенимдүүлүгүн кепилдик берет.\n" +
        "        </p>\n" +
        "        <p>\n" +
        "          Байланышсыз протоколдор деп аталган транспорттук катмардын кээ бир протоколдору маалымат булак түзмөгү\n" +
        "          тарабынан жөнөтүлгөн тартипте анын көздөгөн жерине жеткирилишине кепилдик бербейт.\n" +
        "          Кээ бир транспорттук катмарлар муну сеанс катмарына өткөрүүдөн мурун маалыматтарды\n" +
        "          туура ырааттуулукта чогултуу менен чечишет. Берилиштерди мультиплекстөө транспорттук катмар\n" +
        "          бир эле учурда эки системанын ортосунда бир нече маалымат агымын\n" +
        "          (агымдар ар кандай тиркемелерден келиши мүмкүн) иштетүүгө жөндөмдүү экендигин билдирет.\n" +
        "          Агымды башкаруу механизми – бул бир системадан экинчисине берилүүчү маалыматтардын көлөмүн\n" +
        "          жөнгө салууга мүмкүндүк берүүчү механизм. Транспорттук катмардын протоколдору көбүнчө маалыматтарды\n" +
        "          жеткирүүнү башкаруу функциясына ээ, бул кабыл алуучу системаны жөнөтүүчү тарапка маалыматтардын кабыл\n" +
        "          алынгандыгы жөнүндө ырастоолорду жөнөтүүгө мажбурлайт.\n" +
        "        </p>"
    document.getElementById('header').innerHTML = 'OSI MODEL'
}

function equipment()
{
    document.getElementById('content').innerHTML =
        "<p>\n" +
        "        Роутер кызматы тармактардагы негизги функция болуп саналат, ар кандай тармак сегменттеринин ортосунда\n" +
        "        маалыматтарды жөнөтүү үчүн жооптуу. Ал OSI моделинин тармактык (үчүнчү) катмарында иштейт, ал тармактарда\n" +
        "        маалыматтарды маршрутизациялоо үчүн жооптуу. Келгиле, роутер кызматы OSI моделинин ар кандай катмарларында\n" +
        "        кантип иштээрин карап көрөлү.\n" +
        "    </p>\n" +
        "    <div class=\"container\">\n" +
        "        <p>\n" +
        "        <a>1.</a>\n" +
        "        Физикалык катмар (1-кабат): Бул катмарда роутер электрдик жана физикалык сигналдарды иштетип, аларды Ethernet\n" +
        "        кабели же зымсыз байланыш сыяктуу физикалык чөйрө аркылуу берүү үчүн санарип маалымат пакеттерине айландырат.\n" +
        "    </p>\n" +
        "\n" +
        "    <p>\n" +
        "        <a>2.</a>\n" +
        "        Data Link Layer (Layer 2): Маршрутизатор бул катмарда кээ бир функцияларды аткара алат, өзгөчө Ethernet сыяктуу\n" +
        "        көп сегменттүү тармактар менен иштөөдө. Бул медиага кирүүнү башкаруу (MAC дареги) жана кагылышууну\n" +
        "        аныктоо функцияларын камтыйт. Бирок, роутердин негизги ролу кийинки баскычтан башталат.\n" +
        "    </p>\n" +
        "\n" +
        "    <p>\n" +
        "        <a>3.</a>\n" +
        "        Тармак катмары (3-кабат): Бул катмар роутер үчүн негизги катмар болуп саналат. Бул деңгээлде роутер IP маалымат\n" +
        "        пакеттерин кабыл алат жана аларды акыркы көздөгөн жерге жөнөтүү үчүн кайсы жолду аныктайт. Бул үчүн роутер\n" +
        "        маршруттук таблицаларды жана маршруттук алгоритмдерди колдонот. Ал IP пакеттин аталыштарын талдайт, пакетти\n" +
        "        кайда жөнөтүүнү аныктайт жана ошого жараша кайра жөнөтөт.\n" +
        "    </p>\n" +
        "\n" +
        "    <p>\n" +
        "        <a>4.</a>\n" +
        "        Транспорт катмары (4-кабат): Маршрутизаторлор адатта транспорт катмарынын мазмунун талдабайт\n" +
        "        (мисалы, TCP же UDP), анткени алардын негизги милдети маалыматтарды төмөнкү катмарларга жөнөтүү. Бирок, кээ бир\n" +
        "        учурларда алар NAT (Network Address Translation) аткара алышат, бул жергиликтүү тармактагы бир нече түзмөктөргө\n" +
        "        Интернетке кирүү үчүн бир жалпы коомдук IP даректи колдонууга мүмкүндүк берет.\n" +
        "    </p>\n" +
        "\n" +
        "    <p>\n" +
        "        <a>5.</a>\n" +
        "        Сеансовый, прикладной и презентационный уровни (Уровни 5-7): Маршрутизаторы обычно не вмешиваются в работу этих\n" +
        "        уровней и просто пересылают данные дальше на более низкие уровни.\n" +
        "    </p>\n" +
        "\n" +
        "    </div>\n" +
        "    <p>\n" +
        "        Ошентип, роутер биринчи кезекте тармактык катмарда (3-кабат) иштейт, IP пакеттерин кабыл алат, аларды\n" +
        "        жеткирүүнүн эң жакшы маршрутун аныктайт жана маалыматтарды чындыгында тармак аркылуу өткөрүү үчүн физикалык\n" +
        "        катмарга жөнөтөт. Бул роутерлерге маршруттук функцияны аткарууга жана тармак даректеринин (IP даректери)\n" +
        "        логикасына ылайык ар кандай тармак сегменттеринин ортосундагы байланышты камсыз кылууга мүмкүндүк берет.\n" +
        "    </p>"

    document.getElementById('header').innerHTML = 'EQUIPMENT'
}