import type { AppCardContent } from '../../../types';
import type { PizzametricsLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'pizzametrics',
    title: 'Pizzametrics',
    subtitle: '당신의 반죽이 마땅히 누려야 할 정밀함.',
    description:
        '과학적인 정밀함으로 재료, 수온, 발효 시간을 계산하세요. 매번 전문적인 결과를 원하는 피자 장인(pizzaiolos)들을 위해 설계되었습니다.',
};

export const landingContent: PizzametricsLandingContent = {
    hero: {
        titleMain: '나폴리 피자 계산기:',
        titleHighlight: '장인의 정밀함',
        titleEnd: '을 내 주머니에.',
        subtitle:
            '주방의 실제 온도에 맞춰 가수율, 이스트, 발효 시간을 조정하세요. 비가(Biga), 풀리시(Poolish), 직접 배합법과 호환됩니다.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
        downloadLabelStore: '다운로드',
        downloadLabelPlay: '다운로드',
        scanLabel: '스캔하여 지금 설치',
        tagline: '기술적 애호가를 위해 설계됨',
    },
    showCase: {
        feature1: {
            title: '기후 맞춤 조정',
            description: '춥거나 더운 날씨에 맞춰 정확한 이스트 양을 계산합니다.',
        },
        feature2: {
            title: '사전 발효종 관리',
            description: '복잡한 수동 계산 없이 비가와 풀리시를 조절하세요.',
        },
        feature3: {
            title: '반죽 기록장',
            description: '레시피와 사진을 저장하여 매번의 결과로부터 배우세요.',
        },
    },
    empathy: {
        title: '그 기분, 저희도 잘 압니다...',
        quote1: '더위 때문에 반죽이 과발효되었나요? Pizzametrics가 대신 시간을 조정해 드립니다.',
        quote2:
            '제빵사 비율 계산이 어려우신가요? 수학은 저희가 할 테니, 당신은 예술을 만드세요.',
        quote3:
            '밀가루가 떨어졌나요? "팬트리(Pantry)" 섹션이 반죽을 시작하기 전에 알려드립니다.',
    },
    pantry: {
        title: '당신만의 전용',
        titleHighlight: '밀가루 라이브러리',
        description:
            '모든 밀가루가 물을 똑같이 흡수하는 것은 아닙니다. "팬트리"에서 브랜드와 강도(W)별로 밀가루를 관리할 수 있습니다. 앱은 이 기술 데이터를 사용하여 계산을 조정하고 완벽한 코르니초네(cornicione)를 보장합니다.',
        descriptionHighlight: '팬트리',
        missionTitle: '글로벌 미션',
        missionSubtitle: '전 세계 피자 장인 커뮤니티를 위한 전문 도구입니다.',
    },
    gallery: {
        title: '프로용',
        titleHighlight: '인터페이스',
        imageAlt: '실제 앱 화면',
    },
    shorts: {
        titleMain: '앱',
        titleHighlight: '미리보기',
        subtitle:
            'Pizzametrics가 당신의 주방을 어떻게 정밀 실험실로 바꾸는지 빠르게 확인해 보세요.',
    },
    transparency: {
        quoteMain: '피자를 사랑하는 사람이,',
        quoteHighlight: '피자를 사랑하는 사람들을 위해 만들었습니다.',
        description:
            'Pizzametrics는 밀가루 묻은 수첩과 계산 실수를 없애기 위해 탄생했습니다. 당신의 다음 코르니초네를 위한 정확한 데이터만을 제공합니다.',
    },
    footer: {
        titleMain: '과학적인',
        titleHighlight: '피자 혁명에 동참하세요',
        privacyLabel: '개인정보 처리방침',
        termsLabel: '이용약관',
        scanLabel: '스캔하여 다운로드',
    },
};
