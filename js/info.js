const data = getData();

google.charts.load("current", {
  packages: ["geochart"],
});

const regionName = document.querySelector("#region-name");
const regionInfo = document.querySelector("#region-info");

regionName.textContent = data[0].country.f;
regionInfo.innerHTML = data[0].hungryText;

function dataWithSufix(value, suffix) {
  return { v: value, f: `${value}${suffix}` };
}

function populationCalculate(row) {
  return Math.round(row.hungryCount / (row.percentageHunger / 100));
}

function generateGoogleData(dataset) {
  return dataset.map((row) => {
    return [
      row.code,
      row.country,
      dataWithSufix(row.percentageHunger, "%"),
      dataWithSufix(populationCalculate(row), " Milhões"),
    ];
  });
}

const googleColumns = ["Region code", "Country", "Fome", "População Total"];

google.charts.setOnLoadCallback(() => {
  const table = new google.visualization.arrayToDataTable([
    googleColumns,
    ...generateGoogleData(data),
  ]);

  const options = {
    resolution: "subcontinents",
    colorAxis: { colors: ["#ffffd4", "#c06500"] },
    backgroundColor: {
      fill: "#111111",
      stroke: "gray",
      strokeWidth: 1,
    },
    datalessRegionColor: "gray",
    keepAspectRatio: true,
    legend: false,
    tooltip: { isHtml: true, trigger: "visible" },
  };

  const chart = new google.visualization.GeoChart(
    document.querySelector("#regions-div")
  );

  chart.draw(table, options);

  google.visualization.events.addListener(chart, "select", () => {
    const [selection] = chart.getSelection();

    regionName.textContent = data[selection.row].country.f;
    regionInfo.innerHTML = data[selection.row].hungryText;
  });
});

function getData() {
  return [
    {
      country: { v: "South America", f: "América do Sul" },
      hungryCount: 33.7,
      percentageHunger: 7.8,
      code: "005",
      hungryText:
        "<p>Milhões de pessoas foram afetadas pela falta de acesso adequado a alimentos, com famílias inteiras lutando para satisfazer suas necessidades básicas. A desigualdade social se aprofundou, com comunidades vulneráveis, como povos indígenas e áreas rurais remotas, sendo as mais afetadas.</p> <p>Os governos e organizações internacionais empreenderam esforços para fornecer assistência alimentar emergencial, mas a escala e a persistência do problema exigiram medidas mais abrangentes para combater a fome e promover a segurança alimentar sustentável na região.</p>",
    },
    {
      country: { v: "Central America", f: "América Central" },
      hungryCount: 19,
      percentageHunger: 10.4,
      code: "013",
      hungryText:
        "<p>A América Central enfrentou uma severa crise de fome, agravada pela combinação de desastres naturais, instabilidade política e pobreza generalizada. Milhões de pessoas em países como Honduras, Guatemala, El Salvador e Nicarágua foram afetadas pela escassez de alimentos, com comunidades rurais e marginalizadas sendo as mais impactadas. O ciclone tropical, furacões e secas prolongadas devastaram plantações e prejudicaram a produção agrícola, deixando as famílias sem meios de subsistência.</p> <p>A falta de acesso a alimentos adequados resultou em desnutrição generalizada, especialmente entre crianças, exigindo uma resposta urgente das autoridades governamentais e da comunidade internacional para fornecer ajuda humanitária e promover a segurança alimentar na região.</p>",
    },
    {
      country: { v: "Caribbean", f: "Caribe" },
      hungryCount: 7,
      percentageHunger: 16.1,
      code: "029",
      hungryText:
        "<p>A passagem de furacões e tempestades tropicais destruiu plantações e infraestruturas agrícolas, exacerbando a escassez de alimentos. Além disso, a queda drástica no turismo devido à pandemia de COVID-19 causou um impacto significativo na economia regional, deixando muitas famílias sem meios de subsistência. Esforços foram feitos para fornecer assistência humanitária e fortalecer a resiliência das comunidades afetadas, buscando combater a fome e promover a segurança alimentar na região do Caribe.</p>",
    },
    {
      country: { v: "Western Africa", f: "África Ocidental" },
      hungryCount: 75.2,
      percentageHunger: 18.7,
      code: "011",
      hungryText:
        "<p>A África Ocidental enfrentou uma séria crise de fome, com milhões de pessoas sofrendo de insegurança alimentar extrema. A combinação de conflitos armados, instabilidade política, mudanças climáticas e pobreza generalizada contribuiu para agravar a situação.</p> <p>Países como Nigéria, Burkina Faso e Mali foram particularmente afetados, com comunidades rurais e deslocadas internamente enfrentando condições desesperadoras. A falta de acesso a alimentos básicos e a degradação das condições de vida levaram a altos níveis de desnutrição e mortalidade infantil.</p> <p>Os esforços para fornecer assistência humanitária e promover a segurança alimentar foram lançados, mas a escala e complexidade do desafio exigiram uma resposta coordenada e sustentada dos governos, organizações internacionais e comunidade global.<p>",
    },
    {
      country: { v: "Eastern Africa", f: "África Oriental" },
      hungryCount: 125.1,
      percentageHunger: 28.1,
      code: "014",
      hungryText:
        "<p>A ocorrência de secas prolongadas e inundações devastadoras prejudicou a produção agrícola, deixando comunidades rurais sem acesso adequado a alimentos.</p> <p>Além disso, a instabilidade política e os conflitos armados impediram a distribuição de ajuda humanitária, agravando ainda mais a situação. A resposta humanitária foi fundamental para fornecer assistência alimentar e busca de soluções de longo prazo para combater a fome e promover a segurança alimentar na região da África Oriental.</p>",
    },
    {
      country: { v: "Northern Africa", f: "África do Norte" },
      hungryCount: 17.4,
      percentageHunger: 7.1,
      code: "015",
      hungryText:
        "<p>Países como Egito, Líbia e Sudão enfrentaram problemas crescentes devido a conflitos armados, instabilidade política e aumento da pobreza. A falta de acesso a alimentos básicos e a interrupção das cadeias de abastecimento afetaram especialmente as comunidades mais vulneráveis, levando a um aumento da desnutrição e da insegurança alimentar.</p> <p>Esforços foram feitos para fornecer assistência humanitária e melhorar a resiliência agrícola, mas a necessidade de soluções sustentáveis e a colaboração entre os países da região se mostraram fundamentais para enfrentar essa crise complexa.</p>",
    },
    {
      country: { v: "Middle Africa", f: "África Central" },
      hungryCount: 57.1,
      percentageHunger: 31.8,
      code: "017",
      hungryText:
        "<p>Conflitos armados, deslocamentos em massa, instabilidade política e mudanças climáticas prejudicaram a segurança alimentar na região. Países como República Democrática do Congo, República Centro-Africana e Sudão do Sul foram os mais afetados, com milhões de pessoas sofrendo de insegurança alimentar e desnutrição.</p> <p>A falta de acesso a alimentos básicos, a destruição de plantações e a interrupção das atividades agrícolas tiveram um impacto devastador nas comunidades locais. A resposta humanitária foi essencial para fornecer assistência alimentar emergencial e trabalhar na promoção da estabilidade, segurança e desenvolvimento sustentável na África Central.</p>",
    },
    {
      country: { v: "Southern Africa", f: "África do Sul" },
      hungryCount: 6.8,
      percentageHunger: 10.1,
      code: "018",
      hungryText:
        "<p>A África do Sul enfrentou uma crise alarmante de fome, agravada pela combinação de desigualdade socioeconômica, desemprego em massa e os impactos econômicos da pandemia de COVID-19. Milhões de pessoas foram afetadas pela insegurança alimentar, com famílias lutando para obter alimentos básicos.</p> <p>A falta de acesso a alimentos adequados levou a um aumento da desnutrição, especialmente entre as comunidades mais vulneráveis. As organizações governamentais e a sociedade civil mobilizaram esforços para fornecer assistência alimentar e promover programas de apoio social, mas a magnitude da crise exigiu uma resposta abrangente e coordenada para garantir a segurança alimentar e mitigar o sofrimento humano.</p>",
    },
    {
      country: { v: "Southern Asia", f: "Sul da Ásia" },
      hungryCount: 305.7,
      percentageHunger: 15.8,
      code: "034",
      hungryText:
        "<p>Atingido por uma severa crise de fome, resultado de vários fatores, como desastres naturais, pobreza generalizada e instabilidade política. Países como Índia, Paquistão, Bangladesh e Nepal enfrentaram altos níveis de insegurança alimentar, com milhões de pessoas sofrendo com a falta de acesso a alimentos básicos. Secas prolongadas, inundações e ciclones destruíram colheitas e prejudicaram a produção agrícola, deixando comunidades rurais em situação desesperadora.</p> <p>Além disso, a pandemia de COVID-19 exacerbou a crise, agravando ainda mais as condições socioeconômicas. Esforços foram feitos para fornecer assistência humanitária, ajuda alimentar e programas de resiliência agrícola, mas a necessidade de abordagens sustentáveis e cooperação regional se mostraram fundamentais para combater a fome e promover a segurança alimentar na região do Sul da Ásia.</p>",
    },
    {
      country: { v: "South-Eastern Asia", f: "Sudeste Asiático" },
      hungryCount: 48.8,
      percentageHunger: 7.3,
      code: "035",
      hungryText:
        "<p>Conflitos armados, desastres naturais e instabilidade econômica contribuíram para a insegurança alimentar generalizada. Nações como Myanmar, Filipinas e Indonésia enfrentaram altos índices de desnutrição e escassez de alimentos, especialmente entre as comunidades marginalizadas e rurais.</p> <p>As restrições relacionadas à pandemia de COVID-19 também dificultaram o acesso a alimentos e a distribuição de ajuda humanitária. Medidas foram tomadas para fornecer assistência alimentar emergencial e fortalecer a resiliência das comunidades afetadas, mas um enfoque abrangente e colaborativo se mostrou crucial para enfrentar a fome e promover a segurança alimentar sustentável na região do Sudeste Asiático.</p>",
    },
    {
      country: { v: "Central Asia", f: "Ásia Central" },
      hungryCount: 2.6,
      percentageHunger: 3.4,
      code: "143",
      hungryText:
        "<p>A falta de acesso a alimentos básicos, a degradação dos recursos naturais e a interrupção das cadeias de suprimentos agravaram uma crescente crise de fome. Esforços foram feitos para fornecer assistência humanitária e promover a resiliência agrícola, mas a necessidade de soluções sustentáveis ​​e de colaboração regional se mostraram fundamentais para enfrentar essa crise complexa de fome na Ásia Central.</p>",
    },
    {
      country: { v: "Western Asia", f: "Ásia Ocidental" },
      hungryCount: 42.3,
      percentageHunger: 15.1,
      code: "145",
      hungryText:
        "<p>Na Ásia Ocidental, a desnutrição em 2020 foi um desafio enfrentado por muitos países da região. Fatores como conflitos, instabilidade política e desigualdades socioeconômicas contribuíram para altos níveis de insegurança alimentar e falta de acesso a alimentos nutritivos. Na Síria, por exemplo, o conflito prolongado resultou em escassez de alimentos e aumento da vulnerabilidade nutricional entre a população.</p> <p>Além disso, a crise econômica em países como Iêmen e Líbano agravou ainda mais a situação, dificultando o acesso aos alimentos básicos. A desnutrição na Ásia Ocidental em 2020 exigiu esforços significativos para enfrentar esses desafios complexos e melhorar a segurança alimentar na região.</p>",
    },
  ];
}
