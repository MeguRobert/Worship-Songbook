let contor = 0;
let t = 0
let n = 12

const titles = [
  null,
  'A mélyből hozzád száll szavam',    
  'Amikor teljes sötétség borul reám',
  'Csak te',                          
  'Erőt adsz minden helyzetben',      
  'Uj',                               
]

const dur = [
  ' C',
  'C#',
  ' D',
  'D#',
  ' E',
  ' F',
  'F#',
  ' G',
  'G#',
  ' A',
  'A#',
  ' H',
]
const mol = [
  ' Cm', //0
  'C#m', //1
  ' Dm', //2
  'D#m', //3
  ' Em', //4
  ' Fm', //5
  'F#m', //6
  ' Gm', //7
  'G#m', //8
  ' Am', //9
  'A#m', //10
  ' Hm', //11
]

let ch = {
  C :0,
  Cisz : 1,
  D :2,
  Disz: 3,
  E :4,
  F :5,
  Fisz: 6,
  G :7,
  Gisz: 8,
  A :9,
  Aisz: 10,
  H :11,
}

const chords = [
  null,
  `         ${mol[get(4)]}       ${mol[get(9)]}       ${mol[get(4)]}      ${mol[get(9)]}
     ${dur[get(11)]}7                   ${mol[get(4)]}
     ${mol[get(4)]}       ${mol[get(9)]}       ${mol[get(4)]}    ${mol[get(9)]}
     ${dur[get(11)]}7                   ${mol[get(4)]}
     ${mol[get(4)]}                     ${mol[get(9)]}
     ${dur[get(11)]}7        ${mol[get(9)]}
     ${mol[get(4)]}                     ${mol[get(9)]}
     ${mol[get(4)]}        ${mol[get(9)]}

          ${mol[get(4)]}        ${mol[get(9)]}    ${mol[get(4)]}   ${mol[get(9)]}
     ${dur[get(11)]}7                   ${mol[get(4)]}
     ${mol[get(4)]}      ${mol[get(9)]}        ${mol[get(4)]}     ${mol[get(9)]}
     ${dur[get(11)]}7                   ${mol[get(4)]}
     ${mol[get(4)]}                     ${mol[get(9)]}
     ${dur[get(11)]}7        ${mol[get(9)]}
     ${mol[get(4)]}                     ${mol[get(9)]}
     ${mol[get(4)]}        ${mol[get(9)]}
     
              ${mol[get(4)]}        ${mol[get(9)]}           ${mol[get(4)]}        ${mol[get(9)]}
     ${dur[get(11)]}7                   ${mol[get(4)]}
     ${mol[get(4)]}       ${mol[get(9)]}       ${mol[get(4)]}    ${mol[get(9)]}
     ${dur[get(11)]}7                   ${mol[get(4)]}
     ${mol[get(4)]}                     ${mol[get(9)]}
     ${dur[get(11)]}7        ${mol[get(9)]}
     ${mol[get(4)]}                     ${mol[get(9)]}
     ${mol[get(4)]}        ${mol[get(9)]}
  `,
  
  `               ${mol[get(4)]}                       ${dur[get(0)]}   
              ${mol[get(9)]}                        ${dur[get(11)]}7   
                  ${mol[get(4)]}                         ${dur[get(0)]}
              ${mol[get(9)]}                        ${dur[get(11)]}7   
                  
  `,

]


function get(number) {
  return (number + t + n) % n
}

const texts = [
  null,
  `1. A mélyből hozzád száll szavam,
  Krisztus kegyelmezz!
  A bajban lelkem társtalan,
  Krisztus kegyelmezz!
  Segíts! Segíts! Ne hagyj! Ne hagyj!
  Nézd, rám tör a bűn már,
  Te adj! Te adj! Erőt! Erőt!
  Krisztus, kegyelmezz!

  2. Ha ajkam vétett ellened,
  Krisztus kegyelmezz!
  A jó hírt zengjem csak veled,
  Krisztus kegyelmezz!
  Segíts! Segíts! Ne hagyj! Ne hagyj!
  Nézd, rám tör a bűn már,
  Te adj! Te adj! Erőt! Erőt!
  Krisztus, kegyelmezz!

  3. Ha arcod fényét elfedem,
  Krisztus kegyelmezz!
  Te újból szólíts, Istenem,
  Krisztus kegyelmezz!
  Segíts! Segíts! Ne hagyj! Ne hagyj!
  Nézd, rám tör a bűn már,
  Te adj! Te adj! Erőt! Erőt!
  Krisztus, kegyelmezz!`,

  `1. Amikor teljes sötétség borul reám
  És mikor kialszik minden fény,
  Amikor éjszaka lesz a világosság
  És mikor elhagy minden remény.
  
  Refr.:A sötétség nem borít el előled,
  Az éjszaka úgy fénylik, mint a nappal énnekem.
  A sötétség olyan, mint a világosság,
  Mert Te, Jézus, eljöttél hozzám.
  
  2. Meg vagyok győződve,
  hogy sem halál, sem élet,
  Sem démonok és
  semmilyen hatalmasság,
  Sem amik most vannak,
  sem amik jönni fognak,
  Sem magasság,
  sem mélység többé már,
  
  Refr.
  Soha semmi, semmi nem választhat el,
  Örökké tartó szerelmedtől, Istenem,
  Amit adtál a te egyetlen fiadban,
  A mi Urunk Jézus Krisztusban. :/`,
  
  
  `A megfelelés hegyét
  hányszor megmásztam már,
  az évek során.
  De sosem értem fel még
  a csúcsra talán,
  sok volt a buta szabály.

  Milyen egy jó keresztény?
  Hogy él és mit csinál?
  Oh, hányan megmondták már!
  Állj be a sorba csináld,
  amit a rendszer kíván!
  Vigyázz, hogy el ne hibázd!
  
  
  Refr.: Nincs más csak Te,
  csak Te, egyedül, csak Te,
  így egyszerűen... TE.
  Ooooh, csak Te.
  
  
  Az első szeretetet
  valahogy elhagytuk már,
  sok minden rakódott rá.
  Elrepült kétezer év,
  csak egy távoli kép
  az élő Isten ma már.
  
  
  Az évszázadok alatt
  letisztult liturgiák
  megmondják, hogyan csináld.
  Sok bába közt a gyerek
  valahogyan elveszett.
  A szívekben sír a hiány!
  
  Refr.: 2x
  
  Mert nem változtál semmit.
  Ugyanaz vagy, aki voltál.
  Várod, hogy felépüljön bennünk
  a neked szentelt oltár.
  Ahogy igazi tűz lángol,
  minden salakot eléget.
  Várod, hogy rád találjunk újra
  és végre megismerjünk téged.
  Refr.:`,

`text4`,  
`text5`,  
`text5`,  
`text5`,  
]


const data = [
  {id: ++contor, title: titles[contor], text: texts[contor], chords: chords[contor], transp: t},
  {id: ++contor, title: titles[contor], text: texts[contor], chords: chords[contor], transp: t},
  {id: ++contor, title: titles[contor], text: texts[contor], chords: chords[contor], transp: t},
  {id: ++contor, title: titles[contor], text: texts[contor], chords: chords[contor], transp: t},
];
  


export default data;