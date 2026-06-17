import React, { useState, useRef, useEffect } from "react";
const MENUS = [
  // ───────── 집밥 · 아침 · 단품 ─────────
  { "name": "삶은 달걀", "group": "집밥", "cat": "아침단품", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "샐러리", "group": "집밥", "cat": "아침단품", "tags": ["소화편함", "당뇨친화"] },
  { "name": "견과류 (믹스·호두)", "group": "집밥", "cat": "아침단품", "tags": ["당뇨친화"] },
  { "name": "연두부", "group": "집밥", "cat": "아침단품", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "과일 (바나나·사과·망고·블루베리)", "group": "집밥", "cat": "아침단품", "tags": ["소화편함"] },
  { "name": "채소찜 (단호박·양배추)", "group": "집밥", "cat": "아침단품", "tags": ["소화편함", "당뇨친화"] },
  { "name": "그릭요거트 + 올리브오일", "group": "집밥", "cat": "아침단품", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "방울토마토", "group": "집밥", "cat": "아침단품", "tags": ["소화편함", "당뇨친화"] },
  { "name": "두유", "group": "집밥", "cat": "아침단품", "tags": ["당뇨친화", "단백질"] },
  { "name": "저지방 우유", "group": "집밥", "cat": "아침단품", "tags": ["단백질"] },
  { "name": "아보카도", "group": "집밥", "cat": "아침단품", "tags": ["소화편함", "당뇨친화"] },
  { "name": "파프리카", "group": "집밥", "cat": "아침단품", "tags": ["소화편함", "당뇨친화"] },
  { "name": "낫또", "group": "집밥", "cat": "아침단품", "tags": ["소화편함", "당뇨친화", "단백질"] },

  // ───────── 집밥 · 아침 · 요리 ─────────
  { "name": "그릭요거트 잼 샌드위치", "group": "집밥", "cat": "아침요리", "tags": ["단백질"] },
  {
    "name": "계란 토마토 전", "group": "집밥", "cat": "아침요리",
    "tags": ["소화편함", "당뇨친화", "단백질"],
    "ingredients": "계란 4개, 올리브오일, (방울)토마토 1개, 모짜렐라 치즈",
    "link": "https://www.youtube.com/shorts/MPfr2DnpcNs"
  },
  {
    "name": "달걀 샐러드", "group": "집밥", "cat": "아침요리",
    "tags": ["소화편함", "당뇨친화", "단백질"],
    "ingredients": "쪽파(대파), 당근, 커리파우더 1큰술, 소금, 계란 4개, 후추, 올리브오일, 홀그레인 머스타드 1작은술",
    "link": "https://www.youtube.com/watch?v=dy4FSxfxGQo"
  },
  {
    "name": "토마토달걀커리볶음", "group": "집밥", "cat": "아침요리",
    "tags": ["소화편함", "당뇨친화", "단백질"],
    "ingredients": "토마토 3개, 유정란 3개, 커리 파우더 1/2 큰술, 다진마늘 1/2 큰술, 올리브오일 1큰술, 대파 또는 쪽파",
    "link": "https://www.youtube.com/shorts/Z4xyWdEG_xU"
  },
  { "name": "팽이버섯 양파 볶음", "group": "집밥", "cat": "아침요리", "tags": ["소화편함", "당뇨친화"] },

  // ───────── 집밥 · 반찬 ─────────
  { "name": "오뎅볶음", "group": "집밥", "cat": "반찬", "tags": [] },
  { "name": "메추리알장조림", "group": "집밥", "cat": "반찬", "tags": ["단백질"] },
  { "name": "호박볶음", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "다진불고기", "group": "집밥", "cat": "반찬", "tags": ["단백질"] },
  { "name": "미나리무침", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "부추무침", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "깻잎무침", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "콩나물무침", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "고사리나물", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "도라지무침", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "무생채", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "시금치", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "말린오징어무침", "group": "집밥", "cat": "반찬", "tags": ["자극적"] },
  { "name": "오이무침", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "김치", "group": "집밥", "cat": "반찬", "tags": ["자극적"] },
  { "name": "멸치볶음", "group": "집밥", "cat": "반찬", "tags": ["단백질"] },
  { "name": "다시마", "group": "집밥", "cat": "반찬", "tags": ["소화편함", "당뇨친화"] },
  { "name": "장조림", "group": "집밥", "cat": "반찬", "tags": ["단백질"] },

  // ───────── 집밥 · 국/찌개 ─────────
  { "name": "미역국", "group": "집밥", "cat": "국찌개", "tags": ["소화편함", "당뇨친화"] },
  { "name": "된장찌개", "group": "집밥", "cat": "국찌개", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "청국장", "group": "집밥", "cat": "국찌개", "tags": ["당뇨친화", "단백질"] },
  { "name": "소고기국", "group": "집밥", "cat": "국찌개", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "김치찌개", "group": "집밥", "cat": "국찌개", "tags": ["자극적"] },
  { "name": "(떡)만두국", "group": "집밥", "cat": "국찌개", "tags": [] },
  { "name": "오뎅탕", "group": "집밥", "cat": "국찌개", "tags": [] },
  { "name": "북엇국", "group": "집밥", "cat": "국찌개", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "황태해장국", "group": "집밥", "cat": "국찌개", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "콩나물국", "group": "집밥", "cat": "국찌개", "tags": ["소화편함", "당뇨친화"] },
  { "name": "순두부찌개", "group": "집밥", "cat": "국찌개", "tags": ["소화편함", "단백질"] },
  { "name": "고추장애호박찌개", "group": "집밥", "cat": "국찌개", "tags": ["자극적"] },
  { "name": "꽁치/고등어찌개", "group": "집밥", "cat": "국찌개", "tags": ["자극적", "단백질"] },
  { "name": "비지찌개", "group": "집밥", "cat": "국찌개", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "닭개장", "group": "집밥", "cat": "국찌개", "tags": ["자극적", "단백질"] },

  // ───────── 집밥 · 고기반찬 ─────────
  { "name": "훈제오리", "group": "집밥", "cat": "고기반찬", "tags": ["단백질"] },
  { "name": "불고기", "group": "집밥", "cat": "고기반찬", "tags": ["단백질"] },
  { "name": "제육볶음", "group": "집밥", "cat": "고기반찬", "tags": ["자극적", "단백질"] },
  { "name": "돼지고기 김치볶음", "group": "집밥", "cat": "고기반찬", "tags": ["자극적", "단백질"] },
  { "name": "목살/삼겹살 구이", "group": "집밥", "cat": "고기반찬", "tags": ["당뇨친화", "단백질"] },
  { "name": "김치찜", "group": "집밥", "cat": "고기반찬", "tags": ["자극적"] },
  { "name": "수육", "group": "집밥", "cat": "고기반찬", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "닭도리탕", "group": "집밥", "cat": "고기반찬", "tags": ["자극적", "단백질"] },
  { "name": "대패삼겹살 숙주볶음", "group": "집밥", "cat": "고기반찬", "tags": ["단백질"] },
  { "name": "닭봉조림", "group": "집밥", "cat": "고기반찬", "tags": ["단백질"] },

  // ───────── 집밥 · 일품메뉴 ─────────
  { "name": "계란말이", "group": "집밥", "cat": "일품메뉴", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "군만두", "group": "집밥", "cat": "일품메뉴", "tags": [] },
  { "name": "메밀전병", "group": "집밥", "cat": "일품메뉴", "tags": [] },
  { "name": "소시지볶음", "group": "집밥", "cat": "일품메뉴", "tags": [] },
  { "name": "잡채", "group": "집밥", "cat": "일품메뉴", "tags": [] },
  { "name": "두부조림", "group": "집밥", "cat": "일품메뉴", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "두부부침", "group": "집밥", "cat": "일품메뉴", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "카레", "group": "집밥", "cat": "일품메뉴", "tags": [] },
  { "name": "짜장", "group": "집밥", "cat": "일품메뉴", "tags": ["자극적"] },
  { "name": "계란찜", "group": "집밥", "cat": "일품메뉴", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "유부초밥/주먹밥", "group": "집밥", "cat": "일품메뉴", "tags": [] },
  { "name": "김치볶음밥", "group": "집밥", "cat": "일품메뉴", "tags": ["자극적"] },
  { "name": "낙지덮밥", "group": "집밥", "cat": "일품메뉴", "tags": ["자극적"] },
  { "name": "스키야끼", "group": "집밥", "cat": "일품메뉴", "tags": ["단백질"] },

  // ───────── 배달 · 한식 ─────────
  { "name": "추오정 추어탕", "group": "배달", "cat": "한식", "tags": [], "ingredients": "추어탕" },
  { "name": "회사 주변 갈비탕", "group": "배달", "cat": "한식", "tags": [], "ingredients": "갈비탕/갈비찜" },
  { "name": "작은공간", "group": "배달", "cat": "한식", "tags": [], "ingredients": "떡볶이" },
  { "name": "하루끼우동", "group": "배달", "cat": "한식", "tags": [], "ingredients": "우동, 김치볶음밥" },
  { "name": "부찌남", "group": "배달", "cat": "한식", "tags": [], "ingredients": "부대찌개" },
  { "name": "한지박", "group": "배달", "cat": "한식", "tags": [], "ingredients": "닭볶음탕" },
  { "name": "영일만 막회물회", "group": "배달", "cat": "한식", "tags": [], "ingredients": "물회, 회덮밥" },
  { "name": "청실홍실", "group": "배달", "cat": "한식", "tags": [], "ingredients": "감자국(탕), 성시경의 먹을텐데 출연" },
  { "name": "3대 삼계장인", "group": "배달", "cat": "한식", "tags": [], "ingredients": "잣 삼계탕, 미쉐린 빕구르망" },
  { "name": "순남시래기", "group": "배달", "cat": "한식", "tags": [], "ingredients": "시래기국, 수육정식" },

  // ───────── 배달 · 양식/중식 ─────────
  { "name": "잭슨피자", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "피자" },
  { "name": "60계 치킨", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "치킨" },
  { "name": "뉴욕스테이크하우스", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "함박스테이크, “투 스트라이크입니다”" },
  { "name": "브루클린 버거", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "수제버거" },
  { "name": "차알", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "중식" },
  { "name": "피에프창", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "중식, 볶음밥" },
  { "name": "사현스낵", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "라오깐마볶음밥, 완탕" },
  { "name": "피그닉", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "포크 라이스 볼, 바베큐" },
  { "name": "버팔로스팟", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "버팔로윙" },

  // ───────── 배달 · 샌드위치/포케 ─────────
  { "name": "회사 근처 포케", "group": "배달", "cat": "샌드위치/포케", "tags": [], "ingredients": "포케" },
  { "name": "써니테르", "group": "배달", "cat": "샌드위치/포케", "tags": [], "ingredients": "빵 맛있는 샌드위치 집" },
  { "name": "블루엣", "group": "배달", "cat": "샌드위치/포케", "tags": [], "ingredients": "치킨 샌드위치" },

  // ───────── 배달 · 일식 ─────────
  { "name": "쿠마카레야", "group": "배달", "cat": "일식", "tags": [], "ingredients": "버섯크림카레" },
  { "name": "카이센동 우니도", "group": "배달", "cat": "일식", "tags": [], "ingredients": "카이센동, 사케동" },
  { "name": "우동명가 기리야마", "group": "배달", "cat": "일식", "tags": [], "ingredients": "소갈비살덮밥, 스키야키나베우동" },
  { "name": "최스시", "group": "배달", "cat": "일식", "tags": [], "ingredients": "회 덮밥, 초밥, 알탕" },
  { "name": "스시범", "group": "배달", "cat": "일식", "tags": [], "ingredients": "스시" },

  // ───────── 배달 · 기타 ─────────
  { "name": "레몬그라스 타이", "group": "배달", "cat": "기타", "tags": [], "ingredients": "팟타이, 파인애플볶음밥" },
  { "name": "반포식스", "group": "배달", "cat": "기타", "tags": [], "ingredients": "베트남 음식, “투 스트라이크입니다”" },
  { "name": "칵토", "group": "배달", "cat": "기타", "tags": [], "ingredients": "멕시칸, 비리야 타코" },
  { "name": "시와", "group": "배달", "cat": "기타", "tags": [], "ingredients": "이집트 요리" },
  { "name": "콴안다오", "group": "배달", "cat": "기타", "tags": [], "ingredients": "유명한 베트남집" },
  { "name": "꿍탈레", "group": "배달", "cat": "기타", "tags": [], "ingredients": "태국음식, 팟타이" },
  { "name": "뜸들이다", "group": "배달", "cat": "기타", "tags": [], "ingredients": "아보카도 계란덮밥, 삼겹살카레" },
  { "name": "깔리", "group": "배달", "cat": "기타", "tags": [], "ingredients": "인도 커리, 리뷰 많음" },
  { "name": "인딕슬로우", "group": "배달", "cat": "기타", "tags": [], "ingredients": "인도 커리" },

  // ───────── 외식 · 집 근처 ─────────
  { "name": "한강 나가기", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "라면, 치킨" },
  { "name": "키쿠카와", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "장어구이" },
  { "name": "미가훠궈", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "중식, 볶음밥" },
  { "name": "차알", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "중식" },
  { "name": "산들해", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "한식 코스" },
  { "name": "몬안베띠", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "베트남 음식" },
  { "name": "김영희 아구찜", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "아구찜" },
  { "name": "서래향", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "중국집" },
  { "name": "서래쭈꾸미", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "쭈꾸미" },
  { "name": "야미도", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "일식집, 알밥" },
  { "name": "무샤", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "이자카야" },
  { "name": "밀화", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "쌈밥정식, 불고기전골" },
  { "name": "화니", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "고등어구이, 비빔밥" },

  // ───────── 외식 · 차 타고 ─────────
  { "name": "은희네해장국", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "선지해장국" },
  { "name": "담원순대", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "강남역 5대 순대국밥" },
  { "name": "농민백암순대", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "강남역 1등 순대국밥" },
  { "name": "밀란", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "모든 메뉴가 다 맛있음" },
  { "name": "밀숲", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "육개장 칼국수/수제비" },
  { "name": "에베레스트", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "카레, 챠오미엔" },
  { "name": "미우야", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "우동, 소바" },
  { "name": "늘푸른목장", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "소고기" },
  { "name": "콴안다오", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "베트남 음식, 유명한 곳" },
  { "name": "티티그릴", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "태국 음식, 뿌빳퐁커리" },
  { "name": "옥된장", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "교대, 된장 전골" },
  { "name": "칠백한우국밥", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "한우국밥, 육회비빔밥" },
  { "name": "일석삼조버섯매운탕", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "소고기샤브버섯 매운탕" }
];

// ─────────────────────────────────────────────────────────────
// 메뉴 데이터의 원본은 노션 "🍽️ 우리집 식단 관리" 페이지의 토글목록입니다.
// 노션 토글을 수정한 뒤 "업데이트해줘"라고 하면 위 MENUS 배열을 새로 만들어 드려요.
// ─────────────────────────────────────────────────────────────

// 각 탭(group)별 카테고리 + 아이콘.
// 집밥의 "아침"만 하위(단품/요리)를 가지며, 나머지는 누르면 바로 메뉴가 뜹니다.
const HOME_CATS = [
  {
    key: "아침", icon: "🌅", children: [
      { key: "아침단품", label: "간단히 (단품)", icon: "🥑" },
      { key: "아침요리", label: "요리해서", icon: "🍳" },
    ],
  },
  { key: "반찬", icon: "🥗" },
  { key: "국찌개", icon: "🍲" },
  { key: "고기반찬", icon: "🥩" },
  { key: "일품메뉴", icon: "🍱" },
];

const DELIVERY_CATS = [
  { key: "한식", icon: "🍚" },
  { key: "양식/중식", icon: "🍝" },
  { key: "샌드위치/포케", icon: "🥪" },
  { key: "일식", icon: "🍣" },
  { key: "기타", icon: "🌏" },
];

const DINING_CATS = [
  { key: "집 근처", icon: "🚶" },
  { key: "차 타고", icon: "🚗" },
];

const GROUP_CATS = { 집밥: HOME_CATS, 배달: DELIVERY_CATS, 외식: DINING_CATS };

// 메뉴 카드/상세에 쓰는 이모지: 메뉴가 속한 카테고리(=상위 인덱스)의 이모지를 그대로 사용.
// 예) "한강 나가기" → 집 근처 🚶, "계란 토마토 전" → 요리 🍳
const CAT_EMOJI = {
  아침단품: "🥑", 아침요리: "🍳", 반찬: "🥗", 국찌개: "🍲", 고기반찬: "🥩", 일품메뉴: "🍱",
  한식: "🍚", "양식/중식": "🍝", "샌드위치/포케": "🥪", 일식: "🍣", 기타: "🌏",
  "집 근처": "🚶", "차 타고": "🚗",
};

// 헤더에서 하위 카테고리명을 보기 좋게 바꿔주는 라벨
const SUB_LABEL = { 아침단품: "간단히 (단품)", 아침요리: "요리해서" };

// 태그 색상
const TAG_COLORS = {
  소화편함: { bg: "#E7F6EC", fg: "#1A8245" },
  당뇨친화: { bg: "#E6F0FB", fg: "#2563A8" },
  자극적: { bg: "#FDECEC", fg: "#C0392B" },
  단백질: { bg: "#F0EBFA", fg: "#6B46C1" },
};

const TABS = [
  { key: "집밥", icon: "🏠" },
  { key: "배달", icon: "🛵" },
  { key: "외식", icon: "🍴" },
];

function MealApp() {
  const [tab, setTab] = useState("집밥");
  const [path, setPath] = useState([]); // 탭 내 드릴다운 경로: [] | ["한식"] | ["아침","아침요리"] ...
  const [detail, setDetail] = useState(null); // 상세 모달 메뉴
  const [rolling, setRolling] = useState(false);
  const [rollResult, setRollResult] = useState(null);

  // 탭 바뀌면 경로 초기화
  useEffect(() => { setPath([]); }, [tab]);

  const accent = "#FF6B35"; // 코랄·주황 메인
  const accentSoft = "#FFF1EB";

  function tabMenus(t) {
    return MENUS.filter((m) => m.group === t);
  }

  // 현재 화면에 보여줄 항목 계산 (모든 탭이 카테고리 → (하위) → 메뉴 구조)
  function currentView() {
    const cats = GROUP_CATS[tab];
    if (path.length === 0) {
      return { type: "cats", items: cats };
    }
    const top = path[0];
    const catDef = cats.find((c) => c.key === top);
    if (catDef?.children && path.length === 1) {
      return { type: "subcats", items: catDef.children, parent: top };
    }
    // 실제 메뉴: 경로의 마지막이 곧 메뉴의 cat 값
    const leaf = path[path.length - 1];
    return { type: "menus", items: MENUS.filter((m) => m.group === tab && m.cat === leaf) };
  }

  const view = currentView();

  // 헤더 큰 문구
  function headerTitle() {
    if (path.length === 0) {
      return tab === "집밥" ? "밥 뭐하지?" : tab === "배달" ? "뭐 시키지?" : "어디 가지?";
    }
    if (tab === "집밥" && path[0] === "아침" && path.length === 1) return "아침, 어떻게?";
    const last = path[path.length - 1];
    return SUB_LABEL[last] || last;
  }

  // 파칭코 랜덤 (현재 탭 전체 메뉴가 후보)
  function doRandom() {
    const pool = tabMenus(tab);
    if (pool.length === 0) return;
    setRolling(true);
    setRollResult(null);
    let i = 0;
    let delay = 50;
    const startTime = Date.now();
    function step() {
      setRollResult(pool[i % pool.length]);
      i++;
      const elapsed = Date.now() - startTime;
      // 점점 느려지게
      delay = 50 + Math.pow(elapsed / 1000, 2.4) * 80;
      if (elapsed > 2600) {
        const final = pool[Math.floor(Math.random() * pool.length)];
        setRollResult(final);
        setRolling(false);
        return;
      }
      setTimeout(step, delay);
    }
    step();
  }

  function goBack() {
    setPath((p) => p.slice(0, -1));
  }

  return (
    <div style={{
      maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#FAFAFA",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      display: "flex", flexDirection: "column", position: "relative", color: "#191F28",
    }}>
      {/* 상단 헤더 */}
      <div style={{ padding: "22px 20px 8px" }}>
        {path.length > 0 && (
          <button onClick={goBack} style={{
            border: "none", background: "none", fontSize: 15, color: "#8B95A1",
            padding: 0, marginBottom: 10, cursor: "pointer", fontWeight: 600,
          }}>← 뒤로</button>
        )}
        {/* 작고 연한 고정 문구 */}
        <div style={{ fontSize: 13, fontWeight: 600, color: "#B0B8C1", letterSpacing: -0.2 }}>
          오늘 뭐 먹지?
        </div>
        {/* 크고 볼드한 탭별 메시지 */}
        <div style={{ fontSize: 27, fontWeight: 800, letterSpacing: -0.6, marginTop: 2 }}>
          {headerTitle()}
        </div>
        {view.type === "menus" && (
          <div style={{ fontSize: 14, color: "#8B95A1", marginTop: 4 }}>{view.items.length}개</div>
        )}
      </div>

      {/* 랜덤 버튼 (모든 탭 상단) */}
      <div style={{ padding: "8px 20px 4px" }}>
        <button onClick={doRandom} disabled={rolling} style={{
          width: "100%", padding: "15px", borderRadius: 16, border: "none",
          background: accent, color: "white", fontSize: 16, fontWeight: 700,
          cursor: rolling ? "default" : "pointer", fontFamily: "inherit",
          boxShadow: "0 4px 14px rgba(255,107,53,0.3)", opacity: rolling ? 0.85 : 1,
        }}>
          🎰 {rolling ? "고르는 중…" : `${tab} 랜덤으로 정하기`}
        </button>
      </div>

      {/* 본문 */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px 90px" }}>
        {view.type === "cats" && view.items.map((c) => (
          <Card key={c.key} onClick={() => setPath([c.key])}>
            <span style={{ fontSize: 26, marginRight: 14 }}>{c.icon}</span>
            <span style={{ fontSize: 17, fontWeight: 700 }}>{c.key}</span>
            <span style={{ marginLeft: "auto", color: "#C5C8CE", fontSize: 20 }}>›</span>
          </Card>
        ))}

        {view.type === "subcats" && view.items.map((s) => (
          <Card key={s.key} onClick={() => setPath([view.parent, s.key])}>
            <span style={{ fontSize: 26, marginRight: 14 }}>{s.icon}</span>
            <span style={{ fontSize: 17, fontWeight: 700 }}>{s.label || s.key}</span>
            <span style={{ marginLeft: "auto", color: "#C5C8CE", fontSize: 20 }}>›</span>
          </Card>
        ))}

        {view.type === "menus" && view.items.map((m, idx) => (
          <MenuCard key={idx} m={m} accent={accent} onClick={() => setDetail(m)} />
        ))}
      </div>

      {/* 하단 탭바 */}
      <div style={{
        position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 430, background: "white", borderTop: "1px solid #F0F0F0",
        display: "flex", padding: "8px 0 max(8px, env(safe-area-inset-bottom))",
      }}>
        {TABS.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{
            flex: 1, border: "none", background: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            padding: "6px 0", fontFamily: "inherit",
          }}>
            <span style={{ fontSize: 22, filter: tab === t.key ? "none" : "grayscale(1) opacity(0.5)" }}>{t.icon}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: tab === t.key ? accent : "#B0B8C1" }}>{t.key}</span>
          </button>
        ))}
      </div>

      {/* 랜덤 결과 오버레이 */}
      {(rolling || rollResult) && (
        <div onClick={() => !rolling && setRollResult(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
        }}>
          <div style={{
            background: "white", borderRadius: 24, padding: "36px 28px", width: "100%", maxWidth: 340,
            textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: accent, marginBottom: 14 }}>
              {rolling ? "고르는 중…" : "오늘은 이거 어때요?"}
            </div>
            <div style={{
              fontSize: 26, fontWeight: 800, letterSpacing: -0.5, minHeight: 36,
              transition: "opacity 0.05s", opacity: rolling ? 0.85 : 1,
            }}>
              {rollResult?.name || "…"}
            </div>
            {!rolling && rollResult?.tags?.length > 0 && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginTop: 14 }}>
                {rollResult.tags.map((t) => <Tag key={t} t={t} />)}
              </div>
            )}
            {!rolling && (
              <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
                <button onClick={doRandom} style={{
                  flex: 1, padding: "13px", borderRadius: 14, border: `1.5px solid ${accent}`,
                  background: "white", color: accent, fontWeight: 700, fontSize: 15,
                  cursor: "pointer", fontFamily: "inherit",
                }}>다시</button>
                <button onClick={() => { const r = rollResult; setRollResult(null); setDetail(r); }} style={{
                  flex: 1, padding: "13px", borderRadius: 14, border: "none",
                  background: accent, color: "white", fontWeight: 700, fontSize: 15,
                  cursor: "pointer", fontFamily: "inherit",
                }}>이걸로</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 상세 모달 */}
      {detail && (
        <div onClick={() => setDetail(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 60,
          display: "flex", alignItems: "flex-end", justifyContent: "center",
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: "white", borderRadius: "24px 24px 0 0", padding: "28px 24px 36px",
            width: "100%", maxWidth: 430, animation: "slideUp 0.25s ease",
          }}>
            <div style={{ width: 40, height: 4, background: "#E5E8EB", borderRadius: 2, margin: "0 auto 20px" }} />
            <div style={{
              width: "100%", height: 140, borderRadius: 16, background: "#F7F8FA", marginBottom: 18,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64,
            }}>{menuEmoji(detail)}</div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>{detail.name}</div>
            {detail.tags?.length > 0 && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}>
                {detail.tags.map((t) => <Tag key={t} t={t} />)}
              </div>
            )}
            {detail.ingredients && (
              <div style={{ marginTop: 22 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#8B95A1", marginBottom: 6 }}>
                  {detail.group === "집밥" ? "재료" : "대표 메뉴"}
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.6 }}>{detail.ingredients}</div>
              </div>
            )}
            {detail.link && (
              <a href={detail.link} target="_blank" rel="noopener noreferrer" style={{
                display: "block", marginTop: 22, padding: "15px", borderRadius: 14,
                background: accentSoft, color: accent, fontWeight: 700, fontSize: 15,
                textAlign: "center", textDecoration: "none",
              }}>▶ 레시피 보러 가기</a>
            )}
            {!detail.ingredients && !detail.link && (
              <div style={{ marginTop: 20, fontSize: 14, color: "#8B95A1" }}>
                아직 재료·레시피가 등록되지 않았어요.
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        button:focus-visible { outline: 2px solid ${accent}; outline-offset: 2px; }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
}

function Card({ children, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: "flex", alignItems: "center", background: "white", borderRadius: 18,
      padding: "18px 18px", marginBottom: 10, cursor: "pointer",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)", border: "1px solid #F2F4F6",
    }}>{children}</div>
  );
}

function menuEmoji(m) {
  return CAT_EMOJI[m.cat] || "🍽️";
}

function MenuCard({ m, accent, onClick }) {
  const hasMore = m.ingredients || m.link;
  return (
    <div onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 14,
      background: "white", borderRadius: 18, padding: "14px 16px", marginBottom: 10,
      cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", border: "1px solid #F2F4F6",
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 14, flexShrink: 0, background: "#F7F8FA",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28,
      }}>{menuEmoji(m)}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 16, fontWeight: 700 }}>{m.name}</span>
          {m.link && <span style={{ marginLeft: 8, fontSize: 12, color: accent, fontWeight: 700 }}>▶ 레시피</span>}
        </div>
        {m.tags?.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
            {m.tags.map((t) => <Tag key={t} t={t} />)}
          </div>
        )}
      </div>
      <span style={{ color: "#C5C8CE", fontSize: 18 }}>{hasMore ? "›" : ""}</span>
    </div>
  );
}

function Tag({ t }) {
  const c = TAG_COLORS[t] || { bg: "#EEE", fg: "#666" };
  return (
    <span style={{
      fontSize: 11, fontWeight: 700, padding: "4px 9px", borderRadius: 8,
      background: c.bg, color: c.fg,
    }}>{t}</span>
  );
}

export default MealApp;
