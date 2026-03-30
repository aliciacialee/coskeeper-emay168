/**
 * CosKeeper — 成分紅綠燈資料庫 v2.1
 *
 * 更新：laser 欄位細分為三種光頭
 *   flattop    → 平頂光束皮秒
 *   liob       → 蜂巢皮秒 LIOB
 *   fractional → 點陣皮秒
 *   peel       → 化學換膚
 *   hydra      → 水飛梭
 *
 * lights 值：'safe' | 'caution' | 'danger'
 * timing：各治療可導入的時機（文字說明）
 *
 * 分組：
 *   GROUP A — 全綠燈：五種治療皆可立即使用
 *   GROUP B — 差異燈號：治療間燈號不同（最有臨床價值）
 *   GROUP C — 條件綠燈：皆需等待，但等待期長短不同
 *   GROUP D — 全紅燈：五種治療均應禁用
 */

const ingredients = [

  // ================================================================
  // GROUP A — 全綠燈
  // ================================================================

  {
    id: 'hyaluronic-acid',
    name: '玻尿酸',
    nameEn: 'Hyaluronic Acid (Sodium Hyaluronate)',
    group: 'A',
    groupLabel: '術後立即可用',
    lights: {
      flattop:    'safe',
      liob:       'safe',
      fractional: 'safe',
      peel:       'safe',
      hydra:      'safe',
    },
    timing: {
      flattop:    'Day 1 起',
      liob:       'Day 1 起',
      fractional: 'Day 1 起（診所藥膏允許後）',
      peel:       'Day 1 起',
      hydra:      'Day 1 起',
    },
    why: '純保水分子，不與皮膚產生化學反應，術後首選保濕成分。',
    mechanism: '物理性吸附水分，無促代謝/促發炎機轉，屏障破損下仍安全。',
    note: '建議選大分子（>1000kDa）或多分子量複合型。點陣皮秒前兩天依診所指示，確認可自行使用後再補充。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'ceramide',
    name: '神經醯胺',
    nameEn: 'Ceramide (NP, AP, EOP, etc.)',
    group: 'A',
    groupLabel: '術後立即可用',
    lights: {
      flattop:    'safe',
      liob:       'safe',
      fractional: 'safe',
      peel:       'safe',
      hydra:      'safe',
    },
    timing: {
      flattop:    'Day 1 起',
      liob:       'Day 1 起',
      fractional: 'Day 1 起（診所藥膏允許後）',
      peel:       'Day 1 起',
      hydra:      'Day 1 起',
    },
    why: '皮膚屏障主要脂質成分，術後補充等於直接提供修復原料。',
    mechanism: '直接嵌入角質層脂質雙層，加速屏障重建，無任何刺激機轉。',
    note: '搭配膽固醇（Cholesterol）與脂肪酸（Fatty Acid）的三合一配方，屏障修復效率最高。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'centella',
    name: '積雪草萃取',
    nameEn: 'Centella Asiatica Extract (CICA)',
    group: 'A',
    groupLabel: '術後立即可用',
    lights: {
      flattop:    'safe',
      liob:       'safe',
      fractional: 'safe',
      peel:       'safe',
      hydra:      'safe',
    },
    timing: {
      flattop:    'Day 1 起',
      liob:       'Day 1 起',
      fractional: 'Day 1 起',
      peel:       'Day 1 起',
      hydra:      'Day 1 起',
    },
    why: '抗發炎與促進膠原合成雙重作用，術後黃金成分。',
    mechanism: '抑制 NF-κB 發炎路徑，刺激纖維母細胞合成膠原；無酸性、無刺激性。',
    note: '注意辨別純萃取物（安全）與含酒精溶劑的稀釋配方（需確認基劑）。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'panthenol',
    name: '泛醇（維生素B5）',
    nameEn: 'Panthenol / D-Panthenol',
    group: 'A',
    groupLabel: '術後立即可用',
    lights: {
      flattop:    'safe',
      liob:       'safe',
      fractional: 'safe',
      peel:       'safe',
      hydra:      'safe',
    },
    timing: {
      flattop:    'Day 1 起',
      liob:       'Day 1 起',
      fractional: 'Day 1 起',
      peel:       'Day 1 起',
      hydra:      'Day 1 起',
    },
    why: '保濕、修護、舒緩三效合一，在皮膚內轉化為泛酸後參與細胞修復代謝。',
    mechanism: '轉化為泛酸後協助上皮細胞能量代謝與修復，無刺激機轉。',
    note: '濃度建議 1–5%，術後選中低濃度配方。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'allantoin',
    name: '尿囊素',
    nameEn: 'Allantoin',
    group: 'A',
    groupLabel: '術後立即可用',
    lights: {
      flattop:    'safe',
      liob:       'safe',
      fractional: 'safe',
      peel:       'safe',
      hydra:      'safe',
    },
    timing: {
      flattop:    'Day 1 起',
      liob:       'Day 1 起',
      fractional: 'Day 1 起',
      peel:       'Day 1 起',
      hydra:      'Day 1 起',
    },
    why: '促進細胞增殖與修復，常見於術後修護霜配方。',
    mechanism: '0.1–2% 濃度促進角質形成細胞增殖；pH 中性，無酸性刺激。',
    note: '許多診所開立的術後藥膏配方中已含此成分。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  // ================================================================
  // GROUP B — 差異燈號（五種治療間有實質差異）
  // ================================================================

  {
    id: 'petrolatum',
    name: '凡士林',
    nameEn: 'Petrolatum / White Petrolatum',
    group: 'B',
    groupLabel: '治療間差異大',
    lights: {
      flattop:    'caution',
      liob:       'safe',
      fractional: 'safe',
      peel:       'caution',
      hydra:      'danger',
    },
    timing: {
      flattop:    'Day 2 起（若需要；選輕薄修復霜替代更佳）',
      liob:       'Day 1 起，結痂脫落前主動使用',
      fractional: 'Day 1–4，以診所開立藥膏為主（通常含 Petrolatum 基底）',
      peel:       'Day 1–2 可；Day 3–6 脫皮期謹慎',
      hydra:      '不建議',
    },
    why: '封鎖性保濕劑（物理封膜），適用與否取決於術後護理目標。',
    mechanism: 'LIOB/點陣皮秒結痂需封護；平頂無明顯傷口，輕薄修護霜即可；換膚脫皮期封膜干擾代謝；水飛梭封膜與清潔毛孔目標矛盾。',
    note: '平頂光束無明顯傷口，建議選含 Ceramide + Centella 的修復霜替代凡士林。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'niacinamide',
    name: '菸鹼醯胺',
    nameEn: 'Niacinamide (Vitamin B3)',
    group: 'B',
    groupLabel: '治療間差異大',
    lights: {
      flattop:    'caution',
      liob:       'caution',
      fractional: 'caution',
      peel:       'caution',
      hydra:      'safe',
    },
    timing: {
      flattop:    'Day 5 起，濃度 ≤5%',
      liob:       'Day 7 起，濃度 ≤5%（結痂期微孔道開放，延後更安全）',
      fractional: 'Day 7 起，濃度 ≤5%',
      peel:       'Day 5 起（脫皮尾聲），濃度 ≤5%',
      hydra:      'Day 2 起，正常濃度（2–10%）皆可',
    },
    why: '抗發炎、抑制黑色素轉移、強化屏障；高濃度或過早使用有刺激風險。',
    mechanism: '菸鹼醯胺在微孔道開放時可能轉換為菸鹼酸造成潮紅；LIOB/點陣皮秒建議比平頂更晚導入。水飛梭屏障輕傷，早期即可安全使用。',
    note: '市售精華液菸鹼醯胺常達 10–20%，三種皮秒和換膚請選 ≤5% 配方。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'tranexamic-acid',
    name: '傳明酸',
    nameEn: 'Tranexamic Acid',
    group: 'B',
    groupLabel: '治療間差異大',
    lights: {
      flattop:    'caution',
      liob:       'caution',
      fractional: 'caution',
      peel:       'caution',
      hydra:      'safe',
    },
    timing: {
      flattop:    'Day 5 起',
      liob:       'Day 6 起（結痂代謝後）',
      fractional: 'Day 7 起（回診確認後）',
      peel:       'Day 7 起（脫皮完成後）',
      hydra:      'Day 3 起',
    },
    why: '預防 PIH 反黑的核心成分，屏障穩定後導入效果最佳。',
    mechanism: '傳明酸 pH 接近中性、刺激性低，但皮秒前幾天微孔開放建議等屏障穩定再導入。點陣皮秒屏障損傷最重，需等最久。',
    note: '傳明酸是術後抗 PIH 首選（比維C刺激性低很多），時機對了效果顯著。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'vitamin-c-derivative',
    name: '維生素C衍生物',
    nameEn: 'Vit-C Derivatives: AA2G (Ascorbyl Glucoside), SAP (Sodium Ascorbyl Phosphate)',
    group: 'B',
    groupLabel: '治療間差異大',
    lights: {
      flattop:    'caution',
      liob:       'caution',
      fractional: 'caution',
      peel:       'caution',
      hydra:      'safe',
    },
    timing: {
      flattop:    'Day 7 起（衍生物）；原型 L-抗壞血酸 Day 14 後',
      liob:       'Day 7 起（衍生物）；原型 Day 14 後',
      fractional: 'Day 14 起（衍生物）；原型 Day 14+ 回診確認',
      peel:       'Day 7 起（衍生物）；原型 Day 14 後',
      hydra:      'Day 3 起（衍生物）；Day 7 起（原型）',
    },
    why: '衍生物 pH 接近中性，刺激性遠低於原型；點陣皮秒屏障損傷最重，需等最久。',
    mechanism: '磷酸型（SAP）、葡萄糖苷型（AA2G）pH 近中性，遠比原型 L-抗壞血酸（pH 2.5–3.5）溫和。',
    note: '術後請先選衍生物、等對時機，別急著用原型 Vitamin C。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'retinol',
    name: 'A醇 / 維A酸',
    nameEn: 'Retinol / Retinaldehyde / Tretinoin',
    group: 'B',
    groupLabel: '治療間差異大',
    lights: {
      flattop:    'danger',
      liob:       'danger',
      fractional: 'danger',
      peel:       'danger',
      hydra:      'caution',
    },
    timing: {
      flattop:    '至少 Day 14 後',
      liob:       '至少 Day 14 後',
      fractional: '至少 Day 14 後，建議回診確認',
      peel:       '至少 Day 14 後，建議回診確認',
      hydra:      'Day 4–5 起（低濃度 0.025% Retinol）；tretinoin 建議 Day 7 後',
    },
    why: '強力促進細胞代謝，術後發炎期使用加劇刺激與 PIH 風險。',
    mechanism: '三種皮秒＋換膚：真皮已有傷害，維A酸促代謝＝複合刺激，可能誘發嚴重 PIH。水飛梭：表皮傷害輕微，恢復後耐受性回升快，從低濃度重新導入。',
    note: '即使皮膚「看起來好了」，三種皮秒和換膚也請等滿 14 天。這是術後最常見的破功成分。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'aha',
    name: '果酸（α-羥基酸）',
    nameEn: 'AHA: Glycolic Acid, Lactic Acid, Mandelic Acid',
    group: 'B',
    groupLabel: '治療間差異大',
    lights: {
      flattop:    'danger',
      liob:       'danger',
      fractional: 'danger',
      peel:       'danger',
      hydra:      'caution',
    },
    timing: {
      flattop:    '至少 Day 14 後',
      liob:       '至少 Day 14 後',
      fractional: '至少 Day 14 後',
      peel:       '至少 Day 14 後（換膚本身即酸蝕，術後重複使用是雙重化學傷害）',
      hydra:      '48–72 小時後可謹慎恢復',
    },
    why: 'pH 低（通常 3–4），屏障破損下直接造成化學刺激，加速 PIH 前驅反應。',
    mechanism: '三種皮秒術後黑色素細胞高度活躍，酸類低 pH 可直接觸發黑色素大量合成。水飛梭含酸步驟，48hr 後屏障大致恢復。',
    note: '杏仁酸分子量最大、刺激性最低，水飛梭後若急著恢復酸類，杏仁酸是相對保守的選擇。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'bha',
    name: '水楊酸（β-羥基酸）',
    nameEn: 'BHA: Salicylic Acid',
    group: 'B',
    groupLabel: '治療間差異大',
    lights: {
      flattop:    'danger',
      liob:       'danger',
      fractional: 'danger',
      peel:       'danger',
      hydra:      'caution',
    },
    timing: {
      flattop:    '至少 Day 14 後',
      liob:       '至少 Day 14 後',
      fractional: '至少 Day 14 後',
      peel:       '至少 Day 14 後',
      hydra:      '48–72 小時後',
    },
    why: '油溶性去角質，穿透毛孔能力強，術後微孔開放時滲透深度更不可控。',
    mechanism: '水楊酸脂溶性讓它穿透角質層進入毛孔壁，術後脆弱微孔下刺激更深層。水飛梭本身含水楊酸步驟，48hr 後恢復臨床可接受。',
    note: '日常使用水楊酸者，術後請果斷暫停，等標準間隔再恢復。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'physical-sunscreen',
    name: '防曬乳（物理性）',
    nameEn: 'Physical Sunscreen: Zinc Oxide, Titanium Dioxide',
    group: 'B',
    groupLabel: '治療間差異大',
    lights: {
      flattop:    'caution',
      liob:       'caution',
      fractional: 'caution',
      peel:       'caution',
      hydra:      'safe',
    },
    timing: {
      flattop:    'Day 2 起（選輕薄流體型 SPF50）',
      liob:       'Day 5 起（結痂代謝後）；結痂期以帽子、傘、口罩替代',
      fractional: 'Day 6–7 起（大部分結痂脫落後）',
      peel:       'Day 2 起（選輕薄劑型）；脫皮高峰期帽傘優先',
      hydra:      'Day 1 起',
    },
    why: '成分（氧化鋅、二氧化鈦）安全無虞；關鍵是劑型，厚重劑型在結痂/脫皮期干擾代謝。',
    mechanism: '氧化鋅和二氧化鈦化學惰性極高，無刺激問題。但乳霜/膏狀基劑在開放微孔期可能引發接觸反應，選流體型（Fluid SPF）最安全。',
    note: '三種皮秒結痂期防曬的核心是「帽子、傘、口罩」，不是防曬乳。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  // ================================================================
  // GROUP C — 條件綠燈
  // ================================================================

  {
    id: 'peptides',
    name: '肽類（胜肽）',
    nameEn: 'Peptides (Signal, Carrier, Neurotransmitter types)',
    group: 'C',
    groupLabel: '等待期各不同',
    lights: {
      flattop:    'caution',
      liob:       'caution',
      fractional: 'caution',
      peel:       'safe',
      hydra:      'safe',
    },
    timing: {
      flattop:    'Day 5 起（確認配方無酸/酒精）',
      liob:       'Day 5 起（確認配方）',
      fractional: 'Day 5–7 起（確認配方）',
      peel:       'Day 3 起（確認配方）',
      hydra:      'Day 1–2 起',
    },
    why: '肽類本身幾乎無刺激性，風險主要來自複方中的其他成分（酸類、酒精、防腐劑）。',
    mechanism: '信號胜肽刺激纖維母細胞合成膠原，對術後膠原重塑有正面幫助。前幾天急性期統一延後導入，降低配方混用的不確定性。',
    note: '使用前請確認成分列表無 Alcohol denat.、Fragrance 或任何 Acid 字樣。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'egf',
    name: 'EGF 表皮生長因子',
    nameEn: 'Epidermal Growth Factor (EGF / sh-Oligopeptide-1)',
    group: 'C',
    groupLabel: '等待期各不同',
    lights: {
      flattop:    'caution',
      liob:       'caution',
      fractional: 'caution',
      peel:       'caution',
      hydra:      'caution',
    },
    timing: {
      flattop:    'Day 3 起（選醫療級品牌，確認配方）',
      liob:       'Day 3 起',
      fractional: 'Day 3 起（確認診所許可）',
      peel:       'Day 3 起',
      hydra:      'Day 1 起（配方安全者）',
    },
    why: '促進上皮增殖，理論上加速癒合；但市售品質差異極大，劣質配方可能含刺激成分。',
    mechanism: 'EGF 與細胞受體結合促進角質形成細胞增殖。蛋白質分子大、經皮吸收率存疑；部分產品含酒精或防腐劑，選醫療通路品牌更安全。',
    note: '請實際閱讀成分列表，基劑安全性比成分名稱更重要。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  // ================================================================
  // GROUP D — 全紅燈
  // ================================================================

  {
    id: 'alcohol-denat',
    name: '變性酒精',
    nameEn: 'Alcohol Denat. / Ethanol / SD Alcohol',
    group: 'D',
    groupLabel: '術後全面禁用',
    lights: {
      flattop:    'danger',
      liob:       'danger',
      fractional: 'danger',
      peel:       'danger',
      hydra:      'danger',
    },
    timing: {
      flattop:    '至少 Day 7 後，建議術後全程避免',
      liob:       '至少 Day 7 後，建議術後全程避免',
      fractional: '至少 Day 7 後，建議術後全程避免',
      peel:       '至少 Day 7 後，建議術後全程避免',
      hydra:      '至少 Day 3 後',
    },
    why: '強力乾燥劑，揮發時帶走皮膚水分，加劇術後屏障損傷。',
    mechanism: '溶解角質層脂質，破壞已受損的屏障脂質結構，且干擾抗菌胜肽，增加感染風險。',
    note: '化妝水、爽膚水常含酒精，術後請直接檢查成分表，看到 Alcohol 即暫停。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'fragrance',
    name: '香料 / 精油',
    nameEn: 'Fragrance / Parfum / Essential Oils',
    group: 'D',
    groupLabel: '術後全面禁用',
    lights: {
      flattop:    'danger',
      liob:       'danger',
      fractional: 'danger',
      peel:       'danger',
      hydra:      'danger',
    },
    timing: {
      flattop:    '至少 Day 14 後',
      liob:       '至少 Day 14 後',
      fractional: '至少 Day 14 後',
      peel:       '至少 Day 14 後',
      hydra:      '至少 Day 7 後',
    },
    why: '術後肌膚敏感化，香料是接觸性過敏最常見的誘發原，術後致敏風險大幅提升。',
    mechanism: '香料過敏原（如 Linalool、Limonene）在術後開放性微損傷下直接接觸免疫細胞，一旦致敏，未來接觸同類香料均可能反應。',
    note: '「天然精油」不等於安全——薰衣草、玫瑰、茶樹等術後同樣禁用。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'physical-scrub',
    name: '物理磨砂 / 去角質顆粒',
    nameEn: 'Physical Exfoliant: Scrub beads, Walnut shell, Sugar, Salt',
    group: 'D',
    groupLabel: '術後全面禁用',
    lights: {
      flattop:    'danger',
      liob:       'danger',
      fractional: 'danger',
      peel:       'danger',
      hydra:      'danger',
    },
    timing: {
      flattop:    '至少 Day 14 後',
      liob:       '至少 Day 14 後',
      fractional: '至少 Day 14 後',
      peel:       '至少 Day 14 後',
      hydra:      '至少 Day 7 後',
    },
    why: '機械性磨擦對術後皮膚不可逆——結痂或脫皮期使用等同於撕裂傷口。',
    mechanism: '物理顆粒的剪切力在術後破損表皮上直接造成微撕裂，加重色沉風險。',
    note: '洗臉機、音波震動清潔儀在 LIOB/點陣皮秒結痂期同樣禁用（震動摩擦力等效）。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

  {
    id: 'menthol-cooling',
    name: '薄荷醇 / 清涼劑',
    nameEn: 'Menthol / Camphor / Peppermint Extract',
    group: 'D',
    groupLabel: '術後全面禁用',
    lights: {
      flattop:    'danger',
      liob:       'danger',
      fractional: 'danger',
      peel:       'danger',
      hydra:      'danger',
    },
    timing: {
      flattop:    '至少 Day 7 後',
      liob:       '至少 Day 7 後',
      fractional: '至少 Day 7 後',
      peel:       '至少 Day 7 後',
      hydra:      '至少 Day 3 後',
    },
    why: '術後神經末梢高度敏感，刺激 TRPM8 冷感受器可能加劇不適感。',
    mechanism: '薄荷醇揮發性強，接觸開放性微創傷口時滲透刺激遠大於正常皮膚，且輕微血管擴張可能加重潮紅。',
    note: '術後搔癢最安全的處理是「冰敷隔布 15 分鐘」，不要用止癢產品替代。',
    category: ['flattop', 'liob', 'fractional', 'peel', 'hydra'],
  },

];

/* ============================================================
   輔助函式
   ============================================================ */

/** 取得特定治療的所有成分及其燈號 */
function filterByTreatment(treatment) {
  return ingredients.map(i => ({
    ...i,
    light: i.lights[treatment],
    time:  i.timing[treatment],
  }));
}

/** 取得特定治療 × 特定燈號的成分 */
function filterByLight(treatment, lightColor) {
  return filterByTreatment(treatment).filter(i => i.light === lightColor);
}

/** 燈號 → CSS class */
function getLightClass(light) {
  return { safe: 'tag-safe', caution: 'tag-caution', danger: 'tag-danger' }[light] || '';
}

/** 燈號 → 顯示文字 */
function getLightLabel(light) {
  return { safe: '🟢 安全', caution: '🟡 謹慎', danger: '🔴 禁用' }[light] || '';
}

/** 治療代碼 → 中文名稱 */
const treatmentLabels = {
  flattop:    '平頂光束',
  liob:       '蜂巢 LIOB',
  fractional: '點陣皮秒',
  peel:       '化學換膚',
  hydra:      '水飛梭',
};