const MOUSE_KEYBOARD_ITEM_LIST = [
    // 마우스
    [
        {item_no: 1, src: ['mouse1.png', 'mouse1-1.png', 'mouse1-2.png'], color_name: ['레드', '그레이', '블루'], color: ['#da3039', '#7e7e7e', '#2665c4'], title: 'M235 무선마우스', price: 50000, desc: '컴팩트함과 편안한 고무 측면'},
        {item_no: 2, src: ['mouse2.png', 'mouse2-1.png', 'mouse2-2.png', 'mouse2-3.png'], color_name: ['그레이', '다크 그레이', '피콕 블루', '더스티 로즈'], color: ['#b4b4b4', '#2c2d2f', '#1d7abd', '#ac416b'], title: 'M325 무선마우스', price: 50000, desc: '스피드 휠이 장착되어 컴팩트하고 편안합니다.'},
        {item_no: 3, src: ['mouse3.png'], color_name: [], color: [], title: 'MX ERGO', price: 50000, desc: '고급 무선 트랙볼'},
        {item_no: 4, src: ['mouse4.png', 'mouse4-1.png', 'mouse4-2.png'], color_name: ['페일그레이', '그래파이트', '로즈'], color: ['#ecedef', '#434446', '#eecdc8'], title: 'MX Anywhere 3', price: 50000, desc: '최고급 휴대용 무선 마우스'},
        {item_no: 5, src: ['mouse5.png'], color_name: [], color: [], title: 'MX Anywhere 3 for Mac', price: 50000, desc: '최고급 휴대용 무선 마우스'},
        {item_no: 6, src: ['mouse6.png', 'mouse6-1.png', 'mouse6-2.png', 'mouse6-3.png', 'mouse6-4.png'], color_name: ['오프 화이트', '그래파이트', '로즈', '블루 그레이', '유칼립투스'], color: ['#f0f0f0', '#434446', '#eecdc8', '#6c7fa7', '#b4c9c4'], title: 'Logitech Pebble M350', price: 50000, desc: '슬림한 디자인의 무소음 무선 마우스'},
        {item_no: 7, src: ['mouse7.png', 'mouse7-1.png', 'mouse7-2.png'], color_name: ['차콜', '블루', '레드'], color: ['#484848', '#2665c4', '#da3039'], title: 'M190 Full-Size Wireless Mouse', price: 50000, desc: '중간 크기부터 큰 크기의 손을 위한 입체적 디자인과 편안함'},
        {item_no: 8, src: ['mouse8.png'], color_name: [], color: [], title: 'M720 Triathlon', price: 50000, desc: '초고속 스크롤링 기능의 멀티 디바이스 무선 마우스'},
        {item_no: 9, src: ['mouse9.png'], color_name: [], color: [], title: 'MX MASTER 3', price: 50000, desc: '최고급 무선 마우스'},
        {item_no: 10, src: ['mouse10.png'], color_name: [], color: [], title: 'MX Vertical', price: 50000, desc: '고급 인체공학 마우스'},
        {item_no: 11, src: ['mouse11.png', 'mouse11-1.png', 'mouse11-2.png'], color_name: ['그래파이트 톤', '미드 그레이 톤', '루비'], color: ['#434446', '#989898', '#da3039'], title: 'M590 멀티 디바이스 무소음', price: 50000, desc: '추가적인 제어력과 무소음 탐색'},
        {item_no: 12, src: ['mouse12.png', 'mouse12-1.png', 'mouse12-2.png'], color_name: ['그래파이트', '그레이', '루비'], color: ['#434446', '#7e7e7e', '#da3039'], title: 'M585 멀티 디바이스', price: 50000, desc: '향상된 컨트롤의 컴팩트 마우스'},
        {item_no: 13, src: ['mouse13.png'], color_name: [], color: [], title: 'M110 무소음 유선 마우스', price: 50000, desc: '무소음-편안함-내구성-필수품'},
        {item_no: 14, src: ['mouse14.png', 'mouse14-1.png', 'mouse14-2.png'], color_name: ['블랙', '틸', '브라이트 레드'], color: ['#000', '#11a4b8', '#da3039'], title: '무선 초간편 휴대용 M187', price: 50000, desc: '주머니에 쏙 들어가는 초소형 디자인'},
        {item_no: 15, src: ['mouse15.png'], color_name: [], color: [], title: '유니파잉 USB 수신기', price: 50000, desc: '유니파잉을 지원하는 마우스 또는 키보드용 USB 수신기'},
        {item_no: 16, src: ['mouse16.png', 'mouse16-1.png', 'mouse16-2.png'], color_name: ['블랙', '그레이', '레드'], color: ['#000', '#b4b4b4', '#da3039'], title: 'M331 SILENT PLUS', price: 50000, desc: 'SilentTouch로 편안함과 정확도 향상'},
        {item_no: 17, src: ['mouse17.png', 'mouse17-1.png', 'mouse17-2.png'], color_name: ['차콜', '레드', '블루'], color: ['#484848', '#da3039', '#09507a'], title: 'M221 SILENT', price: 50000, desc: '무소음의 편안하고 사용이 간편한 무선 마우스'},
        {item_no: 18, src: ['mouse18.png', 'mouse18-1.png', 'mouse18-2.png'], color_name: ['블루 블랙', '그레이 블랙', '레드 블랙'], color: ['#2665c4', '#7e7e7e', '#da3039'], title: 'M170/M171 무선 마우스', price: 50000, desc: '간단하게 플러그 앤 플레이'},
        {item_no: 19, src: ['mouse19.png', 'mouse19-1.png', 'mouse19-2.png', 'mouse19-3.png'], color_name: ['그레이 블랙', '블루', '레드', '그레이'], color: ['#000', '#09507a', '#8b1e33', '#b4b4b4'], title: 'M337', price: 50000, desc: 'Bluetooth 마우스'},
        {item_no: 20, src: ['mouse20.png'], color_name: [], color: [], title: '무선 마우스 M186', price: 50000, desc: '안정적인 내구성을 가진 사용하기 편한 마우스'},
        {item_no: 21, src: ['mouse21.png', 'mouse21-1.png', 'mouse21-2.png'], color_name: ['블랙', '레드', '실버'], color: ['#000', '#da3039', '#dfe3e6'], title: '무선 마우스 M280', price: 50000, desc: '편안함과 정확도 향상'},
        {item_no: 22, src: ['mouse22.png', 'mouse22-1.png'], color_name: ['다크 그레이', '화이트'], color: ['#2c2d2f', '#e7e7e7'], title: 'M557 BLUETOOTH 마우스', price: 50000, desc: 'PC 사용자를 위한 휴대용 마우스'},
        {item_no: 23, src: ['mouse23.png', 'mouse23-1.png'], color_name: ['블랙', '화이트'], color: ['#000', '#e7e7e7'], title: 'M100r 유선 마우스', price: 50000, desc: '편안함. 내구성. 필수 아이템'},
        {item_no: 24, src: ['mouse24.png'], color_name: [], color: [], title: 'ERGO M575 무선 트랙볼', price: 50000, desc: '온종일 편안함을 느낄 수 있는 무선 엄지손가락 컨트롤 트랙볼'},
        {item_no: 25, src: ['mouse25.png'], color_name: [], color: [], title: 'MX Master 3 for Mac', price: 50000, desc: '최고급 무선 마우스'},
        {item_no: 26, src: ['mouse26.png'], color_name: [], color: [], title: 'M310 무선 마우스', price: 50000, desc: '컴팩트함과 편안한 고무 측면을 갖춘 풀사이즈'}
    ],

    // 키보드
    [
        {item_no: 1, src: ['keyboard1.png', 'keyboard1-1.png'], color_name: ['블랙', '화이트'], color: ['#000', '#e7e7e7'], title: 'K480 BLUETOOTH 멀티 디바이스 키보드', price: 50000, desc: '컴퓨터, 휴대전화 및 태블릿 간에 타이핑 전환 가능'},
        {item_no: 2, src: ['keyboard2.png'], color_name: [], color: [], title: 'K780 멀티-디바이스 무선 키보드', price: 50000, desc: '한 대의 키보드. 완벽한 기능 탑재. 컴퓨터, 휴대폰 및 태블릿용'},
        {item_no: 3, src: ['keyboard3.png', 'keyboard3-1.png', 'keyboard3-2.png', 'keyboard3-3.png'], color_name: ['블루', '로즈', '블랙', '오프 화이트'], color: ['#09507a', '#eecdc8', '#6b6b6d', '#f0f0f0'], title: 'K380 멀티 블루투스 키보드', price: 50000, desc: '컴퓨터, 태블릿, 휴대폰을 위한 미니멀 키보드'},
        {item_no: 4, src: ['keyboard4.png'], color_name: [], color: [], title: 'ERGO K860', price: 50000, desc: '스플릿 인체공학 키보드'},
        {item_no: 5, src: ['keyboard5.png'], color_name: [], color: [], title: 'Keys-To-Go', price: 50000, desc: '휴대용 울트라씬 블루투스 키보드'},
        {item_no: 6, src: ['keyboard6.png'], color_name: [], color: [], title: 'K835 TKL', price: 50000, desc: '유선 알루미늄 기계식 키보드'},
        {item_no: 7, src: ['keyboard7.png'], color_name: [], color: [], title: 'MX Keys for Mac', price: 50000, desc: '고급 무선 일루미네이티드 키보드'},
        {item_no: 8, src: ['keyboard8.png'], color_name: [], color: [], title: 'MX KEYS 키보드', price: 50000, desc: '고급 무선 일루미네이티드 키보드'},
        {item_no: 9, src: ['keyboard9.png'], color_name: [], color: [], title: 'K580 Slim Multi-Device Wireless Keyboard', price: 50000, desc: '컴퓨터, 휴대전화 및 태블릿용 컴팩트한 울트라 슬림의 무소음 키보드'},
        {item_no: 10, src: ['keyboard10.png'], color_name: [], color: [], title: 'LOGITECH CRAFT', price: 50000, desc: '크리에이티브 다이얼을 탑재한 프리미엄 무선 키보드'},
        {item_no: 11, src: ['keyboard11.png'], color_name: [], color: [], title: 'K375s MULTI-DEVICE', price: 50000, desc: '무선 키보드와 스탠드 콤보'},
        {item_no: 12, src: ['keyboard12.png'], color_name: [], color: [], title: 'K400 Plus Wireless Touch Keyboard', price: 50000, desc: 'PC 연결 TV를 편안하게 무선으로 제어'},
        {item_no: 13, src: ['keyboard13.png'], color_name: [], color: [], title: 'K270 무선 키보드', price: 50000, desc: '풀사이즈 무선 키보드'},
        {item_no: 14, src: ['keyboard14.png'], color_name: [], color: [], title: 'K120 Corded Keyboard', price: 50000, desc: '플러그 앤 플레이 USB 키보드'}
    ],

    // 콤보
    [
        {item_no: 1, src: ['combo1.png'], color_name: [], color: [], title: 'MK295 Silent Wireless Combo', price: 50000, desc: '90% 줄어든 클릭 및 타이핑 소음으로 작업 공간을 조용하게'},
        {item_no: 2, src: ['combo2.png'], color_name: [], color: [], title: 'Slim Wireless Keyboard and Mouse Combo MK470', price: 50000, desc: '컴팩트한 울트라 슬림 및 저소음 무선 키보드와 마우스 콤보'},
        {item_no: 3, src: ['combo3.png'], color_name: [], color: [], title: 'MK330R 무선 키보드와 마우스 콤보', price: 50000, desc: '미디어 키를 갖춘 풀사이즈 무선 콤보'},
        {item_no: 4, src: ['combo4.png'], color_name: [], color: [], title: 'MK545 Advanced', price: 50000, desc: '새롭지만 친근하고 단순하지만 혁신적입니다.'},
        {item_no: 5, src: ['combo5.png'], color_name: [], color: [], title: 'MK850 Performance', price: 50000, desc: '무선 키보드와 마우스 콤보'},
        {item_no: 6, src: ['combo6.png'], color_name: [], color: [], title: 'MK240 Wireless Keyboard and Mouse Combo', price: 50000, desc: '기분까지 상쾌해지는 컴팩트 무선 콤보'},
        {item_no: 7, src: ['combo7.png'], color_name: [], color: [], title: 'MK235 WIRELESS KEYBOARD AND MOUSE COMBO', price: 50000, desc: '내구성. 간편함. 무선'},
        {item_no: 8, src: ['combo8.png'], color_name: [], color: [], title: 'MK345 컴포트 무선 키보드 및 마우스 콤보', price: 50000, desc: '손목 받침대를 갖춘 편안한 무선 콤보'},
        {item_no: 9, src: ['combo9.png'], color_name: [], color: [], title: 'MK270r Wireless Keyboard and Mouse Combo', price: 50000, desc: '풀사이즈 무선 콤보'},
        {item_no: 10, src: ['combo10.png'], color_name: [], color: [], title: 'MK200 미디어 유선 키보드 및 마우스 콤보', price: 50000, desc: '미디어 키를 갖춘 플러그 앤 플레이 USB 콤보'},
        {item_no: 11, src: ['combo11.png'], color_name: [], color: [], title: 'MK120 유선 키보드 및 마우스 콤보', price: 50000, desc: '플러그 앤 플레이 USB 콤보'}
    ],

    // iPad 키보드
    [
        {item_no: 1, src: ['ipad_keyboard1.png'], color_name: [], color: [], title: 'COMBO TOUCH', price: 50000, desc: '트랙패드를 탑재한 백라이트 키보드 케이스'},
        {item_no: 2, src: ['ipad_keyboard2.png'], color_name: [], color: [], title: 'K480 BLUETOOTH 멀티 디바이스 키보드', price: 50000, desc: '컴퓨터, 휴대전화 및 태블릿 간에 타이핑 전환 가능'},
        {item_no: 3, src: ['ipad_keyboard3.png'], color_name: [], color: [], title: 'K780 멀티-디바이스 무선 키보드', price: 50000, desc: '한 대의 키보드. 완벽한 기능 탑재. 컴퓨터, 휴대폰 및 태블릿용.'},
        {item_no: 4, src: ['ipad_keyboard4.png'], color_name: [], color: [], title: 'K380 멀티 블루투스 키보드', price: 50000, desc: '컴퓨터, 태블릿, 휴대폰을 위한 미니멀 키보드'},
        {item_no: 5, src: ['ipad_keyboard5.png'], color_name: [], color: [], title: 'Keys-To-Go', price: 50000, desc: '휴대용 울트라씬 블루투스 키보드'},
        {item_no: 6, src: ['ipad_keyboard6.png'], color_name: [], color: [], title: 'Folio Touch', price: 50000, desc: 'iPad Air(4세대)용 트랙패드와 스마트 커넥터를 갖춘 백라이트 키보드 케이스'},
        {item_no: 7, src: ['ipad_keyboard7.png'], color_name: [], color: [], title: 'COMBO TOUCH', price: 50000, desc: 'iPad(7세대, 8세대, 9세대), iPad Air(3세대), iPad Pro 10.5인치용 트랙패드 및 스마트 커넥터를 갖춘 백라이트 키보드 케이스'},
        {item_no: 8, src: ['ipad_keyboard8.png'], color_name: [], color: [], title: 'SLIM FOLIO', price: 50000, desc: 'iPad(5, 6, 7, 8, 9세대) 및 iPad Air(3세대)용'},
        {item_no: 9, src: ['ipad_keyboard9.png'], color_name: [], color: [], title: 'Rugged Folio', price: 50000, desc: 'iPad(7세대,8세대와 9세대)용 스마트 커넥터 초강력 보호 케이스 키보드'},
        {item_no: 10, src: ['ipad_keyboard10.png'], color_name: [], color: [], title: 'SLIM FOLIO PRO', price: 50000, desc: 'iPad Pro 11인치(1세대 & 2세대), 12.9인치(3세대 & 4세대)용 Bluetooth 탑재 백라이트 키보드 케이스'}
    ],

    // 태블릿 키보드
    [
        {item_no: 1, src: ['tablet_keyboard1.png'], color_name: [], color: [], title: 'K480 BLUETOOTH 멀티 디바이스 키보드', price: 50000, desc: '컴퓨터, 휴대전화 및 태블릿 간에 타이핑 전환 가능'},
        {item_no: 2, src: ['tablet_keyboard2.png'], color_name: [], color: [], title: 'K780 멀티-디바이스 무선 키보드', price: 50000, desc: '한 대의 키보드. 완벽한 기능 탑재. 컴퓨터, 휴대폰 및 태블릿용.'},
        {item_no: 3, src: ['tablet_keyboard3.png'], color_name: [], color: [], title: 'K380 멀티 블루투스 키보드', price: 50000, desc: '컴퓨터, 태블릿, 휴대폰을 위한 미니멀 키보드'},
        {item_no: 4, src: ['tablet_keyboard4.png'], color_name: [], color: [], title: 'Keys-To-Go', price: 50000, desc: '휴대용 울트라씬 블루투스 키보드'}
    ]

];

const PRESENTATION_REMOTE_ITEM_LIST = [
    [
        {item_no: 1, src: ['presentation_remote1.png'], color_name: [], color: [], title: 'R800 그린 레이저 프리젠터', price: 50000, desc: '시간 확인을 위한 LCD 디스플레이 포함'},
        {item_no: 2, src: ['presentation_remote2.png'], color_name: [], color: [], title: 'R500 레이저 프리젠터', price: 50000, desc: '폭 넓은 호환성'},
        {item_no: 3, src: ['presentation_remote3.png'], color_name: [], color: [], title: 'SPOTLIGHT 프리젠터', price: 50000, desc: '대면, 가상, 그 둘의 조합에서도 모두 작동하는 고급 디지털 포인터.'},
        {item_no: 4, src: ['presentation_remote4.png'], color_name: [], color: [], title: '무선 프레젠터 R400', price: 50000, desc: '기본적인 슬라이드 내비게이션용'}
    ]
];

const HEADSET_ITEM_LIST = [
    // 유선헤드셋
    [
        {item_no: 1, src: ['wired_headset1.png'], color_name: [], color: [], title: 'Logitech Zone Wired Earbuds', price: 50000, desc: '내장형 노이즈 캔슬링 마이크와 다중 연결 기능 덕에 비즈니스용으로 적절합니다.'},
        {item_no: 2, src: ['wired_headset2.png'], color_name: [], color: [], title: 'H150 스테레오 헤드셋', price: 50000, desc: '인라인 컨트롤이 장착된 듀얼 플러그 컴퓨터 헤드셋'},
        {item_no: 3, src: ['wired_headset3.png'], color_name: [], color: [], title: 'H390 USB 컴퓨터 헤드셋', price: 50000, desc: '강력해진 디지털 오디오 및 인라인 컨트롤'},
        {item_no: 4, src: ['wired_headset4.png'], color_name: [], color: [], title: '로지텍 Zone Wired', price: 50000, desc: '통화 및 음악에 적합한 프리미엄 오디오를 갖춘 USB 유선 헤드셋입니다. 시끄러운 작업 공간에 적합합니다.'},
        {item_no: 5, src: ['wired_headset5.png'], color_name: [], color: [], title: 'H151 Stereo Headset', price: 50000, desc: '인라인 컨트롤 기능의 멀티 디바이스 헤드셋'},
        {item_no: 6, src: ['wired_headset6.png'], color_name: [], color: [], title: 'H340 USB computer Headset', price: 50000, desc: '- 디지털 오디오'},
    ],

    // 무선헤드셋
    [
        {item_no: 1, src: ['wireless_headset1.png'], color_name: [], color: [], title: 'Logitech Zone True Wireless', price: 50000, desc: '업계 최고 수준의 노이즈 캔슬링 마이크, ANC를 탑재했으며 컴퓨터 및 휴대전화에 동시 연결이 가능한 Bluetooth 이어폰.'},
        {item_no: 2, src: ['wireless_headset2.png'], color_name: [], color: [], title: 'Logitech Zone Wireless', price: 50000, desc: '어디에서나 작업할 수 있도록 탁월한 사운드, 플립 음소거 마이크, Qi 무선 충전 기능을 갖춘 Bluetooth 헤드셋'},
        {item_no: 3, src: ['wireless_headset3.png'], color_name: [], color: [], title: 'H800 블루투스 무선 헤드셋', price: 50000, desc: '컴퓨터, 스마트폰, 태블릿용'}
    ],

    // 키트
    [
        {item_no: 1, src: ['headset_kits1.png'], color_name: [], color: [], title: 'Essential Personal Video Collaboration Kit', price: 50000, desc: '번잡한 업무 환경을 위해 디자인된 USB 유선 이어폰과 에센셜 HD 웹캠의 조합으로 모든 개인 업무 공간을 업그레이드해보세요.'},
        {item_no: 2, src: ['headset_kits2.png'], color_name: [], color: [], title: 'Premium Personal Video Collaboration Kit', price: 50000, desc: 'Zone True Wireless 이어폰과 화상 회의를 위한 궁극의 4K 웹캠으로 개인 업무 공간을 업그레이드하세요.'}
    ]
];

const SPEAKER_ITEM_LIST = [
    // 블루투스 스피커
    [
        {item_no: 1, src: ['bluetooth_speaker1.png'], color_name: [], color: [], title: 'Logi Dock', price: 50000, desc: '미팅 컨트롤 및 스피커폰을 갖춘 올인원 도킹 스테이션.'},
        {item_no: 2, src: ['bluetooth_speaker2.png'], color_name: [], color: [], title: 'G560', price: 50000, desc: 'LIGHTSYNC PC 게이밍 스피커'}
    ],

    // 컴퓨터 스피커
    [
        {item_no: 1, src: ['computer_speaker1.png'], color_name: [], color: [], title: 'Logi Dock', price: 50000, desc: '미팅 컨트롤 및 스피커폰을 갖춘 올인원 도킹 스테이션.'},
        {item_no: 2, src: ['computer_speaker2.png'], color_name: [], color: [], title: 'Z150 Stereo Speakers', price: 50000, desc: '선명한 스테레오 사운드'},
        {item_no: 3, src: ['computer_speaker3.png'], color_name: [], color: [], title: 'G560', price: 50000, desc: 'LIGHTSYNC PC 게이밍 스피커'}
    ]

];

const mouse_keyboard_array = ['mouse', 'keyboard', 'combo', 'ipad_keyboard', 'tablet_keyboard'];
const presentation_remote_array = ['presentation_remote'];
const headset_array = ['wired_headset', 'wireless_headset', 'headset_kits'];
const speaker_array = ['bluetooth_speaker', 'computer_speaker'];


const array_item_list = [MOUSE_KEYBOARD_ITEM_LIST,PRESENTATION_REMOTE_ITEM_LIST, HEADSET_ITEM_LIST, SPEAKER_ITEM_LIST];
const array_list = [mouse_keyboard_array, presentation_remote_array, headset_array, speaker_array]
const menu_array = ['mouse_keyboard', 'presentation_remote', 'headset', 'speaker'];



const title_array = [
    ['마우스/키보드', '마우스', '키보드', '콤보', 'iPad 키보드', '태블릿 키보드'],
    ['프레젠테이션 리모컨', '프레젠테이션 리모컨'],
    ['헤드셋', '유선 헤드셋', '무선 헤드셋', '헤드셋 웹캠 키트'],
    ['스피커', 'Bluetooth 스피커', '컴퓨터 스피커']
];


function get_url_info(key) {
    let url = location.href;

    url = url.split('?')
    
    if(url.length > 1) {
        url = url[1]
        url = url.split("&")

        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("=")

            if(key == tmp_url[0]) {
                return tmp_url[1];
            }
        }
        return null;
    }

    else {
        return null;
    }
};


// product
function load_product_items(array_no, cate_no, qty) {
    if(get_url_info("cate_no") != null) {
        $('.product_item_area').attr('id', menu_array[cate_no]);
        $('.product_banner_txt').text(title_array[array_no][0]);
    };

    // LNB
    for(let i=0; i<title_array[array_no].length - 1; i++) {
        let lnb_li_list = `<li class="lnb_li"><a href="product.html?array_no=${array_no}&cate_no=${i}">${title_array[array_no][i+1]}</a></li>`;

        $('.lnb_ul').append(lnb_li_list);
    };
    
    // 제품 리스트
    for(let i=0; i<qty; i++) {
        let product_item_list = `
            <div class="product_item_box">
                <a href="item.html?array_no=${array_no}&cate_no=${cate_no}&item_no=${array_item_list[array_no][cate_no][i].item_no}">
                    <div class="product_item_img">
                        <img src="img/items/${menu_array[array_no]}/${array_list[array_no][cate_no]}/${array_item_list[array_no][cate_no][i].src[0]}" alt="">
                        <div class="product_color_box"></div>
                    </div>
                    <div class="product_item_info">
                        <div class="product_item_name">${array_item_list[array_no][cate_no][i].title}</div>
                        <div class="product_item_desc">${array_item_list[array_no][cate_no][i].desc}</div>
                    </div>
                </a>
            </div>
        `;
        
        $('.product_item_area').append(product_item_list);


        for(let j=0; j<array_item_list[array_no][cate_no][i].color.length; j++) {
            // color      
            let product_color = `<div class="product_color" style="background: ${array_item_list[array_no][cate_no][i].color[j]}"></div>`;
            
            $(`.product_item_box:nth-child(${i+1})`).find('.product_color_box').append(product_color);

            // $('.product_item_box').eq(i).find('.product_color_box').append(product_color);
        }

        $('.lnb_li').eq(cate_no).addClass('lnb_li_active');

    };

};


// m_product
function m_load_product_items(array_no, cate_no, qty) {
    if(get_url_info("cate_no") != null) {
        $('.product_item_area').attr('id', menu_array[cate_no]);
        $('.product_banner_txt').text(title_array[array_no][0]);
    };

    // LNB
    for(let i=0; i<title_array[array_no].length - 1; i++) {
        let lnb_li_list = `<li class="lnb_li"><a href="m_product.html?array_no=${array_no}&cate_no=${i}">${title_array[array_no][i+1]}</a></li>`;

        $('.lnb_ul').append(lnb_li_list);
    };

    
    // 제품 리스트
    for(let i=0; i<qty; i++) {
        let product_item_list = `
            <div class="product_item_box">
                <a href="m_item.html?array_no=${array_no}&cate_no=${cate_no}&item_no=${array_item_list[array_no][cate_no][i].item_no}">
                    <div class="product_item_img">
                        <img src="img/items/${menu_array[array_no]}/${array_list[array_no][cate_no]}/${array_item_list[array_no][cate_no][i].src[0]}" alt="">
                        <div class="product_color_box"></div>
                    </div>
                    <div class="product_item_info">
                        <div class="product_item_name">${array_item_list[array_no][cate_no][i].title}</div>
                        <div class="product_item_desc">${array_item_list[array_no][cate_no][i].desc}</div>
                    </div>
                </a>
            </div>
        `;
        
        $('.product_item_area').append(product_item_list);


        for(let j=0; j<array_item_list[array_no][cate_no][i].color.length; j++) {
            // color      
            let product_color = `<div class="product_color" style="background: ${array_item_list[array_no][cate_no][i].color[j]}"></div>`;
            
            $(`.product_item_box:nth-child(${i+1})`).find('.product_color_box').append(product_color);

            // $('.product_item_box').eq(i).find('.product_color_box').append(product_color);

        }

        $('.lnb_li').eq(cate_no).addClass('lnb_li_active');

    };
    
};

// product banner
function load_product_banner_bg(array_no) {
    // 배너 배경
    // 마우스/키보드
    if (array_no == 0) {
        $('.product_banner').css({
            background: '#00b8fc url(img/product_banner/product_banner1.jpg) no-repeat center / cover'
        })
        $('.contents_area2').css({
            background: 'url(img/product_banner/product_banner1-1.png) no-repeat bottom / contain'
        })
    }
    // 프레젠테이션 리모컨
    else if(array_no == 1) {
        $('.product_banner').css({
            background: '#ff7f2c url(img/product_banner/product_banner2.jpg) no-repeat center / cover'
        })
        $('.contents_area2').css({
            background: 'url(img/product_banner/product_banner2-1.png) no-repeat bottom / contain'
        })
    }
    // 헤드셋
    else if(array_no == 2) {
        $('.product_banner').css({
            background: '#00ead0 url(img/product_banner/product_banner3.jpg) no-repeat top / cover'
        })
        $('.contents_area2').css({
            background: 'url(img/product_banner/product_banner3-1.png) no-repeat bottom / contain'
        })
    }
    // 스피커
    else if(array_no == 3) {
        $('.product_banner').css({
            background: '#814efa  url(img/product_banner/product_banner4.jpg) no-repeat center / cover'
        })
        $('.contents_area2').css({
            background: 'url(img/product_banner/product_banner4-1.png) no-repeat bottom / contain'
        })
    }
};


// item
function load_items(array_no, cate_no, item_no) {
    let item_img = `
        <img src="img/items/${menu_array[array_no]}/${array_list[array_no][cate_no]}/${array_item_list[array_no][cate_no][item_no].src[0]}" alt="">
    `;

    let item_info = `
        <div class="item_title">${array_item_list[array_no][cate_no][item_no].title}</div>
        <div class="item_desc">${array_item_list[array_no][cate_no][item_no].desc}</div>
    `;

    $('.item_img_box').append(item_img);
    $('.item_info_top_R_txt').prepend(item_info);

    // color
    for(let i=0; i<array_item_list[array_no][cate_no][item_no].color.length; i++) {
    
        let item_color = `<div class="item_color" style="background: ${array_item_list[array_no][cate_no][item_no].color[i]}"></div>`

        $('.item_color_box').append(item_color);
    }
};