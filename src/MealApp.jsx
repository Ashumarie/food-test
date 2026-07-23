import React, { useState, useRef, useEffect } from "react";

const MENUS = [
  // ───────── 집밥 · 소화 · 간단히(단품) ─────────
  { "name": "샐러리", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함", "당뇨친화"] },
  { "name": "견과류 (믹스·호두)", "group": "집밥", "cat": "간단히(단품)", "tags": ["당뇨친화"] },
  { "name": "연두부", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "과일 (바나나·사과·망고·블루베리)", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함"] },
  { "name": "채소찜 (단호박·양배추)", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함", "당뇨친화"] },
  { "name": "그릭요거트 + 올리브오일", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "방울토마토", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함", "당뇨친화"] },
  { "name": "두유", "group": "집밥", "cat": "간단히(단품)", "tags": ["당뇨친화", "단백질"] },
  { "name": "단백질 음료", "group": "집밥", "cat": "간단히(단품)", "tags": ["단백질"] },
  { "name": "아보카도", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함", "당뇨친화"] },
  { "name": "파프리카", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함", "당뇨친화"] },
  { "name": "낫또", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "땅콩버터", "group": "집밥", "cat": "간단히(단품)", "tags": ["단백질"] },
  { "name": "쌀과자", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함"] },
  { "name": "블루베리요거트", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함", "단백질"] },
  { "name": "식빵", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함"] },
  { "name": "감자", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함"] },
  { "name": "가자미", "group": "집밥", "cat": "간단히(단품)", "tags": ["소화편함", "당뇨친화", "단백질"] },

  // ───────── 집밥 · 소화 · 요리 ─────────
  { "name": "그릭요거트 잼 샌드위치", "group": "집밥", "cat": "요리", "tags": ["단백질"] },
  { "name": "팽이버섯 양파 볶음", "group": "집밥", "cat": "요리", "tags": ["소화편함", "당뇨친화"] },
  { "name": "대구탕", "group": "집밥", "cat": "요리", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "된장찌개", "group": "집밥", "cat": "요리", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "소고기국", "group": "집밥", "cat": "요리", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "추어탕", "group": "집밥", "cat": "요리", "tags": ["소화편함", "단백질"] },
  { "name": "야채죽", "group": "집밥", "cat": "요리", "tags": ["소화편함"] },
  { "name": "두부조림", "group": "집밥", "cat": "요리", "tags": ["소화편함", "당뇨친화", "단백질"] },
  { "name": "토마토 계란스크램블", "group": "집밥", "cat": "요리", "tags": ["소화편함", "당뇨친화", "단백질"] },

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
  { "name": "부찌남", "group": "배달", "cat": "한식", "tags": [], "ingredients": "부대찌개" },
  { "name": "영일만 막회물회", "group": "배달", "cat": "한식", "tags": [], "ingredients": "물회, 회덮밥", "link": "https://web.coupangeats.com/share?storeId=1008286&dishId&key=c20b9551-747f-410f-a49a-1cca0fff90f9" },
  { "name": "순남시래기", "group": "배달", "cat": "한식", "tags": [], "ingredients": "시래기국, 수육정식", "link": "https://web.coupangeats.com/share?storeId=178356&dishId&key=556db40f-1b7f-4bc5-a57d-1e8d7e59b115" },
  { "name": "산들해", "group": "배달", "cat": "한식", "tags": [], "ingredients": "한식 코스" },

  // ───────── 배달 · 양식/중식 ─────────
  { "name": "잭슨피자", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "피자" },
  { "name": "60계 치킨", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "치킨" },
  { "name": "뉴욕스테이크하우스", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "함박스테이크, “투 스트라이크입니다”" },
  { "name": "브루클린 버거", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "수제버거" },
  { "name": "차알", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "중식" },
  { "name": "피에프창", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "중식, 볶음밥" },
  { "name": "사현스낵", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "라오깐마볶음밥, 완탕", "link": "https://web.coupangeats.com/share?storeId=171456&dishId&key=eed1a154-d442-43da-a776-d91367ce90b4" },
  { "name": "피그닉", "group": "배달", "cat": "양식/중식", "tags": [], "ingredients": "포크 라이스 볼, 바베큐", "link": "https://web.coupangeats.com/share?storeId=163017&dishId&key=4e30a410-a8ac-4a50-a746-1b3a7b5aad37" },

  // ───────── 배달 · 샌드위치/포케 ─────────
  { "name": "훅트포케", "group": "배달", "cat": "샌드위치/포케", "tags": [], "ingredients": "포케" },

  // ───────── 배달 · 일식 ─────────
  { "name": "쿠마카레야", "group": "배달", "cat": "일식", "tags": [], "ingredients": "버섯크림카레" },
  { "name": "카이센동 우니도", "group": "배달", "cat": "일식", "tags": [], "ingredients": "카이센동, 사케동" },
  { "name": "최스시", "group": "배달", "cat": "일식", "tags": [], "ingredients": "회 덮밥, 초밥, 알탕", "link": "https://web.coupangeats.com/share?storeId=430015&dishId&key=a36f9cee-50b7-4c16-a7be-d03952cebd61" },
  { "name": "스시범", "group": "배달", "cat": "일식", "tags": [], "ingredients": "스시", "link": "https://web.coupangeats.com/share?storeId=630179&dishId&key=943438f3-af79-4ee8-963c-3806087e7502" },

  // ───────── 배달 · 기타 ─────────
  { "name": "레몬그라스 타이", "group": "배달", "cat": "기타", "tags": [], "ingredients": "팟타이, 파인애플볶음밥" },
  { "name": "반포식스", "group": "배달", "cat": "기타", "tags": [], "ingredients": "베트남 음식, “투 스트라이크입니다”" },
  { "name": "꿍탈레", "group": "배달", "cat": "기타", "tags": [], "ingredients": "태국음식, 팟타이", "link": "https://web.coupangeats.com/share?storeId=100261&dishId&key=ee9b9cd9-d443-4b46-b87d-7a07631e9216" },
  { "name": "깔리", "group": "배달", "cat": "기타", "tags": [], "ingredients": "인도 커리, 리뷰 많음", "link": "https://web.coupangeats.com/share?storeId=173219&dishId&key=2cf0fdd5-764b-436f-9c84-7647403ffcef" },
  { "name": "인딕슬로우", "group": "배달", "cat": "기타", "tags": [], "ingredients": "인도 커리", "link": "https://web.coupangeats.com/share?storeId=105144&dishId&key=b845e8da-8d3e-4bbf-8b05-962a73e20004" },

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
  { "name": "무샤", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "이자카야" },
  { "name": "화니", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "고등어구이, 비빔밥" },
  { "name": "야미도", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "일식집, 알밥", "link": "https://naver.me/FKxIzJRf" },
  { "name": "밀화", "group": "외식", "cat": "집 근처", "tags": [], "ingredients": "쌈밥정식, 불고기전골", "link": "https://kko.to/SwFYSt0GVh" },

  // ───────── 외식 · 차 타고 ─────────
  { "name": "은희네해장국", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "선지해장국" },
  { "name": "담원순대", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "강남역 5대 순대국밥" },
  { "name": "농민백암순대", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "강남역 1등 순대국밥" },
  { "name": "밀란", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "모든 메뉴가 다 맛있음" },
  { "name": "밀숲", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "육개장 칼국수/수제비" },
  { "name": "에베레스트", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "카레, 챠오미엔" },
  { "name": "미우야", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "우동, 소바" },
  { "name": "늘푸른목장", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "소고기" },
  { "name": "티티그릴", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "태국 음식, 뿌빳퐁커리", "link": "https://kko.to/daMpSyR5jq" },
  { "name": "옥된장", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "교대, 된장 전골", "link": "https://kko.to/nzCV2w8TMm" },
  { "name": "칠백한우국밥", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "한우국밥, 육회비빔밥", "link": "https://kko.to/AgO8JU6zQT" },
  { "name": "일석삼조버섯매운탕", "group": "외식", "cat": "차 타고", "tags": [], "ingredients": "소고기샤브버섯 매운탕", "link": "https://kko.to/mrKPJ0oAn0" }
];

// ─────────────────────────────────────────────────────────────
// 메뉴 데이터의 원본은 노션 "🍽️ 우리집 식단 관리" 페이지의 토글목록입니다.
// 노션 토글을 수정한 뒤 "업데이트해줘"라고 하면 위 MENUS 배열을 새로 만들어 드려요.
// ─────────────────────────────────────────────────────────────

const HOME_CATS = [
  {
    key: "소화", icon: "胃", children: [
      { key: "간단히(단품)", label: "간단히(단품)", icon: "🍙" },
      { key: "요리", label: "요리", icon: "🍳" },
    ],
  },
  { key: "반찬", icon: "🥗" },
  { key: "국찌개", icon: "🍲" },
  { key: "고기반찬", icon: "🥩" },
  { key: "일품메뉴", icon: "🍱" },
];

const DELIVERY_CATS = [
  { key: "한식", icon: "🥘" },
  { key: "양식/중식", icon: "🍝" },
  { key: "샌드위치/포케", icon: "🥪" },
  { key: "일식", icon: "🍣" },
  { key: "기타", icon: "🥙" },
];

const DINING_CATS = [
  { key: "집 근처", icon: "🚶" },
  { key: "차 타고", icon: "🚗" },
];

const GROUP_CATS = { 집밥: HOME_CATS, 배달: DELIVERY_CATS, 외식: DINING_CATS };

const CAT_EMOJI = {
  "간단히(단품)": "🍙", "요리": "🍳", 반찬: "🥗", 국찌개: "🍲", 고기반찬: "🥩", 일품메뉴: "🍱",
  한식: "🥘", "양식/중식": "🍝", "샌드위치/포케": "🥪", 일식: "🍣", 기타: "🥙",
  "집 근처": "🚶", "차 타고": "🚗",
};

const SUB_LABEL = { "간단히(단품)": "간단히(단품)", 요리: "요리" };

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
  const [path, setPath] = useState([]);
  const [detail, setDetail] = useState(null);
  const [rolling, setRolling] = useState(false);
  const [rollResult, setRollResult] = useState(null);
  const [slotSequence, setSlotSequence] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotDuration, setSlotDuration] = useState(60);
  const [backToast, setBackToast] = useState(false);

  // 탭 전환 시 경로 초기화
  useEffect(() => { setPath([]); }, [tab]);

  const accent = "#FF6B35";
  const accentSoft = "#FFF1EB";

  // popstate 핸들러 안에서 최신 state를 참조하기 위한 ref
  const stateRef = useRef({});
  stateRef.current = { detail, rolling, rollResult, path, tab };
  const randomRunRef = useRef(0);
  const backWarningRef = useRef(false);
  const backToastTimer = useRef(null);

  // 브라우저 뒤로가기 인터셉트 (mount 시 한 번만)
  useEffect(() => {
    window.history.pushState({ app: true }, "");

    function onPopState() {
      const { detail, rolling, rollResult, path: currentPath } = stateRef.current;

      if (detail) {
        setDetail(null);
        // 히스토리 엔트리는 팝업 열 때 push된 것이 소비됨 → 재push 불필요
        return;
      }
      if (rolling || rollResult) {
        setRolling(false);
        setRollResult(null);
        return;
      }
      if (currentPath.length > 0) {
        setPath((p) => p.slice(0, -1));
        return;
      }
      // 최상위: 첫 번째 → 경고 토스트 + 1회용 엔트리 push, 두 번째 → 실제 종료
      if (!backWarningRef.current) {
        backWarningRef.current = true;
        setBackToast(true);
        if (backToastTimer.current) clearTimeout(backToastTimer.current);
        backToastTimer.current = setTimeout(() => {
          backWarningRef.current = false;
          setBackToast(false);
        }, 2000);
        window.history.pushState({ app: true }, ""); // 경고 후 한 번 더 잡기 위한 엔트리
      }
      // backWarning true인 상태 → push 안 함 → 브라우저가 실제로 나감
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function tabMenus(t) {
    return MENUS.filter((m) => m.group === t);
  }

  function currentView() {
    const cats = GROUP_CATS[tab];
    if (path.length === 0) return { type: "cats", items: cats };
    const top = path[0];
    const catDef = cats.find((c) => c.key === top);
    if (catDef?.children && path.length === 1) {
      return { type: "subcats", items: catDef.children, parent: top };
    }
    const leaf = path[path.length - 1];
    return { type: "menus", items: MENUS.filter((m) => m.group === tab && m.cat === leaf) };
  }

  const view = currentView();

  function headerTitle() {
    if (path.length === 0) {
      return tab === "집밥" ? "밥 뭐하지?" : tab === "배달" ? "뭐 시키지?" : "어디 가지?";
    }
    if (tab === "집밥" && path[0] === "소화" && path.length === 1) return "소화 잘 되는 음식";
    const last = path[path.length - 1];
    return SUB_LABEL[last] || last;
  }

  // 현재 화면 기준 랜덤 후보 풀
  function randomPool() {
    if (path.length === 0) return tabMenus(tab);
    const cats = GROUP_CATS[tab];
    const top = path[0];
    const catDef = cats.find((c) => c.key === top);
    // 소화처럼 children이 있는 중간 단계: 하위 전체
    if (catDef?.children && path.length === 1) {
      return catDef.children.flatMap((child) =>
        MENUS.filter((m) => m.group === tab && m.cat === child.key)
      );
    }
    const leaf = path[path.length - 1];
    return MENUS.filter((m) => m.group === tab && m.cat === leaf);
  }

  // 랜덤 버튼 텍스트
  function randomLabel() {
    if (path.length === 0) return `${tab} 랜덤으로 정하기`;
    const cats = GROUP_CATS[tab];
    const top = path[0];
    const catDef = cats.find((c) => c.key === top);
    if (catDef?.children && path.length === 1) {
      return top === "소화" ? "랜덤으로 정하기" : `${top} 랜덤으로 정하기`;
    }
    const leaf = path[path.length - 1];
    const label = SUB_LABEL[leaf] || leaf;
    return `${label} 랜덤으로 정하기`;
  }

  function doRandom() {
    const pool = randomPool();
    if (pool.length === 0) return;
    const isRetry = !!rollResult; // 다시 누른 경우 → 히스토리 엔트리 재사용
    const runId = randomRunRef.current + 1;
    randomRunRef.current = runId;
    const final = pool[Math.floor(Math.random() * pool.length)];
    const spinCount = 48 + Math.floor(Math.random() * 14);
    const sequence = Array.from({ length: spinCount }, () => pool[Math.floor(Math.random() * pool.length)]);
    sequence.push(final);

    setRolling(true);
    setRollResult(null);
    setSlotSequence(sequence);
    setSlotIndex(0);
    setSlotDuration(55);

    let i = 0;
    function step() {
      if (randomRunRef.current !== runId) return;
      i += 1;
      const progress = i / (sequence.length - 1);
      const duration = 44 + Math.pow(progress, 2.15) * 260;
      setSlotDuration(duration);
      setSlotIndex(i);
      setRollResult(sequence[i]);

      if (i >= sequence.length - 1) {
        setTimeout(() => {
          if (randomRunRef.current !== runId) return;
          setSlotDuration(0);
          setSlotIndex(sequence.length - 1);
          setRollResult(final);
          setRolling(false);
          if (!isRetry) window.history.pushState({ app: true }, ""); // 첫 결과에만 push
        }, duration + 90);
        return;
      }

      setTimeout(step, duration * 0.92);
    }

    setTimeout(step, 120);
  }

  function resetRandom() {
    randomRunRef.current += 1;
    setRolling(false);
    setRollResult(null);
    setSlotSequence([]);
    setSlotIndex(0);
    setSlotDuration(60);
  }

  function selectRandomResult() {
    const r = rollResult;
    resetRandom();
    setDetail(r); // 엔트리 재사용, push 없음
  }

  function closeRandomOverlay() {
    if (!rolling) resetRandom();
  }

  function goBack() {
    window.history.back(); // popstate를 통해 처리 (하드웨어 뒤로가기와 동일 경로)
  }

  // 링크 버튼 문구: 집밥은 레시피, 배달/외식은 바로가기
  function linkLabel(m) {
    if (m.group === "집밥") return "▶ 레시피 보러 가기";
    if (m.group === "배달") return "▶ 쿠팡이츠에서 확인하기";
    return "▶ 지도에서 확인하기";
  }

  function linkBadge(m) {
    if (m.group === "집밥") return "▶ 레시피";
    if (m.group === "배달") return "▶ 쿠팡이츠";
    return "▶ 지도";
  }

  return (
    <div style={{
      maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#FAFAFA",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      display: "flex", flexDirection: "column", position: "relative", color: "#191F28",
    }}>
      {/* 상단 헤더 */}
      <div style={{ padding: "22px 20px 16px" }}>
        {path.length === 0 ? (
          <div style={{ fontSize: 15, fontWeight: 600, color: "#B0B8C1", letterSpacing: -0.2, marginBottom: 14 }}>
            오늘뭐먹지
          </div>
        ) : (
          <button onClick={goBack} style={{
            border: "none", background: "none", fontSize: 15, color: "#8B95A1",
            padding: 0, marginBottom: 14, cursor: "pointer", fontWeight: 600,
          }}>← 뒤로</button>
        )}
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <div style={{ fontSize: 27, fontWeight: 800, letterSpacing: -0.6 }}>
            {headerTitle()}
          </div>
          {view.type === "menus" && (
            <div style={{ fontSize: 14, color: "#8B95A1" }}>{view.items.length}개</div>
          )}
        </div>
      </div>

      {/* 랜덤 버튼 */}
      <div style={{ padding: "4px 20px 4px" }}>
        <button onClick={doRandom} disabled={rolling} style={{
          width: "100%", padding: "15px", borderRadius: 16, border: "none",
          background: accent, color: "white", fontSize: 16, fontWeight: 700,
          cursor: rolling ? "default" : "pointer", fontFamily: "inherit",
          boxShadow: "0 4px 14px rgba(255,107,53,0.3)", opacity: rolling ? 0.85 : 1,
        }}>
          🎰 {rolling ? "고르는 중…" : randomLabel()}
        </button>
      </div>

      {/* 본문 */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px 90px" }}>
        {view.type === "cats" && view.items.map((c) => (
          <Card key={c.key} onClick={() => { setPath([c.key]); window.history.pushState({ app: true }, ""); }}>
            <span style={{ fontSize: 26, marginRight: 14 }}>{c.icon}</span>
            <span style={{ fontSize: 17, fontWeight: 700 }}>{c.key}</span>
            <span style={{ marginLeft: "auto", color: "#C5C8CE", fontSize: 20 }}>›</span>
          </Card>
        ))}

        {view.type === "subcats" && view.items.map((s) => (
          <Card key={s.key} onClick={() => { setPath([view.parent, s.key]); window.history.pushState({ app: true }, ""); }}>
            <span style={{ fontSize: 26, marginRight: 14 }}>{s.icon}</span>
            <span style={{ fontSize: 17, fontWeight: 700 }}>{s.label || s.key}</span>
            <span style={{ marginLeft: "auto", color: "#C5C8CE", fontSize: 20 }}>›</span>
          </Card>
        ))}

        {view.type === "menus" && view.items.map((m, idx) => (
          <MenuCard key={idx} m={m} accent={accent} onClick={() => { setDetail(m); window.history.pushState({ app: true }, ""); }} linkBadge={linkBadge} />
        ))}
      </div>

      {/* 하단 탭바 */}
      <div style={{
        position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 430, background: "white", borderTop: "1px solid #F0F0F0",
        display: "flex", padding: "8px 0 max(8px, env(safe-area-inset-bottom))",
      }}>
        {TABS.map((t) => (
          <button key={t.key} onClick={() => { setTab(t.key); setPath([]); setDetail(null); resetRandom(); }} style={{
            flex: 1, border: "none", background: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            padding: "6px 0", fontFamily: "inherit",
          }}>
            <span style={{ fontSize: 22, filter: tab === t.key ? "none" : "grayscale(1) opacity(0.5)" }}>{t.icon}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: tab === t.key ? accent : "#B0B8C1" }}>{t.key}</span>
          </button>
        ))}
      </div>

      {/* 뒤로가기 경고 토스트 */}
      {backToast && (
        <div style={{
          position: "fixed", bottom: 80, left: "50%", transform: "translateX(-50%)",
          background: "rgba(25,31,40,0.88)", color: "white", padding: "12px 22px",
          borderRadius: 12, fontSize: 14, fontWeight: 600, zIndex: 100,
          whiteSpace: "nowrap", pointerEvents: "none",
        }}>
          한 번 더 누르면 앱이 꺼집니다
        </div>
      )}

      {/* 랜덤 결과 오버레이 */}
      {(rolling || rollResult) && (
        <div onClick={closeRandomOverlay} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: "white", borderRadius: 24, padding: "36px 28px", width: "100%", maxWidth: 340,
            textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: accent, marginBottom: 14 }}>
              {rolling ? "뭐가 나올까?" : "오늘은 이거 어때요?"}
            </div>
            <SlotMachine
              sequence={slotSequence}
              index={slotIndex}
              duration={slotDuration}
              rolling={rolling}
              accent={accent}
            />
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
                <button onClick={selectRandomResult} style={{
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
              }}>{linkLabel(detail)}</a>
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

function SlotMachine({ sequence, index, duration, rolling, accent }) {
  const rowHeight = 64;
  const items = sequence.length > 0 ? sequence : [{ name: "…" }];
  const safeIndex = Math.min(index, items.length - 1);

  return (
    <div style={{
      borderRadius: 20,
      padding: 6,
      background: "#FFF7F3",
      border: "1px solid #FFE0D2",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85)",
    }}>
      <div style={{
        position: "relative",
        height: rowHeight,
        overflow: "hidden",
        borderRadius: 16,
        background: "white",
        boxShadow: "inset 0 8px 20px rgba(25,31,40,0.06), inset 0 -8px 20px rgba(25,31,40,0.04)",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.20) 24%, rgba(255,255,255,0) 48%, rgba(255,255,255,0.20) 76%, rgba(255,255,255,0.96) 100%)",
        }} />
        <div style={{
          position: "absolute",
          left: 14,
          right: 14,
          top: "50%",
          height: 1,
          transform: "translateY(-50%)",
          background: "linear-gradient(90deg, rgba(255,107,53,0), rgba(255,107,53,0.28), rgba(255,107,53,0))",
          zIndex: 3,
          pointerEvents: "none",
        }} />
        <div style={{
          transform: `translateY(-${safeIndex * rowHeight}px)`,
          transition: duration > 0 ? `transform ${duration}ms cubic-bezier(0.22, 0.72, 0.18, 1)` : "none",
        }}>
          {items.map((item, i) => (
            <div key={`${item.name}-${i}`} style={{
              height: rowHeight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 14px",
              color: i === safeIndex && !rolling ? accent : "#191F28",
              fontSize: i === safeIndex && !rolling ? 25 : 23,
              fontWeight: 850,
              letterSpacing: -0.7,
              lineHeight: 1.15,
              wordBreak: "keep-all",
              textAlign: "center",
              textShadow: i === safeIndex && !rolling ? "0 4px 18px rgba(255,107,53,0.22)" : "none",
            }}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuCard({ m, accent, onClick, linkBadge }) {
  const hasMore = m.ingredients || m.link;
  return (
    <div onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 14,
      background: "white", borderRadius: 18, padding: "14px 16px", marginBottom: 10,
      cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", border: "1px solid #F2F4F6",
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 16, fontWeight: 700 }}>{m.name}</span>
          {m.link && <span style={{ marginLeft: 8, fontSize: 12, color: accent, fontWeight: 700 }}>{linkBadge(m)}</span>}
        </div>
        {m.group === "집밥" ? (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8, minHeight: 22 }}>
            {m.tags?.map((t) => <Tag key={t} t={t} />)}
          </div>
        ) : (
          m.tags?.length > 0 && (
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
              {m.tags.map((t) => <Tag key={t} t={t} />)}
            </div>
          )
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
