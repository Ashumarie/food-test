import React, { useState, useRef, useEffect } from "react";
const MENUS = [
  {
    "name": "낫또",
    "group": "집밥",
    "cat": "아침단품",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "견과류",
    "group": "집밥",
    "cat": "아침단품",
    "tags": [
      "당뇨친화"
    ]
  },
  {
    "name": "연두부",
    "group": "집밥",
    "cat": "아침단품",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "과일 (바나나·사과·망고·블루베리)",
    "group": "집밥",
    "cat": "아침단품",
    "tags": [
      "소화편함"
    ]
  },
  {
    "name": "채소찜 (단호박·양배추)",
    "group": "집밥",
    "cat": "아침단품",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "그릭요거트 + 올리브오일",
    "group": "집밥",
    "cat": "아침단품",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "방울토마토",
    "group": "집밥",
    "cat": "아침단품",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "두유",
    "group": "집밥",
    "cat": "아침단품",
    "tags": [
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "저지방 우유",
    "group": "집밥",
    "cat": "아침단품",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "아보카도",
    "group": "집밥",
    "cat": "아침단품",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "베이컨 치즈 샌드위치",
    "group": "집밥",
    "cat": "아침요리",
    "tags": [
      "단백질"
    ],
    "ingredients": "베이컨, 치즈, 계란 2개, 머스타드, 케첩",
    "link": "https://www.youtube.com/shorts/6X8Zg7Qwm2Q"
  },
  {
    "name": "참치/닭가슴살 샌드위치",
    "group": "집밥",
    "cat": "아침요리",
    "tags": [
      "단백질"
    ],
    "ingredients": "양상추, 토마토, 참치, 닭가슴살, 식빵, 오이, 머스타드, 저지방 마요네즈"
  },
  {
    "name": "계란 토마토 전",
    "group": "집밥",
    "cat": "아침요리",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ],
    "ingredients": "계란 4개, 올리브오일, (방울)토마토 1개, 모짜렐라 치즈",
    "link": "https://www.youtube.com/shorts/MPfr2DnpcNs"
  },
  {
    "name": "달걀 샐러드",
    "group": "집밥",
    "cat": "아침요리",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ],
    "ingredients": "쪽파(대파), 당근, 커리파우더 1큰술, 소금, 계란 4개, 후추, 올리브오일, 홀그레인 머스타드 1작은술",
    "link": "https://www.youtube.com/watch?v=dy4FSxfxGQo"
  },
  {
    "name": "토마토달걀커리볶음",
    "group": "집밥",
    "cat": "아침요리",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ],
    "ingredients": "토마토 3개, 유정란 3개, 커리 파우더 1/2 큰술, 다진마늘 1/2 큰술, 올리브오일 1큰술, 대파 또는 쪽파",
    "link": "https://www.youtube.com/shorts/Z4xyWdEG_xU"
  },
  {
    "name": "팽이버섯 양파 볶음",
    "group": "집밥",
    "cat": "아침요리",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "어묵볶음",
    "group": "집밥",
    "cat": "반찬",
    "tags": []
  },
  {
    "name": "메추리알장조림",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "호박볶음",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "다진불고기",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "미나리무침",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "부추무침",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "깻잎무침",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "콩나물무침",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "고사리나물",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "도라지무침",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "무생채",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "시금치나물",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "말린오징어무침",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "자극적"
    ]
  },
  {
    "name": "오이무침",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "김치",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "자극적"
    ]
  },
  {
    "name": "멸치볶음",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "다시마 절임",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "장조림",
    "group": "집밥",
    "cat": "반찬",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "미역국",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "된장찌개",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "청국장",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "소고기국",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "김치찌개",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "자극적"
    ]
  },
  {
    "name": "(떡)만두국",
    "group": "집밥",
    "cat": "국찌개",
    "tags": []
  },
  {
    "name": "어묵탕",
    "group": "집밥",
    "cat": "국찌개",
    "tags": []
  },
  {
    "name": "북엇국",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "황태해장국",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "콩나물국",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "소화편함",
      "당뇨친화"
    ]
  },
  {
    "name": "순두부찌개",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "소화편함",
      "단백질"
    ]
  },
  {
    "name": "고추장애호박찌개",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "자극적"
    ]
  },
  {
    "name": "꽁치/고등어찌개",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "자극적",
      "단백질"
    ]
  },
  {
    "name": "비지찌개",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "닭개장",
    "group": "집밥",
    "cat": "국찌개",
    "tags": [
      "자극적",
      "단백질"
    ]
  },
  {
    "name": "훈제오리",
    "group": "집밥",
    "cat": "고기반찬",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "불고기",
    "group": "집밥",
    "cat": "고기반찬",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "제육볶음",
    "group": "집밥",
    "cat": "고기반찬",
    "tags": [
      "자극적",
      "단백질"
    ]
  },
  {
    "name": "돼지고기 김치볶음",
    "group": "집밥",
    "cat": "고기반찬",
    "tags": [
      "자극적",
      "단백질"
    ]
  },
  {
    "name": "목살/삼겹살 구이",
    "group": "집밥",
    "cat": "고기반찬",
    "tags": [
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "김치찜",
    "group": "집밥",
    "cat": "고기반찬",
    "tags": [
      "자극적"
    ]
  },
  {
    "name": "수육",
    "group": "집밥",
    "cat": "고기반찬",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "닭도리탕",
    "group": "집밥",
    "cat": "고기반찬",
    "tags": [
      "자극적",
      "단백질"
    ]
  },
  {
    "name": "대패삼겹살 숙주볶음",
    "group": "집밥",
    "cat": "고기반찬",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "닭봉조림",
    "group": "집밥",
    "cat": "고기반찬",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "계란말이",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "군만두",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": []
  },
  {
    "name": "메밀전병",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": []
  },
  {
    "name": "소시지볶음",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": []
  },
  {
    "name": "잡채",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": []
  },
  {
    "name": "두부조림",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "두부부침",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "카레",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": []
  },
  {
    "name": "짜장",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": [
      "자극적"
    ]
  },
  {
    "name": "계란찜",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "유부초밥/주먹밥",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": []
  },
  {
    "name": "김치볶음밥",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": [
      "자극적"
    ]
  },
  {
    "name": "낙지덮밥",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": [
      "자극적"
    ]
  },
  {
    "name": "스키야끼",
    "group": "집밥",
    "cat": "일품메뉴",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "추어탕",
    "group": "배달",
    "cat": "배달",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "갈비탕/갈비찜",
    "group": "배달",
    "cat": "배달",
    "tags": [
      "단백질"
    ]
  },
  {
    "name": "포케",
    "group": "배달",
    "cat": "배달",
    "tags": [
      "소화편함",
      "당뇨친화",
      "단백질"
    ]
  },
  {
    "name": "부대찌개",
    "group": "배달",
    "cat": "배달",
    "tags": [
      "자극적"
    ]
  },
  {
    "name": "카레",
    "group": "배달",
    "cat": "배달",
    "tags": []
  },
  {
    "name": "키쿠카와",
    "group": "외식",
    "cat": "식당",
    "tags": [
      "단백질"
    ],
    "ingredients": "장어구이"
  },
  {
    "name": "미가훠궈",
    "group": "외식",
    "cat": "식당",
    "tags": [
      "자극적"
    ],
    "ingredients": "중식, 볶음밥"
  },
  {
    "name": "산들해",
    "group": "외식",
    "cat": "식당",
    "ingredients": "한식 코스"
  },
  {
    "name": "몬안베띠",
    "group": "외식",
    "cat": "식당",
    "ingredients": "베트남 음식"
  }
];

// ─────────────────────────────────────────────────────────────
// 메뉴 데이터는 menus.json에 있습니다 (노션 "메뉴 데이터베이스" 표의 스냅샷).
// 노션에서 표를 수정한 뒤 "업데이트해줘"라고 하면 이 파일을 새로 만들어 드려요.
// ─────────────────────────────────────────────────────────────

// 집밥 카테고리 순서 + 아이콘
const HOME_CATS = [
  { key: "아침", icon: "🌅", children: ["아침단품", "아침요리"] },
  { key: "반찬", icon: "🥗" },
  { key: "국찌개", icon: "🍲" },
  { key: "고기반찬", icon: "🥩" },
  { key: "일품메뉴", icon: "🍱" },
];

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
  const [path, setPath] = useState([]); // 집밥 내 드릴다운 경로: [] | ["아침"] | ["반찬"] ...
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

  // 현재 화면에 보여줄 항목 계산
  function currentView() {
    if (tab !== "집밥") {
      return { type: "menus", items: tabMenus(tab) };
    }
    if (path.length === 0) {
      return { type: "cats", items: HOME_CATS };
    }
    const top = path[0];
    const catDef = HOME_CATS.find((c) => c.key === top);
    if (catDef?.children && path.length === 1) {
      return { type: "subcats", items: catDef.children, parent: top };
    }
    // 실제 메뉴
    const targetCat = path[path.length - 1] === top ? top : path[path.length - 1];
    if (catDef?.children) {
      const sub = path[1];
      return { type: "menus", items: MENUS.filter((m) => m.group === "집밥" && m.cat === sub) };
    }
    return { type: "menus", items: MENUS.filter((m) => m.group === "집밥" && m.cat === top) };
  }

  const view = currentView();

  // 파칭코 랜덤
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
        {tab === "집밥" && path.length > 0 && (
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
          {tab === "집밥" && path.length === 0 && "밥 뭐하지?"}
          {tab === "집밥" && path.length === 1 && path[0] === "아침" && "아침, 어떻게?"}
          {tab === "집밥" && path.length >= 1 && path[0] !== "아침" && path[0]}
          {tab === "집밥" && path.length === 2 && (SUB_LABEL[path[1]] || path[1])}
          {tab === "배달" && "뭐 시키지?"}
          {tab === "외식" && "어디 가지?"}
        </div>
        {tab === "집밥" && path.length > 0 && (
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
          <Card key={s} onClick={() => setPath([view.parent, s])}>
            <span style={{ fontSize: 17, fontWeight: 700 }}>{SUB_LABEL[s] || s}</span>
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
                  {detail.group === "외식" ? "대표 메뉴" : "재료"}
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

const CAT_EMOJI = {
  아침단품: "🥑", 아침요리: "🍳", 반찬: "🥬", 국찌개: "🍲",
  고기반찬: "🥩", 일품메뉴: "🍱", 배달: "🛵", 식당: "🍴",
};

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
