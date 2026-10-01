function meteo(kk) {
  const cold = kk ? "Суық және өтпелі кезең, сыртқы ауа <+10°C" : "Холодный и переходный период, наружный воздух <+10°C";
  const warm = kk ? "Жылы кезең, сыртқы ауа ≥+10°C" : "Тёплый период, наружный воздух ≥+10°C";
  const rows = [
    ["I " + (kk ? "жеңіл" : "лёгкая"), "20–23", "≤0,2", "22–25", "≤0,2"],
    ["IIа " + (kk ? "орташа" : "средняя"), "18–20", "≤0,2", "21–23", "≤0,2"],
    ["IIб " + (kk ? "орташа" : "средняя"), "17–19", "≤0,3", "20–22", "≤0,4"],
    ["III " + (kk ? "ауыр" : "тяжёлая"), "16–18", "≤0,3", "18–21", "≤0,5"]
  ].map((row) => `<tr><th scope="row">${row[0]}</th><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td></tr>`).join("");
  return `<div class="lab-block">
    <h4>${kk ? "Мақсаты" : "Цель"}</h4>
    <p>${kk
      ? "Температура, ылғалдылық, атмосфералық қысым және ауа жылдамдығын өлшеу тәсілін, микроклиматтың сипатын және оның адам ағзасына әсерін білу."
      : "Освоить способ измерения температуры, влажности, атмосферного давления и скорости воздуха, характеристику микроклимата и его влияние на организм."}</p>
    <h4>${kk ? "Жоспар" : "План"}</h4>
    <ol class="tasks">
      <li>${kk ? "Микроклимат параметрлерімен танысу." : "Познакомиться с параметрами микроклимата."}</li>
      <li>${kk ? "Қолайлы санитарлық нормаларды зерттеу." : "Изучить санитарные нормы комфортного микроклимата."}</li>
      <li>${kk ? "Өлшейтін құралмен танысу." : "Познакомиться с измерительным прибором."}</li>
    </ol>
    <h4>${kk ? "Микроклимат деген не" : "Что такое микроклимат"}</h4>
    <p>${kk
      ? "Өндірістік бөлмедегі ауаның физикалық күйі. Оны төрт шама анықтайды: температура, ылғалдылық, атмосфералық қысым және ауа қозғалысының жылдамдығы."
      : "Физическое состояние воздуха в производственном помещении. Его задают четыре величины: температура, влажность, атмосферное давление и скорость движения воздуха."}</p>
    <h4>${kk ? "Жұмыс ауырлығы" : "Тяжесть работы"}</h4>
    <ul class="tasks">
      <li>I — ${kk ? "жеңіл" : "лёгкая"}, &lt;172 Дж/с</li>
      <li>IIа — ${kk ? "орташа ауыр" : "средней тяжести"}, 172–232 Дж/с</li>
      <li>IIб — ${kk ? "орташа ауыр" : "средней тяжести"}, 232–293 Дж/с</li>
      <li>III — ${kk ? "ауыр" : "тяжёлая"}, &gt;293 Дж/с</li>
    </ul>
    <p>${kk
      ? "Жылу шығуы жұмыс ауырлығына байланысты. Сыртқа жылу беру терморегуляция деп аталады, ол өздігінен жүреді. Сәуле 45%, конвекция 30%, тердің булануы 25%. Ауа +30°C-тан жоғары болса, сәуле тоқтайды. Ауа қозғалмаса, конвекция да тоқтайды. Теріге жақын 4–8 мм ауа қабаты қызады."
      : "Выделение тепла зависит от тяжести работы. Отдача тепла наружу называется терморегуляцией. Излучение 45%, конвекция 30%, испарение пота 25%. Выше +30°C излучение прекращается. Если воздух неподвижен, прекращается и конвекция. Слой воздуха 4–8 мм у кожи нагревается."}</p>
    <h4>${kk ? "Санитарлық норма" : "Санитарная норма"}</h4>
    <p>${kk ? "Салыстырмалы ылғалдылық барлық қатарда 40–60%. Жайлы ауа жылдамдығы шамамен 0,1–0,3 м/с." : "Относительная влажность во всех строках 40–60%. Комфортная скорость воздуха около 0,1–0,3 м/с."}</p>
    <div class="norms-wrap"><table class="norms"><thead>
      <tr><th>${kk ? "Санат" : "Категория"}</th><th colspan="2">${cold}</th><th colspan="2">${warm}</th></tr>
      <tr><th></th><th>t, °C</th><th>υ, м/с</th><th>t, °C</th><th>υ, м/с</th></tr>
    </thead><tbody>${rows}</tbody></table></div>
    <h4>MS-6300</h4>
    <p>${kk
      ? "Сандық өлшегіш: ылғалдылық, температура, қысым, дыбыс және жарық. Түймелер: POWER, B.L., HOLD, MODE, UNIT, TEMP/%RH, ANEMO, Lux, dB."
      : "Цифровой измеритель: влажность, температура, давление, звук и свет. Кнопки: POWER, B.L., HOLD, MODE, UNIT, TEMP/%RH, ANEMO, Lux, dB."}</p>
    <ol class="tasks">
      <li>${kk ? "Температура. Датчикті 20 минут ұстаңыз. «TEMP/%RH» түймесін екі рет басыңыз. Бастапқы бірлік — °C." : "Температура. Держите датчик 20 минут. Дважды нажмите «TEMP/%RH». Исходная единица — °C."}</li>
      <li>${kk ? "Ылғалдылық. Тағы екі рет «TEMP/%RH». Датчик жауабы — 5 секунд." : "Влажность. Ещё два нажатия «TEMP/%RH». Отклик датчика — 5 секунд."}</li>
      <li>${kk ? "Жылдамдық. Датчикті ағынға перпендикуляр қойып, «ANEMO» басыңыз. Бастапқы бірлік — м/с." : "Скорость. Поставьте датчик перпендикулярно потоку и нажмите «ANEMO». Исходная единица — м/с."}</li>
    </ol>
  </div>`;
}

meteo.en = function () {
  const rows = [["I light", "20–23", "≤0.2", "22–25", "≤0.2"], ["IIa medium", "18–20", "≤0.2", "21–23", "≤0.2"], ["IIb medium", "17–19", "≤0.3", "20–22", "≤0.4"], ["III heavy", "16–18", "≤0.3", "18–21", "≤0.5"]]
    .map((row) => `<tr><th scope="row">${row[0]}</th><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td></tr>`).join("");
  return `<div class="lab-block">
    <h4>Aim</h4>
    <p>Learn how to measure temperature, humidity, atmospheric pressure and air speed, and how the microclimate affects the body.</p>
    <h4>Plan</h4>
    <ol class="tasks"><li>The parameters of the microclimate.</li><li>The sanitary norms of a comfortable microclimate.</li><li>The measuring instrument.</li></ol>
    <h4>What microclimate is</h4>
    <p>The physical state of the air in a production room. Four values set it: temperature, humidity, atmospheric pressure and air speed.</p>
    <h4>How hard the work is</h4>
    <ul class="tasks"><li>I — light, &lt;172 J/s</li><li>IIa — medium, 172–232 J/s</li><li>IIb — medium, 232–293 J/s</li><li>III — heavy, &gt;293 J/s</li></ul>
    <p>Heat output depends on how hard the work is. Heat leaves the body by thermoregulation: radiation 45%, convection 30%, sweat evaporation 25%. Above +30°C radiation stops. If the air does not move, convection stops too. The air layer 4–8 mm from the skin warms up.</p>
    <h4>Sanitary norm</h4>
    <p>Relative humidity is 40–60% in every row. Comfortable air speed is about 0.1–0.3 m/s.</p>
    <div class="norms-wrap"><table class="norms"><thead>
      <tr><th>Category</th><th colspan="2">Cold period, outdoor air &lt;+10°C</th><th colspan="2">Warm period, outdoor air ≥+10°C</th></tr>
      <tr><th></th><th>t, °C</th><th>υ, m/s</th><th>t, °C</th><th>υ, m/s</th></tr>
    </thead><tbody>${rows}</tbody></table></div>
    <h4>MS-6300</h4>
    <p>A digital meter for humidity, temperature, pressure, sound and light. Buttons: POWER, B.L., HOLD, MODE, UNIT, TEMP/%RH, ANEMO, Lux, dB.</p>
    <ol class="tasks">
      <li>Temperature. Leave the sensor for 20 minutes. Press TEMP/%RH twice. The starting unit is °C.</li>
      <li>Humidity. Press TEMP/%RH twice more. The sensor answers in 5 seconds.</li>
      <li>Speed. Set the sensor perpendicular to the flow and press ANEMO. The starting unit is m/s.</li>
    </ol>
  </div>`;
};

light.en = function () {
  return `<div class="lab-block">
    <h4>Plan</h4>
    <ol class="tasks"><li>How light affects work, health and safety.</li><li>The basis for setting a lighting norm.</li><li>How the instrument works.</li></ol>
    <h4>Kinds of light</h4>
    <p>Natural light is the most comfortable and even. When it is low or absent, artificial light is added: general, local or combined. The daylight factor is indoor illuminance divided by outdoor illuminance. This page has no lux table: the lab guide did not give numerical norms.</p>
    <p>Quantities: luminous flux in lumens, luminous intensity in candelas, illuminance in lux, luminance in cd/m². Sanitary norms prefer discharge lamps to incandescent lamps.</p>
    <h4>TKA-LUX</h4>
    <ol class="tasks">
      <li>Switch on by turning the range selector.</li>
      <li>Cover the photometric head with thick dark cloth and read the dark signal Edark. This matters on the 0–20 and 0–200 lx ranges.</li>
      <li>Place the head parallel to the measured surface. Your shadow and temporary objects must not fall on the window.</li>
      <li>Illuminance E = Emeas − Edark.</li>
      <li>If the display shows “1…”, the range is overloaded: switch to the next one. At the end turn the selector off.</li>
    </ol>
  </div>`;
};

dust.en = function () {
  return `<div class="lab-block">
    <h4>Plan</h4>
    <ol class="tasks"><li>General facts about dust.</li><li>How dust acts on a person.</li><li>How dust is measured.</li></ol>
    <h4>How dust is divided</h4>
    <p>Industrial dust is fine particles that settle slowly. By origin it is organic or inorganic. By size the guide calls it coarse, fine, very fine and ultrafine. By harm it is toxic or non-toxic: non-toxic dust still causes occupational disease at a high concentration and a long exposure.</p>
    <p>It enters by breathing, digestion and the skin. Dust in the air is an aerosol; settled dust is an aerogel. The lung disease is pneumoconiosis: silicosis from silica, siderosis from iron, anthracosis from coal, asbestosis from asbestos.</p>
    <h4>GANK-4</h4>
    <p>The method is optronic spectrophotometry. The reagent tape darkens at a rate proportional to concentration. The instrument calculates the current mass concentration from the darkening, the change in optical density, the analysis time and the sensitivity. The formula image in the guide is damaged, so the equation is not written here.</p>
    <ol class="tasks">
      <li>After preparation do not switch the instrument off: the zero resets. Mode (A) is outdoor air, (P) is the work zone.</li>
      <li>START, the component code and the object number, then START again. Feed the sample with the probe and wait until the current value settles.</li>
      <li>Write the average of one series and repeat the series. Add the time and date to the second average.</li>
      <li>Put the cassettes in a sealed bag. Blow the instrument idle through an FS-1 filter for 5–10 minutes, then switch it off.</li>
    </ol>
  </div>`;
};

harm.en = function () {
  return `<div class="lab-block">
    <h4>Plan</h4>
    <ol class="tasks"><li>Air pollution.</li><li>The main sources.</li><li>Kinds of poisoning and their causes.</li></ol>
    <h4>Clean air and poisoning</h4>
    <p>Chemically clean air: nitrogen 78.09%, oxygen 20.95%, argon 0.93%, carbon dioxide 0.03%, other gases 0.01%. At work, gas and vapour change that mix. The main sources are industry, transport, plants, oil and heat power.</p>
    <p>Acute poisoning is a large amount at once. Signs come quickly: dizziness, nausea, vomiting, loss of consciousness. Chronic poisoning is a small amount over years and becomes a lasting illness. The poison usually enters through the lungs and the skin, rarely through the stomach. A substance that dissolves in water passes into the blood faster.</p>
    <p>Causes: broken safety and sanitation rules, poor work hygiene, an unfinished process, weak ventilation, poorly organised personal protection. The exposure limit is the amount of gas, in mg/m³, that causes no harmful change during daily work over many years.</p>
    <h4>Measurement</h4>
    <p>GANK-4 measures mass concentration in the work zone in two modes. In the first, the average is taken over 15, 20 or 30 minutes. The second is continuous: the current and average values are stored, and an alarm sounds if the limit is passed. The steps are the same as in the dust lab.</p>
  </div>`;
};

noise.en = function () {
  return `<div class="lab-block">
    <h4>Plan</h4>
    <ol class="tasks"><li>General facts about noise and vibration. Vibration is measured on the next card.</li><li>The effect on a person.</li><li>Prevention.</li></ol>
    <h4>Noise</h4>
    <p>Noise is any sound that is unpleasant. Mechanical noise is the continuous mixed sound of machines. Aerodynamic noise is a light single tone, as from a fan or flowing water. The ear hears from 16 to 20 000 Hz. Below 20 Hz is infrasound, above 20 kHz is ultrasound: the ear does not hear them, but the body feels them.</p>
    <p>The limits written in the lab guide are 40–100 dB for low frequencies, 85–90 dB for middle frequencies, and up to 75–85 dB for high frequencies called harmless there. Those are the numbers of that text, not a separate standard number.</p>
    <p>Long noise lowers hearing and vision, raises blood pressure and tires the nervous and cardiovascular systems. Protection has three directions: lower the source, shorten the path, protect the person. The most effective is to lower the source itself by design, material and process.</p>
    <h4>Sound level meter</h4>
    <ol class="tasks">
      <li>Place the Digital Sound Level Meter in the room and press power. After 2–3 seconds the level runs in real time.</li>
      <li>MAX holds the highest level until a higher one appears. Press MAX again to return to ordinary measurement.</li>
      <li>The screen shows four digits, dBA, a MAX mark and the battery. There is a tripod thread on the back. The sensor is covered by a pad by default. If no button is pressed for 15 minutes, the meter switches off.</li>
    </ol>
  </div>`;
};

vibration.en = function () {
  return `<div class="lab-block">
    <h4>Vibration</h4>
    <p>Vibration is the mechanical oscillation of an elastic body. The source is a process, a mechanism or a machine. Whole-body vibration comes from the floor, seat or platform. Hand vibration comes from rotating and impact tools.</p>
    <p>Long exposure causes vibration disease. The guide names four stages: pain in the hands and shoulders and broken sleep; lower sensitivity and blue skin; white fingers when the fist is closed; pain in all muscles and disturbed nerve and endocrine work. The hands and ankles are affected first.</p>
    <p>People under 18 and pregnant women are not taken for this work. Work is no more than 2/3 of a shift, with a 10–15 minute break every hour, and not more than one shift. Protection: lower the source, isolate vibration, place the machine well, and use damping gloves, shoes and mats. The clothing passes frequencies above 11 Hz. The guide writes the pass band as 16, 31.5 and 63 Hz, with attenuation of about 7–10 dB.</p>
    <h4>ASSISTENT</h4>
    <ol class="tasks">
      <li>The instrument measures sound, infrasound, ultrasound, and whole-body and hand vibration. Open VIBRATION in the main menu.</li>
      <li>The V3RT option measures whole-body and hand vibration on three axes at once. V1 and V3 measure one chosen axis.</li>
      <li>The equivalent level and the linear average appear together. Defaults: 1 s for hand vibration, 10 s for whole-body. Set another time in the service menu before you start.</li>
      <li>The reading is delayed until the filter settles, starting from high frequencies. If overload or the sensitivity mark is on, treat the result only as an estimate.</li>
    </ol>
  </div>`;
};

ground.en = function () {
  return `<div class="lab-block">
    <h4>Plan</h4>
    <ol class="tasks"><li>What protective earthing is.</li><li>Its kinds.</li><li>How current acts on a person.</li><li>The measuring instrument.</li></ol>
    <h4>Why parts are earthed</h4>
    <p>Protective earthing is a deliberate connection to earth of metal parts that carry no current but can become live. That includes a machine, transformer, cabinet, lamp, panel, cable joint, pipe and the metal of the wiring. The electrode plus the conductors is the earthing device.</p>
    <p>A natural electrode can be an underground water or other pipe, except fire and explosion hazards; reinforced concrete touching the ground; a lead cable sheath; a non-electrified rail. An artificial electrode is vertical or horizontal. A vertical one is a steel pipe, rod or angle at least 2.5–3 m long.</p>
    <p>Current acts by heat (a burn), by electrolysis (blood and tissue break down), biologically (muscles contract) and mechanically (fibres, bone, vessels and nerves tear). The guide also lists unreliable earthing of a case, a poor guard, and letting a person under 18 work on an electrical installation.</p>
    <h4>AKIP-8603</h4>
    <p>The instrument measures insulation resistance and DC and AC voltage. It measures the current at a test voltage, turns it into a number and shows it. The test voltage comes from the battery through a pulse converter. An insulation test can measure DAR and PI. If the circuit is above 30 V DC or AC, a sound plays and the test is blocked.</p>
    <div class="norms-wrap"><table class="norms"><thead><tr><th>Characteristic</th><th>Value</th></tr></thead><tbody>
      <tr><td>Test voltage</td><td>500–15000 V, step 500 V</td></tr>
      <tr><td>Insulation resistance limit</td><td>0.14 × Utest, GΩ</td></tr>
      <tr><td>Voltage range</td><td>0–600 V, DC and AC 45–60 Hz</td></tr>
      <tr><td>Voltage error</td><td>±(0.02×U + 3) V</td></tr>
      <tr><td>Resistance error, GΩ</td><td>0–2: ±(0.05×R+0.005); 2–20: ±(0.05×R+0.05); 20–200: ±(0.05×R+0.5); 200–2000: ±(0.05×R+5)</td></tr>
    </tbody></table></div>
  </div>`;
};

fire.en = function () {
  return `<div class="lab-block">
    <h4>Plan</h4>
    <ol class="tasks"><li>Ways to stop burning.</li><li>The main tools and systems.</li><li>Using and checking a hand extinguisher.</li></ol>
    <h4>Room category</h4>
    <p>The guide divides production and storage into A, B, V, G, D and E. A: gas with a lower limit of 10% or less, liquid with a flash point up to 28°C, and substances that explode with water, oxygen or each other. B: gas above 10%, liquid 28–61°C, dust or fibre at 65 g/m³ or less. V: liquid above 61°C, dust above 65 g/m³, and solid combustibles. G: hot processing, sparks, flame, or a non-combustible material burned as fuel. D: non-combustible materials when cold. E: flammable gas without a liquid phase, and dust that explodes by volume but does not make a fire.</p>
    <p>Materials are combustible, non-combustible or difficult to burn. A non-combustible material may lose colour when heated but keeps its shape. A difficult one smoulders and smokes for a long time.</p>
    <h4>Extinguishing agent</h4>
    <p>Water cools the seat because its heat capacity and heat of evaporation are high. Do not use it on substances that react with it, valuable goods and metals, live equipment, or a highly flammable liquid. Chemical foam comes from soda solution and acid solution. Air-mechanical foam comes from mixing air with a foam solution in water. Foam covers the surface and keeps oxygen out.</p>
    <p>Hand tools: a sand box, an asbestos blanket, a fire board, a chemical foam extinguisher. Systems: a water supply, a foam generator, automatic extinguishing with an alarm. Hazards: open flame, high temperature, toxic smoke, low oxygen, collapse and explosion.</p>
    <h4>Extinguisher type</h4>
    <ul class="tasks">
      <li>Air-foam — an early fire of solids, paint, wood, oil, paper.</li>
      <li>Powder — classes A, B, C and E. Forbidden for a class D metal fire.</li>
      <li>Carbon dioxide — stops a flame quickly and lowers the temperature.</li>
      <li>Halon — where property must be saved, and at a high-voltage station.</li>
      <li>Water — organic matter and solid combustibles.</li>
      <li>Fluorinated air emulsion — visibility stays, the area can be large, and it works in hard frost.</li>
    </ul>
    <h4>OP-1, OP-2, OP-3, OP-5, OP-10</h4>
    <ol class="tasks">
      <li>Pull the sealed pin with a sharp movement.</li>
      <li>Step back about 4 metres from the fire.</li>
      <li>On a stored-pressure model, press the handle. On a model with a built-in pressure source, lift the start lever and press the nozzle handle. You can repeat the step.</li>
      <li>A useful jet angle is about 30°. For a large fire, move away and call 101 or 112.</li>
    </ol>
    <h4>Inspection</h4>
    <ul class="tasks">
      <li>Water, foam water and mixtures: check and recharge at least once a year.</li>
      <li>Powder: check every year, renew the charge at least once in five years.</li>
      <li>Carbon dioxide and halon: weigh and check the pressure once a year, refill once in five years.</li>
    </ul>
  </div>`;
};
