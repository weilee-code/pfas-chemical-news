const facts = [
  ["12 分鐘", "實驗中完成主要分解反應"],
  ["85°C", "相較傳統高溫處理更溫和"],
  [">90%", "模型水樣中的目標物去除率"],
];

export default function Home() {
  return (
    <main>
      <header className="masthead">
        <div className="brand">物質觀察 <span>MOLECULE WATCH</span></div>
        <div className="issue">2026.08.18　TUE　科學・環境</div>
      </header>
      <div className="ticker"><b>模擬新聞</b><span>本頁內容為 AI 創作的示範性報導，研究、數據與人物皆為虛構。</span></div>
      <article>
        <div className="category">環境化學 / 特別報導</div>
        <h1>低溫拆解「永久化學物質」<br />新型催化材料瞄準 PFAS 汙染</h1>
        <p className="dek">研究團隊以光能啟動含鐵催化材料，在溫和條件下切斷最難處理的碳—氟鍵；技術仍待真實水體與大規模驗證。</p>
        <div className="byline"><span>文／林澄　科學記者</span><span>2026 年 8 月 18 日　台北</span></div>
        <section className="hero" aria-label="分子結構概念圖">
          <div className="molecule" aria-hidden="true">
            <i className="atom a1">F</i><i className="atom a2">F</i><i className="atom a3">C</i><i className="atom a4">Fe</i><i className="atom a5">F</i><i className="atom a6">O</i>
            <span className="bond b1"/><span className="bond b2"/><span className="bond b3"/><span className="bond b4"/><span className="bond b5"/>
          </div>
          <div className="heroCaption">概念示意：光照促使催化表面產生活性中心，逐步削弱 PFAS 分子的碳—氟鍵。</div>
        </section>
        <div className="storyGrid">
          <aside>
            <div className="label">實驗速覽</div>
            {facts.map(([n, t]) => <div className="fact" key={n}><strong>{n}</strong><span>{t}</span></div>)}
            <p className="note">＊數據為本模擬報導的情境設定，非真實研究結果。</p>
          </aside>
          <div className="bodyCopy">
            <p className="lead">一杯看似清澈的水，可能藏著難以被自然分解的含氟化合物。虛構的「東海材料化學聯合實驗室」今日發表一項概念性成果：一種可由可見光驅動的多孔鐵催化材料，能在低溫水溶液中拆解部分全氟及多氟烷基物質（PFAS）。</p>
            <p>PFAS 是一大類人工合成化合物，因耐熱、防水與抗油等性質，被廣泛應用於工業與消費產品。其穩定的碳—氟鍵也讓環境處理格外困難，因此常被稱為「永久化學物質」。</p>
            <h2>把最穩定的鍵，變成反應入口</h2>
            <p>團隊設計的材料具有奈米尺度孔洞，能先吸附目標分子；藍光照射後，鐵位點與過氧化物共同形成短暫的活性物種。研究設定顯示，反應在 85°C、12 分鐘後，使模型水樣中一種代表性 PFAS 降低超過九成。</p>
            <blockquote>「去除」不等於「無害化」。真正的關鍵，是確認含氟分子最後變成了什麼。</blockquote>
            <p>團隊表示，下一階段將檢測氟離子平衡、短鏈副產物與催化材料的重複使用能力。外部專家也提醒，真實地下水含有鹽類、天然有機物及多種污染物，表現可能與實驗室純水明顯不同。</p>
            <h2>距離淨水現場，還有三道門檻</h2>
            <p>首先是能耗與藥劑成本；其次是催化劑長期穩定性；最後則是副產物的完整毒理評估。即使概念成立，也必須經過放大試驗、同儕審查與法規程序，才可能進入處理系統。</p>
          </div>
        </div>
        <footer><span>物質觀察・解讀分子如何改變世界</span><span>本內容為虛構示範，請勿作為科學或政策依據。</span></footer>
      </article>
    </main>
  );
}
