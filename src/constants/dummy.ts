// NOTE : 더미 API URL (번역, 지문 변형, 유형 적용(문제제작))
export const REQUEST_TRANSLATE_URL = "/gtp/id05.php";
export const REQUEST_TRANSLATE_VARATION_URL = "/gtp/id01.php";
export const REQUEST_SOLUTION_CREATE = "/gtp/id06.php";

export const REQUEST_TRANSLATE_RESPONSE = {
  name: "번역",
  id: 5,
  result:
    "당신이 이미 알고 있듯이, 무엇을 어떻게 구매하는지는 정치적일 수 있습니다. 당신은 누구에게 돈을 주고 싶은가요? 어떤 회사와 기업을 가치 있게 생각하고 존경하나요? 우리의 돈을 받는 기업들에 대해 신중하게 연구하여 그들이 우리의 지원을 받을 자격이 있는지 결정하기 위해 모든 구매에 대해 신중해야 합니다. 그들이 환경을 오염시키는 기록이 있는지, 아니면 공정무역 관행을 가지고 있고 제품의 수명이 끝날 때 계획을 가지고 있는지를 확인하십시오. 그들은 세상에 좋은 것을 가져오는데 전념하고 있나요? 예를 들어, 우리 가족은 사회적 양심을 가진 재활용 플라스틱 패키지 없는 화장지를 생산하는 회사를 찾았습니다. 그들은 이익의 50%를 세계 곳곳에 화장실을 건설하는데 기여하고, 우리는 매달 이 특별한 화장지에 돈을 지출하는 것에 진정으로 행복합니다. 기업 세계는 소비자 위에 구축되어 있으므로, 소비자로서 당신은 지갑으로 투표하고 모든 구매를 통해 회사들이 더 건강하고 지속 가능한 관행을 받아들이도록 장려할 수 있는 권력을 가지고 있습니다.",
};

export const REQUEST_TRANSLATE_VARIATION_RESPONSE = {
  name: "지문변형",
  id: 1,
  result: {
    passage:
      "1단계: 주요 어휘 추출\n1. buy\n2. political\n3. give\n4. value\n5. respect\n6. mindful\n7. purchase\n8. researching\n9. taking\n10. deserve\n11. support\n12. polluting\n13. committed\n14. producing\n15. contribute\n\n2단계: 난이도 변형\n1. buy -> purchase\n2. political -> global\n3. give -> provide\n4. value -> appreciate\n5. respect -> admire\n6. mindful -> aware\n7. purchase -> acquire\n8. researching -> examining\n9. taking -> receiving\n10. deserve -> merit\n11. support -> endorse\n12. polluting -> contaminating\n13. committed -> dedicated\n14. producing -> creating\n15. contribute -> donate\n\n3단계: 완성된 지문\nAs you may already know, what and how you **purchase** can be **global**. To whom do you want to **provide** your money? Which companies and corporations do you **appreciate** and **admire**? Be **aware** about every **acquire**. Carefully **examine** the corporations that are **receiving** our money. Decide if they **merit** our **endorsement**. Do they have a record of **contaminating** the environment? Or do they have fairtrade practices and an endoflife plan for the products they make? Are they **dedicated** to bringing about good in the world? For instance, my family has found a company **creating** recycled, plasticpackagingfree toilet paper with a social conscience. They **donate** 50 percent of their profits to the construction of toilets around the world. We're genuinely happy to spend our money on this special toilet paper each month. Remember that the corporate world is built on consumers. As a consumer, you have the power to vote with your wallet. Encourage companies to embrace healthier and more sustainable practices with every purchase you choose to make.",
  },
};

export const REQUEST_SOLUTION_CREATE_RESPONSE = {
  name: "대의파악",
  id: 6,
  result: `Question: 다음 글에서 필자가 주장하는 바로 가장 적절한 것은?\n\nPassage: As you may already know, what and how you purchase can be global. To whom do you want to provide your money? Which companies and corporations do you appreciate and admire? Be aware about every acquire. Carefully examine the corporations that are receiving our money. Decide if they merit our endorsement. Do they have a record of contaminating the environment? Or do they have fairtrade practices and an endoflife plan for the products they make? Are they dedicated to bringing about good in the world? For instance, my family has found a company creating recycled, plasticpackagingfree toilet paper with a social conscience. They donate 50 percent of their profits to the construction of toilets around the world. We're genuinely happy to spend our money on this special toilet paper each month. Remember that the corporate world is built on consumers. As a consumer, you have the power to vote with your wallet. Encourage companies to embrace healthier and more sustainable practices with every purchase you choose to make.\n\nChoices:\n1. 소비자들은 구매를 통해 환경을 오염시키는 기업에 반대하는 투표권을 가지고 있다.\n2. 소비자들은 자신의 지갑으로 세상을 바꿀 수 있는 힘을 가지고 있다.\n3. 환경 친화적인 제품을 만드는 기업에게만 소비자들은 돈을 지불해야 한다.\n4. 소비자들은 구매를 통해 기업의 지속 가능한 관행을 장려할 수 있다.\n5. 소비자들은 자신이 지불하는 돈이 어떤 기업에게 가는지 신중하게 판단해야 한다.\n\nAnswer: 4. 소비자들은 구매를 통해 기업의 지속 가능한 관행을 장려할 수 있다.`,
};
