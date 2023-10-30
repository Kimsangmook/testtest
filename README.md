# AI MVP Frontend

<br/>

## Run Project

<br/>

```
yarn
yarn dev

(ready on http://localhost:3000)
```

<br/>

## Project Structure

<br/>

```
│
├── src
│     └── components
│           └── common
│                 └── button
│                 └── textinput
│                 └── ...
│           └── layout
│     └── modules
│           └── root
│           └── steps
│     └── pages
│           └── steps
│     └── constants
│     └── store
│           └── solution
│     └── styles
│     └── utils
│           └── api
│           └── erorr
│
├── tailwind.config
├── env
└── READEME.md
```

## Tech Stacks

<br/>

- React
- Next.js
- React-Query
- Zustand
- Tailwind
- Styled-Components

<br/>

## API Parameters ([참고 링크](https://dshare.atlassian.net/wiki/spaces/AI/pages/1376387073/AI+2))

<br/>

### 번역 요청

<br/>

#### REQUEST

```
{
    "name": "번역",
    "id": 5,
    "value": "(영어원문)"
}

```

<br/>

#### RESPONSE

```
{
    "name": "번역",
    "id": 5,
    "result": "승리는 다른 사람들이 ..."
}
```

<br/>

### 지문변형

<br/>

#### REQUEST

```
{
    "name": "지문변형",
    "id": 1,
    "value": "When I came out of Mom's stomach..",
    "choices": [
        {
            "name": "문장길이",
            "id": 2,
            "value": "12문장",
            "__comment": "하위 초이스가 없는 경우, choices 필드 존재하지 않음."
        },
        {
            "name": "변형범위",
            "id": 3,
            "value": "",
            "choices": [
                {
                    "name": "어휘변형",
                    "id": 10,
                    "value": "",
                    "choices": [
                        {
                            "name": "고1",
                            "id": 13,
                            "value": ""
                        }
                    ]
                }
            ],
            "__comment": "변형없음/어휘변형/전체변형/주제변형. 변형없음을 제외하고 모두 어휘난이도 선택 필요.",
        }
    ]
}
```

<br/>

#### RESPONSE

```
{
    "name": "번역",
    "id": 5,
    "result": {
        "passage":"Winning turns on a self‐conscious awareness ...",
        ""translation":"승리는 다른 사람들이 지켜보고 있다는 자의식을 갖게 하며 ..."
    }
}
```

<br/>

### 유형 적용 (문제제작)

<br/>

#### REQUEST

- 유형 요청관련 파라미터가 빠진듯, 확인 필요

```
{
    "name": "번역",
    "id": 5,
    "value" : "(사용자가 에디팅 한 지문) When I came out of Mom's stomach ..."
}
```

<br/>

#### REQUEST

```
{
    "name": "번역",
    "id": 5,
    "result":"[passage]\n The evolutionary method operates on the genetic ..."
}
```
