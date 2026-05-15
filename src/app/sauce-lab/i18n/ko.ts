import type { SauceLabLandingContent, AppCardContent } from '../types';

export const cardContent: AppCardContent = {
    title: 'SauceLab',
    subtitle: '100개 이상의 아이코닉한 소스 레시피',
    description: '100개 이상의 아이코닉한 레시피와 전문적인 컬리너리 아틀라스로 소스 전문가의 기술을 마스터하세요.',
    slug: 'sauce-lab',
};

export const landingContent: SauceLabLandingContent = {
    card: cardContent,
    hero: {
        title: '소스 메이커의 예술',
        subtitle: '100개 이상의 아이코닉한 소스. 하나의 미식 걸작.',
        priceLabel: '100% 무료 · 구독 없음',
        comingSoon: '곧 스토어 출시 예정',
    },
    philosophy: {
        label: '철학',
        title: '컬리너리 헤리티지',
        description: 'SauceLab은 단순한 레시피 북이 아닙니다. 정밀함, 역사, 그리고 소스 과학을 중시하는 현대 셰프를 위해 큐레이팅된 맛의 아틀라스입니다. 우리는 소스를 마스터하는 것이 요리 우수성의 기초라고 믿습니다.',
    },
    benefits: {
        titleMain: '기술을',
        titleHighlight: '마스터하세요',
        items: [
            {
                title: '100개 이상의 아이코닉한 레시피',
                text: '5대 모체 소스부터 이국적인 글로벌 파생 소스까지. 모든 레시피는 전문가 수준의 정밀도로 테스트되었습니다.',
                icon: 'chef-hat',
            },
            {
                title: '맛의 화학',
                text: '맛 뒤에 숨겨진 "이유"를 이해하세요. 정확한 재료와 명확하고 전문적인 지침을 제공합니다.',
                icon: 'beaker',
            },
            {
                title: '오프라인 우선',
                text: '주방 어디에서나 작동합니다. 완벽한 소스를 만드는 데 인터넷 연결은 필요하지 않습니다.',
                icon: 'wifi-off',
            },
            {
                title: '트래커 없음',
                text: '광고 없음, 구독 없음, 데이터 수집 없음. 순수한 요리의 탁월함만을 추구합니다.',
                icon: 'shield-check',
            },
        ],
    },
    hierarchy: {
        label: '계보',
        titleMain: '신성한',
        titleHighlight: '계층 구조',
        description: '소스의 가계도를 탐색하세요. 기초가 되는 모체 소스부터 무한한 파생 소스까지.',
        items: [
            {
                name: '베샤멜',
                base: '우유 + 화이트 루',
                derivatives: ['모르네', '수비즈', '오로르', '낭튀아'],
            },
            {
                name: '벨루테',
                base: '화이트 스톡 + 블론드 루',
                derivatives: ['알망드', '슈프림', '베르시', '노르망드'],
            },
            {
                name: '에스파뇰',
                base: '브라운 스톡 + 브라운 루',
                derivatives: ['데미글라스', '보르델레즈', '로베르', '샤스뢰'],
            },
            {
                name: '홀랜다이즈',
                base: '달걀 노른자 + 버터 유화',
                derivatives: ['베아르네즈', '무슬린', '말테즈', '쇼롱'],
            },
            {
                name: '토마토',
                base: '토마토 + 화이트 스톡/루',
                derivatives: ['프로방살', '포르투게즈', '마리나라', '볼로네제'],
            },
        ],
    },
    chemistry: {
        label: '사이언스',
        titleMain: '분자 수준의',
        titleHighlight: '정밀함',
        description: '요리는 물리와 화학입니다. 완벽한 질감과 풍미 프로필을 만드는 기술적인 힘을 마스터하세요.',
        items: [
            {
                title: '유화 (Emulsification)',
                description: '기름과 물을 결합하는 예술. 홀랜다이즈와 마요네즈의 안정성 비결을 배우세요.',
            },
            {
                title: '졸이기 (Reduction)',
                description: '증발을 통해 풍미를 응축시킵니다. 완벽한 "나페" 농도를 달성하세요.',
            },
            {
                title: '걸쭉하게 만들기 (Thickening)',
                description: '전통적인 루부터 현대적인 전분 현탁액과 채소 퓌레까지.',
            },
            {
                title: '밸런스',
                description: '완벽한 맛의 노트를 맞추기 위해 산도, 염분, 지방을 조절하는 과학입니다.',
            },
        ],
    },
    atlas: {
        label: '가스트로 카토그래피',
        titleMain: '세계를',
        titleHighlight: '탐험하세요',
        description: '몰입형 지역 아틀라스를 통해 모든 풍미의 뿌리를 발견하세요. 프랑스 클래식부터 아시아의 발효 소스까지.',
    },
    fix: {
        label: 'Fix 모드',
        titleMain: '전문가용',
        titleHighlight: '복구',
        description: '모든 셰프는 소스가 분리되는 상황을 겪습니다. 전용 Fix 섹션이 복구 기술을 안내해 드립니다.',
        steps: [
            {
                num: '01',
                title: '문제 파악',
                description: '분리되었나요, 너무 묽나요, 아니면 간이 너무 센가요? 진단이 첫 번째 단계입니다.',
            },
            {
                num: '02',
                title: '해결책 적용',
                description: '온도 조절 또는 유화제 밸런스. 전문가의 기술을 마음껏 활용하세요.',
            },
            {
                num: '03',
                title: '최종 마무리',
                description: '완벽한 복원을 위해 농도와 최종 간을 조절합니다.',
            },
        ],
    },
    gallery: {
        title: '인터페이스',
    },
};
