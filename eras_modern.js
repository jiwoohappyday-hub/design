// ════════════════════════════════════════════════════════════════
// eras_modern.js — 현대 디자인사 완전판 (2026년 5월 기준)
// 새 필드: period(분기), why(발생 배경), regions(지역별 트렌드)
// ════════════════════════════════════════════════════════════════

const ERAS_MODERN = [

  // ─────────────────────────────────────────────
  // 08. 디지털 초기 시대 1990s~2007
  // ─────────────────────────────────────────────
  {
    num:"08", name:"디지털 초기 시대", period:"1990s ~ 2007",
    color:"#6e7ec8",
    bg:["인터넷 보급·WWW·데스크톱 GUI 완성","닷컴 붐·IT 산업 폭발","스큐어모피즘 — 현실 사물을 화면에 모방"],
    next:"아이폰 출시(2007) → 터치 인터페이스 혁명 → 플랫 디자인 대전환",
    movements:[
      {
        name:"디지털 모더니즘", color:"#6e7ec8", art:false,
        person:"팀 버너스 리 (WWW) · 수잔 케어 (맥 아이콘)",
        work:"World Wide Web · 초기 Mac OS GUI · Netscape 브라우저",
        brand:"Apple · Microsoft · Netscape",
        modern:"모든 현대 GUI의 원형 — 창·아이콘·메뉴 패러다임",
        period:"1991 Q1 ~ 2001 Q4",
        why:"물리 세계의 사무환경(파일·폴더·쓰레기통)을 화면으로 옮겨야 했기 때문. 새 매체를 낯설지 않게 만드는 게 최우선 과제였음.",
        links:{wiki:"https://ko.wikipedia.org/wiki/그래픽_사용자_인터페이스",googleArt:"https://artsandculture.google.com/search?q=gui+history+apple+mac",youtube:"https://www.youtube.com/results?search_query=gui+history+design+mac+windows"},
        imgs:[{label:"초기 Mac OS GUI",q:"macintosh gui 1984 desktop icons"},{label:"Netscape 브라우저",q:"netscape navigator browser 1990s interface"}],
        trends:[
          {name:"픽셀 미학",techs:["픽셀 아트","도트 그래픽","비트맵 폰트","GIF 애니메이션"]},
          {name:"인터페이스 실재감",techs:["베벨·엠보싱","메탈릭 UI","웹 안전 색상 216색"]},
          {name:"정보 밀집 레이아웃",techs:["테이블 레이아웃","마키 텍스트","배경 타일 패턴"]},
        ],
        regions:{
          global:[
            {name:"픽셀 아트 아이콘 언어",period:"1990 Q1 ~ 2000 Q4",why:"저해상도 화면(72~96dpi)에서 의미를 전달할 수 있는 유일한 방법이었음",techs:["픽셀 단위 드로잉","인덱스 컬러","스프라이트 시트"],brand:"Apple · Windows 3.1"},
          ],
          korea:[
            {name:"PC통신 텍스트 아트",period:"1994 Q1 ~ 2002 Q4",why:"하이텔·천리안 등 PC통신이 그래픽보다 텍스트 중심 — 아스키 아트 문화 발달",techs:["아스키 아트","특수문자 조합","색상 코드"],brand:"하이텔 · 천리안 · 나우누리"},
            {name:"국내 포털 초기 CI",period:"1999 Q1 ~ 2005 Q4",why:"야후 코리아·다음·네이버 경쟁 — 빠른 인지를 위한 원색 로고 전쟁",techs:["원색 로고","배너 광고","GIF 이미지"],brand:"다음 · 네이버 · 야후코리아"},
          ],
          japan:[
            {name:"도트 그래픽 문화 (게임)",period:"1990 Q1 ~ 2005 Q4",why:"닌텐도·세가가 픽셀 아트를 예술 수준으로 끌어올림 — 이후 인디게임 미학 원형",techs:["도트 그래픽","스프라이트 애니메이션","칩튠"],brand:"Nintendo · Sega · Capcom"},
          ],
          west:[
            {name:"닷컴 버블 비주얼",period:"1999 Q1 ~ 2001 Q2",why:"IT 기업 급증 → CI 필요 → 빠르게 만든 과도한 3D 로고·글로시 효과 남발",techs:["크롬 효과 로고","렌즈 플레어 남용","무지개 그라데이션"],brand:"Pets.com · Webvan · 수많은 닷컴 스타트업"},
          ],
        }
      },
      {
        name:"스큐어모피즘", color:"#6e7ec8", art:false,
        person:"스콧 포스탈 (iOS 총괄) · 수잔 케어 (원형)",
        work:"Mac OS X Aqua · iOS 6 가죽·나무·종이 질감 UI · 게임센터 펠트 테이블",
        brand:"Apple (Mac OS X ~ iOS 6)",
        modern:"물리적 메타포로 디지털 학습 비용 낮춘 UX 원형 — 반동으로 플랫 디자인 탄생",
        period:"2001 Q1 ~ 2013 Q3",
        why:"스마트폰·태블릿 등 새 디바이스 등장 → 비기술 사용자도 직관적으로 써야 했음. '이게 뭐에 쓰는 건지' 알려주려면 현실 사물을 그대로 모방하는 게 가장 빠른 방법이었음.",
        links:{wiki:"https://en.wikipedia.org/wiki/Skeuomorph",googleArt:"https://artsandculture.google.com/search?q=mac+os+x+aqua+interface",youtube:"https://www.youtube.com/results?search_query=skeuomorphism+design+history+apple"},
        imgs:[{label:"Mac OS X Aqua",q:"mac os x aqua interface 2001 apple"},{label:"iOS 스큐어모피즘",q:"ios 6 skeuomorphism leather game center"}],
        trends:[
          {name:"현실 질감 모방",techs:["가죽·나무·금속 텍스처 렌더링","그림자·반사광 레이어","픽셀 퍼펙트 아이콘"]},
          {name:"물리 메타포 UI",techs:["페이지 넘김 애니메이션","실밥·스티치 디테일","베젤·그립감 UI"]},
          {name:"사이버 미래주의",techs:["투명 레이어","메탈릭 UI","글로시 효과","테크노 낙관주의 색감"]},
        ],
        regions:{
          global:[
            {name:"웹 2.0 광택 (Gloss)",period:"2004 Q1 ~ 2009 Q4",why:"블로그·SNS 폭발로 누구나 UI 만들게 됨 → 쉽게 '예쁜 느낌' 내는 방법으로 글로시 버튼 유행",techs:["글로시 그라데이션 버튼","반사광 하이라이트","둥근 모서리"],brand:"Gmail 초기 · YouTube 초기 · Myspace"},
          ],
          korea:[
            {name:"싸이월드 미니홈피 미학",period:"2001 Q3 ~ 2008 Q4",why:"싸이월드 1천만 사용자 → 개인 공간 꾸미기 문화 → 도토리 이코노미 + 스큐어모피즘 아이템",techs:["미니룸 3D 가구","스킨 꾸미기","BGM 플레이어 UI"],brand:"싸이월드 · SK커뮤니케이션즈"},
          ],
          japan:[
            {name:"가라케이(フィーチャーフォン) UI",period:"2002 Q1 ~ 2010 Q4",why:"일본 피처폰이 스마트폰보다 먼저 인터넷 연결 → 작은 화면에 정보 욱여넣는 고밀도 UI 문화",techs:["고밀도 텍스트 UI","캐릭터 이모지 원형","플래시 라이트 UI"],brand:"DoCoMo i-mode · au · SoftBank"},
          ],
          west:[
            {name:"플래시 모션 웹",period:"1999 Q1 ~ 2010 Q4",why:"브로드밴드 보급 → 대용량 Flash 가능 → 인터랙티브 광고·인트로 사이트 전성기",techs:["Flash ActionScript","벡터 애니메이션","인트로 스킵 버튼"],brand:"Adobe Flash · Macromedia"},
          ],
        }
      },
    ]
  },

  // ─────────────────────────────────────────────
  // 09. 모바일 플랫폼 시대 2007~2015
  // ─────────────────────────────────────────────
  {
    num:"09", name:"모바일 플랫폼 시대", period:"2007 ~ 2015",
    color:"#6ec8a9",
    bg:["아이폰·안드로이드 터치 혁명","앱 경제·플랫폼 생태계 확립","플랫 디자인 대전환 — 스큐어모피즘 탈피"],
    next:"SNS 피드 시대 → 알고리즘 큐레이션 → 주목 경제 디자인",
    movements:[
      {
        name:"모바일 경험 디자인", color:"#6ec8a9", art:false,
        person:"조나단 아이브 (iPhone 디자인) · 앤디 허츠펠드",
        work:"iPhone 오리지널 UI · App Store · Android 초기 UI",
        brand:"Apple · Google · Samsung",
        modern:"모든 앱 UX의 기원 — 터치 제스처·햄버거 메뉴·카드 UI 전부 여기서 시작",
        period:"2007 Q2 ~ 2012 Q4",
        why:"손가락으로 조작하는 새 패러다임 → 마우스 커서 UI 전부 재설계 필요. 터치 타깃 44px 원칙, 스와이프 제스처 등 모바일 전용 UX 언어가 이 시기에 확립됨.",
        links:{wiki:"https://ko.wikipedia.org/wiki/아이폰",googleArt:"https://artsandculture.google.com/search?q=iphone+original+design+2007",youtube:"https://www.youtube.com/results?search_query=iphone+2007+original+design+history"},
        imgs:[{label:"iPhone 오리지널 (2007)",q:"iphone original 2007 ui design steve jobs"},{label:"App Store 초기",q:"app store original 2008 interface ios"}],
        trends:[
          {name:"카드 인터페이스",techs:["카드 UI","터치 제스처","햄버거 메뉴","스와이프 내비게이션"]},
          {name:"마이크로 UX",techs:["모션 피드백","애니메이션 전환","햅틱 피드백","풀-투-리프레시"]},
          {name:"콘텐츠 최소화",techs:["화이트 스페이스","단일 액션 화면","프로그레시브 디스클로저"]},
        ],
        regions:{
          global:[
            {name:"스큐어모피즘 → 플랫 전환",period:"2007 Q2 ~ 2013 Q3",why:"레티나 디스플레이(2010) 등장 → 고해상도에서 질감 표현이 오히려 촌스러워 보임. iOS 7(2013)이 공식 선언",techs:["플랫 아이콘","얇은 선 UI","흰 배경"],brand:"Apple iOS 7"},
          ],
          korea:[
            {name:"카카오톡 UI 언어 확립",period:"2010 Q1 ~ 2014 Q4",why:"카카오톡 가입자 급증 → 한국형 메신저 UI 표준 형성. 말풍선·이모티콘·선물하기가 글로벌과 다른 독자 노선",techs:["말풍선 UI","이모티콘 스티커","선물하기 UX"],brand:"카카오 · 라인"},
            {name:"라인 캐릭터 이코노미",period:"2011 Q2 ~ 2016 Q4",why:"NHN재팬이 일본에서 론칭한 라인이 캐릭터(브라운·코니) IP로 글로벌 히트 → K-캐릭터 브랜딩 원형",techs:["캐릭터 IP 시스템","스티커 팩 UI","굿즈 연계"],brand:"라인 · NHN재팬"},
          ],
          japan:[
            {name:"LINE 스티커 문화",period:"2011 Q2 ~ 현재",why:"일본 문자 문화(이모지 원조) + 모바일 결합 → 스티커가 감정 표현의 주요 수단으로 자리잡음",techs:["스티커 패키지 디자인","애니메이션 스티커","사운드 스티커"],brand:"LINE · NHN재팬"},
          ],
          west:[
            {name:"뉴모피즘 (Neumorphism)",period:"2019 Q4 ~ 2021 Q2",why:"플랫 디자인이 너무 무감각해짐 → 입체감 복원 시도. 피그마 Dribbble에서 폭발적 유행. 실제 접근성 문제로 프로덕션 적용은 제한적",techs:["이중 그림자(밝음+어두움)","배경색 동일 색조","Convex·Concave 버튼"],brand:"Dribbble 커뮤니티 · Alexander Plyuto"},
            {name:"롱 섀도우 · 플랫 2.0",period:"2013 Q1 ~ 2015 Q4",why:"플랫이 너무 밋밋함 → 최소한의 깊이감 복원 시도. 45도 그림자로 입체감을 암시",techs:["45도 롱 섀도우","단색 그림자","Elevation 개념"],brand:"Google Material Design 초기"},
          ],
        }
      },
      {
        name:"플랫 디자인 · 머티리얼 디자인", color:"#6ec8a9", art:false,
        person:"조나단 아이브 (iOS 7) · 마티아스 두아르테 (Material Design)",
        work:"iOS 7 · Windows 8 Metro · Google Material Design 1.0",
        brand:"Apple · Microsoft · Google",
        modern:"현재 모든 앱 UI의 문법 — 그림자·깊이·애니메이션 물리 법칙 도입",
        period:"2012 Q3 ~ 2016 Q4",
        why:"레티나 디스플레이 보급으로 질감 표현이 불필요해짐. 동시에 화면 크기가 다양해지며 벡터 기반 단순 형태가 필수가 됨. 스큐어모피즘은 유지보수 비용도 높았음.",
        links:{wiki:"https://ko.wikipedia.org/wiki/머티리얼_디자인",googleArt:"https://artsandculture.google.com/search?q=material+design+google+flat",youtube:"https://www.youtube.com/results?search_query=flat+design+material+design+history"},
        imgs:[{label:"iOS 7 플랫 디자인",q:"ios 7 flat design apple 2013"},{label:"Google Material Design",q:"google material design 2014 android"}],
        trends:[
          {name:"극단적 단순화",techs:["그림자·그라데이션 제거","단색 아이콘","여백 극대화","벡터 아이콘"]},
          {name:"물리 기반 모션",techs:["스프링 애니메이션","리플 효과","Elevation 그림자","모션 커브"]},
          {name:"반응형·모바일 퍼스트",techs:["CSS 미디어 쿼리","플렉스박스","터치 타깃 44px","뷰포트 메타"]},
        ],
        regions:{
          global:[
            {name:"반응형 웹 표준화",period:"2011 Q1 ~ 2015 Q4",why:"화면 크기 파편화 → 하나의 코드로 모든 화면 대응 필요. Bootstrap 등장으로 대중화",techs:["Bootstrap 그리드","CSS 미디어 쿼리","플렉스박스"],brand:"Twitter Bootstrap · Foundation"},
          ],
          korea:[
            {name:"네이버·다음 플랫 리브랜딩",period:"2013 Q1 ~ 2016 Q4",why:"글로벌 플랫 트렌드 수용 + 모바일 전환 대응. 네이버 그린 로고 단순화, 다음카카오 합병 CI 변화",techs:["단색 로고 정리","모바일 최적화 타입","컬러 시스템 단순화"],brand:"네이버 · 카카오(다음 합병)"},
          ],
          japan:[
            {name:"일본 플랫 적용 (느린 전환)",period:"2014 Q1 ~ 2018 Q4",why:"일본 UX는 정보 밀도를 중시 → 플랫을 받아들이되 정보량은 유지. 서양보다 전환 속도 느림",techs:["고밀도 플랫 UI","세밀한 선 아이콘","정보 계층 유지"],brand:"Yahoo Japan · Mercari"},
          ],
          china:[
            {name:"위챗 슈퍼앱 UI 표준",period:"2013 Q1 ~ 현재",why:"위챗이 메신저·결제·미니프로그램·뉴스를 한 앱에 통합 → 중국형 슈퍼앱 UX 패턴 확립",techs:["미니프로그램 UI","QR코드 중심","WeChat Pay UI"],brand:"WeChat · Tencent"},
          ],
          europe:[
            {name:"유럽 클린 웹 디자인",period:"2012 Q1 ~ 2016 Q4",why:"북유럽 미니멀리즘 + 플랫 결합. 독일·스칸디나비아 브랜드들이 선도",techs:["여백 극대화","중립 타이포","단색 팔레트"],brand:"Spotify 초기 · SAS 항공"},
          ],
          west:[
            {name:"Material Design 생태계",period:"2014 Q2 ~ 현재",why:"구글이 안드로이드 파편화 해결 + 디자인 시스템 개념 대중화. 개발자도 쓸 수 있는 컴포넌트 문서화",techs:["컴포넌트 라이브러리","8dp 그리드","시맨틱 컬러"],brand:"Google · Android"},
          ],
        }
      },
    ]
  },

  // ─────────────────────────────────────────────
  // 10. 알고리즘·SNS 시대 2015~2022
  // ─────────────────────────────────────────────
  {
    num:"10", name:"알고리즘 · SNS 시대", period:"2015 ~ 2022",
    color:"#c8a96e",
    bg:["인스타그램·틱톡·유튜브 시각 문화 폭발","알고리즘 큐레이션 · 주목 경제(Attention Economy)","다크모드·글래스모피즘·트렌드 사이클 초가속"],
    next:"ChatGPT 등장(2022) → AI 생성 도구 대중화 → 디자이너 역할 재정의",
    movements:[
      {
        name:"플랫폼 미학 · 브랜드 퍼포먼스 디자인", color:"#c8a96e", art:false,
        person:"",
        work:"Instagram 리브랜딩 (2016) · Airbnb 브랜드 시스템 · Spotify Brand",
        brand:"Instagram · Airbnb · Spotify · Dropbox",
        modern:"브랜드가 단일 로고에서 '살아움직이는 시스템'으로 — 모든 현대 브랜딩의 기준",
        period:"2015 Q1 ~ 2020 Q4",
        why:"SNS 피드에서 0.3초 안에 눈길을 끌어야 함 → 정적 로고로는 불가능 → 컬러·모션·캐릭터가 브랜드 자체가 되는 시대. 인스타그램 리브랜딩(2016)이 신호탄.",
        links:{wiki:"https://en.wikipedia.org/wiki/Brand_identity",googleArt:"https://artsandculture.google.com/search?q=instagram+rebranding+2016",youtube:"https://www.youtube.com/results?search_query=instagram+rebranding+2016+design"},
        imgs:[{label:"Instagram 리브랜딩 2016",q:"instagram rebranding 2016 gradient logo"},{label:"Airbnb Bélo 브랜드",q:"airbnb belo logo brand identity design"}],
        trends:[
          {name:"다이나믹 그라데이션",techs:["메시 그라데이션","오로라 그라데이션","홀로그래픽 포일 효과","Chromatic Aberration"]},
          {name:"브랜드 퍼스널리티",techs:["브랜드 보이스 시스템","일러스트레이션 스타일 가이드","컬러 토큰"]},
          {name:"몰입형 스토리텔링",techs:["스크롤 트리거 애니메이션","패럴랙스","풀스크린 영상 배경"]},
        ],
        regions:{
          global:[
            {name:"메시 그라데이션 폭발",period:"2018 Q1 ~ 2022 Q4",why:"Stripe 랜딩페이지가 메시 그라데이션으로 업계 화제 → 너도나도 적용. Figma 플러그인 등장으로 대중화",techs:["Mesh Gradient Figma 플러그인","다중 색상 포인트","부드러운 색 번짐"],brand:"Stripe · Apple Music · Instagram"},
            {name:"오로라·홀로그램 효과",period:"2019 Q1 ~ 2022 Q4",why:"인스타그램 특수효과 필터 인기 → 현실에서도 홀로그램 질감 유행 → 디지털로 역수입",techs:["홀로그래픽 포일 CSS","무지개 반사광","Chromatic Aberration"],brand:"Glossier · Fenty Beauty"},
          ],
          korea:[
            {name:"K-팝 앨범 아트 시스템",period:"2016 Q1 ~ 현재",why:"BTS 빌보드 입성(2017) → 전세계가 K팝 앨범 비주얼 주목. 세계관·컨셉·색상이 통합된 아트 디렉션 시스템화",techs:["세계관 기반 아트 디렉션","컨셉 포토북","포토카드 UI","AR 필터"],brand:"HYBE · SM · YG · Aespa·NewJeans"},
            {name:"토스 감성 금융 디자인",period:"2017 Q1 ~ 현재",why:"기존 딱딱한 금융 앱에 반발 → 친근한 색상·캐릭터·마이크로카피로 금융 UX 혁신. 한국 핀테크 디자인 표준 재정의",techs:["데이터 시각화 애니메이션","온보딩 캐릭터","마이크로카피","바텀시트"],brand:"토스(Viva Republica)"},
            {name:"NewJeans 비주얼 아이덴티티",period:"2022 Q3 ~ 현재",why:"Y2K+미니멀+레트로 혼합으로 기존 K팝 화려함 탈피 → 글로벌 팬덤 + 패션계 동시 공략",techs:["Y2K 레트로 사진 필터","세리프 타이포","파스텔+원색 혼합"],brand:"NewJeans · ADOR · HYBE"},
          ],
          japan:[
            {name:"Lo-Fi · 시티팝 비주얼 부활",period:"2017 Q1 ~ 2022 Q4",why:"유튜브 Lo-Fi 채널(Lofi Girl 등)이 글로벌 히트 → 1980s 일본 시티팝 미학이 디지털 복고로 재소환",techs:["노이즈 그레인 필터","CRT 스캔라인","파스텔+네온 배색"],brand:"Lofi Girl · City Pop 레이블"},
            {name:"Vaporwave 미학",period:"2015 Q1 ~ 2020 Q4",why:"인터넷 향수 + 소비주의 비판 → 1980~90년대 일본·미국 대중문화를 왜곡·과장한 아이러니 미학",techs:["VHS 왜곡 효과","그리스 조각상 밈","보라+핑크 팔레트"],brand:"Macintosh Plus · 各 Vaporwave 아티스트"},
          ],
          china:[
            {name:"궈차오(國潮) 디자인",period:"2018 Q1 ~ 현재",why:"중국 소비자 자국 브랜드 선호 증가 + 문화 자신감 → 한자·전통 문양을 현대적으로 재해석한 스트리트 감성",techs:["한자 타이포 그래픽","전통 문양 현대화","붉은색+금색 팔레트"],brand:"李寧(Li-Ning) · 완메이(完美日记) · 花西子"},
            {name:"왕홍(網紅) 패키지 디자인",period:"2016 Q1 ~ 현재",why:"라이브커머스 폭발 → 화면에서 눈에 띄는 포토제닉 패키지 필수 → 핑크·파스텔·미니멀 포장 트렌드",techs:["포토제닉 패키지","SNS 공유용 언박싱 디자인","파스텔 톤"],brand:"喜茶(Heytea) · 钟薛高"},
          ],
          europe:[
            {name:"에디토리얼 르네상스",period:"2016 Q1 ~ 현재",why:"디지털 정보 과잉 → 큐레이션·편집 가치 부상. 인쇄 잡지 미학이 디지털에서 오히려 희소성 가짐",techs:["대형 세리프 타이포","비대칭 그리드","사진+텍스트 충돌 레이아웃"],brand:"Bloomberg Businessweek · Kinfolk · It's Nice That"},
            {name:"조용한 럭셔리 (Quiet Luxury)",period:"2019 Q1 ~ 현재",why:"SNS 과시 문화 피로감 → 로고 없는 고품질 소재로 말하는 럭셔리. Bottega Veneta가 인스타 삭제하며 화제",techs:["로고 최소화·제거","중립 어스 톤","소재 텍스처 클로즈업"],brand:"Bottega Veneta · Loro Piana · The Row"},
          ],
          west:[
            {name:"Y2K 미학 부활",period:"2019 Q4 ~ 2023 Q2",why:"Z세대가 자신이 경험하지 않은 2000년대를 레트로로 소비 — 크롬·나비·베이비핑크 조합",techs:["크롬 텍스트 효과","실버 그라데이션","베이비핑크·민트·라벤더"],brand:"Paris Hilton 브랜드 · Juicy Couture 부활"},
            {name:"막시멀리즘",period:"2018 Q1 ~ 현재",why:"인스타그램 피드에서 눈에 띄려면 더 많이·더 화려하게. 미니멀리즘 피로감의 정반대 반동",techs:["패턴 온 패턴","금속 장식 부활","헤리티지 모노그램 강화"],brand:"Gucci (알레산드로 미켈레) · Versace"},
          ],
        }
      },
      {
        name:"알고리즘 디자인 · 콘텐츠 미학", color:"#c8a96e", art:false,
        person:"",
        work:"TikTok UI · Instagram Reels · YouTube Shorts 인터페이스",
        brand:"TikTok · Instagram · YouTube",
        modern:"알고리즘이 디자인 트렌드를 결정하는 첫 시대 — 플랫폼이 미학을 강제함",
        period:"2016 Q3 ~ 2022 Q4",
        why:"TikTok 알고리즘이 세로 영상 전용 포맷을 강제 → 9:16 세로 프레임이 새 디자인 표준. '0.3초 어텐션 그랩' 원칙이 시각 언어를 극단적으로 바꿈.",
        links:{wiki:"https://ko.wikipedia.org/wiki/틱톡",googleArt:"https://artsandculture.google.com/search?q=tiktok+design+interface",youtube:"https://www.youtube.com/results?search_query=tiktok+ui+design+history+algorithm"},
        imgs:[{label:"TikTok 인터페이스",q:"tiktok interface ui design vertical video 2020"},{label:"Reels 세로 포맷",q:"instagram reels vertical format design"}],
        trends:[
          {name:"글래스모피즘",techs:["backdrop-filter blur","반투명 배경색","다층 색상 그라데이션","라이트 보더"]},
          {name:"다크모드 미학",techs:["#000·#121212 배경","OLED 최적화","고대비 흰 텍스트","컬러 팔레트 이중화"]},
          {name:"그로테스크 그래픽믹스",techs:["폰트 크기 극단 혼용","이미지 왜곡·크롭","글리치 RGB 분리","비규칙 레이아웃"]},
          {name:"미디어 콜라주",techs:["레이어 블렌드 모드","이미지 컷아웃","스크랩북 감성","텍스처 레이어링"]},
          {name:"크리에이터 브랜딩",techs:["개인 컬러 시스템","썸네일 템플릿","로고 없는 일관성"]},
        ],
        regions:{
          global:[
            {name:"디자인 시스템 표준화",period:"2015 Q1 ~ 현재",why:"대규모 제품 팀에서 일관성 유지 불가능 → 컴포넌트·토큰·원칙을 문서화한 디자인 시스템 필수화",techs:["디자인 토큰","아토믹 디자인","Figma 자동 레이아웃"],brand:"Figma · Airbnb DLS · IBM Carbon · Shopify Polaris"},
            {name:"모션 디자인 · 마이크로 인터랙션",period:"2017 Q1 ~ 현재",why:"정적 UI의 차별화 한계 → 움직임이 감정·상태·브랜드를 전달하는 새 언어가 됨",techs:["Lottie JSON 애니메이션","스프링 물리 커브","Shared Element Transition"],brand:"Airbnb (Lottie 개발) · Apple"},
          ],
          korea:[
            {name:"K-드라마 포스터 글로벌화",period:"2019 Q1 ~ 현재",why:"넷플릭스 오리지널 한국 콘텐츠 폭발(오징어게임 2021) → 한국 포스터 디자인이 글로벌 OTT 비주얼 표준에 영향",techs:["시네마틱 타이포","다크 대비 포스터","상징 오브젝트 활용"],brand:"넷플릭스 코리아 · JTBC · tvN"},
            {name:"카카오·네이버 디자인 시스템",period:"2018 Q1 ~ 현재",why:"슈퍼앱 복잡도 증가 → 대규모 팀 일관성 위해 디자인 시스템 필수. 한국 IT 기업 디자인 성숙도 전환점",techs:["컴포넌트 기반 UI","다크모드 이중화","접근성 가이드라인"],brand:"카카오 · 네이버 · 토스"},
          ],
          japan:[
            {name:"메루카리 UX 혁신",period:"2017 Q1 ~ 현재",why:"C2C 중고거래 → 판매자가 쉽게 올리고 구매자가 쉽게 찾아야 함 → 초간단 플로우. 일본 앱 고밀도 관습 탈피",techs:["원탭 출품","가격 제안 UI","안전 거래 플로우"],brand:"메루카리 · PayPay"},
          ],
          china:[
            {name:"빌리빌리(B站) 미학",period:"2016 Q1 ~ 현재",why:"중국 Z세대 문화 플랫폼 → 탄막(弾幕, 실시간 댓글 자막) 인터페이스가 콘텐츠 소비 방식 자체를 바꿈",techs:["탄막 UI","2차원(二次元) 그래픽 스타일","파스텔 캐릭터 배너"],brand:"哔哩哔哩(Bilibili) · 爱奇艺"},
          ],
          europe:[
            {name:"북유럽 테크 미니멀",period:"2015 Q1 ~ 현재",why:"스칸디나비아 디자인 철학 + 테크 스타트업 결합. 불필요한 장식 전부 제거하고 기능·여백으로만 소통",techs:["모노크롬 팔레트","세리프 단독 사용","네거티브 스페이스"],brand:"Figma · Notion · Linear"},
          ],
          west:[
            {name:"네오 브루탈리즘 웹",period:"2020 Q1 ~ 현재",why:"글래스모피즘·그라데이션 등 과잉 세련미 반동 → 날 것 그대로의 구조 노출. Gumroad 리디자인(2021)이 신호탄",techs:["두꺼운 검정 테두리","원색 배경","오프셋 그림자","모노스페이스 폰트"],brand:"Gumroad · Linear · Vercel"},
          ],
        }
      },
    ]
  },

  // ─────────────────────────────────────────────
  // 11. AI 시대 2022~현재 (2026.05 기준)
  // ─────────────────────────────────────────────
  {
    num:"11", name:"AI · 공간 컴퓨팅 시대", period:"2022 ~ 현재 (2026.05 기준)",
    color:"#c86e8a",
    bg:["ChatGPT·Midjourney·Claude 대중화","Apple Vision Pro · AR/VR 공간 인터페이스","생성형 AI로 디자이너 역할 재정의 중"],
    next:"아직 진행 중 — 에이전트 UI·공간 컴퓨팅·생성형 브랜딩이 새 표준 형성 중",
    movements:[
      {
        name:"생성형 디자인", color:"#c86e8a", art:false,
        person:"",
        work:"Midjourney · DALL-E 3 · Stable Diffusion · Adobe Firefly · Sora",
        brand:"Midjourney · OpenAI · Adobe · Canva · Runway",
        modern:"누구나 고품질 비주얼 생성 → 디자이너 역할이 큐레이터·프롬프터·아트디렉터로 확장",
        period:"2022 Q3 ~ 현재",
        why:"ChatGPT(2022.11) 공개 후 AI 이미지 생성 도구 폭발적 대중화. 기존에 시니어 디자이너만 가능했던 고품질 비주얼이 텍스트 한 줄로 가능해짐 → 디자인 민주화 동시에 정체성 위기.",
        links:{wiki:"https://ko.wikipedia.org/wiki/미드저니",googleArt:"https://artsandculture.google.com/search?q=ai+generated+art+midjourney",youtube:"https://www.youtube.com/results?search_query=ai+design+tools+history+2023"},
        imgs:[{label:"Midjourney AI 생성",q:"midjourney ai generated artwork 2023 surreal"},{label:"Adobe Firefly",q:"adobe firefly generative ai design 2024"}],
        trends:[
          {name:"네오 3D 디자인",techs:["Blender 클레이 렌더","Spline 웹 3D","WebGL Three.js","파스텔 AO 라이팅"]},
          {name:"빅 타이포그래피",techs:["뷰포트 기반 폰트(vw)","Variable Font 애니메이션","마스킹 텍스트","키네틱 타이포"]},
          {name:"리퀴드 인터페이스",techs:["Liquid Glass (Apple 2025)","유체 형태 모핑","실시간 물리 시뮬레이션","Blob 애니메이션"]},
          {name:"반 AI 공예 미학",techs:["손그림 드로잉","노이즈 텍스처 강조","불완전한 선","수작업 느낌 폰트"]},
          {name:"촉각적 디지털",techs:["텍스처 반란","거친 종이 질감","리소그래피 감성","아날로그 인쇄 오류 재현"]},
        ],
        regions:{
          global:[
            {name:"AI 에이전트 UI",period:"2023 Q1 ~ 현재",why:"LLM 기반 챗 인터페이스가 앱의 새 표준 → 대화로 모든 기능 수행. 제로 UI 시대 예고",techs:["스트리밍 텍스트 렌더","마크다운 실시간 렌더","단일 입력창 UI"],brand:"ChatGPT · Claude · Perplexity · Notion AI"},
            {name:"생성형 이미지 미학",period:"2022 Q4 ~ 현재",why:"Midjourney 특유의 과포화 색상·영화적 조명이 '아름다운 AI 이미지'의 기준이 됨 → 디자인 트렌드에 역침투",techs:["프롬프트 기반 생성","인페인팅·아웃페인팅","스타일 트랜스퍼","ControlNet"],brand:"Midjourney · DALL-E · Stable Diffusion"},
            {name:"브랜드 모션 아이덴티티",period:"2020 Q1 ~ 현재",why:"정적 로고는 SNS·동영상 시대에 무의미 → 움직임·소리·맥락에 따라 변하는 살아있는 브랜드 필요",techs:["SVG 애니메이션 로고","반응형 로고","소닉 브랜딩","햅틱 피드백"],brand:"Google · Spotify · Nike · Airbnb"},
          ],
          korea:[
            {name:"K-디자인 글로벌 수출",period:"2022 Q1 ~ 현재",why:"K팝·K드라마 글로벌 파급력 → 한국 UX·그래픽 감성이 글로벌 표준에 역영향. 삼성 One UI가 안드로이드 UX 재정의",techs:["슈퍼앱 UX 패턴","바텀시트 레이어","인앱 결제 최적화"],brand:"삼성 One UI · 카카오 · 네이버 · 토스"},
            {name:"캐릭터 브랜딩 고도화",period:"2021 Q1 ~ 현재",why:"카카오 프렌즈·라인프렌즈 성공 → 브랜드 캐릭터 IP화 가속. 인간 아이돌 대신 버추얼 아이돌·AI 캐릭터로 확장",techs:["3D 캐릭터 IP","버추얼 인플루언서","AR 필터 연동"],brand:"카카오프렌즈 · SM SMCU · Aespa 에스파"},
          ],
          japan:[
            {name:"일본 미니멀 디지털 심화",period:"2021 Q1 ~ 현재",why:"와비사비·백자 철학이 디지털로 → 여백·절제·0장식 원칙. 무인양품 앱이 교과서 사례",techs:["극단적 여백","모노크롬 팔레트","제스처 기반 탐색","0 장식"],brand:"무인양품(MUJI) · 메루카리 · 유니클로"},
            {name:"Lo-Fi · 뉴트로 심화",period:"2020 Q1 ~ 현재",why:"디지털 피로 → 아날로그 따뜻함 수요 증가. Lofi Girl 채널 2천만 구독자 돌파",techs:["노이즈 그레인","VHS 왜곡","렌즈 플레어","카세트테이프 감성"],brand:"Lofi Girl · City Pop 레이블"},
          ],
          china:[
            {name:"차이나 시크(China Chic) 2.0",period:"2022 Q1 ~ 현재",why:"궈차오 1세대 이후 더 세련된 중국 미학 추구. 송나라 문인화·청화백자 미학을 현대 럭셔리로 재해석",techs:["수묵화 텍스처","여백 미학 적용","전통 색채 체계(오방색)"],brand:"故宫文创 · 观夏 · 三顿半"},
            {name:"AI 콘텐츠 생산 가속",period:"2023 Q1 ~ 현재",why:"중국 AI 도구(文心一格·通义万相) 빠른 성장 + 콘텐츠 수요 폭발 → AI 생성 광고·숏폼 콘텐츠 표준화",techs:["AI 생성 광고 소재","숏폼 세로 포맷","실시간 개인화"],brand:"바이두 · 알리바바 · ByteDance"},
          ],
          europe:[
            {name:"에코 디자인 미학",period:"2020 Q1 ~ 현재",why:"EU 그린딜·탄소중립 규제 + MZ 환경 소비 → 지속가능성이 브랜드 미학 자체로. 크래프트 종이·어스톤이 '착한 브랜드' 기호",techs:["크래프트 종이 질감","어스 톤 팔레트","미가공 인쇄 감성"],brand:"Patagonia · Oatly · Allbirds · Stella McCartney"},
            {name:"다크 럭셔리 · 하이퍼 미니멀",period:"2021 Q1 ~ 현재",why:"로고 피로감 + 진짜 럭셔리는 '아는 사람만 안다' → 로고 제거하고 소재·여백으로 말함. Bottega Veneta SNS 삭제가 역설적 화제",techs:["로고리스 디자인","소재 클로즈업","중립 세리프","무채색 사진"],brand:"Bottega Veneta · Loro Piana · The Row · Celine"},
          ],
          west:[
            {name:"스페이셜 UI · 공간 컴퓨팅",period:"2023 Q2 ~ 현재",why:"Apple Vision Pro(2024.02 출시)가 공간 컴퓨팅 시대 공식 선언. 2D 화면 너머의 3D 공간 인터페이스 설계 필요",techs:["Liquid Glass (visionOS 2025)","아이 트래킹","깊이 레이어링","공간 타이포"],brand:"Apple (visionOS) · Meta Quest · Google"},
            {name:"네오 브루탈리즘 성숙기",period:"2022 Q1 ~ 현재",why:"초기 충격이 지나고 브루탈리즘이 하나의 확립된 스타일로 정착. 스타트업 랜딩페이지 표준 중 하나로",techs:["두꺼운 테두리","오프셋 그림자","모노스페이스","불규칙 그리드"],brand:"Gumroad · Linear · Vercel · Lemon Squeezy"},
            {name:"반 AI 공예 미학 · 텍스처 반란",period:"2024 Q1 ~ 현재",why:"AI 생성 이미지 범람으로 '너무 완벽한 것'이 오히려 식상 → 손맛·질감·불완전함이 희소성 가짐. 2026 크리에이티브 블로크 선정 대표 트렌드",techs:["손그림 드로잉","노이즈 텍스처 강조","리소그래피 감성","수작업 폰트"],brand:"Tortoiseshell Press · 독립 출판·그래픽 스튜디오"},
          ],
        }
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
