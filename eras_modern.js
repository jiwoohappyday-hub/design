// ════════════════════════════════════════════════════════════════
// eras_modern.js — 현대 디자인사 (8~11시대)
// 서양·동양이 인터넷으로 합류하는 글로벌 디자인 시대
// ════════════════════════════════════════════════════════════════

const ERAS_MODERN = [

  // ─────────────────────────────────────────────
  // 08. 디지털 초기 시대
  // ─────────────────────────────────────────────
  {
    num:"08", name:"디지털 초기 시대", period:"1990s ~ 2007",
    color:"#6e7ec8",
    bg:["인터넷 보급·WWW·데스크톱 GUI","닷컴 붐·IT 산업 폭발","스큐어모피즘 — 현실 사물을 화면에 모방"],
    next:"아이폰 출시(2007) → 터치 인터페이스 혁명 → 모바일 퍼스트 시대",
    movements:[
      {
        name:"스큐어모피즘", color:"#6e7ec8", art:false,
        person:"수잔 케어 (맥 아이콘 원형) · 스콧 포스탈 (iOS 총괄)",
        work:"Mac OS X Aqua · iOS 초기 가죽·나무·종이 질감 UI",
        brand:"애플 (Mac OS X ~ iOS 6)",
        modern:"물리적 메타포로 디지털 학습 비용을 낮춘 UX 원형 — 반동으로 플랫 디자인 탄생",
        links:{
          wiki:"https://en.wikipedia.org/wiki/Skeuomorph",
          googleArt:"https://artsandculture.google.com/search?q=mac+os+x+aqua",
          youtube:"https://www.youtube.com/results?search_query=skeuomorphism+design+history"
        },
        imgs:[
          {label:"Mac OS X Aqua 인터페이스",q:"mac os x aqua interface 2001 apple"},
          {label:"iOS 초기 스큐어모피즘",q:"ios 6 skeuomorphism leather notes app"}
        ],
        trends:[
          {name:"현실 질감 모방",techs:["가죽·나무·금속 텍스처 렌더링","그림자·반사광 레이어","픽셀 퍼펙트 아이콘"]},
          {name:"물리적 메타포 UI",techs:["페이지 넘김 애니메이션","실밥·스티치 디테일","베젤·그립감 UI"]},
        ]
      },
      {
        name:"웹 1.0 · 플래시 시대", color:"#6e7ec8", art:false,
        person:"팀 버너스 리 (WWW 창시) · 조나단 게이 (Flash 개발)",
        work:"야후! 초기 사이트 · GeoCities · 플래시 인터랙티브 광고",
        brand:"야후! · AOL · Adobe Flash · GeoCities",
        modern:"비선형 인터랙션·마이크로 애니메이션의 원형 / Flash → HTML5로 계승",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/어도비_플래시",
          googleArt:"https://artsandculture.google.com/search?q=early+web+design+1990s",
          youtube:"https://www.youtube.com/results?search_query=web+1.0+geocities+flash+history"
        },
        imgs:[
          {label:"GeoCities 초기 웹",q:"geocities 1990s web design pixel art"},
          {label:"Adobe Flash 인터랙티브",q:"adobe flash website 2000s interactive"}
        ],
        trends:[
          {name:"화려한 웹 표현",techs:["GIF 애니메이션","테이블 레이아웃","배경 타일 패턴"]},
          {name:"인터랙티브 모션",techs:["Flash ActionScript","벡터 애니메이션","트위닝"]},
        ]
      },
      {
        name:"초기 브랜드 디지털화", color:"#6e7ec8", art:false,
        person:"폴 랜드 (IBM·UPS 레거시) · 마이클 비어럿",
        work:"초기 기업 웹사이트 · 온라인 배너 광고 · 이메일 뉴스레터",
        brand:"IBM · 코카콜라 · 나이키 초기 웹사이트",
        modern:"디지털 브랜드 가이드라인 · 웹 타이포그래피 표준화의 시작",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/브랜드_아이덴티티",
          googleArt:"https://artsandculture.google.com/search?q=corporate+identity+digital+1990s",
          youtube:"https://www.youtube.com/results?search_query=brand+identity+digital+1990s"
        },
        imgs:[
          {label:"IBM 초기 웹사이트",q:"ibm website 1990s early internet design"},
          {label:"초기 웹 배너 광고",q:"early web banner ad 1990s internet"}
        ],
        trends:[
          {name:"오프라인→온라인 CI 이식",techs:["72dpi 웹 최적화","웹세이프 컬러 216색","PNG 투명도"]},
          {name:"초기 웹 타이포그래피",techs:["웹세이프 폰트(Arial·Georgia)","픽셀 폰트","비트맵 서체"]},
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  // 09. 모바일 플랫폼 시대
  // ─────────────────────────────────────────────
  {
    num:"09", name:"모바일 플랫폼 시대", period:"2007 ~ 2015",
    color:"#6ec8a9",
    bg:["아이폰·안드로이드 터치 혁명","앱 경제·플랫폼 생태계 확립","플랫 디자인 대전환 — 스큐어모피즘 탈피"],
    next:"SNS 피드 시대 → 알고리즘 큐레이션 → 주목 경제 디자인",
    movements:[
      {
        name:"플랫 디자인", color:"#6ec8a9", art:false,
        person:"조나단 아이브 (iOS 7 총괄) · 마이크로소프트 Metro 팀",
        work:"iOS 7 · Windows 8 Metro UI · Google Material Design 초기",
        brand:"애플 (iOS 7~) · 마이크로소프트 (Windows 8)",
        modern:"현재 모든 앱 UI의 기본 언어 — 그림자 없는 아이콘·흰 배경·선명한 색상",
        links:{
          wiki:"https://en.wikipedia.org/wiki/Flat_design",
          googleArt:"https://artsandculture.google.com/search?q=flat+design+ios7",
          youtube:"https://www.youtube.com/results?search_query=flat+design+history+ios7"
        },
        imgs:[
          {label:"iOS 7 플랫 디자인",q:"ios 7 flat design apple 2013"},
          {label:"Windows 8 Metro UI",q:"windows 8 metro ui flat design"}
        ],
        trends:[
          {name:"극단적 단순화",techs:["그림자·그라데이션 제거","단색 아이콘","여백 극대화"]},
          {name:"타이포그래피 중심",techs:["산세리프 확산(SF·Roboto)","대형 헤드라인","계층적 텍스트"]},
        ]
      },
      {
        name:"머티리얼 디자인", color:"#6ec8a9", art:false,
        person:"마티아스 두아르테 (Google 디자인 VP)",
        work:"Google Material Design 1.0 · Android Lollipop",
        brand:"Google · Android",
        modern:"전 세계 앱 디자인 표준 — 그림자·깊이감·애니메이션 물리 법칙",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/머티리얼_디자인",
          googleArt:"https://artsandculture.google.com/search?q=material+design+google",
          youtube:"https://www.youtube.com/results?search_query=material+design+google+history"
        },
        imgs:[
          {label:"Google Material Design",q:"google material design 2014 android"},
          {label:"머티리얼 컴포넌트",q:"material design components cards buttons"}
        ],
        trends:[
          {name:"물리 기반 UI",techs:["고도(Elevation) 그림자 체계","리플 애니메이션","모션 커브"]},
          {name:"컴포넌트 시스템화",techs:["버튼·카드·다이얼로그 표준화","12컬럼 그리드","8dp 유닛"]},
        ]
      },
      {
        name:"반응형 웹 디자인", color:"#6ec8a9", art:false,
        person:"이단 마르코트 (반응형 개념 정립)",
        work:"보스턴 글로브 반응형 사이트 · Bootstrap 프레임워크",
        brand:"Twitter Bootstrap · Foundation",
        modern:"모든 웹사이트의 기본 — 화면 크기에 자동 적응하는 레이아웃",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/반응형_웹_디자인",
          googleArt:"https://artsandculture.google.com/search?q=responsive+web+design",
          youtube:"https://www.youtube.com/results?search_query=responsive+web+design+history"
        },
        imgs:[
          {label:"반응형 웹 레이아웃",q:"responsive web design mobile tablet desktop"},
          {label:"Bootstrap 그리드",q:"bootstrap grid system responsive layout"}
        ],
        trends:[
          {name:"유동적 그리드",techs:["CSS 미디어 쿼리","플렉스박스","퍼센트 기반 너비"]},
          {name:"모바일 퍼스트",techs:["터치 타깃 최소 44px","스택형 레이아웃","뷰포트 메타태그"]},
        ]
      },
      {
        name:"K-디자인 태동 · 카카오·라인", color:"#6ec8a9", art:false,
        person:"",
        work:"카카오톡 UI · 라인 이모티콘 · 네이버 앱 초기",
        brand:"카카오 · 라인 · 네이버",
        modern:"아시아 감성 UX의 독자 노선 — 이모티콘 문화·정보 밀도 높은 UI",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/카카오톡",
          googleArt:"https://artsandculture.google.com/search?q=kakao+design+korea",
          youtube:"https://www.youtube.com/results?search_query=카카오톡+UI+디자인+역사"
        },
        imgs:[
          {label:"카카오톡 초기 UI",q:"kakaotalk early interface 2010 korea app"},
          {label:"라인 이모티콘",q:"line app emoticon character design sticker"}
        ],
        trends:[
          {name:"정보 밀도 높은 아시아 UI",techs:["탭바 강조","알림 배지 강조","리스트 중심 레이아웃"]},
          {name:"캐릭터 기반 감성",techs:["이모티콘 스티커 문화","IP 캐릭터 브랜딩","선물하기 패키지"]},
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  // 10. SNS · 알고리즘 시대
  // ─────────────────────────────────────────────
  {
    num:"10", name:"SNS · 알고리즘 시대", period:"2015 ~ 2022",
    color:"#c8a96e",
    bg:["인스타그램·틱톡·유튜브 시각 문화 폭발","알고리즘 큐레이션 · 주목 경제(Attention Economy)","다크모드·글래스모피즘·트렌드 사이클 가속"],
    next:"ChatGPT 등장(2022) → AI 생성 도구 대중화 → 디자이너 역할 재정의",
    movements:[
      {
        name:"글래스모피즘", color:"#c8a96e", art:false,
        person:"",
        work:"macOS Big Sur · iOS 14 위젯 · Windows 11 Fluent Design",
        brand:"애플 (macOS Big Sur) · 마이크로소프트 (Windows 11)",
        modern:"투명 블러 레이어 — 깊이감·층위감을 광학적으로 표현하는 현재 UI 트렌드",
        links:{
          wiki:"https://en.wikipedia.org/wiki/Glassmorphism",
          googleArt:"https://artsandculture.google.com/search?q=glassmorphism+ui+design",
          youtube:"https://www.youtube.com/results?search_query=glassmorphism+design+trend"
        },
        imgs:[
          {label:"macOS Big Sur 글래스모피즘",q:"macos big sur glassmorphism blur translucent"},
          {label:"Windows 11 Fluent Design",q:"windows 11 fluent design glassmorphism acrylic"}
        ],
        trends:[
          {name:"투명·블러 레이어",techs:["backdrop-filter blur","반투명 배경색","배경 블러 효과"]},
          {name:"부드러운 그라데이션",techs:["다층 색상 그라데이션","뉴모피즘 경계","라이트 보더"]},
        ]
      },
      {
        name:"다크모드 미학", color:"#c8a96e", art:false,
        person:"",
        work:"iOS 13 다크모드 · macOS Mojave · 구글 다크 테마",
        brand:"애플 · 구글 · 트위터 · 유튜브",
        modern:"야간 사용·배터리 절약 → 심미적 선택으로 진화 — 브랜드 감성 다양화",
        links:{
          wiki:"https://en.wikipedia.org/wiki/Light-on-dark_color_scheme",
          googleArt:"https://artsandculture.google.com/search?q=dark+mode+ui+design",
          youtube:"https://www.youtube.com/results?search_query=dark+mode+design+history"
        },
        imgs:[
          {label:"iOS 다크모드",q:"ios 13 dark mode apple interface"},
          {label:"다크 UI 디자인 시스템",q:"dark mode design system ui components"}
        ],
        trends:[
          {name:"다크 컬러 시스템",techs:["#000·#121212 배경 표준","컬러 팔레트 이중화","OLED 최적화"]},
          {name:"대비 기반 타이포",techs:["고대비 흰 텍스트","컬러 강조 포인트","그레이스케일 계층"]},
        ]
      },
      {
        name:"디자인 시스템 시대", color:"#c8a96e", art:false,
        person:"",
        work:"Figma 컴포넌트 · Airbnb DLS · IBM Carbon · Shopify Polaris",
        brand:"Figma · Airbnb · IBM · Shopify",
        modern:"디자이너+개발자 공통 언어 — 컴포넌트 기반 일관성의 시대",
        links:{
          wiki:"https://en.wikipedia.org/wiki/Design_system",
          googleArt:"https://artsandculture.google.com/search?q=design+system+figma",
          youtube:"https://www.youtube.com/results?search_query=design+system+history+figma"
        },
        imgs:[
          {label:"Figma 컴포넌트 시스템",q:"figma design system components tokens 2022"},
          {label:"Airbnb 디자인 시스템",q:"airbnb design language system dls"}
        ],
        trends:[
          {name:"토큰 기반 설계",techs:["디자인 토큰(색·여백·타이포)","시맨틱 변수","멀티 테마"]},
          {name:"컴포넌트 원자 설계",techs:["아토믹 디자인","자동 레이아웃","변형 프로퍼티"]},
        ]
      },
      {
        name:"K-콘텐츠 · 한류 비주얼", color:"#c8a96e", art:false,
        person:"",
        work:"BTS · BLACKPINK 앨범 아트 · 넷플릭스 오리지널 한국 포스터",
        brand:"HYBE · YG · SM · 넷플릭스 코리아",
        modern:"K-팝·K-드라마 비주얼이 글로벌 그래픽 디자인 트렌드에 영향",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/한류",
          googleArt:"https://artsandculture.google.com/search?q=k-pop+visual+design",
          youtube:"https://www.youtube.com/results?search_query=kpop+album+art+design+history"
        },
        imgs:[
          {label:"BTS 앨범 아트",q:"bts album art design visual identity kpop"},
          {label:"K-드라마 넷플릭스 포스터",q:"netflix korea drama poster design squid game"}
        ],
        trends:[
          {name:"감각적 색상·레이어 구성",techs:["네온+파스텔 혼용","멀티 레이어 합성","3D 오브젝트 혼합"]},
          {name:"아이돌 비주얼 시스템",techs:["세계관 기반 아트 디렉션","포토카드 UI","AR 필터 연동"]},
        ]
      },
      {
        name:"일본 Lo-Fi · 뉴 레트로", color:"#c8a96e", art:false,
        person:"",
        work:"Lo-Fi Hip Hop 유튜브 썸네일 · シティポップ(시티팝) 리바이벌",
        brand:"Lofi Girl 채널 · Vaporwave 미학",
        modern:"디지털 피로감 반작용 — 아날로그 따뜻함을 디지털로 재현하는 뉴트로",
        links:{
          wiki:"https://en.wikipedia.org/wiki/Lofi_hip_hop",
          googleArt:"https://artsandculture.google.com/search?q=vaporwave+aesthetic",
          youtube:"https://www.youtube.com/results?search_query=lofi+aesthetic+design+vaporwave"
        },
        imgs:[
          {label:"Lo-Fi Girl 유튜브",q:"lofi girl youtube study music aesthetic anime"},
          {label:"Vaporwave 비주얼",q:"vaporwave aesthetic retro japan city pop neon"}
        ],
        trends:[
          {name:"아날로그 텍스처 디지털 재현",techs:["노이즈 그레인 필터","CRT 스캔라인","VHS 왜곡"]},
          {name:"1980s 일본 시티팝 미학",techs:["파스텔+네온 배색","기하학 도형 레이어","렌즈 플레어"]},
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  // 11. AI · 공간 컴퓨팅 시대
  // ─────────────────────────────────────────────
  {
    num:"11", name:"AI · 공간 컴퓨팅 시대", period:"2022 ~ 현재",
    color:"#c86e8a",
    bg:["ChatGPT·Midjourney·Stable Diffusion 대중화","Apple Vision Pro · AR/VR 공간 인터페이스","생성형 AI로 디자이너 역할 재정의"],
    next:"아직 진행 중 — 프롬프트 디자인·공간 UI·생성형 브랜딩이 새 표준으로",
    movements:[
      {
        name:"생성형 AI 비주얼", color:"#c86e8a", art:false,
        person:"",
        work:"Midjourney · DALL-E 3 · Stable Diffusion · Adobe Firefly",
        brand:"Midjourney · OpenAI · Adobe · Canva",
        modern:"누구나 고품질 비주얼 생성 — 디자이너의 역할이 큐레이터·프롬프터로 확장",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/미드저니",
          googleArt:"https://artsandculture.google.com/search?q=ai+generated+art+midjourney",
          youtube:"https://www.youtube.com/results?search_query=midjourney+ai+design+history"
        },
        imgs:[
          {label:"Midjourney AI 생성 이미지",q:"midjourney ai generated artwork 2023"},
          {label:"Adobe Firefly 생성형",q:"adobe firefly generative ai design 2023"}
        ],
        trends:[
          {name:"프롬프트 기반 제작",techs:["텍스트→이미지 생성","인페인팅·아웃페인팅","스타일 트랜스퍼"]},
          {name:"AI 협업 워크플로",techs:["Adobe Firefly 통합","Figma AI 플러그인","ControlNet 구조 제어"]},
        ]
      },
      {
        name:"스페이셜 UI · 공간 컴퓨팅", color:"#c86e8a", art:false,
        person:"",
        work:"Apple Vision Pro visionOS · Meta Quest UI",
        brand:"Apple (visionOS) · Meta",
        modern:"2D 화면의 종말 예고 — 3D 공간 속 부유하는 투명 패널 인터페이스",
        links:{
          wiki:"https://en.wikipedia.org/wiki/VisionOS",
          googleArt:"https://artsandculture.google.com/search?q=apple+vision+pro+spatial",
          youtube:"https://www.youtube.com/results?search_query=apple+vision+pro+visionos+design"
        },
        imgs:[
          {label:"Apple Vision Pro visionOS",q:"apple vision pro visionos spatial interface 2024"},
          {label:"공간 컴퓨팅 UI",q:"spatial computing ui 3d floating panels ar vr"}
        ],
        trends:[
          {name:"3D 부유 패널",techs:["글래스모피즘 극한","아이 트래킹 인터랙션","깊이(depth) 레이어링"]},
          {name:"공간 타이포그래피",techs:["3D 텍스트 배치","환경 적응형 대비","시선 기반 포커스"]},
        ]
      },
      {
        name:"네오브루탈리즘", color:"#c86e8a", art:false,
        person:"",
        work:"Gumroad · Linear · Figma 뉴 홈페이지 스타일",
        brand:"Gumroad · Linear",
        modern:"과잉 세련미에 대한 반동 — 두꺼운 테두리·원색·노이즈가 2020s 웹 트렌드로",
        links:{
          wiki:"https://en.wikipedia.org/wiki/Brutalist_architecture",
          googleArt:"https://artsandculture.google.com/search?q=neo+brutalism+web+design",
          youtube:"https://www.youtube.com/results?search_query=neo+brutalism+web+design+trend"
        },
        imgs:[
          {label:"네오브루탈리즘 웹",q:"neo brutalism web design bold border 2023"},
          {label:"Gumroad 브루탈리즘",q:"gumroad website brutalist design ui"}
        ],
        trends:[
          {name:"반(反)세련 미학",techs:["두꺼운 검정 테두리","원색 배경","오프셋 그림자"]},
          {name:"텍스트 중심 레이아웃",techs:["모노스페이스 폰트","불규칙 그리드","노이즈 텍스처"]},
        ]
      },
      {
        name:"K-디자인 글로벌화", color:"#c86e8a", art:false,
        person:"",
        work:"삼성 갤럭시 One UI · 토스(Toss) UIUX · 카카오 디자인 시스템",
        brand:"삼성 · 카카오 · 토스(Viva Republica) · 네이버",
        modern:"아시아 UX 감성이 글로벌 표준에 영향 — 정보 밀도·이모티콘 문화 수출",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/삼성_One_UI",
          googleArt:"https://artsandculture.google.com/search?q=samsung+one+ui+design",
          youtube:"https://www.youtube.com/results?search_query=toss+ux+design+korea"
        },
        imgs:[
          {label:"삼성 One UI 디자인",q:"samsung one ui design system 2023"},
          {label:"토스 앱 UX",q:"toss app korea fintech ux design minimal"}
        ],
        trends:[
          {name:"한국형 슈퍼앱 UX",techs:["탭 내비게이션 극대화","바텀시트 레이어","인앱 결제 UI"]},
          {name:"감성 금융 디자인",techs:["데이터 시각화 애니메이션","친근한 캐릭터 온보딩","마이크로카피"]},
        ]
      },
      {
        name:"일본 미니멀 디지털", color:"#c86e8a", art:false,
        person:"",
        work:"무인양품 앱 · 메루카리(Mercari) UX · 유니클로 디지털",
        brand:"무인양품(MUJI) · 메루카리 · 유니클로",
        modern:"와비사비·백자 철학이 디지털 인터페이스로 — 여백·절제·기능의 계보",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/무인양품",
          googleArt:"https://artsandculture.google.com/search?q=muji+digital+design+app",
          youtube:"https://www.youtube.com/results?search_query=muji+app+design+minimal+japan"
        },
        imgs:[
          {label:"무인양품 앱 UI",q:"muji app ui minimal design japan 2023"},
          {label:"메루카리 UX 디자인",q:"mercari app ux design japan minimal clean"}
        ],
        trends:[
          {name:"디지털 여백 미학",techs:["극단적 여백","모노크롬 팔레트","그리드 없는 자유 배치"]},
          {name:"기능 중심 인터랙션",techs:["제스처 기반 탐색","상태 전환 최소화","0 장식 원칙"]},
        ]
      },
    ]
  },

];

// 현대 트랙 DOM 빌드
(function() {
  const gridModern = document.getElementById('gridModern');
  if (gridModern && typeof buildEraSection === 'function') {
    ERAS_MODERN.forEach(era => gridModern.appendChild(buildEraSection(era)));
  }
})();
