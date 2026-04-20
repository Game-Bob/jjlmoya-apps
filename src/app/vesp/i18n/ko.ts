import type { AppCardContent } from '../../../types';
import type { VespLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'vesp',
    title: 'VESP: 칵테일 밸런서',
    subtitle: '믹솔로지: 밸런스 & 레시피',
    description:
        '전문적인 칵테일 밸런스, ABV, Brix 계산기 및 클래식 레시피.',
};

export const landingContent: VespLandingContent = {
    hero: {
        title: 'VESP',
        subtitle: '믹솔로지: 밸런스 & 레시피',
        philosophy:
            '모든 잔에서 과학적 완벽함을 추구하는 바텐더와 믹솔로지 애호가들을 위한 궁극의 기술 도구, VESP로 바의 일관성을 높이세요.',
        price: '무료',
        priceLabel: '구독 없음 • 즉각적인 액세스',
    },
    techSpecs: {
        label: '정밀 믹솔로지',
        conceptMain: '기술에 의한,',
        conceptHighlight: '품질.',
        description:
            '전문적인 칵테일 밸런스, ABV, Brix 계산기 및 클래식 레시피.',
        specsLabel: '기술 사양',
        features: [
            {
                title: 'ABV/Brix 밸런스',
                text: '밀도와 알코올 도수 제어.',
            },
            {
                title: '등록 불필요',
                text: '완벽한 로컬 오프라인 프라이버시.',
            },
            {
                title: '바 모드',
                text: '어두운 조명 아래서 빠른 가독성.',
            },
        ],
        tableRows: [
            { label: '밀도', value: '분석적' },
            { label: '도수 (ABV)', value: '교정됨' },
            { label: '당도 (BRIX)', value: '실시간' },
        ],
    },
    benefits: {
        titleMain: '밸런스',
        titleHighlight: '엔진.',
        description:
            '업계용으로 설계된 기술적 계산을 통해 알코올, 당도, 산도의 균형을 시각화합니다.',
        items: [
            {
                title: '과학적 밸런스',
                text: '알코올, 당도, 산도 간의 정확한 계산.',
                icon: 'mdi:flask-outline',
            },
            {
                title: '희석 교정',
                text: '기술별 조정: 쉐이크, 스터 또는 빌드.',
                icon: 'mdi:water-percent',
            },
            {
                title: '클래식 라이브러리',
                text: '데이터를 포함한 70개 이상의 레시피.',
                icon: 'mdi:book-open-variant',
            },
            {
                title: '크리에이터',
                text: '자신만의 시그니처 디자인 및 저장.',
                icon: 'mdi:creation',
            },
        ],
    },
    ecosystem: {
        title: 'VESP 에코시스템',
        subtitle: '믹솔로지 & 표준화',
        screenshots: ['mixer-mockup.webp', 'library-mockup.webp', 'ingredients-mockup.webp'],
    },
    footer: {
        titleMain: '서비스',
        titleHighlight: '완벽함.',
        cta: '지금 이용 가능',
    },
};
