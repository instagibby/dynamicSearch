function createComponents(idForOutput, arrayForProcess) {
  arrayForProcess.forEach((item) => {
    document.getElementById(idForOutput).innerHTML +=
      `<div class="col-lg-4 col-sm-6">
        <div class="card mb-2">
          <div class="card-header">
            <h5 class="card-title mb-0">
              ${item.name}
            </h5>
          </div>
          <div class="card-body">
          <p class="card-text mb-1">
            ${item.about}
          </p>
          <p class="mb-0">
            <a href="mailto:${item.email}">${item.email}</a>
          </p>
          </div>
        </div>
      </div>`
  });
}

// Arrray to sort through
const itemArray = [
  {
    "id": "5cafa9def658c7021e40a334",
    "name": "Summers Dejesus",
    "email": "summersdejesus@gluid.com",
    "about": "Occaecat fugiat ad nisi eiusmod elit id magna. Est enim ut irure sunt adipisicing id dolor minim quis voluptate irure Lorem. Tempor amet cillum nisi ex pariatur ut do dolore amet labore ullamco magna sunt esse. Enim elit esse ex consectetur tempor sint irure commodo quis consequat esse nostrud irure aute. Qui ex consectetur qui qui eiusmod.\r\n"
  },
  {
    "id": "5cafa9de167230128c9fb043",
    "name": "Dorthy Sheppard",
    "email": "dorthysheppard@gluid.com",
    "about": "Reprehenderit culpa cillum cupidatat officia commodo elit quis. Esse ullamco reprehenderit aliquip nostrud laborum. Et aliquip deserunt irure eu duis irure cupidatat nulla adipisicing aliquip irure. Sunt deserunt voluptate cupidatat tempor ullamco amet est. Id adipisicing Lorem aute laboris laborum enim labore cillum adipisicing elit voluptate. Consectetur exercitation labore do officia commodo et exercitation et sit occaecat duis ullamco magna pariatur.\r\n"
  },
  {
    "id": "5cafa9de8e8505abafd9a9e7",
    "name": "Cassie Gonzales",
    "email": "cassiegonzales@gluid.com",
    "about": "Ut enim velit in consectetur est mollit exercitation adipisicing. Laborum ea excepteur duis ea eu Lorem culpa aliqua proident et. Dolor fugiat id aliquip voluptate cupidatat id tempor enim excepteur ad ea sunt exercitation cillum. Id voluptate veniam ipsum duis dolor mollit non ex est fugiat eiusmod aliquip.\r\n"
  },
  {
    "id": "5cafa9de6e376197bac3e3d6",
    "name": "Bullock Hoover",
    "email": "bullockhoover@gluid.com",
    "about": "Ut irure dolor eiusmod voluptate enim mollit anim eiusmod Lorem duis cupidatat. Magna nisi laboris labore cillum ex id. Incididunt nisi ad sint minim. Non ea proident velit duis pariatur reprehenderit minim reprehenderit. Amet incididunt pariatur sit incididunt qui sunt amet.\r\n"
  },
  {
    "id": "5cafa9de13e75f76934e3d95",
    "name": "Fulton West",
    "email": "fultonwest@gluid.com",
    "about": "Ut velit nulla cupidatat labore enim pariatur elit. Sunt dolor eu aute et dolor. Ut qui aliquip magna dolor enim elit culpa.\r\n"
  },
  {
    "id": "5cafa9de32da8fd168a8401d",
    "name": "Claudette Holcomb",
    "email": "claudetteholcomb@gluid.com",
    "about": "Adipisicing culpa deserunt Lorem irure esse elit voluptate fugiat ad cupidatat et. Sit deserunt consectetur culpa elit dolore aute nostrud ad cillum elit. Aliquip consequat ullamco aute exercitation est reprehenderit enim ipsum ullamco. Aliquip dolor irure minim laborum sint eiusmod quis.\r\n"
  },
  {
    "id": "5cafa9de90f8e914519e5e5f",
    "name": "Fry Daniels",
    "email": "frydaniels@gluid.com",
    "about": "Do aliqua sunt id nulla et ad tempor cupidatat laboris nisi qui. Et elit do sint qui ad ad. Veniam qui officia Lorem ea tempor exercitation sint velit esse. Deserunt Lorem elit nulla nulla velit anim cillum. Duis excepteur tempor exercitation esse aute exercitation sint duis velit elit laborum mollit qui ea.\r\n"
  },
  {
    "id": "5cafa9de9b1a529f8659d0cf",
    "name": "Valarie Chavez",
    "email": "valariechavez@gluid.com",
    "about": "Mollit elit aliquip amet veniam occaecat velit et non. Mollit eu amet aliquip eu eu. Sit Lorem laboris consequat sunt ipsum cillum dolore veniam ullamco. Tempor labore incididunt dolore fugiat sunt aliquip incididunt dolore labore proident ullamco commodo consectetur est. Voluptate commodo Lorem duis occaecat pariatur eu et adipisicing aliquip aliquip qui consectetur consequat exercitation. Esse ad ipsum nostrud officia pariatur.\r\n"
  },
  {
    "id": "5cafa9de2e83f1c63ebd118f",
    "name": "Hughes Joyner",
    "email": "hughesjoyner@gluid.com",
    "about": "Sint pariatur enim duis ex qui aliqua ex. Et velit est Lorem deserunt incididunt enim elit pariatur est eu exercitation. Ad veniam culpa incididunt in velit dolor ipsum eiusmod id irure velit duis ex. Non enim est excepteur et ut culpa Lorem ad excepteur dolore nisi quis. Nulla aliqua quis laborum ea consequat sit non quis. Velit sunt ullamco est enim sit cupidatat commodo et.\r\n"
  },
  {
    "id": "5cafa9dec280f9e2cd9df78b",
    "name": "Moran Floyd",
    "email": "moranfloyd@gluid.com",
    "about": "Aliqua nulla ut tempor sunt enim cupidatat nisi non ea eu dolore. Laborum velit ipsum amet Lorem. Eiusmod ea voluptate ullamco aute elit ut sit Lorem ullamco irure incididunt ipsum velit. Sint voluptate deserunt proident aliquip ullamco. Ea ut id tempor officia non minim cillum do elit laborum consequat labore ad fugiat. Aute laborum non cillum ad ea. Esse velit adipisicing qui nisi sit ex magna voluptate id occaecat minim quis ut.\r\n"
  },
  {
    "id": "5cafa9de5bb2af5c0686bf59",
    "name": "Kemp Howe",
    "email": "kemphowe@gluid.com",
    "about": "Est commodo veniam do officia laboris exercitation tempor aute eu proident labore adipisicing labore cupidatat. Minim incididunt cupidatat qui do laboris do nostrud culpa elit elit nulla culpa amet laborum. Dolor aliquip mollit ex ad elit ut aliquip ut occaecat excepteur eiusmod magna laborum ut. Ea pariatur id anim incididunt aliqua irure exercitation Lorem amet aliqua laborum occaecat. Aute elit eiusmod et pariatur deserunt duis enim deserunt amet.\r\n"
  },
  {
    "id": "5cafa9de7210fb9413e19580",
    "name": "Rollins Underwood",
    "email": "rollinsunderwood@gluid.com",
    "about": "Anim non esse magna consectetur ullamco eu eu qui voluptate consectetur. Incididunt ullamco excepteur aute labore cupidatat non eiusmod officia irure cupidatat. Consectetur consequat aute elit mollit do. Ex laboris cillum pariatur minim nostrud pariatur aliqua ad cupidatat minim minim enim ullamco. Cillum pariatur ullamco nisi cillum. Quis est laboris labore laborum exercitation ipsum incididunt adipisicing enim aliquip. Elit irure incididunt reprehenderit elit ex.\r\n"
  },
  {
    "id": "5cafa9deba5b6979c223c204",
    "name": "Holly Benson",
    "email": "hollybenson@gluid.com",
    "about": "Commodo consequat ullamco reprehenderit duis enim ullamco consectetur nulla et sit reprehenderit. Culpa duis consequat cillum ea magna aliqua ex non. Anim deserunt amet nulla duis.\r\n"
  },
  {
    "id": "5cafa9de02b7371496b61fe2",
    "name": "Rosemarie Newton",
    "email": "rosemarienewton@gluid.com",
    "about": "Proident nisi et exercitation mollit dolor ea duis adipisicing anim. Do sint velit ut laboris elit voluptate cupidatat est magna dolor Lorem proident eiusmod. Mollit sit nostrud reprehenderit laboris elit dolore qui dolor ut. Elit duis aute ea irure ad eu laborum. Ex voluptate quis ad enim ullamco excepteur irure reprehenderit laborum duis eiusmod dolore. Magna excepteur nisi elit id laboris in ea culpa elit eiusmod occaecat pariatur fugiat.\r\n"
  },
  {
    "id": "5cafa9de83084b5f451f1a78",
    "name": "Ashlee Becker",
    "email": "ashleebecker@gluid.com",
    "about": "Do ipsum excepteur incididunt sunt magna cupidatat consectetur exercitation culpa deserunt dolor qui. Lorem quis sunt ad amet. Dolore eiusmod anim veniam officia.\r\n"
  },
  {
    "id": "5cafa9de6389ccb96697d71b",
    "name": "Guadalupe Valentine",
    "email": "guadalupevalentine@gluid.com",
    "about": "Est anim minim qui irure. Laborum laborum magna ipsum id sit veniam commodo magna. Reprehenderit nulla nulla deserunt velit anim.\r\n"
  },
  {
    "id": "5cafa9debea1eae2ab270188",
    "name": "Hodges Meyers",
    "email": "hodgesmeyers@gluid.com",
    "about": "Ad nisi ut mollit dolore reprehenderit. Nostrud ex laboris labore elit ullamco do velit tempor. Excepteur minim sunt nulla occaecat laborum duis dolor id in do magna. Cillum reprehenderit veniam esse consequat occaecat reprehenderit anim excepteur sunt esse minim magna voluptate. Laborum nostrud proident sint magna consectetur pariatur laboris. Minim nisi pariatur qui ipsum exercitation excepteur magna consectetur. Eiusmod voluptate eu officia nostrud dolor velit ex voluptate cupidatat laborum.\r\n"
  },
  {
    "id": "5cafa9dec833283bf261219d",
    "name": "Rodriquez Phelps",
    "email": "rodriquezphelps@gluid.com",
    "about": "Est duis exercitation exercitation reprehenderit aliqua labore occaecat laboris et. Esse aute anim pariatur qui veniam esse. Ex ipsum dolore ex ex incididunt elit incididunt ea adipisicing. Aliquip non enim anim nisi duis nisi cillum consectetur in. Ea aliqua magna ipsum sunt do eiusmod enim nulla ut esse.\r\n"
  },
  {
    "id": "5cafa9de80a6178b7f96d632",
    "name": "Darla Quinn",
    "email": "darlaquinn@gluid.com",
    "about": "Amet excepteur occaecat quis pariatur velit do laboris. Ipsum voluptate pariatur excepteur esse minim sunt id ad cillum elit eu culpa. Magna officia magna voluptate ullamco qui exercitation non sunt fugiat pariatur esse.\r\n"
  },
  {
    "id": "5cafa9def666a24b791b6bcf",
    "name": "Taylor Ramsey",
    "email": "taylorramsey@gluid.com",
    "about": "Ex ullamco pariatur irure dolore mollit ipsum quis dolor exercitation labore ea. Pariatur id exercitation eu dolor ut aliquip ullamco. Proident ex tempor eu anim non veniam cillum anim cillum ullamco dolore eu aliquip. Magna eu laborum exercitation consequat proident irure duis consectetur excepteur velit sit non aute. Sunt laborum ut magna cupidatat laborum ipsum fugiat magna do commodo esse laborum elit.\r\n"
  },
  {
    "id": "5cafa9de93e0c8de33fa102e",
    "name": "Shana Fuller",
    "email": "shanafuller@gluid.com",
    "about": "Sint reprehenderit irure magna excepteur consectetur tempor et ex reprehenderit. Mollit ipsum aliqua est consectetur deserunt commodo. Magna ipsum deserunt ex anim mollit minim id laboris exercitation velit. Cupidatat ullamco mollit consequat reprehenderit ex. Anim ea voluptate in non non cillum pariatur culpa. Qui ullamco tempor aute occaecat.\r\n"
  },
  {
    "id": "5cafa9de0cc7a8e2df490ce5",
    "name": "Cook Conley",
    "email": "cookconley@gluid.com",
    "about": "Ut id officia et exercitation. Dolore nisi eiusmod enim cupidatat quis velit amet id sit. Enim non magna ex sit Lorem minim amet incididunt est labore fugiat occaecat. Reprehenderit incididunt aute adipisicing non sint enim. Enim consectetur esse sit laboris. Cupidatat laboris proident excepteur in in nostrud laborum esse nulla cillum aliquip quis in. Tempor in est adipisicing qui ad sunt proident consectetur.\r\n"
  },
  {
    "id": "5cafa9de60347a63684384b3",
    "name": "Jessie Joyce",
    "email": "jessiejoyce@gluid.com",
    "about": "Ea ipsum irure dolor ullamco dolor dolore. Aute officia cupidatat qui deserunt laborum aliquip exercitation tempor exercitation non Lorem duis aute. Sit culpa mollit id non. Nisi velit eu labore exercitation eu nisi consectetur enim veniam proident laboris amet qui deserunt. Nulla nisi velit id culpa reprehenderit sint adipisicing nostrud sint ipsum et aliqua nostrud ea.\r\n"
  },
  {
    "id": "5cafa9dec8c9e63867afa248",
    "name": "Mooney Gamble",
    "email": "mooneygamble@gluid.com",
    "about": "Commodo qui do irure amet eiusmod commodo eu enim consequat ullamco nostrud quis irure id. Incididunt aliquip ex Lorem duis consectetur magna nisi. Quis veniam eiusmod voluptate qui adipisicing non sit laborum. Nisi qui laborum veniam minim elit ut. Veniam aute culpa eiusmod labore excepteur consectetur commodo cillum commodo nostrud eiusmod voluptate est. In ullamco officia occaecat occaecat dolore enim sunt ullamco ullamco proident ut labore magna ut.\r\n"
  },
  {
    "id": "5cafa9dec58043fefaa80221",
    "name": "Cannon Cooke",
    "email": "cannoncooke@gluid.com",
    "about": "Ad occaecat elit deserunt eu nisi nisi fugiat. Mollit quis nostrud ad est eiusmod eiusmod laborum laboris proident labore. Do quis cillum do amet deserunt in eiusmod eu sunt.\r\n"
  },
  {
    "id": "5cafa9de76ac09d2a1acfb3c",
    "name": "Hilda Lara",
    "email": "hildalara@gluid.com",
    "about": "Labore aute do ut occaecat occaecat nisi exercitation ipsum anim eu adipisicing. Occaecat adipisicing irure ullamco amet est adipisicing eu adipisicing nisi. Nulla consequat deserunt exercitation cillum occaecat minim eu cillum reprehenderit eiusmod. Duis amet ea consectetur ad amet culpa sit nostrud cillum proident ullamco amet aliqua fugiat. Laboris irure excepteur enim aliquip non officia nostrud officia. Voluptate labore est non sint. Ipsum laboris veniam incididunt sit ullamco aliqua.\r\n"
  },
  {
    "id": "5cafa9de435af39ff63a1c2c",
    "name": "Church Houston",
    "email": "churchhouston@gluid.com",
    "about": "Mollit cupidatat ut sint ut consequat mollit incididunt qui ex. Ullamco nisi eiusmod consequat ex non officia proident ea. Cillum minim reprehenderit cillum eu ad sint pariatur sint laborum do. Nisi minim eiusmod incididunt et adipisicing quis ipsum nisi nulla aliqua esse. Qui consequat dolor enim dolor anim minim commodo culpa quis veniam. Reprehenderit magna deserunt adipisicing nulla elit minim nisi nulla mollit labore aliqua laboris excepteur sit. Adipisicing excepteur ullamco pariatur ullamco dolor sunt cupidatat et amet cupidatat dolore incididunt in.\r\n"
  },
  {
    "id": "5cafa9de09f0b83b9be970ce",
    "name": "Rush Bryant",
    "email": "rushbryant@gluid.com",
    "about": "Dolore adipisicing reprehenderit commodo ad esse consectetur. Fugiat ut incididunt Lorem tempor in eiusmod exercitation laborum dolore voluptate duis. Reprehenderit elit eiusmod ut magna et culpa labore laborum tempor cillum minim. Laborum ut fugiat consectetur ad occaecat sunt.\r\n"
  },
  {
    "id": "5cafa9dea04b5c7ea9842957",
    "name": "Avery Ochoa",
    "email": "averyochoa@gluid.com",
    "about": "Do duis ipsum voluptate elit laboris ullamco adipisicing minim. Incididunt duis dolor reprehenderit excepteur occaecat duis minim. Dolore Lorem dolore excepteur ex voluptate sit proident amet reprehenderit nulla. Incididunt irure aliqua ad consequat culpa. Aute velit proident excepteur ad cillum et adipisicing eu labore elit dolor et excepteur veniam. Deserunt id consectetur aute duis voluptate.\r\n"
  },
  {
    "id": "5cafa9def11243203b167a94",
    "name": "Roach Rivers",
    "email": "roachrivers@gluid.com",
    "about": "Excepteur nulla esse ullamco aliquip ut ex deserunt ipsum exercitation mollit voluptate mollit et. Id est Lorem laborum nulla aliquip id. Eu elit cillum enim ut dolore occaecat voluptate. Ea eu fugiat enim minim et laborum fugiat mollit cupidatat. Officia velit consequat sit qui sunt do tempor sunt duis minim magna voluptate irure. Cupidatat nisi mollit id adipisicing officia cillum ut Lorem veniam aute qui.\r\n"
  },
  {
    "id": "5cafa9de4cd0c855af8e330c",
    "name": "Berry Camacho",
    "email": "berrycamacho@gluid.com",
    "about": "Pariatur proident proident nisi proident do enim veniam nulla ad ex velit ea. Mollit proident culpa anim nostrud laborum magna aute elit aliquip. Exercitation est adipisicing et consequat incididunt aute do. Fugiat esse consectetur magna anim adipisicing tempor culpa irure incididunt. Cupidatat nostrud mollit anim dolore.\r\n"
  },
  {
    "id": "5cafa9deb823de002387a15e",
    "name": "Burke Flowers",
    "email": "burkeflowers@gluid.com",
    "about": "Sunt nostrud ea non veniam elit eiusmod. Ut nisi incididunt nisi est sit consectetur id commodo elit aute. Reprehenderit sit id excepteur in sunt exercitation quis. Amet magna incididunt magna id. Officia est quis consequat quis culpa deserunt ex quis nulla id laborum.\r\n"
  },
  {
    "id": "5cafa9de5cc364a2d53d8f1b",
    "name": "Lela Reed",
    "email": "lelareed@gluid.com",
    "about": "Aliquip cupidatat aute deserunt eiusmod proident et minim amet ut nisi do ex proident excepteur. Est ea sunt minim proident quis veniam cupidatat nisi. Laborum occaecat non amet nisi id consectetur duis ad elit ea elit. Nostrud occaecat ipsum dolore pariatur esse laborum.\r\n"
  },
  {
    "id": "5cafa9deb60aa42d46ab4954",
    "name": "Stevens Vincent",
    "email": "stevensvincent@gluid.com",
    "about": "Fugiat pariatur est sint est do dolor amet reprehenderit id labore. Qui ut occaecat cillum consectetur eu consequat minim aute esse fugiat nulla enim reprehenderit. Ex anim dolor duis irure do.\r\n"
  },
  {
    "id": "5cafa9de6ad9cbd94a53dea4",
    "name": "Hoffman Dunn",
    "email": "hoffmandunn@gluid.com",
    "about": "Sunt laborum culpa sit sunt et velit nisi deserunt commodo Lorem sint qui consectetur culpa. Velit veniam aliqua dolor nulla. Veniam et ullamco labore labore voluptate ipsum commodo proident quis exercitation est exercitation ea ut. Nulla do consequat deserunt irure. Irure ut nostrud proident id et officia nulla cupidatat adipisicing id. Incididunt tempor pariatur irure laboris irure reprehenderit culpa sit ut cillum adipisicing. Aliqua anim velit enim nulla esse.\r\n"
  },
  {
    "id": "5cafa9de4536a29810efe407",
    "name": "Vang Mcneil",
    "email": "vangmcneil@gluid.com",
    "about": "Anim laboris culpa sint proident labore occaecat adipisicing et laborum nulla. Dolor esse irure ut et enim nulla esse veniam culpa consectetur velit laboris. Quis enim mollit culpa elit sint incididunt. Sint aute reprehenderit officia eu ea pariatur proident. Et ex ullamco laborum adipisicing. Cillum exercitation veniam amet consequat fugiat nisi incididunt dolore ad duis sit non tempor eiusmod.\r\n"
  },
  {
    "id": "5cafa9dee3c2f2416c1863ac",
    "name": "Jordan Walls",
    "email": "jordanwalls@gluid.com",
    "about": "Anim veniam nisi nulla magna. Ex excepteur excepteur laborum sint ea quis et exercitation exercitation. Nulla est esse amet dolor et incididunt consectetur id ea nisi culpa excepteur.\r\n"
  },
  {
    "id": "5cafa9de41b892361194ade5",
    "name": "Garza Guerrero",
    "email": "garzaguerrero@gluid.com",
    "about": "Laboris dolore enim aute voluptate anim irure ut nulla consequat mollit irure Lorem velit. Eu incididunt non velit magna fugiat minim nisi ipsum adipisicing eiusmod proident non Lorem. Irure Lorem elit dolor elit dolor ullamco eiusmod sunt dolor nostrud.\r\n"
  },
  {
    "id": "5cafa9ded4cba09f236b685b",
    "name": "Stone Bell",
    "email": "stonebell@gluid.com",
    "about": "Reprehenderit nulla excepteur anim sit mollit fugiat minim irure enim non et. Eiusmod eu occaecat fugiat sunt irure labore veniam ipsum anim. Tempor ullamco consectetur laboris amet velit cillum ullamco aute. Cillum aliqua enim proident mollit ea anim et elit reprehenderit veniam veniam sit consectetur. Exercitation ullamco ullamco ipsum ex et tempor anim dolor sunt ipsum et pariatur. Ipsum magna labore eiusmod incididunt cupidatat nulla ullamco tempor in aliquip.\r\n"
  },
  {
    "id": "5cafa9deb0bcbb94a82ff611",
    "name": "York Carson",
    "email": "yorkcarson@gluid.com",
    "about": "Officia enim in aliqua ipsum dolor aliquip et consequat cupidatat ex nostrud. Mollit quis occaecat nulla labore. Qui do officia ad duis cupidatat nisi commodo duis nulla irure. Ex officia sit veniam sunt exercitation exercitation enim officia minim qui occaecat.\r\n"
  },
  {
    "id": "5cafa9de68b05f0c1451e6ac",
    "name": "Lynda Kim",
    "email": "lyndakim@gluid.com",
    "about": "Duis ipsum mollit officia velit cupidatat anim labore elit officia dolore velit nisi sunt. Anim laborum et do commodo occaecat anim quis excepteur cupidatat nostrud. Excepteur proident ad quis nulla laborum sunt laboris eu veniam pariatur. Commodo officia et non exercitation fugiat mollit fugiat. Voluptate amet consectetur nulla dolore magna.\r\n"
  },
  {
    "id": "5cafa9de827d4a4eeff13804",
    "name": "Cathy Holmes",
    "email": "cathyholmes@gluid.com",
    "about": "Aute tempor cupidatat aliqua non exercitation anim sit magna reprehenderit ea cupidatat. Nostrud occaecat aliquip pariatur ea. Fugiat laborum commodo consequat cillum esse est dolor amet ea voluptate ea aute voluptate tempor. Exercitation laborum Lorem elit voluptate elit duis velit incididunt velit reprehenderit.\r\n"
  },
  {
    "id": "5cafa9de2b8553ad05900f58",
    "name": "Bettie Nunez",
    "email": "bettienunez@gluid.com",
    "about": "Velit non in nostrud commodo adipisicing. Pariatur enim sint aliquip enim irure est id adipisicing non esse qui. Sunt ea adipisicing sint veniam labore. Aute minim adipisicing ut officia. Ut ullamco do ex in proident quis mollit. Sit dolore tempor sit mollit deserunt et aliquip elit minim sit commodo ullamco reprehenderit et. Officia sunt sit consequat dolor cillum labore laborum laboris id enim duis ex excepteur.\r\n"
  },
  {
    "id": "5cafa9deb8686be9cac5f5ba",
    "name": "Nelson Mann",
    "email": "nelsonmann@gluid.com",
    "about": "Adipisicing officia amet commodo dolor non eu aliqua commodo. Sunt aute consectetur ullamco mollit consequat aute sit proident. Ad reprehenderit laborum exercitation nulla eiusmod. Proident veniam aliqua deserunt ea veniam voluptate do non duis magna mollit amet pariatur deserunt. Veniam aliqua est aliqua duis amet nostrud veniam reprehenderit. Sint veniam dolor dolor sint culpa anim anim aliqua qui ipsum. Dolor aute elit occaecat voluptate veniam velit duis labore proident.\r\n"
  },
  {
    "id": "5cafa9de421f90137a866076",
    "name": "Mable Webb",
    "email": "mablewebb@gluid.com",
    "about": "Cupidatat qui minim qui laboris dolore quis sunt sunt aliqua. Ipsum do magna irure nisi veniam adipisicing commodo est officia ut. Amet cillum id esse incididunt qui aute ea aliqua excepteur do sit nostrud cupidatat. Sunt dolor consectetur nulla est incididunt enim est Lorem et.\r\n"
  },
  {
    "id": "5cafa9de0d7e817c9729d167",
    "name": "Alejandra Wright",
    "email": "alejandrawright@gluid.com",
    "about": "Aute officia ex deserunt magna magna do ullamco ullamco ex. In commodo magna adipisicing Lorem laborum qui sunt non aliqua nisi. Laborum non nisi aliquip tempor fugiat cupidatat esse ad est. Proident adipisicing dolor amet ad sint nulla voluptate. Officia consectetur quis ea qui aliquip.\r\n"
  },
  {
    "id": "5cafa9dee862a8cc77878839",
    "name": "Darcy Marks",
    "email": "darcymarks@gluid.com",
    "about": "Ipsum deserunt labore et fugiat. Aliqua ut fugiat exercitation velit ad reprehenderit do irure ex. Sunt ipsum aliquip qui nisi ut sit nisi nulla voluptate.\r\n"
  },
  {
    "id": "5cafa9debadf16dc21f0845a",
    "name": "Velez Faulkner",
    "email": "velezfaulkner@gluid.com",
    "about": "Proident culpa laboris proident cillum ipsum. Esse duis cupidatat dolor ex enim veniam deserunt consectetur. Amet irure anim ea proident proident sint consequat velit nulla qui ipsum adipisicing officia aliquip.\r\n"
  },
  {
    "id": "5cafa9de0ceaa88fd09486d4",
    "name": "Ora Herrera",
    "email": "oraherrera@gluid.com",
    "about": "Sit deserunt labore fugiat adipisicing do. Eiusmod id qui incididunt labore commodo sint. Aliquip adipisicing proident sint sint aliqua labore ullamco magna et cillum enim non labore pariatur.\r\n"
  },
  {
    "id": "5cafa9de02f26f79c959d84a",
    "name": "Newton Huff",
    "email": "newtonhuff@gluid.com",
    "about": "Laborum ullamco amet laborum aliqua ullamco amet culpa pariatur in enim adipisicing tempor exercitation. Eiusmod aliqua sit cillum qui consectetur culpa proident dolore sunt. Consectetur qui reprehenderit elit reprehenderit. Occaecat exercitation amet nulla et sit labore magna ea.\r\n"
  },
  {
    "id": "5cafa9de8dd8703c81c5f672",
    "name": "Lacey Lawrence",
    "email": "laceylawrence@gluid.com",
    "about": "Do commodo veniam et irure irure veniam cillum sint dolor aute consequat ullamco occaecat. Tempor esse minim officia deserunt incididunt deserunt sint. Proident consequat cillum do labore cillum in non mollit duis commodo ex.\r\n"
  },
  {
    "id": "5cafa9deee34d8f16beef5c2",
    "name": "Elise Dickerson",
    "email": "elisedickerson@gluid.com",
    "about": "Labore ipsum reprehenderit magna aliqua cupidatat eu ipsum exercitation pariatur labore eu proident dolor esse. Cillum aliqua laboris do sint culpa aute cupidatat consequat nostrud fugiat occaecat sint dolore pariatur. Nostrud occaecat ullamco occaecat duis minim non sunt.\r\n"
  },
  {
    "id": "5cafa9def9edf3a2bf0e8a21",
    "name": "Crystal Hicks",
    "email": "crystalhicks@gluid.com",
    "about": "Id labore ea commodo veniam sunt minim reprehenderit. Ut occaecat magna eu non consequat quis incididunt magna occaecat dolore. Reprehenderit nulla quis velit labore irure cillum. Veniam laboris eiusmod et in mollit deserunt dolore consequat nostrud minim. Do nostrud laboris reprehenderit eiusmod in culpa ullamco cupidatat sunt aliqua elit Lorem anim cupidatat.\r\n"
  },
  {
    "id": "5cafa9de95f8ad423ae501a3",
    "name": "Rivas Allison",
    "email": "rivasallison@gluid.com",
    "about": "Quis magna deserunt aute nulla mollit tempor nostrud laborum. Magna proident id consectetur deserunt non et veniam irure esse consectetur cillum esse anim. Mollit mollit officia irure culpa adipisicing exercitation commodo anim et sit aliquip commodo ullamco aute. Do laboris nulla duis exercitation est aliqua adipisicing consectetur. Adipisicing quis incididunt qui occaecat ex aliquip aute aute. Amet Lorem quis labore aute cillum dolor proident cupidatat adipisicing. Occaecat laborum eu ullamco consectetur nisi consequat nisi ut nulla id sint incididunt aliquip velit.\r\n"
  },
  {
    "id": "5cafa9de4a1a321637a951ab",
    "name": "Lucille Slater",
    "email": "lucilleslater@gluid.com",
    "about": "Labore dolor ea irure labore duis culpa consequat occaecat duis sit eu dolore elit veniam. Mollit cillum dolore magna dolor tempor reprehenderit id ex. Minim non enim veniam tempor mollit Lorem sunt dolor irure reprehenderit mollit occaecat. Nostrud Lorem deserunt ut voluptate nulla nostrud ut excepteur. Deserunt cupidatat exercitation sunt esse pariatur commodo laboris nostrud et eiusmod ipsum consectetur aliqua excepteur.\r\n"
  },
  {
    "id": "5cafa9de5bc5b4e3ac781898",
    "name": "Brady Wilcox",
    "email": "bradywilcox@gluid.com",
    "about": "Nulla excepteur officia nulla consequat officia officia incididunt eu nisi. Eu reprehenderit dolor officia excepteur esse esse laboris officia ea. Excepteur ullamco eiusmod sit laboris incididunt enim proident ex laborum.\r\n"
  },
  {
    "id": "5cafa9deb05564d4e14112da",
    "name": "Patrica Finch",
    "email": "patricafinch@gluid.com",
    "about": "Irure labore eu exercitation veniam mollit esse. Ex adipisicing tempor id adipisicing. Magna non dolor fugiat dolore laboris. Ea dolor eu labore adipisicing Lorem veniam officia dolor ad eiusmod veniam ad. Voluptate qui sunt id sint. Dolore nulla laborum non deserunt officia elit ut.\r\n"
  },
  {
    "id": "5cafa9de54ea6c176c0031c5",
    "name": "Underwood Beard",
    "email": "underwoodbeard@gluid.com",
    "about": "Consequat do laborum ut reprehenderit cupidatat velit anim eu ut est. Ad anim esse amet cupidatat culpa. Amet exercitation amet magna fugiat proident excepteur ea velit incididunt cupidatat.\r\n"
  },
  {
    "id": "5cafa9de5bb8601e3d13e1a9",
    "name": "Calderon Christian",
    "email": "calderonchristian@gluid.com",
    "about": "Labore Lorem commodo deserunt ex ullamco proident ullamco laborum. Ad consectetur do duis quis quis dolore in. Ipsum proident id duis esse magna officia aute. Deserunt ullamco culpa dolor ad ullamco.\r\n"
  },
  {
    "id": "5cafa9de06870ba04dd9d8a3",
    "name": "Gabriela Craig",
    "email": "gabrielacraig@gluid.com",
    "about": "Est qui irure tempor reprehenderit laboris fugiat pariatur minim consequat aliquip Lorem. In cillum anim reprehenderit deserunt aliqua. Eiusmod in veniam est quis ipsum pariatur nisi anim pariatur anim id fugiat deserunt cillum. Non ut eiusmod dolore esse consequat aliqua laboris id quis.\r\n"
  }
];
const totalItemCount = itemArray.length;
let nameSearch;

// Launches
window.onload = function() {
  nameSearch = document.getElementById('searchCriteria');
  nameSearch.oninput = filterDisplayed;
  createComponents('mainContent', itemArray);
}
// Filter Function
function filterDisplayed() {
  // Select Document object of the main content
  let doc = document.getElementById('mainContent');
  const search = nameSearch.value.toUpperCase();
  // If no text in search box, return default items
  if (search === ''){
    doc.innerHTML = '';
    createComponents('mainContent', itemArray);
  } else {
    // Filter Array
    const validSearches = itemArray.filter(item=> item.name.toUpperCase().includes(search));
  
    // If atleast one valid search
    if (validSearches.length !== 0 && validSearches.length !== totalItemCount) {
      doc.innerHTML = '';
      createComponents('mainContent', validSearches);
    } else {
      // If nothing is found to match, display message
      doc.innerHTML = 'No Results to display';  
      }
    }
  }
